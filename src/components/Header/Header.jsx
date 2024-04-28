import InstitudeInfo from "./../../../data/institude.json";

export default function Header() {
  return (
    <header
      className={` bg-blue-950 hidden md:flex text-white justify-between items-center padding`}
    >
      <div className="flex gap-5 font-semibold text-sm">
        <p>Email: {InstitudeInfo?.email}</p>
        <p>Hotline: {InstitudeInfo?.phone}</p>
      </div>
      <div className="flex gap-3 items-center font-semibold text-sm">
        <button className="py-2 px-5 bg-header/90 hover:bg-header trans">
          Login
        </button>
        <button className="py-2 px-5 bg-green-600 hover:bg-green-500 trans">
          Signup
        </button>
      </div>
    </header>
  );
}
