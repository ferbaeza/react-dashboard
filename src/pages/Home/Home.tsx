import ChartBox from '../../components/ChartBox/ChartBox';
import TablasBox from '../../components/TablasBox/TablasBox';
import UserBox from '../../components/UsersBox/UserBox';
import './home.scss'

import { userCharData } from './data/users.charData';

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
          <ChartBox {...userCharData} />
        </div>
        <div className="box box4">
          <TablasBox />
        </div>
        <div className="box box5">
          <ChartBox {...userCharData} />
        </div>
        <div className="box box6">
          <ChartBox {...userCharData} />
        </div>
        <div className="box box7">box-7</div>
        <div className="box box8">box-8</div>
        <div className="box box9">box-9</div>
      </div>
    </div>
  );
}

export default Home;
