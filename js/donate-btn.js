function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}


function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function showClickedSection(id){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    
    document.getElementById(id).classList.remove('hidden');
    

}
function showClickedSectionColor(id){
    document.getElementById('donation-btn').classList.add('bg-[#d5dbce]');
    document.getElementById('history-btn').classList.add('bg-[#d5dbce]');
    
    document.getElementById(id).classList.remove('bg-[#d5dbce]');
    document.getElementById(id).classList.add('bg-[#B4F461]');

}

