const myAge = 27
const showPage = () => {
    return 'Showing the page'
}
const showErrorPage = () => {
    return 'Showing the error page'
}
const message = myAge >= 21 ? showPage() : showErrorPage()
console.log(message)

const team