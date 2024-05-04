export default function Footer() {
  return (
    <>
      <main className=" bg-count text-white padding grid md:grid-cols-2 lg:grid-cols-4">
        <section>1</section>
        <section>2</section>
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
