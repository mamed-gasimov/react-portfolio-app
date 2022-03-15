import { FC } from 'react';
import { Navbar } from './components';
import { About, Header, Footer, Work, Skills, Testimonial } from './containers';
import './App.scss';

const App: FC = () => (
    <div className="app">
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonial />
        <Footer />
    </div>
);

export default App;