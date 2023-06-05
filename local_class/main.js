class Local{
    constructor(){
        this.arr = [];
    }
    start(){
        this.localSubmit();
    }
    makeSchedule(){
        const $ul = document.querySelector('ul')
        $ul.innerHTML = ''
        this.arr.forEach(item => {
            const {id , text} = item;
            $ul.innerHTML += `<li><b>&#10004;</b><span>${text}<button>삭제</button></span></li>`
    
            const b = document.querySelectorAll('b')
            const span = document.querySelectorAll('span')
            const btn = document.querySelectorAll('button')
            const li = document.querySelectorAll('li')
    
            b.forEach((item,idx) => {
                item.addEventListener('click', e => {
                    span[idx].classList.toggle('on')
                })
            })
            btn.forEach((item, idx) => {
                item.addEventListener('click', e => {
                    console.log(idx);
                    li[idx].remove();
                    this.arr = this.arr.filter(item => item.id != this.arr[idx].id);
                    localStorage.setItem("arr", JSON.stringify(this.arr))
                    this.makeSchedule()
                })
            })
        })
    }
    add(txt){
        let no = 1 + this.arr.length;
        this.arr = [
            ...this.arr,
            {
                id : no++,
                text : txt
            }
        ]
        localStorage.setItem('arr', JSON.stringify(this.arr))
    }
    localSubmit(){
        const $input = document.querySelector('input[type=text]')
        const $submit = document.querySelector('input[type=submit]')
        $submit.addEventListener('click', e => {
            e.preventDefault()
            let txt = ''
            if($input.value == '') { alert('글자를 입력해주세요');}
            else { 
                txt = $input.value
                this.add(txt)
                $input.value = ''
                $input.focus()
                this.makeSchedule()
            }
        })
    }
}

const loc = new Local()
loc.start()
