// Element from DOM
const currencyEl_one = document.getElementById('currency-one');
const inputEl_one = document.getElementById('input1');
const currencyEl_two = document.getElementById('currency-two');
const inputEl_two = document.getElementById('input2');
const rateEl = document.getElementById('rate');
const dated = document.getElementById('date');

// function calculate that's fetch data from Exchange rate API & put on page
function calculate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            // console.log(dateX);
            const rateX = data.rates[currency_two];
            rateEl.innerText = `1 ${currency_one}= ${rateX} ${currency_two}`;
            inputEl_two.value = (inputEl_one.value * rateX).toFixed(2);
            const dateX = data.date;
            dated.innerText = `As per dated: ${dateX}`;
        })
}



// Event listeners
currencyEl_one.addEventListener('change', calculate);
inputEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
inputEl_one.addEventListener('input', calculate);
calculate();

// Event listener for swaping
swap.addEventListener('click', () => {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
});