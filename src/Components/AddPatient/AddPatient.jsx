import { useEffect, useState } from 'react';
import styles from './AddPatient.module.scss';
import sprite from '../../Sprite/symbol-defs.svg';
import { v4 as uuidv4 } from 'uuid';
import createPatient from '../../redux/AddPatient/AddPatientOperations';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function AddPatient() {
  const [patient, setPatient] = useState(null);
  const [name, setName] = useState('');
  const [createDate, setCreateDate] = useState('');
  const [recheckDate, setRecheckDate] = useState('');
  const [gender, setGender] = useState('');
  const [birthday, setBirthday] = useState('');
  const [disease, setDisease] = useState('');
  const [inventory, setInventory] = useState([]);
  const [group, setGroup] = useState('');
  const [diagnos, setDiagnos] = useState('');
  const [inventoryName, setInventoryName] = useState('');
  const [inventoryStartDate, setInventoryStartDate] = useState('');
  const [inventoryCheckDate, setInventoryCheckDate] = useState('');
  const [inventoryCount, setInventoryCount] = useState('');
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
    setPatient(newPatient);    
  };
  const dispatch = useDispatch();
  useEffect(() => {   
      if (patient) {
        dispatch(createPatient(patient));
        const notify = () =>
        toast.success(
          '🦄 Паціент успішно доданий ',
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
  };
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
  };
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
  };
  const filterInventory = itemId => {
    setInventory(inventory.filter(({ id }) => id !== itemId));
  };
  return (
    <CSSTransition in={true}
    appear={true}
    timeout={500}
    classNames={styles}
    unmountOnExit>
    <section className={styles.addPatient}>
      <ToastContainer />
      <h2 className={styles.addPatientTitle}>
        Форма заповнення даних пацієнта
      </h2>
      <div className={styles.formContainer}>
        <form
          className={styles.addPatientForm}
          onSubmit={submitHandler}
        >
          <label className={styles.addPatientLabel}>
            <span>Ім'я</span>
            <input
              className={styles.addPatientInput}
              type="text"
              name="name"
              value={name}
              onChange={inputHandler}
              required
            />
          </label>
          <label className={styles.addPatientLabel}>
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
          <label className={styles.addPatientLabel}>
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
          <label className={styles.addPatientLabel}>
            <span>Стать</span>
            <input
              className={styles.addPatientInput}
              type="text"
              name="gender"
              value={gender}
              onChange={inputHandler}
              required
            />
          </label>
          <label className={styles.addPatientLabel}>
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
          <label className={styles.addPatientLabel}>
            <span>Група</span>
            <input
              className={styles.addPatientInput}
              type="text"
              name="group"
              value={group}
              onChange={inputHandler}
              required
            />
          </label>
          <label className={styles.addPatientLabel}>
            <span>Діагноз</span>
            <input
              className={styles.addPatientInput}
              type="text"
              name="diagnos"
              value={diagnos}
              onChange={inputHandler}
              required
            />
          </label>
          <label className={styles.addPatientLabel}>
            <span>Супутні захворювання</span>
            <input
              className={styles.addPatientInput}
              type="text"
              name="disease"
              value={disease}
              onChange={inputHandler}
              required
            />
          </label>
          <button type='submit' className={styles.addPatientButton}>
            Додати в базу
          </button>
        </form>
        <form
          className={styles.inventoryForm}
          onSubmit={submitInventoryHandler}
        >
          <h2 className={styles.inventoryFormTitle}>
            Додати інвентар
          </h2>
          <label className={styles.addPatientLabel}>
            <span>Назва</span>
            <input
              className={styles.addPatientInput}
              type="text"
              name="inventoryName"
              value={inventoryName}
              onChange={inventoryHandler}
              required
            />
          </label>
          <label className={styles.addPatientLabel}>
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
          <label className={styles.addPatientLabel}>
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
          <label className={styles.addPatientLabel}>
            <span>Кількість</span>
            <input
              className={styles.addPatientInput}
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
        </form>
      </div>
      <TransitionGroup component='ul' className={styles.inventoryContainer}>
        {inventory.map(item => {
          const { id, name, startDate, date, count } = item;
          return (
            <CSSTransition key={id} in={true}
    appear={true}
    timeout={500}    
    classNames={styles}    
    unmountOnExit>
            <li className={styles.inventoryContainerItem}>              
              <p>Назва: {name}</p>
              <p>Дата видачі: {startDate}</p>
              <p>Дата: {date}</p>
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
  );
}
