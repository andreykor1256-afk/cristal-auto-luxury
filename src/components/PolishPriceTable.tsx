interface PolishService {
  name: string;
  desc?: string;
  car: string;
  suv: string;
  van: string;
  /** If true, show the same price for all vehicle types (merged cell) */
  uniform?: boolean;
  /** Prefix like "від" before the price */
  pricePrefix?: string;
}

const services: PolishService[] = [
  {
    name: "Косметична поліровка (Блиск)",
    desc: "Усунення дрібної матовості, надання дзеркального блиску за один прохід",
    car: "2500",
    suv: "3500",
    van: "4500",
  },
  {
    name: "Глибока відновлювальна поліровка",
    desc: "Видалення подряпин і серйозних потертостей (абразивна)",
    car: "5500",
    suv: "7500",
    van: "9500",
  },
  {
    name: "Локальна поліровка однієї деталі",
    desc: "Усунення потертості на одній частині кузова (двері, крило)",
    car: "600",
    suv: "800",
    van: "1000",
  },
  {
    name: "Поліровка передніх фар (за пару)",
    desc: "Повернення прозорості та яскравості світла",
    car: "600",
    suv: "700",
    van: "800",
  },
  {
    name: "Поліровка задніх ліхтарів (за пару)",
    desc: "Оновлення зовнішнього вигляду оптики",
    car: "400",
    suv: "400",
    van: "400",
    uniform: true,
  },
];

const formatPrice = (s: PolishService, value: string) =>
  `${s.pricePrefix ? s.pricePrefix + " " : ""}₴${value}`;

const PolishPriceTable = () => {
  return (
    <div className="overflow-x-auto -mx-2 sm:mx-0">
      {/* Desktop / tablet table */}
      <table className="hidden w-full border-collapse text-xs sm:table sm:text-sm">
        <thead>
          <tr className="bg-primary/15 text-foreground">
            <th className="border border-primary/40 p-2 text-left font-bold uppercase tracking-wide neon-text">
              Послуга
            </th>
            <th className="border border-primary/40 p-2 text-left font-semibold uppercase tracking-wide text-foreground/90">
              Опис
            </th>
            <th className="border border-primary/40 p-2 text-center font-bold neon-text whitespace-nowrap">
              Легкові
            </th>
            <th className="border border-primary/40 p-2 text-center font-bold neon-text whitespace-nowrap">
              SUV
            </th>
            <th className="border border-primary/40 p-2 text-center font-bold neon-text whitespace-nowrap">
              Мікроавтобус
            </th>
          </tr>
        </thead>
        <tbody>
          {services.map((s, i) => (
            <tr
              key={s.name}
              className={i % 2 === 0 ? "bg-background/30" : "bg-background/10"}
            >
              <td className="border border-primary/30 p-2 align-top font-semibold text-foreground/95">
                {s.name}
              </td>
              <td className="border border-primary/30 p-2 align-top text-muted-foreground">
                {s.desc ?? ""}
              </td>
              {s.uniform ? (
                <td
                  colSpan={3}
                  className="border border-primary/30 p-2 text-center font-bold neon-text whitespace-nowrap"
                >
                  {formatPrice(s, s.car)}{" "}
                  <span className="text-[0.7rem] font-normal text-muted-foreground normal-case">
                    (всі типи авто)
                  </span>
                </td>
              ) : (
                <>
                  <td className="border border-primary/30 p-2 text-center font-bold neon-text whitespace-nowrap">
                    {formatPrice(s, s.car)}
                  </td>
                  <td className="border border-primary/30 p-2 text-center font-bold neon-text whitespace-nowrap">
                    {formatPrice(s, s.suv)}
                  </td>
                  <td className="border border-primary/30 p-2 text-center font-bold neon-text whitespace-nowrap">
                    {formatPrice(s, s.van)}
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile cards */}
      <div className="space-y-3 px-2 sm:hidden">
        {services.map((s) => (
          <div
            key={s.name}
            className="rounded-lg border border-primary/30 bg-background/40 p-3"
          >
            <div className="font-bold uppercase tracking-wide text-foreground text-sm">
              {s.name}
            </div>
            {s.desc && (
              <div className="mt-1 text-[0.7rem] text-muted-foreground leading-snug">
                {s.desc}
              </div>
            )}
            {s.uniform ? (
              <div className="mt-2 rounded border border-primary/20 py-2 text-center">
                <div className="text-[0.6rem] uppercase text-muted-foreground">
                  Всі типи авто
                </div>
                <div className="font-bold neon-text text-sm">
                  {formatPrice(s, s.car)}
                </div>
              </div>
            ) : (
              <div className="mt-2 grid grid-cols-3 gap-1 text-center text-xs">
                <div className="rounded border border-primary/20 py-1">
                  <div className="text-[0.6rem] uppercase text-muted-foreground">
                    Легкові
                  </div>
                  <div className="font-bold neon-text">
                    {formatPrice(s, s.car)}
                  </div>
                </div>
                <div className="rounded border border-primary/20 py-1">
                  <div className="text-[0.6rem] uppercase text-muted-foreground">
                    SUV
                  </div>
                  <div className="font-bold neon-text">
                    {formatPrice(s, s.suv)}
                  </div>
                </div>
                <div className="rounded border border-primary/20 py-1">
                  <div className="text-[0.6rem] uppercase text-muted-foreground">
                    Мікроавт.
                  </div>
                  <div className="font-bold neon-text">
                    {formatPrice(s, s.van)}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PolishPriceTable;
