signinValidator = (req,res,next) => {
    const {email, password} = req.body;
    if(req.body&&email&&password){
        next()
    }else{
        return res.status(400).send({
            sucess: false,
            message: "All field is required."
        })
    }
}
module.exports = signinValidator;