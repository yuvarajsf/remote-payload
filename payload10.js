function test(){
    console.log("HI");
    document.body.innerHTML = "";
    document.body.innerHTML += "<h1 style='color:red'>From github</h1>";
    token = document.querySelector('meta[name="designer_service:access_token"]').content;
    document.body.innerHTML += "<h1 style='color:rd'>" +token + "</h1>;
}

test()
