const generateMarkdown = require("./utils/generateMarkdown");

function generateLink() {
    return `
    <a href="${data.link}">${data.username}</a>`
}
generateLink();
console.log(generateLink());

module.exports = generateMarkdown;