var altlib = require('./alts.json');

function addalt(){
    var username = document.forms["new"]["usernamenew"].value;
    var token = document.forms["new"]["tokennew"].value;

    if(!altlib[username]){
        altlib[username] = token

        fs.writeFile('./alts.json', JSON.stringify(altlib), (err) => {
            if (err) console.log('[altlib] ' + err)
        });
    };
}