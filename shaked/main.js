// מתחילים משחק זיכרון.

// משימות להיום:
// 1. לבנות מערך של קלפים.
// 2. לבנות פונקציה שתערבב את המערך (להדפיס את המערך בסוף כש * מייצגת קלף נסתר)
// 3. פונקציה שתקבל 2 בחירות מהמשתמש ותבדוק אם הקלפים שנבחרו תואמים או לא.
//    במידה והם תואמים צריך להדפיס למסך את המערך שהקלפים שנבחרו גלויים במידה ולא,
// לזרוק התראה של המערך עם הקלפים גלויים אבל לא לשמור אותם בתור גלויים

// בתחילת המשחק הקלפים מסודרים על המסך כאשר הם הפוכים. בכל פעם שמריצים את התוכנית הכרטיסים מסודרים על המסך בסדר אחר.
// כאשר המשתתף לוחץ על קלף, הקלף מוצג, לאחר שהמשתתף לוחץ על שני קלפים מתבצעת בדיקה האם הם זהים.
// במידה והקלפים שונים זה מזה הקלפים יוצגו למשך 5 שניות ולאחר מכן יתהפכו חזרה.
// במידה והקלפים זהים הם ישארו מוצגים.
// בסיום המשחק המערכת תציג למשתמש בכמה סבבים הוא הצליח לפתור את המשחק.

const mainArray = [{ src: "assets/\watermelon.png", name: "watermelon" }, { src: "assets/\pineapple.png", name: "pineapple" }, { src: "assets/\strawberry.png", name: "strawberry" }, { src: "assets/\orange.png", name: "orange" }, { src: "assets/\lemon.png", name: "lemon" }];

function shuffle(firstArray) {
    let temp;
    for (let i = 0; i < firstArray.length * 2; i++) {
        let random1 = Math.floor(Math.random() * firstArray.length);
        let random2 = Math.floor(Math.random() * firstArray.length);
        temp = firstArray[random1];
        firstArray[random1] = firstArray[random2];
        firstArray[random2] = temp;
    }
    return firstArray;
}
const backImg = 'https://burst.shopifycdn.com/photos/pink-rose-on-pink.jpg?width=1000&format=pjpg&exif=0&iptc=0'

function init() {
    const boardElement = document.getElementsByClassName("board")[0];
    const shuffled = shuffle(mainArray.concat(mainArray));

    let count = 0;
    let arr = []
    shuffled.forEach((cardValue, index) => {
        const cardElement = document.createElement("div");
        cardElement.className = "card";
        cardElement.id = `${cardValue.name}-${index}`
        cardElement.innerText = cardValue.name
        const img = document.createElement('img')
        img.src = backImg
        cardElement.appendChild(img)
        boardElement.appendChild(cardElement);



        cardElement.onclick = (e) => {


            
            if (count < 2) {
                if ((count === 1) && (cardElement.id == arr[arr.length - 1].id)) {
                    return
                }
                img.src = cardValue.src
                arr.push(cardElement)
                count++;
            }
            if (count == 2) {
                if (arr[arr.length - 1].innerText == arr[arr.length - 2].innerText) {
                    console.log("yeyyyy");
                    if (arr.length == shuffled.length) {
                        console.log("Game Over!!!!");
                        return
                    }
                    count = 0
                }
                else {
                    console.log("bummer, try again");
                    setTimeout(() => {
                        count = 0
                        flipBack(arr)
                    }, 1000)


                }
            }
        }
    }
    );
}

init();

function flipBack(arr) {
    const first = arr.pop()
    const second = arr.pop()
    first.childNodes[1].src = backImg
    second.childNodes[1].src = backImg

}


function restart(e) {
    const boardElement = document.getElementsByClassName("board")[0];
    boardElement.innerHTML = ""
    init()
}

function timer(e){

}




