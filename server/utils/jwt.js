const jwt = require("jsonwebtoken");
const Promise = require("bluebird");

const key = "ha123456";

function signToken(user) {
    return jwt.sign({ user }, key);
}

function verifyToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, key, function (err, decoded) {
            if (err) {
                reject(err);
            }
            resolve(decoded.user);
        });
    });
}

module.exports = {
    signToken,
    verifyToken,
};