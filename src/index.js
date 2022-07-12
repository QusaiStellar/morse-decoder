const MORSE_TABLE = {
   '.-': 'a',
   '-...': 'b',
   '-.-.': 'c',
   '-..': 'd',
   '.': 'e',
   '..-.': 'f',
   '--.': 'g',
   '....': 'h',
   '..': 'i',
   '.---': 'j',
   '-.-': 'k',
   '.-..': 'l',
   '--': 'm',
   '-.': 'n',
   '---': 'o',
   '.--.': 'p',
   '--.-': 'q',
   '.-.': 'r',
   '...': 's',
   '-': 't',
   '..-': 'u',
   '...-': 'v',
   '.--': 'w',
   '-..-': 'x',
   '-.--': 'y',
   '--..': 'z',
   '.----': '1',
   '..---': '2',
   '...--': '3',
   '....-': '4',
   '.....': '5',
   '-....': '6',
   '--...': '7',
   '---..': '8',
   '----.': '9',
   '-----': '0',
};

function decode(expr) {

   const arr = [];

   for (let i = 0; i < expr.length; i += 10) {
      arr.push(expr.split("").slice(i, i + 10).join(""));
   }

   const arrWithoutZero = arr.map(el => {
      for (let i = 0; i < el.length; i++) {
         const element = el[i];
         if (element === "1") {
            el = el.split("").slice(i).join("");
            return el;
         } else if (element === "*") {
            return " ";
         }
      }
   });

   const morseArr = arrWithoutZero.map(el => {
      let morseElement = "";

      if (el.length > 1) {
         for (let i = 0; i < el.length; i += 1) {
            el[i] === el[i += 1] ? morseElement += "-" : morseElement += ".";
         }
      } else {
         morseElement += " ";
      }

      return morseElement;
   });

   const decodeArr = morseArr.map(el => el === " " ? el : MORSE_TABLE[el]);

   return decodeArr.join("");
}



module.exports = {
   decode
}