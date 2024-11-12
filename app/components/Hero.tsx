import Link from 'next/link';
import React from 'react'
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { PiDevToLogo } from 'react-icons/pi';

const Hero = () => {
    return (
        <section id="hero">
            <h1>I am <span className="spacial_text">Sarfaraz</span></h1>
            <p>I am a Web Developer</p>
            <button className="primary_btn">Hire Me</button>
            <div id="social_icons">
                <Link href={"https://github.com/sarfarazunarr"}><BsGithub className="icon" /></Link>
                <Link href={"https://linkedin.com/in/sarfarazunarr"}><BsLinkedin className="icon" /></Link>
                <Link href={"https://facebook.com/sarfarazunarr"}><BsFacebook className="icon" /></Link>
                <Link href={"https://dev.to/sarfarazunarr"}><PiDevToLogo className="icon" /></Link>
            </div>
        </section>
    )
}

export default Hero
