class TattooTest {
    constructor() {
        this.questions = [
            {
                question: "Какой твой главный подход к жизни?",
                options: [
                    "Традиционный и проверенный временем",
                    "Современный и технологичный", 
                    "Творческий и нестандартный",
                    "Духовный и осознанный"
                ]
            },
            {
                question: "Какую музыку ты предпочитаешь?",
                options: [
                    "Классику и джаз",
                    "Электронную музыку",
                    "Альтернативу и инди",
                    "Этническую и мировую музыку"
                ]
            },
            {
                question: "Твой идеальный отпуск?",
                options: [
                    "Путешествие по историческим местам",
                    "Мегаполис с неоновыми огнями",
                    "Творческий ретрит или фестиваль",
                    "Йога-тур или духовное путешествие"
                ]
            },
            {
                question: "Какой цвет тебе ближе?",
                options: [
                    "Черный и красный",
                    "Синий и серебряный",
                    "Все цвета радуги",
                    "Земляные тона"
                ]
            },
            {
                question: "Твой стиль в одежде?",
                options: [
                    "Классический с элементами бунтарства",
                    "Футуристичный и минималистичный",
                    "Эклектичный и яркий",
                    "Натуральный и комфортный"
                ]
            },
            {
                question: "Что для тебя важнее в татуировке?",
                options: [
                    "Символическое значение",
                    "Техническое исполнение",
                    "Художественная ценность",
                    "Энергетика и духовность"
                ]
            },
            {
                question: "Какую книгу ты бы выбрал(а)?",
                options: [
                    "Исторический роман",
                    "Научную фантастику",
                    "Современную поэзию",
                    "Духовные практики"
                ]
            },
            {
                question: "Твое отношение к боли?",
                options: [
                    "Это часть процесса, которую нужно пережить",
                    "Стараюсь минимизировать дискомфорт",
                    "Боль - это тоже ощущение, часть опыта",
                    "Могу управлять восприятием боли"
                ]
            },
            {
                question: "Где бы ты сделал(а) первую татуировку?",
                options: [
                    "Предплечье или голень",
                    "Запястье или шея",
                    "Нестандартное место",
                    "Закрытая часть тела"
                ]
            },
            {
                question: "Какой размер татуировки рассматриваешь?",
                options: [
                    "Крупную, заметную",
                    "Среднюю, детализированную",
                    "Несколько маленьких в композиции",
                    "Символическую, минималистичную"
                ]
            }
        ];

        this.tattooStyles = [
            {
                name: "Традиционный (Old School)",
                description: "Тебе идеально подходит классический американский или морской стиль с четкими контурами, насыщенными цветами и традиционными символами.",
                features: ["Яркие цвета", "Жирные контуры", "Классические мотивы", "Проверенная временем эстетика"],
                images: [
                    "tattooPhoto/oldschool1.jpg",
                    "tattooPhoto/oldschool2.jpg",
                    "tattooPhoto/oldschool3.jpg",
                    "tattooPhoto/oldschool4.jpg",
                    "tattooPhoto/oldschool5.jpg",
                    "tattooPhoto/oldschool6.jpg",
                    "tattooPhoto/oldschool7.jpg",
                    "tattooPhoto/oldschool8.jpg",
                    "tattooPhoto/oldschool9.jpg",
                ]
            },
            {
                name: "Реализм (Realism)",
                description: "Твоя натура ценит детали и совершенство. Реалистичные татуировки с фотографической точностью - твой выбор.",
                features: ["Высокая детализация", "Объем и перспектива", "Черно-белая гамма", "Техническое мастерство"],
                images: [
                    "tattooPhoto/real1.jpg",
                    "tattooPhoto/real2.jpg",
                    "tattooPhoto/real3.jpg",
                    "tattooPhoto/real4.jpg",
                    "tattooPhoto/real5.jpg",
                    "tattooPhoto/real6.jpg",
                    "tattooPhoto/real7.jpg",
                    "tattooPhoto/real8.jpg",
                    "tattooPhoto/real9.jpg",
                ]
            },
            {
                name: "Минимализм",
                description: "Ты ценишь простоту и элегантность. Минималистичные татуировки с тонкими линиями и лаконичными формами.",
                features: ["Простота", "Тонкие линии", "Символизм", "Неброскость"],
                images: [
                    "tattooPhoto/mini1.jpg",
                    "tattooPhoto/mini2.jpg",
                    "tattooPhoto/mini3.jpg",
                    "tattooPhoto/mini4.jpg",
                    "tattooPhoto/mini5.jpg",
                    "tattooPhoto/mini6.jpg",
                    "tattooPhoto/mini7.jpg",
                    "tattooPhoto/mini8.jpg",
                    "tattooPhoto/mini9.jpg",
                ]
            },
            {
                name: "Акварель",
                description: "Твоя творческая натура найдет отражение в акварельных татуировках с плавными переходами и художественной свободой.",
                features: ["Плавные переходы", "Яркие цвета", "Отсутствие контуров", "Художественная свобода"],
                images: [
                    "tattooPhoto/akva1.jpg",
                    "tattooPhoto/akva2.jpg",
                    "tattooPhoto/akva3.jpg",
                    "tattooPhoto/akva4.jpg",
                    "tattooPhoto/akva5.jpg",
                    "tattooPhoto/akva6.jpg",
                    "tattooPhoto/akva7.jpg",
                    "tattooPhoto/akva8.jpg",
                    "tattooPhoto/akva9.jpg",
                ]
            },
            {
                name: "Геометрия",
                description: "Твой аналитический ум и любовь к порядку проявятся в геометрических татуировках с четкими линиями и симметрией.",
                features: ["Геометрические формы", "Симметрия", "Точность линий", "Современная эстетика"],
                images: [
                    "tattooPhoto/geo1.jpg",
                    "tattooPhoto/geo2.jpg",
                    "tattooPhoto/geo3.jpg",
                    "tattooPhoto/geo4.jpg",
                    "tattooPhoto/geo5.jpg",
                    "tattooPhoto/geo6.jpg",
                    "tattooPhoto/geo7.jpg",
                    "tattooPhoto/geo8.jpg",
                    "tattooPhoto/geo9.jpg",
                ]
            },
            {
                name: "Трайбл",
                description: "Твоя духовная связь с природой и традициями найдет выражение в этнических и племенных орнаментах.",
                features: ["Этнические мотивы", "Черные плотные узоры", "Символические значения", "Связь с природой"],
                images: [
                    "tattooPhoto/traible1.jpg",
                    "tattooPhoto/traible2.jpg",
                    "tattooPhoto/traible3.jpg",
                    "tattooPhoto/traible4.jpg",
                    "tattooPhoto/traible5.jpg",
                    "tattooPhoto/traible6.jpg",
                    "tattooPhoto/traible7.jpg",
                    "tattooPhoto/traible8.jpg",
                    "tattooPhoto/traible9.jpg",
                ]
            },
            {
                name: "Лайнворк",
                description: "Твоя прямолинейность и ясность мышления отразится в татуировках, состоящих исключительно из линий.",
                features: ["Только линии", "Абстрактные формы", "Современный стиль", "Графичность"],
                images: [
                    "tattooPhoto/linework1.jpg",
                    "tattooPhoto/linework2.jpg",
                    "tattooPhoto/linework3.jpg",
                    "tattooPhoto/linework4.jpg",
                    "tattooPhoto/linework5.jpg",
                    "tattooPhoto/linework6.jpg",
                    "tattooPhoto/linework7.jpg",
                    "tattooPhoto/linework8.jpg",
                    "tattooPhoto/linework9.jpg",
                ]
            },
            {
                name: "Японский (Иредзуми)",
                description: "Твоя дисциплинированность и уважение к традициям сочетаются с японским стилем татуировок.",
                features: ["Мифологические сюжеты", "Яркие цвета", "Динамичные композиции", "Глубокий символизм"],
                images: [
                    "tattooPhoto/ja1.jpg",
                    "tattooPhoto/ja2.jpg",
                    "tattooPhoto/ja3.jpg",
                    "tattooPhoto/ja4.jpg",
                    "tattooPhoto/ja5.jpg",
                    "tattooPhoto/ja6.jpg",
                    "tattooPhoto/ja7.jpg",
                    "tattooPhoto/ja8.jpg",
                    "tattooPhoto/ja9.jpg",
                ]
            },
            {
                name: "Нео-традиционный",
                description: "Ты сочетаешь любовь к классике с современным взглядом. Нео-традиционный стиль объединяет лучшее из двух миров.",
                features: ["Обновленная классика", "Богатая цветовая палитра", "Современные сюжеты", "Детализация"],
                images: [
                    "tattooPhoto/neo1.jpg",
                    "tattooPhoto/neo2.jpg",
                    "tattooPhoto/neo3.jpg",
                    "tattooPhoto/neo4.jpg",
                    "tattooPhoto/neo5.jpg",
                    "tattooPhoto/neo6.jpg",
                    "tattooPhoto/neo7.jpg",
                    "tattooPhoto/neo8.jpg",
                    "tattooPhoto/neo9.jpg",
                ]
            },
            {
                name: "Блэкворк",
                description: "Твоя смелость и решительность проявятся в масштабных черных татуировках с контрастными узорами.",
                features: ["Преобладание черного", "Контрастные узоры", "Смелые композиции", "Драматический эффект"],
                images: [
                    "tattooPhoto/black1.jpg",
                    "tattooPhoto/black2.jpg",
                    "tattooPhoto/black3.jpg",
                    "tattooPhoto/black4.jpg",
                    "tattooPhoto/black5.jpg",
                    "tattooPhoto/black6.jpg",
                    "tattooPhoto/black7.jpg",
                    "tattooPhoto/black8.jpg",
                    "tattooPhoto/black9.jpg",
                ]
            }
        ];

        this.currentQuestion = 0;
        this.userAnswers = new Array(this.questions.length).fill(null);
        
        this.backgroundSlideshow = document.getElementById('background-slideshow');
        this.backgroundImages = document.getElementById('background-images');
        this.init();
    }

