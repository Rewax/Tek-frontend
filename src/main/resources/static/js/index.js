const myUrl = 'http://localhost:8081/index;'

const requestOptions = {
    'content-type': 'application/json',
    method: 'GET',
    redirect: 'follow'
};


fetch(myUrl, requestOptions)
    .then(response => response.json())
    .then(data => {
        data.forEach(fillActivities)
        console.log(data)
    })


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