export function Navbar() {
  return (
    <div className="flex justify-around md:justify-end mt-5 text-base md:text-xl text-navbar-gray font-normal">
      <div
        className="md:mx-10 
        border-button cursor-pointer hover:border-b-8 hover:border-[#8e97e6] "
      >
        Projects
      </div>
      <div
        className="md:mx-10 text-black
        hover:border-b-8 hover:border-base-500 cursor-pointer"
      >
        Contact
      </div>
    </div>
  );
}
