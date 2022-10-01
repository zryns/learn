//listen for submit
document.getElementById("pdm-form").addEventListener('submit', calculateResults);

//calculate results
function calculateResults(e) {
    console.log('Calculating')

    //Bring in thr UI Variables
    const V = document.getElementById('V');
    const ADT = document.getElementById('ADT');
    const PCV = document.getElementById('PCV');
    const L = document.getElementById('L');
    const T = document.getElementById('T');
    const LEF = document.getElementById('LEF');
    const TGF = document.getElementById('TGF');
    const ESALyi = document.getElementById('ESALyi');
    const ESALdes = document.getElementById('ESALdes');
    const ESALyiFormula = document.getElementById('ESALyiFormula');
    const ESALdesFormula = document.getElementById('ESALdesFormula');
    const TrafficCat = document.getElementById('traffic-cat');
    const CBRMean = document.getElementById('CBRMean');
    const CBRSD = document.getElementById('CBRSD');
    const Probability = document.getElementById('Probability');
    const CBR = document.getElementById('CBR');
    const CBRFormula = document.getElementById('CBRFormula');
    const CBRFormula2 = document.getElementById('CBRFormula2');

    //Convert number to decimal before displaying results

    const calculateADT = parseFloat(V.value) / 2;
    const calculateESALyi = (parseFloat(ADT.value) * 365 * parseFloat(PCV.value) / 100 * parseFloat(L.value) * parseFloat(T.value) * parseFloat(LEF.value)) / 1000000;
    const calculateESALdes = parseFloat(calculateESALyi) * parseFloat(TGF.value);
    const calculateCBR = parseFloat(CBRMean.value) - parseFloat(Probability.value) * parseFloat(CBRSD.value);


    //SHOW RESULT
    ADT.value = calculateADT.toFixed(2);
    ESALyi.value = calculateESALyi.toFixed(3);
    ESALdes.value = calculateESALdes.toFixed(3);
    CBR.value = calculateCBR.toFixed(1);
    ESALyiFormula.value = parseFloat(ADT.value) + " * " + 365 + " * " + parseFloat(PCV.value) / 100 + " * " + parseFloat(L.value) + " * " + parseFloat(T.value) + " * " + parseFloat(LEF.value);
    ESALdesFormula.value = parseFloat(ESALyi.value) + " * " + parseFloat(TGF.value);
    CBRFormula.value = parseFloat(CBRMean.value) + " - " + parseFloat(Probability.value) + " * " + parseFloat(CBRSD.value) + "";
    CBRFormula2.value = parseFloat(CBRMean.value) + "% - " + (parseFloat(Probability.value) * parseFloat(CBRSD.value)).toFixed(1) + "%";




    /*const x = "";
    if (ESALdes.value < 10.0) {
        x.value = "T3";
    }
    TrafficCat.value = X;*/
    e.preventDefault();
}

/*var tgf = parseFloat(TGF.value);
for (var i = 0; i < tgf.length; i++) {
    alert("row 1: " + tgf[i].value);
}

TGF.value = tgf.toFixed(2);*/