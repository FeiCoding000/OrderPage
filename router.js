const { constants } = require('buffer');
const express=require('express');
const router=express.Router();
const fs=require('fs');
const orderList=require('./files/data.json').order;


router.use('/home',express.static('./files'))



//post new order
router.post('/order',(req,res)=>{
    console.log("Post button working!");
    console.log(orderList);
    //assign new order id
    const ids= orderList.map(order=>order.id);
    const newId=Math.max(...ids,0)+1;
    console.log(newId);
    //get body.coffeetype
    const {type,strength,milk}=req.body;
    //create new order
    const newOrder={
        id:newId,
        type:type,
        strength:strength,
        milk:milk,
        status:false
    };
    //push new order to orderList
    orderList.push(newOrder);
    console.log(orderList);
    //save orderList to data.json
    const data=JSON.stringify({order:orderList
    });
    fs.writeFile('./files/data.json',data,(err)=>{    
        if(err) throw err;  
    })
    res.status(200).json({
        status:'success',
        message:'Order placed successfully!',
        data:orderList
    });

});

//get all orders
router.get('/orders',(req,res)=>{
    console.log("Get button working!");
    console.log(orderList);
    res.status(200).json({
        status:'success',
        message:'Order list fetched successfully!',
        data:orderList
    });
})

module.exports=router;