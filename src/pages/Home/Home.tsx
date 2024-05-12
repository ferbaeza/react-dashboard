import ChartBox from '../../components/ChartBox/LineChart/LineChartBox';
import TablasBox from '../../components/TablasBox/TablasBox';
import UserBox from '../../components/UsersBox/UserBox';
import './home.scss'

import { userCharData } from '../../components/ChartBox/LineChart/data/users.charData';
import { tablasCharData } from '../../components/ChartBox/LineChart/data/tablas.charData';
import { logsCharData } from '../../components/ChartBox/LineChart/data/logs.charData';
import { fallosCharData } from '../../components/ChartBox/LineChart/data/fallos.charData';
import BarChartBox from '../../components/ChartBox/BarChart/BarChartBox';
import { barchartboxData } from '../../components/ChartBox/BarChart/data/barchartboxData';
import AreaChartBox from '../../components/ChartBox/AreaChart/AreaChartBox';

function Home() {
  return (
    <div className="home">
      <div className="box boxes">
        <div className="box box1">
          <UserBox />
        </div>
        <div className="box box2">
          <ChartBox {...userCharData} />
        </div>
        <div className="box box3">
          <ChartBox {...tablasCharData} />
        </div>
        <div className="box box4">
          <TablasBox />
        </div>
        <div className="box box5">
          <ChartBox {...fallosCharData} />
        </div>
        <div className="box box6">
          <ChartBox {...logsCharData} />
        </div>
        <div className="box box7">
          <BarChartBox {...barchartboxData} />
        </div>
        <div className="box box8">
          <AreaChartBox {...barchartboxData} />
        </div>
        <div className="box box9">
          <AreaChartBox {...barchartboxData} />
        </div>
      </div>
    </div>
  );
}

export default Home;