    init() {
        this.startBtn = document.getElementById('start-btn');
        this.prevBtn = document.getElementById('prev-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.submitBtn = document.getElementById('submit-btn');
        this.restartBtn = document.getElementById('restart-btn');
        
        this.startScreen = document.getElementById('start-screen');
        this.testScreen = document.getElementById('test-screen');
        this.resultsScreen = document.getElementById('results-screen');
        
        this.questionContainer = document.getElementById('question-container');
        this.currentQuestionSpan = document.getElementById('current-question');
        this.progressFill = document.getElementById('progress-fill');
        this.resultContent = document.getElementById('result-content');

        this.bindEvents();
    }

    bindEvents() {
        this.startBtn.addEventListener('click', () => this.startTest());
        this.prevBtn.addEventListener('click', () => this.prevQuestion());
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.submitBtn.addEventListener('click', () => this.submitTest());
        this.restartBtn.addEventListener('click', () => this.restartTest());
    }

    startTest() {
        this.startScreen.classList.add('hidden');
        this.testScreen.classList.remove('hidden');
        this.showQuestion(0);
        this.updateProgress();
    }

    showQuestion(index) {
        this.currentQuestion = index;
        const question = this.questions[index];
        
        this.questionContainer.innerHTML = `
            <div class="question">
                <h3>${question.question}</h3>
                <div class="options" id="options-container">
                    ${question.options.map((option, i) => `
                        <div class="option ${this.userAnswers[index] === i ? 'selected' : ''}" 
                             data-index="${i}">
                            ${option}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        this.currentQuestionSpan.textContent = index + 1;
        this.updateNavigation();
        this.updateProgress();

        document.querySelectorAll('.option').forEach(option => {
            option.addEventListener('click', (e) => {
                this.selectAnswer(parseInt(e.target.dataset.index));
            });
        });
    }

    selectAnswer(answerIndex) {
        document.querySelectorAll('.option').forEach(option => {
            option.classList.remove('selected');
        });
        
        event.target.classList.add('selected');
        this.userAnswers[this.currentQuestion] = answerIndex;
        
        if (this.currentQuestion < this.questions.length - 1) {
            this.nextBtn.disabled = false;
        }
        
        if (this.currentQuestion === this.questions.length - 1 && answerIndex !== null) {
            this.submitBtn.classList.remove('hidden');
        }
    }

    prevQuestion() {
        if (this.currentQuestion > 0) {
            this.showQuestion(this.currentQuestion - 1);
        }
    }

    nextQuestion() {
        if (this.currentQuestion < this.questions.length - 1) {
            this.showQuestion(this.currentQuestion + 1);
        }
    }

    updateNavigation() {
        this.prevBtn.disabled = this.currentQuestion === 0;
        
        if (this.currentQuestion === this.questions.length - 1) {
            this.nextBtn.classList.add('hidden');
            if (this.userAnswers[this.currentQuestion] !== null) {
                this.submitBtn.classList.remove('hidden');
            }
        } else {
            this.nextBtn.classList.remove('hidden');
            this.submitBtn.classList.add('hidden');
            this.nextBtn.disabled = this.userAnswers[this.currentQuestion] === null;
        }
    }

    updateProgress() {
        const progress = ((this.currentQuestion + 1) / this.questions.length) * 100;
        this.progressFill.style.width = `${progress}%`;
    }

    submitTest() {
        const styleIndex = this.calculateStyle();
        const selectedStyle = this.tattooStyles[styleIndex];
        
        this.showResult(selectedStyle);
    }

    calculateStyle() {
        const answerSum = this.userAnswers.reduce((sum, answer) => sum + answer, 0);
        return answerSum % this.tattooStyles.length;
    }

    showResult(style) {
        this.showBackgroundSlideshow(style.images);
        
        this.resultContent.innerHTML = `
            <div class="result-style">
                <h3>${style.name}</h3>
                <p class="result-description">${style.description}</p>
                <div class="result-features">
                    <strong>Характеристики стиля:</strong>
                    <ul>
                        ${style.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                <p><strong>Поздравляем! Ты нашел(ла) свой уникальный стиль!</strong></p>
            </div>
        `;

        this.testScreen.classList.add('hidden');
        this.resultsScreen.classList.remove('hidden');
    }

    showBackgroundSlideshow(images) {
        this.backgroundImages.innerHTML = '';
        
        images.forEach((imageUrl, index) => {
            const imgDiv = document.createElement('div');
            imgDiv.className = 'background-image';
            imgDiv.style.backgroundImage = `url(${imageUrl})`;
            
            this.backgroundImages.appendChild(imgDiv);
            
            setTimeout(() => {
                imgDiv.classList.add('active');
            }, index * 200);
        });
        
        this.backgroundSlideshow.classList.remove('hidden');
        setTimeout(() => {
            this.backgroundSlideshow.classList.add('active');
        }, 100);
    }

    restartTest() {
        this.backgroundSlideshow.classList.remove('active');
        setTimeout(() => {
            this.backgroundSlideshow.classList.add('hidden');
        }, 1000);
        
        this.currentQuestion = 0;
        this.userAnswers = new Array(this.questions.length).fill(null);
        
        this.resultsScreen.classList.add('hidden');
        this.startScreen.classList.remove('hidden');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new TattooTest();
});