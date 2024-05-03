import useIMG from "./../../../assets/icons/user.svg";
import pictureIMG from "./../../../assets/icons/picture.svg";
import eventIMG from "./../../../assets/icons/event.svg";
import medalIMG from "./../../../assets/icons/medal.svg";

export default function Count() {
  return (
    <main className="bg-count text-white grid md:grid-cols-2 lg:grid-cols-4 md:gap-x-5 gap-y-12 lg:gap-8 padding">
      {/* users section start */}
      <section className="grid grid-cols-2  grid-rows-2 gap-x-5">
        <div className=" row-span-2">
          <img src={useIMG} alt="" />
        </div>
        <div className="row-span-1 self-end">2</div>
        <div className="row-span-1 self-start">3</div>
      </section>
      {/* users section end */}

      {/* users section start */}
      <section className="grid grid-cols-2  grid-rows-2 gap-x-5">
        <div className=" row-span-2">
          <img src={useIMG} alt="" />
        </div>
        <div className="row-span-1 self-end">2</div>
        <div className="row-span-1 self-start">3</div>
      </section>
      {/* users section end */}
    </main>
  );
}
