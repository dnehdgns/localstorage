import getAll from "./getAll.js"

const makeSchedule = (ul,arr) => {
    ul.innerHTML = ''
    arr.forEach(item => {
        const {id , text} = item;
        ul.innerHTML += `<li><b>&#10004;</b><span>${text}<button>삭제</button></span></li>`

        const b = getAll('b')
        const li = getAll('li')
        const span = getAll('span')
        const btn = getAll('button')

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

export default makeSchedule