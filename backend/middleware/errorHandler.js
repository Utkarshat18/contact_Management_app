const {errorConstant}=require("../errorconst");
const errorHandler=(err,req,res,next)=>{
    const statusCode=res.statusCode?res.statusCode:500;
    switch (statusCode)
    {
        case errorConstant.VALIDATION_ERROR:
            res.json({titel:"Validation error",
                message:err.message,
                stackTrack:err.stack});
        break;
        case errorConstant.NOT_FOUND:
            res.json({title:"Not found error",
                message:err.message,
                stackTrack:err.stack
            })
        break;
        case errorConstant.UNAUTHORIZED:
            res.json({title:"unauthorized error",
                message:err.message,
                stackTrack:err.stack
            })
        break;
        case errorConstant.FORBIDDEN:
            res.json({title:"forbidden error",
                message:err.message,
                stackTrack:err.stack
            })
        break;  
        case errorConstant.SERVER_ERROR:
            res.json({title:"server error",
                message:err.message,
                stackTrack:err.stack
            })
        break; 
        default:
            console.log("No Error, All good!");
            break;
    }
};

module.exports=errorHandler;