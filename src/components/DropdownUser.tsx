import { FaRegUserCircle } from "react-icons/fa";

const DropdownUser = () => {
  return (
    <div className="relative">
      <div className="flex items-center gap-4">
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            Bpk. Yusup Kurniawan
          </span>
          <span className="block text-xs">Ketua RT 05</span>
        </span>

        <span className="h-12 w-12 rounded-full">
         <FaRegUserCircle size={40} className="dark:text-white text-black"/>
        </span>
      </div>
    </div>
  );
};

export default DropdownUser;
