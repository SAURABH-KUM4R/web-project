const JWT = require('jsonwebtoken');

const jwtAuth = async (req,res,next) => {
    const token =  req.cookies?.token;
    console.log(req.cookies);
    if(!token){
        return res.status(400).json({
            sucess: false,
            message: 'Not Authorized',
            token: token
        })
    }

    try {
        const payload = JWT.verify(token, process.env.SECRET);
        req.user = {id:payload.id, email: payload.email};
    } catch (error) {
        return res.status(400).json({
            sucess: false,
            message: 'Not Authorized '+error.message
        })
    }
    next();
}
module.exports = jwtAuth;