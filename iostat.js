var iostat = require('iostat');
iostat().on('data', function(err, stats) {

  console.log(stats)
  
})
  