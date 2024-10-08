import { Vehiculo } from './Vehiculo';  

export class Moto extends Vehiculo {  
    private cilindrada: number;  

    constructor(id: number, marca: string, modelo: string, anio: number, cilindrada: number) {  
        super(id, marca, modelo, anio);  
        this.cilindrada = cilindrada;  
    }  

    getCilindrada(): number {  
        return this.cilindrada;  
    }  

    setCilindrada(cilindrada: number): void {  
        this.cilindrada = cilindrada;  
    }  
}