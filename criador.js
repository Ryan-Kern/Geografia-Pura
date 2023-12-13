function criar_base(){
    const body = document.querySelector('body')
    const div_lista_paises = document.createElement('div')
    div_lista_paises.id = 'div-lista-paises'

    const section = document.createElement('section')
    section.classList.add('flex-container')
    section.id = 'lista-paises'

    body.appendChild(div_lista_paises)
    div_lista_paises.appendChild(section)
}

criar_base()

function criar_pais(nome, nome_inner){
    const section = document.querySelector('#lista-paises')
    
    const div_pais = document.createElement('div')
    div_pais.classList.add('flex-box')
    div_pais.id = `${nome}`

    const a_pais = document.createElement('a')
    a_pais.href = `fld_paises/pg_${nome}.html`
    a_pais.innerHTML = `${nome_inner}`

    section.appendChild(div_pais)
    div_pais.appendChild(a_pais)
}

