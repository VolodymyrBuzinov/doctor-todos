import styles from './Controllers.module.scss';
import sprite from '../../Sprite/symbol-defs.svg'

export default function Contollers({ id, color }) {
  return (<>
  <button className={styles[color]}><svg>
           <use href={`${sprite}${id}`}>          
          </use>
          </svg></button>
  </>)
}