const Router = require("express").Router();
const Book = require("../models/Book");


Router.post('/api/books', async (req,res) => {
    // const title = req.body.title;
    // const authors = req.body.authors;
    // const description = req.body.description;
    // const image = req.body.image;
    // const link = req.body.link;
    // Destructuring
    const {title, authors, description, image, link} = req.body
    try {
        const book = await Book.create({
            title, 
            authors,
            description,
            image,
            link
        })
        res.json(book)
    } catch(error){
        res.status(422).end()
    }
})

Router.get('/api/books', async (req, res) => {
  // Grab req parameter
  const {title, authors, description, image, link} = req.params
  try {
    const book = await Book.find({
        title, 
        authors,
        description,
        image,
        link
    })
    res.json(book)
} catch(error){
    res.status(422).end()
}
})

module.exports = Router;
