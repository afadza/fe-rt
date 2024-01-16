import { useQuery } from '@tanstack/react-query';
import { API } from '../libs/api';
import { useState } from 'react';

export function useRekapPerRumah() {
  const [no, setNo] = useState(1);
  const { data: Perumah } = useQuery({
    queryKey: ['pembayaran', no],
    queryFn: async () => {
      const response = await API.get(`/pembayaran/rumah?nomor_rumah=${no}`);
      return response.data;
    },
  });

  function formatTotalSatpam(totalSatpam: {
    toLocaleString: (arg0: string) => any;
  }) {
    const formattedTotalSatpam = totalSatpam.toLocaleString('id-ID');
    return formattedTotalSatpam;
  }

  return { Perumah, formatTotalSatpam, setNo, no };
}
