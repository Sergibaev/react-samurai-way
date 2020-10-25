import React from 'react'

export default function NewPost(props) {

    let newPostEl = React.createRef()

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'})
    }

    let onPostChange = () => {
        let text = newPostEl.current.value
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})
        console.log(text)       
    }

    return (         
        <div>
            <textarea onChange={onPostChange} ref={newPostEl} value={props.newPostText}></textarea>
            <button onClick={addPost}>add post</button>
        </div>        
    )
}
