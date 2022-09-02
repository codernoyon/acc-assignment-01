const express = require('express');
const userContorllers = require('../../controllers/user.controller.js');
const router = express.Router();

router.get('/user', (req, res) => {
    res.send("Randow user here.");
});


router
    .route('/random')
    .get(userContorllers.getRandomUser);

router
    .route('/all')
    .get(userContorllers.getAllUser);

router
    .route('/save')
    .post(userContorllers.createUser);

router
    .route('/update')
    .patch(userContorllers.updateUser);

router
    .route('/bulk-update')
    .patch(userContorllers.updateBulkUser);

router
    .route('/delete')
    .delete(userContorllers.deleteUser);

module.exports = router;