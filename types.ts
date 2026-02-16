import { LucideIcon } from 'lucide-react';

export interface Feature {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
}

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    text: string;
    avatar: string;
    rating: number;
}

export interface PricingPlan {
    id: string;
    name: string;
    price: number;
    oldPrice: number;
    isPopular?: boolean;
    features: string[];
    buttonText: string;
    buttonLink: string;
    color: 'green' | 'orange';
}

export interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

export interface BonusItem {
    id: string;
    title: string;
    description: string;
    image: string;
    value: number;
}

export interface ProcessStep {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
}