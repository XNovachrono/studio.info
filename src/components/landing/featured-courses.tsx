import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Star, AtSign, Users, Mail } from 'lucide-react';

const features = [
  {
    icon: <Star className="h-8 w-8 text-primary" />,
    title: 'Clases en Vivo',
    description: 'Participa en lecciones dinámicas e interactivas con profesores expertos en tiempo real.',
    link: '#pricing',
  },
  {
    icon: <AtSign className="h-8 w-8 text-primary" />,
    title: 'Recursos Innovadores',
    description: 'Accede a herramientas de aprendizaje de última generación y materiales exclusivos.',
    link: '#pricing',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Aprendizaje Efectivo',
    description: 'Nuestro método se enfoca en tus necesidades para garantizar un progreso rápido y sólido.',
    link: '#pricing',
  },
  {
    icon: <Mail className="h-8 w-8 text-primary" />,
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
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
              Nuestros Cursos Destacados
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Explora nuestra amplia selección de cursos de idiomas diseñados para adaptarse a tus necesidades y horarios. Aprende de forma interactiva y divertida, con profesores nativos y recursos innovadores que potenciarán tu aprendizaje.
            </p>
            <Button asChild size="lg" variant="outline">
              <Link href="#pricing">
                Descubre
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col items-start space-y-3">
                <div className="bg-primary/10 p-3 rounded-full">
                    {feature.icon}
                </div>
                <h3 className="text-xl font-bold font-headline">{feature.title}</h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
                <Button asChild variant="link" className="p-0 h-auto text-primary">
                    <Link href={feature.link}>
                        Show More
                    </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
