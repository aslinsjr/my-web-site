const projectsData = [
    {
        name: "Click App",
        id: 1,
        image: "https://raw.githubusercontent.com/aslinsjr/clicker-app/main/public/FireShot%20Capture.png",
        page: "https://clicker-app-zeta.vercel.app/",
        repo: "https://github.com/aslinsjr/clicker-app",
        language: "react"
    },
    {
        name: "Image Gallery",
        id: 2,
        image: "https://raw.githubusercontent.com/aslinsjr/image-gallery-app/main/public/FireShot%20Capture%20024.png",
        page: "https://image-gallery-app-roan.vercel.app/",
        repo: "https://github.com/aslinsjr/image-gallery-app",
        language: "react"
    },
    {
        name: "Age Calculator App",
        id: 3,
        image: "https://raw.githubusercontent.com/aslinsjr/age-calculator-app-main/main/assets/images/FireShot%20Capture%20001%20-%20Frontend%20Mentor%20-%20Age%20calculator%20app%20-%20127.0.0.7.png",
        page: "https://aslinsjr.github.io/age-calculator-app-main/",
        repo: "https://github.com/aslinsjr/age-calculator-app-main",
        language: "javascript"
    },
    {
        name: "User Feed App",
        id: 4,
        image: "https://raw.githubusercontent.com/aslinsjr/user-feed-app/main/public/FireShot%20Capture.png",
        page: "https://user-feed-app.vercel.app/",
        repo: "https://github.com/aslinsjr/user-feed-app",
        language: "react"
    },
    {
        name: "Gerador de Senhas Seguras",
        id: 5,
        image: "https://raw.githubusercontent.com/aslinsjr/gerador-de-senhas/main/img/FireShot%20Capture%20027%20-%20Password%20Generator.png",
        page: "https://aslinsjr.github.io/gerador-de-senhas/",
        repo: "https://github.com/aslinsjr/gerador-de-senhas",
        language: "javascript"
    },
    {
        name: "Todo App",
        id: 6,
        image: "https://raw.githubusercontent.com/aslinsjr/todo-app-main/main/images/sreen.png",
        page: "https://aslinsjr.github.io/todo-app-main/",
        repo: "https://github.com/aslinsjr/todo-app-main",
        language: "javascript"
    },
    {
        name: "Clipboard Landing Page",
        id: 7,
        image: "https://raw.githubusercontent.com/aslinsjr/clipboard-landing-page-master/main/images/screenshot.png",
        page: "https://aslinsjr.github.io/clipboard-landing-page-master/",
        repo: "https://github.com/aslinsjr/clipboard-landing-page-master",
        language: "javascript"
    },
    {
        name: "Digital Clock",
        id: 8,
        image: "https://raw.githubusercontent.com/aslinsjr/digital-clock/main/public/FireShot%20Capture.png",
        page: "https://digital-clock-theta-gules.vercel.app/",
        repo: "https://github.com/aslinsjr/digital-clock",
        language: "react"
    },
    {
        name: "News Homepage",
        id: 9,
        image: "https://raw.githubusercontent.com/aslinsjr/news-homepage-main/main/assets/images/FireShot%20Capture%20003%20-%20Frontend%20Mentor%20-%20News%20homepage%20-%20127.0.0.7.png",
        page: "https://aslinsjr.github.io/news-homepage-main/",
        repo: "https://github.com/aslinsjr/news-homepage-main",
        language: "javascript"
    },
    {
        name: "Jogo da Memória",
        id: 10,
        image: "https://raw.githubusercontent.com/aslinsjr/jogo-da-memoria/main/img/FireShot%20Capture%20026.png",
        page: "https://aslinsjr.github.io/jogo-da-memoria/",
        repo: "https://github.com/aslinsjr/jogo-da-memoria",
        language: "javascript"
    },
    {
        name: "Bootcamp Testimonials Slider",
        id: 11,
        image: "https://raw.githubusercontent.com/aslinsjr/bootcamp-testimonials-slider/refs/heads/master/public/screenshoot.png",
        page: "https://bootcamp-testimonials-slider-alpha.vercel.app/",
        repo: "https://github.com/aslinsjr/bootcamp-testimonials-slider",
        language: "angular"
    },
    {
        name: "Programa Quiz",
        id: 12,
        image: "https://raw.githubusercontent.com/aslinsjr/quiz-solo/refs/heads/main/img/screenshot.png",
        page: "https://aslinsjr.github.io/quiz-solo/",
        repo: "https://github.com/aslinsjr/quiz-solo",
        language: "javascript"
    },
]

const mainBanner = document.querySelector("#main-banner")

const textContent = document.querySelector(".text-content")

const contactMe = document.querySelector("#contact-text");

const showingImg = document.querySelector(".showing-img")

const showContainer = document.querySelector(".show-container")

const body = document.querySelector("body")

const contactMeContainer = document.querySelector("#contact-me")


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

function showingProjects() {
    projectsData.forEach((project) => {

        const templateProjectBtn = `<a href=${project.repo} class="project-btn" target="_blank">
                        <h3 id="project-title">${project.name}</h3>
                        <img src="img/${project.language}-icon.png" alt="" ${project.language === "react" || project.language === "angular" ? 'style= "border-radius: 50%; display: flex; align-itens: center; justify-content: center; padding: 0.4rem"' : ""}>
                    </a>`

        const parser = new DOMParser();
        const htmlTemplate = parser.parseFromString(templateProjectBtn, "text/html");
        const projectBtn = htmlTemplate.querySelector(".project-btn")

        showContainer.appendChild(projectBtn)

        if(window.screen.width <= 600) {

            console.log(window.screen.width)

        } else {
            projectBtn.addEventListener("mouseenter", () => {

                const projectsBtn = document.querySelectorAll(".project-btn")
    
                projectsBtn.forEach((element) => {
                    element.style.opacity = "0"
                })
    
                projectBtn.style.opacity = "0.8"
    
                showingImg.src = project.image
    
                showingImg.style.display = "flex"
    
                projectBtn.style.border = "1px solid black"
    
                contactMeContainer.style.display = "none"
    
            })
    
            projectBtn.addEventListener("mouseleave", () => {
    
                const projectsBtn = document.querySelectorAll(".project-btn")
    
                projectsBtn.forEach((element) => {
                    element.style.opacity = "0.8"
                })
    
                showingImg.style.display = "none"
    
                projectBtn.style.border = "none"
    
                contactMeContainer.style.display = "flex"
    
            })
        }

    })
}

function scrollPage() {

    body.addEventListener("mousewheel", (e) => {

        if(e.deltaY < 0) {
            window.scrollTo(0,0)
        }
    
        if(e.deltaY > 0) {
            window.scrollTo(0,800)
        }
    })
    
    body.addEventListener("keyup", (e) => {
    
        if(e.key === "ArrowUp") {
            window.scrollTo(0,0)
        }
    
        if(e.key === "ArrowDown") {
            window.scrollTo(0,800)
        }
    })

}

scrollPage()

textTraduction()

showingProjects()

console.log()





