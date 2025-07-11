import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BookOpen, CalendarDays, Target, Award } from 'lucide-react';

const features = [
  {
    icon: <BookOpen className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />,
    title: 'Clases en vivo',
    description: `En Uncoverly, cada clase es una experiencia real, hecha para ti. Aquí hablas, escuchas, preguntas y te equivocas sin miedo

Tú decides cuándo tomar tus clases. No importa si estudias, trabajas o tienes poco tiempo: el curso se adapta a tu ritmo, no al revés. Agenda cuando gustes

Las clases no son masivas ni frías. Pueden ser uno a uno, en pareja o en grupos pequeños, pero siempre hay espacio para ti. Y lo más importante: el contenido no está escrito de antemano, se construye contigo según tus objetivos.`,
  },
  {
    icon: <CalendarDays className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />,
    title: 'Recursos innovadores',
    description: `En Uncoverly, la tecnología no es un extra: es parte de la experiencia. Usamos inteligencia artificial para que cada clase tenga seguimiento real, con sugerencias de ejercicios hechos a tu medida según tus avances y dificultades.

Cada sesión en vivo queda grabada automáticamente y se transcribe en texto en tiempo real. Puedes repasar todo lo que se dijo, volver a escuchar explicaciones y estudiar a tu ritmo, cuando quieras sin perder ningún detalle. Serás consciente de todo tu progreso.

Aquí la tecnología no sustituye el trabajo humano. Lo complementa. Cada herramienta que usamos está pensada para que tu proceso sea más claro, más eficiente y adaptado a ti, sin perder lo más importante: el acompañamiento real de alguien que te escucha y te guía.`,
  },
  {
    icon: <Target className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />,
    title: 'Aprendizaje efectivo',
    description: `Acá no aprendes inglés solo por aprenderlo. Lo usas desde el primer día con intención. Todo el contenido se adapta a lo que quieres lograr: viajar, estudiar, trabajar o simplemente sentirte más seguro al comunicarte. No enseñamos lo mismo a todos, enseñamos lo que tú necesitas.

Las clases se centran en resolver situaciones reales. ¿Vas a tener una entrevista? ¿Trabajas en cocina? ¿Quieres mejorar tu pronunciación al hablar con clientes? Podemos enfocarnos en eso. No se trata de seguir un libro. Se trata de que el idioma te sea útil en la vida real.

Y como cada clase es personalizada, no hay relleno. Cada minuto cuenta. Saldrás con herramientas concretas para avanzar, no solo con teoría. Porque aprender con propósito se nota… y se disfruta más.`,
  },
  {
    icon: <Award className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />,
    title: 'Aprende con ganas',
    description: `En Uncoverly queremos que aprender inglés te guste, te enganche y te dé ganas de seguir. Las clases son dinámicas, con juegos, retos, conversaciones reales y ejercicios que conectan contigo. Aquí no vienes a repetir cosas de memoria, sino a vivir el idioma.

Nuestros profes enseñan con el corazón. Se nota en cómo explican, en cómo se adaptan a ti y en cómo celebran tus avances. Esto no es una clase fría de colegio: es un espacio donde te sientes cómodo, acompañado y escuchado.

Y sí, aprendés en serio. Pero también te ríes, conectas y te sorprendes con lo que eres capaz de lograr. Porque cuando el proceso te gusta, el progreso llega solo. Esa es la diferencia de aprender con ganas.`,
  },
];

export function FeaturedCourses() {
  return (
    <section id="courses" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6 flex flex-col justify-center">
            <h2 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl">
              ¿Cómo es estar en Uncoverly?
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Explora nuestros cursos diseñados para adaptarse a tus necesidades. Aprende de forma interactiva y divertida, con profesores y recursos innovadores que potenciarán tu aprendizaje.
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
                  <p className="text-muted-foreground whitespace-pre-wrap">
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
