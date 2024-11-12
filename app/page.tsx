import Link from "next/link";
import Hero from "./components/Hero";
import About from "./components/About";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Expereince from "./components/Expereince";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
    <Hero />
    <About />
    <Tech />
    <Projects />
    <Expereince />
    <Testimonials />
    <section id="contact">
        <h1>Need Assistance or Help Just Connect Now!</h1>
        <Link href={"/contact"} className="primary_btn">Contact Now</Link>
    </section>
    </>
  );
}
