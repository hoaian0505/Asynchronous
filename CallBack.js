
//Bất đồng bộ dùng Async-CallBack
var Timeout;

function printNumber(number, callback){
  setTimeout(
    function(){
      console.log(number)
      if (number==2)
        Timeout=10000;
      else if (number==3)
        Timeout=1000;
      else if (number==4)
        Timeout=2000;
      callback()
    },
    Timeout
  )
}
 
function printNumber2(number){
  setTimeout(
    function(){
      console.log(number)
    },
    Math.floor(Math.random() * 1000) + 1
  )
}

function printAll(){
  printNumber(1, function(){
    printNumber(2, function(){
      printNumber(3, function(){
        printNumber(4, function(){
          printNumber(5, function(){
          })
        })
      })
    })
  })
}

printAll();

function printAll2(){
  printNumber2(1);
  printNumber2(2);
  printNumber2(3);
  printNumber2(4);
  printNumber2(5);
}

//printAll2();
