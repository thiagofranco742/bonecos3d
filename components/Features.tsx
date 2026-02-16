import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
    return (
        <section className="py-16 px-4 bg-white rounded-t-[3rem] shadow-[0_-20px_40px_rgba(0,0,0,0.05)] -mt-10 relative z-20">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        O que você recebe no pacote?
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Um arsenal completo contra o tédio. Basta imprimir e a mágica acontece.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {FEATURES.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <div key={feature.id} className="bg-brand-lightGreen/30 p-8 rounded-3xl hover:bg-brand-lightGreen/60 transition-colors duration-300 border border-brand-green/10 flex flex-col items-center text-center group">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300 text-brand-orange">
                                    <Icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Features;