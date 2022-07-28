import { useDispatch } from "react-redux";
import { addReactions } from "../features/postsSlice";

const reactionEmoji={
    thumbsUp:"👍",
    wow:"🤩",
    heart:"💖",
    rocket:"🚀",
    coffee:"☕"
}


const ReactionBtns = ({post}) => {
    
    const dispatch=useDispatch();

    console.log(Object.entries(reactionEmoji))
    const reactionButtons=
    Object.entries(reactionEmoji).map(([name, emoji])=>{
        return(
            <button
                key={name}
                type="button"
                onClick={()=>dispatch(
                    addReactions({postId:post.id,reaction:name}))}
                    //reaction: thumbsUp, wow, heart, rocket, coffee
                >
                    {emoji} {post.reactions[name]}
            </button>
        )
    })

    return <div>{reactionButtons}</div>
}

export default ReactionBtns;