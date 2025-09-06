import React from 'react'
import { useNavigate } from 'react-router-dom'
// import { Singlepost } from '../../pages/createPost/Singlepost'
// Singlepost 
export const CardsValue = ({post}) => {
  let {_id, topic, question, answer} = post

  const navigate = useNavigate();

let show=(e)=>{
  e.stopPropagation();
  alert("hello");
}

  return (
        <section onClick={()=>navigate(`/singlePost/${post?._id}`)} className="p-0, w-[auto]">
<div className="bg-[black] text-center shadow-lg rounded-lg p-6 hover:shadow-xl transition bg-[#ccc] text-black">
            <h2 className="text-xl text-[red] font-bold mb-2 text-center capitalize underline">{topic}</h2>
            <p className="text-[#92ff92] text-[rgb(124 251 124)]">{question}</p>
          <h4 className='text-white overflow-hidden text-ellipsis line-clamp-3 h-[100px]'> {answer} </h4>
            <button onClick={show} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Learn More
            </button>
</div>
    
      </section>

  )
}
