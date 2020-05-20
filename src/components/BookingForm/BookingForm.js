import React from 'react';

import styles from './BookingForm.module.css';
import { checkboxes } from '../../mock';
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';
import { useHistory } from 'react-router';

import DatePicker from 'react-date-picker';

import { useToasts } from 'react-toast-notifications';
import moment from 'moment';

const BookingForm = (props) => {
  const [checkedItems, setCheckedItems] = React.useState(new Map());
  const [selectedDate, setDate] = React.useState(null);
  const [disabled, setDisabled] = React.useState(true);

  const history = useHistory();

  const handleChange = (e) => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    setCheckedItems(checkedItems.set(item, isChecked));
  };

  const onSelectDate = (date) => {
    setDate(date);
    setDisabled(false);
  };

  const { addToast } = useToasts();

  let services = [];

  checkedItems.forEach((_, key) => {
    services = [...services, key];
  });

  const bookingsInfo = `
    You have successfully booked for service on ${moment(selectedDate).format(
      'dddd, MMMM Do YYYY'
    )}. Our Team will contact you!.
  `;

  const handleSubmit = () => {
    props.closeModal();
    addToast(bookingsInfo, {
      appearance: 'success',
    });

    history.push('/dashboard');
  };

  return (
    <div className={styles.Container}>
      <div className={styles.Heading}>
        <h2>Let's do the work for you.</h2>
        <p>Fill the information below</p>
      </div>
      <section className={styles.Personal}>
        <div className={styles.sectionHeader}>
          <h2>Personal Information</h2>
        </div>
        <div className={styles.sectionForm}>
          <form>
            <div className={styles.FormGroup}>
              <label>Full Name</label>
              <input type='text'></input>
            </div>
            <div className={styles.FormGroup}>
              <label>Telephone Number</label>
              <input type='text'></input>
            </div>
          </form>
        </div>
      </section>
      <section className={styles.Service}>
        <div className={styles.sectionHeader}>
          <h2>Service Information</h2>
        </div>
        <div className={styles.sectionForm}>
          <form>
            {checkboxes.map((item) => {
              return (
                <div key={item.key} className={styles.ServiceInput}>
                  <label className='container-checkbox'>
                    {item.label}
                    <CustomCheckbox
                      name={item.name}
                      checked={checkedItems.get(item.name)}
                      onChange={handleChange}
                    />
                  </label>
                </div>
              );
            })}
          </form>
        </div>
      </section>
      <section className={styles.Date}>
        <div className={styles.sectionHeader}>
          <h2>Scheduling Information</h2>
        </div>
        <div className={styles.sectionForm}>
          <DatePicker
            onChange={onSelectDate}
            value={selectedDate}
            clearIcon={null}
            dayPlaceholder='Day'
            monthPlaceholder='Month'
            yearPlaceholder='Year'
            className={styles.DateInput}
            required={true}
          />
        </div>
      </section>
      <div className={styles.Actions}>
        <button
          onClick={handleSubmit}
          className={styles.Button}
          disabled={disabled}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default BookingForm;
