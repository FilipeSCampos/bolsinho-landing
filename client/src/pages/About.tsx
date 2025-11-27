import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Users, Target, Lightbulb, TrendingUp, DollarSign, Award } from "lucide-react";
import { useLocation } from "wouter";

import filipeImg from "../imgs/filipe.png";
import hermesImg from "../imgs/hermes.png";
import juliaImg from "../imgs/julia.png";
import yasminImg from "../imgs/yasmin.png";

export default function About() {
    const [, setLocation] = useLocation();

    const team = [
        { name: "Filipe Sampaio", role: "Engenheiro, Cientista e Desenvolvedor", ra: "22251207", color: "bg-blue-100 text-blue-700", image: filipeImg },
        { name: "Hermes Winarski", role: "StakeHolder e Estatístico", ra: "22352985", color: "bg-green-100 text-green-700", image: hermesImg },
        { name: "Vinicius Magrinelli", role: "ScrumMaster e Analista", ra: "22308779", color: "bg-purple-100 text-purple-700" },
        { name: "Regis Lukas", role: "Designer Ux/Ui", ra: "22252254 ", color: "bg-pink-100 text-pink-700" },
        { name: "Yasmin Helena", role: "Database Admin e Analista", ra: "22250376", color: "bg-orange-100 text-orange-700", image: yasminImg },
        { name: "Júlia Martins", role: "Project Owner e Analista", ra: "22250263", color: "bg-teal-100 text-teal-700", image: juliaImg },
    ];

    return (
        <div className="min-h-screen bg-white font-sans">
            {/* Header */}
            <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => setLocation("/")}>
                        <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">B</span>
                        </div>
                        <span className="text-xl font-bold text-gray-900">Bolsinho</span>
                    </div>
                    <Button variant="ghost" onClick={() => setLocation("/")} className="gap-2">
                        <ArrowLeft className="w-4 h-4" /> Voltar para Home
                    </Button>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12 md:py-16 space-y-20">

                {/* Intro Section */}
                <section className="text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-medium mb-6">
                        <Award className="w-4 h-4" /> Projeto Integrador III
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Democratizando a Inteligência Financeira
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Um projeto nascido da união entre tecnologia avançada e propósito social,
                        visando transformar a maneira como as pessoas lidam com seu dinheiro.
                    </p>
                    <div className="mt-8 p-4 bg-gray-50 rounded-lg inline-block">
                        <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">Orientador</p>
                        <p className="text-lg font-bold text-gray-900">Prof. Weslley</p>
                    </div>
                </section>

                {/* Team Section */}
                <section>
                    <div className="flex items-center gap-3 mb-8 justify-center">
                        <Users className="w-6 h-6 text-green-600" />
                        <h2 className="text-3xl font-bold text-gray-900">Nossa Equipe</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {team.map((member, index) => (
                            <Card key={index} className="hover:shadow-md transition-shadow border-gray-100">
                                <CardContent className="p-6 flex items-start gap-4">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0 ${member.color} overflow-hidden`}>
                                        {member.image ? (
                                            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                        ) : (
                                            member.name.charAt(0)
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">{member.name}</h3>
                                        <p className="text-sm text-green-600 font-medium mb-1">{member.role}</p>
                                        <p className="text-xs text-gray-400">RA: {member.ra}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Motivation Section */}
                <section className="bg-gradient-to-br from-green-50 to-white p-8 md:p-12 rounded-3xl border border-green-100">
                    <div className="flex items-center gap-3 mb-6">
                        <Lightbulb className="w-6 h-6 text-yellow-500" />
                        <h2 className="text-3xl font-bold text-gray-900">Nossa Motivação</h2>
                    </div>
                    <div className="prose prose-lg text-gray-600 max-w-none">
                        <p className="mb-6">
                            Em um mundo onde a complexidade financeira muitas vezes afasta as pessoas de seus sonhos, o
                            <strong> Bolsinho</strong> nasceu de uma inquietação simples: <em>por que cuidar do dinheiro precisa ser tão difícil?</em>
                        </p>
                        <p className="mb-6">
                            Observamos que, apesar da abundância de informações, faltava uma ferramenta que não apenas mostrasse números,
                            mas que <strong>ensinasse</strong> e <strong>acolhesse</strong>. Inicialmente pensado como um simples rastreador de gastos,
                            evoluímos para um assistente inteligente ao percebermos que nossos usuários precisavam de mais do que planilhas;
                            precisavam de um parceiro.
                        </p>
                        <p>
                            Diferente dos apps tradicionais que apenas registram o passado, o Bolsinho usa <strong>Inteligência Artificial Generativa</strong> para
                            iluminar o futuro, transformando dados frios em conselhos calorosos e acionáveis, democratizando o acesso a uma
                            consultoria financeira de alta qualidade. Nossa inovação está em tornar o complexo, simples; e o distante, acessível.
                        </p>
                    </div>
                </section>

                {/* Product Positioning */}
                <section className="grid md:grid-cols-2 gap-12">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <Target className="w-6 h-6 text-red-500" />
                            <h2 className="text-3xl font-bold text-gray-900">Posicionamento</h2>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Benefícios Tangíveis</h3>
                                <ul className="space-y-2">
                                    <li className="flex gap-2 text-gray-600">
                                        <span className="text-green-500 font-bold">✓</span>
                                        Economia de tempo com automação de registros via OCR
                                    </li>
                                    <li className="flex gap-2 text-gray-600">
                                        <span className="text-green-500 font-bold">✓</span>
                                        Aumento da capacidade de poupança com insights de gastos
                                    </li>
                                    <li className="flex gap-2 text-gray-600">
                                        <span className="text-green-500 font-bold">✓</span>
                                        Centralização de todas as informações financeiras
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Ganhos Intangíveis</h3>
                                <ul className="space-y-2">
                                    <li className="flex gap-2 text-gray-600">
                                        <span className="text-green-500 font-bold">✓</span>
                                        Redução da ansiedade financeira
                                    </li>
                                    <li className="flex gap-2 text-gray-600">
                                        <span className="text-green-500 font-bold">✓</span>
                                        Aumento da confiança na tomada de decisões
                                    </li>
                                    <li className="flex gap-2 text-gray-600">
                                        <span className="text-green-500 font-bold">✓</span>
                                        Educação financeira contínua e personalizada
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <Users className="w-6 h-6 text-blue-500" />
                                <h2 className="text-3xl font-bold text-gray-900">Público Alvo</h2>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                                <p className="text-gray-700 font-medium mb-4">
                                    Jovens adultos e profissionais (20-40 anos) que buscam organização financeira mas enfrentam barreiras de tempo ou conhecimento.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-white px-3 py-1 rounded-full text-sm text-blue-600 border border-blue-200">Universitários</span>
                                    <span className="bg-white px-3 py-1 rounded-full text-sm text-blue-600 border border-blue-200">Jovens Profissionais</span>
                                    <span className="bg-white px-3 py-1 rounded-full text-sm text-blue-600 border border-blue-200">Pequenos Investidores</span>
                                    <span className="bg-white px-3 py-1 rounded-full text-sm text-blue-600 border border-blue-200">Digital Natives</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <DollarSign className="w-6 h-6 text-green-600" />
                                <h2 className="text-3xl font-bold text-gray-900">Monetização</h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Card className="border-green-100 bg-green-50/50">
                                    <CardContent className="p-4">
                                        <h4 className="font-bold text-gray-900 mb-2">Modelo Freemium</h4>
                                        <p className="text-sm text-gray-600">Funcionalidades básicas gratuitas, com recursos avançados de IA e relatórios profundos no plano Premium.</p>
                                    </CardContent>
                                </Card>
                                <Card className="border-green-100 bg-green-50/50">
                                    <CardContent className="p-4">
                                        <h4 className="font-bold text-gray-900 mb-2">Marketplace</h4>
                                        <p className="text-sm text-gray-600">Comissões por indicação de produtos financeiros (cartões, investimentos) alinhados ao perfil do usuário.</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            {/* Footer Simple */}
            <footer className="bg-gray-50 py-8 border-t border-gray-100 mt-12">
                <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
                    <p>© 2025 Bolsinho. Projeto Integrador III.</p>
                </div>
            </footer>
        </div>
    );
}
