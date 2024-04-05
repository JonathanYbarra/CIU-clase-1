import React, { Component, useEffect, useState } from "react";

interface User {
  nombre: string;
  apellido: string;
  edad: number;
  email?: any;
}

// Ejemplo 1
export const App = () => {
  // El return, es el JSX que queremos que se muestre en el navegador
  const [user, setUser] = useState<User>();

  useEffect(() => {
    setUser({
      nombre: "Pepe",
      apellido: "Pepe",
      edad: 20,
    });
  }, []);

  console.log(user);

  return (
    <div>
      <h1>Hola, bienvenido a mi primer componente de React!</h1>
      <p>Este es un simple componente de React.</p>
    </div>
  );
};

// Ejemplo 2
// Importamos React y la funcionalidad de Component

// Creamos una clase llamada 'MiComponente' que se extiende del Componente de React
class MiComponente extends Component {
  render() {
    // El método render retorna el JSX que queremos que se muestre en el navegador
    return (
      <div>
        <h1>Hola, bienvenido a mi primer componente de React!</h1>
        <p>Este es un simple componente de React.</p>
      </div>
    );
  }
}

// Exportamos 'MiComponente' para que pueda ser usado en otros archivos
export default MiComponente;
