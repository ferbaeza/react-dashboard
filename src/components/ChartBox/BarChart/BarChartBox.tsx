import './barchartbox.scss';
import {
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
  // Legend,
  Bar,
  Rectangle,
  BarChart,
} from "recharts";

type BarChartBoxProps = {
  colorUv: string;
  colorPv: string;
  colorAmt: string;
  title: string;
  charData: object[];
};

function BarChartBox(props: BarChartBoxProps) {
  return (
    <div className="ChartBox">
      <ResponsiveContainer width="99%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={props.charData}
          // margin={{
          //   top: 5,
          //   right: 30,
          //   left: 20,
          //   bottom: 5,
          // }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Bar
            dataKey="pv"
            fill={props.colorPv}
            activeBar={<Rectangle fill="white" stroke="blue" />}
          />
          <Bar
            dataKey="uv"
            fill={props.colorUv}
            activeBar={<Rectangle fill="red" stroke="purple" />}
          />
          <Bar
            dataKey="amt"
            fill={props.colorAmt}
            activeBar={<Rectangle fill="teal" stroke="purple" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChartBox;
