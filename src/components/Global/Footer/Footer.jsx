import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import InstituteInfo from "./../../../../data/institude.json";

export default function Footer() {
  return (
    <>
      <main className="bg-count text-white padding grid justify-between gap-5 md:grid-cols-2 lg:grid-cols-12 py-10 md:py-16 lg:py-24">
        <FooterInfo />
        <Touch />
        <section className="lg:col-span-3">3</section>
        <section className="lg:col-span-1">4</section>
      </main>

      {/* rights section start */}
      <footer className="bg-header text-white/90 h-16 flex items-center justify-center">
        &copy;2024 City University, All Rights Reserved
      </footer>
      {/* rights section end */}
    </>
  );
}

// logo and information section start

export function FooterInfo() {
  return (
    <main className="flex flex-col gap-5 lg:col-span-4">
      <section className="flex items-center gap-2">
        <img
          className="h-14 filter grayscale"
          src={InstituteInfo?.img}
          alt={InstituteInfo?.alt}
        />
        <div>
          <h1 className="text-2xl font-bold font-custom">
            {InstituteInfo?.name}
          </h1>
          <p className="text-sm">{InstituteInfo?.shortName}</p>
        </div>
      </section>
      <p>
        We are legend Lorem ipsum dolor sitmet, nsecte ipisicing eit, sed do
        eiusmod tempor incidunt ut et do maga aliqua enim ad minim.
      </p>

      <section className="flex flex-col items-start gap-2 font-semibold text-sm">
        <button>Email: {InstituteInfo?.email}</button>
        <button>Hotline: {InstituteInfo?.phone}</button>
      </section>
    </main>
  );
}

// logo and information section end

// Get In Touch section start

export function Touch() {
  return (
    <section className="lg:col-span-3">
      <h1 className="text-2xl font-bold mb-9">Get In Touch</h1>
      <main className="flex flex-col gap-6">
        <p>We are legend Lorem ipsum dolor sitmet, nsecte ipisicing eit, sed</p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="ring-1 ring-header h-12 flex"
        >
          <input
            className="w-[80%] bg-header/10 placeholder:capitalize outline-none p-3 placeholder:font-semibold"
            type="email"
            placeholder="Enter your email"
            required
          />
          <button className="bg-header hover:bg-headerHover w-[21%] trans">
            <FontAwesomeIcon className="h-5" icon={faPaperPlane} />
          </button>
        </form>

        <section className="flex gap-5">
          {/* facebook start */}
          <button className="bg-header hover:bg-headerHover trans flex items-center justify-center px-3 py-2">
            <FontAwesomeIcon className="h-5" icon={faFacebookF} />
          </button>
          {/* facebook end */}
          {/* whatsapp start */}
          <button className="bg-header hover:bg-headerHover trans flex items-center justify-center px-3 py-2">
            <FontAwesomeIcon className="h-5" icon={faWhatsapp} />
          </button>
          {/* whatsapp end */}
          {/* linkedin start */}
          <button className="bg-header hover:bg-headerHover trans flex items-center justify-center px-3 py-2">
            <FontAwesomeIcon className="h-5" icon={faLinkedinIn} />
          </button>
          {/* linkedin end */}
          {/* github start */}
          <button className="bg-header hover:bg-headerHover trans flex items-center justify-center px-3 py-2">
            <FontAwesomeIcon className="h-5" icon={faGithub} />
          </button>
          {/* github end */}
        </section>
      </main>
    </section>
  );
}

// Get In Touch section end
