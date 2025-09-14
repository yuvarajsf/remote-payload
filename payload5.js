
function test() {
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
    userID: "11977"
});

// Send request
xhr.send(data);
console.log("Done");
    }
test();
