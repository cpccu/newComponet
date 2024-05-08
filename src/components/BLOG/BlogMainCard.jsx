export default function BlogMainCard({ Data }) {
  return (
    <main className="bg-white hover:-translate-y-3 trans">
      <section className="overflow-hidden h-[250px] relative">
        <img className="h-full w-full object-cover" src={Data?.img} alt="" />
      </section>
      <section className="flex flex-col items-start gap-4 p-6">
        <h1 className="text-2xl font-semibold">Lorem ipsum dolor sit amet.</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
          tenetur nihil mollitia maxime tempora quis repellendus exercitationem!
          Nulla, quae sequi!
        </p>
        <button className="px-5 py-2 mt-2 bg-header text-white hover:bg-gray-800 trans">
          Read more
        </button>
      </section>
    </main>
  );
}
