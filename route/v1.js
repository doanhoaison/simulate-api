import express from 'express';

const router = express.Router();

router.post('users/login', (req, res) => {
    res.send({
        'msg': '/user/login',
    })
})


module.exports = router;