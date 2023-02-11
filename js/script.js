{
    const calculateResult = (amount, currency) => {
        const GBP = 5.3415;
        const USD = 4.3133;
        const EUR = 4.6879;
        
        switch (currency) {
            case "GBP":
                return amount * GBP;
    
            case "USD":
                return amount * USD;
    
            default:
                return amount * EUR;
        }
    
    }
    
    const onFormSubmit = (event) => {
        event.preventDefault();
    
        const currencyElement = document.querySelector(".js-currency");
        const amountElement = document.querySelector(".js-amount");
        const resultElement = document.querySelector(".js-result");
    
        const amount = +amountElement.value;
        const currency = currencyElement.value;
    
        const result = calculateResult(amount, currency);
    
        resultElement.innerHTML = `${result.toFixed(2)}`
    }
    
    const init = () => {
        const formElement = document.querySelector(".js-form");
    
    formElement.addEventListener("submit", onFormSubmit);
    };
    init();
    
    const toggleBackground = () => {
        const bodyElement = document.querySelector(".js-body");
        const spanElement = document.querySelector(".js-span"); 
    
        bodyElement.classList.toggle("body__image");
        spanElement.innerText = bodyElement.classList.contains("body__image") ?
        "usuń" : "dodaj";
    };
    const toggle = () => {
        const buttonBackground = document.querySelector(".js-button--background");
        buttonBackground.addEventListener("click", toggleBackground);
    
    };
    toggle();
}






