import CardFour from '../../components/CardFour.tsx';
import CardOne from '../../components/CardOne.tsx';
import CardThree from '../../components/CardThree.tsx';
import CardTwo from '../../components/CardTwo.tsx';
import TableOne from '../../components/TableOne.tsx';
import { useRumah } from '../../hooks/useRumah.tsx';

const InformasiDesa = () => {
  const { Rumah, RumahKosong, RumahTetap, RumahSementara } = useRumah();
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardOne item={Rumah?.length} />
        <CardTwo item={RumahTetap?.length} />
        <CardThree item={RumahSementara?.length} />
        <CardFour item={RumahKosong?.length} />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-12">
          <TableOne />
        </div>
      </div>
    </>
  );
};

export default InformasiDesa;
