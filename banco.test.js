const { Banco, CuentaBancaria, Persona } = require("./banco");

describe("Entidad bancaria", () => {
  // Test para verificar el código de banco con suma menor a 10
  test("Código de banco válido con suma menor a 10", () => {
    const codigoBanco = "1203017";
    const banco = new Banco(codigoBanco, "MiBanco");
    expect(banco.codigoValido()).toBe(true);
  });

  // Test para verificar el código de banco con suma igual a 10
  test("Código de banco válido con suma igual a 10", () => {
    const codigoBanco = "1204030";
    const banco = new Banco(codigoBanco, "MiBanco");
    expect(banco.codigoValido()).toBe(true);
  });

  // Test para verificar el código de banco con suma mayor a 10
  test("Código de banco válido con suma mayor a 10", () => {
    const codigoBanco = "1234561";
    const banco = new Banco(codigoBanco, "MiBanco");
    expect(banco.codigoValido()).toBe(true);
  });
});

describe("Cuentas bancarias", () => {
  // Test para verificar el número de cuenta
  test("Número de cuenta válido", () => {
    const cuenta = new CuentaBancaria(
      "abcde12340",
      new Persona("Juan", "Pérez", "2000-01-01"),
      10000
    );
    expect(cuenta.numeroValido()).toBe(true);
  });

  // Test para verificar el propietario de la cuenta
  test("Propietario de la cuenta válido", () => {
    const propietario = new Persona("Juan", "Pérez", "2000-01-01");
    const cuenta = new CuentaBancaria("abcde12340", propietario, 10000);
    expect(cuenta.propietario).toEqual(propietario);
  });

  // Test para verificar el total de efectivo de la cuenta
  test("Total de efectivo de la cuenta", () => {
    const cuenta = new CuentaBancaria(
      "abcde12340",
      new Persona("Juan", "Pérez", "2000-01-01"),
      10000
    );
    expect(cuenta.totalEfectivo).toBe(10000);
  });

  test("Número de cuenta válido con letras y números desordenados", () => {
    const cuenta = new CuentaBancaria(
      "A1B2C3D6E2",
      new Persona("Juan", "Pérez", "2000-01-01"),
      10000
    );
    expect(cuenta.numeroValido()).toBe(true);
  });

  // Test para verificar que el total de efectivo es un entero en céntimos
  test("Total de efectivo válido en céntimos", () => {
    const cuenta = new CuentaBancaria(
      "A1B2C3D6E2",
      new Persona("Juan", "Pérez", "2000-01-01"),
      10000
    );
    expect(cuenta.totalEfectivoValido()).toBe(true);
  });

  // Test para verificar que el total de efectivo no es un entero en céntimos
  test("Total de efectivo inválido no en céntimos", () => {
    const cuenta = new CuentaBancaria(
      "A1B2C3D6E2",
      new Persona("Juan", "Pérez", "2000-01-01"),
      10000.5
    );
    expect(cuenta.totalEfectivoValido()).toBe(false);
  });
});

describe("Propietarios de cuentas bancarias", () => {
  // Test para verificar que el propietario es mayor de edad
  test("Propietario mayor de edad", () => {
    const propietario = new Persona("Juan", "Pérez", "2000-01-01");
    expect(propietario.esMayorDeEdad()).toBe(true);
  });

  // Test para verificar que el propietario es menor de edad
  test("Propietario menor de edad", () => {
    const propietario = new Persona("Pedro", "García", "2010-01-01");
    expect(propietario.esMayorDeEdad()).toBe(false);
  });

  // Test para verificar que una cuenta bancaria con un propietario menor de edad no es válida
  test("Cuenta bancaria con propietario menor de edad no válida", () => {
    const cuenta = new CuentaBancaria(
      "A1B2C3D6E2",
      new Persona("Pedro", "García", "2010-01-01"),
      10000
    );
    expect(cuenta.propietarioValido()).toBe(false);
  });

  // Test para verificar que una cuenta bancaria con un propietario mayor de edad es válida
  test("Cuenta bancaria con propietario mayor de edad válida", () => {
    const cuenta = new CuentaBancaria(
      "A1B2C3D6E2",
      new Persona("Juan", "Pérez", "2000-01-01"),
      10000
    );
    expect(cuenta.propietarioValido()).toBe(true);
  });
});
