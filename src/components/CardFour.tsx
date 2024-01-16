import { FaHouseCircleXmark } from 'react-icons/fa6';

const CardFour = ({item} : any) => {
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        <FaHouseCircleXmark size={20} className="dark:text-white" />
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {item}
          </h4>
          <span className="text-sm font-medium">Rumah Kosong</span>
        </div>
      </div>
    </div>
  );
};

export default CardFour;
