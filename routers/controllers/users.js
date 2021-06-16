const usersModel = require('./../../db/models/users');
const db=require('./../../db/db')
const bcrypt=require('bcrypt');
const createNewAuthor = async(req, res) => {
	const { firstName, lastName, age, country, email, password, role } = req.body;
	const hashedPassword=await bcrypt.hash(password,20)
	const query = `INSERT INTO users (firstName, lastName, age, country, email, password, role) VALUES (?, ?, ?, ?)`;
	const data = [firstName, lastName, age, country, email, password, role];
	db.query(query, data, (err, results) => {
	  if (err) {
		throw err;
	  }
	  console.log(results);
	  res.json(results);
	});
  };

 

module.exports = {
	createNewAuthor,
};
