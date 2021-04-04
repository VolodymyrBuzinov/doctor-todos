import styles from './Status.module.scss';


export default function Status({title, color}) {
  return (<>
  <div className={styles[color]}>{title}</div>
  </>)
}