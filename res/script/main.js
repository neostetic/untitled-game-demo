let fonts = ["Handrawnmw1", "Handrawnmw2", "Handrawnmw3"]
let fontSpeedChange = 200;
let questionsDelay = 400;
let questionsBlockDelay = 1000;
let questionsBlockAnimationDelay = 200;

let onLoadHelp = 0;
const onLoadFunction = async () => {
    for (let i = 0; i < fonts.length; i = (i+1)%3) {
        document.documentElement.style.setProperty('--font', fonts[i]);
        await sleep(fontSpeedChange);
        if (onLoadHelp === 0) {
            playStory(questions.question01);
            onLoadHelp++;
        }
    }

};

const sleep = ms => new Promise(r => setTimeout(r, ms));

let userSave = {
    name: "anonymous",
    years: 0,
    player_mood_happy: 0,
    player_mood_angry: 0,
    player_mood_depressed: 0,
    player_mood_introvert: 0,
    player_mood_horny: 0,
    player_mood_theyKnow: 0,
    event_blankName: 0,
    event_blankYears: 0,
    event_weirdYears: 0,
    event_mothersName: 0,
}

let questions = {
    question01: {
        text: "Oh, hey there!<br>Mind telling me your name?",
        buttons: {
            button1: "Submit",
            buttonLink1: () => questions.question02,
        },
        hasInput: "true"
    },
    question01_1: {
        text: "Oh... you didn't put your name there.<br>Let's try it again.",
        buttons: {
            button1: "Try again",
            buttonLink1: () => questions.question02
        },
        hasInput: "true"
    },
    question01_1_1: {
        text: "Okaaayy...",
        buttons: {
            button1: "(hmm)",
            buttonLink1: () => questions.question03,
            buttonMood1: "angry"
        }
    },
    question02: {
        inputLink: userSave.name,
        text: "Hello %name%!",
        buttons: {
            button1: "Hey.",
            button2: "What's up?",
            buttonLink1: () => questions.question03,
            buttonLink2: () => questions.question02_1
        }
    },
    question02_1: {
        text: "Not great, but...<br>Thanks for asking :)",
        buttons: {
            button1: "You are welcome!",
            buttonLink1: () => questions.question03,
            buttonMood1: "happy"
        }
    },
    question03: {
        text: "Well, it seems like you've found my survey.",
        buttons: {
            button1: "Oh, cool!",
            button2: "What's that?",
            button3: "(remain silent)",
            buttonLink1: () => questions.question03_2,
            buttonLink2: () => questions.question03_1,
            buttonLink3: () => questions.question03_2,
            buttonMood3: "introvert"
        }
    },
    question03_1: {
        text: "Well... It's  basically just talking and answering to me...",
        buttons: {
            button1: "(hmm)",
            buttonLink1: () => questions.question03_1_1
        }
    },
    question03_1_1: {
        text: "I'll give you a question. You'll answer it.<br>Got it?",
        buttons: {
            button1: "Got it.",
            button2: "Booriiing.",
            buttonLink1: () => questions.question04,
            buttonLink2: () => questions.question03_1_1_1
        }
    },
    question03_1_1_1: {
        text: "Just hold on, I'll show you.",
        buttons: {
            button1: "Sure thing.",
            buttonLink1: () => questions.question04,
            buttonMood1: "angry"
        }
    },
    question03_2: {
        text: "Just basic questions.",
        buttons: {
            button1: "Okay.",
            buttonLink1: () => questions.question04
        }
    },
    question04: {
        text: "Ok... so...<br>Are you ready?",
        buttons: {
            button1: "I guess so.",
            button2: "What is this all about?",
            button3: "Yeah.",
            buttonLink1: () => questions.question05,
            buttonLink2: () => questions.question03_2,
            buttonLink3: () => questions.question05
        }
    },
    question05: {
        text: "How are you feeling today?",
        buttons: {
            button1: "Feeling alright I guess.",
            button2: "Out of my mood...",
            button3: "Why do you care?",
            buttonLink1: () => questions.question05_1,
            buttonLink2: () => questions.question05_2,
            buttonLink3: () => questions.question05_3
        }
    },
    question05_1: {
        text: "That is great!",
        buttons: {
            button1: "Yeah.",
            buttonLink1: () => questions.question06,
            buttonMood1: "happy"
        }
    },
    question05_2: {
        text: "That sucks... I know.",
        buttons: {
            button1: "Yeah.",
            button2: "Why the fuck do you care?!",
            buttonLink1: () => questions.question06,
            buttonLink2: () => questions.question05_3,
            buttonMood1: "depressed"
        }
    },
    question05_3: {
        text: "Sorry.",
        buttons: {
            button1: "(remain silent)",
            button2: "Fuck off!",
            buttonLink1: () => questions.question06,
            buttonLink2: () => questions.question06,
            buttonMood1: "depressed",
            buttonMood2: "angry"
        }
    },
    question06: {
        text: "Ok, so...",
        buttons: {
            button1: "Okay...",
            button2: "(whistle into the void)",
            button3: "You didn't prepare it, didn't you?",
            buttonLink1: () => questions.question06_2,
            buttonLink2: () => questions.question06_3,
            buttonLink3: () => questions.question06_1
        }
    },
    question06_1: {
        text: "I did!",
        buttons: {
            button1: "Yeah?",
            buttonLink1: () => questions.question06_1_1,
        }
    },
    question06_1_1: {
        text: "Well, kinda. I wanted to improvise more...<br>You know.",
        buttons: {
            button1: "Right.",
            buttonLink1: () => questions.question06_1_1_1
        }
    },
    question06_1_1_1: {
        text: "I'll be honest...",
        buttons: {
            button1: "(umm)",
            buttonLink1: () => questions.question06_1_1_1_1
        }
    },
    question06_1_1_1_1: {
        text: "I'm having a bad time lately.",
        buttons: {
            button1: "(emm)",
            buttonLink1: () => questions.question06_1_1_1_1_1
        }
    },
    question06_1_1_1_1_1: {
        text: "You know, like when you want to do stuff...",
        buttons: {
            button1: "(hmm)",
            buttonLink1: () => questions.question06_1_1_1_1_1_1
        }
    },
    question06_1_1_1_1_1_1: {
        text: "... And then feeling like you don't want to do absolutely anything?",
        buttons: {
            button1: "Yeah.",
            buttonLink1: () => questions.question06_1_1_1_1_1_1_1
        }
    },
    question06_1_1_1_1_1_1_1: {
        text: "Maybe I've gone crazy.",
        buttons: {
            button1: "(ehm)",
            buttonLink1: () => questions.question06_1_1_1_1_1_1_1_1
        }
    },
    question06_1_1_1_1_1_1_1_1: {
        text: "Maybe I'm just overthinking it all.",
        buttons: {
            button1: "(...)",
            buttonLink1: () => questions.question06_1_1_1_1_1_1_1_1_1
        }
    },
    question06_1_1_1_1_1_1_1_1_1: {
        text: "I... Want to stop.",
        buttons: {
            button1: "(emm)",
            buttonLink1: () => questions.question06_1_1_1_1_1_1_1_1_1_1
        }
    },
    question06_1_1_1_1_1_1_1_1_1_1: {
        text: ". . .",
        buttons: {
            button1: "(...)",
            buttonLink1: () => questions.question06_1_1_1_1_1_1_1_1_1_1_1
        }
    },
    question06_1_1_1_1_1_1_1_1_1_1_1: {
        text: "...just...",
        buttons: {
            button1: "(...)",
            buttonLink1: () => questions.question06_1_1_1_1_1_1_1_1_1_1_1_1
        }
    },
    question06_1_1_1_1_1_1_1_1_1_1_1_1: {
        text: "...for a while.",
        buttons: {
            button1: "(...)",
            buttonLink1: () => questions.question06_1_1_1_1_1_1_1_1_1_1_1_1_1
        }
    },
    question06_1_1_1_1_1_1_1_1_1_1_1_1_1: {
        videoSrc: "./res/assets/videos/Video_1.mov"
    },
    question06_2: {
        text: "How old are you?",
        buttons: {
            button1: "Submit",
            buttonLink1: () => questions.question07
        },
        hasInput: "true"
    },
    question06_2_1: {
        text: "This isn't a valid option...",
        buttons: {
            button1: "I know.",
            buttonLink1: () => questions.question06_2_1_1
        }
    },
    question06_2_1_1: {
        text: "Do you think it is funny?",
        buttons: {
            button1: "Yes",
            button2: "I didn't do it on purpose.",
            buttonLink1: () => questions.question06_2_1_1_1,
            buttonLink2: () => questions.question07,
            buttonMood1: "angry"
        }
    },
    question06_2_1_1_1: {
        text: "Why do I even bother?",
        buttons: {
            button1: "(meh)",
            buttonLink1: () => questions.question07,
        }
    },
    question06_2_2: {
        text: "You are %years% years old?",
        buttons: {
            button1: "Yes.",
            button2: "I put some random number.",
            buttonLink1: () => questions.question07,
            buttonLink2: () => questions.question06_2_3,
            buttonMood1: "angry"
        }
    },
    question06_2_3: {
        text: "Never mind, you deserve it.",
        buttons: {
            button1: "(hmm)",
            buttonLink1: () => questions.question07,
            buttonMood1: "happy"
        }
    },
    question06_3: {
        text: "I͛̈̈͡҉ ̺̠̌̒N҉E͖͉͕͔̫ͤͦͦͥ͌͘È͜D̸ ͔̀͗͜T̟͔͕̔̔͡O̵̹͉ͩͯ́ͮ͢ ̛̱͍̱̫͍̆̄̔̓G̴̝̣ͬ̀E̶̥͝ ̸̹͙҉Ț̖͖̹͂ͧ̉͛ ̜͉͖̽Oͭ͆͘U̼̭̻̟̭̯͑ͫ̑ͥ̾Ṭ͖̀ͤ̑ ̪̩̲̣̖̉͛OF̷̛̭͕̹͔ͭ̏̈́̓ ̃̚T̘͕̅͂ͩ̆͜Ḩ̵̰̬̐͟E̜ͩ̿̕͝Rͫͩ̿E̛͓͎̲̪͖̎ͮ",
        buttons: {
            button1: "G̢̳̅̓҉̴͈͚̼̲́ͮ̀̍̎̓E̫̍ͭͦ̎Ț̛͕͈͉̲̟̐͐̾̚̚ ̛̞͈͇͉̻̀̏ͨ̉̏́Ṣ̰̻̠̟̎͊̕͏̛̟OM̲̜̘̖̜̤̭̤̒̊ͣͯ̚",
            button2: "Ȩ̡̰͙̰̬̞ͨ͟ ̩͔̜̈́̕͠H̢̛͓͔̮̰̀ͮ̽́ͮ̂͟͠E̲̘̝̩̘ͩ̌̓̾̈ͪ̑̓ͮ̃͘͟͢͞L̿L",
            button3: "P҉̶̲̣̈́̒́̅ͅ͏",
            buttonMood2: "introvert",
            buttonLink1: () => questions.question07,
            buttonLink2: () => questions.question07,
            buttonLink3: () => questions.question07
        },
        glitchedLink: () => questions.question06_2
    },
    question07: {
        inputLink: userSave.years,
        text: "...",
        buttons: {
            button1: "...",
            buttonLink1: () => questions.question07
        }
    },
    questionMother01: {
        text: "Hello mother!",
        buttons: {
            button1: "Hello Ian.",
            buttonLink1: () => questions.questionMother02
        }
    },
    questionMother02: {
        text: "Did I miss you?",
        buttons: {
            button1: "You sure did Ian.",
            buttonLink1: () => questions.questionMother03
        }
    },
    questionMother03: {
        text: "I'm sorry mother.",
        buttons: {
            button1: "I know Ian.",
            buttonLink1: () => questions.questionMother04
        }
    },
    questionMother04: {
        text: "I'm sorry.",
        buttons: {
            button1: "I know.",
            buttonLink1: () => questions.questionMother05 //end
        }
    },
}

