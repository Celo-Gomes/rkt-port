const url = "https://api.github.com/users/celo-gomes" 
const rep = "https://api.github.com/users/celo-gomes/repos"
let projects = document.querySelector("#projects")
let show = document.querySelector('#show')

function getRepos(){
    if(show.innerText == "Veja todos"){
        axios.get(rep)
            .then(response => {
                const data= response.data

                console.log(data)
                console.log(data[0].name)
                console.log(data[0].description)
                console.log(data[4].topics)

                data.forEach(datas => { 
                    let res = document.querySelector('article')
                    let newProj = document.createElement('div')
                    newProj.setAttribute('id','proj')
                    res.appendChild(newProj)
                    show.innerHTML = 'CLOSE'
                    show.style.fontWeight = 'bolder'
                    show.style.fontSize = '16px' 

                    newProj.innerHTML = `
                     <p>                
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.8333 15.8333C18.8333 16.2754 18.6577 16.6993 18.3452 17.0118C18.0326 17.3244 17.6087 17.5 17.1667 17.5H3.83333C3.39131 17.5 2.96738 17.3244 2.65482 17.0118C2.34226 16.6993 2.16667 16.2754 2.16667 15.8333V4.16667C2.16667 3.72464 2.34226 3.30072 2.65482 2.98816C2.96738 2.67559 3.39131 2.5 3.83333 2.5H8L9.66667 5H17.1667C17.6087 5 18.0326 5.17559 18.3452 5.48816C18.6577 5.80072 18.8333 6.22464 18.8333 6.66667V15.8333Z" stroke="#837E9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <strong>${datas.name}</strong>
                     </p>
                     <p>${datas.description}</p>
                     <small>🔴 ${datas.topics}</small> 
                    `
                });
            })
            .catch(error => console.error(error))       

    }else{
        show.innerText = "Veja todos"
        show.style = 'initial'
        document.querySelector('article').innerHTML = `
            <a href="http://celo-gomes.github.io/nlw-spacetime" title="github" target="_blank">
                <div id="proj">
                    <p>                
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.8333 15.8333C18.8333 16.2754 18.6577 16.6993 18.3452 17.0118C18.0326 17.3244 17.6087 17.5 17.1667 17.5H3.83333C3.39131 17.5 2.96738 17.3244 2.65482 17.0118C2.34226 16.6993 2.16667 16.2754 2.16667 15.8333V4.16667C2.16667 3.72464 2.34226 3.30072 2.65482 2.98816C2.96738 2.67559 3.39131 2.5 3.83333 2.5H8L9.66667 5H17.1667C17.6087 5 18.0326 5.17559 18.3452 5.48816C18.6577 5.80072 18.8333 6.22464 18.8333 6.66667V15.8333Z" stroke="#837E9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <strong>nlw - spacetime</strong>
                    </p>
                    <p>Aplicação web responsiva de capsula do tempo</p>
                    <small>😎 OnLine Now!!</small>
                    <small id="mark">🔴 HTML</small>       
                </div>
            </a>
        `
    }
}

projects.onclick = getRepos

