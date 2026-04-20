import { Instagram, Phone } from "lucide-react";
import DiamondLogo from "@/components/DiamondLogo";
import PriceRow from "@/components/PriceRow";
import foamWash from "@/assets/foam-wash.jpg";
import polish from "@/assets/polish.jpg";
import brushedMetal from "@/assets/brushed-metal.jpg";

const washServices = [
  { name: "Експрес мийка", price: "300" },
  { name: "Комплексна мийка", price: "600" },
  { name: "Хімчистка салону", price: "2000", fromPrice: true },
  { name: "Нанокераміка водовідштовх.", price: "1500" },
];

const polishServices = [
  { name: "Легка поліровка", price: "4000" },
  { name: "Глибока поліровка", price: "7000" },
  { name: "Зональна поліровка", price: "1000", fromPrice: true },
  { name: "Нанесення кераміки", price: "12000" },
];

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

      <div className="container mx-auto px-4 py-10 md:py-16">
        {/* Header / Logo */}
        <header className="flex flex-col items-center gap-3 text-center">
          <div className="animate-float">
            <DiamondLogo size={80} />
          </div>
          <p className="text-xs tracking-[0.5em] text-muted-foreground md:text-sm">
            АВТОДЕТЕЙЛІНГ
          </p>
          <h1 className="text-5xl font-extralight tracking-[0.4em] text-foreground glow-text-white md:text-7xl">
            CRISTAL
          </h1>
          <div
            aria-hidden
            className="mt-2 h-[2px] w-40 rounded-full bg-primary md:w-56"
            style={{ boxShadow: "0 0 12px hsl(var(--neon)), 0 0 24px hsl(var(--neon) / 0.6)" }}
          />
        </header>

        {/* Hero */}
        <section className="relative mt-12 grid grid-cols-1 items-stretch gap-4 md:mt-16 md:grid-cols-[1fr_auto_1fr]">
          <div className="relative overflow-hidden rounded-2xl border border-border/40 shadow-2xl">
            <img
              src={foamWash}
              alt="Преміум мийка чорного авто з піною"
              width={1024}
              height={1024}
              className="h-64 w-full object-cover md:h-[460px]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/80" />
          </div>

          {/* Center hero content (overlay on desktop) */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-6 px-2 py-8 text-center md:absolute md:inset-0 md:px-8 md:py-0">
            <h2 className="text-3xl font-bold uppercase leading-tight text-foreground glow-text-white md:text-5xl lg:text-6xl">
              Автодетейлінг
              <br />
              <span className="neon-text">у Глухові</span>
            </h2>
            <a
              href="#pricing"
              className="group relative inline-flex items-center justify-center rounded-full border-2 border-primary bg-background/40 px-10 py-4 text-sm font-bold uppercase tracking-widest text-foreground backdrop-blur-sm transition-smooth hover:bg-primary/10 animate-pulse-neon md:text-base"
              style={{ transition: "var(--transition-smooth)" }}
            >
              Подивитись прайс
            </a>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-border/40 shadow-2xl">
            <img
              src={polish}
              alt="Поліровка срібного спорткара"
              width={1024}
              height={1024}
              className="h-64 w-full object-cover md:h-[460px]"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-background/40 via-transparent to-background/80" />
          </div>
        </section>

        {/* Pricing */}
        <section
          id="pricing"
          className="relative mt-16 overflow-hidden rounded-3xl border-2 border-primary/80 p-1 animate-pulse-neon md:mt-24"
        >
          <div
            className="metal-surface relative rounded-[1.3rem] p-6 md:p-12"
            style={{
              backgroundImage: `linear-gradient(135deg, hsl(var(--metal-1) / 0.92), hsl(var(--metal-2) / 0.95)), url(${brushedMetal})`,
              backgroundSize: "cover",
              backgroundBlendMode: "overlay",
            }}
          >
            <h2 className="mb-10 text-center text-2xl font-bold uppercase tracking-[0.3em] text-foreground glow-text-white md:text-3xl">
              Наш прайс-лист
            </h2>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
              <div>
                <h3 className="mb-6 text-center text-xl font-bold uppercase tracking-widest neon-text md:text-2xl">
                  Мийка кузова
                </h3>
                <div className="space-y-5">
                  {washServices.map((s) => (
                    <PriceRow key={s.name} {...s} />
                  ))}
                </div>
              </div>

              <div className="md:border-l md:border-primary/30 md:pl-16">
                <h3 className="mb-6 text-center text-xl font-bold uppercase tracking-widest neon-text md:text-2xl">
                  Поліровка кузова
                </h3>
                <div className="space-y-5">
                  {polishServices.map((s) => (
                    <PriceRow key={s.name} {...s} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 rounded-2xl border border-border/40 bg-card/60 px-6 py-5 backdrop-blur md:mt-20">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <a
              href="https://instagram.com/cristal.hlukhiv"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-foreground transition-smooth hover:text-primary"
            >
              <Instagram className="h-6 w-6 text-primary drop-shadow-[0_0_8px_hsl(var(--neon))]" />
              <span className="font-medium tracking-wide">cristal.hlukhiv</span>
            </a>

            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              © 2025 Cristal Detailing
            </p>

            <a
              href="tel:+380755012591"
              className="group flex items-center gap-3 text-foreground transition-smooth hover:text-primary"
            >
              <Phone className="h-6 w-6 text-primary drop-shadow-[0_0_8px_hsl(var(--neon))]" />
              <span className="font-semibold tracking-wide">+380 75 501 2591</span>
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default Index;
