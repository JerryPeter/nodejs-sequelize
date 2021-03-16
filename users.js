const { Sequelize } = require('sequelize');

const bcrypt = require('bcrypt');

const faker = require('faker');

const models = require('./models');

const saltRounds = 10;

const password = 'qwerty';

const otherPassword = 'not_bacon';

bcrypt.hash(password, saltRounds, function(err, hash) {
    console.log(hash);
    bcrypt.compare(password, hash).then(function(result) {
        console.log(result);
    }).catch(function(error) {
        console.log('error');
    });
});




var i;
for (i = 0; i < 1000; i++) {

    
    const user = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: 'password'
      }
      
      models.User.create(user).then(result => {
        console.log("Success");  
      }).catch(error => {
        console.log("Failed");
      });      
}