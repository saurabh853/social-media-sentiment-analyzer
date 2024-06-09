import React, { useState, useEffect } from 'react';
import { fetchTweets } from '../services/api';
import { Line } from 'react-chartjs-2';

const Chart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchTweets('javascript').then((response) => {
      setData(response.data);
    });
  }, []);

  const chartData = {
    labels: data.map(tweet => new Date(tweet.created_at).toLocaleTimeString()),
    datasets: [
      {
        label: 'Sentiment',
        data: data.map(tweet => tweet.sentiment),
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  return (
    <div>
      <h2>Sentiment Analysis</h2>
      <Line data={chartData} />
    </div>
  );
};

export default Chart;