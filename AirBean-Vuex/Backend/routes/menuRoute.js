// Router
const { Router } = require('express');
const router = new Router();

// Database
const db = require('./../db')

// Routes
router.get('/', (req, res) => {

    let menu = db.get('menu').value()

    //json needs an object
    res.send( { menu: menu } )
})

module.exports = router;