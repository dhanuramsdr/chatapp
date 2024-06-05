
import { Link } from "react-router-dom";
import React, { useState } from "react";
function Footer() {
  const [username, setUsername] = useState("");
  return (
    <div>
       <div
            style={{
              textAlign: 'center',
            }}
          >
            
          
       
         KiteCareer © {(new Date().getFullYear())} Created by Manikandan U K I
          </div></div>
  )
}

export default Footer