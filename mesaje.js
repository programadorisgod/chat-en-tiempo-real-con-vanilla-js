class Mensaje {
    constructor(mensaje, hours, minuts) {
        this._mensaje = mensaje;
        this._hours = hours;
        this._minuts = minuts
    }

 getMensaje(){
    return this._mensaje;
 }

 getMinuts(){
    return this._minuts;
 }

 getHours(){
    return this._hours;
 }
  
 setMensaje(mensaje){
    this._mensaje = mensaje;
 }

}