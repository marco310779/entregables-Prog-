import { RegistroAutomotor } from './src/RegistroAutomotor';  
import { Auto } from './src/Auto';  
import { Moto } from './src/Moto';  
import { Camion } from './src/Camion';  

const registro = new RegistroAutomotor();  

const auto1 = new Auto(1, 'Toyota', 'Corolla', 2020, 4);  
const moto1 = new Moto(2, 'Yamaha', 'MT-07', 2019, 689);  
const camion1 = new Camion(3, 'Ford', 'F-150', 2021, 1000);  

registro.agregarVehiculo(auto1);  
registro.agregarVehiculo(moto1);  
registro.agregarVehiculo(camion1);  

// Listar vehículos activos  
console.log('Vehículos activos:', registro.listarVehiculosActivos());  

// Dar de baja un vehículo  
registro.darBaja(1);  

// Listar vehículos activos después de dar de baja  
console.log('Vehículos activos después de dar de baja:', registro.listarVehiculosActivos());