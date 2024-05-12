import { Link } from 'react-router-dom';
import './chartbox.scss';
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
} from "recharts";


type ChartBoxProps = {
  color: string;
  icon: string;
  title: string;
  totalUsers: number | string;
  porcentaje: number;
  charData: object[];
};

function ChartBox(props: ChartBoxProps) {
  return (
    <div className="ChartBox">
      <div className="boxInfo">
        <div className="chart-title">
          <img src="icons/user.svg" alt="" className="icons" />
          <span>Total Users</span>
        </div>
        <span className="chart-title-span">{props.title}</span>
        <h2>Total: {props.totalUsers}</h2>
        <Link to="/usuarios" className="link">
          View Details
        </Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart width={300} height={100} data={props.charData}>
              <Tooltip
                contentStyle={{
                  backgroundColor: "transparent",
                  border: "none",
                }}
                labelStyle={{
                  display: "none",
                }}
                position={{ x: 0, y: 0 }}
              />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="chartTextos">
          <span
            className="porcentaje"
            style={{ color: props.porcentaje > 50 ? "limegreen" : "tomato" }}
          >
            {props.percentaje}
          </span>
          <span className="duracion">30 dias</span>
        </div>
      </div>
    </div>
  );
}

export default ChartBox;
