var database=
[
    {
    username: "Talha",
    password: "qwertyuiop"
    },
    {
    username: "Saad",
    password: "12345678"
    },
    {
    username: "Faiz",
    password: "naruto"
    }
    
];
var newsFeed= [
    {
        username: "Faiz",
        timeline: "Got a new job"
    },
    {
        username: "Nomaan",
        timeline: "On a trip"
    }
];
function isCorrect(username,password)
{
    for(var i=0;i<database.length;i++)
    {
        if(database[i].username===username&&database[i].password===password )
        return true;
    }
    return false;
}
function signIn(u,p)
{
    if(isCorrect(u,p))
    {
        console.log(newsFeed);
    }
    else
    {
        alert(" Sorry wrong username or password");
    }
}
var user=prompt("Enter user name: ");
var pass=prompt("Enter password: ");
signIn(user,pass);