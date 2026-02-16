import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        O que dizem os pais? <span className="text-yellow-500">⭐</span>
                    </h2>
                </div>

                {/* Container do Carrossel */}
                <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
                    {TESTIMONIALS.map((testimonial) => (
                        <div 
                            key={testimonial.id} 
                            className="snap-center shrink-0 w-[85vw] md:w-[400px] bg-brand-cream p-8 rounded-2xl shadow-sm relative flex flex-col"
                        >
                            <Quote className="absolute top-6 right-6 text-brand-green/20" size={40} />
                            
                            <div className="flex items-center gap-1 mb-6 text-yellow-400">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={18} fill="currentColor" />
                                ))}
                            </div>
                            
                            <p className="text-gray-700 italic mb-8 relative z-10 flex-1">"{testimonial.text}"</p>
                            
                            <div className="flex items-center gap-4 mt-auto">
                                <img 
                                    src={testimonial.avatar} 
                                    alt={testimonial.name} 
                                    className="w-12 h-12 rounded-full object-cover border-2 border-brand-green"
                                />
                                <div>
                                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-8 text-center">
                    <p className="text-brand-green font-bold text-lg bg-brand-green/10 inline-block px-6 py-2 rounded-full">
                        +22.060 famílias já transformaram as férias dos filhos
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;