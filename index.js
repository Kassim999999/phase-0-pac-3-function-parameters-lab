function introduction(name){
    return `Hi, my name is ${name}.`;
}

console.log(introduction("Kassim"));

function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

console.log(introductionWithLanguage("Kassim", "Javascript"))


function introductionWithLanguageOptional(name, language = "JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

console.log(introductionWithLanguageOptional("Kassim", "JavaScript"))
