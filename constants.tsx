import { Scissors, Puzzle, Palette, User, Gift, CheckCircle, Download, Printer, Smile } from 'lucide-react';
import { Feature, Testimonial, PricingPlan, FAQItem, BonusItem, ProcessStep } from './types';

export const FEATURES: Feature[] = [
    {
        id: '1',
        title: '+450 Brinquedos de Papel',
        description: 'Animais, monstros e personagens 3D que seu filho vai amar montar e brincar por horas.',
        icon: Scissors
    },
    {
        id: '2',
        title: 'Quebra-Cabeças Temáticos',
        description: 'Personagens favoritos, animais e cenários que estimulam a concentração e o raciocínio lógico.',
        icon: Puzzle
    },
    {
        id: '3',
        title: '550 Desenhos para Colorir',
        description: 'Desenhos fofinhos, temas bíblicos e educativos que desenvolvem a coordenação motora fina.',
        icon: Palette
    },
    {
        id: '4',
        title: '400 Personagens Temáticos',
        description: 'Heróis, princesas, piratas e tudo o que faz a imaginação do seu filho voar longe!',
        icon: User
    }
];

export const BONUSES: BonusItem[] = [
    {
        id: '1',
        title: 'Bônus 1: 100 Jogos Quebra-Cabeça',
        description: 'Personagens, animais, temas educativos... Seu filho desenvolve concentração, raciocínio lógico e paciência enquanto se diverte por horas.',
        image: 'https://media.atomicatpages.net/u/jkXVp80niLVY7exUbTx8s7SZirl2/Pictures/share/page2MlLdnZ/rjguDo7814177.png?quality=88',
        value: 47.00
    },
    {
        id: '2',
        title: 'Bônus 2: 100 Jogos da Memória',
        description: 'Jogos clássicos de memória com temas que seu filho ama. Estimula memória, atenção e coordenação de forma lúdica.',
        image: 'https://media.atomicatpages.net/u/jkXVp80niLVY7exUbTx8s7SZirl2/Pictures/share/page2MlLdnZ/SzPnvr7953749.png?quality=77',
        value: 37.00
    },
    {
        id: '3',
        title: 'Bônus 3: 100 Atividades para Colorir',
        description: 'Desenhos incríveis para colorir + recortes educativos. Desenvolve coordenação motora fina, criatividade e concentração.',
        image: 'https://media.atomicatpages.net/u/jkXVp80niLVY7exUbTx8s7SZirl2/Pictures/share/page2MlLdnZ/wxPSys8090707.png?quality=79',
        value: 43.00
    }
];

export const PROCESS_STEPS: ProcessStep[] = [
    {
        id: '1',
        title: '1. Compra segura & Recebe Agora',
        description: 'Após o pagamento (aprovado em segundos), você recebe por e-mail e WhatsApp o acesso completo.',
        icon: Download
    },
    {
        id: '2',
        title: '2. Baixa e imprime em casa',
        description: 'Imprima quantas vezes quiser com papel sulfite comum ou 180g. Qualquer impressora serve!',
        icon: Printer
    },
    {
        id: '3',
        title: '3. Recorta, cola e brinca',
        description: 'Cada molde vem com manual passo a passo. Seu filho vai amar montar e brincar por horas!',
        icon: Smile
    }
];

export const TESTIMONIALS: Testimonial[] = [
    {
        id: '1',
        name: 'Fernanda Oliveira',
        location: 'São Paulo, SP',
        timeAgo: 'há 15 min',
        text: 'Gente, que material maravilhoso! Meu filho Davi passou a semana toda montando os brinquedos. Finalmente consegui tirar ele do tablet. Vale cada centavo!',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150',
        rating: 5
    },
    {
        id: '2',
        name: 'Juliana Costa',
        location: 'Curitiba, PR',
        timeAgo: 'há 42 min',
        text: 'A qualidade dos desenhos é incrível. Imprimi em papel mais durinho e os bonecos ficaram perfeitos. Recomendo muito para quem quer paz nas férias kkk',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150',
        rating: 5
    },
    {
        id: '3',
        name: 'Roberto Almeida',
        location: 'Belo Horizonte, MG',
        timeAgo: 'há 1h',
        text: 'Comprei para meus gêmeos e foi a salvação. Eles ficam entretidos a tarde toda recortando e colando. Melhor investimento que fiz.',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150',
        rating: 5
    },
    {
        id: '4',
        name: 'Patrícia Souza',
        location: 'Rio de Janeiro, RJ',
        timeAgo: 'há 2h',
        text: 'O pacote Premium vale muito a pena pelos bônus. Os jogos da memória são ótimos. Minha filha de 4 anos amou!',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150',
        rating: 5
    },
    {
        id: '5',
        name: 'Carla Mendez',
        location: 'Porto Alegre, RS',
        timeAgo: 'há 3h',
        text: 'Simplesmente apaixonada! 😍 É muita coisa, nem acreditei quando vi a quantidade de arquivos. Dá pra brincar o ano todo.',
        avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=150&h=150',
        rating: 5
    }
];

export const PRICING_PLANS: PricingPlan[] = [
    {
        id: 'basic',
        name: 'Pacote Básico',
        price: 10.00,
        oldPrice: 37.90,
        features: [
            '+450 moldes de brinquedos',
            'Acesso imediato',
            'Garantia de 7 dias',
            'Suporte por e-mail'
        ],
        buttonText: 'Quero o Básico',
        buttonLink: 'https://pay.cakto.com.br/nodpsin_775241',
        color: 'green'
    },
    {
        id: 'premium',
        name: 'Pacote Premium',
        price: 24.90,
        oldPrice: 97.00,
        isPopular: true,
        features: [
            'TUDO do pacote básico',
            '+750 moldes extras (Total 1.200)',
            '3 Bônus Exclusivos (R$97 grátis)',
            'Acesso vitalício + Atualizações',
            'Moldes Premium Alta Resolução'
        ],
        buttonText: 'QUERO O PREMIUM AGORA!',
        buttonLink: 'https://pay.cakto.com.br/38ovo4g',
        color: 'orange'
    }
];

