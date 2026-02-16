import React, { useEffect, useRef } from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const interval = setInterval(() => {
            if (!scrollContainer) return;
            
            const firstCard = scrollContainer.firstElementChild as HTMLElement;
            if (!firstCard) return;

            // Calculate scroll amount (card width + gap)
            // Gap is 1.5rem (24px) from gap-6
            const scrollAmount = firstCard.clientWidth + 24;
            const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

            if (scrollContainer.scrollLeft >= maxScrollLeft - 10) {
                // Return to start
                scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                // Scroll next
                scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }, 3000); // 3 seconds interval

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-16 bg-brand-lightGreen">
            <div className="max-w-6xl mx-auto px-4 mb-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Veja o que seu filho vai criar
                </h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                    Fotos reais enviadas por pais que já estão usando.
                </p>
            </div>

            <div 
                ref={scrollRef}
                className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-4 pb-8 scrollbar-hide max-w-[1400px] mx-auto"
            >
                {GALLERY_IMAGES.map((img, index) => (
                    <div key={index} className="snap-center shrink-0 w-[85vw] md:w-[600px] h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl border-4 border-white relative">
                        <img 
                            src={img} 
                            alt={`Exemplo ${index + 1}`} 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                            <span className="text-white font-medium text-lg">Exemplo Prático #{index + 1}</span>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="text-center mt-4">
                <p className="text-sm text-gray-500 italic">Deslize para ver mais →</p>
            </div>
        </section>
    );
};

export default Gallery;