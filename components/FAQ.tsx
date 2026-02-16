import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">Perguntas Frequentes</h2>
                </div>

                <div className="space-y-4">
                    {FAQS.map((faq, index) => (
                        <div 
                            key={faq.id} 
                            className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200 hover:border-brand-green/50"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center p-6 text-left bg-gray-50 hover:bg-white transition-colors"
                            >
                                <span className="font-bold text-gray-900 text-lg">{faq.question}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="text-brand-green flex-shrink-0" />
                                ) : (
                                    <ChevronDown className="text-gray-400 flex-shrink-0" />
                                )}
                            </button>
                            
                            <div 
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="p-6 pt-0 text-gray-600 bg-white leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;