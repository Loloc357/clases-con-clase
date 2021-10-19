// crear las clases Edificio, Piso y Departamento aquí

class Departamento {
  depto: string;
  constructor(alias: string) {
    this.depto = alias;
  }
  getName() {
    return this.depto;
  }
}
class Piso {
  nombre: string;
  deptosEnElPiso: Departamento[];
  constructor(piso: string) {
    this.nombre = piso;
    this.deptosEnElPiso = [];
  }
  pushDepartamento(departamento: Departamento) {
    return this.deptosEnElPiso.push(departamento);
  }
  getDepartamentos(): Departamento[] {
    return this.deptosEnElPiso;
  }
}
class Edificio {
  arrayPisos: Piso[];
  constructor(piso: Piso[]) {
    this.arrayPisos = piso;
  }
  addDepartamentoToPiso(nombreDePiso: string, departamento: Departamento) {
    let piso = this.arrayPisos.find((elemto) => elemto.nombre == nombreDePiso);
    return piso.pushDepartamento(departamento);
  }

  getDepartamentosByPiso(nombreDePiso: string): Departamento[] {
    let piso = this.arrayPisos.find((elemto) => elemto.nombre == nombreDePiso);
    return piso.getDepartamentos();
  }
}

// no modificar este test
function testClaseEdificio(): void {
  const unPiso = new Piso("planta baja");
  const otroPiso = new Piso("primer piso");
  const unEdificio = new Edificio([unPiso, otroPiso]);
  const deptoUno = new Departamento("depto uno");
  const deptoDos = new Departamento("depto dos");
  const deptoTres = new Departamento("depto tres");
  unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
  unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
  unEdificio.addDepartamentoToPiso("planta baja", deptoTres);

  const deptos = unEdificio.getDepartamentosByPiso("planta baja");
  const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");
  console.log(deptos);
  if (
    Array.isArray(deptosEmpty) &&
    deptosEmpty.length == 0 &&
    deptos.length == 3 &&
    deptos[2].getName() == "depto tres"
  ) {
    console.log("testClaseBandaApartment passed");
  } else {
    throw "testClaseBandaApartment not passed";
  }
}

function main() {
  testClaseEdificio();
}
main();
