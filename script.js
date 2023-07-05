/////////////////// AGE CHECK /////////////////
function check() {
    let date = new Date()
    let year = date.getFullYear()
    let fyear = document.getElementById('number')
    let res = document.getElementById('res')

    if (fyear.value.length == 0 || Number(fyear.value) > year) {
        alert('[ERROR] no data found')
    } else {
        let fsex = document.getElementsByName('radsex')
        let age = year - Number(fyear.value)
        res.innerHTML = 'Calculated age:' + age
        let img = document.createElement('img')
        let gender = ''
        img.setAttribute('id', 'photo')
        img.style.paddingTop = '15px'
        img.style.maxHeight = '300px'
        img.style.minHeight = '200px'
        if (fsex[0].checked) {
            gender = 'Man'
            if (age >=0 && age < 5) {
                img.setAttribute('src', 'images/baby boy.png')
            } else if (age < 12) {
                img.setAttribute('src', 'images/boy.png')
            } else if (age < 21) {
                img.setAttribute('src', 'images/teen boy.png')
            } else if (age < 50) {
                img.setAttribute('src', 'images/man.png')
            } else {
                img.setAttribute('src', 'images/old man.png')
            }
        }
        if (fsex[1].checked) {
            gender = 'Woman'
            if (age >=0 && age < 5) {
                img.setAttribute('src', 'images/baby girl.png')
            } else if (age < 12) {
                img.setAttribute('src', 'images/girl.png')
            } else if (age < 21) {
                img.setAttribute('src', 'images/teen girl.png')
            } else if (age < 50) {
                img.setAttribute('src', 'images/woman.png')
            } else {
                img.setAttribute('src', 'images/old woman.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = 'We detected <strong>' + gender + '</strong> with <strong>' + age + '</strong> years old.'
        res.appendChild(img)
    }
}

/////////////////// HOURS CHECK /////////////////
function loading() {
    let msg = document.querySelector('div#msg')
    let img = document.querySelector('img#image')
    let d = new Date()
    let h = d.getHours()
    let m = d.getMinutes()
    msg.innerHTML = 'Now is ' + h + ' hours<br> and ' + m + ' minutes'
    img.style.textAlign = 'center'
    img.style.padding = '20% 0'
    msg.style.color = 'salmon'
    msg.style.fontWeight = 'bold'
    msg.style.fontSize = '1.5rem'
    msg.style.lineHeight = '2rem'

    if (h >= 6 && h < 12) {
        img.src = 'images/morning.png'      
    } else if (h >= 12 && h < 18) {
        img.src = 'images/afternoon.png'
    } else {
        img.src = 'images/night.png'
    }
}

/////////////////// LET'S COUNT /////////////////
function count() {
    let start = document.querySelector('input#n-start')
    let end = document.querySelector('input#n-end')
    let by = document.querySelector('input#n-count')
    let res = document.querySelector('div#count-res')
    if(start.value.length === 0 || end.value.length === 0 || by.value.length === 0) {
        res.innerHTML = 'Counting impossible.'
        alert('[ERROR] no data found')
    } else {
        res.innerHTML = 'Counting: <br>'
        res.style.padding = '40px'
        let s = Number(start.value)
        let e = Number(end.value)
        let b = Number(by.value)
        if(b==0) {
            alert('[ERROR] no data found in "Counting by".')
            b=1
        }
        if (s<e) {
            // COUNTING UP
            for(let a = s; a <= e; a+=b) {
                res.innerHTML+=(a)+' '+'\u{1F449}'
            }
            res.innerHTML+='\u{1F3C1}'
        } else {
            // COUNTING DOWN
            for (let a = s; a>=e; a-=b) {
                res.innerHTML+=(a)+' '+'\u{1F449}'
            }
        }
    }
}

/////////////////// MULTIPLICATION TABLE /////////////////
function go() {
    let num = document.querySelector('input#table-n')
    let tab = document.getElementById('select')
    if (num.value.length === 0) {
        alert('[ERROR] no data found')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for(let a=1;a<=10;a++){
            let item = document.createElement('option')
            item.text = (a) + 'x' + (n) + '=' + (a*n)
            item.value = 'tab(c)'            
            tab.appendChild(item)
        }
    }
}

/////////////////// ANALISING NUMBERS /////////////////
let num = document.querySelector('input#a-num')
let tab = document.querySelector('select#list-tab')  
let res = document.querySelector('div#a-n-res')
let list = []                                                           

function IsNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 20) {
        return true
    } else {
        return false
    }
}

function InList(n, list) {                              
    if (list.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if (IsNumber(num.value) && !InList(num.value, list)) {
        list.push(Number(num.value))
        let item = document.createElement('option')
        item.text = 'Value '+num.value+' added.'
        tab.appendChild(item)
        tab.style.textAlign = 'center'
        tab.style.fontSize = '1rem'
        res.innerHTML = ''
    } else {
        alert('[ERROR] Value invalid or is already in list.')
    }
    num.value = ''
    num.focus()
}

function end() {
    if (list.length == 0) {
        alert=('Please add numbers first.')
    } else {
        let total = list.length
        let higher = list[0]
        let lower = list[0]
        let sum = 0
        let media = 0
        for (let pos in list) {
            sum += list[pos]
            if (list[pos] > higher)
                higher = list[pos]
            if (list[pos] < lower)
                lower = list[pos]
        }
        media = sum / total
        res.innerHTML = ''
        res.innerHTML += 'In total, we have <strong>'+(total)+'</strong> numbers registered<br>'
        res.innerHTML += 'The higher number registered is <strong>'+(higher)+'</strong>.<br>'
        res.innerHTML += 'The lower number registered is <strong>'+(lower)+'</strong>.<br>'
        res.innerHTML += 'The sum of all values is <strong>'+(sum)+'</strong>.<br>'
        res.innerHTML += 'The average value of the registered numbers is <strong>'+(media)+'</strong>.<br>'
    }
}

/////////////////// DICE GAME /////////////////
const randomNumber1 = Math.floor(Math.random() * 5)+1;
const randomNumber2 = Math.floor(Math.random() * 5)+1; 
const img1 = document.querySelector('img.img1').setAttribute('src', 'images/dice'+randomNumber1+'.png')
const img2 = document.querySelector('img.img2').setAttribute('src', 'images/dice'+randomNumber2+'.png')
const btn = document.querySelector('#btn-dice')
let text = document.querySelector('h2.dice-text')
text.style.color = 'salmon'
text.style.fontWeight = 'bold'

if (randomNumber1 >= randomNumber2) {
    text.innerHTML = 'Player 1 Wins!'
} else if (randomNumber1 <= randomNumber2) {
    text.innerHTML = 'Player 2 Wins!'
} else {
    text.innerHTML = 'Draw'
}

///////////////// SETUP LANGUAGE ///////////////
window.gtranslateSettings = {"default_language":"en","detect_browser_language":true,"languages":["en","pt","fr","de","it","es"],"wrapper_selector":".gtranslate_wrapper","switcher_horizontal_position":"right","switcher_vertical_position":"top","float_switcher_open_direction":"bottom","flag_style":"3d","alt_flags":{"pt":"brazil"}}