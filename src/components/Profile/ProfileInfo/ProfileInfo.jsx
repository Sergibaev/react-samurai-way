import React from 'react'
import s from './ProfileInfo.module.css'

export default function ProfileInfo() {
    return (        
        <div>
            <div>
                <img className={s.contImg} src='https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg' alt='img'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>       
    )
}
