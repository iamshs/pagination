import React from 'react';


const Post = ({posts , loading}) => {
   

    if(loading){
        return <p>loading...</p>
    }
    return (
      <>
      <ul>
        {posts.map(p => <li key={p.id}>{p.title} </li>)}
      </ul>
      </> 
    );
};

export default Post;