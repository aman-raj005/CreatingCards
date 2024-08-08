import React, { useEffect, useState } from 'react';
import Navbar2 from './Navbar2';
import Filter2 from './Filter2';
import Cards2 from './Cards2';
import { apiUrl2, filterdata2 } from './Data2';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner2 from './Spinner2';  

const TopCourses2 = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [Category,setCategory]=useState("All");

  const response = async () => {
    setLoading(true);
    try {
      const result = await fetch(apiUrl2);
      const output = await result.json();
      // console.log("response aya hoga api fetch ka");
      console.log(output); // Log the response to check the structure
      setCourses(output.data); // Ensure this matches the structure of your API response
    } catch (error) {
      toast.error("Got an error");
    }
    setLoading(false);
  };

  useEffect(() => {
    response();
  }, []);

  return (
    <div className='min-h-screen flex flex-col '>
          <div>
                <Navbar2 />
          </div>
   
          <div style={{backgroundColor: '#333'}}>
              <div>
                <Filter2 filterdata2={filterdata2}
                Category={Category}
                setCategory={setCategory}
                 />
              </div>
    
           <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>       
                 {loading ? <Spinner2 loading={loading} /> : <Cards2 courses={courses} Category={Category} />}
           </div>      
       </div>
    </div>
  );
};

export default TopCourses2;
