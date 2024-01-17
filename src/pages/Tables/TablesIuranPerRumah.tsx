import { useState } from 'react';
import { useRekapPerRumah } from '../../hooks/useRekapPerRumah';
import { useRumah } from '../../hooks/useRumah';
import { MdDelete } from 'react-icons/md';

const TablesIuranPerRumah = () => {
  const {
    Perumah,
    formatTotalSatpam,
    setNo,
    setNoPembayaran,
    HapusPembayaran,
  } = useRekapPerRumah();
  const { daftarRumah } = useRumah();
  const [modal, setModal] = useState(false);

  if (!Perumah)
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
            <option value="" hidden className="text-meta-1">
              Pilih no rumah
            </option>
            {daftarRumah?.map((item: any, index: number) => (
              <option key={index} value={item.nomor_rumah}>
                {item.nomor_rumah} / {item.pemilik}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full flex justify-center items-center dark:bg-boxdark  bg-white">
          <p>Silahkan pilih no rumah!</p>
        </div>
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
                Status
              </th>
              <th className="min-w-[50px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Hapus
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
                {item.status !== 'Belum Bayar' && (
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <button
                      onClick={() => {
                        setModal(!modal);
                        setNoPembayaran(item.id);
                      }}
                      className="inline-flex rounded-full bg-danger bg-opacity-10 py-1 px-3 text-sm font-medium text-danger"
                    >
                      <MdDelete />
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        {modal && (
          <div className="-ml-2 p-5 fixed  rounded-md border dark:border-stroke dark:bg-white shadow-default border-strokedark bg-boxdark modal-center">
            <p className="mb-4 font-medium dark:text-black text-white text-[10px]">
              Anda yakin ingin menghapus pembayaran ?
            </p>
            <div className="flex justify-end gap-2 ">
              <button
                onClick={() => setModal(!modal)}
                className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3  text-[10px] font-medium text-success"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setModal(!modal);
                  HapusPembayaran();
                }}
                className="inline-flex rounded-full bg-danger bg-opacity-10 py-1 px-3  text-[10px] font-medium text-danger"
              >
                Konfirmasi
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TablesIuranPerRumah;
