import React, { useRef } from 'react'
import './contact.css'
import Lottie from 'lottie-react'
import { useForm, ValidationError } from '@formspree/react';
import contactAnimation from '../../../src/contact.json'
import doneAnimation from '../../../src/done.json'
import errorAnimation from '../../../src/error.json'

export default function Contact({ lightMode }) {
    const inputClassName = `${lightMode ? 'Light' : 'Dark'}`;
    const labelClassName = `${inputClassName}-name`;

    const [state, handleSubmit] = useForm("meqylrzn");

    return (
        <>
            <div id='contact' className={`contact-me ${lightMode ? 'primary' : 'secondary'}`}>
                Contact Me
            </div>
            <div className='contact-container'>
                <form onSubmit={handleSubmit}>
                    <label className={labelClassName}>Name</label>
                    <input autoComplete='off' required type="text" name="name" className={inputClassName} />
                    <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                    />
                    <label className={labelClassName}>Email</label>
                    <input autoComplete='off' required type="email" name="email" className={inputClassName} />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <label className={labelClassName}>Message</label>
                    <textarea name="message" className={inputClassName} />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <button className={`submit-btn ${lightMode ? 'light-shadow' : 'dark-shadow'}`} type='submit' disabled={state.submitting}>
                        {state.submitting ? 'Submitting ...' : 'Submit'}
                    </button>
                    {state.succeeded && (
                        <p className={`paragraph-animation ${lightMode ? 'primary' : 'secondary'}`} style={{ fontSize: '15px' }}>
                            <Lottie
                                loop={false}
                                style={{height: 25}}
                                animationData={doneAnimation}
                            />
                            Your message has been sent successfully 😀</p>)}
                    {state.errors && (
                        <p className={`paragraph-animation ${lightMode ? 'primary' : 'secondary'}`} style={{ fontSize: '15px' }}>
                            <Lottie
                                loop={false}
                                style={{ height: 33}}
                                animationData={errorAnimation}
                            />
                            Ooops! Something went wrong</p>)}
                </form>
                <div className='animation'>
                    <Lottie
                        style={{ height: 400 }}
                        animationData={contactAnimation}
                    />
                </div>
            </div>
        </>
    );
}
