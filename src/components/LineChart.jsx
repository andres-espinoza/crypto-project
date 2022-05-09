import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title as TitleChart,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TitleChart,
  Tooltip,
  Legend
);

const { Title } = Typography 

const LineChart = ({coinHistory, currentPrice, coinName}) => {

  const coinPrice = []
  const coinTimestamp =[]

  for(let historyData of coinHistory?.data?.history) {
    coinTimestamp.push(new Date(historyData.timestamp).toLocaleDateString())
    coinPrice.push(historyData.price)
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price in USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd'
      }
    ] 
  }


  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };




  return (
    <>
    <Row className="chart-header">
      <Title level={2} className="chart-title">
        {coinName} Price Chart
      </Title>
      <Col className="price-container">
        <Title level={5} className="price-change">
          {coinHistory?.data?.change}%
        </Title>
        <Title level={5} className="current-price">
          Current Price: ${currentPrice} 
        </Title>
      </Col>
    </Row>

    <Line data={data} options={options}/>  
    </>
  )
}

export default LineChart