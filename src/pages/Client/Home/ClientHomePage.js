import React from 'react';
import moment from 'moment';

import styles from './ClientHome.module.css';

import heroImage from '../../../assets/herooo.png';
import ListTile from '../../../components/ListTile/ListTile';
import Table from '../../../components/Table/Table';
import UploadOpener from '../../../components/UploadOpener/UploadOpener';
import { CLIENT_BOOKINGS, projectTableHeadings } from '../../../mock';
import 'react-calendar/dist/Calendar.css';

import Calender from 'react-calendar';
import FileUploader from '../../../utils/Dropzone/Dropzone';

const ClientHomePage = () => {
  const activeProjects = CLIENT_BOOKINGS.filter(
    (booking) => booking.status === 'Active'
  );

  const [date, setDate] = React.useState(new Date());

  const onchangeHandler = (selectedDate) => setDate(selectedDate);

  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <div className={styles.Welcome}>
          <h1>Welcome Back,</h1>
          {/* <div className={styles.DateContainer}>Wednesday, 4th May, 2020.</div> */}
        </div>
        <div className={styles.Promotions}>
          <div className={styles.IntroText}>
            <h1>Stay Home. Let's work for you.</h1>
            <h3>Get 10% Off every service you book.</h3>
            <p>
              Due to the corona-virus pandemic. We are offering our clients
              promotions and remote appointment.
            </p>
            <button>Learn More</button>
          </div>
          <div className={styles.PromotionsImage}>
            <img src={heroImage} alt='Image Covid' />
          </div>
        </div>
        <div className={styles.ActiveWorks}>
          <div className={styles.Heading}>
            <h4>Active Projects ({activeProjects.length})</h4>
            <UploadOpener />
          </div>
          <Table headings={projectTableHeadings}>
            {activeProjects.map((project) => {
              return (
                <ListTile
                  key={project.id}
                  date={project.dateAdded}
                  audio={project.audio}
                  image={project.image}
                  status={project.status}
                  title={project.title}
                />
              );
            })}
          </Table>
        </div>
      </div>

      <div className={styles.Aside}>
        <div className={styles.DisplayDate}>
          <h3>{moment(date).format('dddd, MMMM Do YYYY')}.</h3>
        </div>
        <div className={styles.Calender}>
          <Calender
            onChange={onchangeHandler}
            value={date}
            className={styles.CalenderStyles}
          />
        </div>
      </div>
    </div>
  );
};

export default ClientHomePage;
