import React from 'react'
import s from './Profile.module.css'

export default function Profile() {
    return (        
        <div className={s.content}>
            <div>
                <img className={s.contImg} src='https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg' alt='img'/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
            <div>
                New post
            </div>
            <div className={s.content}>
                <div className={s.item}>post 1</div>
                <div className={s.item}>post 2</div>
            </div>          
            </div>
        </div>       
    )
}
