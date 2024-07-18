'use client';

import { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export default function Carousel() {
    const images = [
        '/assets/images/carousel/1.webp',
        '/assets/images/carousel/2.webp',
        '/assets/images/carousel/3.webp',
        '/assets/images/carousel/4.webp',
        '/assets/images/carousel/5.webp',
        '/assets/images/carousel/6.webp',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(2);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setSlidesToShow(1);
            } else {
                setSlidesToShow(2);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide
            ? Math.floor(images.length / slidesToShow)
            : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex >= images.length - slidesToShow;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="group relative mt-16 w-full overflow-hidden">
            <div
                className="absolute inset-y-0 left-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100"
                onClick={prevSlide}
                style={{ width: '50px' }}
            >
                <button className="z-10 flex h-full w-full items-center justify-center rounded-none bg-black bg-opacity-50 text-white hover:bg-opacity-75">
                    <ChevronLeft />
                </button>
            </div>
            <div
                className="absolute inset-y-0 right-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100"
                onClick={nextSlide}
                style={{ width: '50px' }}
            >
                <button className="z-10 flex h-full w-full items-center justify-center rounded-none bg-black bg-opacity-50 text-white hover:bg-opacity-75">
                    <ChevronRight />
                </button>
            </div>
            <div
                className="flex transition-transform duration-300"
                style={{
                    transform: `translateX(-${
                        currentIndex * (100 / slidesToShow)
                    }%)`,
                    height: 'calc(fit-content - 50px)',
                }}
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`flex-shrink-0 ${
                            slidesToShow === 1 ? 'w-full' : 'w-1/2'
                        }`}
                    >
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="h-full w-full object-cover"
                            width={700}
                            height={1000}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
