const {
    getAllUsers,
    postUser,
    putUser,
    getUser,
    deleteUser

} = require('../controllers/userController');


const routes = app => {
    app.route('/users').get(getAllUsers);

    app
        .route('/user')
        .post(postUser)
        .put(putUser)
        .get(getUser)
        .delete(deleteUser)
};

module.exports = { routes };
