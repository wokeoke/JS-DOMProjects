// SELECT ITEMS
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// EDIT OPTION
let editElement;
let editFlag = false;
let editId = '';

// EVENT LISTENERS
// submit form
form.addEventListener('submit', addItem);

// FUNCTIONS
function addItem(e) {
  e.preventDefault();

  const value = grocery.value;
  const id = new Date().getTime().toString();

  if (value && !editFlag) {
    console.log('add new item');
  } else if (value && editFlag) {
    console.log('update item');
  } else {
    displayAlert('Please enter value', 'danger');
  }
}

// display alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  setTimeout(function () {
    alert.textContent = '';
    alert.classList.remove(`alert-${action}`);
  }, 1800);
}

// LOCAL STORAGE

// SETUP ITEMS
