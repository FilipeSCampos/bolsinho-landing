import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Brain, BarChart3, Newspaper, Zap, Github, Mail, Sparkles, FileText, Eye, Database } from "lucide-react";

import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-100">
        <div className="container flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-3">
            <img src="/logo-bolsinho.png" alt="Bolsinho Logo" className="h-10 md:h-12 w-auto" />
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-bold text-green-700">Bolsinho</h1>
              <p className="text-xs text-gray-600">Assistente Financeiro</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 hover:text-green-700 font-medium transition">
              Funcionalidades
            </a>
            <a href="#tech" className="text-gray-700 hover:text-green-700 font-medium transition">
              Tecnologia
            </a>
            <Link href="/about" className="text-gray-700 hover:text-green-700 font-medium transition cursor-pointer">
              Sobre
            </Link>
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <a href="https://github.com/FilipeSCampos/Bolsinho" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-700 transition">
              <Github className="w-5 h-5" />
            </a>
            <Button
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={() => window.location.href = 'https://bolsinho-deploy.onrender.com/login'}
            >
              Começar Agora
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-24 lg:py-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-0 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Hero Text */}
            <div className="space-y-6 lg:space-y-8">
              <div className="inline-block px-4 py-2 bg-green-100 rounded-full">
                <span className="text-sm font-semibold text-green-700">🚀 Open-Source & Inteligente</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Seu Assistente Financeiro Pessoal
              </h2>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Bolsinho combina inteligência artificial, visão computacional e análise de dados para ajudar você a gerenciar suas finanças de forma eficiente e inteligente.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white group"
                  onClick={() => window.location.href = 'https://bolsinho-deploy.onrender.com/login'}
                >
                  Explorar Agora
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-300 text-green-700 hover:bg-green-50"
                  onClick={() => window.open('https://github.com/FilipeSCampos/Bolsinho', '_blank')}
                >
                  Ver no GitHub
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 pt-8">
                <div>
                  <p className="text-2xl font-bold text-green-700">100%</p>
                  <p className="text-sm text-gray-600">Open-Source</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-700">4+</p>
                  <p className="text-sm text-gray-600">Funcionalidades Principais</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-700">IA</p>
                  <p className="text-sm text-gray-600">Powered by Llama</p>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-3xl opacity-10 blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 border border-green-200 shadow-2xl">
                  <div className="space-y-4">
                    <div className="h-12 bg-green-200 rounded-lg animate-pulse"></div>
                    <div className="space-y-3">
                      <div className="h-4 bg-green-100 rounded w-3/4 animate-pulse"></div>
                      <div className="h-4 bg-green-100 rounded w-1/2 animate-pulse"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 pt-4">
                      <div className="h-20 bg-green-200 rounded-lg animate-pulse"></div>
                      <div className="h-20 bg-green-200 rounded-lg animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Funcionalidades Principais
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tudo que você precisa para gerenciar suas finanças em um único lugar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1: Chatbot */}
            <Card className="p-6 hover:shadow-lg transition border-green-100 hover:border-green-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Chatbot Multimodal</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                IA avançada que processa texto, imagens e áudio. Envie fotos de recibos e notas fiscais para análise automática.
              </p>
            </Card>

            {/* Feature 2: Gestão Financeira */}
            <Card className="p-6 hover:shadow-lg transition border-green-100 hover:border-green-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Gestão Completa</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Categorização automática de gastos, orçamentos personalizados, metas financeiras e alertas inteligentes.
              </p>
            </Card>

            {/* Feature 3: Notícias */}
            <Card className="p-6 hover:shadow-lg transition border-green-100 hover:border-green-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Newspaper className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Notícias Financeiras</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Mantenha-se atualizado com as últimas notícias do mercado financeiro e análise de impacto no seu portfólio.
              </p>
            </Card>

            {/* Feature 4: Visualização */}
            <Card className="p-6 hover:shadow-lg transition border-green-100 hover:border-green-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Dashboards Interativos</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Visualizações claras de gastos, tendências, comparativos com orçamento e projeções futuras.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section - MOVED UP */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Por que escolher Bolsinho?
            </h3>
            <p className="text-lg text-gray-600 text-center mb-12">
              Transforme sua relação com o dinheiro através de educação financeira acessível e inteligente
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4 p-4 rounded-lg hover:bg-green-50 transition">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-sm">💡</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Aprenda no Seu Ritmo</h4>
                  <p className="text-gray-600 text-sm">Converse com nossa IA sobre qualquer dúvida financeira. Desde conceitos básicos até estratégias avançadas de investimento, tudo explicado de forma simples e personalizada.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-lg hover:bg-green-50 transition">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-sm">📊</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Visualize Suas Finanças Claramente</h4>
                  <p className="text-gray-600 text-sm">Entenda para onde seu dinheiro está indo com gráficos intuitivos e relatórios automáticos. Tome decisões informadas baseadas em dados reais do seu histórico financeiro.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-lg hover:bg-green-50 transition">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-sm">🎯</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Alcance Seus Objetivos Financeiros</h4>
                  <p className="text-gray-600 text-sm">Defina metas de economia e investimento e acompanhe seu progresso. O Bolsinho te ajuda a manter o foco e celebrar cada conquista no caminho da independência financeira.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-lg hover:bg-green-50 transition">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-sm">📱</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Simplifique Sua Vida Financeira</h4>
                  <p className="text-gray-600 text-sm">Tire foto de recibos e notas fiscais - nossa IA extrai e categoriza tudo automaticamente. Menos trabalho manual, mais tempo para focar no que importa.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-lg hover:bg-green-50 transition">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-sm">🔒</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Seus Dados, Seu Controle</h4>
                  <p className="text-gray-600 text-sm">100% open-source e transparente. Você pode verificar exatamente como seus dados são tratados. Sem surpresas, sem letras miúdas, apenas confiança.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-lg hover:bg-green-50 transition">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-sm">🌱</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Cresça Junto com a Comunidade</h4>
                  <p className="text-gray-600 text-sm">Faça parte de uma comunidade que acredita em educação financeira acessível para todos. Contribua, aprenda e ajude outras pessoas a conquistarem sua liberdade financeira.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="py-16 md:py-24 bg-gradient-to-b from-green-50 to-white">
        <div className="container">
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stack Tecnológico Moderno
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Construído com as melhores tecnologias open-source disponíveis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Frontend */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                Frontend
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-green-100">
                  <span className="font-medium text-gray-900">React 19 + TypeScript</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">UI</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-green-100">
                  <span className="font-medium text-gray-900">Tailwind CSS 4</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Estilo</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-green-100">
                  <span className="font-medium text-gray-900">shadcn/ui</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Componentes</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-green-100">
                  <span className="font-medium text-gray-900">Recharts</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Gráficos</span>
                </div>
              </div>
            </div>

            {/* Backend & AI */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                Backend & IA
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-green-100">
                  <span className="font-medium text-gray-900">Node.js + Express</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Server</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-green-100">
                  <span className="font-medium text-gray-900">tRPC 11</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">API</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-green-100">
                  <span className="font-medium text-gray-900">MySQL + Drizzle ORM</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">BD</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-green-100">
                  <span className="font-medium text-gray-900">Groq API + Llama 3.3</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">LLM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl border border-green-200">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Integrações Principais</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center p-4 bg-white rounded-lg border border-green-200 hover:shadow-md transition">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-3">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <p className="font-semibold text-gray-900">Groq API</p>
                <p className="text-sm text-gray-600">LLM & Vision</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-lg border border-green-200 hover:shadow-md transition">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-3">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <p className="font-semibold text-gray-900">NewsAPI</p>
                <p className="text-sm text-gray-600">Notícias</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-lg border border-green-200 hover:shadow-md transition">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-3">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <p className="font-semibold text-gray-900">Tesseract OCR</p>
                <p className="text-sm text-gray-600">Reconhecimento</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-lg border border-green-200 hover:shadow-md transition">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-3">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <p className="font-semibold text-gray-900">S3 Storage</p>
                <p className="text-sm text-gray-600">Armazenamento</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Diagram Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Arquitetura do Sistema
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Uma arquitetura moderna e escalável que combina o melhor de cada tecnologia
            </p>
          </div>

          {/* Architecture Layers */}
          <div className="max-w-5xl mx-auto space-y-6">

            {/* Layer 1: Cliente (Browser) */}
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border-2 border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Cliente (Browser)</h4>
                    <p className="text-sm text-gray-600">Interface do Usuário</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="bg-white p-3 rounded-lg border border-blue-100 flex items-center gap-2">
                    <svg viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#61DAFB] flex-shrink-0">
                      <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
                      <g stroke="currentColor" strokeWidth="1" fill="none">
                        <ellipse rx="10" ry="4.5"></ellipse>
                        <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                        <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
                      </g>
                    </svg>
                    <div>
                      <p className="font-medium text-sm text-gray-900">React 19</p>
                      <p className="text-xs text-gray-600">UI Framework</p>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-blue-100 flex items-center gap-2">
                    <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript" className="w-5 h-5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm text-gray-900">TypeScript</p>
                      <p className="text-xs text-gray-600">Type Safety</p>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-blue-100 flex items-center gap-2">
                    <img width="48" height="48" src="https://img.icons8.com/color/48/tailwind_css.png" alt="tailwind_css" className="w-5 h-5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm text-gray-900">Tailwind CSS</p>
                      <p className="text-xs text-gray-600">Styling</p>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-blue-100 flex items-center gap-2">
                    <img width="50" height="50" src="https://img.icons8.com/ios/50/shadow-photography.png" alt="shadow-photography" className="w-5 h-5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm text-gray-900">shadcn/ui</p>
                      <p className="text-xs text-gray-600">Components</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Arrow Down */}
              <div className="flex justify-center my-4">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-300 to-green-300"></div>
              </div>
            </div>

            {/* Layer 2: Backend (Node.js) */}
            <div className="relative">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Backend (Node.js)</h4>
                    <p className="text-sm text-gray-600">API e Lógica de Negócio</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="bg-white p-3 rounded-lg border border-green-100 flex items-center gap-2">
                    <svg viewBox="0 0 32 32" className="w-5 h-5 flex-shrink-0">
                      <path fill="#339933" d="M16 0L2.5 7.5v15L16 30l13.5-7.5v-15L16 0zm0 2.5l11 6.1v12.2L16 27l-11-6.1V8.6l11-6.1zM14 10v10h4V10h-4z" />
                    </svg>
                    <div>
                      <p className="font-medium text-sm text-gray-900">Express</p>
                      <p className="text-xs text-gray-600">Web Server</p>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-green-100">
                    <p className="font-medium text-sm text-gray-900">tRPC 11</p>
                    <p className="text-xs text-gray-600">Type-safe API</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-green-100 flex items-center gap-2">
                    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/database-options.png" alt="database-options" className="w-5 h-5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm text-gray-900">Drizzle ORM</p>
                      <p className="text-xs text-gray-600">Database</p>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-green-100 flex items-center gap-2">
                    <img width="50" height="50" src="https://img.icons8.com/external-basicons-solid-edtgraphics/50/external-safe-safe-and-security-basicons-solid-edtgraphics-5.png" alt="external-safe-safe-and-security-basicons-solid-edtgraphics-5" className="w-5 h-5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm text-gray-900">JWT Auth</p>
                      <p className="text-xs text-gray-600">Security</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Arrow Down - Split */}
              <div className="flex justify-center items-center my-4 gap-32">
                <div className="w-1 h-8 bg-gradient-to-b from-green-300 to-purple-300"></div>
                <div className="w-1 h-8 bg-gradient-to-b from-green-300 to-orange-300"></div>
              </div>
            </div>

            {/* Layer 3: Services (Python + Database) */}
            <div className="grid md:grid-cols-2 gap-6">

              {/* Python Services */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center relative overflow-hidden">
                    <Sparkles className="w-6 h-6 text-white relative z-10" />
                    <svg viewBox="0 0 256 256" className="absolute w-full h-full opacity-20 top-0 left-0">
                      <path fill="#3776AB" d="M126.9 25.1c24.3 0 28.9 10.5 28.9 10.5l.2 21.8H100.6v3.2H169v19.1h-44.5c-24.1 0-28.8 10.6-28.8 10.6h-.2v49.4h45.6v-14h-29V81.5h58.6c24.2 0 28.8-10.6 28.8-10.6v-32c0-13.6-11.5-25.6-32.6-25.6H127l-.1 11.8z" />
                      <path fill="#FFD43B" d="M128.8 229.8c-24.3 0-28.9-10.5-28.9-10.5l-.2-21.8h55.4v-3.2H86.7v-19.1h44.5c24.1 0 28.8-10.6 28.8-10.6h.2v-49.4H114.6v14h29v34.2H85c-24.2 0-28.8 10.6-28.8 10.6v32c0 13.6 11.5 25.6 32.6 25.6h40.1l.1-11.8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Serviços Python</h4>
                    <p className="text-xs text-gray-600">IA e Processamento</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="bg-white p-2 rounded-lg border border-purple-100 flex items-center gap-2">
                    <img width="30" height="30" src="https://img.icons8.com/ios/50/llama.png" alt="llama" className="w-5 h-5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-xs text-gray-900">Groq Service</p>
                      <p className="text-xs text-gray-600">LLM + Vision</p>
                    </div>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-purple-100 flex items-center gap-2">
                    <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/pdf.png" alt="pdf" className="w-5 h-5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-xs text-gray-900">OCR Service</p>
                      <p className="text-xs text-gray-600">Tesseract</p>
                    </div>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-purple-100 flex items-center gap-2">
                    <img width="30" height="30" src="https://img.icons8.com/ios-filled/500/news.png" alt="news" className="w-5 h-5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-xs text-gray-900">News Service</p>
                      <p className="text-xs text-gray-600">NewsAPI</p>
                    </div>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-purple-100 flex items-center gap-2">
                    <img width="30" height="30" src="https://img.icons8.com/windows/32/stocks-growth.png" alt="stocks-growth" className="w-5 h-5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-xs text-gray-900">Stock Service</p>
                      <p className="text-xs text-gray-600">Brapi</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* MySQL Database */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 border-2 border-orange-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">MySQL Database</h4>
                    <p className="text-xs text-gray-600">Armazenamento de Dados</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="bg-white p-2 rounded-lg border border-orange-100">
                    <p className="font-medium text-xs text-gray-900">users</p>
                    <p className="text-xs text-gray-600">Usuários</p>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-orange-100">
                    <p className="font-medium text-xs text-gray-900">investments</p>
                    <p className="text-xs text-gray-600">Investimentos</p>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-orange-100">
                    <p className="font-medium text-xs text-gray-900">stockCache</p>
                    <p className="text-xs text-gray-600">Cache de Ações</p>
                  </div>
                  <div className="bg-white p-2 rounded-lg border border-orange-100">
                    <p className="font-medium text-xs text-gray-900">transactions</p>
                    <p className="text-xs text-gray-600">Transações</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow Down from Python Services */}
            <div className="flex justify-start ml-[25%] md:ml-[22%]">
              <div className="w-1 h-8 bg-gradient-to-b from-purple-300 to-gray-300"></div>
            </div>

            {/* Layer 4: External APIs */}
            <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-6 border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-slate-500 rounded-lg flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">APIs Externas</h4>
                  <p className="text-sm text-gray-600">Integrações de Terceiros</p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-white p-3 rounded-lg border border-gray-100 flex items-center gap-2">
                  <img width="50" height="50" src="https://img.icons8.com/ios/50/llama.png" alt="llama" className="w-5 h-5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm text-gray-900">Groq API</p>
                    <p className="text-xs text-gray-600">LLM Llama</p>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-100">
                  <p className="font-medium text-sm text-gray-900">NewsAPI</p>
                  <p className="text-xs text-gray-600">Notícias</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-100">
                  <p className="font-medium text-sm text-gray-900">Brapi</p>
                  <p className="text-xs text-gray-600">Ações B3</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-100 flex items-center gap-2">
                  <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/database.png" alt="database" className="w-5 h-5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm text-gray-900">S3 Storage</p>
                    <p className="text-xs text-gray-600">Arquivos</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Data Flow Diagram */}
          <div className="mt-24">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Fluxo de Dados
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Como sua informação viaja com segurança e rapidez pelo sistema
              </p>
            </div>

            <div className="max-w-4xl mx-auto relative">
              {/* Vertical Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-green-200 to-purple-200 -translate-x-1/2 hidden md:block"></div>

              <div className="space-y-12 relative z-10">
                {/* Step 1: User */}
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1 text-center md:text-right order-2 md:order-1">
                    <h4 className="text-lg font-bold text-gray-900">1. Usuário</h4>
                    <p className="text-sm text-gray-600">Envia mensagem (texto/imagem/áudio)</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg order-1 md:order-2">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="flex-1 order-3"></div>
                </div>

                {/* Step 2: Frontend */}
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1 order-3 md:order-1"></div>
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg order-1 md:order-2">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="flex-1 text-center md:text-left order-2 md:order-3">
                    <h4 className="text-lg font-bold text-gray-900">Frontend (React)</h4>
                    <p className="text-sm text-gray-600">Valida input e envia via tRPC</p>
                  </div>
                </div>

                {/* Step 3: Backend */}
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1 text-center md:text-right order-2 md:order-1">
                    <h4 className="text-lg font-bold text-gray-900">Backend (Node.js)</h4>
                    <p className="text-sm text-gray-600">Roteamento e Autenticação</p>
                  </div>
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg order-1 md:order-2">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="flex-1 order-3"></div>
                </div>

                {/* Step 4: Python Bridge */}
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1 order-3 md:order-1"></div>
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg order-1 md:order-2">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div className="flex-1 text-center md:text-left order-2 md:order-3">
                    <h4 className="text-lg font-bold text-gray-900">Python Bridge</h4>
                    <p className="text-sm text-gray-600">Gerencia processos Python</p>
                  </div>
                </div>

                {/* Step 5: Services & DB */}
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1 text-center md:text-right order-2 md:order-1">
                    <h4 className="text-lg font-bold text-gray-900">Serviços & Banco de Dados</h4>
                    <p className="text-sm text-gray-600">Processamento IA, OCR e Cache</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg order-1 md:order-2">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <div className="flex-1 order-3"></div>
                </div>

                {/* Step 6: External APIs */}
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1 order-3 md:order-1"></div>
                  <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg order-1 md:order-2">
                    <span className="text-white font-bold">6</span>
                  </div>
                  <div className="flex-1 text-center md:text-left order-2 md:order-3">
                    <h4 className="text-lg font-bold text-gray-900">APIs Externas</h4>
                    <p className="text-sm text-gray-600">Groq, NewsAPI, Brapi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto para gerenciar suas finanças?
          </h3>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            Comece agora com Bolsinho e descubra como a inteligência artificial pode transformar sua vida financeira
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-green-700 hover:bg-green-50 font-semibold"
              onClick={() => window.location.href = 'https://bolsinho-deploy.onrender.com/login'}
            >
              Começar Agora
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={() => window.open('https://github.com/FilipeSCampos/Bolsinho#-documentação', '_blank')}
            >
              Documentação
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">Bolsinho</h4>
              <p className="text-sm">Seu assistente financeiro pessoal inteligente e open-source</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-white transition">Funcionalidades</a></li>
                <li><a href="https://github.com/FilipeSCampos/Bolsinho#-documentação" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Documentação</a></li>
                <li><a href="https://bolsinho-deploy.onrender.com/login" className="hover:text-white transition">Acessar App</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Comunidade</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://github.com/FilipeSCampos/Bolsinho" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a></li>
                <li><a href="https://github.com/FilipeSCampos/Bolsinho/issues" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Issues</a></li>
                <li><a href="https://github.com/FilipeSCampos/Bolsinho#-contribuindo" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Contribuir</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://github.com/FilipeSCampos/Bolsinho#-licença" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Licença MIT</a></li>
                <li><a href="https://github.com/FilipeSCampos/Bolsinho/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Termos de Uso</a></li>
                <li><a href="https://github.com/FilipeSCampos/Bolsinho" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Código Aberto</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm">© 2025 Bolsinho. Todos os direitos reservados.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="https://github.com/FilipeSCampos/Bolsinho" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://github.com/FilipeSCampos/Bolsinho/issues/new" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
