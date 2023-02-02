/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let nuevoArreglo = [];
   for(let clave in objeto) {
   nuevoArreglo.push([clave, objeto[clave]])
   }
    return nuevoArreglo
}
function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código: 
   //1 for()
   //2 {letra:cantidad}
   //3 orden alfabetico
   var objeto ={};
   var stringLetras = string.split("")
   var letrasOrdenadas = stringLetras.sort()
   for (var letra of letrasOrdenadas){
      if(!objeto[letra]){
         objeto[letra] = 1
      } else {
         objeto[letra] += 1
      }
   }    
   return objeto 

}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var arrayString = string.split("");
   var minuscula = [];
   var Mayuscula = [];
   for(var letra of string)
   if(letra === letra.toLowerCase()){
      minuscula.push(letra)  
} else {
   Mayuscula.push(letra)
}
 return Mayuscula.join("") + minuscula.join("")   
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var nuevaFrase = [];
   var reverso = frase.split(" ")
  for(var i = 0; i < reverso.length; i++){
   if(i !== 0){
   nuevaFrase += " " + reverso[i].split("").reverse().join("")
} else {
   nuevaFrase += reverso[i].split("").reverse().join("")

}
  }
  return nuevaFrase


}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let newString = ""
   let newNum = String(numero)
   for(let i = newNum.length - 1; i >= 0; i--){
      newString = newString + newNum[i]
   }
   if(newString == numero) return"Es capicua"
   else return "No es capicua"
   
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var nuevaString = ""
   for(var i = 0; i < string.length; i++)
   if(string[i] !== "a" && string[i] !== "b" && string[i] !== "c") {
      nuevaString = nuevaString += string[i]
   }
   return nuevaString
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return arrayOfStrings.sort(function(a, b){
      return a.length - b.length
   })
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   // []
   //[encomun]
   //
   let nuevoArreglo = [];
   for(var i = 0; i < array1.length; i++){
      for(var j = 0; j < array2.length; j++) {
      if(array1[i] === array2[j]) {
         nuevoArreglo.push(array1[i])
   } 
}
}
return nuevoArreglo
}


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
