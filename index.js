const box = document.querySelector('.box')
const type = document.querySelector('#type')
const text = document.querySelector('.text')
const title = document.querySelector('#title')
const meaning = document.querySelector('#meaning')
const audi = document.querySelector('#audio')


// console.log(audi.setAttribute(src,'http'))

async function fetchvalue(value){
    try {
        text.style.display = 'none'
        type.innerText = `searching the meaning of ${value}`
        let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${value}`
       let api = await fetch(url)
        .then(response =>{
            return response.json()
        })
        .then(data=>{
            data.forEach(e => {
                title.innerText = e.word.toUpperCase()
                meaning.innerText = e.meanings[0].definitions[0].definition
                audi.src = e.phonetics[0].audio
                // audi.setAttribute('src',e.phonetics[0].audio)
                // console.log(e.phonetics[1].audio)
                // console.log(e.meanings[0].definitions[0].definition)
            });
            
        })
        
        type.style.display = 'none'
        text.style.display = 'block'
    } catch (error) {
        // console.log(error)
    }

//   console.log(value)
}



box.addEventListener('keyup',(e)=>{
    if(e.target.value && e.key === "Enter"){
        fetchvalue(e.target.value)
    }
    
})
// let x = 'jazib'
// let y = x.toUpperCase()
// console.log(y)