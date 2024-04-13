let increment  = document.getElementById('Increment');
let reset =  document.getElementById('Reset');
let decrement = document.getElementById('Decrement');
let Counter = document.getElementById('Counter');

let Count = 0;
Counter.innerText = Count;


 increment.addEventListener('click', ()=>{
    Count = Count + 1;
    Counter.innerText = Count;
    colorChange()
});
decrement.addEventListener('click', ()=>{
    Count = Count - 1;
    Counter.innerText = Count;
    colorChange()
});
reset.addEventListener('click', ()=>{
    Count = 0;
    Counter.innerText = Count;
});

function colorChange(){
   if(Count < 0){
   Counter.style.color = "red"
   }
   else if(Count > 0){
    Counter.style.color = "green"
   }
   else{
    Counter.style.color = "black"
   }
}
