const changebyid = document.getElementById('id')
changebyid.style.color = 'blue'
changebyid.style.backgroundColor = 'red'

const changebyclass = document.getElementsByClassName('lorem')

changebyclass[0].style.color = 'red'



for(i = 0; i< changebyclass.length; i++){
    changebyclass[i].style.color = 'yellow'
}


