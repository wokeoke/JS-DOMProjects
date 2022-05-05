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

###

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

###

- #### Select Elements
- app.js

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
let editId = '';
```

###

- #### Add Item Setup
- app.js

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

---
