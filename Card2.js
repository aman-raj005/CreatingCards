import React from 'react';
import { FcLike } from 'react-icons/fc';
import { FcLikePlaceholder } from 'react-icons/fc';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Card2 = (props) => {

    const [likedcourses, setCourses] = useState([]);
     
  function clickhandler(){
       
    if(likedcourses.includes(course.id)){
      setCourses((prev)=>prev.filter((cid)=>(cid!==course.id) ));
        toast.warning("like removed");
      }
      else{
        if(likedcourses.length===0){
          setCourses([course.id]);
        }
        else{
          setCourses((prev)=>[...prev,course.id]);
        }
        toast.success("liked");
      }
    
  }


  let course=props.course;
  return (
    <div style={{backgroundColor: '#335', width: '300px', borderRadius: '0.125rem', overflow: 'hidden' }}>
      <div className='relative'>
        <img src={course.image.url} alt="image_not_found" />

      <div className='absolute right-5 bottom-22 w-[22px] bg-white rounded-full  grid place-items-center'>
        <button onClick={clickhandler} className='absolute right-22 bottom-22 w-[33px] height-[40px] bg-white rounded-full  grid place-items-center'>
      
             {
               !likedcourses.includes(course.id)? ( <FcLikePlaceholder fontSize="1.8rem" />): ( <FcLike fontSize="1.8rem" />)
             }

         
         
     
        </button>
      </div>
      </div>
      <div className='p-4'>
        <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
        <p className='mt-2 text-white'>
        {                 course.description.length>100?(course.description.substr(0,100) +"..."):(course.description) }</p>
      </div>
    </div>
  );
};

export default Card2;
