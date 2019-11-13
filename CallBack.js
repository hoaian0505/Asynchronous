
//Bất đồng bộ dùng Async-CallBack
var Timeout1;

function printNumber(number, callback){
  if (number==3)
    Timeout1=10000;
  else if (number==4)
    Timeout1=1000;
  else if (number==5)
    Timeout1=2000;
  setTimeout(
    function(){
      console.log(number)
      callback()
    },
    Timeout1
  )
}
 
function printNumber2(number){
  if (number==3)
    Timeout1=10000;
  else if (number==4)
    Timeout1=1000;
  else if (number==5)
    Timeout1=2000;
  setTimeout(
    function(){
      console.log(number)
    },
    //Math.floor(Math.random() * 1000) + 1
    Timeout1
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

//printAll();

function printAll2(){
  printNumber2(1);
  printNumber2(2);
  printNumber2(3);
  printNumber2(4);
  printNumber2(5);
}

printAll2();
