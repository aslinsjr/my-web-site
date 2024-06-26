const projectsData = [
    {
        name: "Click App",
        id: 1,
        image: "https://raw.githubusercontent.com/aslinsjr/clicker-app/main/public/FireShot%20Capture.png",
        page: "https://clicker-app-zeta.vercel.app/",
        repo: "https://github.com/aslinsjr/clicker-app",
    },
    {
        name: "Image Gallery",
        id: 2,
        image: "https://raw.githubusercontent.com/aslinsjr/image-gallery-app/main/public/FireShot%20Capture%20024.png",
        page: "https://image-gallery-app-roan.vercel.app/",
        repo: "https://github.com/aslinsjr/image-gallery-app",
    },
    {
        name: "Age Calculator App",
        id: 3,
        image: "https://raw.githubusercontent.com/aslinsjr/age-calculator-app-main/main/assets/images/FireShot%20Capture%20001%20-%20Frontend%20Mentor%20-%20Age%20calculator%20app%20-%20127.0.0.7.png",
        page: "https://aslinsjr.github.io/age-calculator-app-main/",
        repo: "https://github.com/aslinsjr/age-calculator-app-main",
    },
    {
        name: "User Feed App",
        id: 4,
        image: "https://raw.githubusercontent.com/aslinsjr/user-feed-app/main/public/FireShot%20Capture.png",
        page: "https://user-feed-app.vercel.app/",
        repo: "https://github.com/aslinsjr/user-feed-app",
    },
    {
        name: "Gerador de Senhas Seguras",
        id: 5,
        image: "https://raw.githubusercontent.com/aslinsjr/gerador-de-senhas/main/img/FireShot%20Capture%20027%20-%20Password%20Generator.png",
        page: "https://aslinsjr.github.io/gerador-de-senhas/",
        repo: "https://github.com/aslinsjr/gerador-de-senhas",
    },
    {
        name: "Todo App",
        id: 6,
        image: "https://raw.githubusercontent.com/aslinsjr/todo-app-main/main/images/sreen.png",
        page: "https://aslinsjr.github.io/todo-app-main/",
        repo: "https://github.com/aslinsjr/todo-app-main",
    },
    {
        name: "Clipboard Landing Page",
        id: 7,
        image: "https://raw.githubusercontent.com/aslinsjr/clipboard-landing-page-master/main/images/screenshot.png",
        page: "https://aslinsjr.github.io/clipboard-landing-page-master/",
        repo: "https://github.com/aslinsjr/clipboard-landing-page-master",
    },
    {
        name: "Digital Clock",
        id: 8,
        image: "https://raw.githubusercontent.com/aslinsjr/digital-clock/main/public/FireShot%20Capture.png",
        page: "https://digital-clock-theta-gules.vercel.app/",
        repo: "https://github.com/aslinsjr/digital-clock",
    },
    {
        name: "News Homepage",
        id: 9,
        image: "https://raw.githubusercontent.com/aslinsjr/news-homepage-main/main/assets/images/FireShot%20Capture%20003%20-%20Frontend%20Mentor%20-%20News%20homepage%20-%20127.0.0.7.png",
        page: "https://aslinsjr.github.io/news-homepage-main/",
        repo: "https://github.com/aslinsjr/news-homepage-main",
    },
    {
        name: "Jogo da Memória",
        id: 10,
        image: "https://raw.githubusercontent.com/aslinsjr/jogo-da-memoria/main/img/FireShot%20Capture%20026.png",
        page: "https://aslinsjr.github.io/jogo-da-memoria/",
        repo: "https://github.com/aslinsjr/jogo-da-memoria",
    },
]

const mainBanner = document.querySelector("#main-banner")

const textContent = document.querySelector(".text-content")

const contactMe = document.querySelector("#contact-text");


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
        }, 9000)
    }, 18000)

}

textTraduction()

const showingImg = document.querySelector("#showing-img");
const projectTitle= document.querySelector("#project-title");
const repoProject = document.querySelector("#repo-project");
const pageProject = document.querySelector("#page-project");

let id = 0;

showingImg.src = projectsData[id].image
projectTitle.innerHTML = projectsData[id].name
repoProject.href = projectsData[id].repo
pageProject.href = projectsData[id].page

const navBtns = document.querySelectorAll(".bi")


navBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if(e.target.id === "right-btn") {

            if(id < 10) {
                id = id + 1

                showingImg.src = projectsData[id].image
                projectTitle.innerHTML = projectsData[id].name
                repoProject.href = projectsData[id].repo
                pageProject.href = projectsData[id].page
            }
        }
        
        if(e.target.id === "left-btn") {

            if(id >= 1) {
                id = id - 1

                showingImg.src = projectsData[id].image
                projectTitle.innerHTML = projectsData[id].name
                repoProject.href = projectsData[id].repo
                pageProject.href = projectsData[id].page
            }
        }
    })
})



