import './style.css'
import { novoCarroHtml } from './components/novo-carro-html'

const table = document.querySelector('table tbody')
const form  = document.querySelector('form')

const loadCarros = () => {
    db.collection('carros').orderBy('modelo').onSnapshot( (snapshot) => {
        snapshot.docs.forEach( (carro) => {
//            console.log(carro.id)
//            console.log(carro.data())

            const novo = {id: carro.id, ...carro.data()}

            table.appendChild(novoCarroHtml(novo))
        })
    })
}

window.addEventListener('load', loadCarros)

form.addEventListener('submit', event => {
    event.preventDefault()

    const carro = {
        modelo   : form.modelo.value,
        marca    : form.marca.value,
        ano      : Number(form.ano.value),
        preco    : Number(form.preco.value),
        destaque : false
    }

    db.collection('carros').add(carro)
      .then( () => {
          console.log('Ok! Inserido')
      })
      .catch(erro => {
          console.log(`Erro: ${erro}`)
      })
    
    table.innerHTML = ''  
    form.reset()
    form.modelo.focus()
})

table.addEventListener('click', (event) => {
//    console.log(event.target)
//    console.log(event.target.localName)
//    console.log(event.target.parentElement.parentElement)
    if (event.target.classList.contains('excluir')) {
        
        const modelo = event.target.parentElement.parentElement.cells[0].innerText

        if (!confirm(`Confirma a exclusão do veículo ${modelo}?`)) {
            return
        }

        const id = event.target.parentElement.parentElement.getAttribute('data-id')

        db.collection("carros").doc(id).delete().then(() => {
            console.log("Ok! Excluído com sucesso");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });

        table.innerHTML = ''

    }


})
