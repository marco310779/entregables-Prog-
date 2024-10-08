class Televisor{
    private estaPrendido : boolean;
    private volumenActual : number;
    private canal actual : number;

    constructor(volumen: number, canal: number){
        this.volumenActual = volumen;
        this.canalActual = canal;
    }

    prenderApagar=void{
        if (this.estaPrendido = true) {
            this.estaPrendido = false;
    }else {
        this.estaPrendido = true;
        }
    }
    subirVolumen()=void {
        this.volumenActual = this.volumenActual +1;
    }

    subirCanal() : void {
        this.subirCanal = this.subirCanal +1;
    }
}
//instancias

let primerTelevisor = new Televisor(10,25);

let segundoTelevisor = new Televisor(50,20);

primerTelevisor.prenderApagar();
console.log(primerTelevisor.estaPrendido);