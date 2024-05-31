import { useSelector, useDispatch } from "react-redux"
import { Train } from './types';
import { RootStateRow } from './types';


const selectTrains = (state: RootStateRow) => state.trains

export function Row({id, name, description}: Train) {

  const trains = useSelector(selectTrains);
  const dispatch = useDispatch();

  function openCharacter(id: number) {
    const res = trains.find(train => train.id === id);
    dispatch({
      type: "CURRENT_TRAIN",
      train: res
    })
  }

  return (
    <tr onClick={() => openCharacter(id!)} id={String(id)}>
      <td className="table__tbody__td">{name}</td>
      <td className="table__tbody__td">{description}</td>
    </tr>
  )
}