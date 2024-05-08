import { logo } from "../../assets/index";

function Header() {
  return (
    <div>
      <div className=" w-full bg-amazon_blue text-white px-4 py-3">
        <div>
          <img className="w-24 mt-2" src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Header;
