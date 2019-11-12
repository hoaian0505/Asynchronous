
//Bất đồng bộ dùng Async-CallBack
function printNumber(number, callback){
  setTimeout(
    function(){
      console.log(number)
      callback()
    },
    Math.floor(Math.random() * 1000) + 1
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
