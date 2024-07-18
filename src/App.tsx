import Hero from '@/components/Hero';
import Hero2 from '@/components/Hero2';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import About from '@/components/About';
import Carousel from '@/components/Carousel';

import Courses from '@/components/Courses';
import Teachers from '@/components/Teachers';

export default function App() {
    return (
        <>
            <Header />
            <main className="flex-grow">
                <Hero />
                <div className="h-12 bg-red-400"></div>
                <About />
                <Carousel />
                <div className="h-12 bg-red-400"></div>
                <Teachers />
                <div className="h-12 bg-red-400"></div>
                <Hero2 />
                <Courses />
            </main>
            <Footer />
        </>
    );
}
