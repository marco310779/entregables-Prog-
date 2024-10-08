import { Auto } from './Auto';  
import { Moto } from './Moto';  
import { Camion } from './Camion';  

export class RegistroAutomotor {  
    private vehiculos: (Auto | Moto | Camion)[];  

    constructor() {  
        this.vehiculos = [];  
    }  

    agregarVehiculo(vehiculo: Auto | Moto | Camion): void {  
        this.vehiculos.push(vehiculo);  
    }  

    buscarVehiculo(id: number): Auto | Moto | Camion | undefined {  
        return this.vehiculos.find(vehiculo => vehiculo.getId() === id);  
    }  

    modificarVehiculo(id: number, nuevoVehiculo: Auto | Moto | Camion): void {  
        const index = this.vehiculos.findIndex(vehiculo => vehiculo.getId() === id);  
        if (index !== -1) {  
            this.vehiculos[index] = nuevoVehiculo;  
        }  
    }  

    darBaja(id: number): void {  
        const vehiculo = this.buscarVehiculo(id);  
        if (vehiculo) {  
            vehiculo.darBaja();  
        }  
    }  

    listarVehiculosActivos(): (Auto | Moto | Camion)[] {  
        return this.vehiculos.filter(vehiculo => vehiculo.isActivo());  
    }  
}