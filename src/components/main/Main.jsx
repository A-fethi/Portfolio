import { useState } from 'react'
import './main.css'
import { FaGithub, FaLink } from "react-icons/fa"
import { AnimatePresence, motion } from "framer-motion"

export default function Main({ lightMode }) {
    const [currentActive, setCurrentActive] = useState('all');
    const projects = [
        { id: '1', title: 'Blogify', subtitle: 'Blogify is a simple and elegant blog website built with HTML, CSS, JavaScript, and Python Flask. This web application allows users to create, delete blog posts, as well as view and comment on posts.', imageUrl: '/Blogify.png', category: ['html-css', 'JS', 'Others'], link: 'http://blog-ify.tech', repo: 'https://github.com/A-fethi/Blogify' },
        { id: '2', title: 'Blogify Landing Page', subtitle: 'Landing Page for Blogify website built with HTML, CSS, JavaScript.', imageUrl: '/BlogifyLP.png', category: ['html-css', 'JS'], link: 'https://a-fethi.github.io/Blog-ify/', repo: 'https://github.com/A-fethi/Landing-Page' },
        { id: '3', title: 'Personal Portfolio Website', subtitle: 'Crafted with attention to detail and a commitment to user experience, my personal portfolio website built with React, HTML, CSS is not just a showcase of my work but a reflection of my dedication to excellence in web development..', imageUrl: '/Portfolio.jpg', category: ['React'], link: '#', repo: 'https://github.com/A-fethi/Portfolio' },
    ];
    const [array, setArray] = useState(projects);
    const handelSetActive = (category) => {
        setCurrentActive(category);
        if (category === 'all') {
            setArray(projects);
        } else {
            const newArray = projects.filter(item => item.category.includes(category));
            setArray(newArray);
            console.log(newArray);
        }
    };

    return (
        <>
            <section className={`main-section ${lightMode ? 'light-section' : 'dark-section'}`}>
                <div className='content-wrapper'>
                    <div className='paragraphs'>
                        <h2 id='about' className='About'>About Me</h2>
                        <div>
                            <p>
                                Hello, I'm Abderrahmane Fethi, a 26-year-old from Morocco. While my educational background lies in business management, my passion for web development has been a driving force in my life.
                            </p>
                            <p>
                                My journey into the world of web development began before I pursued my diploma. Despite not having the opportunity to formally study it due to the limitations of my baccalaureate, my interest in the field persisted.
                            </p>
                            <p>
                                Before delving into web development, I gained valuable experience as an accountant assistant. However, it was during this time that I realized my true passion lay in creating digital solutions and crafting engaging user experiences.
                            </p>
                            <p>
                                Motivated by my desire to explore the vast potential of web development, I took it upon myself to embark on a self-learning journey. Armed with determination and a thirst for knowledge, I began immersing myself in online resources, tutorials, and practical projects.
                            </p>
                            <p>
                                Today, I stand as a self-taught web developer, continuously learning and growing in this dynamic field. My unique background in business management, coupled with my newfound expertise in web development, equips me with a diverse skill set and a fresh perspective.
                            </p>
                            <p>
                                I am excited to leverage my experiences and skills to contribute to innovative projects and collaborate with like-minded individuals. Let's connect and embark on this exciting journey together!
                            </p>
                        </div>
                    </div>
                    <div
                        className='image'>
                        <img src="/Me.jpg" alt="My Profile" />
                    </div>
                </div>
            </section>
            <section id='projects' className='skills-container'>
                <div><p className='technologies'>Technologies</p></div>
                <div className='icons-container'>
                    <img className='left-right' src="/HTML.svg" alt="html-icon" />
                    <img className='right-left' src="/CSS.svg" alt="css-icon" />
                    <img className='left-right' src="/JS.svg" alt="javascript-icon" />
                    <img className='right-left' src="/REACT.svg" alt="React-icon" />
                </div>
            </section>
            <main className='flex'>
                <section className={`left-section ${lightMode ? 'light-left' : 'dark-left'}`}>
                    <button onClick={() => handelSetActive('all')} className={currentActive === 'all' ? 'active' : null}>All Projects</button>
                    <button onClick={() => handelSetActive('html-css')} className={currentActive === 'html-css' ? 'active' : null}>HTML & CSS</button>
                    <button onClick={() => handelSetActive('JS')} className={currentActive === 'JS' ? 'active' : null}>JavaScript</button>
                    <button onClick={() => handelSetActive('React')} className={currentActive === 'React' ? 'active' : null}>React.js</button>
                    <button onClick={() => handelSetActive('Others')} className={currentActive === 'Others' ? 'active' : null}>Others</button>
                </section>
                <section className='right-section'>
                    <AnimatePresence>
                        {array.map((item) => {
                            return (
                                <motion.article
                                    layout
                                    initial={{ transform: 'scale(0)' }}
                                    animate={{ transform: 'scale(1)' }}
                                    transition={{ type: 'spring', damping: 8, stiffness: 50 }}
                                    key={item.id} className={`card ${lightMode ? 'light-bc' : 'dark-bc'}`}>
                                    <img className='box-img' src={item.imageUrl} alt="project picture" />
                                    <div className="box">
                                        <h1 className={`_title ${lightMode ? 'title-light' : 'title-dark'}`}>{item.title}</h1>
                                        <p className={`subtitle ${lightMode ? 'subtitle-light' : 'subtitle-dark'}`}>{item.subtitle}</p>
                                        <div className="icons">
                                            <div className='icon-link'>
                                                <a href={item.link} target='_blank'><FaLink /></a>
                                                <span className='link-text'>Website Link</span>
                                            </div>
                                            <div className={`github-link ${lightMode ? 'light-icon' : 'dark-icon'}`}>
                                                <a href={item.repo} target='_blank' ><FaGithub /></a>
                                                <span className='github-text'>Github Repository</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.article>
                            )
                        })
                        }
                    </AnimatePresence>
                </section>
            </main>
        </>
    )
}
