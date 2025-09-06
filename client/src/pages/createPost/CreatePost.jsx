import React, { useEffect, useState } from "react";
import axios from "axios";
import  {data, Navigate, useNavigate, useParams} from "react-router-dom"





export const CreatePost = () => {
  const getPosts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/web/getSinglePost?postID=${postID}`
      );
      const post = response.data.Data;
      console.log(post)

      setinputValue({
        topic: post?.topic,
        question: post?.question,
        answer: post?.answer
      })
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  
  const [inputValue, setinputValue] = useState({
    topic: "",
    question: "",
    answer: "",
  });
  
  let { topic, question, answer } = inputValue;
  
  const navigate = useNavigate();
 const {postID} = useParams();
  console.log(postID)

  
  
  const [AllPost, setAllPost] = useState([]);
  
  let formSubmit = async (e) => {
    e.preventDefault();    
    // alert("form Submit ... !")
    try {
      if(postID){ // postId hai To update kro
 const response = await axios.put("http://localhost:8000/web/getupdatePost", {
          postID,
          topic,
          question,
          answer,
        });
        if(response?.data.Data){
          navigate(`/singlePost/${postID}`);
        }
      }else{ // postId nhi hai to create kr do 
        const response = await axios.post("http://localhost:8000/web/createPost", {
          topic,
          question,
          answer,
        });
        // console.log(response.data);
        
        if(response?.data.Data){   // home page pr redirect ho jayega //
         navigate('/'); 
        }
      }
    } catch (error) {
      console.log(error)
    }
    
    setAllPost([...AllPost, inputValue]);
    inputHandle();
    
    
  };

 

  let inputHandle = (e) => {

    const { name, value } = e.target;
    //  console.log(name)

    setinputValue({
      // mene koyi variable le liye
      ...inputValue,
      [name]: value,
    });
    // console.log(inputValue)
  };

  return (
    <>
      <div>
        <div className="text-center max-w-[500px] bg-black text-white rounded-[10px] mt-[1.2em] mb-[2.2em] h-auto mx-auto p-[15px] ">
          <h1 className="font-bold text-2xl mb-2"> Create a New Post </h1>

          <form onSubmit={formSubmit}>
            <div className="text-left mb-[10px]">
              <label className="pb-2"> Topic: </label>
              <br />
              <input
                name="topic"
                value={topic}
                onChange={inputHandle}
                className="w-full p-2 border-20 rounded-[4px] mt-[10px] text-black"
                type="text"
              />
            </div>

            <div className="text-left">
              <label className="pb-2"> Question: </label>
              <br />
              <textarea
                name="question"
                value={question}
                onChange={inputHandle}
                className="w-full text-black h-[100px] p-2 border-20 rounded-[4px] mt-[10px]"
                type="text"
              />
            </div>

            <div className="text-left">
              <label className="pb-2"> Answer: </label>
              <br />
              <textarea
                name="answer"
                value={answer}
                onChange={inputHandle}
                className="w-full text-black h-[150px] p-2 border-20 rounded-[4px] mt-[10px]"
                type="text"
              />
            </div>

            <div className="mt-[15px]">
              <button className="bg-red-500 w-full p-[10px] text-xl rounded-[10px]">
                {postID ? "Update Post" : "Submit Post"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* 
<div className='bg-red w-[300px] text-black'>
{
  AllPost.map((item, index)=>{
    let {topic, question, answer} = item
    return(
     <div key={index}>
      <h1> {topic} </h1>
      <h1> {question} </h1>
      <h1> {answer} </h1>
      </div> 
    )
  })
}
</div> */}
    </>
  );
};
