import Header from './Header';
import { hero } from '@/data/content';

//rounded-b-[3rem]

interface HeroProps {
  currentPath?: string;
}

export default function Hero({ currentPath = '' }: HeroProps) {
  return (
    <section
      className="relative overflow-hidden bg-brand-dark text-white"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(11,13,16,0.35) 0%, rgba(11,13,16,0.85) 100%), url(${hero.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Header />

      <div className="container-page relative flex min-h-dvh flex-col items-center justify-center py-32 text-center">
        <h1 className="max-w-3xl font-display text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
          {hero.title}
        </h1>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href={hero.primaryCta.href} className="btn-primary">
            {hero.primaryCta.label}
          </a>
          <a href={hero.secondaryCta.href} className="btn-secondary bg-brand-cream ">
            {hero.secondaryCta.label}
          </a>

        </div>
      </div>
    </section>
  );
}
