const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET_KEY;

const users = [
    {
        name: "user1",
        email: "testemail1@gmail.com",
        role: "superadmin"
    },
    {
        name: "user2",
        email: "testemail2@gmail.com",
        role: "admin"
    },
    {
        name: "user3",
        email: "testemail3@gmail.com",
        role: "staff"
    }
];

const getTestUsers = async (req, res, next) => {
    users.forEach(user => {
        const token = jwt.sign(user, secretKey);
        user.token = token;
    });
    res.status(200).json(users);
}

module.exports = {
    getTestUsers: getTestUsers
}