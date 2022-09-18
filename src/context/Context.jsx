import { useState, useEffect, createContext } from 'react';

export const Container = createContext();

export function Context(props) {
  const [datos, setDatos] = useState([]);

  const Mas = nuevo => {
    return setDatos([
      ...datos,
      { task: nuevo.task, desc: nuevo.desc, id: datos.length },
    ]);
  };

  const Menos = id => {
    setDatos(datos.filter(data => data.id != id));
  };
  useEffect(() => setDatos([]), []);

  return (
    <Container.Provider value={{ datos, Mas, Menos }}>
      {props.children}
    </Container.Provider>
  );
}
