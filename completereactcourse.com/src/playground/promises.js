const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('resolved'); // can resolve only ONce and with a single argument

    reject('something is wrong!')
    
  }, 1500);
})

promise.then((data) => {
  console.log(data);
  
}).catch((err) => {
  console.log(err)
})


// Syntax

