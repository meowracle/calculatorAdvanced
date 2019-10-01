function addNum(element) {
    let result=document.getElementById("result");
    let num=element.getAttribute("value");
    result.value=result.value+num;
}
function equal() {
    result.value=eval(result.value);
}

