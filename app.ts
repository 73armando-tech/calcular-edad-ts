function calcularEdad(fechaNacimiento: string): number {
  const nacimiento: Date = new Date(fechaNacimiento);
  const hoy: Date = new Date();

  let edad: number = hoy.getFullYear() - nacimiento.getFullYear();

  const mesActual: number = hoy.getMonth();
  const mesNacimiento: number = nacimiento.getMonth();

  if (
    mesActual < mesNacimiento ||
    (mesActual === mesNacimiento && hoy.getDate() < nacimiento.getDate())
  ) {
    edad--;
  }

  return edad;
}

// Prueba
const fecha: string = "1998-06-15";
const edad: number = calcularEdad(fecha);

console.log(`La edad es: ${edad} años`);
