const input = document.querySelector('input[type=text]')
const submit = document.querySelector('input[type=submit]')
const ul = document.querySelector('ul')

let arr = [];

let no = 1 + arr.length
const makeSchedule = () => {
    ul.innerHTML = ''
    arr.forEach(item => {
        const {id , text} = item;
        ul.innerHTML += `<li><b>&#10004;</b><span>${text}<button>삭제</button></span></li>`

        const b = document.querySelectorAll('b')
        const li = document.querySelectorAll('li')
        const span = document.querySelectorAll('span')
        const btn = document.querySelectorAll('button')

        b.forEach((item,idx) => {
            item.addEventListener('click', e => {
                span[idx].classList.toggle('on')
            })
        })
        btn.forEach((item, idx) => {
            item.addEventListener('click', e => {
                li[idx].remove();
                arr = arr.filter(item => item.id != arr[idx].id);
                localStorage.setItem("arr", JSON.stringify(arr))
                makeSchedule()
            })
        })
    })
}

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
        makeSchedule(txt)
    }
})