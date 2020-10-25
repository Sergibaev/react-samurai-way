import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import NewPost from './NewPost/NewPost'

export default function MyPosts(props) {

    let posts = props.posts.map( p => <Post message={p.message} count={p.likesCount} /> )

    return (       
        <div className={s.postsBlock}>            
            <h3>My posts</h3>
            <NewPost newPostText={props.newPostText} 
                    dispatch={props.dispatch} />
            <div className={s.posts}>
                { posts }
            </div>
               
        </div>             
    )
}
