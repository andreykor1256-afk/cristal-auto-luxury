interface PriceRowProps {
  name: string;
  price: string;
  fromPrice?: boolean;
}

const PriceRow = ({ name, price, fromPrice }: PriceRowProps) => {
  return (
    <div className="flex items-baseline text-xs sm:text-sm md:text-base gap-1">
      <span className="font-semibold uppercase tracking-wide text-foreground/95 leading-tight">
        {name}
      </span>
      <span className="dotted-divider" />
      <span className="whitespace-nowrap font-bold neon-text">
        {fromPrice && <span className="mr-1 text-[0.65rem] sm:text-xs font-medium text-muted-foreground">від</span>}
        ₴{price}
      </span>
    </div>
  );
};

export default PriceRow;
