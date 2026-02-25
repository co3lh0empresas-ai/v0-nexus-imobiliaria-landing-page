'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MapPin, Home } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary via-background to-background overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center justify-center gap-12">
        {/* Headline */}
        <div className="text-center max-w-3xl animate-fade-in space-y-4">
          <Badge variant="outline" className="mx-auto border-accent text-accent">
            Transformação Digital Imobiliária
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight text-balance">
            Conectamos o seu futuro ao lugar certo
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experimente a plataforma digital moderna que revoluciona o mercado imobiliário com transparência, eficiência e resultados comprovados.
          </p>
        </div>

        {/* Conversion Card with Tabs */}
        <div className="w-full max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="card-premium bg-white shadow-2xl border-0 rounded-2xl overflow-hidden">
            <Tabs defaultValue="comprar" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-secondary rounded-none border-b border-border">
                <TabsTrigger
                  value="comprar"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-none font-medium"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Comprar
                </TabsTrigger>
                <TabsTrigger
                  value="vender"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-none font-medium"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Vender
                </TabsTrigger>
              </TabsList>

              <div className="p-8 sm:p-10">
                {/* Comprar Tab */}
                <TabsContent value="comprar" className="space-y-6 mt-0">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Localização
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        placeholder="Lisboa, Porto, Cascais..."
                        className="pl-10 h-12 border-border bg-muted focus:ring-2 focus:ring-accent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Tipo de Imóvel
                    </label>
                    <select className="w-full h-12 px-4 border border-border rounded-lg bg-muted focus:ring-2 focus:ring-accent focus:outline-none transition-all">
                      <option>Qualquer tipo</option>
                      <option>Apartamento</option>
                      <option>Casa</option>
                      <option>Comercial</option>
                      <option>Terreno</option>
                    </select>
                  </div>

                  <Button className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base rounded-lg transition-all">
                    Procurar Imóveis
                  </Button>
                </TabsContent>

                {/* Vender Tab */}
                <TabsContent value="vender" className="space-y-6 mt-0">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Endereço do Imóvel
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        placeholder="Rua, número, cidade..."
                        className="pl-10 h-12 border-border bg-muted focus:ring-2 focus:ring-accent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Área Aproximada (m²)
                    </label>
                    <Input
                      type="number"
                      placeholder="Ex: 150"
                      className="h-12 border-border bg-muted focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  <Button className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base rounded-lg transition-all">
                    Avaliar Grátis
                  </Button>
                </TabsContent>
              </div>
            </Tabs>
          </div>

          <div className="flex gap-4 justify-center mt-6 text-sm text-muted-foreground">
            <span>✓ 100% Seguro</span>
            <span>✓ Sem Compromisso</span>
            <span>✓ Resposta em 24h</span>
          </div>
        </div>
      </div>
    </section>
  )
}
