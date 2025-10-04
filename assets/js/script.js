function card(data) {
    const card = document.createElement("div")
    const personagemInfo = {
        img: document.createElement("img"),
        name: document.createElement("button")
    }

    card.classList.add("card")

    personagemInfo.img.src = data.stop
    personagemInfo.name.innerText = data.name

    card.appendChild(personagemInfo.img)
    card.appendChild(personagemInfo.name)

    return card
}

const bodySize = {
    width: window.innerWidth,
    height: window.innerHeight
}

const hero = {
    name: "",
    attack: "",
    jump: "",
    stop: "",
    jumpAttack: "",
    walk: ""
}

function Personagem(action) {
    const Action = document.createElement("img")
    Action.classList.add("personagem")
    Action.src = action
    return Action
}

const background = document.querySelector(".background")
const Mapas = ["/mapas/mapa-01.gif", "/mapas/mapa-02.gif", "/mapas/mapa-03.gif"];
const random = Math.floor(Math.random() * Mapas.length)
background.src = Mapas[random]


const posicao = { top: 0, left: 0 }
console.log(bodySize.height)
for (let c = 0; c < bodySize.height; c++) {
    posicao.top += c

}
if (document.querySelector(".persongem")) {
    document.querySelector(".personagem").style.top = posicao.top = "px"
}


const Personagens = [
    {
        id: 1,
        name: "Capitão america",
        attack: "/personagens/personagem-01/attack.gif" || false,
        stop: "/personagens/personagem-01/stop.gif" || false,
        walk: "/personagens/personagem-01/walk.gif" || false,
    },
    {
        id: 2,
        name: "Ciclope",
        attack: "/personagens/personagem-02/attack.gif" || false,
        stop: "/personagens/personagem-02/stop.gif" || false,
        walk: "/personagens/personagem-02/walk.gif" || false,
        jumpAttack: "/personagens/personagem-02/jump-attack.gif" || false
    },
    {
        id: 3,
        name: "Doutor Destino",
        attack: "/personagens/personagem-03/attack.gif" || false,
        stop: "/personagens/personagem-03/stop.gif" || false,
        walk: "/personagens/personagem-03/walk.gif" || false,
        jumpAttack: "/personagens/personagem-03/jump-attack.gif" || false
    },
    {
        id: 4,
        name: "Gambit",
        attack: "/personagens/personagem-04/attack.gif" || false,
        stop: "/personagens/personagem-04/stop.gif" || false,
        walk: "/personagens/personagem-04/walk.gif" || false,
    },
    {
        id: 5,
        name: "Hulk",
        attack: "/personagens/personagem-05/attack.gif" || false,
        stop: "/personagens/personagem-05/stop.gif" || false,
        walk: "/personagens/personagem-05/walk.gif" || false,
        jump: "/personagens/personagem-05/jump.gif" || false,
    },
    {
        id: 6,
        name: "Homem de Ferro",
        attack: "/personagens/personagem-06/attack.gif" || false,
        stop: "/personagens/personagem-06/stop.gif" || false,
        walk: "/personagens/personagem-06/walk.gif" || false,
        jump: "/personagens/personagem-06/jump.gif" || false,
    },
    {
        id: 7,
        name: "Magneto",
        attack: "/personagens/personagem-07/attack.gif" || false,
        stop: "/personagens/personagem-07/stop.gif" || false,
        walk: "/personagens/personagem-07/walk.gif" || false,
        jump: "/personagens/personagem-07/jump.gif" || false,
    },
    {
        id: 8,
        name: "Psylocke",
        attack: "/personagens/personagem-08/attack.gif" || false,
        stop: "/personagens/personagem-08/stop.gif" || false,
        walk: "/personagens/personagem-08/walk.gif" || false,
        jump: "/personagens/personagem-08/jump.gif" || false,
    },
    {
        id: 9,
        name: "Vampira",
        attack: "/personagens/personagem-09/attack.gif" || false,
        stop: "/personagens/personagem-09/stop.gif" || false,
        walk: "/personagens/personagem-09/walk.gif" || false,
        jump: "/personagens/personagem-09/jump.gif" || false,
    },
    {
        id: 10,
        name: "Homem-Aranha",
        stop: "/personagens/personagem-10/stop.gif" || false,
        walk: "/personagens/personagem-10/walk.gif" || false,
        jumpAttack: "/personagens/personagem-10/jump-attack.gif" || false
    },
    {
        id: 11,
        name: "Tempestade",
        attack: "/personagens/personagem-11/attack.gif" || false,
        stop: "/personagens/personagem-11/stop.gif" || false,
        walk: "/personagens/personagem-11/walk.gif" || false,
        jump: "/personagens/personagem-11/jump.gif" || false,
    },
    {
        id: 12,
        name: "Venom",
        stop: "/personagens/personagem-12/stop.gif" || false,
        walk: "/personagens/personagem-12/walk.gif" || false,
        jump: "/personagens/personagem-12/jump.gif" || false,
    },
    {
        id: 13,
        name: "Wolverine",
        attack: "/personagens/personagem-13/attack.gif" || false,
        stop: "/personagens/personagem-13/stop.gif" || false,
        walk: "/personagens/personagem-13/walk.gif" || false,
        jumpAttack: "/personagens/personagem-13/jump-attack.gif" || false
    }
];




