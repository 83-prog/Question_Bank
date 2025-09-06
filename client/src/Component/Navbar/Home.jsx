import React, { useState } from "react";
import { SliderValue } from "./Slider/SliderValue";
import { CardsValue } from "../Cards/CardsValue";
import axios from "axios";
import { useEffect } from "react";
import { Footer } from "../../Footer/Footer";

// import cros from 'cors'

export const Home = () => {
  const [posts, setPost] = useState();

  // install here axios //
  const getPosts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/web/getAllPost"
      );
      setPost(response.data.Data);
    } 
    
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
    <div>
      {/* Banner Section */}
      <SliderValue />

      {/* Cards Grid */}
      {/* <CardsValue/> */}
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 p-[] gap-6 p-8 max-w-[1400px]  mx-auto">
        {posts?.map((post) => {
          // ? mark chen oprator hota hai //
          return <CardsValue key={post?._id} post={post} />;
        })}
      </section>
    </div>
<Footer/>
        </>
  );
};
