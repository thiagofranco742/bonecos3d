import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 px-4 border-t border-gray-800">
            <div className="max-w-6xl mx-auto text-center">
                <div className="mb-8">
                    <h3 className="text-2xl font-bold text-brand-green mb-2">Central Designer</h3>
                    <p className="text-gray-400 text-sm">Diversão criativa, saudável e em família.</p>
                </div>
                
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-gray-400 mb-8">
                    <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                    <span className="hidden md:inline">•</span>
                    <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                    <span className="hidden md:inline">•</span>
                    <a href="#" className="hover:text-white transition-colors">Contato</a>
                </div>

                <div className="text-xs text-gray-600">
                    <p>&copy; {new Date().getFullYear()} Central Designer. Todos os direitos reservados.</p>
                    <p className="mt-2">Este site não é afiliado ao Facebook ou Google.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;