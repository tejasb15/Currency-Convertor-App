function converter() {
    const fromCurrency = document.cc.from.value;
    const toCurrency = document.cc.to.value;
    const amt = document.cc.amt.value;
    const result = document.getElementById('result')

    if (amt >= 0) {
        fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                result.innerHTML = (`${data['rates'][fromCurrency] * amt} ${fromCurrency} &nbsp;<img src="images/arrow.svg">&nbsp; ${data['rates'][toCurrency] * amt} ${toCurrency}`);
            })
    }
    else {
        result.innerHTML = "Invalid Number"
    }
}