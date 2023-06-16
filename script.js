const textArea = document.querySelector("#inputtexto");
const mensaje = document.querySelector("#texto2");
const copia = document.querySelector("#copiar");
copia.style.display = "none"


function validarTexto(){
    let textoEscrito = document.querySelector("#inputtexto").value;
    let validador = textoEscrito.match(/^[a-z ]*$/);
    if(!validador || validador === 0) {
        swal.fire({
            title: 'Error!',
            text: 'Solo se permiten letras minúsculas y sin acentos',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        return true;
    }


}

function btnEncriptar(){
    if(!validarTexto()) {
        const textoEncriptado = encriptar(textArea.value)
        mensaje.value = textoEncriptado
        mensaje.style.backgroundImage = "none"
        textArea.value = "";
        copia.style.display = "block"
    
    }
}

//Laves de encriptacion
// `La letra "e" se convierte en "enter"`
// `La letra "i" se convierte en "imes"`
// `La letra "a" se convierte en "ai"`
// `La letra "o" se convierte en "ober"`
// `La letra "u" se convierte en "ufat"`


function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringEncriptada
}



function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    
}


function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])

        }

    }
    return stringDesencriptada
}


function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    swal.fire({
        title: 'Copied Text',
        text: 'Texto copiado',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
}



