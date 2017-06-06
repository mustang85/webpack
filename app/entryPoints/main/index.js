// alias
// require('styles/main');
require('./styles/main');

const api = require('Api/users').default;
const $ = require('jquery');
const users = api.getUsers();
const sectionThreeSolution = require('sectionTheeSolution');
const welcomeUser = require('welcomeUser');
require('reactApp');
require('typescript/appConfig');
// console.log('hello world');
// console.log(api.getUsers());

console.log(process.env.NODE_ENV);

sectionThreeSolution('USD', fxRates => console.log(fxRates));


// $.each(users, function(index, user) {
//   $(document.body).append(`<p>name ${user.name}, age ${user.age}</p>`);
// });

welcomeUser('Jones');
