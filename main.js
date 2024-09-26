
// History Btn
document.getElementById('history')
    .addEventListener('click', function () {
        const historyContainer = document.getElementById('history-container');
        const donateContainer = document.getElementById('donate-container');


        // Toggle
        donateContainer.classList.add('hidden');
        historyContainer.classList.remove('hidden');


        // Set History Btn BG
        document.getElementById('history').classList.remove('btn-outline')
        document.getElementById('history').classList.add('bg-primary')


        // Remove Donate Btn BG
        document.getElementById('donate').classList.remove('bg-primary')
        document.getElementById('donate').classList.add('btn-outline')


    })



// Donate Btn
document.getElementById('donate')
    .addEventListener('click', function () {
        const historyContainer = document.getElementById('history-container');
        const donateContainer = document.getElementById('donate-container');


        // Toogle
        donateContainer.classList.remove('hidden');
        historyContainer.classList.add('hidden');


        // Set Donate Btn BG
        document.getElementById('donate').classList.remove('btn-outline')
        document.getElementById('donate').classList.add('bg-primary')


        // Remove History Btn BG
        document.getElementById('history').classList.remove('bg-primary')
        document.getElementById('history').classList.add('btn-outline')


    })

function getInputValue(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = Number(inputValue);
    return inputNumber;
}

function getTextValue(id) {
    const inputValue = document.getElementById(id).innerText;
    const inputNumber = Number(inputValue);
    return inputNumber;
}


// Noakhali Btn
document.getElementById('btn-donate')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const donateAmount = getInputValue('donate-amount')
        const totalDonate = getTextValue('noakhali-balance');
        const myBalance = getTextValue('my-balance');

        if (isNaN(donateAmount) || donateAmount <= 0 || donateAmount == null || donateAmount == "") {
            alert('Invalid Input');
            return;
        }
        if (donateAmount > myBalance) {
            alert('insufficient balance');
            return;
        }

        const updateBalance = totalDonate + donateAmount;
        const balanceLeft = myBalance - donateAmount;

        document.getElementById('noakhali-balance').innerText = updateBalance.toFixed(2);
        document.getElementById('my-balance').innerText = balanceLeft.toFixed(2);



        // History
        const history = document.getElementById('history-container');
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="w-11/12 mx-auto mt-5 mb-10 space-y-4 border-2 rounded-xl p-8">
            <h1 class="text-xl font-bold ">${donateAmount.toFixed(2)} Taka is Donated for famine-2024 at Noakhali, Bangladesh</h1>
            <p>Date: ${new Date()} </p>
        </div>

        `
        history.appendChild(div)

        // Modal On/Off
        my_modal_5.showModal()
    })


// Feni Btn
document.getElementById('btn-donate1')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const donateAmount = getInputValue('donate-amount1')
        const totalDonate = getTextValue('feni-balance');
        const myBalance = getTextValue('my-balance');

        if (isNaN(donateAmount) || donateAmount <= 0 || donateAmount == null || donateAmount == "") {
            alert('Invalid Input');
            return;
        }
        if (donateAmount > myBalance) {
            alert('insufficient balance');
            return;
        }

        const updateBalance = totalDonate + donateAmount;
        const balanceLeft = myBalance - donateAmount;

        document.getElementById('feni-balance').innerText = updateBalance.toFixed(2);
        document.getElementById('my-balance').innerText = balanceLeft.toFixed(2);



        // History
        const history = document.getElementById('history-container');
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="w-11/12 mx-auto mt-5 mb-10 space-y-4 border-2 rounded-xl p-8">
            <h1 class="text-xl font-bold ">${donateAmount.toFixed(2)} Taka is Donated for Flood Relief in Feni,Bangladesh</h1>
            <p>Date: ${new Date()} </p>
        </div>

        `
        history.appendChild(div)


        // Modal On/Off
        my_modal_5.showModal()
    })


// Quota Btn----
document.getElementById('btn-donate2')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const donateAmount = getInputValue('donate-amount2')
        const totalDonate = getTextValue('quota-balance');
        const myBalance = getTextValue('my-balance');

        if (isNaN(donateAmount) || donateAmount <= 0 || donateAmount == null || donateAmount == "") {
            alert('Invalid Input');
            return;
        }
        if (donateAmount > myBalance) {
            alert('insufficient balance');
            return;
        }

        const updateBalance = totalDonate + donateAmount;
        const balanceLeft = myBalance - donateAmount;

        document.getElementById('quota-balance').innerText = updateBalance.toFixed(2);
        document.getElementById('my-balance').innerText = balanceLeft.toFixed(2);



        // History
        const history = document.getElementById('history-container');
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="w-11/12 mx-auto mt-5 mb-10 space-y-4 border-2 rounded-xl p-8">
            <h1 class="text-xl font-bold ">${donateAmount.toFixed(2)} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h1>
            <p>Date: ${new Date()} </p>
        </div>

        `
        history.appendChild(div)


        // Modal On/Off
        my_modal_5.showModal()
    })