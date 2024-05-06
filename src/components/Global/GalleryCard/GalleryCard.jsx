import plusIcon from "./../../../assets/icons/plus.svg";

export default function GalleryCard({ Data }) {
  return Data ? (
    <main className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
      {Data.map((item, index) => (
        <div key={index} className="w-full h-[16rem] relative group">
          <img
            className="w-full h-full object-cover"
            loading="lazy"
            src={item?.img}
            alt={`gIMG${index}`}
          />
          <div className="absolute bg-header/85 flex-col justify-around pt-14 px-5 inset-0 flex opacity-0 group-hover:opacity-100 transition-all duration-700">
            <img className="h-14" src={plusIcon} alt="plus" />
            <div className="mt-8 text-white">
              <h3 className="font-bold">{item?.header}</h3>
              <p className="font-semibold text-sm">{item?.date}</p>
            </div>
          </div>
        </div>
      ))}
    </main>
  ) : null;
}
