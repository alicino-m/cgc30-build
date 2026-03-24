import React from 'react';
import { Landmark, Mail, Phone, MapPin } from 'lucide-react';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-muted mt-auto border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Landmark className="h-6 w-6 text-primary" />
              <span className="font-playfair text-xl font-bold">Portal Lusófono</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              Promovendo excelência institucional e transparência para a comunidade.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-foreground">Contato</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> contato@portalinstitucional.pt
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> +351 210 000 000
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Av. da Liberdade, 100, Lisboa
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-foreground">Acompanhe</h3>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">LinkedIn</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Twitter</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Instagram</a>
            </div>
          </div>
        </div>
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {currentYear} Portal Institucional Lusófono. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Privacidade</a>
            <a href="#" className="hover:text-primary">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}