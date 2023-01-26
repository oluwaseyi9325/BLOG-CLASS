import React from "react";
import Image from "next/image";
import Link from "next/link";
import NewsCard from "./NewsCard";
import NewsBox from "./NewsBox";
import useSWR from "swr";
function LatestNews() {
  //indent my code
  const {data,error}=useSWR(`http://localhost:5000/posts`
)
  return (
    <div>
      <h4>Latest News</h4>

      <div className="mt-2 row">
        {data?.reverse().slice(0,4).map((val, i) => {
          return (
           <NewsBox val={val} i={i}/>
          );
        })}
      </div>
    </div>
  );
}

export default LatestNews;
