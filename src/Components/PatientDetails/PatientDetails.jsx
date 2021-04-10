import axios from "axios";
import { useEffect, useState} from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from './PatientDetails.module.scss';
import sprite from '../../Sprite/symbol-defs.svg';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux";



export default function PatientDetails() {      
    const [patient, setPatient] = useState(null);
    const [status, setStatus] = useState('pending');   
    const [editedPatient, setEditedPatient] = useState(null)
    const [name, setName] = useState('');
     const [createDate, setCreateDate] = useState('');
    const [recheckDate, setRecheckDate] = useState('');
  const [gender, setGender] = useState('');
  const [birthday, setBirthday] = useState('');
  const [disease, setDisease] = useState('');  
  const [group, setGroup] = useState('');
  const [diagnos, setDiagnos] = useState('');  
    const [inventory, setInventory] = useState([]);
    const [inventoryName, setInventoryName] = useState('');
    const [inventoryStartDate, setInventoryStartDate] = useState('');
    const [inventoryCheckDate, setInventoryCheckDate] = useState('');
    const [inventoryCount, setInventoryCount] = useState('');



  const match = useRouteMatch("/patient/:id");   
  const patientId = match.params.id;
  const dispatch = useDispatch();

    useEffect(() => {
        axios.defaults.baseURL = 'https://us-central1-rehabilitation-project.cloudfunctions.net';
     axios.get(`/patients/${patientId}`).then(({data}) => {
        setPatient(data);  
        setStatus('loaded');   
        setInventory([...data.inventory]);   
        setName(data.name);
        setCreateDate(data.createDate);
        setRecheckDate(data.recheckDate);
        setGender(data.gender);
        setBirthday(data.birthday);
        setDisease(data.disease);
        setGroup(data.group);
        setDiagnos(data.diagnos);
     })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {   
        if (editedPatient) {
          dispatch();
          const notify = () =>
          toast.success(
            '🦄 Паціент успішно оновлений ',
            {
              position: 'top-right',
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            },
          );
        notify();
        setTimeout(() => {
          document.getElementById('redirectFromAdd').click();
        }, 2000)
        }            
    }, [patient, dispatch])

    const submitHandler = evt => {
        evt.preventDefault();
        const newPatient = {
            name,
            createDate,
            recheckDate,
            gender,
            birthday,
            disease,
            group,
            diagnos,
            inventory,
          };
          setEditedPatient(newPatient); 
    }

    const inputHandler = evt => {
        switch (evt.target.name) {
            case 'name':
              setName(evt.target.value);
              break;
            case 'createDate':
              setCreateDate(evt.target.value);
              break;
              case 'recheckDate':
              setRecheckDate(evt.target.value);
              break;
            case 'gender':
              setGender(evt.target.value);
              break;
            case 'birthday':
              setBirthday(evt.target.value);
              break;
            case 'group':
              setGroup(evt.target.value);
              break;
            case 'diagnos':
              setDiagnos(evt.target.value);
              break;
            case 'disease':
              setDisease(evt.target.value);
              break;
      
            default:
              return;
          }
    }

    const inventoryHandler = evt => {
        switch (evt.target.name) {
            case 'inventoryName':
              setInventoryName(evt.target.value);
              break;
              case 'inventoryStartDate':
              setInventoryStartDate(evt.target.value);
              break;
            case 'inventoryCheckDate':
              setInventoryCheckDate(evt.target.value);
              break;
            case 'inventoryCount':
              setInventoryCount(evt.target.value);
              break;
      
            default:
              return;
          }
    }
    const submitInventoryHandler = evt => {
        evt.preventDefault();
    const newInventory = [
      ...inventory,
      {
        id: uuidv4(),
        name: inventoryName,
        startDate: inventoryStartDate,
        checkDate: inventoryCheckDate,
        count: inventoryCount,
      },
    ];
    setInventory(newInventory);
    }
    const filterInventory = itemId => {
        setInventory(inventory.filter(({ id }) => id !== itemId));
      };

    if (status === 'pending') {
        return (<section className={styles.patientDetails}>
            <div className={styles.patientDetailsSpinnerContainer}>
            <div className={styles.loader}></div>
            </div>            
            </section>) 
    }
    if (status === 'loaded') {
        return (
            <CSSTransition in={true}
    appear={true}
    timeout={500}
    classNames={styles}
    unmountOnExit>
    <section className={styles.patientDetails}>
      <ToastContainer />
      <h2 className={styles.patientDetailsTitle}>
        Форма оновлення даних пацієнта
      </h2>
      <div className={styles.formContainer}>
        <form        
          className={styles.patientDetailsForm}
          onSubmit={submitHandler}
        >
            <fieldset className={styles.fieldset} id='fieldset' disabled>
          <label className={styles.patientDetailsLabel}>
            <span>Ім'я</span>
            <input            
              className={styles.patientDetailsInput}
              type="text"
              name="name"
              value={name}
              onChange={inputHandler}
              required
            />
          </label>
          <label className={styles.patientDetailsLabel}>
              
            <span>Переогляд ІПР</span>
            <input            
              className={styles.dateInput}
              type="date"
              name="recheckDate"
              value={recheckDate}
              onChange={inputHandler}
              required
            />
          </label>
          <label className={styles.patientDetailsLabel}>
            <span>Дата заповнення</span>
            <input           
              className={styles.dateInput}
              type="date"
              name="createDate"
              value={createDate}
              onChange={inputHandler}
              required
            />
          </label>
          <label className={styles.patientDetailsLabel}>
            <span>Стать</span>
            <input           
              className={styles.patientDetailsInput}
              type="text"
              name="gender"
              value={gender}
              onChange={inputHandler}
              required
            />
          </label>
          <label className={styles.patientDetailsLabel}>
            <span>Дата народження</span>
            <input               
              className={styles.dateInput}
              type="date"
              name="birthday"
              value={birthday}
              onChange={inputHandler}
              required
            />
          </label>
          <label className={styles.patientDetailsLabel}>
            <span>Група</span>
            <input
              className={styles.patientDetailsInput}
              type="text"
              name="group"
              value={group}
              onChange={inputHandler}
              required
            />
          </label>
          <label className={styles.patientDetailsLabel}>
            <span>Діагноз</span>
            <input
              className={styles.patientDetailsInput}
              type="text"
              name="diagnos"
              value={diagnos}
              onChange={inputHandler}
              required
            />
          </label>
          <label className={styles.patientDetailsLabel}>
            <span>Супутні захворювання</span>
            <input
              className={styles.patientDetailsInput}
              type="text"
              name="disease"
              value={disease}
              onChange={inputHandler}
              required
            />
          </label>
          <button type='submit' className={styles.patientDetailsButton}>
            Оновити
          </button>
          </fieldset>
        </form>
        <form
          className={styles.inventoryForm}
          onSubmit={submitInventoryHandler}
        >
            <fieldset className={styles.fieldset} id='fieldset' disabled>
          <h2 className={styles.inventoryFormTitle}>
            Додати інвентар
          </h2>
          <label className={styles.patientDetailsLabel}>
            <span>Назва</span>
            <input
              className={styles.patientDetailsInput}
              type="text"
              name="inventoryName"
              value={inventoryName}
              onChange={inventoryHandler}
              required
            />
          </label>
          <label className={styles.patientDetailsLabel}>
            <span>Дата видачі</span>
            <input
              className={styles.dateInput}
              type="date"
              name="inventoryStartDate"
              value={inventoryStartDate}
              onChange={inventoryHandler}
              required
            />
          </label>
          <label className={styles.patientDetailsLabel}>
            <span>Дата заміни</span>
            <input
              className={styles.dateInput}
              type="date"
              name="inventoryCheckDate"
              value={inventoryCheckDate}
              onChange={inventoryHandler}
              required
            />
          </label>
          <label className={styles.patientDetailsLabel}>
            <span>Кількість</span>
            <input
              className={styles.patientDetailsInput}
              type="text"
              name="inventoryCount"
              value={inventoryCount}
              onChange={inventoryHandler}
              required
            />
          </label>
          <button className={styles.inventoryFormButton}>
            <svg className={styles.svg}>
              <use href={`${sprite}#icon-plus`}></use>
            </svg>
          </button>
          </fieldset>
        </form>
      </div>
      <TransitionGroup component='ul' className={styles.inventoryContainer}>
        {inventory.map(item => {
          const { id, name, startDate, checkDate, count } = item;
          return (
            <CSSTransition key={id} in={true}
    appear={true}
    timeout={500}    
    classNames={styles}    
    unmountOnExit>
            <li className={styles.inventoryContainerItem}>              
              <p>Назва: {name}</p>
              <p>Дата видачі: {startDate}</p>
              <p>Дата заміни: {checkDate}</p>
              <p>Кількість: {count}</p>
              <button
                className={styles.inventoryContainerButton}
                onClick={() => filterInventory(id)}
              >
                Видалити
              </button>
            </li>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
      <Link to='/' id='redirectFromAdd'></Link>
    </section>
    </CSSTransition>
            ) 
    }          
}