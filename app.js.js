function cifrado(option){
do{
var respuesta = prompt("Indique el número de lo que desea hacer: 1)Cifrar - 2)Decifrar"); //indica lo que desea hacer
if(respuesta !== ""){ //respuesta espacio vacio y numero
if(respuesta == "1") {
cipher();//Conexion con la function
} else if (respuesta == "2") {
decipher();//conexion con la function
} else {
alert("Ingrese una opción válida");
		}
		}
	} while (respuesta === "" || (respuesta != "1" && respuesta != "2"));


function cipher (){//efectuar la codificación
var respuesta=(prompt("ingrese una frase"));
var resultado="";//guarda el nuevo strig en nueva variable
for(var i=0;i<respuesta.length;i++){//recorro la frase ingresada
var numeroLetra=((respuesta.charCodeAt(i)-65+33)% 26+65;//obtiene el codigo ASCCII de las letras que nos brindan, posicion en el alfabeto
var letra=String.fromCharCode(numeroLetra);//al saber la posicion pasarla a codigo ASCII para que la computadora nos enseñe la letra
resultado+=letra;//agrega a mi variable la letra
}
	return document.write("tu mensaje cifrado es "+ resultado);//se imprime el mensaje cifrado
}


function decipher(){//efectuar la decodificación
var respuesta=(prompt("ingrese una frase"));
var resultado="";//guarda el nuevo strig en nueva variable
for(var i=0;i<respuesta.length;i++){//recorro la frase ingresada
var numeroLetra=((respuesta.charCodeAt(i)-65+19)% 26+65;//formula proceso contrario
var letra=String.fromCharCode(numeroLetra);//
resultado+=letra;//agrega a mi variable la letra
}
}
  return document.write("tu mensaje decifrado es "+ resultado);//se improme el mensaje decifrado
}
}


cifrado();//llamo a la función
