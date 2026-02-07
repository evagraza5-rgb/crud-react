export default function About() {
  return (
    <div className="flex justify-center items-start mt-16 px-4 min-h-screen bg-[#D6E5E3]">
      <div className="w-full max-w-3xl bg-[#DCD6F7] p-10 rounded-3xl shadow-2xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#424874] mb-8 tracking-wide">
          About This App
        </h2>
        <p className="text-[#424874] text-lg md:text-xl text-center leading-relaxed font-sans">
          This CRUD application is a simple web-based system that allows users
          to create, read, update, and delete data efficiently. It is designed
          to be user-friendly and accessible, aiming to help individuals or
          small businesses manage their information in a more organized way.
          With its intuitive interface, users can easily track, modify, and
          manage their data without any hassle.
        </p>
      </div>
    </div>
  );
}
