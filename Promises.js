//Bất đồng bộ dùng Promises
var Timeout;

function printNumber(number){
    return new Promise((resolve, reject)=>{
      setTimeout(
        function() {
        if(number<0){
         reject(); 
         }else{
             console.log(number);
             resolve();
         }
         if (number==2)
            Timeout=10000;
          else if (number==3)
            Timeout=1000;
          else if (number==4)
            Timeout=2000;
        }, 
        Timeout
        //Math.floor(Math.random() * 1000) + 1  
      )
    })
}

printNumber(1)
.then(()=>printNumber(2))
.then(()=>printNumber(3))
.then(()=>printNumber(4))
.then(()=>printNumber(5))
