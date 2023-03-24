// Code your solution here
function findMatching(array, name){
    return array.filter(item => item.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(array, letters){
    return array.filter(item => item.toLowerCase().startsWith(letters.toLowerCase()));
}
function matchName(array, name){
    return array.filter(item => item.name === name);
}