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
    var promise = new Promise(function(resolve, reject){
        if (!(isNaN(x)) && isNaN(y)) {
            resolve(x+y);
        } else {
            reject('Both of your values need to be numbers');
        }
    });
    return promise;
}

addNumbers("x", 4)
    .then(function (answer){
        console.log(answer)
    })
    .catch(function (error) {
        console.log(error)
    })




