import { useQuery, useMutation } from '@tanstack/react-query';
import { API } from '../libs/api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useRumah() {
  const navigate = useNavigate();
  const [noRumah, setNoRumah] = useState(0);
  const { data: Rumah } = useQuery({
    queryKey: ['rumah', noRumah],
    queryFn: async () => {
      const response = await API.get('/rumah');
      return response.data;
    },
  });

  const RumahKosong = Rumah?.filter(
    (rumah: { status: string }) => rumah.status === 'Kosong',
  );
  const daftarRumah = Rumah?.filter(
    (rumah: { status: string }) => rumah.status !== 'Kosong',
  );
  const RumahTetap = Rumah?.filter(
    (rumah: { status: string }) => rumah.status === 'Tetap',
  );
  const RumahSementara = Rumah?.filter(
    (rumah: { status: string }) => rumah.status === 'Sementara',
  );

  const [bulan, setBulan] = useState('Januari');
  const [no, setNo] = useState(1);
  const [data, setData] = useState({
    satpam: 0,
    kebersihan: 0,
  });

  function handleChange(e: any) {
    setData({
      ...data,
      [e.target.name]: Number(e.target.value),
    });
  }

  const { mutate: Bayar, error: ErrorBayar } = useMutation({
    mutationFn: async () => {
      const response = await API.post('/pembayaran', {
        nomor_rumah: no,
        bulan: bulan,
        satpam: data.satpam,
        kebersihan: data.kebersihan,
      });
      return response.data;
    },
    onSuccess: () => {
      setData({
        satpam: 0,
        kebersihan: 0,
      });
      navigate('/tables/daftar-pemasukan');
    },
    onError: (error) => {
      console.log('error', error);
    },
  });

  const { mutate: Lunas, error: ErrorLunas } = useMutation({
    mutationFn: async () => {
      const response = await API.patch('/pembayaran', {
        nomor_rumah: no,
        bulan: bulan,
        satpam: data.satpam,
        kebersihan: data.kebersihan,
      });
      return response.data;
    },
    onSuccess: () => {
      setData({
        satpam: 0,
        kebersihan: 0,
      });
      navigate('/tables/daftar-pemasukan');
    },
    onError: (error) => {
      console.log('error', error);
    },
  });

  function formatTotalSatpam(totalSatpam: {
    toLocaleString: (arg0: string) => any;
  }) {
    const formattedTotalSatpam = totalSatpam.toLocaleString('id-ID');
    return formattedTotalSatpam;
  }

  const [enabled, setEnabled] = useState<boolean>(false);

  const { mutate: HapusRumah } = useMutation({
    mutationFn: async () => {
      const response = await API.delete('/rumah', {
        data: {
          nomor_rumah: noRumah,
        },
      });
      return response.data;
    },
    onSuccess: () => {
      setNoRumah(0);
    },
    onError: (error) => {
      console.log('error', error);
    },
  });

  return {
    Rumah,
    RumahKosong,
    RumahTetap,
    RumahSementara,
    daftarRumah,
    handleChange,
    Bayar,
    data,
    setData,
    setBulan,
    setNo,
    ErrorBayar,
    formatTotalSatpam,
    enabled,
    setEnabled,
    Lunas,
    ErrorLunas,
    noRumah,
    setNoRumah,
    HapusRumah,
  };
}
