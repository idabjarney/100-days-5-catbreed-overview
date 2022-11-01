import catbreeds from './catbreedArray';

// for(let cat of catbreeds) {
//   const imgsrc = `/images/${cat.name}.png`;
//   const img = document.createElement('img');
//   img.src = imgsrc;
//   document.body.appendChild(img)
//   console.log(imgsrc)
// }

const form = document.querySelector('.form');
const imageContainer = document.querySelector('.image-container');
const checkboxes = document.querySelectorAll("input[type='checkbox']");
const clearAllBtn = document.querySelector('.clear-all-button')
let checkboxValues = [];

clearAllBtn.addEventListener('click', clearAll);
form.addEventListener('change', () => {
  const fieldsets = Array.from(form.querySelectorAll('fieldset'));
  const formOutput = {};
  for (const fieldset of fieldsets) {
    const name = fieldset.querySelector('legend').innerText.toLowerCase();
    const inputs = Array.from(fieldset.querySelectorAll('input'));
    const inputValues = inputs.map((input) => {
      if (input.checked === true) {
        return input.name.split('-')[0];
      }
      return false;
    });
    
    const filteredValues = inputValues.filter((inputValue) => {
      if (inputValue) {
        return inputValue;
      }
    });
    formOutput[name] = filteredValues;
  }
  imageContainer.innerHTML = '';
  const formKeys = Object.keys(formOutput);
  for (cat of catbreeds) {
    let rendered = false;
    for (key of formKeys) {
      const values = formOutput[key];
      for ( const value of values) {
        if (cat[key].includes(value)) {
          if(rendered === false) {
            rendered = true;
            const imgsrc = `/images/${cat.name}.png`;
            const catContainer = document.createElement('div');
            const img = document.createElement('img');
            const catName = document.createElement('p');
            catName.innerHTML = cat.name;
            img.src = imgsrc;
            catContainer.addEventListener('click', () => renderLightBox(cat))
            catContainer.appendChild(img);
            catContainer.appendChild(catName);




            imageContainer.appendChild(catContainer);
          }
        }
      }
    }
  }
  console.log(formKeys)
})


function renderLightBox(cat) {
  console.log(cat)
  
}

checkboxes.forEach((box) => {;
  box.checked = true;
  // box.addEventListener('change', filterCats);
});

function clearAll() {
  imageContainer.innerHTML = '';
  checkboxes.forEach((box) => {
    box.checked = false;
  }) 
}





function renderCats() {
  for (let cat of catbreeds) {
    const imgsrc = `/images/${cat.name}.png`;
    const catContainer = document.createElement('div');
    const img = document.createElement('img');
    const catName = document.createElement('p');
    catName.innerHTML = cat.name;
    img.src = imgsrc;
    catContainer.addEventListener('click', () => renderLightBox(cat))
    catContainer.appendChild(img);
    catContainer.appendChild(catName);
    imageContainer.appendChild(catContainer);
  }
}

renderCats()

 