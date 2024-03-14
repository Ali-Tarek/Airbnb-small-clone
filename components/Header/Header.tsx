import Searchbar from "./Searchbar";
import Navbar from "./Navbar";
import Logo from "./Logo";

function Header({ placeholder }: { placeholder?: string }) {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-5">
      <div className="container grid grid-cols-3 relative">
        <Logo />
        <Searchbar placeholder={placeholder} />
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
