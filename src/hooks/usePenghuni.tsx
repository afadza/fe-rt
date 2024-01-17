import { useMutation } from '@tanstack/react-query';
import { API } from '../libs/api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function usePenghuni() {
  const navigate = useNavigate();
  const [nama, setNama] = useState('');
  const [no, setNo] = useState(0);
  const [status, setStatus] = useState('');
  const { mutate: addPenghuni, error: ErrorData } = useMutation({
    mutationFn: async () => {
      const response = await API.patch('/rumah', {
        nomor_rumah: no,
        pemilik: nama,
        status: status,
      });
      return response.data;
    },
    onSuccess: () => {
      navigate('/tables/daftar-warga');
    },
    onError: (error) => {
      console.log('error', error);
    },
  });

  return { addPenghuni, setNama, nama, setNo, no, setStatus, status, ErrorData };
}
