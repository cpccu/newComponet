export default function BlogMainCard({ Data }) {
  return (
    <main className="bg-white hover:-translate-y-3 trans">
      <section className="overflow-hidden h-[250px] relative">
        <img
          className="h-full w-full object-cover"
          src={Data?.img}
          alt="image"
        />
      </section>
      <section className="flex flex-col items-start gap-4 p-6">
        <h1 className="text-2xl font-semibold">{Data?.header}</h1>
        <p className=" line-clamp-4">{Data?.conText}</p>
        <button className="px-5 py-2 mt-2 bg-header text-white hover:bg-gray-800 trans">
          {Data?.btnText}
        </button>
      </section>
    </main>
  );
}
