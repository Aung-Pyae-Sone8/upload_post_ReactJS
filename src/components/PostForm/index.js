import React, { useRef } from 'react'
import './index.css'
// import { useState } from 'react';

export default function Index({addPost}) {

    // let [title, setTitle ] = useState("");
    let title = useRef();

    let resetForm = () => {
        title.current.value = "";
        console.log('updated success');
    }

    let upload_post = (e) => {
        e.preventDefault();
        // console.log(title.current.value);
        let post = {
            id : Math.floor(Math.random()*10000),
            title : title.current.value
        }
        resetForm();
        addPost(post);
    }

    

    

  return (
    <form className='post-form' onSubmit={upload_post}>
        <h1>Create Post</h1>
        <div className='form-control'>
            <label>Title</label>
            <input type='text' ref={title}/>
        </div>
        <div className='form-control'>
            <button type='submit'>Post Now</button>
        </div>
    </form>
  )
}
