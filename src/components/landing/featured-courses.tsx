import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const courses = [
  {
    title: 'Inglés de Negocios',
    description: 'Domina el lenguaje del mundo corporativo. Ideal para profesionales que buscan expandir sus horizontes.',
  },
  {
    title: 'Preparación para Exámenes',
    description: 'Alcanza el puntaje que necesitas en exámenes como TOEFL, IELTS y Cambridge con nuestra preparación enfocada.',
  },
  {
    title: 'Inglés Conversacional',
    description: 'Gana fluidez y confianza para hablar en situaciones cotidianas. Pierde el miedo a cometer errores.',
  },
];

export function FeaturedCourses() {
  return (
    <section id="courses" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Cursos Destacados</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Programas diseñados para cumplir tus objetivos específicos.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card key={course.title} className="flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="font-headline">{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="link" className="p-0 h-auto">
                    <Link href="#pricing">
                        Descubre
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
