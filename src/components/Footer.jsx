export default function Footer() {
    const lastUpdated = "Feb 2026";
    return (
        <footer className="w-full mt-24 px-8">
            <div className="h-px w-full bg-white/10 backdrop-blur-sm mb-4" />
            <div className="mb-5 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400">
                <p>
                    Last updated: <span className="text-gray-300">{lastUpdated}</span>
                </p>

                <p className="italic text-gray-400">
                    “Be curious. Be patient. Be kind.”
                </p>
            </div>
        </footer>
    );
}