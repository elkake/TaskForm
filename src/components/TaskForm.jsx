import React from 'react';
import '../styles/TaskForm.css';
import { useContext } from 'react';
import { Container } from '../context/Context';
function TaskForm() {
  const { Mas } = useContext(Container);
  const sub = e => {
    e.preventDefault();
    Mas({
      task: e.target.children[0].children[0].value,
      desc: e.target.children[0].children[1].value,}
    );
  };

  return (
    <form className="form" onSubmit={sub}>
      <div>
        <input
          className="entrada tarea"
          type="text"
          placeholder="Nueva tarea"
        />
        <textarea
          className="entrada descripcion"
          placeholder="Escribe algo aqui sobre tu tarea"
        ></textarea>
      </div>

      <button className="enviar">
        {'>'}
        <br />
        {'>'}
        <br />
        {'>'}
      </button>
    </form>
  );
}

export default TaskForm;
