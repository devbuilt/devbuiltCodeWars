//define the string prototype here
function isUpperCase(string) {
    let regexp = /[A-Z]/;

    if (regexp.test(string)) {
        return true
    } else {
        return false
    }

}
console.log(isUpperCase('ACSKLDFJSGSKLDFJSKLDFJ', 'ACSKLDFJSgSKLDFJSKLDFJ'))


String.prototype.isUpperCase = function (string) {
    return this.toUpperCase() == this;
}