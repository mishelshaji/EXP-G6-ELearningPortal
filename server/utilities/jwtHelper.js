const jwt = require('jsonwebtoken');

const createToken = (payload) => {
    const token = jwt.sign(
        payload, 
        process.env.SECRET_KEY, 
        { 
            algorithm: 'HS256', 
            expiresIn: '1d',
            issuer: 'MyLearn',
            audience: 'MyLearn'
        });
    return token;
}

module.exports = {
    createToken
}