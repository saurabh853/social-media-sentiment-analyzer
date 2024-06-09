import React from 'react';
import Chart from './Chart';
import Filters from './Filters';

const Dashboard = () => {
  return (
    <div>
      <h1>Social Media Sentiment Analyzer</h1>
      <Filters />
      <Chart />
    </div>
  );
};

export default Dashboard;