export const FAQS: FAQItem[] = [
    {
        id: '1',
        question: 'Como recebo o material?',
        answer: 'Logo após a confirmação do pagamento, você recebe um e-mail com o link exclusivo para baixar todos os arquivos em PDF. É imediato!'
    },
    {
        id: '2',
        question: 'Preciso de papel especial?',
        answer: 'Não necessariamente! Você pode usar papel sulfite comum (A4). Para brinquedos de montar, recomendamos papel 180g para ficarem mais firmes, mas o papel comum também funciona.'
    },
    {
        id: '3',
        question: 'Por quanto tempo tenho acesso?',
        answer: 'No plano Premium, o acesso é vitalício! Você pode baixar quantas vezes quiser, quando quiser.'
    },
    {
        id: '4',
        question: 'E se eu não gostar?',
        answer: 'Nós oferecemos uma garantia incondicional de 7 dias. Se você não ficar satisfeito, devolvemos 100% do seu dinheiro sem perguntas.'
    }
];

export const GALLERY_IMAGES = [
    "https://media.atomicatpages.net/u/jkXVp80niLVY7exUbTx8s7SZirl2/Pictures/share/page2MlLdnZ/ImQRAp1814145.png?quality=81",
    "https://media.atomicatpages.net/u/jkXVp80niLVY7exUbTx8s7SZirl2/Pictures/share/page2MlLdnZ/LmjaDB1746841.png?quality=77",
    "https://media.atomicatpages.net/u/jkXVp80niLVY7exUbTx8s7SZirl2/Pictures/share/page2MlLdnZ/aGghCD0337977.png?quality=84",
    "https://media.atomicatpages.net/u/jkXVp80niLVY7exUbTx8s7SZirl2/Pictures/share/page2MlLdnZ/GcKeqv0337977.png?quality=73",
    "https://media.atomicatpages.net/u/jkXVp80niLVY7exUbTx8s7SZirl2/Pictures/share/page2MlLdnZ/yGpMHI0337977.png?quality=89",
    "https://media.atomicatpages.net/u/jkXVp80niLVY7exUbTx8s7SZirl2/Pictures/share/page2MlLdnZ/PJNgcs0337977.png?quality=81",
    "https://media.atomicatpages.net/u/jkXVp80niLVY7exUbTx8s7SZirl2/Pictures/share/page2MlLdnZ/FKqecD0337977.png?quality=78",
    "https://media.atomicatpages.net/u/jkXVp80niLVY7exUbTx8s7SZirl2/Pictures/share/page2MlLdnZ/YkFnip0337977.png?quality=82",
    "https://media.atomicatpages.net/u/jkXVp80niLVY7exUbTx8s7SZirl2/Pictures/share/page2MlLdnZ/xXYjmu0337977.png?quality=75",
    "https://media.atomicatpages.net/u/jkXVp80niLVY7exUbTx8s7SZirl2/Pictures/share/page2MlLdnZ/chGJkx0337977.png?quality=74"
];

export const ASSEMBLY_IMAGES = [
    "https://media.atomicatpages.net/u/jkXVp80niLVY7exUbTx8s7SZirl2/Pictures/share/page2MlLdnZ/AvzDEg0915269.png?quality=75",
    "https://media.atomicatpages.net/u/jkXVp80niLVY7exUbTx8s7SZirl2/Pictures/share/page2MlLdnZ/YHhGkr0915269.png?quality=84",
    "https://media.atomicatpages.net/u/jkXVp80niLVY7exUbTx8s7SZirl2/Pictures/share/page2MlLdnZ/HGtsYQ0915269.png?quality=86",
    "https://media.atomicatpages.net/u/jkXVp80niLVY7exUbTx8s7SZirl2/Pictures/share/page2MlLdnZ/aceRhd1507397.png?quality=72",
    "https://media.atomicatpages.net/u/jkXVp80niLVY7exUbTx8s7SZirl2/Pictures/share/page2MlLdnZ/EdPqYY1507397.png?quality=73",
    "https://media.atomicatpages.net/u/jkXVp80niLVY7exUbTx8s7SZirl2/Pictures/share/page2MlLdnZ/FbFAwa1507397.png?quality=75",
    "https://media.atomicatpages.net/u/jkXVp80niLVY7exUbTx8s7SZirl2/Pictures/share/page2MlLdnZ/xCuYrd0942991.png?quality=74",
    "https://media.atomicatpages.net/u/jkXVp80niLVY7exUbTx8s7SZirl2/Pictures/share/page2MlLdnZ/keMbfp0942991.png?quality=73",
    "https://media.atomicatpages.net/u/jkXVp80niLVY7exUbTx8s7SZirl2/Pictures/share/page2MlLdnZ/JuSzGq0942991.png?quality=71",
    "https://media.atomicatpages.net/u/jkXVp80niLVY7exUbTx8s7SZirl2/Pictures/share/page2MlLdnZ/xxiybv0915269.png?quality=78",
    "https://media.atomicatpages.net/u/jkXVp80niLVY7exUbTx8s7SZirl2/Pictures/share/page2MlLdnZ/jIQtYo0915269.png?quality=87",
    "https://media.atomicatpages.net/u/jkXVp80niLVY7exUbTx8s7SZirl2/Pictures/share/page2MlLdnZ/tnFsMn0915269.png?quality=83"
];