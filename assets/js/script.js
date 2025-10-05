
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

function CreateCharacter(dados) {
    const character = document.createElement("img")
    character.classList.add("character")
    character.src = dados.stop
    return character
}

const bodySize = {
    width: window.outerWidth,
    height: window.outerHeight
}




const background = document.querySelector(".background")
const characterList = document.querySelector(".characterList")
const body = document.querySelector("body")

const Maps = ["/mapas/mapa-01.gif", "/mapas/mapa-02.gif", "/mapas/mapa-03.gif"];
const random = Math.floor(Math.random() * Maps.length)
background.src = Maps[random]

const position = { top: (bodySize.height - 60), left: 0 }




const Characters = [
    {
        id: 1,
        name: "Capitão america",
        class: "male",
        attack: "/personagens/personagem-01/attack.gif" || false,
        stop: "/personagens/personagem-01/stop.gif" || false,
        walk: "/personagens/personagem-01/walk.gif" || false,
        jump: "/personagens/personagem-01/jump.gif"
    },
    {
        id: 2,
        name: "Ciclope",
        class: "male",
        attack: "/personagens/personagem-02/attack.gif" || false,
        stop: "/personagens/personagem-02/stop.gif" || false,
        walk: "/personagens/personagem-02/walk.gif" || false,
        jump: "/personagens/personagem-02/jump-attack.gif" || false
    },
    {
        id: 3,
        name: "Doutor Destino",
        class: "upper",
        attack: "/personagens/personagem-03/attack.gif" || false,
        stop: "/personagens/personagem-03/stop.gif" || false,
        walk: "/personagens/personagem-03/walk.gif" || false,
        jump: "/personagens/personagem-03/jump-attack.gif" || false
    },
    {
        id: 4,
        name: "Wolverine",
        class: "male",
        attack: "/personagens/personagem-04/attack.gif" || false,
        stop: "/personagens/personagem-04/stop.gif" || false,
        walk: "/personagens/personagem-04/walk.gif" || false,
        jump: "/personagens/personagem-04/jump-attack.gif"
    },
    {
        id: 5,
        name: "Hulk",
        class: "upper",
        attack: "/personagens/personagem-05/attack.gif" || false,
        stop: "/personagens/personagem-05/stop.gif" || false,
        walk: "/personagens/personagem-05/walk.gif" || false,
        jump: "/personagens/personagem-05/jump.gif" || false,
    },
    {
        id: 6,
        name: "Homem de Ferro",
        class: "male",
        attack: "/personagens/personagem-06/attack.gif" || false,
        stop: "/personagens/personagem-06/stop.gif" || false,
        walk: "/personagens/personagem-06/walk.gif" || false,
        jump: "/personagens/personagem-06/jump.gif" || false,
    },
    {
        id: 7,
        name: "Magneto",
        class: "upper",
        attack: "/personagens/personagem-07/attack.gif" || false,
        stop: "/personagens/personagem-07/stop.gif" || false,
        walk: "/personagens/personagem-07/walk.gif" || false,
        jump: "/personagens/personagem-07/jump.gif" || false,
    },
    {
        id: 8,
        name: "Psylocke",
        class: "female",
        attack: "/personagens/personagem-08/attack.gif" || false,
        stop: "/personagens/personagem-08/stop.gif" || false,
        walk: "/personagens/personagem-08/walk.gif" || false,
        jump: "/personagens/personagem-08/jump.gif" || false,
    },
    {
        id: 9,
        name: "Vampira",
        class: "female",
        attack: "/personagens/personagem-09/attack.gif" || false,
        stop: "/personagens/personagem-09/stop.gif" || false,
        walk: "/personagens/personagem-09/walk.gif" || false,
        jump: "/personagens/personagem-09/jump.gif" || false,
    },
    {
        id: 10,
        name: "Homem-Aranha",
        class: "male",
        stop: "/personagens/personagem-10/stop.gif" || false,
        walk: "/personagens/personagem-10/walk.gif" || false,
        jump: "/personagens/personagem-10/jump-attack.gif" || false
    },
    {
        id: 11,
        name: "Tempestade",
        class: "female",
        attack: "/personagens/personagem-11/attack.gif" || false,
        stop: "/personagens/personagem-11/stop.gif" || false,
        walk: "/personagens/personagem-11/walk.gif" || false,
        jump: "/personagens/personagem-11/jump.gif" || false,
    },
    {
        id: 12,
        name: "Venom",
        class: "upper",
        stop: "/personagens/personagem-12/stop.gif" || false,
        walk: "/personagens/personagem-12/walk.gif" || false,
        jump: "/personagens/personagem-12/jump.gif" || false,
    },

];

Characters.forEach(Character => {
    const Card = card(Character)

    characterList.appendChild(Card)

    const CardButton = Card.querySelector("button")


    CardButton.addEventListener("click", () => {
        
        const MyCharacter = CreateCharacter(Character)
        setTimeout(() => {
            characterList.remove();
            body.appendChild(MyCharacter)
            MyCharacter.style.top = position.top + "px"
        }, 2000)

        document.addEventListener("keydown", ({ key }) => {
            position.top = Math.max(0, Math.min((bodySize.height - 50), position.top));
            position.left = Math.max(0, Math.min(bodySize.width, position.left));
            let interval = null;
            let jumping = false;
  if (!jumping && (key === "ArrowUp" || key === "w")) {
        jumping = true;
        MyCharacter.src = Character.jump;
        let subindo = true;

        const jumpInterval = setInterval(() => {
            if (subindo) {
                position.top -= 20; // sobe
                position.left = MyCharacter.style.transform == "scaleX(1)"? position.left +  15:position.left - 15 ; // opcional para deslocamento
                if (position.top <= 450) subindo = false; // altura máxima
            } else {
                position.top += 15; // desce
                 position.left = MyCharacter.style.transform == "scaleX(1)"? position.left +  15:position.left - 15 ; // opcional para deslocamento
                if (position.top >= bodySize.height - 50) {
                    position.top = bodySize.height - 50; // garante chão
                    MyCharacter.src = Character.stop;
                    clearInterval(jumpInterval);
                    jumping = false;
                }
            }

            MyCharacter.style.top = position.top + "px";
            MyCharacter.style.left = position.left + "px";
        }, 50); // intervalo pequeno = movimento suave
    }
            else if (key == "ArrowLeft" || key == "a") {

                position.left -= 10
                MyCharacter.style.left = position.left + "px"
                MyCharacter.style.transform = "scaleX(-1)"
                if (!MyCharacter.src.includes(Character.walk)) {
                    MyCharacter.src = Character.walk
                }

            }
            else if (key == "ArrowRight" || key == "d") {

                position.left += 10

                MyCharacter.style.left = position.left + "px"

                MyCharacter.style.transform = "scaleX(1)"
                if (!MyCharacter.src.includes(Character.walk)) {
                    MyCharacter.src = Character.walk
                }
            }
            else if (key == "f") {
                if (Character.attack) {
                    if (!MyCharacter.src.includes(Character.attack)) {
                        MyCharacter.src = Character.attack
                    }
                }
            }

            document.addEventListener("keyup", ({ key }) => {
                if (key == "ArrowLeft" || key == "a") {
                    MyCharacter.src = Character.stop
                    clearInterval(interval)
                }
                else if (key == "ArrowRight" || key == "d") {
                    MyCharacter.src = Character.stop
                    clearInterval(interval)

                }
            })

        })



    })
})

