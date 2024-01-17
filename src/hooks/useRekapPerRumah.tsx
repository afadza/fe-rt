import { useMutation, useQuery } from '@tanstack/react-query';
import { API } from '../libs/api';
import { useState } from 'react';

export function useRekapPerRumah() {
  const [no, setNo] = useState(0);
  const [noPembayaran, setNoPembayaran] = useState(0);

  const { data: Perumah } = useQuery({
    queryKey: ['pembayaran', no, noPembayaran],
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
    Perumah,
    formatTotalSatpam,
    setNo,
    no,
    setNoPembayaran,
    noPembayaran,
    HapusPembayaran
  };
}
