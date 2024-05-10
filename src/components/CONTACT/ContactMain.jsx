export default function ContactMain() {
  return (
    <main className="px-1 md:px-2 lg:px-[5em] grid  lg:grid-cols-2 gap-10 py-20 bg-responsibility">
      <section className="w-full">
        <iframe
          className="w-full min-h-[500px] lg:h-full shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.4657030476737!2d90.30487057786988!3d23.87309942337447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c2102dc1cd51%3A0x6f95e92193fc8978!2sCity%20University%20Bangladesh!5e0!3m2!1sen!2sus!4v1715372425282!5m2!1sen!2sus"
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <section className="w-full border bg-white">
        <form className="p-12 flex flex-col gap-5 shadow-lg">
          <section className="flex items-center gap-2">
            <div className="w-full">
              <p className="font-semibold">Name</p>
              <input
                className="border px-4 py-3 w-full bg-header/10 "
                type="text"
                placeholder="Enter your name"
              />
            </div>

            <div className="w-full">
              <p className="font-semibold">Email</p>
              <input
                className="border px-4 py-3 w-full bg-header/10 "
                type="email"
                placeholder="Enter your email"
              />
            </div>
          </section>
          <input
            className="px-4 py-3 border w-full bg-header/10"
            type="text"
            placeholder="subject"
          />

          <textarea
            className="border px-4 py-3 bg-header/10"
            rows={12}
            placeholder="Enter your message"
          ></textarea>
        </form>
      </section>
    </main>
  );
}
