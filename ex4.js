let dropButteredToastOnFloor = (success, failure) => {
    let drop = Math.random();
    if (drop < 0.5) {
       console.log("Landed butter-side up!");
       success();
    } else {
       console.log("Landed butter-side down...");
       failure();
    }
 }

function dropToastPromisified() {
    return new Promise(function(resolve, reject){
        //call dropButteredToastOnFloor
        dropButteredToastOnFloor(function(){ //lines 15-18 could also be written as 
            resolve()                        //dropButteredToastOnFloor(resolve, reject);
        }), function(){
            reject()
        };
    });
}

dropToastPromisified().then(function(){
    console.log('hooray')
}).catch(function(){
    console.log('boo')
});
