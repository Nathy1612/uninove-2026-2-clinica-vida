const form = document.querySelector('#form-agendamento');
const cpf = document.querySelector('#cpf');
const avisoCpf = document.querySelector('#aviso-cpf');
const dataConsulta = document.querySelector('#data'); 
const horaConsulta = document.querySelector('#hora'); 
const avisoData = document.querySelector('#aviso-data'); 
const avisoHora = document.querySelector('#aviso-hora'); 
const resumo = document.querySelector('#resumo-agendamento');
const nome = document.querySelector('#nome'); 
const specialty = document.querySelector('#especialidade'); 

function validarCpf(campo, aviso) {
    const digitos = campo.value.replace(/\D/g, ''); 
    const valido = digitos.length === 11;
    aviso.textContent = valido ? '' : 'O CPF precisa ter 11 dígitos.';
    campo.classList.toggle('campo-invalido', !valido);
    return valido;
}

function validarData(campo, aviso) {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    const escolhida = new Date(`${campo.value}T00:00:00`); 
    const valida = escolhida > hoje;
    aviso.textContent = valida ? '' : 'A consulta precisa ser em uma data futura.';
    return valida;
}

function validarHorario(campo, aviso) {
    const hora = Number(campo.value.split(':')[0]); // Ajustado para pegar apenas o número da hora
    const valida = hora >= 7 && hora < 19;
    aviso.textContent = valida ? '' : 'A Clínica Vida+ atende das 07h às 19h.';
    return valida;
}

if (form) { 
    form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        
        const resultados = [
            validarCpf(cpf, avisoCpf),
            validarData(dataConsulta, avisoData),
            validarHorario(horaConsulta, avisoHora),
        ];
        
        if (resultados.includes(false)) return;
        
        resumo.textContent = `${nome.value} agendou ${specialty.value} em ${dataConsulta.value} às ${horaConsulta.value}.`;
        resumo.classList.remove('oculto');
    });
}

const busca = document.querySelector('#busca-especialidade');
const cards = document.querySelectorAll('.lista-especialidades li');

if (busca) { // Verifica se o campo de busca existe na página atual antes de rodar
    busca.addEventListener('input', () => {
        const termo = busca.value.trim().toLowerCase();
        cards.forEach((card) => {
            const nomeCard = card.textContent.toLowerCase();
            card.classList.toggle('oculto', !nomeCard.includes(termo));
        });
    });
}




