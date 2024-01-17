import { useMutation, useQuery } from '@tanstack/react-query';
import { API } from '../libs/api';
import { useState } from 'react';

export function useRekapPerBulan() {
  const [bulan, setBulan] = useState('Januari');
  const [noPembayaran, setNoPembayaran] = useState(0);

  const { data: Perbulan } = useQuery({
    queryKey: ['pembayaran', bulan, noPembayaran],
    queryFn: async () => {
      const response = await API.get(`/pembayaran/bulanan?bulan=${bulan}`);
      return response.data;
    },
  });

  function formatTotalSatpam(totalSatpam: {
    toLocaleString: (arg0: string) => any;
  }) {
    const formattedTotalSatpam = totalSatpam.toLocaleString('id-ID');
    return formattedTotalSatpam;
  }

  const { mutate: HapusPembayaran } = useMutation({
    mutationFn: async () => {
      const response = await API.delete(`/pembayaran?id=${noPembayaran}`, {
        data: {
          id: noPembayaran,
        },
      });
      return response.data;
    },
    onSuccess: () => {
      setNoPembayaran(0);
    },
    onError: (error) => {
      console.log('error', error);
    },
  });

  return {
    Perbulan,
    formatTotalSatpam,
    setBulan,
    setNoPembayaran,
    noPembayaran,
    HapusPembayaran,
  };
}
