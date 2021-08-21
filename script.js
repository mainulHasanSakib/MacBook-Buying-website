const memoryPrice = document.getElementById('memoryPrice');
const ssdPrice=document.getElementById('ssdPrice');
const deliveryPrice=document.getElementById('deliveryCost');
const totalPrice=document.getElementById('total');
const lastPrice=document.getElementById('endTotal');

// total calculation
function sumTotal(){
   const price1= parseFloat(memoryPrice.innerText);
   const price2= parseFloat(ssdPrice.innerText);
   const price3= parseFloat(deliveryPrice.innerText);
   const price4= 1299;
   const grandTotal= price1 + price2 + price3 + price4 ;
   totalPrice.innerText=grandTotal;
   lastPrice.innerText=grandTotal;
}

// memory section 
document.getElementById('memory1').addEventListener('click' , function(){
   memoryPrice.innerText=0;
   sumTotal()
})
document.getElementById('memory2').addEventListener('click' , function(){
   memoryPrice.innerText=180;
   sumTotal()
})
// ssd section 
document.getElementById('ssd1').addEventListener('click' , function(){
   ssdPrice.innerText=0;
   sumTotal()
})
document.getElementById('ssd2').addEventListener('click' , function(){
   ssdPrice.innerText=150;
   sumTotal()
})
document.getElementById('ssd3').addEventListener('click' , function(){
   ssdPrice.innerText=180;
   sumTotal()
})
// delivery section 
document.getElementById('deliveryFree').addEventListener('click' , function(){
   deliveryPrice.innerText=0;
   sumTotal()
})
document.getElementById('deliveryPaid').addEventListener('click' , function(){
   deliveryPrice.innerText=20;
   sumTotal()
})


  