const jwt = require('jsonwebtoken');

function authenticationMiddleware(req, res, next) {
    if (req.url.includes('/login') || req.url.includes('/registration')) {
        return next();
    }
    
    let token;

    if (!req.headers.authorization) {
        return res.status(403).json({err: 'Unauthorized access'});
    }

    token = req.headers.authorization.split(' ')[1];
    
    try {
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        return next();
    } catch (err) {
        return res.status(403).json({err});
    }
}

module.exports = {
    authenticationMiddleware
};