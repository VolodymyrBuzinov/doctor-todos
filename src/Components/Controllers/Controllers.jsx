import sprite from '../../Sprite/symbol-defs.svg';
import styles from './Controllers.module.scss';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Link } from 'react-router-dom';



export default function Controllers({id}) {    
    const clickHandler = evt => {    
        const fieldset = document.getElementById('fieldset'); 
        const inventory = document.getElementById('inventory');  

        switch(evt.target.dataset.controllers) {            
                case 'edit':
                    fieldset.disabled = false;
                    inventory.disabled = false;
                break;
                case 'delete':
                    Swal.fire({
                        title: 'Ви точно хочете видалити пацієнта?',
                        showDenyButton: true,                        
                        confirmButtonText: `Так`,
                        denyButtonText: `Відмінити`,                        
                      }).then((result) => {
                        /* Read more about isConfirmed, isDenied below */
                        if (result.isConfirmed) {                          
                          axios.delete(`https://us-central1-rehabilitation-project.cloudfunctions.net/patients/${id}`).then(res => {
                              
                              Swal.fire('Успіх! Пацієнта видалено успішно!', '', 'success');
                              setTimeout(() => {
                               document.getElementById('deleteRedirect').click();
                              }, 2000)
                          }).catch(err => {
                            Swal.fire(`${err.message}`, '', 'error')
                          })
                        } else if (result.isDenied) {
                          Swal.fire('Видалення відмінено!', '', 'info')
                        }
                      })
                break;
                default: 
                return;
        }
    }
    return(<><ul className={styles.controllersList}>        
        <li className={styles.controllersItem} data-controllers='edit' onClick={clickHandler}>
        <svg className={styles.controllersSvg}>
            <use href={`${sprite}#icon-edit`}></use>
          </svg>
        </li>
        <li className={styles.controllersItem} data-controllers='delete' onClick={clickHandler}>
        <svg className={styles.controllersSvg}>
            <use href={`${sprite}#icon-delete`}></use>
          </svg>
        </li>
      </ul>
      <Link id='deleteRedirect' to='/' />
      </>)
}