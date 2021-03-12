const { Sequelize } = require('sequelize');
const faker = require('faker');
const models = require('./models');


var i;
for (i = 0; i < 1000; i++) {
    const sales = {
        customer: faker.name.findName(),
        date: faker.date.between('2020-01-01', '2021-01-05'),
        amount: faker.random.number({ min: 1000000, max: 90000000 }),
        item: faker.commerce.productName()
      }
      
      models.Sales.create(sales).then(result => {
        console.log("Success");  
      }).catch(error => {
        console.log("Failed");
      });
      
}
