const btn = document.getElementById('getInfo')
// console.log(btn);

btn.addEventListener('click', async()=>{
    // alert("Hey event")
    const endpoint = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(endpoint)
    const conResponse = await response.json()
    console.log(conResponse);
    conResponse.map((info)=>{
        show.innerHTML += `
        <p>${info.id}</p>
        <p>${info.phone}</p>
        <p>${info.name}</p>
        `
    })
    
})

const showInfo = () => {
    //  alert('hey show info')
    const url = 'https://api.github.com/users'
    fetch(url)
        .then((response) => {
        console.log(response);
        return response.json()
        })
        .then((result) => {
        console.log(result);
        
        })
        .catch((err) => {
            console.log(err);
    })
}
// .the n(response=> response.json())
// async function eat(){}
// const amala = async () => {}
    
    
        // .then()
        // .catch()