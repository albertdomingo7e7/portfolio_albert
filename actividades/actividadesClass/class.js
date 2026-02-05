class TarjetaCredito{
    #cvv
    #pin
    numTarjeta
    validez
    #saldo
    #iban
    titular
    estado

    
    
    constructor(titular, numTarjeta, cvv, validez, saldo, iban, pin){
        this.#pin = pin
        this.#cvv = cvv
        this.numTarjeta = numTarjeta
        this.validez = validez
        this.#saldo = saldo
        this.#iban = iban
        this.titular = titular
        
    }

    transferencia(){}
    congelar(){}
    recibirNomina(){}

}