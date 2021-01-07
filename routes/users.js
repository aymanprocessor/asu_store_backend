const express = require('express');
const router = express.Router();
const User = require('../models/users');
const cors = require('cors');



router.get('/', cors(), async (req, res) => {

    try {



        const users = await User.find();
        res.json(users);

    } catch (error) {
        res.json(error);
    }

});

router.get('/byEmail/:email', cors(), async (req, res) => {

    try {



        const users = await User.findOne({ _id: req.params.email });
        res.json(users);

    } catch (error) {
        res.json(error);
    }

});

//INSERT USER
router.post('/', async (req, res) => {
    const user = new User({

        _id: req.body.email,
        name: req.body.name,
        current_balance: 0,
        phone: req.body.phone
    });

    try {

        const savedUser = await user.save();
        res.json(savedUser);
    } catch (error) {
        if (error.code == 11000) {
            res.json({
                errMsg: "email is exist",
                msg:error
            });
        } else {

            res.json({ errMsg: error });
        }

    }

});


router.patch('/:productId', async (req, res) => {
    try {

        const updatedUser = await User.updateOne({
            _id: req.params.productId
        }, {
            $set: req.body

        });
        res.json(updatedUser);
    } catch (error) {
        res.json({ message: error });

    }
});



router.patch('/:productId/balance/:value', async (req, res) => {
    try {

        const updatedUser = await User.updateOne({
            _id: req.params.productId
        }, {
            $inc: { current_balance: req.params.value }

        });
        res.json(updatedUser);
    } catch (error) {
        res.json({ message: error });

    }
});

module.exports = router;