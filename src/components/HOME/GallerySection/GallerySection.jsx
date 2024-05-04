export default function GallerySection() {
  return (
    <section className="bg-responsibility padding py-14 md:py-20 lg:py-24">
      {/* gallery section start */}
      <h1 className="text-center text-3xl md:text-4xl font-bold text-gray-800 capitalize">
        Our Gallery
      </h1>
      {/* gallery section end */}
      <div className="font-semibold md:text-lg flex items-center justify-center gap-3 md:gap-5 lg:gap-7 py-7 md:py-14">
        <button className="px-2 md:px-6 lg:px-8 py-2 bg-header text-white">
          All
        </button>
        <button className="px-2 md:px-6 lg:px-8 py-2 bg-header text-white">
          Old Memories
        </button>
        <button className="px-2 md:px-6 lg:px-8 py-2 bg-header text-white">
          Event
        </button>
        <button className="px-2 md:px-6 lg:px-8 py-2 bg-header text-white">
          Our Picnic
        </button>
        <button className="hidden md:block px-3 md:px-6 lg:px-8 py-2 bg-header text-white">
          Recent
        </button>
      </div>
    </section>
  );
}
