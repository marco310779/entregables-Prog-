class Televisor {
    marca: string;
    tamaño: number;
    esSmartTV: boolean;
    resolucion: string;
  
    constructor(marca: string, tamaño: number, esSmartTV: boolean, resolucion: string) {
      this.marca = marca;
      this.tamaño = tamaño;
      this.esSmartTV = esSmartTV;
      this.resolucion = resolucion;
    }
  
    encender(): void {
      console.log(`${this.marca} está encendido.`);
    }
  
    cambiarCanal(canal: number): void {
      console.log(`Cambiando al canal ${canal}.`);
    }
  
    ajustarVolumen(volumen: number): void {
      console.log(`Ajustando el volumen a ${volumen}.`);
    }
  }
  
  // Crear un nuevo objeto Televisor
  const miTelevisor = new Televisor('Samsung', 55, true, '4K');
  
  // Usar los métodos del televisor
  miTelevisor.encender();
  miTelevisor.cambiarCanal(12);
  miTelevisor.ajustarVolumen(20);
  