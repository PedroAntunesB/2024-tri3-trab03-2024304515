atualizarRelogio()
function atualizarRelogio() {
    const time = document.querySelectorAll('.time')
    var agora = new Date()
    var hora = agora.getHours()
    var minuto = agora.getMinutes()
    time.forEach((time) => {
        time.innerHTML = `${hora}:${minuto}`
    })
}

const btenv = document.querySelector('.enviar')
const msgO = document.querySelector('.message.owner')
const main = document.querySelector('main')

btenv.addEventListener('click', () => {
    const input = document.querySelector('input').value
    dup = msgO.cloneNode(true)
    main.appendChild(dup)
    const content = dup.querySelector('.contentowner')
    atualizarRelogio()
    content.innerHTML = `${input}`
})