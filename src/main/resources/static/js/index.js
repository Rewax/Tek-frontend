const myUrl = 'http://localhost:8081/news';

const requestOptions = {
    'content-type': 'application/json',
    method: 'GET',
    redirect: 'follow'
};

// fetch(myUrl, requestOptions)
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(fillPostHeader())
//         console.log(data)
//     })



data = [{
    id : 26952557,
    ranking : 1,
    link : "https://www.matuzo.at/blog/html-boilerplate/",
    title : "My Current HTML Boilerplate",
    siteName : "matuzo.at",
    points : 481,
    postedBy : "adrian_mrd",
    postTime : "6 hours ago",
    amountOfComments : 146
    },
    {
        id : 26952558,
        ranking : 2,
        link: "https://mars26.com/",
        title: "Show HN: Open-source high-res Mars map, in natural colors",
        siteName: "matuzo.at",
        points: 900,
        postedBy: "anders_dk",
        postTime: "6 hours ago",
        amountOfComments: 146
}]

//======== FETCH Post ========
// fetch(myUrl, requestOptions)
//     .then(response => response.json())
//     .then(data  => {
//         fillPostHeader(data)
//         console.log(data)
//     })

console.log(data)
data.forEach(fillPostHeader)

function fillPostHeader(item,index) {
    console.log(item)
    const headerParent = document.querySelector('.postHeader')

    // === CREATE atag ===
    let a = document.createElement('a')
    a.setAttribute("href", item.link)
    a.classList.add("link")
    headerParent.appendChild(a)

    // === CREATE h4 ===
    let h4 = document.createElement('h4')
    h4.textContent = item.title;
    a.appendChild(h4)
    console.log(item.title)


    // === CREATE span ===
    let span = document.createElement('span')
    span.textContent = item.points + " Points ";
    headerParent.appendChild(span)

    // === CREATE atag ===
    let a1 = document.createElement('a')
    a1.textContent = " by " + item.postedBy;
    headerParent.appendChild(a1)

    // === CREATE span ===
    let span2 = document.createElement('span')
    span2.textContent = " " + item.postTime + " ";
    headerParent.appendChild(span2)

    // === CREATE atag ===
    let a2 = document.createElement('a')
    a2.textContent = item.amountOfComments + " comments";
    headerParent.appendChild(a2)

}