// lab test 1 - question 2

// resolvedPromise function
function resolvedPromise() {
  return new Promise((resolve) => {

    setTimeout(() => {

      resolve({'message': 'delayed success!'});

    },500);
    
  });
}
// rejectedPromise function
function rejectedPromise() {
  return new Promise((reject) =>{

  setTimeout(() => {

    // throwing error - let error = new Error('delayed exception!');
    let error = {'error': 'delayed exception!'}; 

     reject(error);

  },500);
  
  });
}

// calling the functions to print the output
  resolvedPromise().then((result) => console.log(result)).catch((error) => console.log(error));

  rejectedPromise().then((result) => console.log(result)).catch((error) => console.log(error));


