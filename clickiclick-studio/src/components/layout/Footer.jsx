export function Footer() {
  return (
    <footer className="px-6 md:px-10 pt-10 pb-12 mt-16 border-t border-moss" aria-label="Pie de pagina">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 font-body text-sm text-cream-soft">
        <p className="flex items-baseline gap-3">
          <span className="font-display text-cream tracking-tight">CLICKICLICK</span>
          <span className="text-gold-aged tabular-nums tracking-wider">MMXXVI</span>
        </p>
        <p className="md:text-right">Barcelona &middot; Catalunya</p>
      </div>
    </footer>
  );
}
