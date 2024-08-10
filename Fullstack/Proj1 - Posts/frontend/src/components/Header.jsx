const Header = () => {
  return (
    <div className="flex gap-3 items-center p-2 w-full">
      <div className="h-[40px] w-[40px] bg-gray-600 rounded-full"></div>
      <div className="w-[90%] flex justify-center">
        <div className="flex">
          <ul className="flex gap-3">
            <li className="cursor-pointer hover:text-[#808080]">Home</li>
            <li className="cursor-pointer hover:text-[#808080]">Categories</li>
            <li className="cursor-pointer hover:text-[#808080]">About</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
