import React from 'react';
import { PaymentsTable } from '../../../components/Table/Table';
import { paymentTableHeadings, CLIENT_PAYMENTS } from '../../../mock';
import styles from './Payments.module.css';
import ListCard from '../../../components/ListCard/ListCard';

import { useReactToPrint } from 'react-to-print';
import Invoice from '../../../components/Invoice/Invoice';

const Payments = () => {
  const componentRef = React.useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: { ...styles.PaymentsTable },
  });

  const sum = CLIENT_PAYMENTS.map((item) => item.amount);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const totalAmount = sum.reduce(reducer);

  return (
    <div className={styles.Payments}>
      <div className={styles.Heading}>
        <div className={styles.Header}>
          <h1>Your Payment History</h1>
          <button onClick={handlePrint} className={styles.printButton}>
            Print Invoice
          </button>
        </div>
        <PaymentContent total={totalAmount} />
        <div style={{ display: 'none' }}>
          <ComponentToPrint ref={componentRef} />
        </div>
      </div>
    </div>
  );
};

const PaymentContent = (props) => {
  return (
    <div className={styles.PaymentsTable}>
      <h3>Total ({CLIENT_PAYMENTS.length})</h3>
      <PaymentsTable headings={paymentTableHeadings}>
        {CLIENT_PAYMENTS.map((payment) => {
          return (
            <ListCard
              key={payment.id}
              service={payment.service}
              type={payment.type}
              details={payment.details}
              amount={payment.amount}
              date={payment.dateAdded}
              status={payment.status}
            />
          );
        })}
        <div className={styles.Summary}>
          <h4>Total Amount</h4>
          <h3>${props.total}</h3>
        </div>
      </PaymentsTable>
    </div>
  );
};

class ComponentToPrint extends React.Component {
  render() {
    return <Invoice />;
  }
}
export default Payments;
