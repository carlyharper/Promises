// Part 1 - .then() chaining

// Given an array of urls:

// var urls = [
//   'https://dog.ceo/api/breed/beagle/images/random',
//   'https://dog.ceo/api/breed/chow/images/random',
//   'https://dog.ceo/api/breed/akita/images/random',
//   'https://dog.ceo/api/breed/dingo/images/random',
//   'https://dog.ceo/api/breed/eskimo/images/random'
// ];
// Use $.get() and a chain of .then() calls to fetch these URLs one by one. After each .get() is done, console log "data was fetched!"

$.get('https://dog.ceo/api/breed/beagle/images/random').then(function(){
    console.log('data was fetched!');
    $.get('https://dog.ceo/api/breed/chow/images/random');
}).then(function(){
    console.log('data was fetched!');
    $.get('https://dog.ceo/api/breed/akita/images/random');
}).then(function(){
    console.log('data was fetched!');
    $.get('https://dog.ceo/api/breed/dingo/images/random');
}).then(function(){
    console.log('data was fetched!');
    $.get('https://dog.ceo/api/breed/eskimo/images/random');
}).catch(function(error){
    console.log(error);
});