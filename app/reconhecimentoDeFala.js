const elementoChute = document.getElementById('chute')

/* api de reconehcimento de voz */
/* usando a web speeach API */
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'

recognition.start();

/* onSpeek  - exbibi o que eu estou falando no console */
recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
  /* trazendo somente o que eu falo */
  chute = e.results[0][0].transcript
  exibeChuteNaTela(chute)
  verificaSeOChutePossuiUmValorValido(chute)
}

function exibeChuteNaTela(chute) {
  elementoChute.innerHTML = `
    <div>Você disse</div>
    <span class="box">${chute}</span>
    `
}

/* para o microfone continuar ligado */
recognition.addEventListener('end', () => recognition.start())