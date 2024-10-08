import { Vehiculo } from './Vehiculo';  

export class Auto extends Vehiculo {  
    private puertas: number;  

    constructor(id: number, marca: string, modelo: string, anio: number, puertas: number) {  
        super(id, marca, modelo, anio);  
        this.puertas = puertas;  
    }  

    getPuertas(): number {  
        return this.puertas;  
    }  

    setPuertas(puertas: number): void {  
        this.puertas = puertas;  
    }  
}