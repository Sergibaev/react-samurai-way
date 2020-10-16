import React from 'react'
import s from './Post.module.css'

export default function Post(props) {
    return ( 
        <div className={s.item}>
            <img alt='logo' src='https://w7.pngwing.com/pngs/503/589/png-transparent-youtube-icon-youtube-live-computer-icons-music-youtube-logo-angle-rectangle-logo.png'/>
            <p>{props.message}</p> 
            <div>
                <span>Like {props.count}</span>    
            </div>        
        </div>
    )
}
