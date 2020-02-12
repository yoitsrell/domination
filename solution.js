function setImageUrl(id, url){
    const image = document.querySelector('#' + id)
    image.src = url
}
setImageUrl('image-1', 'http:')
setImageUrl('image-2', 'http:')
setImageUrl('image-3', 'http:')

function strike1(){
    //const strike1 = document.querySelector('#arguments').firstChild
    const strike1 = argumentsList.firstElementChild 
    strike1.style.textDecoration = 'line-through'
    //document.querySelector('#arguments').firstElementChild.style.textDecoration = 'line-through'
}

strike1()

function removeLastArgument()
    const argumentsList = document.querySelector('#arguments')
    const lastArgument = argumentsList.lastElementChild
//const removedArgument = argumentsList.removeChild(lastArgument) returns last(removed) child

lastArgument.remove()

function appendToArguments(element){
    const argumentsList = document.querySelector('arguments')
    arguments.appendChild(element)
}

