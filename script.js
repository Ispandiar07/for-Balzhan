const textElement = document.getElementById('text');
const text = `Если ты спросишь люблю ли я тебя, я отвечу - да. Если спросишь снова я скажу что - моя любовь к тебе неизменно, потому что ты не выходишь у меня с головы даже когда я занят, потому что я ценю как ты слушаешь мои разговоры ни о чем и обо всем сразу, с тобой все становиться ярче, я чувствую себя живым когда ты рядом и потерянным когда тебя нет. Я скажу что люблю тебя, люблю наши глубокие беседы, фотки/видео с тобой, и эти моменты которые мы крадем у мира, создавая свою вселенную, я скажу что даже твой взгляд вызывает у меня мурашки, а твой голос когда ты произносишь мое имя, становится таким мягким что я таю. Любить тебя значит принимать все моменты твоей жизни, которые сделали тебя тем кто ты есть и с нетерпением ждать тех что еще впереди, это значит мечтать о тысячи завтрашних дней и пробовать новое вместе. Я люблю тебя как звезды любят ночное небо освещая его своим нежным светом, и как солнце любит зимнее утро согревая его своим теплом ровным и неизменным.`;

let charIndex = 0;

function typeText() {
    if (charIndex < text.length) {
        textElement.innerHTML += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 50); // Увеличиваем значение setTimeout
    }
}

typeText();

const starsContainer = document.querySelector('.stars');
for (let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    star.style.position = 'absolute';
    star.style.width = '2px';
    star.style.height = '2px';
    star.style.backgroundColor = '#fff';
    star.style.borderRadius = '50%';
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animation = `twinkle ${Math.random() * 2 + 1}s infinite alternate`;
    starsContainer.appendChild(star);
}
