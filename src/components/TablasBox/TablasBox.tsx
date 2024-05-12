import './tablasbox.scss';
import {tablas} from './tablas.data';

function TablasBox() {
  console.log(tablas.length);
  console.log(tablas);
  return (
    <div className="TablasBox">
      <div className="total">
        <span className='total-span'>
          {/* Total tablas: {tablas.length}  */}
        </span>
      </div>
      <div className="tablas">
          {tablas.map((tabla) => (
            <div key={tabla.id} className="tabla-row">
              <div className="tab-name">
                <span className="span-name-table">{tabla.name}</span>
              </div>
              <div className="tab-info">
                <p>
                  <span className="tabla-datos">Numero de Colmnas : {tabla.columns}</span>
                </p>
                <p>
                  <span className="tabla-datos">Tamano de la tabla : {tabla.size.toString().substring(0,5)} bytes</span>
                </p>
              </div>
            </div>
          ))}
      </div>

    </div>
  );
}

export default TablasBox;
