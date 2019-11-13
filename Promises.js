//Bất đồng bộ dùng Promises
var Timeout1;

function printNumber(number){
    if (number==3)
          Timeout1=10000;
        else if (number==4)
          Timeout1=1000;
        else if (number==5)
          Timeout1=2000;
      
    return new Promise((resolve, reject)=>{
      setTimeout(
        function() {
          if(number<0){
            reject(); 
          }else{
             console.log(number);
             resolve();
          }
        }, 
        Timeout1
        //Math.floor(Math.random() * 1000) + 1  
      )
    })
}

printNumber(1)
.then(()=>printNumber(2))
.then(()=>printNumber(3))
.then(()=>printNumber(4))
.then(()=>printNumber(5))

/*printNumber(1);
printNumber(2);
printNumber(3);
printNumber(4);
printNumber(5);*/
