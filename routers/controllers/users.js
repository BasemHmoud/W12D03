const usersModel = require('./../../db/models/users');
const db=require('./../../db/db')
const bcrypt=require('bcrypt');
const createNewAuthor = async(req, res) => {
	const { firstName, lastName, age, country, email, password, role_id } = req.body;
	const hashedPassword=await bcrypt.hash(password,10)
	const query = `INSERT INTO users (firstName, lastName, age, country, email, password, role_id) VALUES (?, ?, ?, ?)`;
	const data = [firstName, lastName, age, country, email, password, role_id,hashedPassword];
	db.query(query, data, (err, results) => {
	  if (err) {
		// throw err;
	  console.log("err"+err);
	}
	  console.log(results);
	  res.json(results);
	});
  };

 

module.exports = {
	createNewAuthor,
};
