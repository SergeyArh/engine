import { useSelector } from "react-redux";
import { CharRow } from "./CharRow";
import { RootStateChar } from './types';

const selectCharacter = (state: RootStateChar) => state.character

export function Char() {

  const characters = useSelector(selectCharacter);
  console.log('Char', characters);
  let isDisabled = false;
  characters.characteristics?.forEach(obj => {
    const isValidEngine = +obj.engineAmperage >0 && Number.isInteger(+obj.engineAmperage);
    const isValidForce = +obj.force > 0 && String(obj.force).split('').includes('.');
    const isValidSpeed = +obj.speed >= 0 && Number.isInteger(+obj.speed);
    if (!isValidEngine || !isValidForce || !isValidSpeed) {
      isDisabled = true;
      return isDisabled
    }
  })

  function onClick() {
    const arrOfSpeed = characters.characteristics!.map(item => +item.speed).sort((a, b) => {
      return +a - +b
    })
    console.log(arrOfSpeed)
  }

  return (
    <div className="characters">
      <table className="table char">
        <caption className="table__title">Характеристики {characters.name}</caption>
        <thead>
          <tr>
            <td>Ток двигателя</td>
            <td>Сила тяги</td>
            <td>Скорость</td>
          </tr>
        </thead>
        <tbody>
        {
          characters.characteristics && characters.characteristics.map(item => (
            <CharRow speed={String(item.speed)} force={String(item.force)} engine={String(item.engineAmperage)}/>
          ))
        }
        </tbody>
      </table>
      <button className="char__button" disabled={isDisabled} onClick={() => onClick()}>Отправить данные</button>
    </div>
  )
}