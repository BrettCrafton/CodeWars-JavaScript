const code = {G:"A", D:"E", R:"Y", P:"O", L:"U", K:"I", g:"a", d:"e", r:"y", p:"o", l:"u", k:"i", A:"G", E:"D", Y:"R", O:"P", U:"L", I:"K", a:"g", e:"d", y:"r", o:"p", u:"l", i:"k" }

function encode(str) {
    return str.split("").map(x => code[x] ? code[x]: x).join("");   
}

function decode(str) {
    return encode(str);   
}