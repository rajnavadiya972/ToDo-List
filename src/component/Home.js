import React from 'react';
import photo from './1.png';
import p1 from './todo.gif';
import insta from './insta logo.gif';
import linkdin from './linkedin.gif';
import './Home.css';

const Home = () => {
    return (
        <>
            <div className="containar">
                <img src={photo} alt="" className="photo" />
                <p><span>"Click ToDo for ToDo list"</span><br /><br />Creating a new note. <br />
                    Organize your notes.<br />
                    Delete, Edit and Update notes.<br /></p>

            </div>
            <div className="containar">
                <div className="logo">
                    <a href="https://www.instagram.com/raj_navadiya_972/" target="_blank"><img src={insta} alt="" className="insta" title="Instagram" /></a>
                    <a href="https://www.linkedin.com/in/rajnavadiya972" target="_blank" ><img src={linkdin} alt="" className="insta" title="Linkdin" /></a>
                </div>
                <img src={p1} alt="" className="p1" />

            </div>
        </>
    )
}

export default Home;
