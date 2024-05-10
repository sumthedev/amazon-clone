import { useState } from "react";
import { logo } from "../../assets/index";
import { allItems } from "../../constants/index";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import HeaderBottom from "./HeaderBottom";
import LogoutIcon from "@mui/icons-material/Logout";

function Header() {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="w-full">
      <div
        className="bg-amazon_blue text-white w-full 
      px-4 py-3 flex item-center gap-4 "
      >
        <div className="headerHover">
          <img className="w-24 mt-2" src={logo} alt="logoImage" />
        </div>

        <div className="headerHover ">
          <span>
            <LocationOnOutlinedIcon />
          </span>

          <p className="text-sm text-lightText flex flex-col font-light">
            Deliver to{" "}
            <span className="text-sm font-semibold -mt- text-whiteText">
              Multan
            </span>
          </p>
        </div>
        {/* {search bar} */}
        <div className=" rounded-md flex flex-grow relative">
          <span>
            All
            <span onClick={() => setShowAll(!showAll)}>
              <ArrowDropDownOutlinedIcon />
            </span>
          </span>

          {showAll && (
            <div>
              <ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex flex-col gap-1 z-50">
                {allItems.map((item) => (
                  <li
                    className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200"
                    key={item._id}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <input
            type="text"
            className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2"
          />
          <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md">
            <SearchIcon />
          </span>
        </div>
        <div className="flex flex-col items-start justify-center headerHover">
          <p className="text-xs text-lightText font-light">Hello, sign in</p>

          <p className="hidden md:inline-flex text-sm font-semibold -mt-1 text-whiteText">
            Accounts & Lists{" "}
            <span>
              <ArrowDropDownOutlinedIcon />
            </span>
          </p>
        </div>
        <div className="hidden mdl:flex flex-col items-start justify-center headerHover">
          <p className="text-xs text-lightText font-light">Returns</p>
          <p className="text-sm font-semibold -mt-1 text-whiteText">& Orders</p>
        </div>
        <div className="flex items-start justify-center headerHover relative">
          <ShoppingCartIcon />
          <p className="hidden mdl:inline-flex text-xs font-semibold mt-3 text-whiteText">
            Cart
          </p>
          <span className="absolute text-xs top-0 left-6 w-4 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center">
            0
          </span>
        </div>
      </div>
      <HeaderBottom />
    </div>
  );
}

export default Header;
