const express = require('express');
const router = express.Router();
const Trans = require('../models/transactions');
const cors = require('cors');



router.get('/', cors(), async (req, res) => {

    try {
        const trans = await Trans.find();
        res.json(trans);
    } catch (error) {
        res.json(error);
    }

});

router.get('/:id', cors(), async (req, res) => {

    try {



        const trans = await Trans.findOne({ _id: req.params.id });
        res.json(trans);

    } catch (error) {
        res.json(error);
    }

});

//INSERT USER
router.post('/', async (req, res) => {
    const trans = new Trans({


        from: req.body.from,
        to: req.body.to,
        date: req.body.date,
        name: req.body.name,
        price: req.body.price,
        productId: req.body.productId,
    });

    try {

        const savedTrans = await trans.save();
        res.json(savedTrans);
    } catch (error) {
        if (error.code == 11000) {
            res.json({ errMsg: "this trans is exist" });
        } else {

            res.json({ errMsg: error });
        }

    }

});

module.exports = router;