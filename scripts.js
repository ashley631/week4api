"use strict";

// $(document).ready(() => {

//     // $.get("data.json").then((data) => {
//     //     console.log(data);


//     // });

// //     $.get ("https://www.reddit.com/r/aww.json").then((response) => {
// //         console.log(response);
// //         const arr = response.data.children;
// //         console.log(arr);
// //         for(let post of arr) {
// //             $("body").append ( `
// //             <p>${post.data.author}</p>
// //             <p>${post.data.title}</p>
// //             <img src="${post.data.preview.images["0"].source.url}">
// //             `)
// //         }
// //     });
// // });

// // //Using JavaScript

// // // fetch("https://www.reddit.com/r/aww.json").then(response => {
// // //     return response.json();
// // // }).then(data => {
// // //     console.log(data);
// // // });

// // //Using jQuery
// $.get("https://www.reddit.com/r/aww.json").then((response) => {   //$.get function -Building a promise(returning an object)
//                                                                         //.then function - if promise has a response
//     console.log(response);   

//     const children= response.data.children;
//     for (let i =0; i < children.length; i++) {
//         console.log(children[i]);
//         $("body").append(`
//         <section>
//         <h3>Title: ${children[i].data.title}</h3>
//         <p>Author: ${chidren[i].data.author}</p>
//         <img src="${children[i].data.preview.images["0"].source.url}
//         <p>Ups: ${children[i].data.ups}</p>
//         <p>Comments: ${children[i].data.num_comments}</p>
//         <p>Created On: ${children[i].data.created}</p>
//         </section>
//         `);
//     }
// }).catch((error) => {                                           //.catch - If the promise is unsuccessful 
//     console.log(error);
//     $("body").append(`
//     <p>There has been an error with request.</p>

    
//     `);


// });


// //Building a promise using vanilla javascript
// const p = new Promise ((resolve, reject) => {    // This arrow function will always have at least 2 methods : result & reject
//     for(let i=0; i <= 5000; i++) {
//         if(i === 0) {
//             // resolve("Promise is resolved."); ///When we call the resolve function, this promise has done what it needs to do. We are going to pass the data to another location (into the then method)
//             resolve({ 
//                 status: "Resolved" 

//             })
//         }else{
//             reject("Promise was rejected.");   //rejecting the promise
//         }
//     }

// });

// p.then((data) => {          //anytime a promise is rejected
//     console.log(data);
    
// }).catch((error) => {       //anytime a promise is resolved
//     console.log(error);
// });





$.get ("https://api.giphy.com/v1/gifs/search?api_key=gYtgM3GrlcFQ6y8e4ymDMp9myo8Su4NG&q=dog&limit=25&offset=0&rating=G&lang=en").then((response) => {
    console.log(response);
    console.log(response.data[0].images.original.url); 

    for(let i=0;i < response.data.length;i++) {
        console.log(response.data[i].images.original.url);  
        $("body").append(`
        <img src="${response.data[i].images.original.url}">
        
        `);
    }
  //sample documentation from giphy ///var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=https://api.giphy.com/v1/gifs/search?api_key=gYtgM3GrlcFQ6y8e4ymDMp9myo8Su4NG&q=dog&limit=25&offset=0&rating=G&lang=en");
    ///xhr.done(function(data) { console.log("success got data", data); });

});

