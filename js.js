function checkIfDuplicateExists(x) {
    return parseInt(new Set(x).size) >= 3
}
const regenerate = (arraydgt, round) => {
    const digits = arraydgt.toString().split('');
    const ascendingorder = parseInt(digits.sort(function(a, b) {
        return a - b
    }).toString().replace(/,/g, ''));
    const descendingorder = parseInt(digits.sort(function(a, b) {
        return b - a
    }).toString().replace(/,/g, ''));

    var para = document.createElement("P");
    para.innerHTML = descendingorder + " - " + ascendingorder + " = " + (descendingorder - ascendingorder);
    document.querySelector("#listofround").appendChild(para);

    console.log((descendingorder - ascendingorder) + "==" + parseInt(arraydgt));
    if ((descendingorder - ascendingorder) == parseInt(arraydgt)) {
        alert('Static start on round ' + round);
        return round;
    } else {
        regenerate((descendingorder - ascendingorder), (round + 1));
    }
}
const generateresult = (round = 0) => {
    const inputValues = document.querySelector('#digits').value;
    const arraynumber = inputValues.split('');
    const digits = arraynumber.map(function(x) {
        return parseInt(x, 10);
    });

    if (checkIfDuplicateExists(digits) == true) {
        const ascendingorder = parseInt(digits.sort(function(a, b) {
            return a - b
        }).toString().replace(/,/g, ''));
        const descendingorder = parseInt(digits.sort(function(a, b) {
            return b - a
        }).toString().replace(/,/g, ''));

        var para = document.createElement("P");
        para.innerHTML = descendingorder + " - " + ascendingorder + " = " + (descendingorder - ascendingorder);
        document.querySelector("#listofround").appendChild(para);
        regenerate((descendingorder - ascendingorder), (round + 1));
    } else {
        alert('no more than 2 duplicate alowed');
    }
}
const resetValues = () => {
    const digits = document.querySelector('#digits').value = "";
    document.querySelector(".resultdiv").innerHTML = ""
    document.querySelector('#buttonreset').classList.add("hidden");
    document.querySelector('#buttonsubmit').classList.add("hidden");
}
const isNumber = (evt) => {
    const restdisplay = document.querySelector('#buttonreset');
    const generatedisplay = document.querySelector('#buttonsubmit');
    const digits = document.querySelector('#digits').value;

    const iKeyCode = (evt.which) ? evt.which : evt.keyCode
    if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57)) {
        alert('only numbers');
        return false;
    } else {
        if (digits.length > 2) {
            restdisplay.classList.remove("hidden");
            generatedisplay.classList.remove("hidden");
        }
        if (digits.length > 3) {
            return false;
        } else {
            return true;
        }
    }
}