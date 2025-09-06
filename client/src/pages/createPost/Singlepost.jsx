import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";



export const Singlepost = () => {
  const { postID } = useParams();
  const [getPost, setgetPost] = useState();
  const navigate = useNavigate();

  
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const response = await axios.get( // view krne ke liye
        `http://localhost:8000/web/getSinglePost?postID=${postID}`
      );
      setgetPost(response.data.Data);
    } catch (error) {
      console.log(error);
    }
  };


  // deletePost Logic

    const deletePost = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/web/getdeletePost`,{
            data:{
                postID,
            }
       });
      if(response.data.Data){
        navigate('/');
      };
    } catch (error) {
      console.log(error);
    }
  };






  return (
    <div className="min-h-screen pt-[2em] pb-[2em] bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-2xl w-full">
        <h1 className="overflow-hidden text-3xl font-bold text-blue-700 mb-4 text-center">
          {getPost?.topic}
        </h1>
        <p className="text-gray-600 text-lg mb-6 text-center">
          {getPost?.question}
        </p>
        <div className="bg-gray-50 border-l-4 border-blue-600 p-4 rounded-md shadow-sm">
          <h2 className="text-gray-800 text-base leading-relaxed">
            {getPost?.answer}
          </h2>
        </div>

        <div className="mt-8 flex justify-center gap-[10px]">

 <button onClick={deletePost} className="bg-red-600 hover:bg-black text-white px-6 py-2 rounded-lg shadow-md transition">
            Delete
          </button>
        
          <button onClick={()=>navigate('/')} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition">
            Back to Posts
          </button>

          <button onClick={()=>navigate(`/updatepost/${postID}`)} className="bg-green-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg shadow-md transition">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};




