function authenticationMiddleware(req, res, next) {
    console.log(req);
    return next();
}

module.exports = {
    authenticationMiddleware
}