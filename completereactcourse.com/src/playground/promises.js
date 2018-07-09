const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('resolved'); // can resolve only ONce and with a single argument

    reject('something is wrong!')
    
  }, 1500);
})

promise.then((data) => {
  console.log(data);
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('this is my other promise')
    }, 3000);
  })
})
.then(someDataString => {
  console.log(someDataString);
})
.catch((err) => {
  console.log(err)
})


// Syntax

