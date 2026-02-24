export default function FloatingShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Soft gradient orbs - Black to Grey */}
      <div className="absolute top-20 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-black/5 via-gray-400/5 to-transparent blur-3xl floating-slow" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-gray-500/4 via-black/3 to-transparent blur-3xl floating-delay" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-gradient-to-tr from-black/4 via-gray-600/4 to-transparent blur-3xl floating" />
      <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-gradient-to-tl from-gray-400/3 via-black/2 to-transparent blur-2xl floating-slow" />

      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay" />
    </div>
  );
}
