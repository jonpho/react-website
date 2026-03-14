import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";

function Home() {
    return (
        <div className="bg-slate-900 min-h-screen">
            <Navigation />
            <Hero />
            <About />
            <Footer />
        </div>
    );
}

export default Home;
