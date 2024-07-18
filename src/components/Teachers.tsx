export default function Teachers() {
    return (
        <div className="my-16 flex flex-col items-center justify-center bg-white">
            <h1 className="m-8 text-2xl">Teachers</h1>
            <div className="flex-start my-8 flex w-full flex-col justify-around md:flex-row">
                <div className="flex flex-col items-center">
                    <img
                        src="/assets/images/teachers/1.png"
                        alt="Teacher"
                        width={200}
                        height={200}
                        className="m-4 rounded-full"
                    />
                    <h1 className="m-4 text-2xl">Rahul Uniyal</h1>
                    <h3 className="text-1xl m-4 max-w-72 text-justify">
                        Highly skilled Yoga Instructor with over two years of
                        experience in various yogic disciplines. He holds a
                        Master’s in Yogic Science from Uttarakhand Sanskrit
                        University and has taught at esteemed institutions like
                        Rishikesh Yog Kendra. Specializing in Hatha, Ashtanga,
                        and Vinyasa, Rahul excels in creating engaging,
                        personalized classes that cater to individual needs and
                        promote mindfulness.
                    </h3>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        src="/assets/images/teachers/2.png"
                        alt="Teacher"
                        width={200}
                        height={200}
                        className="m-4 rounded-full"
                    />
                    <h1 className="m-4 text-2xl">Ranjit Kaur</h1>
                    <h3 className="text-1xl m-4 max-w-72 text-justify">
                        Highly skilled Yoga Instructor with over two years of
                        experience in various yogic disciplines. He holds a
                        Master’s in Yogic Science from Uttarakhand Sanskrit
                        University and has taught at esteemed institutions like
                        Rishikesh Yog Kendra. Specializing in Hatha, Ashtanga,
                        and Vinyasa, Rahul excels in creating engaging,
                        personalized classes that cater to individual needs and
                        promote mindfulness.
                    </h3>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        src="/assets/images/teachers/3.png"
                        alt="Teacher"
                        width={200}
                        height={200}
                        className="m-4 rounded-full"
                    />
                    <h1 className="m-4 text-2xl">Sunil Rayal</h1>
                    <h3 className="text-1xl m-4 max-w-72 text-justify">
                        Distinguished yoga instructor with a Master of Arts in
                        Yoga and extensive teaching experience. He has taught at
                        prestigious institutions such as Rishikesh Yog Kendra
                        and Aatm Yogashala, and has also led classes
                        internationally. Sunil&apos;s dedication to yoga is
                        evident through his participation in numerous yoga
                        festivals and championships, making him an inspiring
                        teacher and practitioner.
                    </h3>
                </div>
            </div>
        </div>
    );
}
