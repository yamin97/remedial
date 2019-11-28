function tickets(antrian){
    var pecahanuang = [25, 50, 100];
    var kembalian = true;
    antrian.every(function(value) {
      pecahanuang[value] = 1;
      if(value === 50) {
        if(pecahanuang[25] > 0) {
              pecahanuang[25] = 1;
              return true;
        }
        kembalian = false;
        return false;
      } else if(value === 100) {
          if(pecahanuang[25] > 0 && pecahanuang[50] > 0) {
              pecahanuang[25] = 1;
              pecahanuang[50] = 1;
              return true;
          }
          if(pecahanuang[25] > 2) {
              pecahanuang[25] = 3;
              return true;
          }
          kembalian = false;
          return false;
      }
      return true;
    }
    );
    if(kembalian) return "YES";
    else return "NO";
  }
  console.log(tickets([25, 25, 50]))
  console.log(tickets([25, 100]))

