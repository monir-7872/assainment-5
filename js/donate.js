document.getElementById('donate-btn').addEventListener('click',function(event){
    event.target.value;
    const addingAmount =getInputFieldValueById('input-tk')
    const donatingAmount = getTextFieldValueById('donate-tk')
    const availableAmount = getTextFieldValueById('available-tk')

    if(addingAmount > 0 && addingAmount < availableAmount ){
        alert('Are you sure ?')
        const addAmount = availableAmount - addingAmount;
        const totalDonatingAmount = addingAmount + donatingAmount;
       document.getElementById('available-tk').innerText = addAmount;
       document.getElementById('donate-tk').innerText = totalDonatingAmount;
       
         // add to donation history
         const div = document.createElement('div');
         const dateFormat=new Date();
         div.innerHTML = `
            <div class="justify-center max-w-7xl space-y-6 mb-8 m-auto border-2 border-solid border-gray-300 rounded-xl p-6 ">
             <h3 class="text-2xl font-bold">${addingAmount} Taka is Donated for famine-2024 at Noakhali, Bangladesh</h3>
             <p>date:${dateFormat}</p>
             </div>
         `
         document.getElementById('history-section').appendChild(div);
    }
    else{
        alert('Enter valid amount');
    }
})

document.getElementById('donate-btn-1').addEventListener('click',function(event){
    event.target.value;
    const addingAmount =getInputFieldValueById('input-tk-1')
    const donatingAmount = getTextFieldValueById('donate-tk-1')
    const availableAmount = getTextFieldValueById('available-tk')

    if(addingAmount > 0 && addingAmount < availableAmount ){
        alert('Are you sure ?')
        const addAmount = availableAmount - addingAmount;
        const totalDonatingAmount = addingAmount + donatingAmount;
       document.getElementById('available-tk').innerText = addAmount;
       document.getElementById('donate-tk-1').innerText = totalDonatingAmount;
           // add to donation history
           const div = document.createElement('div');
           const dateFormat=new Date();
           div.innerHTML = `
              <div class="justify-center max-w-7xl space-y-6 mb-8 m-auto border-2 border-solid border-gray-300 rounded-xl p-6 ">
               <h3 class="text-2xl font-bold">${addingAmount} Taka is Donated for famine-2024 at feni, Bangladesh</h3>
               <p>date:${dateFormat}</p>
               </div>
           `
           document.getElementById('history-section').appendChild(div);
    }
    else{
        alert('Enter valid amount');
    }
})

document.getElementById('donate-btn-2').addEventListener('click',function(event){
    event.target.value;
    const addingAmount =getInputFieldValueById('input-tk-2')
    const donatingAmount = getTextFieldValueById('donate-tk-2')
    const availableAmount = getTextFieldValueById('available-tk')

    if(addingAmount > 0 && addingAmount < availableAmount ){
        alert('Are you sure ?')
        const addAmount = availableAmount - addingAmount;
        const totalDonatingAmount = addingAmount + donatingAmount;
       document.getElementById('available-tk').innerText = addAmount;
       document.getElementById('donate-tk-2').innerText = totalDonatingAmount;
           // add to donation history
           const div = document.createElement('div');
           const dateFormat=new Date();
           div.innerHTML = `
              <div class="justify-center max-w-7xl space-y-6 mb-8 m-auto border-2 border-solid border-gray-300 rounded-xl p-6 ">
               <h3 class="text-2xl font-bold">${addingAmount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h3>
               <p>date:${dateFormat}</p>
               </div>
           `
           document.getElementById('history-section').appendChild(div);
    }
    else{
        alert('Enter valid amount');
    }
})


document.getElementById('blog').addEventListener('click',function(){

    window.location.href = "qna.html";
    

})

