import get from "./module/get.js"
import makeSchedule from "./module/makeSchdule.js"

const input = get('input[type=text]')
const submit = get('input[type=submit]')
const ul = get('ul')

let arr = [];

let no = 1 + arr.length

const add = () => {
    arr = [
        ...arr,
        {
            id : no++,
            text : input.value
        }
    ]
    localStorage.setItem('arr', JSON.stringify(arr))
}

submit.addEventListener('click', e => {
    e.preventDefault()
    let txt = ''
    if(input.value == '') { alert('글자를 입력해주세요');}
    else { 
        txt = input.value
        add()
        input.value = ''
        input.focus()
        makeSchedule(ul, arr)
    }
})