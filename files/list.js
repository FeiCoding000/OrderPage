//post order
const btnSubmit=document.getElementById('submit-classic');
btnSubmit.addEventListener('click',function(){
    postOrder();
    console.log('post order fired')
});

const btnSubmitDecaf=document.getElementById('submit-decaf');
btnSubmitDecaf.addEventListener('click',function(){
    postOrderDecaf();
    console.log('post order fired')
})



function postOrderDecaf(){
    const url='http://localhost:8080/order';    
    const order={
        type:document.getElementById('type_decaf').value,
        strength:document.getElementById('strength_decaf').value,
        milk:document.getElementById('milk_decaf').value 
    }
    axios.post(url,order)
    .then(function(res){
        console.log(res);
        alert('order submitted');
    
    })
    .catch(function(err){
        console.log(err);
    })
}

function postOrder(){
    const url='http://localhost:8080/order';    
    const order={
        type:document.getElementById('type_classic').value,
        strength:document.getElementById('strength_classic').value,
        milk:document.getElementById('milk_classic').value 
    }
    axios.post(url,order)
    .then(function(res){
        console.log(res);
        alert('order submitted');
    
    })
    .catch(function(err){
        console.log(err);
    })
}

//get order

//get orderlist from server
function getOrderList(){
    console.log('getting orderlist fired');
    const url='http://localhost:8080/orders';
    axios.get(url)
    .then(function(res){
        console.log(res);
        fetchedData=res.data.data;
        console.log('fetched data',fetchedData);
        //remove all child elements from the list
        const orderList=document.getElementById('order-list');
        while(orderList.firstChild){
            orderList.removeChild(orderList.firstChild);
        }
        fetchedData.forEach((item)=>{
            const orderList=document.getElementById('order-list');
            const listItem=document.createElement('li');
            listItem.innerHTML=`<p>Order number: ${item.id}, ${item.type}, Strength: ${item.strength}, Milk: ${item.milk}, Status: ${item.status}</p>`;
            const orderId=item.id;
            const button=document.createElement('button');
            button.innerHTML='delete';
            //edit this later
            button.addEventListener('click', function(){
                console.log('clicked');
                console.log(orderId);
            });
            
            listItem.appendChild(button);
            orderList.appendChild(listItem);
        })
    })
    .catch(function(err){
        console.log(err);
    })
}








//delete order

