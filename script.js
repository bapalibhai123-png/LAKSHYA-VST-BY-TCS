/* =========================================================
   LAKSHYA COMPETITIVE CENTER
   SSC TCS PATTERN MOCK TEST
   100 QUESTIONS
   20 Mathematics + 20 Reasoning + 20 GK
   + 20 Computer + 20 English

   Password: VST1
   Duration: 90 Minutes
   1 Mark per Question
   No Negative Marking

   IMPORTANT:
   Website structure/design/logic is kept compatible with
   the existing HTML and CSS IDs/classes.
========================================================= */


/* =========================================================
   BASIC EXAM SETTINGS
========================================================= */

const EXAM_PASSWORD = "VST1";
const EXAM_DURATION_SECONDS = 90 * 60;

const SUBJECTS = [
    "Mathematics",
    "Reasoning",
    "GK",
    "Computer",
    "English"
];

const QUESTIONS_PER_SUBJECT = 20;


/* =========================================================
   ENGLISH UNSEEN PASSAGE
========================================================= */

const ENGLISH_PASSAGE = `
<div class="unseen-passage">
    <div class="passage-title">Unseen Passage</div>

    <p>
    In an age when information is available at the touch of a button,
    the ability to distinguish useful knowledge from mere information
    has become increasingly important. The internet has made learning
    faster and more accessible, but accessibility alone does not guarantee
    understanding. A student may read hundreds of pages online and still
    possess only a superficial grasp of a subject if the information is
    not examined critically.
    </p>

    <p>
    True learning requires curiosity, reflection and the willingness to
    question what one reads. It also demands patience, because meaningful
    understanding rarely develops instantly. Digital tools can certainly
    support education, but they are most effective when used as instruments
    rather than substitutes for thought. A search engine can provide facts,
    but it cannot automatically determine whether those facts are reliable,
    relevant or properly understood.
    </p>

    <p>
    Therefore, education in the digital age should not merely focus on
    collecting information. It should cultivate the ability to analyse
    evidence, compare different viewpoints and form reasoned conclusions.
    The learner who develops these abilities becomes less dependent on
    ready-made answers and more capable of thinking independently.
    </p>
</div>
`;


/* =========================================================
   QUESTION BANK
========================================================= */


/* =========================================================
   MATHEMATICS
========================================================= */

const MATHEMATICS_QUESTIONS = [

    {
        question: "A sum of ₹8,000 is divided into two parts and invested at 8% p.a. and 12% p.a. simple interest respectively. If the total simple interest received in 2 years is ₹1,600, then the amount invested at 12% p.a. is:",
        options: [
            "₹3,000",
            "₹4,000",
            "₹5,000",
            "₹6,000"
        ],
        answer: 1,
        explanation: "Let the amount at 12% be x. Then 2[0.08(8000 − x) + 0.12x] = 1600. This gives 1280 + 0.08x = 1600, so x = ₹4,000."
    },

    {
        question: "The average of 15 numbers is 28. If two numbers, 18 and 32, are removed, the average of the remaining numbers becomes:",
        options: [
            "28.46",
            "29.00",
            "29.23",
            "30.00"
        ],
        answer: 0,
        explanation: "Total = 15 × 28 = 420. After removing 18 and 32, the total is 370. Remaining numbers = 13. Average = 370/13 = 28.46 approximately."
    },

    {
        question: "A train 180 m long crosses a platform 270 m long in 18 seconds. What is the speed of the train?",
        options: [
            "80 km/h",
            "85 km/h",
            "90 km/h",
            "100 km/h"
        ],
        answer: 2,
        explanation: "Total distance = 180 + 270 = 450 m. Speed = 450/18 = 25 m/s. Converting to km/h: 25 × 18/5 = 90 km/h."
    },

    {
        question: "If x + 1/x = 5, then the value of x³ + 1/x³ is:",
        options: [
            "110",
            "115",
            "120",
            "125"
        ],
        answer: 0,
        explanation: "Using x³ + 1/x³ = (x + 1/x)³ − 3(x + 1/x), we get 5³ − 3×5 = 125 − 15 = 110."
    },

    {
        question: "A shopkeeper marks an article 40% above its cost price and allows two successive discounts of 10% and 15%. His profit percentage is:",
        options: [
            "5%",
            "7.1%",
            "8%",
            "10%"
        ],
        answer: 1,
        explanation: "Let CP = 100. MP = 140. After 10% discount = 126. After another 15% discount = 107.10. Profit = 7.10%."
    },

    {
        question: "The HCF of two numbers is 12 and their LCM is 720. If one of the numbers is 144, the other number is:",
        options: [
            "48",
            "60",
            "72",
            "84"
        ],
        answer: 1,
        explanation: "For two numbers, Product = HCF × LCM. Therefore the other number = (12 × 720)/144 = 60."
    },

    {
        question: "A can complete a work in 18 days and B can complete it in 24 days. They work together for 6 days, after which A leaves. In how many more days will B complete the remaining work?",
        options: [
            "8",
            "9",
            "10",
            "12"
        ],
        answer: 2,
        explanation: "Combined rate = 1/18 + 1/24 = 7/72. In 6 days they complete 7/12. Remaining = 5/12. B takes (5/12) ÷ (1/24) = 10 days."
    },

    {
        question: "The radius of a cylinder is increased by 20% while its height is decreased by 10%. The percentage change in its volume is:",
        options: [
            "26% increase",
            "29.6% increase",
            "30% increase",
            "32% increase"
        ],
        answer: 1,
        explanation: "Volume is proportional to r²h. New volume factor = (1.2)² × 0.9 = 1.296. Hence the increase is 29.6%."
    },

    {
        question: "A man spends 75% of his income. If his income increases by 20% and his expenditure increases by 10%, his savings increase by ₹2,000. What was his original income?",
        options: [
            "₹10,000",
            "₹12,000",
            "₹16,000",
            "₹20,000"
        ],
        answer: 2,
        explanation: "Let original income = I. Original saving = 25% I. New income = 1.2I and new expenditure = 1.1 × 0.75I = 0.825I. New saving = 0.375I. Increase = 0.125I = 2000, so I = ₹16,000."
    },

    {
        question: "If the roots of the equation 2x² − 7x + 3 = 0 are α and β, then the value of α/β + β/α is:",
        options: [
            "37/6",
            "31/6",
            "29/6",
            "25/6"
        ],
        answer: 0,
        explanation: "α + β = 7/2 and αβ = 3/2. α/β + β/α = [(α+β)² − 2αβ]/αβ = [(49/4) − 3]/(3/2) = 37/6."
    },

    {
        question: "A mixture contains milk and water in the ratio 7 : 3. If 20 litres of the mixture are removed and replaced with water, the ratio becomes 7 : 5. What was the original quantity of the mixture?",
        options: [
            "100 L",
            "110 L",
            "120 L",
            "140 L"
        ],
        answer: 2,
        explanation: "Let the original quantity be x. Milk initially = 7x/10. After removing 20 L, milk = 7x/10 × (x−20)/x = 7(x−20)/10. Since the final ratio is 7:5, solving gives x = 120 L."
    },

    {
        question: "The area of a rectangular field is 1,296 m². If its length is 18 m more than its breadth, then the perimeter of the field is:",
        options: [
            "144 m",
            "150 m",
            "156 m",
            "162 m"
        ],
        answer: 0,
        explanation: "Let breadth = b. Then b(b+18)=1296. Thus b=27 and length=45. Perimeter = 2(45+27)=144 m."
    },

    {
        question: "A sum becomes ₹14,520 in 2 years and ₹15,972 in 3 years at compound interest, compounded annually. The principal is:",
        options: [
            "₹12,000",
            "₹12,500",
            "₹13,000",
            "₹13,200"
        ],
        answer: 0,
        explanation: "The ratio of third-year amount to second-year amount is 15972/14520 = 1.10, so the annual rate is 10%. Therefore P × 1.1² = 14520, giving P = ₹12,000."
    },

    {
        question: "A boat travels 30 km downstream in 2 hours and the same distance upstream in 3 hours. The speed of the boat in still water is:",
        options: [
            "10 km/h",
            "12.5 km/h",
            "15 km/h",
            "20 km/h"
        ],
        answer: 1,
        explanation: "Downstream speed = 30/2 = 15 km/h. Upstream speed = 30/3 = 10 km/h. Still-water speed = (15+10)/2 = 12.5 km/h."
    },

    {
        question: "If 20% of A = 30% of B and B = 40% of C, then A : C is:",
        options: [
            "3 : 5",
            "2 : 3",
            "3 : 4",
            "4 : 5"
        ],
        answer: 0,
        explanation: "20%A = 30%B gives A = 3B/2. Since B = 2C/5, A = 3C/5. Therefore A:C = 3:5."
    },

    {
        question: "The angles of a triangle are in the ratio 2 : 3 : 4. The difference between the largest and smallest angles is:",
        options: [
            "30°",
            "35°",
            "40°",
            "45°"
        ],
        answer: 2,
        explanation: "Total parts = 9. Each part = 180/9 = 20°. Angles are 40°, 60°, 80°. Difference = 40°."
    },

    {
        question: "A person covers a certain distance at 48 km/h and reaches 15 minutes late. If he travels at 60 km/h, he reaches 9 minutes early. The distance is:",
        options: [
            "72 km",
            "80 km",
            "96 km",
            "108 km"
        ],
        answer: 2,
        explanation: "The time difference is 15+9=24 minutes=0.4 hour. D/48 − D/60 = 0.4. Thus D/240 = 0.4, giving D=96 km."
    },

    {
        question: "The smallest number which when divided by 12, 15 and 20 leaves a remainder of 7 in each case, but is exactly divisible by 17, is:",
        options: [
            "187",
            "247",
            "307",
            "367"
        ],
        answer: 0,
        explanation: "The number must be 7 more than a multiple of LCM(12,15,20)=60. Testing 60k+7 for divisibility by 17 gives k=3, so the number is 187."
    },

    {
        question: "The diagonal of a rectangle is 25 cm and its length is 5 cm more than its breadth. The area of the rectangle is:",
        options: [
            "250 cm²",
            "300 cm²",
            "350 cm²",
            "400 cm²"
        ],
        answer: 1,
        explanation: "Let breadth=b and length=b+5. By Pythagoras, b²+(b+5)²=625. This gives b=15 and length=20. Area=300 cm²."
    },

    {
        question: "A, B and C invest ₹6,000, ₹8,000 and ₹10,000 respectively in a business. After 4 months, A doubles his investment, while B withdraws 25% of his investment. If the total annual profit is ₹46,000, then B's share of the profit is:",
        options: [
            "₹11,500",
            "₹12,000",
            "₹12,500",
            "₹13,000"
        ],
        answer: 0,
        explanation: "A's capital-months = 6000×4 + 12000×8 = 120000. B's = 8000×4 + 6000×8 = 80000. C's = 10000×12 = 120000. B's share = 80000/320000 × 46000 = ₹11,500."
    }
];


