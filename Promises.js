//Bất đồng bộ dùng Promises
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
        }, Math.floor(Math.random() * 1000) + 1  
      )
    })
}

printNumber(1)
.then(()=>printNumber(2))
.then(()=>printNumber(3))
.then(()=>printNumber(4))
.then(()=>printNumber(5))
