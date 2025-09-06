const { postModel } = require("../models/post.models")

//
// ✅ url ka logic hai 

let createPost = async (req,res, next)=>{
    // console.log(req.body)
    try {
        let {topic, question, answer} = req.body
       const responseData = await postModel.create({
           topic,
           question,
           answer
       })
       
       res.send({
           success: true,
           Data: responseData,
       })
        
    } catch (error) {
        console.log(error)
    }
// next();
}


// getAllPost view ke liye
let getAllPost = async (req,res, next)=>{
    try {
        const responseData = await postModel.find();
        res.send({
            success: true,
            Data: responseData,
        })
        
    } catch (error) {
        console.log(error)
    }

}


// getSinglePost view ke liye
let getSinglePost = async (req,res, next)=>{
    try {
        const {postID} = req.query;
    const responseData = await postModel.findById(postID);
    res.send({
        success: true,
        Data: responseData,
    })
        
    } catch (error) {
        console.log(error)
    }

}


// getDeletePost view ke liye
let getDeletePost = async (req,res, next)=>{
    try {
        const {postID} = req.body;
    const responseData = await postModel.findByIdAndDelete(postID);
    res.send({
        success: true,
        Data: responseData,
    })
        
    } catch (error) {
        console.log(error)
    }

}



// getUpdatePost view ke liye
let getUpdatePost = async (req,res, next)=>{
    try {
        const {postID, topic, question, answer} = req.body;
    const responseData = await postModel.findByIdAndUpdate(postID,{
        topic,
        question,
        answer,
    }, {new: true}); // true likhna boht jaruri hai // 
    res.send({
        success: true,
        Data: responseData,
    })
        
    } catch (error) {
        console.log(error)
    }

}



module.exports={createPost, getAllPost, getSinglePost, getDeletePost, getUpdatePost}