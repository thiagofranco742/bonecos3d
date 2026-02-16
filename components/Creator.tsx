import React from 'react';
import { Star } from 'lucide-react';

const Creator: React.FC = () => {
    return (
        <section className="py-20 bg-white relative overflow-hidden border-t border-gray-100">
             {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-green/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                    {/* Image Column */}
                    <div className="w-full md:w-1/2 lg:w-5/12">
                        <div className="relative group mx-auto max-w-sm md:max-w-none">
                            <div className="absolute inset-0 bg-brand-orange rounded-[2rem] rotate-3 group-hover:rotate-6 transition-transform duration-300 opacity-20"></div>
                            <img 
                                src="https://s3.segredosouro.com/videos/perfil%20Maria.webp" 
                                alt="Maria - Idealizadora do Central Designer" 
                                className="relative w-full h-auto rounded-[2rem] shadow-2xl transform transition-transform duration-300 group-hover:-translate-y-2 border-4 border-white object-cover"
                            />
                            
                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3 animate-bounce-slow">
                                <div className="bg-brand-green/10 p-2 rounded-full">
                                    <Star className="text-brand-green" size={24} fill="currentColor" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-medium">Pedagoga Especialista</p>
                                    <p className="text-sm font-bold text-gray-900">Educação Infantil</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="w-full md:w-1/2 lg:w-7/12 text-left">
                        <span className="inline-block px-4 py-1 bg-brand-green/10 text-brand-green font-bold rounded-full text-sm mb-4">
                            QUEM IDEALIZOU O PROJETO?
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Prazer, eu sou a Maria! <span className="text-brand-orange">👋</span>
                        </h2>
                        
                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                            <p>
                                Sou mãe, pedagoga e fundadora do <strong>Central Designer</strong>.
                            </p>
                            <p>
                                Sabe aquele aperto no coração de ver seu filho parado na frente da TV por horas, com o olhar vidrado? Eu também senti. A tecnologia é ótima, mas eu percebi que ela estava roubando a infância dos meus filhos. A criatividade estava adormecida e a casa silenciosa demais.
                            </p>
                            <p>
                                Eu criei este projeto não apenas como um produto, mas como um <strong>resgate</strong>. Um resgate do brilho nos olhos e do grito animado de <em>"olha mãe, o que eu fiz!"</em>.
                            </p>
                            <p>
                                Cada um desses 1.200 moldes foi selecionado pensando em desenvolver habilidades reais: paciência, foco e a alegria genuína de construir o próprio brinquedo. Hoje, mais de <strong>22.000 famílias</strong> trocaram o vício das telas por momentos inesquecíveis na mesa da sala.
                            </p>
                            <p className="font-medium text-gray-900">
                                Espero que sua família seja a próxima a descobrir essa alegria.
                            </p>
                        </div>

                        <div className="mt-8 pt-8 border-t border-brand-green/10 flex items-center gap-4">
                            <div className="flex-1">
                                <p className="font-handwriting text-4xl text-brand-green transform -rotate-2">
                                    Maria Clara
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Creator;