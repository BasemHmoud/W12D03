const commentsModel = require("./../../db/models/comments");
const db = require("./../../db/db");

const createNewComment = (req, res) => {
  const articleId = req.params.id;

  const { comment, commenter } = req.body;
  const query = `INSERT INTO articles (comment, commenter) VALUES (?, ?)`;
  const data = [comment, commenter, articleId];
  db.query(query, data, (err, results) => {
    if (err) {
      throw err;
    }
    console.log(results);
    res.json(results);
  });
};

module.exports = {
  createNewComment,
};
