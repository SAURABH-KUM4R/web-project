signinValidator = (req,res,next) => {
    const {username, password} = req.body;
    if(req.body&&username&&password){
        next()
    }else{
        return res.status(400).send({
            sucess: false,
            message: "All field is required."
        })
    }
}
module.exports = signinValidator;