/* =========================================================
   REASONING
========================================================= */

const REASONING_QUESTIONS = [

    {
        question: "Book : Author :: Painting : ?",
        options: [
            "Artist",
            "Gallery",
            "Colour",
            "Brush"
        ],
        answer: 0,
        explanation: "An author creates a book; similarly, an artist creates a painting."
    },

    {
        question: "Find the missing number: 7, 13, 25, 49, 97, ?",
        options: [
            "181",
            "193",
            "195",
            "197"
        ],
        answer: 1,
        explanation: "Each term is multiplied by 2 and then 1 is subtracted: 7×2−1=13, 13×2−1=25, etc. Therefore 97×2−1=193."
    },

    {
        question: "In a certain code language, MANGO is coded as OCPIQ. How will GRAPE be coded in the same language?",
        options: [
            "ITCRG",
            "HSBQF",
            "ITCQG",
            "HTCRG"
        ],
        answer: 0,
        explanation: "Each letter is moved two positions forward: M→O, A→C, N→P, G→I, O→Q. Therefore GRAPE becomes ITCRG."
    },

    {
        question: "Find the number that does not belong to the group.",
        options: [
            "121",
            "169",
            "225",
            "196"
        ],
        answer: 3,
        explanation: "121=11², 169=13² and 225=15² have odd-numbered square roots. 196=14² has an even-numbered square root, so it is the odd one out."
    },

    {
        question: "Find the missing term: AZ, BY, CX, DW, ?",
        options: [
            "EU",
            "EV",
            "FV",
            "EW"
        ],
        answer: 1,
        explanation: "The first letters move forward A,B,C,D,E while the second letters move backward Z,Y,X,W,V. Therefore the answer is EV."
    },

    {
        question: "Pointing towards a woman, Ravi said, “She is the daughter of the only son of my grandfather.” How is the woman related to Ravi?",
        options: [
            "Sister",
            "Mother",
            "Daughter",
            "Aunt"
        ],
        answer: 0,
        explanation: "The only son of Ravi's grandfather is Ravi's father. His father's daughter is Ravi's sister."
    },

    {
        question: "A person starts walking 8 m towards the north. He then turns right and walks 15 m, turns right again and walks 8 m, and finally turns left and walks 5 m. How far and in which direction is he from the starting point?",
        options: [
            "20 m East",
            "15 m East",
            "20 m West",
            "5 m East"
        ],
        answer: 0,
        explanation: "The 8 m north and 8 m south cancel. The person moves 15 m east and then 5 m east, so he is 20 m east of the starting point."
    },

    {
        question: "In a class, Rohan ranks 17th from the top and 24th from the bottom. If three students who were absent are included in the ranking, what will be the total number of students in the class?",
        options: [
            "43",
            "44",
            "45",
            "46"
        ],
        answer: 0,
        explanation: "Existing ranked students = 17+24−1 = 40. Including three absent students gives 43."
    },

    {
        question: "Statements: All pens are books. Some books are papers. No paper is a pencil. Conclusions: I. Some pens are papers. II. No pencil is a book. III. Some books are not pencils. Which conclusion(s) logically follow?",
        options: [
            "Only I",
            "Only III",
            "II and III",
            "I and III"
        ],
        answer: 1,
        explanation: "Some books are papers and no paper is a pencil. Therefore those books are not pencils, so III follows. I and II do not necessarily follow."
    },

    {
        question: "Find the number that replaces the question mark: 4, 7, 39; 5, 8, 53; 6, 9, ?",
        options: [
            "69",
            "72",
            "75",
            "78"
        ],
        answer: 0,
        explanation: "The intended pattern is a×b+a+b: 4×7+4+7=39 and 5×8+5+8=53. Therefore 6×9+6+9=69."
    },

    {
        question: "Five persons P, Q, R, S and T are sitting in a row facing north. P sits immediately to the left of Q. R sits at the left extreme end. S sits immediately between R and T. Q is not at an extreme end. Who sits in the middle?",
        options: [
            "P",
            "Q",
            "S",
            "T"
        ],
        answer: 2,
        explanation: "With R at the left extreme, S must be immediately between R and T, giving R-S-T. P-Q occupy the remaining positions, so S is in the middle."
    },

    {
        question: "If + means ×, − means ÷, × means +, and ÷ means −, then find: 18 + 6 − 3 × 4 ÷ 5 = ?",
        options: [
            "35",
            "37",
            "39",
            "41"
        ],
        answer: 0,
        explanation: "Replace the symbols: 18×6÷3+4−5. Applying standard precedence gives 108÷3+4−5 = 36+4−5 = 35."
    },

    {
        question: "The government has introduced a new rule requiring all vehicles to undergo pollution testing every six months. Conclusions: I. Vehicle pollution is considered a concern by the authorities. II. All vehicles currently cause dangerous pollution. III. Regular testing may help monitor vehicle emissions. Which conclusion(s) logically follow?",
        options: [
            "Only I",
            "Only II",
            "I and III",
            "II and III"
        ],
        answer: 2,
        explanation: "The rule indicates concern about vehicle pollution and regular testing can monitor emissions. It does not establish that every vehicle causes dangerous pollution."
    },

    {
        question: "If CAT = 24 and DOG = 26, then according to the same pattern, BAT = ?",
        options: [
            "21",
            "22",
            "23",
            "24"
        ],
        answer: 2,
        explanation: "Using alphabetical values, BAT = B(2)+A(1)+T(20)=23."
    },

    {
        question: "If 1 January 2024 was Monday, then what day of the week was 1 January 2025?",
        options: [
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        answer: 1,
        explanation: "2024 was a leap year, so the next 1 January shifts by two days. Monday + 2 days = Wednesday."
    },

    {
        question: "In a group of 80 students, 45 like Mathematics, 35 like Science, and 20 like both Mathematics and Science. How many students like neither Mathematics nor Science?",
        options: [
            "15",
            "20",
            "25",
            "30"
        ],
        answer: 1,
        explanation: "Students liking at least one = 45+35−20=60. Therefore neither = 80−60=20."
    },

    {
        question: "Arrange the following words in a logical order: 1. Seed 2. Flower 3. Fruit 4. Plant 5. Sprout",
        options: [
            "1, 5, 4, 2, 3",
            "1, 4, 5, 2, 3",
            "5, 1, 4, 3, 2",
            "1, 5, 2, 4, 3"
        ],
        answer: 0,
        explanation: "The natural sequence is Seed → Sprout → Plant → Flower → Fruit."
    },

    {
        question: "Choose the pair that follows the same relationship as 16 : 272.",
        options: [
            "18 : 340",
            "19 : 381",
            "21 : 460",
            "22 : 506"
        ],
        answer: 3,
        explanation: "The relationship is n : n(n+1). 16×17=272 and 22×23=506."
    },

    {
        question: "If the letters of the word COMPUTER are arranged alphabetically from left to right, which letter will be third from the right?",
        options: [
            "M",
            "O",
            "P",
            "R"
        ],
        answer: 2,
        explanation: "Alphabetical order is C, E, M, O, P, R, T, U. Third from the right is P."
    },

    {
        question: "Statement I: Some teachers are writers. Statement II: All writers are readers. Which of the following is definitely true?",
        options: [
            "All teachers are readers.",
            "Some teachers are readers.",
            "No teacher is a reader.",
            "Some readers are not writers."
        ],
        answer: 1,
        explanation: "Some teachers are writers, and every writer is a reader. Therefore those teachers who are writers are also readers."
    }
];


/* =========================================================
   GENERAL KNOWLEDGE
========================================================= */

const GK_QUESTIONS = [

    {
        question: "Which Article of the Indian Constitution empowers the President to promulgate an Ordinance when Parliament is not in session?",
        options: [
            "Article 123",
            "Article 143",
            "Article 213",
            "Article 356"
        ],
        answer: 0,
        explanation: "Article 123 gives the President the power to promulgate Ordinances when both Houses of Parliament are not in session."
    },

    {
        question: "The term “Blue Revolution” in India is primarily associated with:",
        options: [
            "Milk production",
            "Fish production",
            "Oilseed production",
            "Horticulture"
        ],
        answer: 1,
        explanation: "The Blue Revolution refers primarily to the development and increase of fisheries and fish production."
    },

    {
        question: "Which of the following pairs is incorrectly matched?",
        options: [
            "Vitamin C — Scurvy",
            "Vitamin D — Rickets",
            "Vitamin K — Beriberi",
            "Vitamin B₁ — Beriberi"
        ],
        answer: 2,
        explanation: "Vitamin K deficiency is associated mainly with impaired blood clotting. Beriberi is caused by deficiency of Vitamin B1."
    },

    {
        question: "The 73rd Constitutional Amendment Act is primarily related to:",
        options: [
            "Municipalities",
            "Fundamental Duties",
            "Panchayati Raj Institutions",
            "Cooperative Societies"
        ],
        answer: 2,
        explanation: "The 73rd Constitutional Amendment Act, 1992 gave constitutional status to Panchayati Raj Institutions."
    },

    {
        question: "Which institution is responsible for issuing most currency notes in India?",
        options: [
            "Ministry of Finance",
            "Reserve Bank of India",
            "State Bank of India",
            "SEBI"
        ],
        answer: 1,
        explanation: "The Reserve Bank of India issues most banknotes in India. The ₹1 note is issued by the Government of India."
    },

    {
        question: "The Ibadat Khana was established at Fatehpur Sikri by:",
        options: [
            "Akbar",
            "Babur",
            "Shah Jahan",
            "Aurangzeb"
        ],
        answer: 0,
        explanation: "Akbar established the Ibadat Khana at Fatehpur Sikri for religious discussions."
    },

    {
        question: "Which of the following is not a Fundamental Duty under Article 51A?",
        options: [
            "To protect and improve the natural environment",
            "To develop scientific temper",
            "To provide free and compulsory education to children aged 6–14 years",
            "To safeguard public property"
        ],
        answer: 2,
        explanation: "Providing free and compulsory education to children aged 6–14 is a Fundamental Right under Article 21A and a related parental duty under Article 51A(k), not a duty of every citizen in the general form stated here."
    },

    {
        question: "When a person moves from the Earth's surface towards the centre of the Earth, the value of acceleration due to gravity generally:",
        options: [
            "Increases continuously",
            "Remains constant",
            "Decreases and becomes zero at the centre",
            "First increases and then becomes infinite"
        ],
        answer: 2,
        explanation: "Within the Earth, acceleration due to gravity decreases with depth and becomes zero at the centre."
    },

    {
        question: "Which of the following is the largest gland in the human body?",
        options: [
            "Pancreas",
            "Liver",
            "Thyroid",
            "Pituitary"
        ],
        answer: 1,
        explanation: "The liver is the largest gland and the largest internal organ in the human body."
    },

    {
        question: "The Permanent Settlement was introduced in Bengal in 1793 during the tenure of:",
        options: [
            "Lord Cornwallis",
            "Lord Wellesley",
            "Lord Dalhousie",
            "Warren Hastings"
        ],
        answer: 0,
        explanation: "The Permanent Settlement was introduced in Bengal in 1793 under Governor-General Lord Cornwallis."
    },

    {
        question: "Which of the following rivers is known as the “Sorrow of Bihar”?",
        options: [
            "Gandak",
            "Son",
            "Kosi",
            "Damodar"
        ],
        answer: 2,
        explanation: "The Kosi is known as the Sorrow of Bihar because of its frequent flooding and changing course."
    },

    {
        question: "The Finance Commission of India is constituted under:",
        options: [
            "Article 280",
            "Article 324",
            "Article 360",
            "Article 368"
        ],
        answer: 0,
        explanation: "Article 280 provides for the constitution of the Finance Commission by the President."
    },

    {
        question: "Which gas is released in large quantities during the complete combustion of fossil fuels and is a major greenhouse gas?",
        options: [
            "Nitrogen",
            "Carbon dioxide",
            "Hydrogen",
            "Helium"
        ],
        answer: 1,
        explanation: "Complete combustion of fossil fuels produces carbon dioxide, a major greenhouse gas."
    },

    {
        question: "The Fourth Buddhist Council is traditionally associated with the reign of:",
        options: [
            "Ashoka",
            "Kanishka",
            "Chandragupta Maurya",
            "Harshavardhana"
        ],
        answer: 1,
        explanation: "The Fourth Buddhist Council is traditionally associated with the Kushan ruler Kanishka."
    },

    {
        question: "If the Cash Reserve Ratio (CRR) is increased by the Reserve Bank of India, the immediate impact on the lending capacity of commercial banks is generally:",
        options: [
            "It increases",
            "It remains unchanged",
            "It decreases",
            "It becomes unlimited"
        ],
        answer: 2,
        explanation: "A higher CRR requires banks to keep more funds with the RBI, reducing the funds available for lending."
    },

    {
        question: "Which classical dance form is traditionally associated with Assam?",
        options: [
            "Kathakali",
            "Sattriya",
            "Kuchipudi",
            "Manipuri"
        ],
        answer: 1,
        explanation: "Sattriya is a classical dance form originating in Assam and associated with the Vaishnavite monasteries called Satras."
    },

    {
        question: "Which Constitutional Amendment reduced the voting age in India from 21 years to 18 years?",
        options: [
            "42nd Amendment",
            "44th Amendment",
            "61st Amendment",
            "73rd Amendment"
        ],
        answer: 2,
        explanation: "The 61st Constitutional Amendment Act, 1988 reduced the voting age from 21 to 18 years."
    },

    {
        question: "A person standing 5 m in front of a plane mirror moves 2 m towards it. The distance between the person and his image becomes:",
        options: [
            "3 m",
            "5 m",
            "6 m",
            "8 m"
        ],
        answer: 2,
        explanation: "After moving 2 m towards the mirror, the person is 3 m from it. His image is also 3 m behind it, so the person-image distance is 6 m."
    },

    {
        question: "Which of the following pairs is correctly matched?",
        options: [
            "Lothal — Dockyard",
            "Sanchi — Rock-cut caves",
            "Nalanda — Harappan site",
            "Ajanta — Mauryan capital"
        ],
        answer: 0,
        explanation: "Lothal is famous for its ancient dockyard and was an important Harappan site."
    },

    {
        question: "Which of the following is not included in the list of Fundamental Rights at present?",
        options: [
            "Right to Equality",
            "Right to Freedom",
            "Right to Property",
            "Right against Exploitation"
        ],
        answer: 2,
        explanation: "The Right to Property was removed from the list of Fundamental Rights by the 44th Amendment and is now a constitutional legal right under Article 300A."
    }
];


/* =========================================================
   COMPUTER
========================================================= */

const COMPUTER_QUESTIONS = [

    {
        question: "Which of the following memory types is volatile and loses its contents when the power supply is switched off?",
        options: [
            "ROM",
            "RAM",
            "SSD",
            "Flash Memory"
        ],
        answer: 1,
        explanation: "RAM is volatile memory, meaning its contents are lost when power is switched off."
    },

    {
        question: "In a computer, the primary function of the ALU is to:",
        options: [
            "Store data permanently",
            "Control input and output devices",
            "Perform arithmetic and logical operations",
            "Manage network connections"
        ],
        answer: 2,
        explanation: "The Arithmetic Logic Unit performs arithmetic calculations and logical comparisons."
    },

    {
        question: "Which of the following is not an operating system?",
        options: [
            "Linux",
            "Windows",
            "Oracle",
            "Android"
        ],
        answer: 2,
        explanation: "Linux, Windows and Android are operating systems. Oracle is primarily a database/software company and Oracle Database is a DBMS."
    },

    {
        question: "In MS Excel, which symbol is generally used to make a cell reference absolute?",
        options: [
            "#",
            "&",
            "@",
            "$"
        ],
        answer: 3,
        explanation: "The dollar sign ($) is used to create absolute references, such as $A$1."
    },

    {
        question: "Which protocol is primarily used for secure communication between a web browser and a web server?",
        options: [
            "HTTP",
            "HTTPS",
            "FTP",
            "SMTP"
        ],
        answer: 1,
        explanation: "HTTPS uses HTTP over a secure encrypted connection, generally through TLS."
    },

    {
        question: "A computer's cache memory is mainly used to:",
        options: [
            "Store files permanently",
            "Increase the speed of access to frequently used data",
            "Replace secondary storage",
            "Connect computers to a network"
        ],
        answer: 1,
        explanation: "Cache is high-speed memory used to reduce the time needed to access frequently used data and instructions."
    },

    {
        question: "Which of the following represents the correct order of increasing storage capacity?",
        options: [
            "KB → MB → GB → TB",
            "MB → KB → GB → TB",
            "GB → MB → TB → KB",
            "TB → GB → MB → KB"
        ],
        answer: 0,
        explanation: "The usual increasing order is Kilobyte, Megabyte, Gigabyte, Terabyte."
    },

    {
        question: "In MS Word, Ctrl + H is generally used for:",
        options: [
            "Highlighting text",
            "Opening the Help menu",
            "Find and Replace",
            "Inserting a hyperlink"
        ],
        answer: 2,
        explanation: "Ctrl + H opens the Find and Replace function in MS Word."
    },

    {
        question: "Which device converts digital signals into analog signals and vice versa for communication over certain networks?",
        options: [
            "Switch",
            "Modem",
            "Hub",
            "Repeater"
        ],
        answer: 1,
        explanation: "A modem performs modulation and demodulation, converting between digital and analog signals."
    },

    {
        question: "Which of the following is an example of system software?",
        options: [
            "MS Word",
            "Adobe Photoshop",
            "Operating System",
            "PowerPoint"
        ],
        answer: 2,
        explanation: "An operating system is system software that manages computer hardware and provides services for applications."
    },

    {
        question: "In a relational database, a primary key is used to:",
        options: [
            "Encrypt the entire database",
            "Uniquely identify records",
            "Create duplicate records",
            "Increase monitor resolution"
        ],
        answer: 1,
        explanation: "A primary key uniquely identifies each record in a relational database table."
    },

    {
        question: "Which of the following is a cloud-based file storage service?",
        options: [
            "Google Drive",
            "BIOS",
            "CPU",
            "CMOS"
        ],
        answer: 0,
        explanation: "Google Drive is a cloud-based storage and file-sharing service."
    },

    {
        question: "What is the main purpose of DNS on the Internet?",
        options: [
            "Encrypting emails",
            "Converting domain names into IP addresses",
            "Compressing files",
            "Detecting computer viruses"
        ],
        answer: 1,
        explanation: "DNS translates human-readable domain names into IP addresses used by computers to locate network resources."
    },

    {
        question: "Which type of malware can replicate itself and spread across networks without requiring a host file?",
        options: [
            "Trojan",
            "Spyware",
            "Worm",
            "Adware"
        ],
        answer: 2,
        explanation: "A worm is self-replicating malware that can spread across networks without attaching itself to a host file."
    },

    {
        question: "In MS Excel, the formula =SUM(A1:A5) will:",
        options: [
            "Multiply the values from A1 to A5",
            "Count the cells from A1 to A5",
            "Add the values from A1 to A5",
            "Find the largest value from A1 to A5"
        ],
        answer: 2,
        explanation: "SUM adds the numerical values in the specified range."
    },

    {
        question: "Which of the following is not a valid network topology?",
        options: [
            "Star",
            "Bus",
            "Ring",
            "Circular"
        ],
        answer: 3,
        explanation: "Star, Bus and Ring are standard network topologies. Circular is not normally listed as a standard topology."
    },

    {
        question: "The binary number system used by computers primarily consists of:",
        options: [
            "0 and 1",
            "1 and 2",
            "0 and 9",
            "A and B"
        ],
        answer: 0,
        explanation: "Binary uses only two digits: 0 and 1."
    },

    {
        question: "Which shortcut is commonly used in Windows to lock the computer?",
        options: [
            "Ctrl + L",
            "Windows + L",
            "Alt + L",
            "Ctrl + Shift + L"
        ],
        answer: 1,
        explanation: "Windows + L locks the Windows computer."
    },

    {
        question: "Which component is primarily responsible for executing instructions and processing data in a computer?",
        options: [
            "Monitor",
            "Keyboard",
            "CPU",
            "Printer"
        ],
        answer: 2,
        explanation: "The CPU executes instructions and performs the main processing operations."
    },

    {
        question: "A phishing attack primarily attempts to:",
        options: [
            "Increase computer processing speed",
            "Physically damage computer hardware",
            "Trick users into revealing sensitive information",
            "Automatically upgrade an operating system"
        ],
        answer: 2,
        explanation: "Phishing uses deceptive messages or websites to trick users into revealing passwords, financial information or other sensitive data."
    }
];


/* =========================================================
   ENGLISH
========================================================= */

const ENGLISH_QUESTIONS = [

    {
        question: "What is the central idea of the passage?",
        options: [
            "Digital technology has made traditional education unnecessary.",
            "Students should avoid using the internet for academic purposes.",
            "Effective learning requires critical thinking beyond simply accessing information.",
            "Online information is generally unreliable and should be ignored."
        ],
        answer: 2,
        passage: ENGLISH_PASSAGE,
        explanation: "The passage emphasizes that access to information alone is not enough; learners need critical thinking, evaluation and independent reasoning."
    },

    {
        question: "According to the passage, accessibility of information does not necessarily guarantee:",
        options: [
            "Understanding",
            "Curiosity",
            "Technology",
            "Communication"
        ],
        answer: 0,
        passage: ENGLISH_PASSAGE,
        explanation: "The passage explicitly states that accessibility of information does not guarantee understanding."
    },

    {
        question: "The word “superficial” as used in the passage most nearly means:",
        options: [
            "Thorough",
            "Deep",
            "Practical",
            "Shallow"
        ],
        answer: 3,
        passage: ENGLISH_PASSAGE,
        explanation: "Superficial means lacking depth or thoroughness. Therefore, 'shallow' is the closest meaning."
    },

    {
        question: "Which of the following can be inferred from the passage?",
        options: [
            "Search engines are incapable of providing useful information.",
            "Students should completely depend on teachers instead of digital tools.",
            "Critical evaluation is necessary even when information is easily available.",
            "Reading large amounts of information always results in better learning."
        ],
        answer: 2,
        passage: ENGLISH_PASSAGE,
        explanation: "The passage argues that information must be examined critically even when it is easily accessible."
    },

    {
        question: "According to the passage, digital tools are most effective when they:",
        options: [
            "Replace independent thinking",
            "Are used as instruments to support learning",
            "Provide ready-made conclusions",
            "Eliminate the need for reflection"
        ],
        answer: 1,
        passage: ENGLISH_PASSAGE,
        explanation: "The passage states that digital tools work best as instruments supporting education rather than substitutes for thought."
    },

    {
        question: "Identify the part containing an error: Neither the teacher nor the students was aware of the change in the examination schedule.",
        options: [
            "Neither the teacher",
            "nor the students was",
            "aware of the change",
            "in the examination schedule"
        ],
        answer: 1,
        explanation: "With 'neither...nor', the verb generally agrees with the nearer subject. Since 'students' is plural, 'were' is required: 'nor the students were aware'."
    },

    {
        question: "The committee decided to postpone the meeting ______ the chairman returned from Delhi.",
        options: [
            "until",
            "unless",
            "despite",
            "whereas"
        ],
        answer: 0,
        explanation: "'Until' correctly indicates that the postponement continued up to the chairman's return."
    },

    {
        question: "Choose the word closest in meaning to “Meticulous”.",
        options: [
            "Careless",
            "Thorough",
            "Impulsive",
            "Negligent"
        ],
        answer: 1,
        explanation: "Meticulous means very careful, precise and thorough."
    },

    {
        question: "Choose the word opposite in meaning to “Obsolete”.",
        options: [
            "Ancient",
            "Outdated",
            "Modern",
            "Useless"
        ],
        answer: 2,
        explanation: "Obsolete means outdated or no longer in use. Its opposite is modern."
    },

    {
        question: "Choose the most appropriate meaning of the idiom: “To leave no stone unturned”.",
        options: [
            "To avoid taking risks",
            "To search thoroughly",
            "To create unnecessary problems",
            "To refuse an opportunity"
        ],
        answer: 1,
        explanation: "The idiom means to make every possible effort or search very thoroughly."
    },

    {
        question: "A person who deliberately tries to destroy or damage an established government or political system is called a:",
        options: [
            "Philanthropist",
            "Pacifist",
            "Extortionist",
            "Subversive"
        ],
        answer: 3,
        explanation: "A subversive is a person or thing that seeks to undermine or overthrow an established system or authority."
    },

    {
        question: "Choose the best replacement: Hardly had the train left the station than it began to rain heavily.",
        options: [
            "when it began",
            "then it began",
            "than it had begun",
            "when it had begun"
        ],
        answer: 0,
        explanation: "The standard correlative construction is 'Hardly had...when...'."
    },

    {
        question: "Choose the correct passive form: People believe that the scientist has discovered a new method.",
        options: [
            "It is believed that a new method has been discovered by the scientist.",
            "It was believed that a new method is discovered by the scientist.",
            "A new method believed to have discovered by the scientist.",
            "It has believed that the scientist discovered a new method."
        ],
        answer: 0,
        explanation: "The correct passive construction is 'It is believed that...' and the present perfect remains 'has been discovered'."
    },

    {
        question: "Choose the correct indirect form: The teacher said to the students, “Do not waste your time.”",
        options: [
            "The teacher told the students that they did not waste their time.",
            "The teacher advised the students not to waste their time.",
            "The teacher asked the students that do not waste their time.",
            "The teacher said that the students should not wasted their time."
        ],
        answer: 1,
        explanation: "An imperative negative sentence is reported using 'advised/told + object + not to + verb'."
    },

    {
        question: "Arrange the following parts to form a meaningful sentence: P. because it encourages people Q. Reading is considered valuable R. to examine ideas critically S. and develop independent opinions",
        options: [
            "QPRS",
            "QRPS",
            "PQRS",
            "RSPQ"
        ],
        answer: 0,
        explanation: "The meaningful sentence is: 'Reading is considered valuable because it encourages people to examine ideas critically and develop independent opinions.'"
    },

    {
        question: "Despite ______ hard, he could not achieve the desired result.",
        options: [
            "work",
            "worked",
            "working",
            "to work"
        ],
        answer: 2,
        explanation: "The preposition 'despite' is followed by a noun or gerund. Therefore 'working' is correct."
    },

    {
        question: "Identify the part containing an error: Each of the candidates have submitted their application before the deadline.",
        options: [
            "Each of the candidates",
            "have submitted",
            "their application",
            "before the deadline"
        ],
        answer: 1,
        explanation: "'Each' is singular, so the verb should be 'has submitted'."
    },

    {
        question: "The scientist's explanation was so ______ that even a complicated concept became easy to understand.",
        options: [
            "obscure",
            "lucid",
            "ambiguous",
            "vague"
        ],
        answer: 1,
        explanation: "Lucid means clear and easy to understand."
    },

    {
        question: "Choose the grammatically correct replacement: No sooner did he reach the office when the meeting started.",
        options: [
            "than the meeting started",
            "when the meeting had started",
            "than the meeting had started",
            "then the meeting started"
        ],
        answer: 0,
        explanation: "The correct correlative construction is 'No sooner...than...'."
    },

    {
        question: "Choose the word that best describes a person who accepts that something is true without sufficient evidence.",
        options: [
            "Skeptic",
            "Pragmatist",
            "Credulous",
            "Rationalist"
        ],
        answer: 2,
        explanation: "A credulous person is too ready to believe something without sufficient evidence."
    }
];


/* =========================================================
   COMBINE QUESTION BANK
========================================================= */

const QUESTION_BANK = {
    Mathematics: MATHEMATICS_QUESTIONS,
    Reasoning: REASONING_QUESTIONS,
    GK: GK_QUESTIONS,
    Computer: COMPUTER_QUESTIONS,
    English: ENGLISH_QUESTIONS
};


/* =========================================================
   GLOBAL STATE
========================================================= */

let studentName = "";
let currentSubject = "Mathematics";
let currentQuestionIndex = 0;

let timeLeft = EXAM_DURATION_SECONDS;
let timerInterval = null;

let examSubmitted = false;

let answers = {};
let reviewStatus = {};

let subjectQuestionPositions = {};


/* =========================================================
   DOM ELEMENTS
========================================================= */

const homePage = document.getElementById("homePage");
const loginPage = document.getElementById("loginPage");
const examPage = document.getElementById("examPage");
const resultPage = document.getElementById("resultPage");

const startHomeBtn = document.getElementById("startHomeBtn");

const studentNameInput = document.getElementById("studentName");
const examPasswordInput = document.getElementById("examPassword");

const startExamBtn = document.getElementById("startExamBtn");
const loginError = document.getElementById("loginError");

const displayedStudentName = document.getElementById("displayedStudentName");
const currentDateTime = document.getElementById("currentDateTime");

const questionNumber = document.getElementById("questionNumber");
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");

const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");

const reviewBtn = document.getElementById("reviewBtn");
const clearBtn = document.getElementById("clearBtn");

const timer = document.getElementById("timer");

const questionNumbers = document.getElementById("questionNumbers");
const questionPalette = document.getElementById("questionPalette");

const paletteOverlay = document.getElementById("paletteOverlay");

const openPaletteBtn = document.getElementById("openPaletteBtn");
const closePaletteBtn = document.getElementById("closePaletteBtn");

const paletteSubject = document.getElementById("paletteSubject");

const fullscreenBtn = document.getElementById("fullscreenBtn");

const submitBtn = document.getElementById("submitBtn");

const submitModal = document.getElementById("submitModal");
const confirmSubmitBtn = document.getElementById("confirmSubmitBtn");
const cancelSubmitBtn = document.getElementById("cancelSubmitBtn");

const finalStudentName = document.getElementById("finalStudentName");
const totalMarks = document.getElementById("totalMarks");
const correctAnswers = document.getElementById("correctAnswers");
const wrongAnswers = document.getElementById("wrongAnswers");
const notAttempted = document.getElementById("notAttempted");
const percentage = document.getElementById("percentage");

const sectionResults = document.getElementById("sectionResults");
const reviewAnswers = document.getElementById("reviewAnswers");


/* =========================================================
   INITIALISE ANSWER OBJECT
========================================================= */

function initializeAnswerState() {

    answers = {};
    reviewStatus = {};
    subjectQuestionPositions = {};

    SUBJECTS.forEach(subject => {

        answers[subject] = new Array(
            QUESTION_BANK[subject].length
        ).fill(null);

        reviewStatus[subject] = new Array(
            QUESTION_BANK[subject].length
        ).fill(false);

        subjectQuestionPositions[subject] = 0;
    });
}


/* =========================================================
   PAGE SWITCHING
========================================================= */

function showPage(page) {

    document.querySelectorAll(".page").forEach(p => {
        p.classList.remove("active");
    });

    if (page) {
        page.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });
}


