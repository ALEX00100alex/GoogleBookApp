const Router = require("express").Router();
const db = require("../models/Book");


// Router.get('/api/user/:googleId', async (req, res) => {
//   // Grab req parameter
//   const googleId = req.params.googleId
//   db.Mood.find({googleId: googleId })
//     .then(mood => res.json(mood))
//     .catch(err => res.status(422).end());
// })

// Router.post('/api/mood', async (req, res) => {
//   // Grab info
//   const googleId = req.body.googleId;
//   const name = req.body.name;
//   const expressions = req.body.expressions;
//   console.log(req.body)
//     db.Mood
//       .findOneAndUpdate({ googleId: googleId }, {$push: {expressions: expressions}})
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
// })

// Router.post('/api/user', async (req, res) => {
//   // Grab info
//   const googleId = req.body.googleId;
//   const name = req.body.name;
//   const expressions = req.body.expressions;
//   console.log(req.body)
//   db.Mood.create({
//     name,
//     googleId,
//     expressions
//   })
//   .then(user => res.json(user))
//   .catch(err => {
//     console.log(err);
//     res.status(422).end()
//   });
// })


module.exports = Router;
