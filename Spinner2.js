import React from 'react';
import './Spinner22.css';

const Spinner2 = ({ loading }) => {
  return (
    <div className="text-bgDark text-lg font-semibold flex flex-col items-center space-y-2">
      {loading && (
        <div className="spinner flex flex-col items-center space-y-2">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          {/* <p className="text-bgDark text-lg font-semibold">Loading ...</p> */}
        </div>
      )}
    </div>
  );
};

export default Spinner2;