/* =========================================================
   HOME
========================================================= */

if (startHomeBtn) {

    startHomeBtn.addEventListener("click", () => {

        showPage(loginPage);

        if (studentNameInput) {
            studentNameInput.focus();
        }
    });
}


/* =========================================================
   LOGIN
========================================================= */

if (startExamBtn) {

    startExamBtn.addEventListener("click", startExam);
}


if (examPasswordInput) {

    examPasswordInput.addEventListener("keydown", event => {

        if (event.key === "Enter") {
            startExam();
        }

    });
}


if (studentNameInput) {

    studentNameInput.addEventListener("keydown", event => {

        if (event.key === "Enter") {
            examPasswordInput.focus();
        }

    });
}


function startExam() {

    const name = studentNameInput
        ? studentNameInput.value.trim()
        : "";

    const password = examPasswordInput
        ? examPasswordInput.value.trim()
        : "";

    if (!name) {

        if (loginError) {
            loginError.textContent = "Please enter your name.";
        }

        return;
    }

    if (password !== EXAM_PASSWORD) {

        if (loginError) {
            loginError.textContent = "Incorrect examination password.";
        }

        return;
    }

    if (loginError) {
        loginError.textContent = "";
    }

    studentName = name;

    initializeAnswerState();

    currentSubject = "Mathematics";
    currentQuestionIndex = 0;

    timeLeft = EXAM_DURATION_SECONDS;

    examSubmitted = false;

    if (displayedStudentName) {
        displayedStudentName.textContent = studentName;
    }

    showPage(examPage);

    updateCurrentDateTime();

    renderSubjectButtons();

    renderQuestion();

    renderQuestionPalette();

    updateTimerDisplay();

    startTimer();

    requestFullscreen();
}


