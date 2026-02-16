import React from 'react';
import { Check, ShieldCheck } from 'lucide-react';
import Button from './Button';
import { PRICING_PLANS } from '../constants';

const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-brand-lightGreen to-white">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        Comece a diversão HOJE!
                    </h2>
                    <p className="text-xl text-gray-600">
                        Escolha o pacote ideal para sua família.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {PRICING_PLANS.map((plan) => (
                        <div 
                            key={plan.id} 
                            className={`relative bg-white rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-2 ${
                                plan.isPopular 
                                    ? 'border-4 border-brand-orange shadow-2xl scale-105 md:scale-110 z-10' 
                                    : 'border border-gray-200 shadow-xl'
                            }`}
                        >
                            {plan.isPopular && (
                                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-brand-orange text-white px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider shadow-lg">
                                    Mais Vendido
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                                
                                {plan.id === 'premium' && (
                                    <div className="mb-4 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                                        <img 
                                            src="https://media.atomicatpages.net/u/jkXVp80niLVY7exUbTx8s7SZirl2/Pictures/share/page2MlLdnZ/nEbbkE7822562.png?quality=72" 
                                            srcSet="https://media.atomicatpages.net/u/jkXVp80niLVY7exUbTx8s7SZirl2/Pictures/share/page2MlLdnZ/nEbbkE7822562.png?quality=72 1500w, https://media.atomicatpages.net/u/jkXVp80niLVY7exUbTx8s7SZirl2/Pictures/share/page2MlLdnZ/nEbbkE7822562.png?width=300&height=160&quality=74 300w, https://media.atomicatpages.net/u/jkXVp80niLVY7exUbTx8s7SZirl2/Pictures/share/page2MlLdnZ/nEbbkE7822562.png?width=768&height=409&quality=80 768w, https://media.atomicatpages.net/u/jkXVp80niLVY7exUbTx8s7SZirl2/Pictures/share/page2MlLdnZ/nEbbkE7822562.png?width=1024&height=545&quality=88 1024w"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            alt="Prévia do Pacote Premium" 
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>
                                )}

                                <div className="flex justify-center items-center gap-2 mb-2">
                                    <span className="text-gray-400 line-through text-lg">R$ {plan.oldPrice.toFixed(2)}</span>
                                </div>
                                <div className="text-5xl font-extrabold text-gray-900 mb-2">
                                    <span className="text-2xl align-top mr-1">R$</span>
                                    {plan.price.toFixed(2).replace('.', ',')}
                                </div>
                                <p className="text-gray-500 text-sm">Pagamento único</p>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className={`mt-1 p-0.5 rounded-full ${plan.isPopular ? 'bg-brand-orange text-white' : 'bg-brand-green text-white'}`}>
                                            <Check size={12} strokeWidth={4} />
                                        </div>
                                        <span className="text-gray-700 font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button 
                                variant={plan.color === 'orange' ? 'secondary' : 'primary'} 
                                fullWidth
                                className="text-lg"
                            >
                                {plan.buttonText}
                            </Button>

                            {plan.isPopular && (
                                <p className="text-center mt-4 text-xs text-gray-500 flex items-center justify-center gap-1">
                                    <ShieldCheck size={14} className="text-green-500"/>
                                    Garantia Incondicional de 7 Dias
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                   <div className="inline-block bg-red-100 border border-red-200 text-red-700 px-6 py-3 rounded-lg animate-pulse">
                        <p className="font-bold text-sm md:text-base">
                             ⚠️ Oferta válida apenas HOJE. O preço subirá amanhã.
                        </p>
                   </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;