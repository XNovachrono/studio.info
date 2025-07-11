import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl xl:text-6xl/none">
                Uncoverly
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Inglés que se adapta a ti. No al revés.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#pricing">
                  Ver Precios
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <Image
            src="https://placehold.co/600x600.png"
            width="600"
            height="600"
            alt="Hero Robot Mascot"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last transition-transform duration-300 ease-in-out hover:scale-105"
            data-ai-hint="robot mascot"
          />
        </div>
      </div>
    </section>
  );
}
