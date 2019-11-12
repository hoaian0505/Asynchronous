//Bất đồng bộ dùng Async-Await
  
  function printNumber(number){
    return new Promise((resolve, reject) => {
      setTimeout(
        function(){
            if(number<0){
                reject(); 
            }else{
                console.log(number)
                resolve()
            }
        }, 
       Math.floor(Math.random() * 1000) + 1
      )
    })
  }
   
  async function printAll(){
    await printNumber(1);
    await printNumber(2);
    await printNumber(3);
    await printNumber(4);
    await printNumber(5);
  }
  printAll();