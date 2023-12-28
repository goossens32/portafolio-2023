// Import Landing Page components
import Header from "../components/Header";
import Social from "../components/Social";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";

const LandingPage = () => {
    return (
        <div>
            <Header/>
            <Social />
            <AboutMe />
            <Projects />
        </div>
    )    
}

export default LandingPage;