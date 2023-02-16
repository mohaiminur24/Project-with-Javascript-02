const getInputvalueById = (id) => {
    const inputSting = document.getElementById(id);
    const inputNumber = parseFloat(inputSting.value);
    inputSting.value = "";
    return inputNumber;
};
const getInnerTextById = (id) =>{
    const inputSting = document.getElementById(id);
    const inputNumber = parseFloat(inputSting.innerText);
    return inputNumber;
}
const setInnertextById = (id,value) => {
    const textField = document.getElementById(id);
    textField.innerText = value;
};

    

document.getElementById('expenses').addEventListener("click",function(){

    const food = getInputvalueById("food");
    const rent = getInputvalueById("rent");
    const clothes = getInputvalueById("clothes");
    const income = getInputvalueById("income");
    const saveButton = document.getElementById("Save");
    
    const totalExpenses = food+rent+clothes;
    setInnertextById("totalexpenses",totalExpenses);
    
    const balanceAfterExpenses =income-totalExpenses;
    setInnertextById('afterBalanceExpenses',balanceAfterExpenses);

    saveButton.classList.remove("opacity-50");
    saveButton.removeAttribute("disabled");


});

document.getElementById("Save").addEventListener("click",function(){

    const balance = getInnerTextById("afterBalanceExpenses");
    const saving = getInputvalueById("saving");

    const savingAmount = (balance*saving)/100;
    setInnertextById("savingfield",savingAmount);

    const remaining = balance-savingAmount;
    setInnertextById("remaning",remaining);


});

