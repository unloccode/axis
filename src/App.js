//import React from 'react';
import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

function App(){
  //variables
  const [image, setImage] = useState(null);
  const [name, setName] = useState('image-preview');
  const [post, setPost] = useState(null);
  const [snap, setSnap] = useState('');
  //const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
  const baseURL = "http://localhost:8080/api/auth/fetchimage";

  useEffect(()=>{
    axios.get(baseURL).then((response)=>{
      setPost(response.data);
    });
  }, []);

  const handleClick = () => {
    //console.log('handleClick working!')
    axios.post('http://localhost:8080/image-upload', image).then(res=>{
      console.log('Axios response: ', res);
    });
  }
  //file input hanlder
  const getFileInfo = (e) => {
    console.log('File info working!')
    console.log(e.target.files[0]);
    setName(URL.createObjectURL(e.target.files[0]));
    const formData = new FormData();
    //file info name will be "my-image-file"
    formData.append('my-image-file', e.target.files[0], e.target.files[0].name);
    setImage(formData);
  }

  const thanos = () => {
    console.log('clicked!');
    //console.log(post.name);
    setSnap('http://localhost:8080/static/' + post.name);
  }
  if(!post) return null;  
  //console.log(post);
  //const f = 10;
  return (
    <div className="App">
      <h1>Image Upload Test</h1>
      <input type="file" onChange={getFileInfo}/>
      <button onClick={handleClick}>Upload</button>
      <img src={name} alt=""/>
      <button onClick={thanos}>Try Me</button>
      <p>{post.id}</p>
      <p>{post.name}</p>
      <h1>{snap}</h1>
      <img src={snap} alt="moment"/>
    </div>
  );
}

export default App;