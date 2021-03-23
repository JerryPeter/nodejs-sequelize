const { Sequelize } = require('sequelize');

const bcrypt = require('bcrypt');

const faker = require('faker');

const models = require('./models');

const saltRounds = 10;

const password = 'qwerty';

const otherPassword = 'not_bacon';


// function generatePassword(pass){
//   const saltRounds = 10;
//   bcrypt.hash(pass, saltRounds, function(err, hash) {
//     console.log(hash);
//     return hash;    
//   });
// }

// console.log(generatePassword("helloworld"));

// bcrypt.hash(password, saltRounds, function(err, hash) {
//   console.log(hash);
//   bcrypt.compare(password, hash).then(function(result) {
//       console.log(result);
//   }).catch(function(error) {
//       console.log('error');
//   });
// });

var i;
for (i = 0; i < 2; i++) {

    email = faker.internet.email();
    bcrypt.hash(email, saltRounds, function(err, hash) {
      console.log(hash);

      var _email = mail;
      const user = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: _email,
        password: hash
      }
      
      models.User.create(user).then(result => {
        console.log("Success");  
      }).catch(error => {
        console.log("Failed");
      });      

    });
}