import Navtab from '../components/Navtab';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import PortfolioDrawer from '../components/Drawer';

export default function Home() {

    return (
        <>
            <PortfolioDrawer/>
            <Navtab />
            <About />
            <Projects />
            <Contact />
        </>
    );
};