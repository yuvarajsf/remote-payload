$.ajax({
    url: '/WebServices/AdminWS.asmx/SaveAdminOrBoardUser', // replace with actual URL
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({
        user: {
            UserID: 0,
            FirstName: "yuvaraj",
            LastName: "hacker",
            RegisteredEmail: "yuvarajsfviascript@gmail.com"
        },
        userRole: "Administrator"
    }),
    success: function (response) {
        console.log("Response:", response);
    },
    error: function (xhr) {
        console.error("Error:", xhr.responseText);
    }
});
