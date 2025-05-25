// my credit simulator
/**
 * 
 * Conditions
 * 
 * The should be for 25% anual
 * 
 * @params prestamo, monto mensual a pagar
 * 
 * return {duracionTotal, montoTotalaPagar]
 */

interface Credito {
  meses: number
  montoTotalAPagar: number
  interes: number
}

function credito(monto: number, aPagar: number): Credito {
  const prestamo = monto
  const map = new Map<string, number>()

  map.set('por-pagar', monto)

  let meses = 0
  let montoTotalAPagar = 0

  const credito = .25
  
  while(monto > 0) {
    const deuda = map.get('por-pagar') // 6000
    if (deuda) {
        const interes = (deuda * credito) / 12 // 125
        monto = deuda + interes - aPagar // monto -> 5625

        map.set('por-pagar', monto) // initial -> 5625

        if (deuda < aPagar) { // 5625 < 500 false
            montoTotalAPagar += deuda
        } else {
            montoTotalAPagar += aPagar // ++ 500
        }
    }
    
    meses++
  }

  return {
    meses,
    montoTotalAPagar,
    interes: montoTotalAPagar - prestamo
  }
}

console.log(credito(6000, 500))