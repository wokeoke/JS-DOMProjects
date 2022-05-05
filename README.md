## Javascript Tutorial and Projects Course (2022)

### by John Smilga

---

### Grocery Bud Project

- #### Project Structure

```sh
grocery-bud
├─ app.js
├─ index.html
├─ logo.svg
└─ style.css
```

##

- #### HTML
- index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Grocery Bud</title>

    <!-- LINK & STYLE -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
    />

    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <section class="section-center">
      <!-- FORM -->
      <form class="grocery-form">
        <p class="alert"></p>
        <h3>grocery bud</h3>
        <div class="form-control">
          <input type="text" id="grocery" placeholder="e.g. eggs" />
          <button type="submit" class="submit-btn">submit</button>
        </div>
      </form>

      <!-- LIST -->
      <div class="grocery-container">
        <div class="grocery-list">
          <article class="grocery-item">
            <p class="title">item</p>
            <div class="btn-container">
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </article>
        </div>

        <!-- BUTTON -->
        <button type="submit" class="clear-btn">clear</button>
      </div>
    </section>

    <!-- JAVASCRIPT -->
    <script src="app.js"></script>
  </body>
</html>
```

##

- #### Select Elements

```js
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
let editID = '';
```

##

- #### Add Item Setup

```js
// EDIT OPTION
.
.
// EVENT LISTENERS
// submit form
form.addEventListener('submit', addItem);

// FUNCTIONS
function addItem(e) {
  e.preventDefault();

  const value = grocery.value;
  const id = new Date().getTime().toString();

  if (value !== '' && editFlag === false) {
    console.log('add new item');
  } else if (value !== '' && editFlag === true) {
    console.log('update item');
  } else {
    console.log('empty value');
  }
}
```

##

- #### Truthy Shortcut
- from if (value !== '' && editFlag === false)
  to if (value && !editFlag)

```js
if (value && !editFlag) {
  console.log('add new item');
} else if (value && editFlag) {
  console.log('update item');
} else {
  console.log('empty value');
}
```

##

- #### Display Alert
- Create displayAlert function

```js
// display alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  setTimeout(function () {
    alert.textContent = '';
    alert.classList.remove(`alert-${action}`);
  }, 1800);
}
```

- Put into **else statement**

```js
if (value && !editFlag) {
  console.log('add new item');
} else if (value && editFlag) {
  console.log('update item');
} else {
  displayAlert('Please enter value', 'danger');
}
```

##

- #### Add Item
- Write inside the **if (value && !editFlag)** statement

```js
if (value && !editFlag) {
  // create new element
  const element = document.createElement('article');
  // add class
  element.classList.add('grocery-item');
  // add id
  const attribute = document.createAttribute('data-id');
  attribute.value = id;
  element.setAttributeNode(attribute);
  // create innerHTML
  element.innerHTML = `          
    <p class="title">${value}</p>
    <div class="btn-container">
      <button type="button" class="edit-btn">
        <i class="fas fa-edit"></i>
      </button>
      <button type="button" class="delete-btn">
        <i class="fas fa-trash"></i>
      </button>
    </div>
  `;
  // append child
  list.appendChild(element);
  // display alert
  displayAlert('item added to the list', 'success');
  // show container
  container.classList.add('show-container');
  // add to local storage
  addToLocalStorage(id, value);
  // set back to default
  setBackToDefault();
}
```

- index.html
- "grocery-list" content moved to app.js to create inner HTML

```html
<!-- LIST -->
<div class="grocery-container">
  <div class="grocery-list"></div>
</div>
```

- Create addToLocalStorage & setBackToDefault functions

```js
// display alert
.
.
// set back to default
function setBackToDefault() {
  console.log('set bak to default');
}

// LOCAL STORAGE
// add to local storage
function addToLocalStorage(id, value) {
  console.log('added to local storage');
}
```

##

- #### Set Back to Default
- Reset all values when hit submit button

```js
// set back to default
function setBackToDefault() {
  grocery.value = '';
  editFlag = false;
  editID = '';
  submitBtn.textContent = 'submit';
}
```

##

- #### Clear Items
- Remove all items when hit the clear button
- Add event listener

```js
// EVENT LISTENERS
// submit form
.
.
// clear items
clearBtn.addEventListener('click', clearItems);
```

- function

```js
// display alert
.
.
// clear items
function clearItems() {
  const items = document.querySelectorAll('.grocery-item');

  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
    });
  }
  container.classList.remove('show-container');
  displayAlert('items cleared', 'danger');
  // localStorage.removeItem('list')
}
```

##

- #### Edit & Delete Buttons
- Create const deleteBtn & editBtn inside the addItem function

```js
function addItem(e) {
// create innerHTML
.
.
// action button
const deleteBtn = element.querySelector('.delete-btn');
deleteBtn.addEventListener('click', deleteItem);
const editBtn = element.querySelector('.edit-btn');
editBtn.addEventListener('click', editItem);
.
.
}
```

- Create both of button functions below clear items function

```js
// clear items
.
.
// delete function
function deleteItem() {
  console.log('item deleted');
}

// edit function
function editItem() {
  console.log('edit item');
}

```

##

- #### Delete Item
- Target the \<article> element to get **data-id** attribute
- console.log(e.currentTarget.parentElement.parentElement)

```html
<!-- devtools console -->

<article class="grocery-item" data-id="1651747229181">
  <!-- title & action buttons -->
</article>
```

- Delete item function

```js
// delete function
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  list.removeChild(element);

  if (list.children.length === 0) {
    container.classList.remove('show-container');
  }

  displayAlert('item removed', 'danger');
  // remove from local storage
  // removeFromLocalStorage(id);
}
```

- Set remove from local storage function

```js
// add to local storage
.
.
// remove from local storage
function removeFromLocalStorage(id) {
  console.log('removed from local storage');
}
```

##

- #### Edit Item
- Target the \<p> element to get inner HTML value
- console.log(e.currentTarget.parentElement.previousElementSibling)

```html
<!-- devtools console -->

<p class="title">item</p>
```

- Edit item function
- Put edit item value into grocery input element

```js
// edit function
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  // set edit item
  editElement = e.currentTarget.parentElement.previousElementSibling;
  // set form value
  grocery.value = editElement.innerHTML;
  editFlag = true;
  editID = element.dataset.id;
  submitBtn.textContent = 'edit';
}
```

- Write inside the **else if (value && editFlag)** statement

```js
  } else if (value && editFlag) {
    editElement.innerHTML = value;
    displayAlert('value changed', 'success');
    // edit local storage
    // editLocalStorage(editID, value);
    setBackToDefault();
  } else {
```

- Edit the local storage function
- Passing edit id and new value

```js
// remove from local storage
.
.
// edit local storage
function editLocalStorage(id, value) {
  console.log('edit local storage');
}
```
