import { DashboardPage } from 'components';

const indexRoutes = [
  {
    id: 'DASHBOARD',
    path: '/',
    component: DashboardPage,
    name: 'Dashboard',
    icon: 'dashboard'
  },
  {
    id: 'LESSONS',
    path: '/lessons'
  }
];

export default indexRoutes;
