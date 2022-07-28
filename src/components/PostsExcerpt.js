import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionBtns from './ReactionBtns';
import { useSelector } from 'react-redux';

const PostsExcerpt = ({post}) => {
    const users=useSelector(state=>state.users);
    
    return(
        <div>
            <h2>{post.title}</h2>
            <h3>{post.content}</h3>    
            {/* <p>{users.find(user=>user.id===post.authorId && user.name)}</p> */}
            {users.map(user=>
                <PostAuthor user={user} authorId={post.authorId} key={user.id}/>
            )}
            <TimeAgo timestamp={post.date}/>
            <ReactionBtns post={post}/>
        </div>
        
    )
};

export default PostsExcerpt;