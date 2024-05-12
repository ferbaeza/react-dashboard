import './chartbox.scss';
import {
  ResponsiveContainer,
  Tooltip,
  XAxis,
  CartesianGrid,
  YAxis,
  Area,
  AreaChart,
} from "recharts";


type AreaChartBoxProps = {
  colorUv: string;
  colorPv: string;
  colorAmt: string;
  title: string;
  charData: object[];
};

function AreaChartBox(props: AreaChartBoxProps) {
  return (
    <div className="ChartBox">
      <ResponsiveContainer width="99%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={props.charData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AreaChartBox;