let game_mainText = document.getElementById("game_mainText");
let game_input = document.getElementById("game_input");
let game_button_1 = document.getElementById("game_button_1");
let game_button_2 = document.getElementById("game_button_2");
let game_button_3 = document.getElementById("game_button_3");
let game_glitch = document.getElementById("game_glitch");
let game_videoContainer = document.getElementById("game_videoContainer");

const playStory = async (question) => {
    writeToElement(game_mainText, question.text);
    await sleep(questionsBlockDelay);
    writeToElement(game_button_1, question.buttons.button1);
    writeToElement(game_button_2, question.buttons.button2);
    writeToElement(game_button_3, question.buttons.button3);
    writeToElement(game_input, question.hasInput);
    if (glitchExists(question.glitchedLink)) {
        await sleep(400);
        game_glitch.style.display = "block";
        playStoryNextQuestion(question.glitchedLink()); writeToMood("theyKnow");
        await sleep(200)
        await restartGlitch()
        await sleep(400)
        game_glitch.innerHTML = '';
        await sleep(1200)
        game_glitch.style.display = "none";
    }
    game_button_1.onclick = async () => { await playStoryNextQuestion(question.buttons.buttonLink1()); writeToMood(question.buttons.buttonMood1)};
    game_button_2.onclick = async () => { await playStoryNextQuestion(question.buttons.buttonLink2()); writeToMood(question.buttons.buttonMood2)};
    game_button_3.onclick = async () => { await playStoryNextQuestion(question.buttons.buttonLink3()); writeToMood(question.buttons.buttonMood3)};

}

