import React from 'react';

import { MainTemplate, Header } from '../../../components';

import Typography from '@material-ui/core/Typography';

const DashboardPage = () => {
  return (
    <MainTemplate header={<Header />}>
      <Typography variant="h1">Dashboard Page....</Typography>
    </MainTemplate>
  );
};

export default DashboardPage;
