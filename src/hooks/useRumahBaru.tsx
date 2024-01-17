import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { API } from '../libs/api';
import { useState } from 'react';

export function useRumahBaru() {
  const navigate = useNavigate();
  const [status, setStatus] = useState('');
  const [data, setData] = useState({
    nomor_rumah: 0,
    pemilik: '',
  });

  function handleChange(e: any) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  const { mutate: TambahRumah, error: ErrorRumah } = useMutation({
    mutationFn: async () => {
      const response = await API.post('/rumah', {
        nomor_rumah: data.nomor_rumah,
        pemilik: data.pemilik,
        status: status,
      });
      return response.data;
    },
    onSuccess: () => {
      navigate('/tables/daftar-warga');
      setData({
        nomor_rumah: 0,
        pemilik: '',
      });
    },
    onError: (error) => {
      console.log('error', error);
    },
  });

  return {
    TambahRumah,
    ErrorRumah,
    status,
    setStatus,
    data,
    setData,
    handleChange,
  };
}
