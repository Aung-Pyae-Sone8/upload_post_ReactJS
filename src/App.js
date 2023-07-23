// import Image from "./assets/compositor.jpeg";
import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar/index";
import PostsList from './components/PostsList/index';
import Modal from "./components/Modal/index";
import PostForm from './components/PostForm/index';

function App() {
  // let [name, setName] = useState("Aung Pyae Sone"); // first parameter is default value [getter,setterFun]

  let [showModal, setShowModal] = useState(false);

  let [posts, setPosts] = useState([
    {
      id: 1,
      title: "First post",
    },
    {
      id: 2,
      title: "Second post",
    },
  ]);

  let addPost = (post) => {
    setPosts((prevState => [...prevState,post]));
    setShowModal(false);
  }
  // console.log(posts);

  // let changeName = () => {
  //   setName("Aung Aung");
  //   console.log(name);
  // };

  // let deletePost = (id) => {
  //   setPosts((prevState) => prevState.filter((post) => post.id !== id));
  // };

  return (
    // list start

    // <div className="app">
    //   <h1>Hello {name}</h1>
    //   <button onClick={changeName}>Change Name</button>

    //   <h1>Posts</h1>
    //   <ul>
    //     {!!posts.length && posts.map((post) => ( //if posts.length !== 0 , !! => change to boolean value
    //       <li key={post.id}>
    //         {post.title}
    //         <button onClick={() => deletePost(post.id)}>delete</button>
    //       </li>
    //     ))}
    //     {!posts.length && <p>No Posts Available</p>}
    //   </ul>

    //   {/* 1st way
    //   <img src="/compositor.jpeg"></img> */}

    //   {/* 2nd way
    //   <img src={Image} alt=""/> */}
    // </div>

    // list end

    <>
      <Navbar setShowModal={setShowModal}/>
      <PostsList posts={posts} />
      {showModal && <Modal setShowModal={setShowModal}>
        {/* modal content  */}
        <PostForm addPost={addPost}/>
      </Modal>}
    </>
  );
}

export default App;

// import React from 'react'
// import { useState } from 'react';

// export default function App() {

//   let [count,setCount] = useState(0);

//   let increment = () => {
//     setCount((prevState)=>prevState+1);
//   }

//   return (
//     <div>
//       <h1>Counter</h1>
//       <h3>Count - {count}</h3>
//       <button onClick={increment}>increment</button>
//     </div>
//   )
// }
