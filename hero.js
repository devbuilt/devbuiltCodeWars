function hero(bullets, dragons) {
    
    if (bullets / 2 >= dragons) {
        return true
    }else{
    return false
    }
}

console.log(hero(10,5))//true
console.log(hero(7, 4))//
console.log(hero(100, 40))// true
console.log(hero(1500, 751))//false
console.log(hero(0,1))// false
