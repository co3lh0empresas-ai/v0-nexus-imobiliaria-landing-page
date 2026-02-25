'use client'

import { Mail, Phone, MapPin, Key } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-accent text-accent-foreground rounded-lg p-2">
                <Key className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold">Nexus Imobiliária</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Transformando o mercado imobiliário com tecnologia e transparência.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Plataforma</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Comprar Imóvel
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Vender Imóvel
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Avaliações
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Empresa</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Carreira
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Contacte-nos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contacto</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:info@nexus.pt" className="hover:text-accent transition-colors">
                  info@nexus.pt
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:+351211234567" className="hover:text-accent transition-colors">
                  +351 21 1234 567
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span>Lisboa, Portugal</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
          <p>&copy; 2024 Nexus Imobiliária. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">
              Termos
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Privacidade
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
