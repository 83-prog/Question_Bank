let express = require("express");
const { createPost, getAllPost, getSinglePost, getDeletePost, getUpdatePost } = require("../Controller/enquiryControl");
// router define krege

let router = express.Router();


router.post("/createPost", createPost) // post ke liye
router.get("/getAllPost", getAllPost) // view ke liye
router.get("/getSinglePost", getSinglePost) // get Single view ke liye
router.delete("/getdeletePost", getDeletePost) // get delete post
router.put("/getupdatePost", getUpdatePost) // get update post



module.exports={router}