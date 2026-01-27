import Hero from '../components/Hero';
import CoursesCarousel from '../components/CoursesCarousel';
import WhyUs from '../components/WhyUs';
import Blog from '../components/Blog';
import About from '../components/About';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <main>
            <Hero />
            <CoursesCarousel />
            <WhyUs />
            <About />
            <Blog />
            <Contact />
        </main>
    );
};

export default Home;
