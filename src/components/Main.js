import About from "./sections/About";
import Hero from "./sections/Hero";
import Highlight from "./sections/Highlights";
import Testimonials from "./sections/Testimonials";

function Main() {
    return (
        <main>
            <Hero/>
            <Highlight/>
            <Testimonials/>
            <About/>
        </main>
    );
}
  
export default Main;