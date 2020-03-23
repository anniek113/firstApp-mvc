const { UserModel } = require('../models/userModel');


const getAllUsers = async (request, response) => {
    try {
        console.log("GET USERS");
        var userInstances = await UserModel.find({});
        var usersMap = {};
        userInstances.map(user => {
            usersMap[user.id] = user;
        });
        response.send(usersMap);
    } catch (error) {
        response.status(500).send(error);
    }
};

const postUser = async (request, response) => {
    try {
        console.log("POST USER");
        var userInstance = new UserModel(request.body);
        const created = await UserModel.create(userInstance);
        response.send(created);
    } catch (error) {
        response.status(500).send(error);
    }
};


const putUser = async (request, response) => {
    try {
        console.log("PUT USER");
        var userInstance = await UserModel.findOneAndUpdate(
            request.query,
            request.body
        );
        response.send(userInstance);
    } catch (error) {
        response.status(500).send(error);
    }
};

const getUser = async (request, response) => {
    console.log("TEST");
    try {
        console.log("GET USER");
        var userInstance = await UserModel.find({ username: "coolguy" });
        response.send(userInstance);
    } catch (error) {
        response.status(500).send(error);
    }
};

const deleteUser = async (request, response) => {
    try {
        console.log("DELETE USER");
        var userInstance = await UserModel.findOneAndDelete(
            request.query
        );
        response.send(userInstance);
    } catch (error) {
        response.status(500).send(error);
    }
};

const getHTML = async (request, response) => {
    try {
        console.log("SEND HTML HOME PAGE");
        response.sendFile(path.join(__dirname + "/index.html"));
    } catch (error) {
        response.status(500).send(error);
    }
};

module.exports = { getAllUsers, postUser, putUser, getUser, deleteUser, getHTML };