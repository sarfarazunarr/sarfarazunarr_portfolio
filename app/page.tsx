import Image from "next/image";
import Link from "next/link";
import { BiData } from "react-icons/bi";
import { BsFacebook, BsGithub, BsLinkedin, BsWordpress } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { DiJavascript, DiMongodb, DiPython } from "react-icons/di";
import { FaNodeJs, FaPhp } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { PiDevToLogo } from "react-icons/pi";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { TbBrandReactNative, TbSql } from "react-icons/tb";

export default function Home() {
  return (
    <>
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

    <section id="about">
        <div id="left">
            <h1>About Me.</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum laboriosam nesciunt ipsa quod sed consequuntur id quo atque qui nobis possimus animi modi deleniti asperiores nam, dolores sunt nisi eum minima architecto eius fugit? Accusantium ea aperiam reprehenderit, cumque officia iusto rerum sed libero qui vel id! Minima, dolorem dignissimos.</p>
        </div>
        <div>
          <Image src={"/myface.jpg"} width={300} height={300} alt="my face" className="img" />
        </div>
    </section>

    <section id="tech">
      <h2 className="col-span-1">Tech Stack</h2>
      <div className="icons col-span-4">
        <RiNextjsFill color="white" className="icon" size={50} />
        <SiExpress color="white" size={50} />
        <FaNodeJs color="white" size={50} />
        <DiJavascript color="white" size={50} />
        <DiPython color="white" size={50} />
        <FaPhp color="white" size={50} />
        <BsWordpress color="white" size={50} />
        <DiMongodb color="white" size={50} />
        <TbSql color="white" size={50} />
        <BiData color="white" size={50} />
        <CgWebsite color="white" size={50} />
        <TbBrandReactNative color="white" size={50} />
        <GrReactjs color="white" size={50} />
      </div>
    </section>
    <section id="skills">
      <div className="icons col-span-4">
        <RiNextjsFill color="white" className="icon" size={50} />
        <SiExpress color="white" size={50} />
        <FaNodeJs color="white" size={50} />
        <DiJavascript color="white" size={50} />
        <DiPython color="white" size={50} />
        <FaPhp color="white" size={50} />
        <BsWordpress color="white" size={50} />
        <DiMongodb color="white" size={50} />
        <TbSql color="white" size={50} />
        <BiData color="white" size={50} />
        <CgWebsite color="white" size={50} />
        <TbBrandReactNative color="white" size={50} />
        <GrReactjs color="white" size={50} />
      </div>
      <h2 className="col-span-1">Skills</h2>
    </section>

    <section id="projects">
      <h2>Projects</h2>
      <div id="project_area">
        <div className="card">
        <Image src="/invoicy2.jpg" width={600} height={800} alt="invoicy2" />
            <h3>Invoicy</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa assumenda distinctio.</p>
            <button>Vew Demo</button>
        </div>
        <div className="card">
            <Image src="/invoicy2.jpg" width={600} height={800} alt="invoicy2" />
            <h3>Invoicy</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa assumenda distinctio.</p>
            <button>Vew Demo</button>
        </div>
        <div className="card">
            <Image src="/invoicy2.jpg" width={600} height={800} alt="invoicy2" />
            <h3>Invoicy</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa assumenda distinctio.</p>
            <button>Vew Demo</button>
        </div>
        <div className="card">
            <Image src="/invoicy2.jpg" width={600} height={800} alt="invoicy2" />
            <h3>Invoicy</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa assumenda distinctio.</p>
            <button>Vew Demo</button>
        </div>
        <div className="card">
            <Image src="/invoicy2.jpg" width={600} height={800} alt="invoicy2" />
            <h3>Invoicy</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa assumenda distinctio.</p>
            <button>Vew Demo</button>
        </div>
        <div className="card">
            <Image src="/invoicy2.jpg" width={600} height={800} alt="invoicy2" />
            <h3>Invoicy</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa assumenda distinctio.</p>
            <button>Vew Demo</button>
        </div>
      </div>
    </section>
    <section id="testimonials">
      <h2>Testimonials</h2>
      <div id="testimonials_area">
        <div className="card">
            <h3>Nawaz</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa assumenda distinctio.</p>
        </div>
        <div className="card">
            <h3>Invoicy</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa assumenda distinctio.</p>
        </div>
        <div className="card">
            <h3>Invoicy</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa assumenda distinctio.</p>
        </div>
        <div className="card">
            <h3>Invoicy</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa assumenda distinctio.</p>
        </div>
      </div>
    </section>
    </>
  );
}
