export const novoCarroHtml = ({id, modelo, marca, ano, preco}) => {
    const tr = document.createElement('tr')

    tr.innerHTML = `
    <td>${modelo}</td>
    <td>${marca}</td>
    <td>${ano}</td>
    <td class="text-right">${preco.toLocaleString('pt-Br', {minimumFractionDigits: 2})}</td>
    <td class="text-center">
        <i class="fas fa-times text-danger mr-1 excluir"></i>
        <i class="fas fa-star text-warning"></i>
    </td>
    `
    tr.setAttribute('data-id', id)
    // console.log(tr)
    return tr
}

// export const novoCarroHtml = (carro) => {
//     const tr = document.createElement('tr')

//     tr.innerHTML = `
//     <td>${carro.modelo}</td>
//     <td>${carro.marca}</td>
//     <td>${carro.ano}</td>
//     <td>${carro.preco.toLocaleString('pt-Br', {minimumFractionDigits: 2})}</td>
//     <td></td>
//     `
//     tr.setAttribute('data-id', carro.id)
//     console.log(tr)
//     return tr
// }