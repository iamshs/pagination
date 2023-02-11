import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Post = ({post , loading}) => {
    if(loading){
        return <p>loading...</p>
    }
    return (
        <Card sx={{ maxWidth: 700 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           {post.userId}
          </Typography>
          <Typography variant="h5" component="div">
            {post.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {post.body}
          </Typography>
        </CardContent>
       
      </Card>
    );
};

export default Post;