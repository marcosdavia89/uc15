//1.pegar a hora atual
const agora = new Date();
const hora = agora.getHours();
const minutos = agora.getMinutes();
const minutosformatados = string(minutos).padStart(2, '0');
const horatexto = $(hora):$(minutosformatados)

//2.selecionar elementos do html
const pagina = document.getElementybyid('página');
const emojiEl = document.getElementyByid('emoji')
const Saudace1 = document,getElementyByid('saudação')
const horarioE = document.getElementyByid('horário')

//3. variaveis que guardam o resultado
let turno = '';
let emojiStr = '';
let mg = '';

//4.dicidir o turno com if/else
if(hora >=5> && hora <12){
    turno = 'manha'
    emojiStr = '';
    mg = 'bom dia';


}else if(hora >=12) && hora <18){
   turno = 'tarde';
   emojiStr = '';
   mg = 'madrugada!'
}

// 5.aplicar o tema na página
pagina.classList.add(turno);

// 6. colocar o conteúdo nos elementos
emojiEL.textcontent   =emojiStr;
saudacaoEL.textcontent = msg;
horarioEL.textcontent = 'são ${horaTexto}h';

//7. log para o desenvolvedor
console.log('turno: ${turno} | hora: ${horatexto}');