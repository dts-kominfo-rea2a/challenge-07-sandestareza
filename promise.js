const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
   try {
    const responseIXX = await promiseTheaterIXX();
    const responseVGC = await promiseTheaterVGC();
    
    const jumlahIXX = responseIXX.filter(item => item.hasil === emosi).length;
    const jumlahVGC = responseVGC.filter(item => item.hasil === emosi).length;
    
    return jumlahIXX + jumlahVGC;

   } catch (error) {
      console.log(error);
   }
};

module.exports = {
  promiseOutput,
};
