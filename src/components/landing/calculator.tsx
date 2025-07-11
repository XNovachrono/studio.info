"use client";

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';

const prices = {
  private: 100000,
  small_group: 83300,
  group: 50000,
};

type ClassType = keyof typeof prices;

export function Calculator() {
  const [classType, setClassType] = useState<ClassType>('private');
  const [frequency, setFrequency] = useState(2);

  const monthlyCost = useMemo(() => {
    return prices[classType] * frequency * 4; // Assuming 4 weeks per month
  }, [classType, frequency]);

  const formattedCost = useMemo(() => {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(monthlyCost);
  }, [monthlyCost]);

  return (
    <section id="calculator" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">Calcula tu Inversión Mensual</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Ajusta las opciones para encontrar el plan perfecto para ti.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Image
                src="/images/calculator-robot.png"
                width="600"
                height="400"
                alt="Calculator Robot Mascot"
                className="mx-auto rounded-xl object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                data-ai-hint="friendly robot"
            />
            <Card className="shadow-xl">
                <CardHeader>
                    <CardTitle className="font-headline">Calculadora de Precios</CardTitle>
                    <CardDescription>Estima tu costo mensual en segundos.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8 text-left">
                    <div className="space-y-4">
                        <Label className="text-lg font-medium">1. Elige el tipo de clase</Label>
                        <RadioGroup defaultValue="private" onValueChange={(value: ClassType) => setClassType(value)}>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="group" id="group" />
                                <Label htmlFor="group">Grupo grande</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="small_group" id="small_group" />
                                <Label htmlFor="small_group">Grupo Pequeño</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="private" id="private" />
                                <Label htmlFor="private">Privada</Label>
                            </div>
                        </RadioGroup>
                    </div>
                    <div className="space-y-4">
                        <Label htmlFor="frequency" className="text-lg font-medium">2. Selecciona la frecuencia</Label>
                        <div className="flex items-center gap-4">
                            <Slider
                                id="frequency"
                                min={1}
                                max={5}
                                step={1}
                                value={[frequency]}
                                onValueChange={(value) => setFrequency(value[0])}
                            />
                            <span className="font-bold text-lg w-32 text-right">{frequency} {frequency > 1 ? 'clases' : 'clase'} / semana</span>
                        </div>
                    </div>
                    <div className="text-center bg-accent/30 p-6 rounded-lg">
                        <p className="text-lg text-muted-foreground">Costo mensual estimado:</p>
                        <p className="text-4xl font-bold font-headline text-primary">{formattedCost}</p>
                    </div>
                </CardContent>
            </Card>
        </div>
        <div className="max-w-3xl mx-auto pt-8">
            <p className="text-sm text-muted-foreground">
                <strong>¿Cómo funciona?</strong> La calculadora multiplica el precio de la clase que elegiste por la cantidad de clases que quieres ver a la semana y luego por cuatro (que son las semanas del mes). Así, obtienes un valor aproximado de lo que pagarías mensualmente.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
                <strong>¿Qué significa este valor?</strong> Es un estimado de tu inversión para que te hagas una idea. El valor final puede ajustarse a tus necesidades específicas. No olvides consultar con un asesor si hay descuentos o promociones disponibles este mes.
            </p>
        </div>
      </div>
    </section>
  );
}
