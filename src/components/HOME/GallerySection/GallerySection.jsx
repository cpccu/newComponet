import Data from "./../../../../data/GallerySection.json";

export default function GallerySection() {
  return (
    <section className="bg-responsibility padding py-14 md:py-20 lg:py-24">
      {/* gallery section start */}
      <h1 className="text-center text-3xl md:text-4xl font-bold text-gray-800 capitalize">
        {Data?.header}
      </h1>
      {/* gallery section end */}
      <div className="font-semibold md:text-lg flex items-center justify-center gap-3 md:gap-5 lg:gap-7 py-7 md:py-14">
        {Data?.element.map((item, index) => (
          <button
            key={index}
            className="px-2 md:px-6 lg:px-8 py-2 bg-header text-white"
          >
            {item?.btnText}
          </button>
        ))}
      </div>
    </section>
  );
}
