import React from 'react';
import ListTile from '../../../components/ListTile/ListTile';
import { CLIENT_BOOKINGS, projectTableHeadings } from '../../../mock';
import Table from '../../../components/Table/Table';
import { ReactComponent as AddIcon } from '../../../assets/add.svg';

import styles from '../../Client/Home/ClientHome.module.css';
import bookStyles from './Bookings.module.css';
import UploadOpener from '../../../components/UploadOpener/UploadOpener';
const Bookings = () => {
  const activeProjects = CLIENT_BOOKINGS.filter(
    (booking) => booking.status === 'Active'
  );

  const completedProjects = CLIENT_BOOKINGS.filter((booking) => {
    return booking.status === 'Completed';
  });

  const waitingProjects = CLIENT_BOOKINGS.filter((booking) => {
    return booking.status === 'Waiting for Verification';
  });

  return (
    <div className={bookStyles.Bookings}>
      <div className={styles.Heading}>
        <h2>Projects you have booked for so far.</h2>
        <UploadOpener />
      </div>

      <Booking projects={completedProjects} type='Completed' />
      <Booking projects={waitingProjects} type='Waiting to be Verified' />
      <Booking projects={activeProjects} type='In Progress' />
    </div>
  );
};

const Booking = (props) => {
  const { projects, type } = props;

  return (
    <div className={styles.ActiveWorks}>
      <div className={styles.Heading}>
        <h4>
          {type} ({projects.length})
        </h4>
      </div>
      <Table headings={projectTableHeadings}>
        {projects.map((project) => {
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
  );
};

export default Bookings;
