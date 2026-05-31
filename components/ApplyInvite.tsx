export default function ApplyInvite() {
  return (
    <div className="bg-[#272727] px-4 md:px-6">
      {/* Config-style CTAs — full-width, tall, solid blocks, small radius, tight gap */}
      <div className="flex flex-col gap-1.5">
        {/* Primary — solid (brand gold) */}
        <a
          href="https://tally.so/r/ZjDaXA"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full h-[88px] md:h-24 rounded-lg bg-[#B69556] hover:bg-[#c9a96a] active:scale-[0.997] transition-colors duration-150"
        >
          <span className="text-base md:text-xl font-semibold tracking-tight text-black">
            Register
          </span>
        </a>

        {/* Secondary — filled charcoal block */}
        <a
          href="#agenda"
          className="flex items-center justify-center w-full h-[88px] md:h-24 rounded-lg bg-[#323232] hover:bg-[#3a3a3a] active:scale-[0.997] transition-colors duration-150"
        >
          <span className="text-base md:text-xl font-semibold tracking-tight text-white/70 hover:text-white transition-colors duration-150">
            View Agenda
          </span>
        </a>
      </div>
    </div>
  );
}
