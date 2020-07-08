import React from 'react'
import s from './FromControll.module.css'

const Textarea = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;
    return (<div className={s.FormControl + ' ' + (hasError ? s.error:'') }>
            <div>
                <textarea {...input}{...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}

        </div>
    )

};
export default Textarea;