/* =========================================================
   SUBJECT BUTTONS
========================================================= */

function renderSubjectButtons() {

    document.querySelectorAll(".subject-btn").forEach(button => {

        const subject = button.dataset.subject;

        button.classList.toggle(
            "active",
            subject === currentSubject
        );

        button.onclick = () => {

            saveCurrentSubjectPosition();

            currentSubject = subject;

            currentQuestionIndex =
                subjectQuestionPositions[currentSubject] || 0;

            renderSubjectButtons();

            renderQuestion();

            renderQuestionPalette();
        };
    });
}


/* =========================================================
   SAVE / RESTORE SUBJECT POSITION
========================================================= */

function saveCurrentSubjectPosition() {

    subjectQuestionPositions[currentSubject] =
        currentQuestionIndex;
}


/* =========================================================
   GET CURRENT QUESTION
========================================================= */

function getCurrentQuestions() {

    return QUESTION_BANK[currentSubject];
}


function getCurrentQuestion() {

    return getCurrentQuestions()[currentQuestionIndex];
}


/* =========================================================
   RENDER QUESTION
========================================================= */

function renderQuestion() {

    const questions = getCurrentQuestions();

    if (!questions || !questions.length) {
        return;
    }

    const question = questions[currentQuestionIndex];

    if (!question) {
        return;
    }


    /* Question number */

    const globalNumber =
        SUBJECTS.indexOf(currentSubject) *
        QUESTIONS_PER_SUBJECT +
        currentQuestionIndex +
        1;


    if (questionNumber) {

        questionNumber.textContent =
            `Question ${globalNumber}`;
    }


    /* Question text + English passage */

    if (questionText) {

        if (question.passage) {

            questionText.innerHTML =
                question.passage +
                `<div class="question-text-main">
                    ${escapeHTML(question.question)}
                 </div>`;

        } else {

            questionText.innerHTML =
                `<div class="question-text-main">
                    ${escapeHTML(question.question)}
                 </div>`;
        }
    }


    /* Options */

    if (optionsContainer) {

        optionsContainer.innerHTML = "";

        const selectedAnswer =
            answers[currentSubject][currentQuestionIndex];

        question.options.forEach((option, index) => {

            const optionElement =
                document.createElement("div");

            optionElement.className = "option";

            if (selectedAnswer === index) {
                optionElement.classList.add("selected");
            }

            const letter =
                document.createElement("span");

            letter.className = "option-letter";

            letter.textContent =
                String.fromCharCode(65 + index);


            const text =
                document.createElement("span");

            text.className = "option-text";

            text.textContent = option;


            optionElement.appendChild(letter);
            optionElement.appendChild(text);


            optionElement.addEventListener(
                "click",
                () => {

                    selectOption(index);

                }
            );


            optionsContainer.appendChild(optionElement);

        });
    }


    updateNavigationButtons();

    updateReviewButton();

    updateCurrentDateTime();
}


