

// clearInterval(intervalId);
let Sec= 1
let newSec;
let min =1;
let nMin;
let ms=1;
let nMs;
let intervalId ;
let intervalIdM;
let intervalIdMs;

document.getElementById('start').addEventListener('click', function(){
    
   

     intervalId = setInterval (()=>{

    //    console.log(Sec++);

      if(newSec==59){

         Sec =0;
      }
       newSec= Sec++;
       document.getElementById('sec').innerText= newSec;
    
    }, 1000)
     intervalIdMs = setInterval (()=>{

    //    console.log(Sec++);

      if(nMs==9){

         ms =0;
      }
       nMs= ms++;
       document.getElementById('ms').innerText= nMs;
    
    }, 50)

     intervalIdM = setInterval (()=>{
        //    console.log(Sec++);
        if(nMin == 59){
         
        }

           nMin= min++;
           document.getElementById('min').innerText= nMin;
        
        }, 60000)

        document.getElementById('start').disabled = true;
    

})

document.getElementById('stop').addEventListener('click', function(){

   clearInterval(intervalId);
   clearInterval(intervalIdM);
   clearInterval(intervalIdMs);
   document.getElementById('start').disabled = false;
   
})
document.getElementById('reset').addEventListener('click', function(){
  
   document.getElementById('sec').innerText= '00';
   document.getElementById('min').innerText= '00';
   document.getElementById('ms').innerText= '00';
   Sec=1;
   min=1;
   ms=1;

   document.getElementById('start').disabled = false;

  
})