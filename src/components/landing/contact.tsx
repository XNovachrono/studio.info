"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';

const advisors = [
    { name: "Asesor 1", phone: "1234567890" }, // TODO: Replace with actual number
    { name: "Asesor 2", phone: "0987654321" }, // TODO: Replace with actual number
];


export function Contact() {
  return (
    <section id="advisors" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Image
                src="/images/calculator-robot.png"
                width="600"
                height="400"
                alt="Friendly Robot Mascot"
                className="mx-auto rounded-xl object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                data-ai-hint="friendly robot"
            />
            <div className="flex flex-col justify-center text-left space-y-6">
                 <div className="space-y-3">
                    <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">¡Estamos listos para escucharte!</h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Elige a tu asesor y empecemos la conversación.
                    </p>
                </div>
                <p className="text-muted-foreground">
                    Si ya tienes una idea clara o simplemente prefieres hablar con una persona de inmediato, nuestros asesores están aquí para ti. Ellos te ayudarán a resolver tus dudas, entender tus necesidades y dar el siguiente paso.
                </p>
                <p className="text-muted-foreground">
                    Haz clic en el asesor que prefieras y comunícate con nosotros por WhatsApp para empezar.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    {advisors.map(advisor => (
                         <Button key={advisor.name} asChild size="lg">
                            <Link href={`https://wa.me/${advisor.phone}`} target="_blank" rel="noopener noreferrer">
                                <User className="mr-2" />
                                {advisor.name}
                            </Link>
                        </Button>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
