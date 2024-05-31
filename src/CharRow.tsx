import { useDispatch } from "react-redux";
import classNames from "classnames";
import { CharRowProps } from './types';

export function CharRow({speed, force, engine}: CharRowProps) {

  const dispatch = useDispatch();

  function changeEngine(e: React.ChangeEvent<HTMLInputElement>): void {
    dispatch({
      type: "CHANGE_ENGINE",
      engine: e.target.value,
      prev: engine
    })
  }

  function changeForce(e: React.ChangeEvent<HTMLInputElement>): void {
    dispatch({
      type: "CHANGE_FORCE",
      force: e.target.value,
      prev: force
    })
  }


  function changeSpeed(e: React.ChangeEvent<HTMLInputElement>): void {
    dispatch({
      type: "CHANGE_SPEED",
      speed: e.target.value,
      prev: speed
    })
  }

  const isValidEngine = +engine >0 && Number.isInteger(+engine);
  const isValidForce = +force > 0 && String(force).split('').includes('.');
  const isValidSpeed = +speed >= 0 && Number.isInteger(+speed);

  return (
    <tr>
      <td className="table__tbody__td">
        <input 
          type="text" 
          className={classNames('table__input', !isValidEngine && 'notvalid')}
          value={engine}
          onChange={e => changeEngine(e)}
        >
        </input>     
      </td>
      <td className="table__tbody__td center">
        <input 
          type="text" 
          className={classNames('table__input', !isValidForce && 'notvalid')} 
          value={force}
          onChange={e => changeForce(e)}
        >
        </input>    
      </td>
      <td className="table__tbody__td center">
        <input 
          type="text" 
          className={classNames('table__input', !isValidSpeed && 'notvalid')}
          value={speed}
          onChange={e => changeSpeed(e)}
        >
        </input>    
      </td>
    </tr>
  )
}