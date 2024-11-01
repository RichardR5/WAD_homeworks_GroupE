/*
fetch("https://api.jsonbin.io/v3/b/6723d634e41b4d34e44c07ad?meta=false | latest>", {
    headers: {
        "X-Access-Key" : "$2a$10$kREDWMFciYXbqYDROIfwWuA1cDg5qXi.m2HKJOKqhS7rZ0kqex1L6",
    },
    method: "GET",
})
    .then((response) => response.json())
    .then(json => {
        console.log("remote");
        let data = json.record;
        for (let x in data){
            addPost(data[x]);
        }
    })
        */

fetch("./posts.json")
    .then((response) => response.json())
    .then(json => {
        console.log("local");
        for (let x in json){
            addPost(json[x]);
        }
    })


function addPost(post){
    const template = document.getElementsByTagName("template")[0];
    let postTemplate = template.content;
    let a = document.importNode(postTemplate, true);
    a.querySelector("#postText").innerHTML = post.body.caption;
    a.querySelector("#postTime").innerHTML = post.createTime;
    if (post.body.image != undefined){
        a.querySelector("#postImage").src = post.body.image;    
    }
    document.getElementsByClassName("posts")[0].appendChild(a);
}

