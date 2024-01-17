import { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import SwitcherOne from '../../components/SwitcherOne';
import { useRumah } from '../../hooks/useRumah';

const IuranBulanan = () => {
  const {
    daftarRumah,
    setBulan,
    setNo,
    Bayar,
    Lunas,
    ErrorLunas,
    handleChange,
    data,
    ErrorBayar,
    formatTotalSatpam,
  } = useRumah();

  const [enabled, setEnabled] = useState<boolean>(false);
  return (
    <>
      <Breadcrumb pageName="Iuran Bulanan" />

      <div className="">
        <div>
          <div className="p-6.5">
            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Bulan :
              </label>
              <div className="relative z-20 bg-transparent dark:bg-form-input">
                <select
                  onChange={(e) => setBulan(e.target.value)}
                  className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
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
                <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                  <svg
                    className="fill-current"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.8">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                        fill=""
                      ></path>
                    </g>
                  </svg>
                </span>
              </div>
            </div>
            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                No Rumah / Pemilik :
              </label>
              <div className="relative z-20 bg-transparent dark:bg-form-input">
                <select
                  onChange={(e) => setNo(parseInt(e.target.value))}
                  className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                >
                  {daftarRumah?.map((rumah: any, index: number) => (
                    <option key={index} value={rumah.nomor_rumah}>
                      {rumah.nomor_rumah} / {rumah.pemilik}
                    </option>
                  ))}
                </select>
                <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                  <svg
                    className="fill-current"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.8">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                        fill=""
                      ></path>
                    </g>
                  </svg>
                </span>
              </div>
            </div>
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">
                  Uang Satpam
                </label>
                <input
                  value={data.satpam === 0 ? '' : data.satpam}
                  onChange={handleChange}
                  name="satpam"
                  type="text"
                  placeholder="Rp..."
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>

              <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white">
                  Uang Kebersihan
                </label>
                <input
                  value={data.kebersihan === 0 ? '' : data.kebersihan}
                  onChange={handleChange}
                  name="kebersihan"
                  type="text"
                  placeholder="Rp..."
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
            </div>
            <div className="mb-4 flex gap-4 items-center ml-auto">
              <p>Pelunasan</p>
              <SwitcherOne enabled={enabled} setEnabled={setEnabled} />
            </div>
            {ErrorBayar && (
              <div>
                {ErrorBayar.message ===
                'Request failed with status code 401' ? (
                  <p className="text-meta-1 text-sm mb-4">
                    Pembayaran bulan ini sudah lunas, silahkan ganti bulan
                    selanjutnya
                  </p>
                ) : (
                  <p className="text-meta-1">
                    Kamu sudah bayar bulan ini, tapi masih kurang Rp.
                    {formatTotalSatpam(
                      (ErrorBayar as any)?.response?.data?.data,
                    )}
                    <br />
                    Segera lakukan pelunasan!
                  </p>
                )}
              </div>
            )}
            {ErrorLunas && (
              <div>
                <p className="text-meta-1 text-sm mb-4">
                  {(ErrorLunas as any)?.response?.data?.message}
                </p>
              </div>
            )}

            {enabled !== true ? (
              <button
                type="button"
                onClick={() => {
                  Bayar();
                }}
                className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray"
              >
                Bayar
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  Lunas();
                }}
                className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray"
              >
                Pelunasan
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default IuranBulanan;
