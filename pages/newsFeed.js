import axios from "axios";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import useSWR from "swr";

function newsFeed({newsInfo}) {
  const[comments,setComment]=useState("")
  const news_ref=newsInfo[0].news_ref
  const {data,error}=useSWR(`http://localhost:5000/comments?news_ref=${news_ref}`,
    {
     
      refreshInterval:1000,
      
    } 
  )
  const send=()=>{
     const message=comments
      axios.post("http://localhost:5000/comments",{news_ref,message}).then(res=>{
        setComment("")
        
      })
  }
  const delBtn=(delIndex)=>{
    axios.delete(`http://localhost:5000/comments/${delIndex}`)
  }
  return (
    <div className="container-fluid">
      
      <hr />
      <div className="row">
        <div className="col-lg-9 col-md-12 mx-auto">
         {
          newsInfo?.map((val,i)=>{
            return(
              <section className="row">
              <aside className="col-8">
                <h4>{val.category}</h4>
                <div className="p-2">
                  <h4>
{
 (val.description.length>=100)? val.description.slice(0,100): val.description
}
                  </h4>
                  <div>
                    <Image width={700} height={400} src={val.imageUrl} />
                  </div>
                  <div style={{ textAlign: "justify" }}>
                    {val.body}
                  </div>
                </div>
              </aside>
              <aside className="col-4 mt-5">
                <div>
                  <h6>
                    Comments:{" "}
                    <span className="bg-info p-2 rounded-3 text-white mb-4">
                      {data?.length}
                    </span>
                  </h6>
                  <div className="rounded-3 bg-white">
                    <section className="p-3">
                      <div style={{ overflow: "auto", height: "300px" }}>
                        {data?.map((val, i) => {
                          return (
                            <section
                              key={i}
                              className="bg-white shadow-sm rounded-3 mt-2 text-center d-flex justify-content-between"
                            >
                              <span className="p-3">{val.message} </span>
                              <span onClick={()=>delBtn(val.id)} className="p-3 bg-danger text-white rounded-3">
                                Del
                              </span>
                            </section>
                          );
                        })}
                      </div>
                      <div className="mt-2">
                        <input
                         value={comments}
                         onChange={(e)=>setComment(e.target.value)}
                          className="form-control"
                          placeholder="type your comment"
                        />
                      </div>
                      <div className="mt-2">
                        <button onClick={send} className="text-white bg-success rounded-3 col-12">
                          Add comments
                        </button>
                      </div>
                    </section>
                  </div>
                  <section className="mt-3">
                    <h4>Related News</h4>
                    <div>
                      {[1, 2, 3, 4, 5].slice(0, 3).map((val, i) => {
                        return (
                          <div>
                            <section className="d-flex gap-2 justify-content-between">
                              <Image
                                src={require("../assets/img.jpg")}
                                width={100}
                                height={100}
                              />
                              <span>
                                Ronaldo : Is the real Sheep Is the real SheepIs
                                the real SheepIs the real Sheep
                              </span>
                            </section>
                            <hr />
                          </div>
                        );
                      })}
                    </div>
                  </section>
                </div>
              </aside>
            </section>
            )
          })
         }
        </div>
      </div>
    </div>
  );
}

export default newsFeed;

export const getServerSideProps = async (context) => {
  const { query } = context;
  const { desc } = query;
  // const demo= desc? `desc=${desc.replace(/ /g,"%20")}`:""
  const demo= desc.replace(/ /g, "%20")
  // console.log(demo)
  const response = await fetch(`http://localhost:5000/posts?description=${demo}`);
  const data = await response.json();
  return {
    props: {
      newsInfo: data,
    },
  };
};