const container = document.querySelector(".personagens")
Personagens.forEach(personagem => {
    const Card = card(personagem)
    container.appendChild(Card)

    Card.querySelector("button").addEventListener("click", () => {
        // Atualiza o herói
        hero.name = personagem.name
        hero.attack = personagem.attack
        hero.jump = personagem.jump
        hero.jumpAttack = personagem.jumpAttack
        hero.stop = personagem.stop
        hero.walk = personagem.walk

        // Cria personagem na tela
        let personagemImg
        if (hero.stop != "") personagemImg = Personagem(hero.stop)

        // Remove qualquer personagem antigo
        const antigo = document.querySelector(".personagem")
        if (antigo) antigo.remove()

        // Adiciona personagem e esconde menu após 2s
        setTimeout(() => {
            document.querySelector(".menu").style.display = "none"
            document.body.appendChild(personagemImg)
        }, 2000)

        personagemImg.style.top = `${posicao.top}px`
        document.addEventListener("keydown", (event) => {
            const tecla = event.key;

            if (tecla === "ArrowUp") {
                // Evita múltiplos pulos ao mesmo tempo
                if (personagemImg.classList.contains("pulando")) return;
                personagemImg.classList.add("pulando");

                personagemImg.src = hero.jump || hero.jumpAttack || hero.stop;

                let alturaInicial = posicao.top;
                let alturaMaxima = alturaInicial - 150; // quanto sobe

                // Subida
                const subindo = setInterval(() => {
                    posicao.top -= 20;
                    posicao.left += 10
                    if (posicao.top <= alturaMaxima) {
                        clearInterval(subindo);

                        // Queda
                        const caindo = setInterval(() => {
                            posicao.top += 20;
                            posicao.left += 10
                            personagemImg.style.top = `${posicao.top}px`;

                            if (posicao.top >= alturaInicial) {
                                posicao.top = alturaInicial; // volta ao chão
                                personagemImg.style.top = `${posicao.top}px`;
                                personagemImg.src = hero.stop;
                                personagemImg.classList.remove("pulando");
                                clearInterval(caindo);
                            }
                        }, 50);
                    }

                    personagemImg.style.top = `${posicao.top}px`;
                    personagemImg.style.left = `${posicao.left}px`;
                }, 50);
            }

            else if (tecla === "ArrowLeft") {
                posicao.left -= 10;
    if (!personagemImg.src.includes(hero.walk)) {
        personagemImg.src = hero.walk;
    }
                personagemImg.style.transform = "scaleX(-1)";
            }
            else if (tecla === "ArrowRight") {
                posicao.left += 10;
    if (!personagemImg.src.includes(hero.walk)) {
        personagemImg.src = hero.walk;
    }
                personagemImg.style.transform = "scaleX(1)";
            }
            else if (tecla == "f"){
                personagemImg.src = hero.attack?hero.attack: hero.walk
            }

            // Mantém dentro da tela
            posicao.top = Math.max(0, Math.min(posicao.top, bodySize.height - personagemImg.offsetHeight));
            posicao.left = Math.max(0, Math.min(posicao.left, bodySize.width - personagemImg.offsetWidth));

            personagemImg.style.top = `${posicao.top}px`;
            personagemImg.style.left = `${posicao.left}px`;
        });

    })
})
