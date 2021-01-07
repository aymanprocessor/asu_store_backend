const express = require('express');
const router = express.Router();
const Balance = require('../models/balances');
const cors = require('cors');

router.get('/', cors(), async (req, res) => {
    try {
        const balances = await Balance.find();
        res.json(balances);
    } catch (error) {
        res.json(error);
    }
});


router.post('/', async (req, res) => {
    const balance = new Balance({
        balance: req.body.balance,
        date: req.body.date,
        owner: req.body.owner,
     
    });

    try {

        const savedBalance = await balance.save();
        res.json(savedBalance);
    } catch (error) {
        res.json({ message: error });

    }

});
module.exports = router;