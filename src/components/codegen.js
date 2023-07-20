import { useState } from "react";
import axios from "axios";
import useInput from "../hooks/useInput";
const Codegen=function(){
    const [topic,setTopic]=useInput('');
    const [error,setError]=useState('');
    const [code,setParag]=useState('please enter topic in input...')
    const handleSubmit= async(e)=>{
        e.preventDefault();
        e.preventDefault();
        const config = {
        header:{
            "Content-Type":"text/plain"
        }
        }
        try{
            const data=await axios.post("http://localhost:5000/api/codegen",{topic,'language':'cpp'},config);
             setParag(data.data)
            if(!data.data.success) setError(data.data.error)
            else{
              localStorage.setItem("authToken",data.data.token);
              //   navigate("/");
            } 
      
          }catch(err){
            setError(err.response.data.error);
            console.log(error);
          }
        
    }
    return (
        <div className="codegen">
            <select>
            <option value="option0">Please select the language</option>
            <option value="option1">C</option>
            <option value="option2">C++</option>
            <option value="option3">JAVA</option>
            <option value="option4">Python</option>
            <option value="option5">JavaScript</option>
            <option value="option6">Node.js</option>
            <option value="option7">Other</option>
            </select>
            <form type='submit' className="searchp" onSubmit={handleSubmit}>
                <input type="text"
          placeholder="Enter topic here...."
          name="topic"
          value={topic}
          onChange={setTopic}
          required
                />
            <button type="submit">search</button></form>
            <div className="cout">
                {code}
            </div>
    </div>)
}
export default Codegen;