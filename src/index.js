const messages = [
    "Brandux",
    "Didier",
    "Carlos",
    "Miguel"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)]
    console.log(message);
}; 

module.exports = {randomMsg};