const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
     let scores = result.input
    let bad = 0;
    let good = 0
    for (let i = 0; i < qimetler.length; i++) {
        const element = qimetler[i]
        if (element == 2) {
            bad++
        } if (element == 5) {
            good++
        }
    } if (bad > good) {
        console.log("i");
    } if (good > bad) {
        console.log("i");
    } else {
        console.log("i");
  
});
