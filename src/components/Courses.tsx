import { CalendarDays, CircleDollarSign } from 'lucide-react';

import FastWeightLoss from '@/components/Buttons/FastWeightLoss';
import YogaForBeginners from '@/components/Buttons/YogaForBeginners';
import MeditationForBeginners from '@/components/Buttons/MeditationForBeginners';

export default function Courses() {
    return (
        <div className="my-16 flex flex-col items-center justify-center bg-white">
            <h1 className="m-8 text-2xl">Courses</h1>
            <div className="flex-start my-8 flex w-full flex-col justify-around md:flex-row">
                <div className="flex flex-col items-center">
                    <h1 className="m-4 text-2xl">Fast Weight Loss Yoga</h1>
                    <div className="flex flex-row items-center space-x-4 text-lg text-gray-600">
                        <div className="flex flex-row items-center">
                            <CalendarDays />
                            <span className="ml-2">25 Classes</span>
                        </div>
                        <div className="flex flex-row items-center">
                            <CircleDollarSign />
                            <span className="ml-2">275 USD</span>
                        </div>
                    </div>
                    <h3 className="text-1xl m-4 max-w-72 text-justify">
                        Transform your body with our Fast Weight Loss Yoga
                        virtual class! This dynamic program offers 25 one-hour
                        classes daily for a month, suitable for all fitness
                        levels. Combining yoga poses, HIIT, and mindful
                        breathing, you’ll boost metabolism, increase strength,
                        and enhance flexibility. Guided by experienced
                        instructors, this blend of cardio and calm is designed
                        to help you shed pounds and achieve wellness goals.
                    </h3>
                    <div className="w-full max-w-80 p-4">
                        <FastWeightLoss />
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="m-4 text-2xl">Yoga for Beginners</h1>
                    <div className="flex flex-row items-center space-x-4 text-lg text-gray-600">
                        <div className="flex flex-row items-center">
                            <CalendarDays />
                            <span className="ml-2">25 Classes</span>
                        </div>
                        <div className="flex flex-row items-center">
                            <CircleDollarSign />
                            <span className="ml-2">275 USD</span>
                        </div>
                    </div>
                    <h3 className="text-1xl m-4 max-w-72 text-justify">
                        Start your yoga journey with our Yoga for Beginners
                        virtual class! This gentle program offers 25 one-hour
                        sessions daily for a month, perfect for those new to
                        yoga. You’ll learn foundational poses, breathing
                        techniques, and basic sequences to build strength,
                        flexibility, and relaxation. Our experienced instructors
                        will guide you every step of the way, ensuring a
                        supportive environment to help you develop a lasting
                        yoga practice.
                    </h3>
                    <div className=" w-full max-w-80 p-4">
                        <YogaForBeginners />
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="m-4 text-2xl">Meditation for Beginners</h1>
                    <div className="flex flex-row items-center space-x-4 text-lg text-gray-600">
                        <div className="flex flex-row items-center">
                            <CalendarDays />
                            <span className="ml-2">25 Classes</span>
                        </div>
                        <div className="flex flex-row items-center">
                            <CircleDollarSign />
                            <span className="ml-2">275 USD</span>
                        </div>
                    </div>
                    <h3 className="text-1xl m-4 max-w-72 text-justify">
                        Embark on a journey to inner peace with our Meditation
                        for Beginners virtual class! This calming program offers
                        25 one-hour classes daily for a month, ideal for those
                        new to meditation. Learn foundational techniques,
                        mindfulness practices, and breathing exercises to reduce
                        stress, enhance focus, and promote relaxation. Guided by
                        experienced instructors, you’ll build a strong
                        meditation practice and improve your overall well-being.
                    </h3>
                    <div className="w-full max-w-80 p-4">
                        <MeditationForBeginners />
                    </div>
                </div>
            </div>
        </div>
    );
}
