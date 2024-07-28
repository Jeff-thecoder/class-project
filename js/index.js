" use strict ";

let outputHTML= document.querySelector('#output-HTML');
let formSubmitButton = document.querySelector('#form-submit-button');

formSubmitButton.addEventListener('click', (e) => {
  e.preventDefault()
  let str = document.getElementById('text-input').value
  str = sanitizeInput(str);
  replaceAllTabsAndBullets(str)
});

function sanitizeInput(input) {
  return input.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
}

function replaceAllTabsAndBullets(text){
  str = text.replace(/•\t/g,'<li><p style="line-height: 1.75;"><span>');
  replaceAllNewlineChars(str)
}

function replaceAllNewlineChars(text) {
  str = text.replace(/\n/g,'</li>');          
  replaceFirstLiWithUl(str)
}

async function replaceFirstLiWithUl(text) {
  str = text.replace('</li>', '<ul style="line-height: 1.75;">');
  removeFirstLiClosingTag(str)
}

function removeFirstLiClosingTag(text){
  str = text.replace('</li>', '');
  addUlClosingTagToEnd(str)
}

function addUlClosingTagToEnd(text){
  str = text.concat('</ul>')
  displayToBrowser(str)
}

function displayToBrowser(text){
  document.getElementById('output-container').dataset.output = true;
  outputHTML.innerText = text
  document.getElementsByTagName('form')[0].reset()

  copyBtn.addEventListener('click', (e) => {
    e.preventDefault()
    navigator.clipboard.writeText(text)
  })
}




