
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Post from './component/Post';

function App() {
  const [posts , setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage , setCurrentPage] = useState(1)
  const [postPerPage , setPostPerPage] = useState(10)

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res =>res.json())
    .then(data =>{
      setPosts(data)
      setLoading(false)
    })
  },[])

  //getCurrentPage



  return (
  <>
  <h1 style={{textAlign : "center"}}>Pagination</h1>
    <div style = {{ display:"grid" , gridTemplateColumns:"repeat(3 , 1fr) " , padding:"10px" }}>
     {
      posts.map(post => <Post key={post.it} post={post} loading={loading} />)
     }
    </div>
  </>
  );
}

export default App;
