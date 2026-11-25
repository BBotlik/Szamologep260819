function buttonClick(){

    let aOperandus = Number(document.getElementById("a").value);
    let bOperandus = Number(document.getElementById("b").value);

    let select = document.getElementById("operations");
    let muvelet = select.options[select.selectedIndex].value;

    let eredmeny = 0;

    switch (muvelet){
        case "+":
            eredmeny = aOperandus+bOperandus;
            break;
        case "-":
            eredmeny = aOperandus-bOperandus;
            break;
        case "*":
            eredmeny = aOperandus*bOperandus;
            break;
        case "/":
            eredmeny = aOperandus/bOperandus;
            break;
    }

    let ujLi = document.createElement("li");
    ujLi.innerHTML = aOperandus + " " + muvelet + " " + bOperandus + " = " + eredmeny;
    document.getElementById("previous").appendChild(ujLi);

}