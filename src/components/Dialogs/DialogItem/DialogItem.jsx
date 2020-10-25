import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './../Dialogs.module.css'

export default function DialogItem(props) {
    const path = '/dialogs/' + props.id
    
    return (
        <div className={s.dialog}>
            <div className={s.icon}>            
                <img alt='logo' src='https://w7.pngwing.com/pngs/503/589/png-transparent-youtube-icon-youtube-live-computer-icons-music-youtube-logo-angle-rectangle-logo.png'/>
                <div className={s.link}>
                    <NavLink  to={path}>{props.name}</NavLink>
                </div>
            </div>
            
        </div>
    )
}
