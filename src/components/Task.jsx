import React from 'react';
import '../styles/Task.css';
import { useContext } from 'react';
import { Container } from '../context/Context';

function Task({ datos }) {
  const { Menos } = useContext(Container);
  const cerrar = () => {
    const confirmar = confirm('estas seguro de eliminarlo?');
    confirmar ? Menos(datos.id) : null;
  };

  return (
    <div className="card">
      <h2 className="card-info">{datos.task}</h2>
      <p className="card-info">{datos.desc}</p>
      <div className="close" onClick={cerrar}>
        X
      </div>
    </div>
  );
}

export default Task;
