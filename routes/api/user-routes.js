const router = require('express').Router();
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/User-controller');

//Set up GET all and POST at /api/Users
router
    .route('/')
    .get(getAllUser)
    .post(createUser);

//Set up Get one, PUT, and DELETE at /api/Users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// /api/Users/<userId>/<friendId>
router
.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(removeFriend);    

module.exports = router;