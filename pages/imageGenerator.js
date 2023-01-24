import React from 'react'
import Image from "next/image";
import { useState } from 'react';
import axios from 'axios';
import useSWR from 'swr';
import { useRef } from 'react';

function imageGenerator() {
    const [imageDesc,setImageDesc]=useState("")
    const [num,setNum]=useState("")
    const [loader,setLoader]=useState("")
 const sizeType_ref=useRef("")
const [items,setItems]=useState([])
   let sizeType= sizeType_ref.current.value
    const details={imageDesc,num,sizeType}
    const generateBtn=()=>{
        (imageDesc&&num&&sizeType)? 
        axios.post(`http://localhost:5003/postDetails`,details).then(res=>{
            if (res.data.status) {
                setItems(res.data.object)
                // console.log(items)
                
            }else{
                alert(`${res.data.message}`)
            }
        }).catch(err=>{
            alert("Network error")
        })
        
        : alert("Please fill all the filed!!!");
    }
  return (
    <div className='container-fluid' >

    
    <div className='row mt-5'>
       <div className='col-lg-7 col-md-12 mx-auto shadow rounded-5'>
<section className='p-4 row'>
<div className='col-lg-6 col-md-7' >
    <h2 className='text-center pb-4 text-warning'>Image Generator</h2>
   <div>
   <label>What Image are you looking for?</label>
<textarea value={imageDesc} onChange={(e)=>setImageDesc(e.target.value)} style={{resize:"none"}} className='form-control' placeholder='Type: Dog kissing a lion image'/>
   </div>
   <div className='mt-4'>
<div className='row'>
    <div className='col-6'>
    <label>Size your need?</label>
    <select ref={sizeType_ref} className='form-control'>
        <option value="256x256">Small</option>
        <option value="256x256">Medium</option>
        <option value="256x256">Large</option>
    </select>
    </div>
    <div className='col-6'>
    <label>How many Image?</label>
   <input value={num} onChange={(e)=>setNum(e.target.value)} placeholder='100?' type="number" className="form-control" />
    </div>
</div>
   </div>

   <div className='mt-4'>
    <button onClick={()=>generateBtn()} className='btn btn-warning rounded-4 col-12 text-white'>Click to Generate Image</button>
   </div>
   <div className='mt-4'>
    <small><i>Adding portrait,thumbnail and color features will be available soon.</i></small>
   </div>
</div>
    <div className='col-lg-6 col-md-7' style={{borderLeft:"5px solid #2036ae"}}>
        <div className='' style={{overflow:"auto",height:"400px"}}>
         {
            items?.map((val,i)=>{
                return(
                    <div>
                        <Image src={val.url} width={300} height={500} />
                    </div>
                )
            })
         }
        </div>
    </div>
</section>

       </div>
    </div>



    </div>
  )
}

export default imageGenerator