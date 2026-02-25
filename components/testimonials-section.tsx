'use client'

import { Badge } from '@/components/ui/badge'
import { Star } from 'lucide-react'

interface Testimonial {
  id: number
  quote: string
  author: string
  role: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: 'Vendi o meu apartamento em Lisboa em apenas 10 dias. Processo transparente e digital.',
    author: 'Ricardo Santos',
    role: 'Proprietário',
    rating: 5,
  },
  {
    id: 2,
    quote: 'A equipa encontrou exatamente o que procurávamos. Pouparam-nos meses de visitas.',
    author: 'Marta e João',
    role: 'Compradores',
    rating: 5,
  },
  {
    id: 3,
    quote: 'Profissionalismo impecável do início ao fim. Recomendo vivamente a Nexus Imobiliária.',
    author: 'Sofia Oliveira',
    role: 'Investidora',
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="resultados" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 text-balance">
            Resultados Nexus
          </h2>
          <p className="text-lg text-muted-foreground">
            Histórias reais de clientes satisfeitos que alcançaram seus objetivos imobiliários
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="card-premium p-8 bg-white border border-border hover:border-accent/50 hover:shadow-lg transition-all"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    style={{ color: '#d4a574' }}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground font-medium mb-6 text-lg leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>

                {/* Badge */}
                <Badge className="bg-accent text-accent-foreground whitespace-nowrap text-xs">
                  Negócio Fechado
                </Badge>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 pt-20 border-t border-border">
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">2.450+</div>
            <p className="text-muted-foreground">Imóveis Vendidos</p>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">98%</div>
            <p className="text-muted-foreground">Satisfação de Clientes</p>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">12 dias</div>
            <p className="text-muted-foreground">Tempo Médio de Venda</p>
          </div>
        </div>
      </div>
    </section>
  )
}
