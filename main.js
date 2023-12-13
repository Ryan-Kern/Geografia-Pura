let mapaMundiImg = document.getElementById('mapa-mundi-img')
let mapaMundiArea = document.getElementById('mapa-mundi-area')
let style_mapaMundiImg = mapaMundiImg.style

mapaMundiArea.addEventListener('mousemove', (event) => {
    let clientX = event.clientX - mapaMundiArea.offsetLeft
    let clientY = event.clientY - mapaMundiArea.offsetTop
    let mWidth = mapaMundiArea.offsetWidth
    let mHeight = mapaMundiArea.offsetHeight
    
    clientX = clientX / mWidth * 100
    clientY = clientY / mHeight * 100
    console.log(clientX.toFixed(2), clientY.toFixed(2))

    if (clientY > 89){
        clientY = 89
    }

    mapaMundiImg.style.transform = 'translate(-'+clientX+'%, -'+clientY+'%) scale(4)'
    mapaMundiImg.style.paddingLeft = '30%'
    mapaMundiImg.style.paddingRight = '50px'
    mapaMundiImg.style.width = '80%'
    mapaMundiImg.style.height = '80%'
    mapaMundiImg.style.paddingTop = '15%'
    mapaMundiImg.style.paddingBottom = '50px'
 })
mapaMundiArea.addEventListener('mouseleave', () => {
    mapaMundiImg.style.paddingLeft = '0'
    mapaMundiImg.style.paddingTop = '0'
    mapaMundiImg.style.transform = 'translate(-0%, -0%) scale(1)'
    mapaMundiImg.style.width = '100%'
    mapaMundiImg.style.height = '100%'
    mapaMundiImg.style = style_mapaMundiImg
})
