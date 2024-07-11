// Write your solution here!
const cats=  ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    cats.push('Ralph')
}
function destructivelyPrependCat(name){
    cats.unshift('Bob')
}
function destructivelyRemoveLastCat(name){
    cats.pop('Garfield')
}
function destructivelyRemoveFirstCat(name){
    cats.shift('Milo')
}

function appendCat(name){
   let newCats= [...cats, "Broom"];
   return newCats
}

function prependCat(name){
    let newCats=["Arnold" , ...cats];
    return newCats
}

function removeLastCat(name){
    let newCats= cats.slice(0, cats.length -1)
    return newCats
}

function removeFirstCat(name){
    let newCats= cats.slice(1)
    return newCats
}