const playStoryNextQuestion = async (question) => {
    playVideo(question.videoSrc);
    animateAllDown();
    if (question.inputLink === userSave.name) {
        if (userSave.event_blankName === 1) {
            if (game_input.value === '') {
                question = questions.question01_1_1;
                userSave.event_blankName++;
            } else {
                userSave.name = game_input.value;
            }
        } else if (game_input.value === '') {
            question = questions.question01_1;
            userSave.event_blankName++;
        } else {
            userSave.name = game_input.value;
        }
    }
    if (question.inputLink === userSave.years) {
        if (userSave.event_weirdYears < 1) {
            if (game_input.value * 1 > 0) {
                userSave.years = game_input.value;
                question = questions.question06_2_2;
            } else {
                question = questions.question06_2_1;
                userSave.event_weirdYears++;
            }
        }
    }
    game_input.value = '';
    if ((userSave.name.toLocaleLowerCase() === 'mother' || userSave.name.toLocaleLowerCase() === 'mom') && userSave.event_mothersName === 0) {
        question = questions.questionMother01;
        userSave.event_mothersName++;
    }
    await sleep(questionsDelay);
    await playStory(question)
}

const writeToElement = (element, text) => {
    if (text) {
        text = text.replace("%name%", userSave.name).replace("%years%", userSave.years);
        element.innerHTML = text;
        animateUp(element);
    } else {
        element.style.display = 'none'
    }
}

