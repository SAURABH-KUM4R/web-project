signupValidator = (req,res,next) => {
    const { name,email,password } = req.body;
    if( !name || !email || !password || !req.body){
        return res.status(400).json({
            sucess:false,
            Message: "All field are required"
        })
    }else{
        next();
    }
}
module.exports = signupValidator;