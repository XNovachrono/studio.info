import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BookOpen, Users, Video, Smile } from 'lucide-react';

const features = [
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: 'Clases en Vivo',
    description: 'Participa en lecciones interactivas con profesores expertos en tiempo real.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Recursos Innovadores',
    description: 'Accede a una amplia gama de materiales y herramientas de aprendizaje.',
  },
  {
    icon: <Video className="h-8 w-8 text-primary" />,
    title: 'Aprendizaje Efectivo',
    description: 'Nuestro método se enfoca en tus necesidades para garantizar un progreso real.',
  },
  {
    icon: <Smile className="h-8 w-8 text-primary" />,
    title: 'Diversión Garantizada',
    description: 'Aprender un nuevo idioma nunca fue tan entretenido y motivador.',
  },
];

export function FeaturedCourses() {
  return (
    <section id="courses" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6 flex flex-col justify-center">
            <h2 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl">
              Aprendizaje a tu medida
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
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col items-start p-6 bg-card rounded-lg shadow-sm">
                <div className="p-3 bg-accent/20 rounded-full mb-4 transition-transform duration-300 hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold font-headline mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}