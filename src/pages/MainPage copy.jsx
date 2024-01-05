import React from "react";
import FileTools from "./FileTools";


function MainPage() {

  console.log('MainPage component is being rendered');

  return (
    <div className="not-italic flex">


      <div className="flex-1 h-screen bg-gray-100">
        {
           <FileTools /> // Show the ImageTools component when the selectedPage is 'image'
           }
      </div>

    </div>
  );
}

export default MainPage;
