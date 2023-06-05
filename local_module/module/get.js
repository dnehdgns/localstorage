export default function (target) {
    const ele = document.querySelector(target)
    if(ele) {
        return ele
    } else {
        throw error('선택한 요소가 존재하지않습니다.')
    }
}