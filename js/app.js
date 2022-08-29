console.log('aplicacion calculadora -')

function sumar() {
  const forma = document.getElementById('forma')
  let operandoA = forma['operandoA']
  let operandoB = forma['operandoB']
  let resul = parseInt(operandoA.value) + parseInt(operandoB.value)
  document.getElementById('resultado').innerHTML = `resultado: ${resul}`
  console.log(resul)
}
