import React from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, ChevronRight } from 'lucide-react';
import { EVENTS } from '@/lib/mock-data';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
export function CalendarioPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-12 md:py-16">
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Calendário de Eventos</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Planeje sua participação nos nossos congressos, workshops e solenidades oficiais.
          </p>
        </div>
        <div className="space-y-6">
          {EVENTS.map((event) => (
            <Card key={event.id} className="group overflow-hidden hover:border-primary transition-colors">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="bg-primary/5 p-8 flex flex-col items-center justify-center text-center min-w-[160px] md:border-r border-b md:border-b-0">
                    <CalendarIcon className="h-6 w-6 text-primary mb-2" />
                    <span className="font-bold text-lg leading-tight">{event.date.split(',')[0]}</span>
                    <span className="text-sm text-muted-foreground">{event.date.split(',')[1]}</span>
                  </div>
                  <div className="p-8 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <Badge variant="secondary" className="mb-2">Próximo Evento</Badge>
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{event.title}</h3>
                      </div>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> {event.time}</div>
                        <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {event.location}</div>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {event.description}
                    </p>
                    <button className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                      Saiba mais detalhes <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}