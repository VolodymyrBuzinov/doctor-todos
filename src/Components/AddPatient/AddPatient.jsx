import { useEffect, useState } from 'react';
import styles from './AddPatient.module.scss';
import sprite from '../../Sprite/symbol-defs.svg';
import { v4 as uuidv4 } from 'uuid';
import createPatient from '../../redux/AddPatient/AddPatientOperations';
import { useDispatch } from 'react-redux';

export default function AddPatient() {
  const [patient, setPatient] = useState(null);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [gender, setGender] = useState('');
  const [birthday, setBirthday] = useState('');
  const [disease, setDisease] = useState('');
  const [inventory, setInventory] = useState([]);
  const [group, setGroup] = useState('');
  const [diagnos, setDiagnos] = useState('');
  const [inventoryName, setInventoryName] = useState('');
  const [inventoryStartDate, setInventoryStartDate] = useState('');
  const [inventoryDate, setInventoryDate] = useState('');
  const [inventoryCount, setInventoryCount] = useState('');
  const submitHandler = evt => {
    evt.preventDefault();
    const newPatient = {
      name,
      date,
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
      }              
  }, [patient, dispatch])
  const inputHandler = evt => {
    switch (evt.target.name) {
      case 'name':
        setName(evt.target.value);
        break;
      case 'date':
        setDate(evt.target.value);
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
        date: inventoryDate,
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
      case 'inventoryDate':
        setInventoryDate(evt.target.value);
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
    <section className={styles.addPatient}>
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
            <span>Дата заповнення</span>
            <input
              className={styles.dateInput}
              type="date"
              name="date"
              value={date}
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
              className={styles.addPatientInput}
              type="text"
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
              name="inventoryDate"
              value={inventoryDate}
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
      <ul className={styles.inventoryContainer}>
        {inventory.map(item => {
          const { id, name, startDate, date, count } = item;
          return (
            <li key={id} className={styles.inventoryContainerItem}>              
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
          );
        })}
      </ul>
    </section>
  );
}
