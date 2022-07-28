import React from 'react';

const PostAuthor = ({user, authorId}) => {
    
    return(
        <h4>{authorId===user.id && user.name}</h4>
    )
};

export default PostAuthor;