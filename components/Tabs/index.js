import AppContext from "../../context/AppContext";
import { useState, useContext } from "react";

export default function Tabs() {
  const { setTabMovie } = useContext(AppContext);
  const [tab, setTab] = useState({
    isActive: true,
    type: "popular",
  });

  function handleClick(type) {
    setTab({ isActive: true, type: type });
    setTabMovie(`movie/${type}`);
  }

  return (
    <div className="flex justify-center">
      <a
        className={`cursor-pointer pt-4 pb-4 pl-10 pr-10 no-underline rounded-lg ${
          tab.type === "popular" && tab.isActive
            ? `bg-gray-200 hover:bg-gray-400`
            : `bg-gray-500 hover:bg-gray-300`
        }`}
        onClick={() => handleClick("popular")}
      >
        Popular
      </a>
      <a
        className={`cursor-pointer pt-4 mr-5 ml-5 pb-4 pl-10 pr-10 no-underline rounded-lg ${
          tab.type === "upcoming" && tab.isActive
            ? `bg-gray-200 hover:bg-gray-400`
            : `bg-gray-500 hover:bg-gray-300`
        }`}
        onClick={() => handleClick("upcoming")}
      >
        Upcoming
      </a>
      <a
        className={`cursor-pointer pt-4 pb-4 pl-10 pr-10 no-underline rounded-lg ${
          tab.type === "top_rated" && tab.isActive
            ? `bg-gray-200 hover:bg-gray-400`
            : `bg-gray-500 hover:bg-gray-300`
        }`}
        onClick={() => handleClick("top_rated")}
      >
        Top Rated
      </a>
    </div>
  );
}
