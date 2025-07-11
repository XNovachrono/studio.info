import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Share2, Youtube } from 'lucide-react';

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

const TiktokIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 8v5.5a3.5 3.5 0 0 1-7 0V4s0-2 2-2h3s2 0 2 2v2.5a3.5 3.5 0 0 0 7 0V8"></path>
        <path d="M12 4v10.5a3.5 3.5 0 0 1-7 0V4"></path>
        <path d="M5 4h3s2 0 2 2v2.5a3.5 3.5 0 0 0 7 0V8"></path>
    </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
);

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
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button size="lg">
                            <Share2 className="mr-2 h-4 w-4" />
                            Nuestras Redes
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem asChild>
                            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 cursor-pointer">
                                <InstagramIcon className="h-4 w-4" /> Instagram
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 cursor-pointer">
                                <TiktokIcon className="h-4 w-4" /> TikTok
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                             <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 cursor-pointer">
                                <FacebookIcon className="h-4 w-4" /> Facebook
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                             <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 cursor-pointer">
                                <Youtube className="h-4 w-4" /> YouTube
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
          </div>
          <Image
            src="/images/hero-robot.png"
            width="600"
            height="600"
            alt="Hero Robot Mascot"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last transition-transform duration-300 ease-in-out hover:scale-105"
            data-ai-hint="cute robot"
          />
        </div>
      </div>
    </section>
  );
}
