import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Users, BarChart3, TrendingUp } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const courses = [
  {
    icon: <BookOpen className="h-6 w-6 text-primary" />,
    title: 'Inglés para Principiantes',
    level: 'Nivel: A1',
    progress: 30,
    link: '#pricing',
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: 'Inglés de Negocios',
    level: 'Nivel: B2',
    progress: 65,
    link: '#pricing',
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
    title: 'Preparación para TOEFL',
    level: 'Nivel: C1',
    progress: 80,
    link: '#pricing',
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-primary" />,
    title: 'Inglés Conversacional',
    level: 'Todos los niveles',
    progress: 50,
    link: '#pricing',
  },
];

export function FeaturedCourses() {
  return (
    <section id="courses" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-start justify-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">
              Nuestros Cursos
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Elige el camino que te llevará a la fluidez. Cursos diseñados para cada necesidad y objetivo.
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.title} className="shadow-sm hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                            {course.icon}
                        </div>
                        <div className='flex-1'>
                            <h3 className="text-lg font-bold font-headline mb-1">{course.title}</h3>
                            <p className="text-sm text-muted-foreground mb-4">{course.level}</p>
                            <Progress value={course.progress} className="h-2 mb-4" />
                            <Button asChild variant="secondary" size="sm" className="w-full md:w-auto">
                                <Link href={course.link}>
                                    Ver curso
                                </Link>
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