/* =========================================================
   HTML ESCAPE
========================================================= */

function escapeHTML(value) {

    const div = document.createElement("div");

    div.textContent = value;

    return div.innerHTML;
}


/* =========================================================
   SELECT OPTION
========================================================= */

function selectOption(index) {

    answers[currentSubject][currentQuestionIndex] =
        index;

    renderQuestion();

    renderQuestionPalette();
}


/* =========================================================
   CLEAR RESPONSE
========================================================= */

if (clearBtn) {

    clearBtn.addEventListener("click", () => {

        answers[currentSubject][currentQuestionIndex] =
            null;

        renderQuestion();

        renderQuestionPalette();
    });
}


/* =========================================================
   MARK / UNMARK FOR REVIEW
========================================================= */

if (reviewBtn) {

    reviewBtn.addEventListener("click", () => {

        reviewStatus[currentSubject][currentQuestionIndex] =
            !reviewStatus[currentSubject][currentQuestionIndex];

        updateReviewButton();

        renderQuestionPalette();
    });
}


function updateReviewButton() {

    if (!reviewBtn) {
        return;
    }

    const marked =
        reviewStatus[currentSubject][currentQuestionIndex];

    reviewBtn.textContent =
        marked
            ? "Unmark Review"
            : "Mark for Review";

    reviewBtn.classList.toggle(
        "active",
        marked
    );
}


