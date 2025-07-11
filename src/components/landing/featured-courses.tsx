import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Star, AtSign, User, Mail } from 'lucide-react';

const features = [
  {
    icon: <Star className="h-8 w-8 text-foreground" />,
    title: 'Clases en Vivo',
    description: 'Participa en lecciones interactivas con profesores expertos en tiempo real.',
    link: '#pricing',
  },
  {
    icon: <AtSign className="h-8 w-8 text-foreground" />,
    title: 'Recursos Innovadores',
    description: 'Accede a una amplia gama de materiales y herramientas de aprendizaje de última generación.',
    link: '#pricing',
  },
  {
    icon: <User className="h-8 w-8 text-foreground" />,
    title: 'Aprendizaje Efectivo',
    description: 'Nuestro método se enfoca en tus necesidades para garantizar un progreso real y medible.',
    link: '#pricing',
  },
  {
    icon: <Mail className="h-8 w-8 text-foreground" />,
    title: 'Diversión Garantizada',
    description: 'Aprender un nuevo idioma nunca fue tan entretenido y motivador.',
    link: '#pricing',
  },
];

export function FeaturedCourses() {
  return (
    <section id="courses" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6 flex flex-col justify-center">
            <h2 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl">
              Nuestros Cursos Destacados
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Explora nuestra amplia selección de cursos de idiomas diseñados para adaptarse a tus necesidades y horarios. Aprende de forma interactiva y divertida, con profesores nativos y recursos innovadores que potenciarán tu aprendizaje.
            </p>
            <div className="flex">
                <Button asChild variant="outline" size="lg">
                    <Link href="#pricing">
                        Descubre
                    </Link>
                </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col items-start space-y-3">
                <div className="mb-2">{feature.icon}</div>
                <h3 className="text-xl font-bold font-headline">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
                <Link href={feature.link} className="text-sm font-medium text-primary hover:underline underline-offset-4">
                  Show More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
