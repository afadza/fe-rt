import Breadcrumb from '../../components/Breadcrumb';
import { useRumah } from '../../hooks/useRumah';
import { usePenghuni } from '../../hooks/usePenghuni';
import SwitcherOne from '../../components/SwitcherOne';
import { useState } from 'react';

const StatusWarga = () => {
  const { RumahKosong, daftarRumah} = useRumah();
  const { addPenghuni, setNama, nama, setNo, setStatus, status, ErrorData } =
    usePenghuni();
  const [enabled, setEnabled] = useState<boolean>(false);

  return (
    <>
      <Breadcrumb pageName="Penghuni Baru" />
      <div>
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark items-center">
              <div className="flex items-center gap-4">
                <h3 className="font-medium text-black dark:text-white">
                  Penghuni Baru
                </h3>
                <SwitcherOne enabled={enabled} setEnabled={setEnabled} />
              </div>
              <p className="text-[10px] text-meta-1 mt-3">
                • Nyalakan penghuni baru untuk melihat no rumah yang kosong!
              </p>
            </div>
            {enabled === true ? (
              <div>
                <div className="p-6.5">
                  <div className="mb-4.5">
                    <label className="mb-2.5 block text-black dark:text-white">
                      No. Rumah
                    </label>
                    <div className="relative z-20 bg-transparent dark:bg-form-input">
                      <select
                        onChange={(e) => setNo(Number(e.target.value))}
                        className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      >
                        <option value="" hidden>
                          Pilih no rumah
                        </option>
                        {RumahKosong?.map((rumah: any, index: number) => (
                          <option key={index} value={rumah.nomor_rumah}>
                            {rumah.nomor_rumah}
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
                  <div className="mb-4.5">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Status
                    </label>
                    <div className="relative z-20 bg-transparent dark:bg-form-input">
                      <select
                        onChange={(e) => setStatus(e.target.value)}
                        className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      >
                        <option value="" hidden>
                          Pilih status
                        </option>
                        <option value="Tetap">Tetap</option>
                        <option value="Sementara">Sementara</option>
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
                      Nama Pemilik <span className="text-meta-1">*</span>
                    </label>
                    <input
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                      type="text"
                      placeholder="Jhon Doe"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                  {ErrorData && (
                    <p className="text-meta-1 text-sm mb-4">
                      * Nama pemilik tidak boleh kosong
                    </p>
                  )}

                  <button
                    type="button"
                    onClick={() => addPenghuni()}
                    className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray"
                  >
                    Tambah Penghuni
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="p-6.5">
                  <div className="mb-4.5">
                    <label className="mb-2.5 block text-black dark:text-white">
                      No. Rumah
                    </label>
                    <div className="relative z-20 bg-transparent dark:bg-form-input">
                      <select
                        onChange={(e) => setNo(Number(e.target.value))}
                        className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      >
                        <option value="" hidden>
                          Pilih no rumah
                        </option>
                        {daftarRumah?.map((rumah: any, index: number) => (
                          <option key={index} value={rumah.nomor_rumah}>
                            {rumah.nomor_rumah}
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
                  <div className="mb-4.5">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Status
                    </label>
                    <div className="relative z-20 bg-transparent dark:bg-form-input">
                      <select
                        onChange={(e) => setStatus(e.target.value)}
                        className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      >
                        <option value="" hidden>
                          Pilih status
                        </option>
                        <option value="Tetap">Tetap</option>
                        <option value="Kosong">Kosong</option>
                        <option value="Sementara">Sementara</option>
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
                  {status !== 'Kosong' && (
                    <div className="mb-4.5">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Nama Pemilik <span className="text-meta-1">*</span>
                      </label>
                      <input
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                        type="text"
                        placeholder="Jhon Doe"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                    </div>
                  )}
                  {ErrorData && (
                    <p className="text-meta-1 text-sm mb-4">
                      * Nama pemilik tidak boleh kosong
                    </p>
                  )}

                  <button
                    type="button"
                    onClick={() => addPenghuni()}
                    className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray"
                  >
                    Perbarui
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default StatusWarga;