/* =========================================================
   NEXT / PREVIOUS
========================================================= */

if (nextBtn) {

    nextBtn.addEventListener("click", () => {

        const questions = getCurrentQuestions();

        if (currentQuestionIndex < questions.length - 1) {

            currentQuestionIndex++;

            saveCurrentSubjectPosition();

            renderQuestion();

            renderQuestionPalette();
        }

    });
}


if (previousBtn) {

    previousBtn.addEventListener("click", () => {

        if (currentQuestionIndex > 0) {

            currentQuestionIndex--;

            saveCurrentSubjectPosition();

            renderQuestion();

            renderQuestionPalette();
        }

    });
}


function updateNavigationButtons() {

    if (previousBtn) {

        previousBtn.disabled =
            currentQuestionIndex === 0;
    }

    if (nextBtn) {

        nextBtn.disabled =
            currentQuestionIndex ===
            getCurrentQuestions().length - 1;
    }
}


/* =========================================================
   QUESTION PALETTE
========================================================= */

function renderQuestionPalette() {

    if (!questionPalette) {
        return;
    }

    if (paletteSubject) {
        paletteSubject.textContent =
            currentSubject;
    }

    if (questionNumbers) {

        questionNumbers.innerHTML = "";

        const questions =
            getCurrentQuestions();

        questions.forEach((question, index) => {

            const button =
                document.createElement("button");

            button.type = "button";

            button.className =
                "question-number-btn";

            button.textContent =
                index + 1;


            if (
                answers[currentSubject][index] !== null
            ) {

                button.classList.add(
                    "answered"
                );
            }


            if (
                reviewStatus[currentSubject][index]
            ) {

                button.classList.add(
                    "review"
                );
            }


            if (
                index === currentQuestionIndex
            ) {

                button.classList.add(
                    "current"
                );
            }


            button.addEventListener(
                "click",
                () => {

                    currentQuestionIndex = index;

                    saveCurrentSubjectPosition();

                    renderQuestion();

                    renderQuestionPalette();

                    /*
                       IMPORTANT:
                       Palette intentionally remains OPEN.
                    */
                }
            );


            questionNumbers.appendChild(button);

        });
    }
}


