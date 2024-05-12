import { Link } from 'react-router-dom';
import './chartbox.scss';
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
} from "recharts";


type LineChartBoxProps = {
  color: string;
  icon: string;
  title: string;
  total: number;
  porcentaje: number;
  charData: object[];
};

function LineChartBox(props: LineChartBoxProps) {
  return (
    <div className="ChartBox">
      <div className="boxInfo">
        <div className="chart-title">
          <img src={props.icon} alt="" className="icon" />
          <span>
            Total
            <span style={{ color: props.color }}>
              {" "}
              {props.title.charAt(0).toUpperCase() + props.title.slice(1)}{" "}
            </span>
          </span>
        </div>
        <div className="chartboxTotal">
          <h2>Total: {props.total}</h2>
          <Link to="/usuarios" className="link">
            View Details
          </Link>
        </div>
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
                position={{ x: -10, y: 100 }}
              />
              <Line
                type="monotone"
                dataKey="number"
                stroke={props.color}
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
            {props.porcentaje} %
          </span>
          <span className="duracion">30 dias</span>
        </div>
      </div>
    </div>
  );
}

export default LineChartBox;
