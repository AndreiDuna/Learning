function add (text) {
    var paragraph = document.createElement('p'); 
    paragraph.textContent = text;
    var container = document.getElementById('container')
    container.appendChild(paragraph);
}
function getInput() {
    var text = document.getElementById('casuta').value;
    document.getElementById('casuta').value= '';
    add(text);
}