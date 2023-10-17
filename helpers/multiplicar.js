const fs = require("fs");
const colors = require('colors');

const tabalHastaN = async (N=5, l=false, h) => {
  try {
    let salida, consola = "";
    for (let i = 1; i <= h; i++) {
      salida += `${N} ${colors.green('X')} ${i} ${colors.green('=')} ${N * i}\n`;
      consola += `${N} X ${i} = ${N * i}\n`
    }
    if (l) {
      console.log("================".green);
      console.log(' tabla del: '.green,colors.blue(N));
      console.log("================".green);
      console.log(salida);
    }
    fs.writeFileSync(`./salida/Tabla-${N}.txt`, consola);
    return `Tabla-${N}.txt`;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  tabalHastaN,
};
