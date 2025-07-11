import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const plans = [
    {
        name: 'Clase Privada',
        price: '$100.000 COP/clase',
        description: 'Atención 100% personalizada para un avance acelerado.',
        features: ['Plan de estudios a medida', 'Máxima flexibilidad de horarios', 'Feedback individualizado'],
    },
    {
        name: 'Grupo Pequeño',
        price: '$83.300 COP/clase',
        description: 'El equilibrio perfecto entre interacción y atención personal (2-4 estudiantes).',
        features: ['Práctica conversacional', 'Aprendizaje colaborativo', 'Feedback personalizado'],
    },
    {
        name: 'Clase Grupal',
        price: '$50.000 COP/clase',
        description: 'Aprende en un entorno dinámico y social (5-8 estudiantes).',
        features: ['Interacción con más estudiantes', 'Dinámicas de grupo', 'Ambiente de aprendizaje colaborativo'],
    },
]

export function Pricing() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-accent/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Nuestros Planes</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Elige el paquete que mejor se adapte a tu estilo de aprendizaje y presupuesto.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-1 md:grid-cols-3">
          {plans.map((plan) => (
             <Card key={plan.name} className="flex flex-col h-full shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
                <CardHeader>
                    <div className="flex justify-between items-baseline">
                        <CardTitle className="font-headline">{plan.name}</CardTitle>
                        <p className="text-xl font-bold text-primary">{plan.price}</p>
                    </div>
                    <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                    <ul className="space-y-2">
                        {plan.features.map((feature) => (
                            <li key={feature} className="flex items-center">
                                <Check className="mr-2 h-4 w-4 text-primary" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
            <p className="text-muted-foreground">Usa nuestra calculadora para ver el costo mensual.</p>
        </div>
      </div>
    </section>
  );
}
