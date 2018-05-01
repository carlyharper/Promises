// Part 2 - Promise.all()

// var urls = [
//   'https://dog.ceo/api/breed/beagle/images/random',
//   'https://dog.ceo/api/breed/chow/images/random',
//   'https://dog.ceo/api/breed/akita/images/random',
//   'https://dog.ceo/api/breed/dingo/images/random',
//   'https://dog.ceo/api/breed/eskimo/images/random'
// ];

// Use Promise.all() to retreive all of the URLs above. After it's done, console log "all the data was fetched!"



var Prom1 = $.get('https://dog.ceo/api/breed/beagle/images/random');
var Prom2 = $.get('https://dog.ceo/api/breed/chow/images/random');
var Prom3 = $.get('https://dog.ceo/api/breed/akita/images/random');
var Prom4 = $.get('https://dog.ceo/api/breed/dingo/images/random');
var Prom5 = $.get('https://dog.ceo/api/breed/eskimo/images/random');

Promise.all([Prom1, Prom2, Prom3, Prom4, Prom5]).then(function(){
    console.log('all the data was fetched!');
});