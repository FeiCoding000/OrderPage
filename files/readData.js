
//get orderlist from server
function getOrderList(){
    console.log('getting orderlist fired');
    const url='http://localhost:8080/orders';
    axios.get(url)
    .then(function(res){
        console.log(res);
    })
    .catch(function(err){
        console.log(err);
    })
}





function displayOrderList(){
    const fetchedData=readData();
    console.log(fetchedData);
    const list= document.getElementById('order-list');
    fetchedData.forEach((item)=>{
        const listItem=document.createElement('li');
        listItem.innerText=`${item.name} ${item.type} ${item.strength} ${item.milk}`;
        list.appendChild(listItem);
    })
}

displayOrderList();