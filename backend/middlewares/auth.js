const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/User");

//auth
exports.auth = async (req,res,next) => {
    try {
        //extract token
        const token =   req.cookies.token || 
                        req.body.token || 
                        req.header("Authorisation").replace("Bearer ","");
        //if token missing then return responce
        if(!token) {
            return res.status(400).json({
                success:false,
                message:"token is missing",
            });
        }

        //verify the token
        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode);
            req.user = decode;
        }catch(e)  {
            //verification issue came then
            return res.status(401).json({
                success:false,
                message:"token is invalid",
            });
        }
        next();
    }catch (e) {
        return res.status(401).json({
            success:false,
            message:"something went wrong while validating the token",
        });
    }
}

//isStudent
exports.isStudent = async(req,res,next) => {
    try {
        if(req.user.accountType !== "Student") {
            return res.status(401).json({
                success:false,
                message:"This is a protected route for Students only",
            });
        }
        next();
    }catch(e) {
        return res.status(500).json({
            success:false,
            message:"user role cannot be verified. please try again",
        });
    }
}
//isInstructor
exports.isInstructor = async(req,res,next) => {
    try {
        if(req.user.accountType !== "Instructor") {
            return res.status(401).json({
                success:false,
                message:"This is a protected route for Instructor only",
            });
        }
        next();
    }catch(e) {
        return res.status(500).json({
            success:false,
            message:"user role cannot be verified. please try again",
        });
    }
}
//isAdmin
exports.isAdmin = async(req,res,next) => {
    try {
        if(req.user.accountType !== "Admin") {
            return res.status(401).json({
                success:false,
                message:"This is a protected route for Admin only",
            });
        }
        next();
    }catch(e) {
        return res.status(500).json({
            success:false,
            message:"user role cannot be verified. please try again",
        });
    }
}