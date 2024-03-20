import React from 'react'
import './contact.css'
import Lottie from 'lottie-react'
import emailjs from '@emailjs/browser';
import contactAnimation from '../../../public/contact.json'
// import contactAnimation from '../../../public/contact1.json'

export default function Contact({ lightMode }) {
    const inputClassName = `${lightMode ? 'Light' : 'Dark'}`;
    const labelClassName = `${inputClassName}-name`;
    return (
        <div className='container'>
            <form>
                <label className={labelClassName}>Name</label>
                <input autoComplete='off' required type="text" name="user_name" className={inputClassName} />
                <label className={labelClassName}>Email</label>
                <input autoComplete='off' required type="email" name="user_email" className={inputClassName} />
                <label className={labelClassName}>Message</label>
                <textarea name="message" className={inputClassName} />
                <input type="submit" value="Send" />
            </form>
            <div className='animation'>
                <Lottie
                    style={{height: 400}}
                    animationData={contactAnimation}
                />
            </div>
        </div>
    );
}
