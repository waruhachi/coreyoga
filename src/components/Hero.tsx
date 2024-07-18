export default function Hero() {
    return (
        <div className="relative min-h-[400px] bg-cover bg-center bg-no-repeat">
            <img
                src="/assets/images/main.png"
                alt="Background Image"
                className="absolute inset-0 z-[-1] h-full w-full object-cover"
            />
        </div>
    );
}
