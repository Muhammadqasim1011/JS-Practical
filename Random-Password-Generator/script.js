
function updaterange() {
    let range = document.getElementById('range');
    let para = document.getElementById('para');
    
    para.innerHTML = '';
    
    let value = range.value;
    // console.log(value);
    
    let rangediv = document.createElement('div');
    rangediv.innerHTML = ` Length: ${value}`
    para.appendChild(rangediv) ;
    return value;
}

function GRP(rangeValue) {
    let pasword = '';
    let result = document.getElementById('result');
    // let range = document.getElementById('range');
    // let rangeValue = range.value;
    let chars = 'QWERTYUIOPASDFGHJKLZXCVBNM<qwertyuiopasdfghjklzxcvbnm!@#$&*()!@#$&*()'

    for (let i = 0; i <= rangeValue; i++) {
        pasword += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    result.value = pasword;
}