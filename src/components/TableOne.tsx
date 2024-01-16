import { useRekapPembayaran } from '../hooks/useRekapPembayaran';

const TableOne = () => {
  const { RekapBulanan, formatTotalSatpam } = useRekapPembayaran();

  if (!RekapBulanan) return <div>Loading...</div>;
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Pemasukan Perbulan 2024
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">No</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5 md:-ml-29 -ml-26">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Bulan
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5 -ml-20">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Uang Satpam
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Uang Kebersihan
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Total
            </h5>
          </div>
        </div>
        {RekapBulanan?.map((item: any, index: React.Key | null | undefined) => (
          <div
            key={index}
            className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5"
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{Number(index) + 1}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5 md:-ml-29 -ml-26">
              <p className="text-black dark:text-white">{item?.bulan}</p>
            </div>

            <div className="hidden sm:flex items-center justify-center p-2.5 xl:p-5  -ml-20">
              <p className="hidden sm:block text-black dark:text-white">
                Rp.{formatTotalSatpam(item?.totalSatpam)}
              </p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="hidden sm:block text-black dark:text-white">
                Rp.{formatTotalSatpam(item?.totalKebersihan)}
              </p>
            </div>

            <div className="items-center justify-center p-2.5 flex xl:p-5">
              <p
                className={
                  item?.total === 0
                    ? 'text-meta-1'
                    : 'text-black dark:text-white'
                }
              >
                Rp.{formatTotalSatpam(item?.total)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
