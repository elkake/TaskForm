import React from 'react';
import Task from '../components/Task';
import '../styles/Body.css';
import { useContext } from 'react';
import { Container } from '../context/Context';
function Body() {
  const { datos } = useContext(Container);

  return (
    <div className="taskBody">
      {datos.map(data => (
        <Task key={data.id} datos={data} />
      ))}
    </div>
  );
}

export default Body;
