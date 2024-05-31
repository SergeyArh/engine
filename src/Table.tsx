import { useSelector } from "react-redux";
import { Row } from "./Row";
import { RootStateRow } from './types';

const selectTrains = (state: RootStateRow) => state.trains;

export function Table() {

  const trains = useSelector(selectTrains);
  console.log('Table', trains);

  return (
    <table className="table">
      <caption className="table__title">Поезда</caption>
      <thead>
        <tr className="table__thead_tr">
          <td className="table__thead__td">Название</td>
          <td className="table__thead__td">Описание</td>
        </tr>
      </thead>
      <tbody>
        {
          trains.map(train => (
            <Row id={train.id} name={train.name} description={train.description}/>
          ))
        }
      </tbody>
    </table>
  )
}