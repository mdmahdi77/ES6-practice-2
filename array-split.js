const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const part = nums.slice(2, 5) //2-5 porjonto songkha dekhabe

const remove = nums.splice(2, 5, 77, 88,) //2-5 porjonto bad jabe

const togather = nums.join('')
const togather1 = nums.join(' ')
const togather2 = nums.join(', ')
const togather3 = nums.join('add')
console.log(remove)
console.log(nums)