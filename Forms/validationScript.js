var inputField = document.getElementById('inputField');

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var inputValue = inputField.value;
    var alphaPatternRegex = /^[a-zA-Z0-9]+$/;
    if (alphaPatternRegex.test(inputValue)) {
        alert('Input is valid.');
        this.request();
    } else {
        alert('input should only contain alphanumeric characters.');

    }
});