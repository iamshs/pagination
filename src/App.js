
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Post from './component/Post';
import Pagination from './component/Pagination';

function App() {
  const [posts , setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res =>res.json())
    .then(data =>{
      setPosts(data)
      setLoading(false)
    })
  },[])

  //getCurrentPost

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);


//change page

const paginate = (page) => setCurrentPage(page)




  return (
  <>
  <h1 style={{textAlign : "center"}}>Pagination</h1>
    <div >
     <Post  posts={currentPosts} loading={loading} />
     <Pagination postsPerPage={postsPerPage} totalPost={posts.length} paginate={paginate} />
     
    </div>
  </>
  );
}

export default App;
