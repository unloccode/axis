//import logo from './logo.svg';
//import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
//import React from 'react';

//GET
//const baseURL = "https://jsonplaceholder.typicode.com/posts";
const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts"
});
//post new data

//function App() {
//  const [post, setPost] = useState(null);
//  useEffect(()=>{
//    axios.get(`${baseURL}/1`).then((response)=>{
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

//POST
//export default function App(){
//  const [post, setPost] = useState(null);
//  useEffect(()=>{
//    axios.get(`${baseURL}/1`).then((response)=>{
//      setPost(response.data);
//    });
//  }, []);
//  function createPost(){
//    axios.post(baseURL, {
//      title: "Hello George",
//      body: "Mystic"
//    }).then((response)=>{
//      setPost(response.data);
//    });
//  }
//  if(!post) return "No post!"
//  return(
//    <div>
//      <h1>{post.title}</h1>
//      <p>{post.body}</p>
//      <button onClick={createPost}>Create Post</button>
//    </div>
//  );
//}
//
//PUT
//export default function App(){
//  const [post, setPost] = useState(null);
//  useEffect(()=>{
//    axios.get(`${baseURL}/1`).then((response)=>{
//      setPost(response.data);
//    });
//  }, []);
//  function updatePost(){
//    axios.put(`${baseURL}/1`, {
//      title: "Luemens",
//      body: "The Next Light"
//    }).then(response=>{
//      setPost(response.data);
//    });
//  }
//  if(!post) return "No post!"
//  return(
//    <div>
//      <h1>{post.title}</h1>
//      <p>{post.body}</p>
//      <button onClick={updatePost}>Update Post</button>
//    </div>
//  );
//}
//DELETE
//export default function App(){
//  const [post, setPost] = useState(null);
//  useEffect(()=>{
//    axios.get(`${baseURL}/1`).then((response)=>{
//      setPost(response.data);
//    });
//  }, []);
//  function deletePost(){
//    axios.delete(`${baseURL}/1`).then(()=>{
//      alert("Post deleted!");
//      setPost(null)
//    });
//  }
//  if(!post) return "No post!"
//  return (
//    <div>
//      <h1>{post.title}</h1>
//      <p>{post.body}</p>
//      <button onClick={deletePost}>Delete Post</button>
//    </div>
//  );
//}

//HANDLE ERRORS
//export default function App(){
//  const [post, setPost] = useState(null);
//  const [error, setError] = useState(null);
//  useEffect(()=>{
//    axios.get(`${baseURL}/asdf`).then((response)=>{
//      setPost(response.data);
//    }).catch(error=>{
//      setError(error);
//    });
//  }, []);
//  if(error) return `Error: ${error.message}`;
//  if(!post) return "No post!";
//  return (
//    <div>
//      <h1>{post.title}</h1>
//      <p>{post.body}</p>
//    </div>
//  );
//}

//AXIOS INSTANCE
//export default function App(){
//  const [post, setPost] = useState(null);
//  useEffect(()=>{
//    client.get("/1").then((response)=>{
//      setPost(response.data);
//    });
//  }, []);
//  function deletePost(){
//    client.delete("/1").then(()=>{
//      alert("Post deleted!");
//      setPost(null);
//    });
//  }
//  if(!post) return "No post!"
//  return (
//    <div>
//      <h1>{post.title}</h1>
//      <p>{post.body}</p>
//      <button onClick={deletePost}>Delete Post</button>
//    </div>
//  );
//}
//ASYNC-AWAIT SYNTAX
//this allows to write much cleaner code without then and catch callback functions
export default function App(){
  const [post, setPost] = useState(null);
  useEffect(()=>{
    async function getPost(){
      const response = await client.get("/1");
      setPost(response.data);
    }
    getPost();
  }, []);
  async function deletePost(){
    await client.delete("/1");
    alert("Post deleted!");
    setPost(null);
  }
  if(!post) return "No post"
  return(
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={deletePost}>Delete Post</button>
    </div>
  );
}