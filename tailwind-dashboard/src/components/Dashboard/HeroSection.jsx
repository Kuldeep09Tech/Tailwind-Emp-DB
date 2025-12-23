import React from 'react';
import content from '../../constants/content.json';
import bannerImg from "../../assets/Webbanner.avif";

const HeroSection = () => {
    //JSON se 'lines' array and 'style' 
    const { lines, style } = content.dashboard.hero;

    const line1 = lines && lines[0];
    const line2 = lines && lines[1];

    const heroVars = {
        '--hero-h': style.height,
        '--hero-overlay': style.overlayColor,
        '--hero-bg': `url(${bannerImg})`
    };

    return (
        <div
            style={heroVars}
            className="w-full h-[var(--hero-h)] relative rounded-xl mb-6 flex items-center justify-center text-center shadow-lg overflow-hidden"
        >
            {/* Background Image Layer */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'var(--hero-bg)' }}
            ></div>

            {/* Dark Overlay Layer */}
            <div
                className="absolute inset-0"
                style={{ backgroundColor: 'var(--hero-overlay)' }}
            ></div>

            {/* Text Content Layer */}
            <div className="relative z-10 text-white max-w-5xl px-6 flex flex-col gap-2">

                {/* Line 1 */}
                {line1 && (
                    <h1 className="text-xl md:text-3xl font-bold tracking-tight leading-tight">
                        {line1}
                    </h1>
                )}

                {/* Line 2 */}
                {line2 && (
                    <p className="text-xl md:text-3xl font-bold tracking-tight leading-tight">
                        {line2}
                    </p>
                )}

            </div>
        </div>
    );
};

export default HeroSection;