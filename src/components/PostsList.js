import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionBtns from './ReactionBtns';

const PostsList = (props) => {

    const posts=useSelector(state=>state.posts.posts);//postsSlice참조(바뀜)
    const users=useSelector(state=>state.users);

    const orderedPosts=posts.slice().sort((a,b)=>b.date.localeCompare(a.date))
    console.log(orderedPosts)
    return(
        <section>
            {orderedPosts.map(post=>
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <h3>{post.content}</h3>    
                    {/* <p>{users.find(user=>user.id===post.authorId && user.name)}</p> */}
                    {users.map(user=>
                        <PostAuthor user={user} authorId={post.authorId} key={user.id}/>
                    )}
                    <TimeAgo timestamp={post.date}/>
                    <ReactionBtns post={post}/>
                </div>
            )}
        </section>
    )
};

export default PostsList;