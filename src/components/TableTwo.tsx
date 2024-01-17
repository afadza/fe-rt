import Loader from '../common/Loader';
import { useRekapPerBulan } from '../hooks/useRekapPerBulan';

const TableTwo = () => {
  const { Perbulan, formatTotalSatpam, setBulan } = useRekapPerBulan();

  if (!Perbulan)
    return (
      <div className="w-full flex justify-center items-center dark:bg-boxdark  bg-white">
        <Loader />
      </div>
    );
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex mb-4 gap-4">
        <p className="dark:text-white text-black">Pilih Bulan :</p>
        <select
          name="Bulan"
          id=""
          className="bg-white text-black dark:bg-boxdark dark:text-white"
          onChange={(e) => setBulan(e.target.value)}
        >
          <option value="Januari">Januari</option>
          <option value="Februari">Februari</option>
          <option value="Maret">Maret</option>
          <option value="April">April</option>
          <option value="Mei">Mei</option>
          <option value="Juni">Juni</option>
          <option value="Juli">Juli</option>
          <option value="Agustus">Agustus</option>
          <option value="September">September</option>
          <option value="Oktober">Oktober</option>
          <option value="November">November</option>
          <option value="Desember">Desember</option>
        </select>
      </div>
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[50px] py-4 px-4 font-medium text-black dark:text-white">
                No. Rumah
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Pemilik
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
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {Perbulan?.map((item: any, index: number) => (
              <tr key={index}>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white pl-4">
                    {item.nomor_rumah}
                  </p>
                </td>
                {item.pemilik ? (
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">{item.pemilik}</p>
                  </td>
                ) : (
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="inline-flex rounded-full bg-danger bg-opacity-10 py-1 px-3 text-sm font-medium text-meta-1">
                      Kosong
                    </p>
                  </td>
                )}
                {item.pemilik ? (
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {item.payments[0].satpam !== null
                        ? 'Rp. ' + formatTotalSatpam(item.payments[0].satpam)
                        : 'Rp. 0'}
                    </p>
                  </td>
                ) : (
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="inline-flex rounded-full bg-danger bg-opacity-10 py-1 px-3 text-sm font-medium text-meta-1">
                      Kosong
                    </p>
                  </td>
                )}
                {item.pemilik ? (
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {item.payments[0].kebersihan !== null
                        ? 'Rp. ' +
                          formatTotalSatpam(item.payments[0].kebersihan)
                        : 'Rp. 0'}
                    </p>
                  </td>
                ) : (
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="inline-flex rounded-full bg-danger bg-opacity-10 py-1 px-3 text-sm font-medium text-meta-1">
                      Kosong
                    </p>
                  </td>
                )}
                {item.pemilik ? (
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {item.payments[0].total !== null
                        ? 'Rp. ' + formatTotalSatpam(item.payments[0].total)
                        : 'Rp. 0'}
                    </p>
                  </td>
                ) : (
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="inline-flex rounded-full bg-danger bg-opacity-10 py-1 px-3 text-sm font-medium text-meta-1">
                      Kosong
                    </p>
                  </td>
                )}
                {item.pemilik ? (
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    {item.payments[0].status === 'Lunas' ? (
                      <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">
                        {item.payments[0].status}
                      </p>
                    ) : item.payments[0].status === 'Belum Lunas' ? (
                      <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-warning">
                        {item.payments[0].status}
                      </p>
                    ) : (
                      <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-danger">
                        {item.payments[0].status}
                      </p>
                    )}
                  </td>
                ) : (
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="inline-flex rounded-full bg-danger bg-opacity-10 py-1 px-3 text-sm font-medium text-meta-1">
                      Kosong
                    </p>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableTwo;
