function population(p0, percent, imigran, targetPopulasi) {
    var tahun = 0;
    if ( percent < 10 ) {
      var percent = percent * .01
    } else if ( percent >= 10 ) {
      var percent = percent * .1 
    }
    for ( var i = p0; i < targetPopulasi; i += pertumbuhantahunan ) {
      var pertumbuhantahunan = Math.round(p0 * percent) + imigran
      p0 += pertumbuhantahunan
      tahun++
      }
    return tahun;
    }
  
  
  console.log(population(1000, 2, 50, 1200))