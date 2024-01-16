import { useQuery } from "@tanstack/react-query";
import { API } from '../libs/api'

export function useRekapPembayaran() {
  const { data: RekapBulanan } = useQuery({
    queryKey: ["pembayaran"],
    queryFn: async () => {
      const response = await API.get("/pembayaran/rekap");
      return response.data;
    },
  });

  function formatTotalSatpam(totalSatpam: { toLocaleString: (arg0: string) => any; }) {
    const formattedTotalSatpam = totalSatpam.toLocaleString('id-ID');
    return formattedTotalSatpam;
  }

  return { RekapBulanan, formatTotalSatpam };
}