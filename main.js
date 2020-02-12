

// const pic = (id,url) => document.querySelector('#' + id)

function pic(id, url ){ //write function that sets id and url
const pic = document.querySelector('#'+ id)
pic.src = url} //set url as source

//pull pic by using image tags to make separate pictures 
pic('image-1', 'https://static.tvtropes.org/pmwiki/pub/images/deja_q_hd_046_resized_6484.jpg')
pic('image-2', 'https://www.dictionary.com/e/wp-content/uploads/2018/05/280.jpg')
pic('image-3', 'https://www.kindpng.com/picc/m/47-470730_pepe-meme-facepalm-png-download-pepe-the-frog.png')

function crossed(){ //pull first child of arguments and put strikethrough
    const crossed = document.querySelector('#arguments').firstElementChild;
    crossed.style.textDecoration = 'line-through' //line-through is strikethrough -_-
}

crossed()

function erase(){ //remove last li in #arguments
    const erase = document.querySelector('#arguments').lastElementChild
    erase.remove()
}

erase()
erase()




function appendUl(element){ //create function that appends to arguments
    document.querySelector('#arguments').appendChild(element)
}


function createImgEl(img){
const newImg = document.createElement(img)
}


function addImage(url){ //add image and pass it thru function
    const newImage = document.createElement(img)
    newImage.src = url
} 

function picSize(id){ //change height of picture
    const picSize = document.querySelector('#' + id)
    picSize.style.height = '30px'
}

picSize('image-3')

function turnInvis(element){ //create function that gives class invisible
    const gone1 = document.querySelector('' + element)
    gone1.style.visibility = 'hidden'
}

turnInvis('#thing-1')