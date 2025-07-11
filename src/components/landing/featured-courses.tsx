import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BookOpen, Bot, BrainCircuit, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: 'Clases en Vivo',
    description: 'Acá no vienes a ver videos grabados ni a seguir un guion genérico. En Uncoverly las clases son en vivo, con profes reales que te hablan, te entienden y te enseñan a tu ritmo. Son conversaciones, no monólogos. Te escuchamos, corregimos y celebramos cada avance contigo. Esto es aprendizaje real, no un tutorial más.',
  },
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: 'Recursos Innovadores',
    description: 'Usamos la tecnología para hacer que el proceso sea más humano, no al revés. Cada clase queda grabada para que la repases cuando quieras, con transcripción automática. La IA te sugiere ejercicios según tus errores y avances, y todo lo que usamos está diseñado para que tú tengas el control. Nada se desperdicia. Cada recurso suma.',
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: 'Aprendizaje Efectivo',
    description: '¿De qué sirve saber inglés si no puedes usarlo en tu vida? Aquí todo gira alrededor de tus objetivos. Te enseñamos justo lo que necesitas, con ejercicios hechos para ti, sin rellenar con lo que no aplica. Aprendes con intención. Y se nota.',
  },
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: 'Aprender con ganas',
    description: 'El inglés no tiene por qué sentirse como una materia más. En Uncoverly queremos que te conectes con lo que aprendes, que disfrutes cada clase. Hablamos de temas que te interesan, usamos dinámicas reales, y le metemos alma a todo. Aprender así no solo funciona... también dan ganas de seguir.',
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
              <div key={feature.title} className="flex flex-col items-start p-6 bg-card rounded-lg shadow-sm transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
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
