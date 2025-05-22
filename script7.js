const paragraphs = [
"APJ Abdul Kalam was the 11th president of India.  APJ Abdul Kalam is fondly remembered as the Missile Man of India because of his contribution to improving the defence of India in defence research and development organisation and ISRO. APJ Abdul Kalam was an aeronautical engineer who graduated from Madras Institute of Technology in the year 1960. In spite of being born in a poor family, APJ Abdul Kalam never gave up on his dream of becoming a scientist.",
"Life free from illness and ailment and living a reasonably long life span are indicative of a healthy life. Availability of pre and post natal health care facilities in order to reduce infant mortality and post delivery deaths among mothers, ld age health care, adequate nutrition and safety of individual are important measures of a healthy and reasonably long life. India has done reasonably well in some of the health indicators like decline in death rate from 25.1 per thousand in 1951 to 8.1 per thousand in 1999",
"Soil is the outermost layer of the Earth’s surface, which is the foundation of essential environmental functions. Drinkable underground water is also possible because the soil layer acts as a filter and a source of essential nutrients to that water. Soil also plays a significant role in regulating the Earth’s temperature to make it livable. A soil pollutant is an agent that degenerates the quality, composition, mineral quantity of the soil. There are two ways by which soil can get polluted: Natural and Anthropogenic.",
"Agriculture contributes to more than 15% of India’s GDP and has provided employment to millions of people in the country India is the second-highest producer of agricultural products in the world Agriculture forms over more than  70% of India’s export capacity Agriculture in India needs to be improved from its present state The building of dams, irrigation canals and technological infrastructure is necessary to improve the sector Data analytic tools and other such software should be used to improving agricultural techniques Agriculture leads to deforestation ",
"As a result of climate change, the occurrence of floods increased.Climate change is a detrimental result of deforestation, which allows temperatures to increase on the surface of the earth. Floods can take place naturally, or environmental factors that destroy the water flow can help to facilitate them. Three main flood types exist; Surge, River, and Pluvial. Usually, flooding is extreme and enormous. Heavy flooding causes disasters like tsunamis and storm uprisings.Surface-water due to excessive runoff causes pluvial inundations.",
"Indian economy is made up of the service sector, agriculture sector and manufacturing sector distributed across the length and breadth of the country. The service sector contributes more than 60% to the Indian GDP. The agriculture sector in the country provides the highest employment in rural India. Rs. 2.72 lakh crore is the total Gross Domestic Product (GDP) of India as of 2020. India has a population of 135 crore people and is the second-most populous country in the world after China. India is the largest producer of milk, pulses and jute in the whole world.",
];

const typingText = document.querySelector(".typing-text p")
const inpField = document.querySelector(".wrapper .input-field")
const tryAgainBtn = document.querySelector(".content button")
const timeTag = document.querySelector(".time span b")
const mistakeTag = document.querySelector(".mistake span")
const wpmTag = document.querySelector(".wpm span")
const cpmTag = document.querySelector(".cpm span")

let timer;
let maxTime = 60;
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

        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
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
        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
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