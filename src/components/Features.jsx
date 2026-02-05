const features = [
    {
        title: ""
    }
];

export default function Features() {
    return (
    <section
        id="about me"
        className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
    >
        <div>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                    <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
                        About
                    </span>
                    <br />
                    <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Me
                    </span>
                </h2>
            </div>
            <div>
                <p className="text-lg text-center sm:text-base lg:text-xl text-gray-100 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relax">
                    Nice to meet you! I'm William, I'm a software engineer 
                    and this is my personal modern website written using ReactJS, Vite, and Tailwind CSS. 
                    My main focus right now is developing interesting projects. Outside of this I enjoy consuming and making art in my free time.
                </p>

                <p className="text-lg text-center sm:text-base lg:text-xl text-gray-100 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relax">
                    I'm a firm believer in expressing your thoughts and beliefs through all forms of art. Whether that be
                    writing, music, painting, graphic design, etc, art helps ground you to the world.
                    It's not an easy endeavor, but it's one of the most fulfilling.
                </p>
                <p className="text-lg text-center sm:text-base lg:text-xl text-gray-100 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relax">
                    If you see anything that interests you or if you have any questions, feel free to reach out.
                </p>
            </div>

        </div>
    </section>
    );
}