const fetchRes = fetch('https://api.github.com/users/boyko')

fetchRes
.catch()
.then()
.finally()

fetch('https://api.github.com/users/boyko')
.then(
    (data) => {}
)
.catch(
    (error) => {console.log(error)}
)
.finally(
    () => {}
)
