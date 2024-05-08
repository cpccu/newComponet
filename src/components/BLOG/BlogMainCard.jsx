export default function BlogMainCard() {
  return (
    <main className="ring-1 shadow-xl p-5 hover:scale-110 trans">
      <section>
        <img
          src="https://i.ibb.co/5xns9k3/Whats-App-Image-2024-05-05-at-14-07-05-4cebbbbf.jpg"
          alt=""
        />
      </section>
      <section className="flex flex-col items-start gap-3 py-3 md:py-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          Lorem ipsum dolor sit amet.
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
          tenetur nihil mollitia maxime tempora quis repellendus exercitationem!
          Nulla, quae sequi!
        </p>
        <button>Read more...</button>
      </section>
    </main>
  );
}
