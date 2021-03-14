const { Sequelize } = require('sequelize');

const bcrypt = require('bcrypt');

const faker = require('faker');

const models = require('./models');

const saltRounds = 10;

const myPlaintextPassword = 'helloworld';

const someOtherPlaintextPassword = 'not_bacon';

bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    console.log(hash);
    bcrypt.compare(myPlaintextPassword, hash).then(function(result) {
        console.log(result);
    });
});





// var i;
// for (i = 0; i < 1000; i++) {
//     const sales = {
//         firstName: faker.name.findName(),
//         lastName: faker.date.between('2020-01-01', '2021-01-05'),
//         email: faker.random.number({ min: 1000000, max: 90000000 }),
//         password: faker.random.arrayElement(['AQUA', 'FIT', 'COCA COLA'])
//       }
      
//       models.Sales.create(sales).then(result => {
//         console.log("Success");  
//       }).catch(error => {
//         console.log("Failed");
//       });      
// }