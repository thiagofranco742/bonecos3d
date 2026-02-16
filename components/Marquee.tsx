import React, { useEffect, useState } from 'react';

const Marquee: React.FC = () => {
    const [dateString, setDateString] = useState('');

    useEffect(() => {
        const date = new Date();
        const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
        setDateString(date.toLocaleDateString('pt-BR', options));
    }, []);

    return (
        <div className="bg-brand-lightOrange text-white py-3 overflow-hidden relative z-50">
            <div className="animate-marquee whitespace-nowrap inline-block w-full text-center font-bold text-sm md:text-base">
                🔥 OFERTA RELÂMPAGO SOMENTE HOJE ({dateString}) 🔥 Últimas horas para garantir por esse preço! &nbsp;&nbsp;&nbsp; • &nbsp;&nbsp;&nbsp; 🔥 OFERTA RELÂMPAGO SOMENTE HOJE ({dateString}) 🔥
            </div>
        </div>
    );
};

export default Marquee;