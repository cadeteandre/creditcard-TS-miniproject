import './style.css'

const cardNumberInput = document.querySelector('#cardNumberInput') as HTMLInputElement;
const cardHolderInput = document.querySelector('#cardHolderInput') as HTMLInputElement;
const expirationDateInput = document.querySelector('#expirationDateInput') as HTMLInputElement;
const button = document.querySelector('button') as HTMLButtonElement
const printedCardNumber = document.querySelector('#printedCardNumber') as HTMLDivElement;
const printedCardHolder = document.querySelector('#printedCardHolder') as HTMLDivElement;
const printedCardExpirationDate = document.querySelector('#printedCardExpirationDate') as HTMLDivElement;

//? still need to check the input type date

button?.addEventListener('click', (e: Event) => {
  e.preventDefault();

  const cardNumber = cardNumberInput.value;
  const cardHolder = cardHolderInput.value;
  const expirationDate = expirationDateInput.value;
  
  printedCardNumber.innerText = cardNumber;
  printedCardHolder.innerText = cardHolder;
  printedCardExpirationDate.innerText = expirationDate;
})