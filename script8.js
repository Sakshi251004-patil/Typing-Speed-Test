const paragraphs = [
    "MS Dhoni is one of the International cricket players in India. Dhoni was born on the 7th of July, 1981 in Bihar, India.The full name of MS Dhoni is Mahendra Singh Pansingh Dhoni.Dhoni always plays wearing Jersey with number 7. He got a special preference for his birth date and month.When Dhoni started his career in cricket, he was a great player of the Bihar Cricket Team. Then again, Dhoni joined the International Cricket team of India for Bangaladesh tour in the year 2004-05 Under the captaincy of MS Dhoni, India won the Cricket World Cup against Sri Lanka in the year 2011. Dhoni married Sakshi Singh Rawat on the 4th of July 2010.There was a film made in his life named ‘MS. Dhoni: The Untold Story’ A web-series named ‘The Roar of a Lion’ based on Dhoni’s life journey in cricket.",
"It is the 21st century and it goes without saying that equal rights should be given to both men and women in our society. Given the difference in sex ratio in the country, we can argue that gender equality has not been achieved in India so far. In many parts of the country, the gender of the baby is known before the delivery and hence parents decide to abort or kill the girl child.In socially and culturally backward societies, people tend to perceive girl child as a burden to take care of There are wrong assumptions and believes that it is the son who takes care of the family and not their daughter and hence female infanticide is high in backward areas of our country Government of India has conducted various programs that are implemented to promote save girl child campaign.",
"Water is the most precious element on Earth and it needs to be saved at all cost Without water, there would be no life on earth as we know it More than 70% of the surface of earth is covered by water. Only 3% of the entire water on the planet is freshwater which means only 3% of the entire water resource can be consumed Water is required for various purposes like agriculture, industries, domestic purposes like drinking baking and cooking Some of the major sources of freshwater are river water, lakes, groundwater and rainwater One of the most popular and easy ways to save water is rainwater harvesting There should be educational awareness campaigns on how to use water judiciously both on a domestic level and on a business level",
"Use a bucket for bathing instead of a shower, as it can save a lot of water. Turn off the tap while brushing and washing hands. Use it only when required.There should be no leakage in the toilets and bathrooms. If there is any, get it fixed immediately to save water.Turn off the tap while washing utensils.se less water for washing cars and other vehicles. Refrain from polluting water bodies. The high focus should be given on growing more drought-resistant trees and plants. Most noteworthy, many beautiful plants and trees thrive without irrigation. This would undoubtedly result in saving water.",
"The proverb ‘Knowledge is Power’ means that knowledge is the real power that stays with us throughout our lifeKnowledge bears great importance in our lifeKnowledge assists us to differentiate between right and wrong. It helps us overcome any situations and dangers around us It helps in the growth and development of one’s community or nation. Through the effective use of knowledge, one can achieve success life Knowledge impacts our personal development and influences our growth and relationship with work and life. With the help of knowledge, one can solve problems. It enhances our reasoning and problem-solving skills.ou",
"The value of time applies to every aspect of our life. In knowing the value of time, we understand the importance of our work. The value of time makes us realize what happens if we do not value it. Not valuing time can have disastrous consequences. Understanding the value of time creates a path for success. Time once lost can never be recovered and is hence termed to be precious. Understanding the value of time requires one to respect it. Respecting timelines is crucial for success in life.",
"In today’s society, we are all connected through technology; however, people can still feel lonely. We all need a friend on whom we can share feelings and rely on. Most importantly, we all need a friend that can help us in times of need. Furthermore, it is only during such times that we actually realise who our true friends are. Most of us have “fair-weather friends”, where we cannot rely on their friendship in times of difficulty. An individual is called a “true friend” when they provide unconditional love and care towards you. Other people may become friends just to receive something in exchange. These kinds of friends must be avoided as they may just waste our precious time and resources.",
"Kaveri is one of the major waterways of South India. It moves through Karnataka and Tamil Nadu. Kaveri River is the third biggest waterway after Krishna and Godavari.It is the most significant Tamil Nadu stream. Individuals are reliant on the Kaveri River for the water system. The river also helps in giving water to farming through different mediums. Kaveri River begins from Karnataka AND goes into Tamil Nadu. From that point, it falls into the Bay of Bengal, making a productive and delta locale of the nation. The delta offers a lift to the farming segment in the zone.",
"Diwali or Deepavali is an Indian religious festival It is the victory of good over evil People celebrate Diwali across the world for different reasons and occasions The lighting of diyaas, candles and bursting of crackers is a part of Diwali celebrations Diwali or Deepavali is celebrated not only in among Hindu community but also by people of other religions Diwali is usually a five-day festival and the sale of gold and new clothes during this time skyrockets every year in India. According to the Hindu calendar, Diwali is celebrated on the 15th day of Kartik According to the English calendar, it is usually celebrated in the month of October or November",
];

const typingText = document.querySelector(".typing-text p")
const inpField = document.querySelector(".wrapper .input-field")
const tryAgainBtn = document.querySelector(".content button")
const timeTag = document.querySelector(".time span b")
const mistakeTag = document.querySelector(".mistake span")
const wpmTag = document.querySelector(".wpm span")
const cpmTag = document.querySelector(".cpm span")

let timer;
let maxTime = 70;
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

        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 70);
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
        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 70);
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