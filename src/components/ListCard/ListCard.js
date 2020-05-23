import React from 'react';

import styles from './ListCard.module.css';

import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';
const ListCard = (props) => {
  // const [isChecked, setCheckedItems] = React.useState(new Map());

  // const handleChange = (e) => {
  //   const item = e.target.name;
  //   const isChecked = e.target.checked;
  //   setCheckedItems(checkedItems.set(item, isChecked));
  // };

  let statusStyle;
  switch (props.status) {
    case 'Paid':
      statusStyle = styles.Green;
      break;
    case 'Refund':
      statusStyle = styles.Yellow;
      break;
    case 'Failed':
      statusStyle = styles.Red;
      break;
    default:
      statusStyle = styles.Default;
      break;
  }
  return (
    <div className={styles.ListCard}>
      <div>
        <CustomCheckbox />
      </div>
      <div>
        <h4>{props.service}</h4>
      </div>
      <div>
        <h4>{props.details}</h4>
      </div>
      <div>
        <h4>{props.type}</h4>
      </div>
      <div>
        <h4>{props.date}</h4>
      </div>
      <div>
        <h4>${props.amount}</h4>
      </div>
      <div className={styles.status}>
        <p className={statusStyle}>{props.status}</p>
      </div>
    </div>
  );
};

export default ListCard;
