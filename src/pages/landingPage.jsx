// Import Landing Page components
import Header from "../components/Header";
import Social from "../components/Social";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Studies from "../components/Studies";
import Footer from "../components/Footer";

const LandingPage = () => {
    return (
        <div>
            <Header/>
            <Social />
            <AboutMe />
            <Projects />
            <Studies />
            <Footer />
        </div>
    )    
}

export default LandingPage;