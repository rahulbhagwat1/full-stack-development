

const activeUer = async(req,res,next)=>{

    try{

        if(!req.user){
            return res.status(404).json({
                message:"invalid Credentials or plese login"
            })
        }
        const isDeleted = existingUser.isDeleted;
        if(isDeleted){
            return res.status(403).json({
                message:"Plese signup first"    
            })
        }
        next();
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message:"internal server error"
        })
    }
}

export default activeUer;