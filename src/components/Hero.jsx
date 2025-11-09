export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-[#111]"
    >
      <div className="flex flex-col md:flex-row items-center md:space-x-10">
        <div className="text-left">
          <h1 className="text-3xl font-bold text-white mb-2">
            Your Name Here
          </h1>
          <p className="text-gray-400 max-w-md leading-relaxed">
            Intro text goes here about your background, passion, or mission.
            Keep it short and clean.
          </p>
        </div>
        <img
          src="/your-photo.png"
          alt="Profile"
          className="rounded-full w-40 h-40 mt-6 md:mt-0 object-cover border-4 border-gray-700"
        />
      </div>
    </section>
  );
}
