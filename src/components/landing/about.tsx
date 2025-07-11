import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-accent/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Sobre Nosotros</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              En Uncoverly, creemos que aprender inglés debe ser una experiencia personal y motivadora.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <Card className="shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
                <CardHeader>
                    <CardTitle className="font-headline">Nuestra Misión</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                        Nuestra misión es transformar la forma en que las personas aprenden inglés, ofreciéndoles un proceso personalizado, humano y funcional que se adapte a sus metas reales. En Uncoverly combinamos tecnología inteligente con docentes apasionados, para que cada estudiante se sienta acompañado, motivado y capaz de hablar inglés con confianza y propósito.
                    </p>
                </CardContent>
            </Card>
          <div className="flex flex-col justify-center space-y-4">
             <h3 className="text-2xl font-bold font-headline tracking-tighter sm:text-3xl">Tu aprendizaje, a tu manera.</h3>
             <p className="text-muted-foreground">
                Con Uncoverly, no solo aprendes un idioma, descubres tu potencial. Te damos las herramientas y el apoyo para que te comuniques con confianza en cualquier situación.
             </p>
             <ul className="space-y-4 pt-4">
                <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Clases personalizadas según tus intereses y metas profesionales.</span>
                </li>
                <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Horarios flexibles que se acomodan a tu estilo de vida.</span>
                </li>
                <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Profesores dedicados a tu progreso y éxito.</span>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
