const User = require('../models/user');

exports.listUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.render('user/list', { users });
    } catch (err) {
        next(err);
    }
};

exports.showAddUserForm = (req, res) => {
    res.render('user/form');
};

exports.addUser = async (req, res, next) => {
    try {
        await User.create(req.body);
        res.redirect('/users');
    } catch (err) {
        next(err);
    }
};
