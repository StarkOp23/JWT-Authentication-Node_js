const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {

    try {
        let authToken = req.headers.authorization
        console.log(authToken)

        if (!authToken || !authToken.startsWith("Bearer")) {
            return res.status(500).json({ error: true, message: "Token is required" })
        }
        //* Getting the token without Bearer 
        let token = authToken.split(" ")[1]
        //* Verify the token
        let data = jwt.verify(token, process.env.JWT_KEY)

        req.user = {
            name: data.name,
            email: data.email
        }
        next()

    } catch (err) {
        next(err);
    }
}

module.exports = auth