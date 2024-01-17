import { lazy } from 'react';

const FormElements = lazy(() => import('../pages/Form/IuranBulanan'));
const FormLayout = lazy(() => import('../pages/Form/StatusWarga'));
const Tables = lazy(() => import('../pages/Tables/Tables'));
const TableTree = lazy(() => import('../components/TableThree'));
const TableTwo = lazy(() => import('../components/TableTwo'));
const TablesIuranPerRumah = lazy(
  () => import('../pages/Tables/TablesIuranPerRumah'),
);
const RumahBaru = lazy(() => import('../pages/Form/RumahBaru'));

const coreRoutes = [
  {
    path: '/forms/form-elements',
    title: 'Tambah Pembayaran',
    component: FormElements,
  },
  {
    path: '/forms/form-layout',
    title: 'Form Layouts',
    component: FormLayout,
  },
  {
    path: '/tables',
    title: 'Tables',
    component: Tables,
  },
  {
    path: '/tables/daftar-warga',
    title: 'Daftar Warga',
    component: TableTree,
  },
  {
    path: '/tables/daftar-pemasukan',
    title: 'Daftar Iuran Perbulan',
    component: TableTwo,
  },
  {
    path: '/tables/daftar-iuran/rumah',
    title: 'Daftar Iuran Perumah',
    component: TablesIuranPerRumah,
  },
  {
    path: '/forms/rumah-baru',
    title: 'Rumah Baru',
    component: RumahBaru,
  },
];

const routes = [...coreRoutes];
export default routes;
