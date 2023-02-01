const https = require("https");
const fs = require("fs");

const arr = [
    "https://media.glassdoor.com/l/e9/c1/7a/84/independence-day-celebration.jpg",
    "https://i.ytimg.com/vi/O5u1apUkYV0/maxresdefault.jpg",
    "https://www.justcolor.net/wp-content/uploads/sites/1/nggallery/doodle-art-doodling/coloring-page-adults-doodle-art-rachel.jpg",
    "https://i.pinimg.com/originals/e5/55/a3/e555a39ca5457a079a9bcce59f61f8d5.jpg",
    "https://i.pinimg.com/originals/ef/4c/91/ef4c91fb73e61e19211a0589187ccaa6.jpg",
    "https://static.vecteezy.com/system/resources/previews/000/107/464/non_2x/huge-doodle-vector-pack.jpg",
    "https://www.redbull.com/in-en/events/red-bull-doodle-art-india"
]
async function placeImages(arr){
    var i = 0;
    var j=0;
    arr.forEach((e)=>{
        if(i===5)
            j++;
        var folderName = "./images/folder"+j;
        if (!fs.existsSync(folderName)) {
            fs.mkdirSync(folderName);
        }     
        i++;
        const file = fs.createWriteStream('./images/folder'+j+'/image'+i);
        const request = https.get(e, (response) => {
        response.pipe(file);
      }
    ); 
    });
}

placeImages(arr);