const glitchExists = (glitch) => {
    return !!glitch;
}

const writeToMood = (mood) => {
    switch (mood) {
        case "happy": userSave.player_mood_happy++; break;
        case "angry": userSave.player_mood_angry++; break;
        case "depressed": userSave.player_mood_depressed++; break;
        case "introvert": userSave.player_mood_introvert++; break;
        case "horny": userSave.player_mood_horny++; break;
        case "theyKnow": userSave.player_mood_theyKnow++; break;
        default: break;
    }
}

const playVideo = (src) => {
    if (src) {
        game_videoContainer.style.display = "flex"
        game_videoContainer.innerHTML = "<video controls autoplay><source src=\"" + src + "\" type=\"video/mp4\"></video>"
    }
}

const animateAllDown = () => {
    animateDown(game_mainText)
    animateDown(game_input)
    animateDown(game_button_1)
    animateDown(game_button_2)
    animateDown(game_button_3)
}

const animateUp = async (element) => {
    element.style.display = 'block';
    await sleep(questionsBlockAnimationDelay);
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
}

const restartGlitch = async () => {
    let speedGlitchMs = 5;
    game_glitch.innerHTML = '';
    await typeToElement(game_glitch, "SRV - System Restart Validation .co - (c) 2019", speedGlitchMs)
    game_glitch.innerHTML += "<br><br>"
    await typeToElement(game_glitch, "---------", speedGlitchMs)
    game_glitch.innerHTML += "<br>"
    await typeToElement(game_glitch, "Trying to resolve the issue.", speedGlitchMs)
    game_glitch.innerHTML += "<br>"
    await typeToElement(game_glitch, "The system is going down for maintenance NOW!", speedGlitchMs)
    game_glitch.innerHTML += "<br>"
    await typeToElement(game_glitch, " * Stopping web server package", speedGlitchMs)
    game_glitch.innerHTML += "<br>"
    await typeToElement(game_glitch, " * Disconnecting from the Server via Client", speedGlitchMs)
    game_glitch.innerHTML += "<br>"
    await typeToElement(game_glitch, " *", speedGlitchMs)
    game_glitch.innerHTML += "<br>"
    await typeToElement(game_glitch, " * Stopping MTA", speedGlitchMs)
    game_glitch.innerHTML += "<br>"
    await typeToElement(game_glitch, " * Stopping NTP server ntdp", speedGlitchMs)
    game_glitch.innerHTML += "<br>"
    await typeToElement(game_glitch, " * Asking all remaining processes to terminate...", speedGlitchMs)
    game_glitch.innerHTML += "<br>"
    await typeToElement(game_glitch, " * Killing all remaining processes...", speedGlitchMs)
    game_glitch.innerHTML += "<br>"
    await typeToElement(game_glitch, "", speedGlitchMs)
    game_glitch.innerHTML += "<br>"
    await typeToElement(game_glitch, "[DONE]", speedGlitchMs)
    game_glitch.innerHTML += "<br>"
    await typeToElement(game_glitch, "............................................", 200)
}

const typeToElement = async (element, text, ms) => {
    for (let i = 0; i < text.length; i++) {
        await sleep(ms)
        element.innerHTML += text[i];
    }
}

const animateDown = async (element) => {
    element.style.transform = 'translateY(20px)';
    element.style.opacity = '0';
    await sleep(questionsBlockAnimationDelay);
    element.style.display = 'none';
}