//With the usual Users and Todo lists:

// - Find all the users who's name contains the letter 
// - Say hi to those users in the console - but only 1 greeting every 2 seconds.
// - Prompt the user for a user ID. Using the value, find all the todos that are Inc


// - Prompt the user for a letter
let firstLetter = prompt(`Write a letter ->`)

// - Find all the users who's name contains the letter 
const userName= users.map( function(user){
    return user.name
} )
function firstNameLetter (){
    return userName.includes(firstLetter)
}
// - Say hi to those users in the console - but only 1 greeting every 2 seconds.
for(const name of userName){
    console.log(`Hello ${name}`)
}


// - Prompt the user for a user ID. Using the value, find all the todos that are Inc

let idUsers = Number(prompt(`Write your ID ->`))
const userIdMapped = todos.map(function(todo){
    return todo.userId === idUsers
})
console.log(`Hello  ${idUsers}`)
function idOfUser(){
    return userIdMapped.includes(idUsers)

}
firstNameLetter()
idOfUser()

