import { useQuery } from '@tanstack/react-query';
import { API } from '../libs/api';
import { useState } from 'react';

export function useRekapPerBulan() {
  const [bulan, setBulan] = useState('Januari');
  const { data: Perbulan } = useQuery({
    queryKey: ['pembayaran', bulan],
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

  return { Perbulan, formatTotalSatpam, setBulan };
}
