import React from 'react';
import Card2 from './Card2';



const Cards2 = (props) => {
  let likedcourses=props.likedcourses;
  let setCourses=props.setCourses;
  let Category=props.Category;
  

 
  
  let courses=props.courses;


 function getCourses(){
  if(Category==="All"){
    
    let allCourses=[];
    Object.values(courses).forEach(array=>{
      array.forEach(courseData=>{
        allCourses.push(courseData);
      })
    })
    return allCourses; 
  }
  else{
    return courses[Category] || []; // Add check to ensure category exists

  }
  
 }
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
 
      {getCourses().map((course => (
        <Card2 key={course.id} course={course} setCourses={setCourses}
         likedcourses={likedcourses} />
      ))
      ) }
    </div>
  )
}

 export default Cards2;