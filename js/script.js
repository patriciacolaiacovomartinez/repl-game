// var virgo = document.querySelector('.virgo');
// var sagittarius = document.querySelector('.sagittatius');
// var scorpion = document.querySelector('.scorpion');
// var cancer = document.querySelector('.cancer');
// var buttons = document.querySelector('#buttons');
var btn = document.querySelector('.btn');
var questionHeader = document.querySelector('.question-header');
var body = document.querySelector('#body');
var nextQBtn = document.querySelector('.nextQ');
var container = document.querySelector('.container');
var p = document.querySelector('#description');
var question1Descriptions = [
    'Virgos are always paying attention to the smallest details and their deep sense of humanity makes them one of the most careful signs of the zodiac. Their methodical approach to life ensures that nothing is left to chance, and although they are often tender, their heart might be closed for the outer world. This is a sign often misunderstood, not because they lack the ability to express, but because they won’t accept their feelings as valid, true, or even relevant when opposed to reason. The symbolism behind the name speaks well of their nature, born with a feeling they are experiencing everything for the first time.',
    'Scorpio-born are passionate and assertive people. They are determined and decisive, and will research until they find out the truth. Scorpio is a great leader, always aware of the situation and also features prominently in resourcefulness. Scorpio is a Water sign and lives to experience and express emotions. Although emotions are very important for Scorpio, they manifest them differently than other water signs. In any case, you can be sure that the Scorpio will keep your secrets, whatever they may be.',
    'Curious and energetic, Sagittarius is one of the biggest travelers among all zodiac signs. Their open mind and philosophical view motivates them to wander around the world in search of the meaning of life. Sagittarius is extrovert, optimistic and enthusiastic, and likes changes. Sagittarius-born are able to transform their thoughts into concrete actions and they will do anything to achieve their goals.',
    'Deeply intuitive and sentimental, Cancer can be one of the most challenging zodiac signs to get to know. They are very emotional and sensitive, and care deeply about matters of the family and their home. Cancer is sympathetic and attached to people they keep close. Those born with their Sun in Cancer are very loyal and able to empathize with other peoples pain and suffering.'
];
var question2Descriptions = [
    'People with Virgo rising are often a little understated in their personal mannerisms and appearance, although a lot depends on the position of Mercury (the ruling planet of Virgo) in the chart. Generally, there is an intelligent and reserved aura about Virgo rising individuals that is unmistakable. These are actually somewhat shy people who need time to analyze things around them before they warm up to both situations and people. This quality can be received exactly as that, or it can be received as a rather stand-offish, cool, and even critical manner (depending on the audience).', 'Those with an Ascendant in Scorpio tend to make wise financial investments including purchases of real estate. They make terrific fire fighters, law enforcement officers, attorneys, and detectives. Scorpio Rising signs can also be a bit on the paranoid side. They are deliberate and careful communicators, always using caution when they choose their words. They will never give up a secret especially when it involves them. Not only are they secretive, they can have quite an explosive temperament when they are unable to get what they want or are threatened. This rising sign is the physical fighter and can be the most violent of the Zodiac. Because they are so intense and secretive, they have natural tendencies of self destructive behavior.', 'Those with Sagittarius rising often experience life as a challenge, a quest, or a search for adventure where the prize is the discovery of meaning. When Sagittarius is rising, the need to develop self awareness comes about through expanding one’s horizons – at either physical, mental or spiritual levels. Life is often approached with a sense of optimism and expansion, with an expectation of success.The search for meaning, for truth, for a proven belief system based upon experience is the deeper implication wth a Sagittarian Ascendant.', 'These people come across as gentle creatures. There’s something familiar about them — they’re the guy or gal next door. When they enter a room, they don’t walk in with a splash. Instead, they move to the sides and weave their way inwards. These people have a familiar feel to them. Because they are rather sensitive to their environment, they can get flustered easily, especially in public.'
];
var question3Descriptions = [
    'Bookshelves -Headphones -food processor -Agenda -Organizer',
    'Watch -Perfume -Telescope -Boxer -Kama Sutra Book',
    'Trip to a Special place -Bicycle -Show Ticket -Bagpack -Fishing pole',
    'Pajama -Wine bottle -Aquarium with exotics fish -Finance Book -Photo Album'
];
var question4Descriptions = [
    'They like strong and stable people, who know where they are going and how theyre getting there so its often better to talk about yourself initially while seducing Virgo, and save questions about them until a little latter. Amongst other things they tend to be very modest, and will feel uncomfortable if you ask too many questions early on as it will often lead them to cataloging their perceived faults. Try to keep the conversation on an intellectual level and not an emotional one, objective rather than subjective, and dont corner them into having to share their feelings on a subject.',
     'The more naturally passionate you are, the more attractive you will be to your Scorpio. Your best approach is to make conversation about a subject which you get genuinely excited about. Travel, dogs or whatever as theyll soon be more focused on your emotional content and delivery than on what youre saying, so dont worry if its otherwise boring or inappropriate. Just make sure you get worked up about it.', 'Something worth an early mention when seducing Sagittarius is that they are often very wary of rushing into commitments. Avoid the subject, and certainly dont mention marriage too early. They arent cheaters, but they place a very high value on their independence. This is a sign you want to keep things light with initially. Your Sagittarius will enjoy any kind of one on one sport, so if youre good at tennis, swimming, roller-skating or similar then thats your best approach. Whatever activity you choose, dont be surprised if theyre pretty good at it! But try your best, as they admire a physically challenging partner.',
    'If I had a dollar for every time someone said that you just need to be romantic to seduce a Cancer. It may be true sometimes, but its really missing the point, so to go off at another brief tangent. At times Cancers feel particularly alone and vulnerable. At those times they want to feel loved and secure. Leaving a love note under their windshield wiper will carry more impact than a candlelit dinner if its done at the right time. If youre intuitive enough to pick up on when theyre feeling this way you can score massive romance points even if youre not a romantic person. If you are naturally romantic thats okay too, but the point is they dont need a romantic partner in the traditional sense.'
]
function displayQ1() {
    if (!$('#description').html()) {
        if (this.id === 'virgo') {
            console.log('virgo')
            var node = document.createElement('p');
            node.id = 'description';
            node.innerHTML += `
            ${question1Descriptions[0]}
            `;
            container.insertBefore(node, container.childNodes[4]);
        };
        if (this.id === 'scorpio') {
            console.log('scorpio');
            var node = document.createElement('p');
            node.id = 'description';
            node.innerHTML += `
            ${question1Descriptions[1]}
            `;
            container.insertBefore(node, container.childNodes[4]);
        };
        if (this.id === 'sagittarius') {
            console.log('sagittarius')
            var node = document.createElement('p');
            node.id = 'description';
            node.innerHTML += `
        ${question1Descriptions[2]}
        `;
            container.insertBefore(node, container.childNodes[4]);
        };
        if (this.id === 'cancer') {
            console.log('cancer');
            var node = document.createElement('p');
            node.id = 'description';
            node.innerHTML += `
        ${question1Descriptions[3]}
        `;
            container.insertBefore(node, container.childNodes[4]);
        };
    };
};
function displayQ2() {
    if (!$('#description').html()) {
        if (this.id === 'virgo') {
            console.log('virgo')
            var node = document.createElement('p');
            node.id = 'description';
            node.innerHTML += `
            ${question2Descriptions[0]}
            `;
            container.insertBefore(node, container.childNodes[4]);
        };
        if (this.id === 'scorpio') {
            console.log('scorpio');
            var node = document.createElement('p');
            node.id = 'description';
            node.innerHTML += `
            ${question2Descriptions[1]}
            `;
            container.insertBefore(node, container.childNodes[4]);
        };
        if (this.id === 'sagittarius') {
            console.log('sagittarius')
            var node = document.createElement('p');
            node.id = 'description';
            node.innerHTML += `
        ${question2Descriptions[2]}
        `;
            container.insertBefore(node, container.childNodes[4]);
        };
        if (this.id === 'cancer') {
            console.log('cancer');
            var node = document.createElement('p');
            node.id = 'description';
            node.innerHTML += `
        ${question2Descriptions[3]}
        `;
            container.insertBefore(node, container.childNodes[4]);
        };
    };
};
function displayQ3() {
    if (!$('#description').html()) {
        if (this.id === 'virgo') {
            console.log('virgo')
            var node = document.createElement('p');
            node.id = 'description';
            node.innerHTML += `
            ${question3Descriptions[0]}
            `;
            container.insertBefore(node, container.childNodes[4]);
        };
        if (this.id === 'scorpio') {
            console.log('scorpio');
            var node = document.createElement('p');
            node.id = 'description';
            node.innerHTML += `
            ${question3Descriptions[1]}
            `;
            container.insertBefore(node, container.childNodes[4]);
        };
        if (this.id === 'sagittarius') {
            console.log('sagittarius')
            var node = document.createElement('p');
            node.id = 'description';
            node.innerHTML += `
        ${question3Descriptions[2]}
        `;
            container.insertBefore(node, container.childNodes[4]);
        };
        if (this.id === 'cancer') {
            console.log('cancer');
            var node = document.createElement('p');
            node.id = 'description';
            node.innerHTML += `
        ${question3Descriptions[3]}
        `;
            container.insertBefore(node, container.childNodes[4]);
        };
    };
};
function displayQ4() {
    if (!$('#description').html()) {
        if (this.id === 'virgo') {
            console.log('virgo')
            var node = document.createElement('p');
            node.id = 'description';
            node.innerHTML += `
            ${question4Descriptions[0]}
            `;
            container.insertBefore(node, container.childNodes[4]);
        };
        if (this.id === 'scorpio') {
            console.log('scorpio');
            var node = document.createElement('p');
            node.id = 'description';
            node.innerHTML += `
            ${question4Descriptions[1]}
            `;
            container.insertBefore(node, container.childNodes[4]);
        };
        if (this.id === 'sagittarius') {
            console.log('sagittarius')
            var node = document.createElement('p');
            node.id = 'description';
            node.innerHTML += `
        ${question4Descriptions[2]}
        `;
            container.insertBefore(node, container.childNodes[4]);
        };
        if (this.id === 'cancer') {
            console.log('cancer');
            var node = document.createElement('p');
            node.id = 'description';
            node.innerHTML += `
        ${question4Descriptions[3]}
        `;
            container.insertBefore(node, container.childNodes[4]);
        };
    };
};
function secondQuestion() {
    container.innerHTML = `
    <h1 class='question-header'>2.What is your ascendent?</h1>
    <div id="buttons">
        <div id="virgo" class="btn">Virgo</div>
        <div id="scorpio" class="btn">Scorpio</div>
        <div id="sagittarius" class="btn">Sagittarius</div>
        <div id="cancer" class="btn">Cancer</div>
    </div>
    <button class="nextQ" id="goToQ3">Next Question</button>
    `;
    $('#goToQ3').on('click', function () {
        if ($('#description').html()) {
            thirdQuestion();
        };
    });
    $('.btn').one('click', displayQ2);
};
function thirdQuestion() {
    container.innerHTML = `
    <h1 class='question-header'>3.What can be a good gift? Choose the solar sign.</h1>
    <div id="buttons">
        <div id="virgo" class="btn">Virgo</div>
        <div id="scorpio" class="btn">Scorpio</div>
        <div id="sagittarius" class="btn">Sagittarius</div>
        <div id="cancer" class="btn">Cancer</div>
    </div>
    <button class="nextQ" id="goToQ4">Next Question</button>
    `;
    $('#goToQ4').on('click', function () {
        if ($('#description').html()) {
            fourthQuestion();
        };
    });
    $('.btn').one('click', displayQ3);
};
function fourthQuestion() {
    container.innerHTML = `
    <h1 class='question-header'>4.How to seduce a person? Choose his/her solar sign.</h1>
    <div id="buttons">
        <div id="virgo" class="btn">Virgo</div>
        <div id="scorpio" class="btn">Scorpio</div>
        <div id="sagittarius" class="btn">Sagittarius</div>
        <div id="cancer" class="btn">Cancer</div>
    </div>
    <button class="finishBtn"> Finish </div>
     `;
    $('.btn').one('click', displayQ4);
    $('.finishBtn').on('click', lastScreen);
};
function lastScreen() {
    console.log('last')
    container.innerHTML = `
    <div class='done'> Finish </div>
    `
};
$('.btn').one('click', displayQ1);
$('#goToQ2').on('click', function () {
    if ($('#description').html()) {
        secondQuestion();
    };
});
// $('#goToQ2').on('click', secondQuestion);