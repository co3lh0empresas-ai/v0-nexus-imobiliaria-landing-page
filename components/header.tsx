'use client'

import { Key } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-primary text-primary-foreground rounded-lg p-2">
            <Key className="w-6 h-6" />
          </div>
          <span className="text-xl font-bold text-primary">Nexus</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#comprar" className="text-foreground hover:text-accent transition-colors">
            Comprar
          </a>
          <a href="#vender" className="text-foreground hover:text-accent transition-colors">
            Vender
          </a>
          <a href="#resultados" className="text-foreground hover:text-accent transition-colors">
            Resultados
          </a>
        </nav>

        <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
          Entrar
        </button>
      </div>
    </header>
  )
}
