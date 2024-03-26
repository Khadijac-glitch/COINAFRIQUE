import React, {useState} from "react";
import "../style/Button.css";

const Button = () => {
  const [value, setValue] = useState("");
  
  return (
   <div>
     <div className=''>
        <input type="button" onClick={e =>setValue ('')}/>
      </div>
   </div>
  );
};

export default Button;
