// Clase base para dispositivos electrónicos  
class DispositivoElectronico {  
    protected encendido: boolean;  

    constructor() {  
        this.encendido = false;  
    }  

    encender(): void {  
        this.encendido = true;  
        console.log("El dispositivo está encendido.");  
    }  

    apagar(): void {  
        this.encendido = false;  
        console.log("El dispositivo está apagado.");  
    }  

    estaEncendido(): boolean {  
        return this.encendido;  
    }  
}  

// Clase Televisor que extiende de DispositivoElectronico  
class Televisor extends DispositivoElectronico {  
    private canal: number;  
    private volumen: number;  
    private sistemaOperativo: string;  

    constructor(sistemaOperativo: string) {  
        super();  
        this.canal = 1; // Canal por defecto  
        this.volumen = 10; // Volumen por defecto  
        this.sistemaOperativo = sistemaOperativo;  
    }  

    cambiarCanal(nuevoCanal: number): void {  
        if (this.estaEncendido()) {  
            this.canal = nuevoCanal;  
            console.log(`Cambiar a canal ${nuevoCanal}`);  
        } else {  
            console.log("El televisor está apagado. No se puede cambiar el canal.");  
        }  
    }  

    subirVolumen(): void {  
        if (this.estaEncendido()) {  
            this.volumen++;  
            console.log(`Volumen aumentado a ${this.volumen}`);  
        } else {  
            console.log("El televisor está apagado. No se puede subir el volumen.");  
        }  
    }  

    bajarVolumen(): void {  
        if (this.estaEncendido()) {  
            if (this.volumen > 0) {  
                this.volumen--;  
                console.log(`Volumen reducido a ${this.volumen}`);  
            } else {  
                console.log("El volumen ya está en 0.");  
            }  
        } else {  
            console.log("El televisor está apagado. No se puede bajar el volumen.");  
        }  
    }  

    mostrarEstado(): void {  
        console.log(`Estado del Televisor: ${this.estaEncendido() ? "Encendido" : "Apagado"}, Canal: ${this.canal}, Volumen: ${this.volumen}, SO: ${this.sistemaOperativo}`);  
    }  
}  

// Ejemplo de uso  
const miTelevisor = new Televisor("Android TV");  
miTelevisor.encender();  
miTelevisor.cambiarCanal(5);  
miTelevisor.subirVolumen();  
miTelevisor.bajarVolumen();  
miTelevisor.mostrarEstado();  
miTelevisor.apagar();