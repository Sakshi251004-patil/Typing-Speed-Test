const paragraphs = [
    "Once upon a time, there was a Greek King, Midas. He was very rich and had lots of Gold. He had a daughter, who he loved a lot. One day, Midas found an angel in need of help. He helped her and in return she agreed to grant a wish. Midas wished that everything he touched would turn into gold. His wish was granted On his way home, he touched rocks and plants and they turned into gold. As he reached home, in excitement he hugged his daughter, who turned into gold. Midas was devastated and he had learnt his lesson. Upon learning his lesson, Midas asked the angel to take his wish away.",
"A farmer asked his son to take their herd of sheep grazing every day While the boy watched over the sheep, he got bored and decided to have some fun. So, he shouted, “Wolf! Wolf!”. Upon hearing this the villagers ran to help him chase the Wolf away. As they reached him, they realized that there was no Wolf and he was just kidding. The villagers were furious and they yelled at the boy for creating chaos and panic.On the next day and the boy shouted “Wolf!” again and once again the villagers came to help him and saw that there was no wolf. This made them very angry again. On the same day, the boy saw an actual Wolf that has terrorizing the sheep. The boy cried “Wolf! Wolf! please help me” and no villagers showed up as they believed that the boy was joking again.",
"The three pigs, all decided to build a house on their own. The first pig built a house of straw because he didn't want to put in a lot of effort and was lazy. The second pig was a little less lazy than the first and he made a house of sticks. The third pig was hardworking and he put in lots of effort and built a house of brick and stone. One day a wolf came to attack them. He huffed and puffed and blew the house of straw. He then huffed and puffed and blew the house the sticks. He huffed and puffed and huffed and puffed at the house of bricks but eventually was out of breath and left. Moral of the story Always work hard and it will pay off. Don’t try to take shortcuts to make things work.",
"The ant and the grasshopper were best friends with very different personalities. The grasshopper would spend his days sleeping or playing his guitar while the ant would collect food and build his ant hill.  Every now and then, the grasshopper would tell the ant to take a break. However, the ant would refuse and continue to complete his work. Soon winter came making the days and nights cold. One day the colony of ants were busy trying to dry some grains of corn. The grasshopper who was extremely weak and hungry came up to the ants and asked Can you please give me a piece of corn? the ant replied We worked hard for this corn all summer while you relaxed, why should we give it to you? The grasshopper was so busy singing and sleeping  that he didn't have enough food to last winter. The grasshopper realized his mistake.",
"This is a story from Panchatantra. A monkey lived on a berry tree on the River Bank. Once he saw a crocodile under the tree who looked hungry and tired. He gave the crocodile some berries, the crocodile thanked the monkey and became one of his friends.  The monkey would give berries to the crocodile every day. One day the monkey even gave the crocodile extra berries to take to his wife. His wife enjoyed the berries but told her husband that she wanted to eat the monkey's heart. She was a wicked and cunning woman. The crocodile was upset, but he decided that he needed to make his wife happy. On the next day, the crocodile went to the monkey and said that his wife had called him for dinner. The crocodile carried the monkey on his back across the river. He told this monkey his wife's plan.  The monkey had to think quickly if he wanted to save himself. He told the crocodile that he left his heart at on the berry tree and that they needed to return. On reaching the monkey climbed the tree and spoke. I'm not getting down; you betrayed my trust and that means our friendship is over",
"One day, a wealthy man came to Akbar's court in hope to get help from Birbal. The man suspected that one of his servants had stolen from him. The clever Birbal thought of a plan and gave all the merchant’s servants sticks of the same length. He also told them that the stick will grow three inches by tomorrow if they were the thief. The next day, all the servants gathered around Birbal. He noticed that one of the servant’s sticks was three inches shorter than the others. Birbal immediately understood who the thief was. The thief had cut the stick shorter by three inches as he thought it would grow three inches. Because of this his guilt was proven",
"An old Stork lived on the side of a fish pond. He was too old to fish any longer, and he had to come up with an idea for food. Suddenly, he had a great idea. He stood in the water with a sad face. A crab came up to him and ask him why he was so unhappy. The Stork said I've heard that this pond is going to dry up soon and now I have to fly away to another pond.Concerned, the crab asked the stork to save the animals in the pond as well. He would take a couple of fish in his beak and fly away towards another pond. Once he would reach far out of sight the pond, he would eat them. He did this many times. Now it was the crab’s turn. As they were flying the crab looked down but could not see a pond however he saw a lot of fish bones. The crab immediately realized what was happening and grabbed the stork’s throat tight with his sharp claws. The stork struggled to get free. But the crab held on. Soon the stork fell to the ground. The crab crawled back to his pond to tell the story to the rest of the pond creatures.",
"Once two close friends were passing through a Jungle. One was fat and the other was thin. When both reached the middle of the Jungle. Suddenly they saw a bear coming towards them. The thin friends climbed a tree but the fat one could not climb. So, he lay on the ground like a dead body. The bear came and heard him. It saw the lying body. It sniffed at the ear of the fat boy and went away. The thin friend got down from the tree. He asked the fat boy what the bear told in his ears. The fat friend said that he was saying be aware of selfish friends.",
"Once upon a time, there was a big Lion in the forest. He would get an animal every day for his meal. One day it was the time for a hare to go to the Lion for his meal. The hare was very clever. He reached a little late. The Lion roared and asked the reason for his late coming. The hare said that in the way. He met another lion. He was stronger. The big lion becomes very angry. He accompanied the hare to see the other lion. The hare told him to look into a well. The Lion looked in. He saw his own shadow. He jumped into the well and died.",
];

const typingText = document.querySelector(".typing-text p")
const inpField = document.querySelector(".wrapper .input-field")
const tryAgainBtn = document.querySelector(".content button")
const timeTag = document.querySelector(".time span b")
const mistakeTag = document.querySelector(".mistake span")
const wpmTag = document.querySelector(".wpm span")
const cpmTag = document.querySelector(".cpm span")

let timer;
let maxTime = 120;
let timeLeft = maxTime;
let charIndex = mistakes = isTyping = 0;

function loadParagraph() {
    const ranIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML = "";
    paragraphs[ranIndex].split("").forEach(char => {
        console.log(char);
        let span = `<span>${char}</span>`
        typingText.innerHTML += span;
    });
    typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());
}

function initTyping() {
    let characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];
    if (charIndex < characters.length - 0 && timeLeft > 0) {
        if (!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }
        if (typedChar == null) {
            if (charIndex > 0) {
                charIndex--;
                if (characters[charIndex].classList.contains("incorrect")) {
                    mistakes--;
                }
                characters[charIndex].classList.remove("correct", "incorrect");
            }
        } else {
            if (characters[charIndex].innerText == typedChar) {
                characters[charIndex].classList.add("correct");
            } else {
                mistakes++;
                characters[charIndex].classList.add("incorrect");
            }
            charIndex++;
        }
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");

        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 120);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0: wpm;

        wpmTag.innerText = wpm;
        mistakeTag.innerText = mistakes;
        cpmTag.innerText = charIndex - mistakes;
    } else {
        clearInterval(timer);
        inpField.value = "";
    }
}

function initTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 120);
        wpmTag.innerText = wpm;
    } else {
        clearInterval(timer);
    }
}

function resetGame() {
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = mistakes = isTyping = 0;
    inpField.value = "";
    timeTag.innerText = timeLeft;
    wpmTag.innerText = 0;
    mistakeTag.innerText = 0;
    cpmTag.innerText = 0;
}

loadParagraph();
inpField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click", resetGame);