/* =========================================================
   PALETTE OPEN / CLOSE
========================================================= */

if (openPaletteBtn) {

    openPaletteBtn.addEventListener("click", () => {

        questionPalette.classList.add("open");

        if (paletteOverlay) {
            paletteOverlay.classList.add("show");
        }

        renderQuestionPalette();
    });
}


if (closePaletteBtn) {

    closePaletteBtn.addEventListener("click", closePalette);
}


if (paletteOverlay) {

    paletteOverlay.addEventListener(
        "click",
        closePalette
    );
}


function closePalette() {

    if (questionPalette) {
        questionPalette.classList.remove("open");
    }

    if (paletteOverlay) {
        paletteOverlay.classList.remove("show");
    }
}


/* =========================================================
   TIMER
========================================================= */

function startTimer() {

    clearInterval(timerInterval);

    timerInterval =
        setInterval(() => {

            if (examSubmitted) {

                clearInterval(timerInterval);

                return;
            }


            timeLeft--;

            updateTimerDisplay();


            if (timeLeft <= 0) {

                clearInterval(timerInterval);

                autoSubmitExam();
            }

        }, 1000);
}


function updateTimerDisplay() {

    if (!timer) {
        return;
    }

    const hours =
        Math.floor(timeLeft / 3600);

    const minutes =
        Math.floor((timeLeft % 3600) / 60);

    const seconds =
        timeLeft % 60;


    timer.textContent =
        `${String(hours).padStart(2, "0")}:` +
        `${String(minutes).padStart(2, "0")}:` +
        `${String(seconds).padStart(2, "0")}`;


    timer.classList.toggle(
        "danger",
        timeLeft <= 300
    );
}


/* =========================================================
   DATE / TIME
========================================================= */

function updateCurrentDateTime() {

    if (!currentDateTime) {
        return;
    }

    const now = new Date();

    currentDateTime.textContent =
        now.toLocaleString(
            "en-IN",
            {
                dateStyle: "medium",
                timeStyle: "medium"
            }
        );
}


setInterval(
    updateCurrentDateTime,
    1000
);


/* =========================================================
   SUBMIT MODAL
========================================================= */

if (submitBtn) {

    submitBtn.addEventListener("click", () => {

        if (submitModal) {
            submitModal.classList.add("show");
        }
    });
}


if (cancelSubmitBtn) {

    cancelSubmitBtn.addEventListener("click", () => {

        if (submitModal) {
            submitModal.classList.remove("show");
        }
    });
}


if (confirmSubmitBtn) {

    confirmSubmitBtn.addEventListener(
        "click",
        () => {

            if (submitModal) {
                submitModal.classList.remove("show");
            }

            submitExam();

        }
    );
}


/* =========================================================
   AUTO SUBMIT
========================================================= */

function autoSubmitExam() {

    alert(
        "Time is over. Your examination will be submitted automatically."
    );

    submitExam();
}


/* =========================================================
   SUBMIT EXAM
========================================================= */

function submitExam() {

    if (examSubmitted) {
        return;
    }

    examSubmitted = true;

    clearInterval(timerInterval);

    calculateResults();

    showPage(resultPage);

    exitFullscreen();

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });
}


/* =========================================================
   CALCULATE RESULTS
========================================================= */

function calculateResults() {

    let totalCorrect = 0;
    let totalWrong = 0;
    let totalNotAttempted = 0;


    const sectionData = [];


    SUBJECTS.forEach(subject => {

        const questions =
            QUESTION_BANK[subject];

        let correct = 0;
        let wrong = 0;
        let notAttemptedCount = 0;


        questions.forEach((question, index) => {

            const selected =
                answers[subject][index];

            if (selected === null) {

                notAttemptedCount++;

            } else if (
                selected === question.answer
            ) {

                correct++;

            } else {

                wrong++;
            }

        });


        totalCorrect += correct;
        totalWrong += wrong;
        totalNotAttempted +=
            notAttemptedCount;


        sectionData.push({
            subject,
            correct,
            wrong,
            notAttempted: notAttemptedCount,
            total: questions.length
        });

    });


    const totalQuestions =
        SUBJECTS.reduce(
            (sum, subject) =>
                sum + QUESTION_BANK[subject].length,
            0
        );


    const marks =
        totalCorrect;


    const percent =
        (marks / totalQuestions) * 100;


    if (finalStudentName) {
        finalStudentName.textContent =
            studentName;
    }


    if (totalMarks) {
        totalMarks.textContent =
            `${marks} / ${totalQuestions}`;
    }


    if (correctAnswers) {
        correctAnswers.textContent =
            totalCorrect;
    }


    if (wrongAnswers) {
        wrongAnswers.textContent =
            totalWrong;
    }


    if (notAttempted) {
        notAttempted.textContent =
            totalNotAttempted;
    }


    if (percentage) {
        percentage.textContent =
            `${percent.toFixed(2)}%`;
    }


    renderSectionResults(sectionData);

    renderAnswerReview();

    saveResultAndShowRank(
        marks,
        totalQuestions,
        percent
    );
}


/* =========================================================
   SECTION RESULTS
========================================================= */

function renderSectionResults(sectionData) {

    if (!sectionResults) {
        return;
    }

    sectionResults.innerHTML = "";


    sectionData.forEach(section => {

        const card =
            document.createElement("div");

        card.className =
            "section-result-card";


        card.innerHTML = `
            <h3>${escapeHTML(section.subject)}</h3>

            <div class="section-result-grid">
                <div>
                    <strong>${section.correct}</strong>
                    <span>Correct</span>
                </div>

                <div>
                    <strong>${section.wrong}</strong>
                    <span>Wrong</span>
                </div>

                <div>
                    <strong>${section.notAttempted}</strong>
                    <span>Not Attempted</span>
                </div>

                <div>
                    <strong>${section.total}</strong>
                    <span>Total</span>
                </div>
            </div>
        `;


        sectionResults.appendChild(card);

    });
}


