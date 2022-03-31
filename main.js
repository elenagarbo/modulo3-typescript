"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const persona_4 = require("./persona");
const mail_1 = require("./mail");
const direccion_4 = require("./direccion");
const telefono_4 = require("./telefono");
// crear 3 registros de persona y mostrar en la terminal
let direccion_1 = new direccion_4.Direcciones("Rafaela", "3", "1", "B", "28028", "Leganés", "Madrid");
let email_1 = new mail_1.Mails("trabajo", "persona1@mgail.com");
let telefono_1 = new telefono_4.Telefonos("casa", "916066223");
let persona_1 = new persona_4.Persona("Sara", "Garcia Lopez", 31, "49054806M", "femenino", direccion_1, email_1, telefono_1, "notas de persona 1");
let direccion_2 = new direccion_4.Direcciones("Rafaela", "3", "1", "B", "28941", "Alcorcón", "Madrid");
let email_2 = new mail_1.Mails("trabajo", "persona2@mgail.com");
let telefono_2 = new telefono_4.Telefonos("movil", "666223322");
let persona_2 = new persona_4.Persona("David", "Garcia Muñoz", 31, "49054807J", "masculino", direccion_2, email_2, telefono_2, "notas de persona 2");
let direccion_3 = new direccion_4.Direcciones("Real", "3", "1", "B", "28942", "Villaverde", "Madrid");
let email_3 = new mail_1.Mails("particular", "persona3@mgail.com");
let telefono_3 = new telefono_4.Telefonos("movil", "666223322");
let persona_3 = new persona_4.Persona("Marcos", "Garcia Fernandez", 31, "49054808S", "masculino", direccion_3, email_3, telefono_3, "notas de persona 3");
let arrayPersonas = [persona_1, persona_2, persona_3];
for (let i = 0; i < arrayPersonas.length; i++) {
    console.log('------------- Persona ' + (i + 1) + '-------------');
    console.log(arrayPersonas[i].mostrarDatosPersona());
}
// modificar direccion, mail y persona buscando DNI
let dni_elegido = "49054806M";
let direccion_nueva = new direccion_4.Direcciones("Castilla", "10", "3", "B", "28940", "Fuenlabrada", "Madrid");
let telefono_nuevo = new telefono_4.Telefonos("fijo", "916062323");
let email_nuevo = new mail_1.Mails("Trabajo", "trabajo@gmail.com");
for (let i = 0; i < arrayPersonas.length; i++) {
    const dniPersona = arrayPersonas[i].getDni();
    if (dni_elegido == dniPersona) {
        arrayPersonas[i].setDireccion(direccion_nueva);
        arrayPersonas[i].setMail(email_nuevo);
        arrayPersonas[i].setTelefono(telefono_nuevo);
    }
}
console.log('----------DATOS CAMBIADOS ------------------');
for (let i = 0; i < arrayPersonas.length; i++) {
    console.log('------------- Persona ' + (i + 1) + '-------------');
    console.log(arrayPersonas[i].mostrarDatosPersona());
}
//# sourceMappingURL=main.js.map