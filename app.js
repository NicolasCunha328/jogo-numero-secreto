let listaNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextonaTela( tag, texto ){

    let campo = document.querySelector( tag );
    campo.innerHTML = texto;
    responsiveVoice.speak( texto, 'Brazilian Portuguese Female', {rate: 1.2} );

} 

function exibirMensagemInicial(){

    exibirTextonaTela( 'h1', 'Jogo do número secreto' );
    exibirTextonaTela( 'p', 'Escolha um número de 1 a 100' );

}

exibirMensagemInicial();

function verificarChute(){

    let chute = document.querySelector( 'input' ).value;
    
    if( chute == numeroSecreto ){

        exibirTextonaTela( 'h1', 'Acertou!' );

        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `você descobriu o número secreto com ${tentativas} ${palavraTentativa}! `; 

        exibirTextonaTela( 'p', mensagemTentativas);

        document.getElementById( 'reiniciar' ).removeAttribute( 'disabled' );

    }else{

        if( chute > numeroSecreto ){

            exibirTextonaTela( 'p', 'O número secreto é menor' );

        }else{

            exibirTextonaTela( 'p', 'O número secreto é maior' );

        }

        tentativas++;
        limparCampo();

    }

}

function gerarNumeroAleatorio(){

    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaNumerosSorteados.length;

    if( quantidadeDeElementosNaLista == numeroLimite ){

        listaNumerosSorteados = [];

    }

    if( listaNumerosSorteados.includes( numeroEscolhido ) ){

        return gerarNumeroAleatorio();

    }else{

        listaNumerosSorteados.push( numeroEscolhido );
        console.log( listaNumerosSorteados );
        return numeroEscolhido;

    }

}

function limparCampo(){

    chute = document.querySelector( 'input' );
    chute.value = '';

}

function reiniciarJogo(){

    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById( 'reiniciar' ).setAttribute( 'disabled', true );

}