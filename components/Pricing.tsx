import React, { useState } from 'react';
import { Check, ShieldCheck, X } from 'lucide-react';
import Button from './Button';
import { PRICING_PLANS } from '../constants';

const Pricing: React.FC = () => {
    const [showUpgradeModal, setShowUpgradeModal] = useState(false);

    const handlePlanClick = (e: React.MouseEvent, planId: string) => {
        if (planId === 'basic') {
            e.preventDefault();
            setShowUpgradeModal(true);
        }
    };

    return (
        <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-brand-lightBlue/30 to-white relative">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        Comece a diversão HOJE!
                    </h2>
                    <p className="text-xl text-gray-600">
                        Escolha o pacote ideal para sua família.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {PRICING_PLANS.map((plan) => (
                        <div 
                            key={plan.id} 
                            className={`relative bg-brand-blue rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-2 ${
                                plan.isPopular 
                                    ? 'border-4 border-brand-yellow shadow-2xl scale-105 md:scale-110 z-10' 
                                    : 'border border-brand-blue/20 shadow-xl'
                            }`}
                        >
                            {plan.isPopular && (
                                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-brand-yellow text-gray-900 px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider shadow-lg">
                                    Mais Vendido
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                
                                {plan.id === 'premium' && (
                                    <div className="mb-4 rounded-xl overflow-hidden shadow-sm border border-white/20">
                                        <img 
                                            src="https://media.atomicatpages.net/u/jkXVp80niLVY7exUbTx8s7SZirl2/Pictures/share/page2MlLdnZ/nEbbkE7822562.png?quality=72" 
                                            srcSet="https://media.atomicatpages.net/u/jkXVp80niLVY7exUbTx8s7SZirl2/Pictures/share/page2MlLdnZ/nEbbkE7822562.png?quality=72 1500w, https://media.atomicatpages.net/u/jkXVp80niLVY7exUbTx8s7SZirl2/Pictures/share/page2MlLdnZ/nEbbkE7822562.png?width=300&height=160&quality=74 300w, https://media.atomicatpages.net/u/jkXVp80niLVY7exUbTx8s7SZirl2/Pictures/share/page2MlLdnZ/nEbbkE7822562.png?width=768&height=409&quality=80 768w, https://media.atomicatpages.net/u/jkXVp80niLVY7exUbTx8s7SZirl2/Pictures/share/page2MlLdnZ/nEbbkE7822562.png?width=1024&height=545&quality=88 1024w"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            alt="Prévia do Pacote Premium" 
                                            loading="lazy"
                                            width="500"
                                            height="300"
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>
                                )}

                                <div className="flex justify-center items-center gap-2 mb-2">
                                    <span className="text-white/60 line-through text-lg">R$ {plan.oldPrice.toFixed(2)}</span>
                                </div>
                                <div className="text-5xl font-extrabold text-white mb-2">
                                    <span className="text-2xl align-top mr-1">R$</span>
                                    {plan.price.toFixed(2).replace('.', ',')}
                                </div>
                                <p className="text-white/70 text-sm">Pagamento único</p>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className={`mt-1 p-0.5 rounded-full ${plan.isPopular ? 'bg-brand-yellow text-gray-900' : 'bg-brand-emerald text-white'}`}>
                                            <Check size={12} strokeWidth={4} />
                                        </div>
                                        <span className="text-white/90 font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button 
                                variant="secondary" 
                                fullWidth
                                className="text-lg"
                                href={plan.buttonLink}
                                onClick={(e) => handlePlanClick(e, plan.id)}
                            >
                                {plan.buttonText}
                            </Button>

                            {plan.isPopular && (
                                <p className="text-center mt-4 text-xs text-white/60 flex items-center justify-center gap-1">
                                    <ShieldCheck size={14} className="text-brand-emerald"/>
                                    Garantia Incondicional de 7 Dias: Se não amar, devolvemos seu dinheiro. Sem perguntas.
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                   <div className="inline-block bg-red-100 border border-red-200 text-red-700 px-6 py-3 rounded-lg animate-pulse">
                        <p className="font-bold text-sm md:text-base">
                             ⚠️ Preço promocional válido só hoje — amanhã volta ao normal. Cuide da diversão da sua família enquanto é hora!
                        </p>
                   </div>
                </div>
            </div>

            {/* Upgrade Modal */}
            {showUpgradeModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-6 md:p-8 relative animate-in zoom-in-95 duration-200">
                        <button 
                            onClick={() => setShowUpgradeModal(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="text-center">
                            <div className="inline-block bg-brand-orange text-white px-4 py-1 rounded-full text-sm font-bold mb-4 animate-bounce">
                                🎉 OFERTA ÚNICA!
                            </div>
                            
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                ESPERE! Você ganhou um <span className="text-brand-orange">DESCONTÃO!</span>
                            </h3>
                            
                            <p className="text-gray-600 mb-6 text-lg">
                                Leve o <span className="font-bold text-brand-darkGreen">Pacote PREMIUM</span> (de <span className="line-through">R$ 24,90</span>) por apenas:
                            </p>

                            <div className="bg-brand-lightGreen/50 rounded-2xl p-6 mb-8 border-2 border-brand-green border-dashed">
                                <div className="text-5xl font-extrabold text-brand-darkGreen mb-2">
                                    <span className="text-2xl align-top mr-1">R$</span>
                                    14,90
                                </div>
                                <p className="text-sm text-brand-darkGreen font-medium">
                                    Economize R$ 10,00 agora mesmo!
                                </p>
                            </div>

                            <div className="space-y-3">
                                <Button 
                                    variant="primary" 
                                    fullWidth 
                                    href="https://pay.cakto.com.br/m4edihq"
                                    className="text-lg py-4 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
                                >
                                    SIM! QUERO O DESCONTO (R$ 14,90)
                                </Button>
                                
                                <a 
                                    href="https://pay.cakto.com.br/nodpsin_775241"
                                    className="block text-gray-400 text-sm hover:text-gray-600 underline transition-colors mt-4"
                                >
                                    Não, obrigado. Quero pagar R$ 10,00 no pacote básico.
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Pricing;