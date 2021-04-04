import styles from './ButtonSubmit.module.scss';


export default function ButtonSubmit({ title, color }) {  
  return (<>
  <button className={styles[color]}>{ title }</button>
  </>)
}