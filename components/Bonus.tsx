import React from 'react';
import { Gift } from 'lucide-react';
import { BONUSES } from '../constants';

const Bonus: React.FC = () => {
    return (
        <section className="py-16 px-4 bg-brand-lightBlue/30">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 bg-brand-yellow text-gray-900 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
                        <Gift size={16} /> Bônus Exclusivos
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Bônus Exclusivos para Cuidar Ainda Mais da Diversão e do Desenvolvimento do Seu Filho
                        <br />
                        <span className="text-xl md:text-2xl font-medium text-gray-600 block mt-2">
                            (Valor R$127 → <span className="text-brand-emerald font-bold">GRÁTIS</span> para você!)
                        </span>
                    </h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        Esses bônus foram criados para turbinar ainda mais a diversão e o desenvolvimento do seu filho. 
                        Só quem pega o <strong className="text-brand-blue">Pacote Premium</strong> leva tudo isso!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {BONUSES.map((bonus) => (
                        <div key={bonus.id} className="bg-brand-blue rounded-3xl overflow-hidden shadow-xl border border-brand-blue/20 hover:shadow-2xl transition-shadow duration-300 flex flex-col">
                            {/* Ajustado para formato quadrado e object-contain para não cortar */}
                            <div className="relative aspect-square overflow-hidden bg-white p-4">
                                <img 
                                    src={bonus.image} 
                                    alt={bonus.title} 
                                    loading="lazy"
                                    className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                                />
                                <div className="absolute top-4 right-4 bg-brand-emerald text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                    Bônus
                                </div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-white mb-3">{bonus.title}</h3>
                                <p className="text-white/90 mb-6 flex-1">{bonus.description}</p>
                                
                                <div className="border-t border-white/20 pt-4 mt-auto">
                                    <p className="text-sm text-white/70">
                                        Valor separado: <span className="line-through">R$ {bonus.value.toFixed(2).replace('.', ',')}</span>
                                    </p>
                                    <p className="text-brand-yellow font-bold text-lg">
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