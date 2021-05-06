const myUrl = 'http://54.88.29.127:8082/news';
const requestOptions = {
    'content-type': 'application/json',
    method: 'GET',
    redirect: 'follow'
};

fetch(myUrl, requestOptions)
    .then(response => response.json())
    .then(data => {
        data.forEach(fillPostHeader)
        console.log(data)
    })



// data = [{
//     id : 26952557,
//     ranking : 1,
//     link : "https://www.matuzo.at/blog/html-boilerplate/",
//     title : "My Current HTML Boilerplate",
//     siteName : "matuzo.at",
//     points : 481,
//     postedBy : "adrian_mrd",
//     postTime : "6 hours ago",
//     amountOfComments : 146
//     },
//     {
//         id : 26952558,
//         ranking : 2,
//         link: "https://mars26.com/",
//         title: "Show HN: Open-source high-res Mars map, in natural colors",
//         siteName: "matuzo.at",
//         points: 900,
//         postedBy: "anders_dk",
//         postTime: "6 hours ago",
//         amountOfComments: 146
// }]


function fillPostHeader(item,index) {
    console.log(item)
    const containerParent = document.querySelector('.container')

    // === CREATE div ===
    let titleDiv = document.createElement('div')
    titleDiv.setAttribute("class", "title")
    containerParent.appendChild(titleDiv)

    // === CREATE div ===
    let div = document.createElement('div')
    div.setAttribute("class", "rank")
    titleDiv.appendChild(div)

    // === CREATE h4 ===
    let rank = document.createElement('h4')
    rank.textContent = item.ranking;
    div.appendChild(rank)
    console.log(item.ranking)

    // === CREATE div2 ===
    let div2 = document.createElement('div')
    div2.setAttribute("class", "postHeader")
    titleDiv.appendChild(div2)

    // === CREATE atag ===
    let a = document.createElement('a')
    a.setAttribute("href", item.link)
    a.classList.add("link")
    div2.appendChild(a)

    // === CREATE h4 ===
    let h4 = document.createElement('h4')
    h4.textContent = item.title;
    a.appendChild(h4)
    console.log(item.title)


    // === CREATE span ===
    let span = document.createElement('span')
    span.textContent = item.points + " Points ";
    div2.appendChild(span)

    // === CREATE atag ===
    let a1 = document.createElement('a')
    a1.textContent = " by " + item.postedBy;
    div2.appendChild(a1)

    // === CREATE span ===
    let span2 = document.createElement('span')
    span2.textContent = " " + item.postTime + " ";
    div2.appendChild(span2)

    // === CREATE atag ===
    let a2 = document.createElement('a')
    a2.textContent = item.amountOfComments + " comments";
    div2.appendChild(a2)

}