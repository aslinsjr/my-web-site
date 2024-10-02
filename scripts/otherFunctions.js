const mainBanner = document.querySelector("#main-banner")

const textContent = document.querySelector(".text-content")

const contactMe = document.querySelector("#contact-text");

const body = document.querySelector("body")


function textTraduction() {
    const template = `<div class="text-content">
    <h1>Nice to meet you! <br>
    I'm <span id="text-decoration-h1">Alexandre Lins</span>.
    </h1>
    <p id="description">Based in Recife, i'm a front-end developer
    passionate about building accessible web apps and pages with modern and attractive desings!
    </p>
    </div>`;

    const parser = new DOMParser();
    const htmlTemplate = parser.parseFromString(template, "text/html");
    const traduction = htmlTemplate.querySelector(".text-content")


    setInterval(() => {
        mainBanner.replaceChild(traduction, textContent);
        contactMe.innerText = "Contact Me"
        setTimeout(() => {
            mainBanner.replaceChild(textContent, traduction);
            contactMe.innerText = "Fale comigo"
        }, 15000)
    }, 15000)

}

function scrollPage() {

    body.addEventListener("mousewheel", (e) => {

        if (e.deltaY < 0) {
            window.scrollTo(0, 0)
        }

        if (e.deltaY > 0) {
            window.scrollTo(0, 800)
        }
    })

    body.addEventListener("keyup", (e) => {

        if (e.key === "ArrowUp") {
            window.scrollTo(0, 0)
        }

        if (e.key === "ArrowDown") {
            window.scrollTo(0, 800)
        }
    })

    // body.addEventListener("touchend", (e) => {

    //     if(e.changedTouches[0].clientY > 400) {
    //         window.scrollTo(0,0)

    //         console.log(e.changedTouches[0].clientY)
    //     }

    //     if(e.changedTouches[0].clientY > 0 && e.changedTouches[0].clientY < 400) {
    //         window.scrollTo(0,800)

    //         console.log(e.changedTouches[0].clientY)
    //     }
    // })

}

scrollPage()

textTraduction()




