import React from 'react';
import { useState } from 'react';
import './createForm.css'; 

function CreateForm() {

  const [title, setTitle] = useState(""); 
  const [comment, setComment] = useState(""); 
  const [file,setFile] = useState(""); 

   const data = {
    title,
    comment,
    file
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const response = await fetch(`http://localhost:3000/feedbacks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      } 
      console.log('Form submitted:');
   
    }
    catch (error) {
      console.error('Error submitting form:', error);
    }
    
    
  };


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" id="name" name="title" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <textarea type="email" id="email" name="comment" placeholder="Comment" value={comment} onChange={(e) => setComment(e.target.value)}>   </textarea>
      </div>
      <div>
        <input type="text" name='file' value={file} onChange={(e) => setFile(e.target.value)}/>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default CreateForm;