import React from 'react';
import { Gift } from 'lucide-react';
import { BONUSES } from '../constants';

const Bonus: React.FC = () => {
    return (
        <section className="py-16 px-4 bg-brand-lightGreen">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 bg-brand-orange text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
                        <Gift size={16} /> Bônus Exclusivos
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Além dos +1.200 moldes, você recebe <span className="text-brand-orange">3 Bônus Incríveis</span>
                        <br />
                        <span className="text-xl md:text-2xl font-medium text-gray-600 block mt-2">
                            (Valor real: <span className="line-through decoration-red-500">R$ 127,00</span> → <span className="text-green-600 font-bold">GRÁTIS</span>)
                        </span>
                    </h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        Esses bônus foram criados para turbinar ainda mais a diversão e o desenvolvimento do seu filho. 
                        Só quem pega o <strong className="text-brand-green">Pacote Premium</strong> leva tudo isso!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {BONUSES.map((bonus) => (
                        <div key={bonus.id} className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col">
                            {/* Ajustado para formato quadrado e object-contain para não cortar */}
                            <div className="relative aspect-square overflow-hidden bg-gray-50 p-4">
                                <img 
                                    src={bonus.image} 
                                    alt={bonus.title} 
                                    className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                                />
                                <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                    Bônus
                                </div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-brand-orange mb-3">{bonus.title}</h3>
                                <p className="text-gray-600 mb-6 flex-1">{bonus.description}</p>
                                
                                <div className="border-t border-gray-100 pt-4 mt-auto">
                                    <p className="text-sm text-gray-500">
                                        Valor separado: <span className="line-through">R$ {bonus.value.toFixed(2).replace('.', ',')}</span>
                                    </p>
                                    <p className="text-brand-green font-bold text-lg">
                                        Para você: R$ 0,00
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Bonus;