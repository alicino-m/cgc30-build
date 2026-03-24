import React from 'react';
import { Landmark, Target, Heart, Eye } from 'lucide-react';
export function SobrePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold">Nossa História, <br /><span className="text-primary">Seu Futuro</span></h1>
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Fundada com o propósito de ser um pilar de inovação e transparência, nossa instituição 
                tem servido à comunidade há mais de duas décadas. O que começou como um pequeno grupo 
                de visionários em Lisboa, hoje é um hub de excelência reconhecido em todo o espaço lusófono.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Nossa trajetória é marcada pelo compromisso inabalável com a qualidade e pela busca constante 
                por soluções que impactem positivamente a vida dos cidadãos. Acreditamos que a informação 
                é o maior patrimônio de uma sociedade desenvolvida.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800" 
                alt="Nossa sede" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary p-8 rounded-2xl text-primary-foreground hidden md:block">
              <p className="text-4xl font-bold font-playfair">20+</p>
              <p className="text-sm opacity-80 uppercase tracking-widest font-medium">Anos de História</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="p-8 rounded-2xl bg-muted/50 border space-y-4">
            <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold">Missão</h3>
            <p className="text-muted-foreground">
              Prover serviços institucionais de alta qualidade, promovendo a transparência e a inovação tecnológica.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-muted/50 border space-y-4">
            <div className="h-12 w-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold">Visão</h3>
            <p className="text-muted-foreground">
              Ser referência mundial em gestão institucional integrada e sustentável até 2030.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-muted/50 border space-y-4">
            <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold">Valores</h3>
            <p className="text-muted-foreground">
              Ética, Inovação, Responsabilidade Social, Colaboração e Transparência em todas as ações.
            </p>
          </div>
        </div>
        <div className="text-center bg-muted rounded-3xl p-12 md:p-20">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8">Nossa Liderança</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-4">
                <div className="aspect-square rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all border-4 border-background shadow-lg">
                  <img src={`https://i.pravatar.cc/300?img=${i+10}`} alt="Líder" className="object-cover w-full h-full" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Diretor Executivo {i}</h4>
                  <p className="text-sm text-muted-foreground">Conselho de Administração</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}