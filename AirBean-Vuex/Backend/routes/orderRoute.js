// Router
const { Router } = require('express');
const { uniqueId } = require('./../db');
const router = new Router();
const { v4: uuidv4 } = require('uuid');

// Database
const db  = require('./../db')

// Routes
router.post('/', (req, res) => {

    function minutes(min, max) {
        min = 10;
        max = 15;
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    let order = {
        items: req.body.items,
        orderNr: uuidv4(),
        arrival: minutes()
    }

    db.get('orders').push(order).write()
    res.send({ orderNr: 'Ordernumber:' + order.orderNr, arrival: order.arrival})
})

module.exports = router;