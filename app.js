const { Sequelize } = require('sequelize');
const models = require('./models');

const user = {
  firstName: "John",
  lastName: "due",
  email: "john@due.com",
}

models.User.create(user).then(result => {
  console.log("Success");  
}).catch(error => {
  console.log("Failed");
});