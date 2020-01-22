var fs = require('fs')

String.prototype.turkishToLower = function(){

    var string = this;

    var letters = { "İ": "i", "I": "ı", "Ş": "ş", "Ğ": "ğ", "Ü": "ü", "Ö": "ö", "Ç": "ç" };

    string = string.replace(/(([İIŞĞÜÇÖ]))/g, function(letter){ return letters[letter]; })

    return string.toLowerCase()
}
    var turkishDictionary=  []
    var englishDictionry= []

    var turkishText = fs.readFileSync("D:\\NodeJsProjects\\dilModeli\\turkishWords.txt")
    var englishText = fs.readFileSync("D:\\NodeJsProjects\\dilModeli\\englishWords.txt")

    var trLines = turkishText.toString().split('\r\n')
    trLines.forEach(lines=>{
        var letter=lines.split("")
        turkishDictionary.push(lines+"\t"+letter.join(" "))     
    })

    var engLines = englishText.toString().split('\r\n')
    
    engLines.forEach(el=>{

        var newForms= el.turkishToLower()
        englishDictionry.push(newForms)
    })

//  console.log(turkishDictionary)
 console.log(englishDictionry)




console.log("ok")
