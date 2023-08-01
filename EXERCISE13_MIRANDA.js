let input = document.getElementById('input');
let result = document.getElementById('result');
let inputType = document.getElementById('inputType');
let resultType = document.getElementById('resultType');
let inputTypeValue,resultTypeValue;

input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);
inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myResult(){
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    //meter
    if(inputTypeValue === "Meter" && resultTypeValue === "Meter"){
        result.value = Number(input.value) * 1;
    }else if(inputTypeValue === "Meter" && resultTypeValue === "Kilometer"){
        result.value = Number(input.value) / 1000;
    }else if(inputTypeValue === "Meter" && resultTypeValue === "Centimeter"){
        result.value = Number(input.value) * 100;
    }else if(inputTypeValue === "Meter" && resultTypeValue === "Inch"){
        result.value = Number(input.value) * 39.37;
    }else if(inputTypeValue === "Meter" && resultTypeValue === "Millimeter"){
        result.value = Number(input.value) * 1000;
    }else if(inputTypeValue === "Meter" && resultTypeValue === "Nanometer"){
        result.value = Number(input.value) * 1e+9;
    }
    //kilometer
    if(inputTypeValue === "Kilometer" && resultTypeValue === "Meter"){
        result.value = Number(input.value) * 1000;
    }else if(inputTypeValue === "Kilometer" && resultTypeValue === "Kilometer"){
        result.value = Number(input.value) * 1;
    }else if(inputTypeValue === "Kilometer" && resultTypeValue === "Centimeter"){
        result.value = Number(input.value) * 100000;
    }else if(inputTypeValue === "Kilometer" && resultTypeValue === "Inch"){
        result.value = Number(input.value) * 39370;
    }else if(inputTypeValue === "Kilometer" && resultTypeValue === "Millimeter"){
        result.value = Number(input.value) * 1e+6;
    }else if(inputTypeValue === "Kilometer" && resultTypeValue === "Nanometer"){
        result.value = Number(input.value) * 1e+12;
    }
    //centimeter
    if(inputTypeValue === "Centimeter" && resultTypeValue === "Meter"){
        result.value = Number(input.value) / 100;
    }else if(inputTypeValue === "Centimeter" && resultTypeValue === "Kilometer"){
        result.value = Number(input.value) / 100000;
    }else if(inputTypeValue === "Centimeter" && resultTypeValue === "Centimeter"){
        result.value = Number(input.value) * 1;
    }else if(inputTypeValue === "Centimeter" && resultTypeValue === "Inch"){
        result.value = Number(input.value) / 2.54;
    }else if(inputTypeValue === "Centimeter" && resultTypeValue === "Millimeter"){
        result.value = Number(input.value) * 10;
    }else if(inputTypeValue === "Centimeter" && resultTypeValue === "Nanometer"){
        result.value = Number(input.value) * 1e+7;
    }
    //inch
    if(inputTypeValue === "Inch" && resultTypeValue === "Meter"){
        result.value = Number(input.value) / 39.37;
    }else if(inputTypeValue === "Inch" && resultTypeValue === "Kilometer"){
        result.value = Number(input.value) / 39370;
    }else if(inputTypeValue === "Inch" && resultTypeValue === "Centimeter"){
        result.value = Number(input.value) * 2.54;
    }else if(inputTypeValue === "Inch" && resultTypeValue === "Inch"){
        result.value = Number(input.value) / 1;
    }else if(inputTypeValue === "Inch" && resultTypeValue === "Millimeter"){
        result.value = Number(input.value) * 25.4;
    }else if(inputTypeValue === "Inch" && resultTypeValue === "Nanometer"){
        result.value = Number(input.value) * 2.54e+7;
    }
    //millimeter
    if(inputTypeValue === "Millimeter" && resultTypeValue === "Meter"){
        result.value = Number(input.value) / 1000;
    }else if(inputTypeValue === "Millimeter" && resultTypeValue === "Kilometer"){
        result.value = Number(input.value) / 1e+6;
    }else if(inputTypeValue === "Millimeter" && resultTypeValue === "Centimeter"){
        result.value = Number(input.value) * 10;
    }else if(inputTypeValue === "Millimeter" && resultTypeValue === "Inch"){
        result.value = Number(input.value) / 25.4;
    }else if(inputTypeValue === "Millimeter" && resultTypeValue === "Millimeter"){
        result.value = Number(input.value) * 1;
    }else if(inputTypeValue === "Millimeter" && resultTypeValue === "Nanometer"){
        result.value = Number(input.value) * 1e+6;
    }
    //nanometer
    if(inputTypeValue === "Nanometer" && resultTypeValue === "Meter"){
        result.value = Number(input.value) / 1e+9;
    }else if(inputTypeValue === "Nanometer" && resultTypeValue === "Kilometer"){
        result.value = Number(input.value) / 1e+12;
    }else if(inputTypeValue === "Nanometer" && resultTypeValue === "Centimeter"){
        result.value = Number(input.value) * 1e+7;
    }else if(inputTypeValue === "Nanometer" && resultTypeValue === "Inch"){
        result.value = Number(input.value) / 2.54e+7;
    }else if(inputTypeValue === "Nanometer" && resultTypeValue === "Millimeter"){
        result.value = Number(input.value) * 1e+6;
    }else if(inputTypeValue === "Nanometer" && resultTypeValue === "Nanometer"){
        result.value = Number(input.value) * 1;
    }


}