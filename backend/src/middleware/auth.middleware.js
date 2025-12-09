const jwt = require("jsonwebtoken");

async function verifytoken(req,res,next){

     const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      success: false,
      message: "Authentication token missing"
    });
  }
    const token =  req.headers.authorization?.split(' ')[1];
        if (!token) {
            res.status(200).json(   
                 {
                        success: false,
                        message: "Error!Token was not provided."
                    }
                );
            }
    try{
        const decoded = jwt.verify(token,'Hello');
        req.userid = decoded.userid;
        next();
    }catch(err){
        return res.status(401).json({message:"Invalid token"});
    }
};


module.exports ={
    verifytoken,
}



// try {
    // const authHeader = req.headers.authorization;

    // if (!authHeader) {
    //   return res.status(401).json({
    //     success: false,
    //     message: "Authorization header missing",
    //   });
    // }

    // const parts = authHeader.split(" ");

    // if (parts.length !== 2 || parts[0] !== "Bearer") {
    //   return res.status(401).json({
    //     success: false,
    //     message: "Invalid authorization format",
    //   });
    // }

    // const token = parts[1]; try {
    // const authHeader = req.headers.authorization;

    // if (!authHeader) {
    //   return res.status(401).json({
    //     success: false,
    //     message: "Authorization header missing",
    //   });
    // }

    // const parts = authHeader.split(" ");

    // if (parts.length !== 2 || parts[0] !== "Bearer") {
    //   return res.status(401).json({
    //     success: false,
    //     message: "Invalid authorization format",
    //   });
    // }

    // const token = parts[1];