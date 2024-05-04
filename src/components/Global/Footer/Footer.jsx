import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

export default function Footer() {
  return (
    <>
      <main className=" bg-count text-white padding grid md:grid-cols-2 lg:grid-cols-4 py-10 md:py-16 lg:py-24">
        <section>1</section>
        <Touch />
        <section>3</section>
        <section>4</section>
      </main>

      {/* rights section start */}
      <footer className="bg-header text-white/90 h-16 flex items-center justify-center">
        &copy;2024 City University, All Rights Reserved
      </footer>
      {/* rights section end */}
    </>
  );
}

export function Touch() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-9">Get In Touch</h1>
      <main className="flex flex-col gap-6">
        <p>We are legend Lorem ipsum dolor sitmet, nsecte ipisicing eit, sed</p>
        <section className="ring-1 ring-header h-12 flex">
          <input
            className="w-[80%] bg-header/10 capitalize outline-none p-3 placeholder:font-semibold"
            type="text"
            placeholder="Enter your email"
          />
          <button className="bg-header hover:bg-headerHover w-[21%] trans">
            <FontAwesomeIcon className="h-5" icon={faPaperPlane} />
          </button>
        </section>
        <section className="flex justify-between items-center">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
        </section>
      </main>
    </section>
  );
}
