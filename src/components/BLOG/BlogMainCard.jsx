export default function BlogMainCard({ Data }) {
  return (
    <main className="bg-white hover:-translate-y-3 trans">
      <section
        className="overflow-hidden h-[250px] relative flex items-end gap-2"
        style={{
          backgroundImage: `url(${Data?.img}`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex py-2  items-end px-5 bg-black/60 gap-4 w-full">
          <img
            className="absolute h-20 w-20 rounded-full ring-4 ring-black/60"
            src={Data?.profile}
            alt="profile"
          />

          <p className="ml-[7em] flex flex-col leading-5 shrink-0 text-white font-bold text-sm">
            <span className="text-xl">{Data?.name}</span>
            <span className="text-sm font-thin">{Data?.date}</span>{" "}
          </p>
          {/* <img
            className="h-14 w-14 rounded-full shrink-0"
            src={Data?.profile}
            alt="picture"
          />
          <p className="flex flex-col leading-5 shrink-0 text-white font-semibold text-sm">
            {Data?.name} <span className="text-sm font-thin">{Data?.date}</span>{" "}
          </p> */}
        </div>
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
