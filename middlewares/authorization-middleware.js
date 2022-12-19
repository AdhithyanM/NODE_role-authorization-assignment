const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET_KEY;

module.exports = (roles = []) => {

    if (typeof roles === 'string') {
        roles = [roles];
    }
    
    return (req, res, next) => {
        console.log("Inside Authorization middleware");
        console.log(roles);

        // Find JWT in Headers
        const token = req.headers["authorization"];
        if(!token) {
            return res.status(401).send("Authorization Failed.");
        } else {
            // validate JWT user role against roles parameter passed to this middleware
            const tokenBody = token.slice(7);  // Bearer token
            jwt.verify(tokenBody, secretKey, (err, user) => {
                if(err) {
                    return res.status(401).send("Error parsing JWT");
                }
                console.log(user);
                if(roles.includes(user.role)) {
                    next();
                } else {
                    return res.status(401).send("Unauthorized Access. Your role is not meeting the requirement.");
                }
            });
        }

    }
}