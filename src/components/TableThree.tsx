import { useRumah } from '../hooks/useRumah';

const TableThree = () => {
  const { Rumah } = useRumah();
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[80px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                No.
              </th>
              <th className="min-w-[20px] py-4 px-4 font-medium text-black dark:text-white">
                No. Rumah
              </th>
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white">
                Pemilik
              </th>
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white">
                Tanggal Masuk
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {Rumah?.map((item: any, index: number) => (
              <tr key={index}>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {index + 1}
                  </h5>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white pl-6">
                    {item.nomor_rumah}
                  </p>
                </td>
                {item.pemilik ? (
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">{item.pemilik}</p>
                  </td>
                ) : (
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="inline-flex rounded-full bg-danger bg-opacity-10 py-1 px-3 text-sm font-medium text-danger">
                      Kosong
                    </p>
                  </td>
                )}
                {item.pemilik ? (
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {item.updated_at}
                    </p>
                  </td>
                ) : (
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="inline-flex rounded-full bg-danger bg-opacity-10 py-1 px-3 text-sm font-medium text-danger">
                      Kosong
                    </p>
                  </td>
                )}

                {item.status === 'Tetap' ? (
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">
                      Tetap
                    </p>
                  </td>
                ) : item.status === 'Sementara' ? (
                  <td className="py-5 px-4 border-b border-[#eee] dark:border-strokedark">
                    <p className="inline-flex rounded-full bg-warning bg-opacity-10 py-1 px-3 text-sm font-medium text-warning">
                      Sementara
                    </p>
                  </td>
                ) : (
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="inline-flex rounded-full bg-danger bg-opacity-10 py-1 px-3 text-sm font-medium text-danger">
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

export default TableThree;
