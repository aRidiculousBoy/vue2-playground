// pick函数 传入一个原对象以及该对象的key数组 返回一个新的对象引用原对象的key-value
export const pick = (raw,keys = []) => {
    return keys.reduce((prev,curr) => {
        prev[curr] = raw[curr]
        return prev
    },{})
}


// exclude函数 传入一个原对象以及该对象的key数组 返回一个新对象不包含传入的keys
export const exclude = (raw,keys = []) =>  {
    return Object.keys(raw).filter(k => !keys.includes(k)).reduce((prev,curr) => {
        prev[curr] = raw[curr]
        return prev
    },{})
}


// 判断当前时间是否在指定时间段内
export const isDuringDate = (startDate,endDate) => {
    const curr = new Date()
    const start = new Date(startDate)
    const end = new Date(endDate)
    if (curr >= start && curr <= end) {
        return true
    }
    return false
}