import React from 'react';

const Marquee: React.FC = () => {
    return (
        <div className="bg-brand-blue text-white py-2 relative z-50 text-center">
            <div className="font-bold text-xs md:text-sm">
                Oferta Especial Somente Hoje!
            </div>
        </div>
    );
};

export default Marquee;