//With the usual Users and Todo lists:

// - Find all the users who's name contains the letter 
// - Say hi to those users in the console - but only 1 greeting every 2 seconds.
// - Prompt the user for a user ID. Using the value, find all the todos that are Inc


// - Prompt the user for a letter

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