/* =========================================================
   ANSWER REVIEW WITH EXPLANATIONS
========================================================= */

function renderAnswerReview() {

    if (!reviewAnswers) {
        return;
    }

    reviewAnswers.innerHTML = "";


    SUBJECTS.forEach(subject => {

        const questions =
            QUESTION_BANK[subject];


        questions.forEach((question, index) => {

            const selected =
                answers[subject][index];

            const correct =
                question.answer;


            const card =
                document.createElement("div");

            card.className =
                "review-question";


            const globalNumber =
                SUBJECTS.indexOf(subject) *
                QUESTIONS_PER_SUBJECT +
                index +
                1;


            let statusHTML = "";


            if (selected === null) {

                statusHTML = `
                    <div class="wrong">
                        Not Attempted
                    </div>
                `;

            } else if (selected === correct) {

                statusHTML = `
                    <div class="correct">
                        ✓ Correct
                    </div>
                `;

            } else {

                statusHTML = `
                    <div class="wrong">
                        ✗ Wrong
                    </div>
                `;
            }


            const selectedText =
                selected === null
                    ? "Not Attempted"
                    : `${String.fromCharCode(65 + selected)}. ${question.options[selected]}`;


            const correctText =
                `${String.fromCharCode(65 + correct)}. ${question.options[correct]}`;


            card.innerHTML = `

                <div class="review-question-header">

                    <strong>
                        Q${globalNumber} — ${escapeHTML(subject)}
                    </strong>

                    ${statusHTML}

                </div>

                ${
                    question.passage
                        ? question.passage
                        : ""
                }

                <div class="review-question-text">
                    ${escapeHTML(question.question)}
                </div>

                <div class="review-answer-row">
                    <strong>Your Answer:</strong>
                    <span>${escapeHTML(selectedText)}</span>
                </div>

                <div class="review-answer-row">
                    <strong>Correct Answer:</strong>
                    <span>${escapeHTML(correctText)}</span>
                </div>

                <div class="review-explanation">
                    <strong>Explanation:</strong>
                    <p>${escapeHTML(question.explanation)}</p>
                </div>
            `;


            reviewAnswers.appendChild(card);

        });

    });
}


/* =========================================================
   RANK SYSTEM
   =========================================================

   IMPORTANT:
   This is browser-local ranking.

   Results are stored in localStorage.
   Therefore the ranking works among attempts saved
   on the same browser/device.

   A true global online ranking requires a database.
========================================================= */

function saveResultAndShowRank(
    score,
    total,
    percent
) {

    const storageKey =
        "lakshyaMockTestResults";


    let results = [];


    try {

        results =
            JSON.parse(
                localStorage.getItem(storageKey)
            ) || [];

    } catch (error) {

        results = [];
    }


    const result = {

        name: studentName,

        score: score,

        total: total,

        percentage: Number(
            percent.toFixed(2)
        ),

        date: new Date().toISOString()

    };


    results.push(result);


    /*
       Rank is based primarily on percentage,
       then score.
    */

    results.sort((a, b) => {

        if (b.percentage !== a.percentage) {

            return b.percentage -
                a.percentage;
        }

        return b.score -
            a.score;
    });


    try {

        localStorage.setItem(
            storageKey,
            JSON.stringify(results)
        );

    } catch (error) {

        console.warn(
            "Could not save ranking data.",
            error
        );
    }


    const rank =
        results.findIndex(
            item => item === result
        ) + 1;


    displayRank(
        rank,
        results.length
    );
}


/* =========================================================
   DISPLAY RANK
========================================================= */

function displayRank(
    rank,
    totalStudents
) {

    /*
       No HTML modification is required.
       Rank box is created dynamically.
    */

    const oldRank =
        document.getElementById(
            "dynamicRankBox"
        );


    if (oldRank) {
        oldRank.remove();
    }


    const rankBox =
        document.createElement("div");


    rankBox.id =
        "dynamicRankBox";


    rankBox.innerHTML = `
        <div style="
            margin:20px 0;
            padding:18px;
            border-radius:16px;
            text-align:center;
            background:rgba(255,255,255,0.08);
            border:1px solid rgba(255,255,255,0.15);
            backdrop-filter:blur(10px);
        ">

            <div style="
                font-size:14px;
                opacity:0.8;
                margin-bottom:5px;
            ">
                YOUR RANK
            </div>

            <div style="
                font-size:38px;
                font-weight:800;
                line-height:1.1;
            ">
                #${rank}
            </div>

            <div style="
                margin-top:6px;
                font-size:13px;
                opacity:0.75;
            ">
                Among ${totalStudents} saved attempt(s)
            </div>

        </div>
    `;


    if (sectionResults) {

        sectionResults.parentNode.insertBefore(
            rankBox,
            sectionResults
        );

    } else if (resultPage) {

        resultPage.appendChild(rankBox);

    }
}


/* =========================================================
   FULLSCREEN
========================================================= */

if (fullscreenBtn) {

    fullscreenBtn.addEventListener(
        "click",
        requestFullscreen
    );
}


function requestFullscreen() {

    const element =
        document.documentElement;


    if (
        !document.fullscreenElement &&
        element.requestFullscreen
    ) {

        element.requestFullscreen()
            .catch(() => {});

    }
}


function exitFullscreen() {

    if (
        document.fullscreenElement &&
        document.exitFullscreen
    ) {

        document.exitFullscreen()
            .catch(() => {});
    }
}


/* =========================================================
   KEYBOARD NAVIGATION
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            !examPage ||
            !examPage.classList.contains("active")
        ) {
            return;
        }


        /*
           Do not interfere with typing into inputs.
        */

        const active =
            document.activeElement;

        if (
            active &&
            (
                active.tagName === "INPUT" ||
                active.tagName === "TEXTAREA"
            )
        ) {
            return;
        }


        if (event.key === "ArrowRight") {

            if (
                nextBtn &&
                !nextBtn.disabled
            ) {

                nextBtn.click();
            }
        }


        if (event.key === "ArrowLeft") {

            if (
                previousBtn &&
                !previousBtn.disabled
            ) {

                previousBtn.click();
            }
        }

    }
);


/* =========================================================
   PREVENT ACCIDENTAL PAGE LEAVE
========================================================= */

window.addEventListener(
    "beforeunload",
    event => {

        if (
            examPage &&
            examPage.classList.contains("active") &&
            !examSubmitted
        ) {

            event.preventDefault();

            event.returnValue = "";
        }

    }
);


/* =========================================================
   MOBILE BACK BUTTON / HISTORY PROTECTION
========================================================= */

history.pushState(
    null,
    "",
    location.href
);


window.addEventListener(
    "popstate",
    () => {

        if (
            examPage &&
            examPage.classList.contains("active") &&
            !examSubmitted
        ) {

            history.pushState(
                null,
                "",
                location.href
            );

            alert(
                "Please use the examination controls. Do not leave the examination page before submission."
            );
        }

    }
);


/* =========================================================
   INITIAL PAGE STATE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeAnswerState();

        showPage(homePage);

        updateCurrentDateTime();

    }
);


/* =========================================================
   CONSOLE VERIFICATION
========================================================= */

console.log(
    "Lakshya Competitive Center Mock Test Loaded Successfully."
);

console.log(
    "Total Questions:",
    SUBJECTS.reduce(
        (total, subject) =>
            total + QUESTION_BANK[subject].length,
        0
    )
);

console.log(
    "Mathematics:",
    MATHEMATICS_QUESTIONS.length
);

console.log(
    "Reasoning:",
    REASONING_QUESTIONS.length
);

console.log(
    "GK:",
    GK_QUESTIONS.length
);

console.log(
    "Computer:",
    COMPUTER_QUESTIONS.length
);

console.log(
    "English:",
    ENGLISH_QUESTIONS.length
);
