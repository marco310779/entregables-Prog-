export abstract class Vehiculo {  
    protected id: number;  
    protected marca: string;  
    protected modelo: string;  
    protected anio: number;  
    protected activo: boolean;  

    constructor(id: number, marca: string, modelo: string, anio: number) {  
        this.id = id;  
        this.marca = marca;  
        this.modelo = modelo;  
        this.anio = anio;  
        this.activo = true;  
    }  

    getId(): number {  
        return this.id;  
    }  

    getMarca(): string {  
        return this.marca;  
    }  

    getModelo(): string {  
        return this.modelo;  
    }  

    getAnio(): number {  
        return this.anio;  
    }  

    isActivo(): boolean {  
        return this.activo;  
    }  

    setMarca(marca: string): void {  
        this.marca = marca;  
    }  

    setModelo(modelo: string): void {  
        this.modelo = modelo;  
    }  

    setAnio(anio: number): void {  
        this.anio = anio;  
    }  

    darBaja(): void {  
        this.activo = false;  
    }  
}