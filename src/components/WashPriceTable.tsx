interface WashService {
  name: string;
  desc?: string;
  car: string;
  suv: string;
  van: string;
}

const services: WashService[] = [
  { name: "Міні хімчистка", desc: "Детальне прибирання сидінь авто (із застосуванням хімії)", car: "1500", suv: "1300", van: "2000" },
  { name: "Комплекс «CRYSTAL»", desc: "Підготовка, попередня мийка, основна мийка, високотемпературна сушка", car: "800", suv: "1000", van: "1400" },
  { name: "Комплекс «3-х фазна мийка»", desc: "Підготовка, попередня мийка, основна мийка, механічна сушка", car: "500", suv: "600", van: "800" },
  { name: 'Комплекс "База"', desc: "Попередня мийка, основна мийка, механічна сушка", car: "400", suv: "500", van: "700" },
  { name: "Сильне забруднення авто", desc: "В разі сильного забруднення авто ззовні вказана ціна", car: "100", suv: "200", van: "400" },
  { name: "Мийка салону", desc: "Вологе прибирання простору", car: "150", suv: "200", van: "300" },
  { name: "Видалення комах", car: "50", suv: "100", van: "150" },
  { name: "Незначні синтетичні забруднення (бітум)", car: "100", suv: "150", van: "200" },
  { name: "Сильні синтетичні забруднення (бітум)", desc: "Ціна за один елемент", car: "100", suv: "150", van: "200" },
  { name: "Очищення дисків", car: "100", suv: "150", van: "200" },
  { name: "Обробка шкіряних поверхонь", car: "100", suv: "150", van: "250" },
  { name: "Обробка пластику", car: "100", suv: "150", van: "250" },
  { name: "Пилосос салону (тяжке забруднення ×2)", car: "150", suv: "250", van: "450" },
  { name: "Пилосос багажника (тяжке забруднення ×2)", car: "70", suv: "100", van: "150" },
  { name: "Обробка ущільнювачів силіконом", car: "50", suv: "50", van: "100" },
  { name: "Видалення водяного каменю зі скла (всі стекла)", car: "600", suv: "700", van: "1000" },
  { name: "Очищення всіх стекол у салоні", car: "100", suv: "150", van: "300" },
  { name: "Нанесення твердого віску", car: "1000", suv: "1200", van: "1600" },
  { name: "Нанесення рідкого воску", car: "100", suv: "150", van: "250" },
  { name: "Чорніння гуми (4 шт.)", car: "50", suv: "80", van: "100" },
  { name: "Антидощ дзеркал", car: "150", suv: "150", van: "150" },
];

const WashPriceTable = () => {
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
              <td className="border border-primary/30 p-2 text-center font-bold neon-text whitespace-nowrap">
                ₴{s.car}
              </td>
              <td className="border border-primary/30 p-2 text-center font-bold neon-text whitespace-nowrap">
                ₴{s.suv}
              </td>
              <td className="border border-primary/30 p-2 text-center font-bold neon-text whitespace-nowrap">
                ₴{s.van}
              </td>
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
            <div className="mt-2 grid grid-cols-3 gap-1 text-center text-xs">
              <div className="rounded border border-primary/20 py-1">
                <div className="text-[0.6rem] uppercase text-muted-foreground">Легкові</div>
                <div className="font-bold neon-text">₴{s.car}</div>
              </div>
              <div className="rounded border border-primary/20 py-1">
                <div className="text-[0.6rem] uppercase text-muted-foreground">SUV</div>
                <div className="font-bold neon-text">₴{s.suv}</div>
              </div>
              <div className="rounded border border-primary/20 py-1">
                <div className="text-[0.6rem] uppercase text-muted-foreground">Мікроавт.</div>
                <div className="font-bold neon-text">₴{s.van}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WashPriceTable;
