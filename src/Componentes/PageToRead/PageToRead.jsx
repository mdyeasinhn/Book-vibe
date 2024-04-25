import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const data = [
  {
    name: 'The Great Gatsby',
    uv: 192,
    pv: 192,
    amt: 2400,
  },
  {
    name: 'To kill a mocking bird',
    uv: 281,
    pv: 281,
    amt: 2210,
  },
  {
    name: '1984',
    uv: 328,
    pv: 328,
    amt: 2290,
  },
  {
    name: 'The Alchemist',
    uv: 177,
    pv: 177,
    amt: 2000,
  },
  {
    name: 'Pride and prejudicet',
    uv: 279,
    pv: 279,
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
      height={700}
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
      <YAxis dataKey="uv" />
      <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
  );
}

export default PageToRead;
