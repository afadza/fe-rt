import Loader from '../../common/Loader';
import { useRekapPerRumah } from '../../hooks/useRekapPerRumah';
import { useRumah } from '../../hooks/useRumah';

const TablesIuranPerRumah = () => {
  const { Perumah, formatTotalSatpam, setNo, no } = useRekapPerRumah();
  const { daftarRumah } = useRumah();

  if (!Perumah)
    return (
      <div className="w-full flex justify-center items-center dark:bg-boxdark  bg-white">
        <Loader />
      </div>
    );
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex mb-4 gap-4">
        <p className="dark:text-white text-black">Pilih No :</p>
        <select
          name="Bulan"
          id=""
          className="bg-white text-black dark:bg-boxdark dark:text-white"
          onChange={(e) => setNo(Number(e.target.value))}
        >
          {daftarRumah?.map((item: any, index: number) => (
            <option key={index} value={item.nomor_rumah}>
              {item.nomor_rumah} / {item.pemilik}
            </option>
          ))}
        </select>
      </div>
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="py-4 pl-8 font-medium text-black dark:text-white">
                Bulan
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Satpam
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Kebersihan
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Total
              </th>
              <th className="min-w-[50px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                status
              </th>
            </tr>
          </thead>
          <tbody>
            {Perumah?.pembayaran?.map((item: any, index: number) => (
              <tr key={index}>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white pl-4">
                    {item.bulan}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    Rp.{formatTotalSatpam(item.satpam)}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    Rp.{formatTotalSatpam(item.kebersihan)}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    Rp.{formatTotalSatpam(item.jumlah)}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  {item.status === 'Lunas' ? (
                    <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">
                      {item.status}
                    </p>
                  ) : item.status === 'Belum Lunas' ? (
                    <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-warning">
                      {item.status}
                    </p>
                  ) : (
                    <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-danger">
                      {item.status}
                    </p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablesIuranPerRumah;
