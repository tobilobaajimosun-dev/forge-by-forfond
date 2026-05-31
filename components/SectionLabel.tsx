// Column-style section label — a small rounded pill with a uppercase label
// and a little accent bar on the right.
export default function SectionLabel({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean; // dark=true → for light/off-white section backgrounds
}) {
  const gold = "#B69556";
  const goldDark = "#8a6d33";
  return (
    <span
      className="inline-flex items-center gap-2.5 rounded-lg px-3 py-1.5 mb-7"
      style={{
        background: dark ? "rgba(138,109,51,0.10)" : "rgba(182,149,86,0.10)",
        border: `1px solid ${dark ? "rgba(138,109,51,0.25)" : "rgba(182,149,86,0.22)"}`,
      }}
    >
      <span
        className="text-[11px] font-semibold uppercase tracking-[0.18em]"
        style={{ color: dark ? goldDark : gold }}
      >
        {children}
      </span>
      <span
        className="block rounded-[2px]"
        style={{ width: "8px", height: "14px", background: dark ? "rgba(138,109,51,0.45)" : "rgba(182,149,86,0.45)" }}
      />
    </span>
  );
}
