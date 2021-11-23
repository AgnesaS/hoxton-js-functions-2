let firstLetter = prompt(`Write a letter ->`)

const userName= users.map( function(user){
    return user.name
} )
function firstNameLetter (){
    return userName.includes(firstLetter)
}

for(const name of userName){
    console.log(`Hello ${name}`)
}

let idUsers = Number(prompt(`Write your ID ->`))

firstNameLetter()
