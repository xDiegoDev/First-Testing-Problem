class Banco {
  constructor(codigo, nombre) {
    this.codigo = codigo;
    this.nombre = nombre;
  }

  codigoValido() {
    let suma = 0;
    for (let i = 0; i < 6; i++) {
      suma += parseInt(this.codigo[i]);
    }

    const digitoControl = parseInt(this.codigo[6]);
    if (suma < 10) {
      return suma === digitoControl;
    }
    if (suma >= 10) {
      return suma % 10 === digitoControl;
    }
  }
}

class CuentaBancaria {
  constructor(numero, propietario, totalEfectivo) {
    this.numero = numero;
    this.propietario = propietario;
    this.totalEfectivo = totalEfectivo;
  }

  numeroValido() {
    let letras = 0;
    let sumaDigitos = 0;

    for (let i = 0; i < this.numero.length - 1; i++) {
      const char = this.numero[i];

      if (isNaN(char)) {
        letras++;
      } else {
        sumaDigitos += parseInt(char);
      }
    }

    if (letras !== 5) {
      return false;
    }

    const digitoControl = parseInt(this.numero[this.numero.length - 1]);
    if (sumaDigitos < 10) {
      return sumaDigitos === digitoControl;
    } else {
      return sumaDigitos % 10 === digitoControl;
    }
  }

  totalEfectivoValido() {
    return Number.isInteger(this.totalEfectivo);
  }

  propietarioValido() {
    return this.propietario.esMayorDeEdad();
  }
}

class Persona {
  constructor(nombre, apellido, fechaNacimiento) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = new Date(fechaNacimiento);
  }

  esMayorDeEdad() {
    const hoy = new Date();
    const edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
    const diferenciaMeses = hoy.getMonth() - this.fechaNacimiento.getMonth();
    const diferenciaDias = hoy.getDate() - this.fechaNacimiento.getDate();

    if (diferenciaMeses < 0 || (diferenciaMeses === 0 && diferenciaDias < 0)) {
      return edad - 1 >= 18;
    } else {
      return edad >= 18;
    }
  }
}

module.exports = { Banco, CuentaBancaria, Persona };
