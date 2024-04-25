import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const data = [
  {
    name: 'The Great Gatsby',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'To kill a mocking bird',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '1984',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'The Alchemist',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Pride and prejudicet',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  }
 
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PageToRead = () => {

  return (
    <BarChart
      width={1200}
      height={750}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
  );
}

export default PageToRead;
