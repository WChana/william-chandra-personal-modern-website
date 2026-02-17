import { useEffect, useState } from 'react';

export default function SpotifyCard() {
    const [track, setTrack] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchTrack() {
            try {
                const response = await fetch('/api/spotify');
                const data = await response.json();
                setTrack(data);
            } catch (err) {
                console.error("Error fetching Spotify data:", err);
            } finally {
                setLoading(false);
            }
        }
        fetchTrack();
    }, []);

    if (loading) return <div className="animate-pulse text-slate-400 text-xs">Checking Spotify...</div>;
    if (!track || !track.name) return <div className="text-xs text-slate-500 italic">Not listening to anything right now.</div>;

    return (
        <a
            href={track.songUrl}
            target="_blank"
            rel="noopener noreferrer"
            /* Changed w-[500px] to w-full max-w-[500px]. 
               Added overflow-hidden to prevent inner content from leaking.
            */
            className="group flex items-center gap-4 sm:gap-8 p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 w-full max-w-[500px] h-32 sm:h-40 shadow-2xl backdrop-blur-md mx-auto overflow-hidden"
        >
            {/* Image: Adjusted for smaller screens using sm: prefix */}
            <div className="relative h-16 w-16 sm:h-24 sm:w-24 flex-shrink-0">
                <img
                    src={track.albumImage}
                    alt={track.name}
                    className="rounded-lg sm:rounded-xl object-cover w-full h-full shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-1 -right-1 bg-green-500 h-3 w-3 sm:h-5 sm:w-5 rounded-full border-2 sm:border-4 border-[#1a1b26]" />
            </div>

            {/* Text: Added min-w-0 to ensure truncation works without pushing the box wide */}
            <div className="flex flex-col min-w-0 flex-grow">
                <span className="text-lg sm:text-2xl font-bold text-white truncate group-hover:text-green-400 transition-colors tracking-tight">
                    {track.name}
                </span>
                <span className="text-xs sm:text-lg text-gray-400 truncate mt-0.5 sm:mt-1">
                    {track.artist}
                </span>
            </div>

            {/* Icon: Hidden on very small cards to save space, or just kept small */}
            <div className="ml-auto hidden xs:block">
                <svg className="w-6 h-6 sm:w-10 sm:h-10 text-green-500 opacity-80 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-300" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.494 17.306c-.216.354-.68.465-1.033.25-2.86-1.748-6.458-2.143-10.704-1.173-.404.093-.81-.158-.903-.562-.093-.405.158-.81.562-.903 4.646-1.063 8.623-.61 11.826 1.347.354.215.466.679.252 1.031zm1.464-3.26c-.272.44-.847.578-1.287.306-3.273-2.012-8.258-2.593-12.126-1.417-.496.15-1.02-.128-1.17-.624-.15-.496.128-1.02.624-1.17 4.416-1.34 9.914-.693 13.65 1.604.44.272.578.847.308 1.288-.001 0-.001.001 0 0zm.126-3.398c-3.924-2.33-10.392-2.545-14.154-1.403-.602.183-1.238-.163-1.42-.764-.183-.602.163-1.238.764-1.42 4.316-1.31 11.458-1.056 15.965 1.62.54.32.715 1.016.394 1.556-.32.54-1.016.715-1.556.395l.007-.004z" />
                </svg>
            </div>
        </a>
    );
}