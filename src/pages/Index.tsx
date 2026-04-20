import { Instagram, Phone } from "lucide-react";
import DiamondLogo from "@/components/DiamondLogo";
import PriceRow from "@/components/PriceRow";
import WashPriceTable from "@/components/WashPriceTable";
import PolishPriceTable from "@/components/PolishPriceTable";
import foamWash from "@/assets/foam-wash.jpg";
import polish from "@/assets/polish.jpg";
import brushedMetal from "@/assets/brushed-metal.jpg";

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Decorative ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(var(--neon) / 0.18) 0%, transparent 60%)",
        }}
      />

      <div className="container mx-auto px-3 py-6 sm:px-4 sm:py-10 md:py-16">
        {/* Header / Logo */}
        <header className="flex flex-col items-center gap-2 text-center sm:gap-3">
          <div className="animate-float">
            <DiamondLogo size={64} className="sm:hidden" />
            <DiamondLogo size={80} className="hidden sm:block" />
          </div>
          <p className="text-[0.65rem] tracking-[0.4em] text-muted-foreground sm:text-xs sm:tracking-[0.5em] md:text-sm">
            АВТОДЕТЕЙЛІНГ
          </p>
          <h1 className="text-4xl font-extralight tracking-[0.3em] text-foreground glow-text-white sm:text-5xl sm:tracking-[0.4em] md:text-7xl">
            CRISTAL
          </h1>
          <div
            aria-hidden
            className="mt-2 h-[2px] w-32 rounded-full bg-primary sm:w-40 md:w-56"
            style={{ boxShadow: "0 0 12px hsl(var(--neon)), 0 0 24px hsl(var(--neon) / 0.6)" }}
          />
        </header>

        {/* Hero */}
        <section className="relative mt-8 grid grid-cols-1 items-stretch gap-3 sm:mt-12 sm:gap-4 md:mt-16 md:grid-cols-[1fr_auto_1fr]">
          <div className="relative overflow-hidden rounded-xl border border-border/40 shadow-2xl sm:rounded-2xl">
            <img
              src={foamWash}
              alt="Преміум мийка чорного авто з піною"
              width={1024}
              height={1024}
              className="h-48 w-full object-cover sm:h-64 md:h-[460px]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/80" />
          </div>

          {/* Center hero content (overlay on desktop) */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-4 px-2 py-6 text-center sm:gap-6 sm:py-8 md:absolute md:inset-0 md:px-8 md:py-0">
            <h2 className="text-2xl font-bold uppercase leading-tight text-foreground glow-text-white sm:text-3xl md:text-5xl lg:text-6xl">
              Автодетейлінг
              <br />
              <span className="neon-text">у Глухові</span>
            </h2>
            <a
              href="#pricing"
              className="group relative inline-flex items-center justify-center rounded-full border-2 border-primary bg-background/40 px-6 py-3 text-xs font-bold uppercase tracking-widest text-foreground backdrop-blur-sm transition-smooth hover:bg-primary/10 animate-pulse-neon sm:px-10 sm:py-4 sm:text-sm md:text-base"
              style={{ transition: "var(--transition-smooth)" }}
            >
              Подивитись прайс
            </a>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-border/40 shadow-2xl sm:rounded-2xl">
            <img
              src={polish}
              alt="Поліровка срібного спорткара"
              width={1024}
              height={1024}
              className="h-48 w-full object-cover sm:h-64 md:h-[460px]"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-background/40 via-transparent to-background/80" />
          </div>
        </section>

        {/* Pricing */}
        <section
          id="pricing"
          className="relative mt-12 overflow-hidden rounded-2xl border-2 border-primary/80 p-1 animate-pulse-neon sm:mt-16 sm:rounded-3xl md:mt-24"
        >
          <div
            className="metal-surface relative rounded-[1rem] p-4 sm:rounded-[1.3rem] sm:p-6 md:p-12"
            style={{
              backgroundImage: `linear-gradient(135deg, hsl(var(--metal-1) / 0.92), hsl(var(--metal-2) / 0.95)), url(${brushedMetal})`,
              backgroundSize: "cover",
              backgroundBlendMode: "overlay",
            }}
          >
            <h2 className="mb-6 text-center text-lg font-bold uppercase tracking-[0.2em] text-foreground glow-text-white sm:mb-10 sm:text-2xl sm:tracking-[0.3em] md:text-3xl">
              Наш прайс-лист
            </h2>

            <div className="space-y-10 md:space-y-14">
              <div>
                <h3 className="mb-4 text-center text-base font-bold uppercase tracking-widest neon-text sm:mb-6 sm:text-xl md:text-2xl">
                  Мийка кузова та салону
                </h3>
                <WashPriceTable />
              </div>

              <div className="border-t border-primary/30 pt-8">
                <h3 className="mb-4 text-center text-base font-bold uppercase tracking-widest neon-text sm:mb-6 sm:text-xl md:text-2xl">
                  Полірування кузова
                </h3>
                <PolishPriceTable />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 rounded-2xl border border-border/40 bg-card/60 px-4 py-4 backdrop-blur sm:mt-16 sm:px-6 sm:py-5 md:mt-20">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <a
              href="https://instagram.com/crystal.hlukhiv"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-foreground transition-smooth hover:text-primary sm:gap-3"
            >
              <Instagram className="h-5 w-5 text-primary drop-shadow-[0_0_8px_hsl(var(--neon))] sm:h-6 sm:w-6" />
              <span className="text-sm font-medium tracking-wide sm:text-base">crystal.hlukhiv</span>
            </a>

            <p className="text-[0.6rem] uppercase tracking-[0.25em] text-muted-foreground sm:text-xs sm:tracking-[0.3em]">
              © 2025 Cristal Detailing
            </p>

            <a
              href="tel:+380755012591"
              className="group flex items-center gap-2 text-foreground transition-smooth hover:text-primary sm:gap-3"
            >
              <Phone className="h-5 w-5 text-primary drop-shadow-[0_0_8px_hsl(var(--neon))] sm:h-6 sm:w-6" />
              <span className="text-sm font-semibold tracking-wide sm:text-base">+380 75 501 2591</span>
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default Index;
