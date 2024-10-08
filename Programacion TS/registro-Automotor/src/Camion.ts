import { Vehiculo } from './Vehiculo';  

export class Camion extends Vehiculo {  
    private cargaMaxima: number;  

    constructor(id: number, marca: string, modelo: string, anio: number, cargaMaxima: number) {  
        super(id, marca, modelo, anio);  
        this.cargaMaxima = cargaMaxima;  
    }  

    getCargaMaxima(): number {  
        return this.cargaMaxima;  
    }  

    setCargaMaxima(cargaMaxima: number): void {  
        this.cargaMaxima = cargaMaxima;  
    }  
}