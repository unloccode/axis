//import logo from './logo.svg';
//import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
//import React from 'react';

//get data
//const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
//post new data
const baseURL = "https://jsonplaceholder.typeicode.com/posts";

//function App() {
//  const [post, setPost] = useState(null);
//  useEffect(()=>{
//    axios.get(baseURL).then((response)=>{
//      setPost(response.data);
//    });
//  }, []);
//  if(!post) return null;
//  return (
//    <div>
//      <p>Test</p>
//      <h1>{post.title}</h1>
//      <p>{post.body}</p>
//    </div>
//  );
//}
//
//export default App;

export default function App(){
  const [post, setPost] = useState(null);
  useEffect(()=>{
    axios.get(`${baseURL/1}`).then((response)=>{
      setPost(response.data);
    });
  }, []);
  function createPost(){
    axios.post(baseURL, {
      title: "Hello George",
      body: "Mystic"
    }).then((response)=>{
      setPost(response.data);
    });
  }
  if(!post) return "No post!"
  return(
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={createPost}>Create Post</button>
    </div>
  );
}
