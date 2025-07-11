import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BookOpen, CalendarDays, Users } from 'lucide-react';

const features = [
  {
    icon: <BookOpen className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />,
    title: 'Experiencia Real y Personalizada',
    description: 'En Uncoverly, cada clase es una experiencia real, hecha para ti. Nada de lecciones grabadas o respuestas genéricas. Aquí hablas, escuchas, preguntas y te equivocas sin miedo, porque estás con un profesor que te conoce, te entiende y te acompaña paso a paso en tu proceso.',
  },
  {
    icon: <CalendarDays className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />,
    title: 'Flexibilidad Total',
    description: 'Tú decides cuándo tomar tus clases. Solo eliges el horario que te funcione y, si está libre, lo agendas. Así de flexible. No importa si estudias, trabajas o tienes poco tiempo: el curso se adapta a tu ritmo, no al revés.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />,
    title: 'A tu Medida y Objetivos',
    description: 'Las clases no son masivas ni frías. Pueden ser uno a uno, en pareja o en grupos pequeños, pero siempre hay espacio para ti. Y lo más importante: el contenido no está escrito de antemano. Se construye contigo, según tus objetivos.',
  },
];

export function FeaturedCourses() {
  return (
    <section id="courses" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6 flex flex-col justify-center">
            <h2 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl">
              Clases en vivo, a tu medida
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Explora nuestros cursos diseñados para adaptarse a tus necesidades. Aprende de forma interactiva y divertida, con profesores nativos y recursos innovadores que potenciarán tu aprendizaje.
            </p>
            <div className="flex">
                <Button asChild size="lg">
                    <Link href="#pricing">
                        Ver Planes
                    </Link>
                </Button>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="group flex items-start gap-6 p-6 bg-card rounded-lg shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105">
                <div className="p-3 bg-accent/20 rounded-full">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold font-headline mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
