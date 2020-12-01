const hitungPecahanUang = (n) => {
  let hasil = [];
  let sisa = 0;
  const pecahanUang = [
    100000,
    50000,
    20000,
    10000,
    5000,
    2000,
    1000,
    500,
    200,
    100,
    50,
    20,
    10,
    5,
    2,
    1,
  ];

  pecahanUang.forEach((pecahan) => {
    if (pecahan > 50) {
      if (n >= pecahan) {
        let counter = 0;
        while (n >= pecahan) {
          counter++;
          n -= pecahan;
        }
        hasil.push({
          nominal: `${pecahan}`,
          jumlah: counter,
        });
      }
    } else if (pecahan < 100) {
      if (n >= pecahan) {
        let counter = 0;
        while (n >= pecahan) {
          counter++;
          n -= pecahan;
        }
        sisa += pecahan * counter;
      }
    }
  });

  return [hasil, sisa];
};

export default hitungPecahanUang;
