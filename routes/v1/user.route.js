const express = require('express');
const userContorllers = require('../../controllers/user.controller.js');
const router = express.Router();
const fs = require('fs');



router
    /**
     * @api {get} /random get random user
     * @apiDescription Get a random user from the server json file
     * @apiPermission admin
     * 
     * @apiHeader {String} Authentication User's acces token
     * 
     * @apiSuccess {Object[]}  get ramdom user 
     * 
     * @apiError (Unathorized 401) Unathorized Only authenticated users can access the data
     * @paiError (Forbidden 403) Forbidden Only admins can access the data
     */
    .route('/random')
    .get(userContorllers.getRandomUser);

router
    /**
     * @api {get} /:id get specific user
     * @apiDescription Get a specefic user from the server json file
     * @apiPermission admin
     * 
     * @apiHeader {String} Authentication User's acces token
     * 
     * @apiSuccess {Object[]}  get spefic user data 
     * 
     * @apiError (Unathorized 401) Unathorized Only authenticated users can access the data
     * @paiError (Forbidden 403) Forbidden Only admins can access the data
     */
    .route('/:id')
    .get(userContorllers.getSpecificUser);

router
    /**
     * @api {get} /all get all user
     * @apiDescription Get a random user from the server json file
     * @apiPermission admin
     * 
     * @apiHeader {String} Authentication User's acces token
     * 
     * @apiQuery {Number{1-}} [limit=1-] Users per page
     * 
     * @apiSuccess {Object[]}  all the user
     * 
     * @apiError (Unathorized 401) Unathorized Only authenticated users can access the data
     * @paiError (Forbidden 403) Forbidden Only admins can access the data
     */
    .route('/all')
    .get(userContorllers.getAllUser);

router
    /**
     * @api {post} /save add new user 
     * @apiDescription POST a new user to the server json file
     * @apiPermission admin
     * 
     * @apiHeader {String} Authentication User's acces token
     * 
     * @apiSuccess {Object[]}  Successfully added new user to the json file
     * 
     * @apiError (Unathorized 401) Unathorized Only authenticated users can access the data
     * @paiError (Forbidden 403) Forbidden Only admins can access the data
     */
    .route('/save')
    .post(userContorllers.createUser);

router
    /**
     * @api {patch} /update/:id update user information by user id
     * @apiDescription PATCH a user information to the json file
     * @apiPermission admin
     * 
     * @apiHeader {String} Authentication User's acces token
     * 
     * @apiParam {Number{1-}} [id=1-] Users per page
     * 
     * @apiSuccess {Object[]}  Successfully update user info
     * 
     * @apiError (Unathorized 401) Unathorized Only authenticated users can access the data
     * @paiError (Forbidden 403) Forbidden Only admins can access the data
     */
    .route('/update/:id')
    .patch(userContorllers.updateUser);

router
    .route('/bulk-update')
    .patch(userContorllers.updateBulkUser);

router
    /**
     * @api {delete} /update/:id delete user by user id
     * @apiDescription DELETE a user from the json file.
     * @apiPermission admin
     * 
     * @apiHeader {String} Authentication User's acces token
     * 
     * @apiParam {Number{1-}} [id=1-] Users per page
     * 
     * @apiSuccess {Object[]}  Successfully deleted a user
     * 
     * @apiError (Unathorized 401) Unathorized Only authenticated users can access the data
     * @paiError (Forbidden 403) Forbidden Only admins can access the data
     */
    .route('/delete/:id')
    .delete(userContorllers.deleteUser);

module.exports = router;