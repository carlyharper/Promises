// Part 3 - Resolve Reject

// Write a function called addNumbers(x, y) that returns a new Promise() that adds two numbers and resolves the answer. However, if the two inputs provided are not both numbers reject the promise. The API should work like the following:

// addNumbers(x, y)
//    .then(function (answer) {
//       console.log(answer);
//    })
//    .catch(function (error) {
//       console.log(error);
//    });

function addNumbers(x, y) {
    var p = new Promise(function(resolve, reject){
        if (x != NaN && y != NaN) {
            resolve(x+y);
        } else {
            reject('Both of your values need to be numbers');
        }
    });
    return p;
}

addNumbers(3, 4)
   .then(function (answer) {
      console.log(answer);
   })
   .catch(function (error) {
      console.log(error);
   });


