/* =========================================================
   LAKSHYA COMPETITIVE CENTER
   SSC TCS PATTERN MOCK TEST
   100 QUESTIONS

   20 Mathematics
   20 Reasoning
   20 GK
   10 Computer
   20 English
   10 Current Affairs

   TOTAL = 100 QUESTIONS

   Password: VST1
   Duration: 90 Minutes
   1 Mark per Question
   No Negative Marking
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
    "English",
    "Current Affairs"
];

const QUESTIONS_PER_SUBJECT = {
    "Mathematics": 20,
    "Reasoning": 20,
    "GK": 20,
    "Computer": 10,
    "English": 20,
    "Current Affairs": 10
};


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
   MATHEMATICS
========================================================= */

const MATHEMATICS_QUESTIONS = [

    {
        question: "A sum of ₹8,000 is divided into two parts and invested at 8% p.a. and 12% p.a. simple interest respectively. If the total simple interest received in 2 years is ₹1,600, then the amount invested at 12% p.a. is:",
        options: ["₹3,000","₹4,000","₹5,000","₹6,000"],
        answer: 1,
        explanation: "Let the amount at 12% be x. Then 2[0.08(8000 − x) + 0.12x] = 1600. This gives x = ₹4,000."
    },

    {
        question: "The average of 15 numbers is 28. If two numbers, 18 and 32, are removed, the average of the remaining numbers becomes:",
        options: ["28.46","29.00","29.23","30.00"],
        answer: 0,
        explanation: "Total = 15 × 28 = 420. After removing 18 and 32, total = 370. Remaining numbers = 13. Average = 370/13 = 28.46 approximately."
    },

    {
        question: "A train 180 m long crosses a platform 270 m long in 18 seconds. What is the speed of the train?",
        options: ["80 km/h","85 km/h","90 km/h","100 km/h"],
        answer: 2,
        explanation: "Total distance = 450 m. Speed = 450/18 = 25 m/s = 90 km/h."
    },

    {
        question: "If x + 1/x = 5, then the value of x³ + 1/x³ is:",
        options: ["110","115","120","125"],
        answer: 0,
        explanation: "x³ + 1/x³ = (x + 1/x)³ − 3(x + 1/x) = 125 − 15 = 110."
    },

    {
        question: "A shopkeeper marks an article 40% above its cost price and allows two successive discounts of 10% and 15%. His profit percentage is:",
        options: ["5%","7.1%","8%","10%"],
        answer: 1,
        explanation: "Let CP = 100. MP = 140. After 10% discount = 126. After 15% discount = 107.10. Profit = 7.10%."
    },

    {
        question: "The HCF of two numbers is 12 and their LCM is 720. If one of the numbers is 144, the other number is:",
        options: ["48","60","72","84"],
        answer: 1,
        explanation: "Product of two numbers = HCF × LCM = 12 × 720. Other number = 8640/144 = 60."
    },

    {
        question: "A can complete a work in 18 days and B can complete it in 24 days. They work together for 6 days, after which A leaves. In how many more days will B complete the remaining work?",
        options: ["8","9","10","12"],
        answer: 2,
        explanation: "Combined rate = 1/18 + 1/24 = 7/72. In 6 days they complete 7/12. Remaining = 5/12. B takes 10 days."
    },

    {
        question: "The radius of a cylinder is increased by 20% while its height is decreased by 10%. The percentage change in its volume is:",
        options: ["26% increase","29.6% increase","30% increase","32% increase"],
        answer: 1,
        explanation: "Volume ∝ r²h. New factor = (1.2)² × 0.9 = 1.296. Increase = 29.6%."
    },

    {
        question: "A man spends 75% of his income. If his income increases by 20% and his expenditure increases by 10%, his savings increase by ₹2,000. What was his original income?",
        options: ["₹10,000","₹12,000","₹16,000","₹20,000"],
        answer: 2,
        explanation: "Let income = I. Original saving = 0.25I. New saving = 1.2I − 0.825I = 0.375I. Increase = 0.125I = 2000. Therefore I = ₹16,000."
    },

    {
        question: "If the roots of the equation 2x² − 7x + 3 = 0 are α and β, then the value of α/β + β/α is:",
        options: ["37/6","31/6","29/6","25/6"],
        answer: 0,
        explanation: "α+β=7/2 and αβ=3/2. Therefore α/β+β/α = [(α+β)²−2αβ]/αβ = 37/6."
    },

    {
        question: "A mixture contains milk and water in the ratio 7 : 3. If 20 litres of the mixture are removed and replaced with water, the ratio becomes 7 : 5. What was the original quantity of the mixture?",
        options: ["100 L","110 L","120 L","140 L"],
        answer: 2,
        explanation: "After replacing 20 L, milk remains 7(x−20)/10. Using the final ratio 7:5 gives x = 120 L."
    },

    {
        question: "The area of a rectangular field is 1,296 m². If its length is 18 m more than its breadth, then the perimeter of the field is:",
        options: ["144 m","150 m","156 m","162 m"],
        answer: 0,
        explanation: "Let breadth = b. Then b(b+18)=1296. Hence b=27 and length=45. Perimeter=144 m."
    },

    {
        question: "A sum becomes ₹14,520 in 2 years and ₹15,972 in 3 years at compound interest, compounded annually. The principal is:",
        options: ["₹12,000","₹12,500","₹13,000","₹13,200"],
        answer: 0,
        explanation: "15972/14520 = 1.10, so the annual rate is 10%. P × 1.1² = 14520. Therefore P = ₹12,000."
    },

    {
        question: "A boat travels 30 km downstream in 2 hours and the same distance upstream in 3 hours. The speed of the boat in still water is:",
        options: ["10 km/h","12.5 km/h","15 km/h","20 km/h"],
        answer: 1,
        explanation: "Downstream speed = 15 km/h. Upstream speed = 10 km/h. Still-water speed = (15+10)/2 = 12.5 km/h."
    },

    {
        question: "If 20% of A = 30% of B and B = 40% of C, then A : C is:",
        options: ["3 : 5","2 : 3","3 : 4","4 : 5"],
        answer: 0,
        explanation: "20%A=30%B gives A=3B/2. B=2C/5. Therefore A=3C/5, so A:C=3:5."
    },

    {
        question: "The angles of a triangle are in the ratio 2 : 3 : 4. The difference between the largest and smallest angles is:",
        options: ["30°","35°","40°","45°"],
        answer: 2,
        explanation: "Total parts = 9. Each part = 20°. Angles are 40°, 60°, 80°. Difference = 40°."
    },

    {
        question: "A person covers a certain distance at 48 km/h and reaches 15 minutes late. If he travels at 60 km/h, he reaches 9 minutes early. The distance is:",
        options: ["72 km","80 km","96 km","108 km"],
        answer: 2,
        explanation: "Time difference = 24 minutes = 0.4 hour. D/48 − D/60 = 0.4. Therefore D = 96 km."
    },

    {
        question: "The smallest number which when divided by 12, 15 and 20 leaves a remainder of 7 in each case, but is exactly divisible by 17, is:",
        options: ["187","247","307","367"],
        answer: 0,
        explanation: "The number is 7 more than a multiple of LCM(12,15,20)=60. 187 is divisible by 17 and leaves remainder 7 in each case."
    },

    {
        question: "The diagonal of a rectangle is 25 cm and its length is 5 cm more than its breadth. The area of the rectangle is:",
        options: ["250 cm²","300 cm²","350 cm²","400 cm²"],
        answer: 1,
        explanation: "Let breadth=b and length=b+5. From Pythagoras, b=15 and length=20. Area=300 cm²."
    },

    {
        question: "A, B and C invest ₹6,000, ₹8,000 and ₹10,000 respectively in a business. After 4 months, A doubles his investment, while B withdraws 25% of his investment. If the total annual profit is ₹46,000, then B's share of the profit is:",
        options: ["₹11,500","₹12,000","₹12,500","₹13,000"],
        answer: 0,
        explanation: "A's capital-months = 120000, B's = 80000, C's = 120000. B's share = 80000/320000 × 46000 = ₹11,500."
    }
];


/* =========================================================
   REASONING
========================================================= */

const REASONING_QUESTIONS = [

    {
        question: "Book : Author :: Painting : ?",
        options: ["Artist","Gallery","Colour","Brush"],
        answer: 0,
        explanation: "An author creates a book; similarly, an artist creates a painting."
    },

    {
        question: "Find the missing number: 7, 13, 25, 49, 97, ?",
        options: ["181","193","195","197"],
        answer: 1,
        explanation: "Each term is multiplied by 2 and then 1 is subtracted. Therefore 97×2−1=193."
    },

    {
        question: "In a certain code language, MANGO is coded as OCPIQ. How will GRAPE be coded in the same language?",
        options: ["ITCRG","HSBQF","ITCQG","HTCRG"],
        answer: 0,
        explanation: "Each letter is moved two positions forward. GRAPE becomes ITCRG."
    },

    {
        question: "Find the number that does not belong to the group.",
        options: ["121","169","225","196"],
        answer: 3,
        explanation: "121=11², 169=13² and 225=15² have odd-numbered square roots. 196=14² is different."
    },

    {
        question: "Find the missing term: AZ, BY, CX, DW, ?",
        options: ["EU","EV","FV","EW"],
        answer: 1,
        explanation: "First letters move A,B,C,D,E while second letters move Z,Y,X,W,V. Answer = EV."
    },

    {
        question: "Pointing towards a woman, Ravi said, “She is the daughter of the only son of my grandfather.” How is the woman related to Ravi?",
        options: ["Sister","Mother","Daughter","Aunt"],
        answer: 0,
        explanation: "The only son of Ravi's grandfather is Ravi's father. His daughter is Ravi's sister."
    },

    {
        question: "A person starts walking 8 m towards the north. He then turns right and walks 15 m, turns right again and walks 8 m, and finally turns left and walks 5 m. How far and in which direction is he from the starting point?",
        options: ["20 m East","15 m East","20 m West","5 m East"],
        answer: 0,
        explanation: "The north and south movements cancel. Eastward movement = 15+5=20 m."
    },

    {
        question: "In a class, Rohan ranks 17th from the top and 24th from the bottom. If three students who were absent are included in the ranking, what will be the total number of students in the class?",
        options: ["43","44","45","46"],
        answer: 0,
        explanation: "Ranked students = 17+24−1=40. Adding three absent students gives 43."
    },

    {
        question: "Statements: All pens are books. Some books are papers. No paper is a pencil. Conclusions: I. Some pens are papers. II. No pencil is a book. III. Some books are not pencils. Which conclusion(s) logically follow?",
        options: ["Only I","Only III","II and III","I and III"],
        answer: 1,
        explanation: "The books that are papers cannot be pencils. Therefore III follows. I and II do not necessarily follow."
    },

    {
        question: "Find the number that replaces the question mark: 4, 7, 39; 5, 8, 53; 6, 9, ?",
        options: ["69","72","75","78"],
        answer: 0,
        explanation: "Pattern: first×second + first + second. 6×9+6+9=69."
    },

    {
        question: "Five persons P, Q, R, S and T are sitting in a row facing north. P sits immediately to the left of Q. R sits at the left extreme end. S sits immediately between R and T. Q is not at an extreme end. Who sits in the middle?",
        options: ["P","Q","S","T"],
        answer: 2,
        explanation: "R-S-T occupy the first three positions, while P-Q occupy the last two. Therefore S is in the middle."
    },

    {
        question: "If + means ×, − means ÷, × means +, and ÷ means −, then find: 18 + 6 − 3 × 4 ÷ 5 = ?",
        options: ["35","37","39","41"],
        answer: 0,
        explanation: "Replace symbols: 18×6÷3+4−5 = 36+4−5 = 35."
    },

    {
        question: "The government has introduced a new rule requiring all vehicles to undergo pollution testing every six months. Conclusions: I. Vehicle pollution is considered a concern by the authorities. II. All vehicles currently cause dangerous pollution. III. Regular testing may help monitor vehicle emissions. Which conclusion(s) logically follow?",
        options: ["Only I","Only II","I and III","II and III"],
        answer: 2,
        explanation: "The rule indicates concern and regular testing can monitor emissions. It does not establish that all vehicles cause dangerous pollution."
    },

    {
        question: "If CAT = 24 and DOG = 26, then according to the same pattern, BAT = ?",
        options: ["21","22","23","24"],
        answer: 2,
        explanation: "B=2, A=1, T=20. Therefore BAT=23."
    },

    {
        question: "If 1 January 2024 was Monday, then what day of the week was 1 January 2025?",
        options: ["Tuesday","Wednesday","Thursday","Friday"],
        answer: 1,
        explanation: "2024 was a leap year, shifting the next January 1 by two days. Monday becomes Wednesday."
    },

    {
        question: "In a group of 80 students, 45 like Mathematics, 35 like Science, and 20 like both Mathematics and Science. How many students like neither Mathematics nor Science?",
        options: ["15","20","25","30"],
        answer: 1,
        explanation: "At least one = 45+35−20=60. Neither = 80−60=20."
    },

    {
        question: "Arrange the following words in a logical order: 1. Seed 2. Flower 3. Fruit 4. Plant 5. Sprout",
        options: ["1, 5, 4, 2, 3","1, 4, 5, 2, 3","5, 1, 4, 3, 2","1, 5, 2, 4, 3"],
        answer: 0,
        explanation: "Natural sequence: Seed → Sprout → Plant → Flower → Fruit."
    },

    {
        question: "Choose the pair that follows the same relationship as 16 : 272.",
        options: ["18 : 340","19 : 381","21 : 460","22 : 506"],
        answer: 3,
        explanation: "The relationship is n : n(n+1). 16×17=272 and 22×23=506."
    },

    {
        question: "If the letters of the word COMPUTER are arranged alphabetically from left to right, which letter will be third from the right?",
        options: ["M","O","P","R"],
        answer: 2,
        explanation: "Alphabetical order: C,E,M,O,P,R,T,U. Third from the right is P."
    },

    {
        question: "Statement I: Some teachers are writers. Statement II: All writers are readers. Which of the following is definitely true?",
        options: ["All teachers are readers.","Some teachers are readers.","No teacher is a reader.","Some readers are not writers."],
        answer: 1,
        explanation: "Some teachers are writers and all writers are readers. Therefore some teachers are readers."
    }
];


/* =========================================================
   GENERAL KNOWLEDGE
========================================================= */

const GK_QUESTIONS = [

    {
        question: "Which Article of the Indian Constitution empowers the President to promulgate Ordinances?",
        options: ["Article 123","Article 213","Article 356","Article 360"],
        answer: 0,
        explanation: "Article 123 empowers the President to promulgate Ordinances when Parliament is not in session."
    },

    {
        question: "The Blue Revolution in India is primarily associated with:",
        options: ["Milk production","Fish production","Oilseed production","Egg production"],
        answer: 1,
        explanation: "The Blue Revolution is associated with fisheries and fish production."
    },

    {
        question: "Which of the following vitamin-deficiency pairs is incorrect?",
        options: ["Vitamin A — Night blindness","Vitamin B1 — Beriberi","Vitamin C — Scurvy","Vitamin K — Beriberi"],
        answer: 3,
        explanation: "Beriberi is caused by Vitamin B1 deficiency. Vitamin K deficiency is associated mainly with impaired blood clotting."
    },

    {
        question: "The 73rd Constitutional Amendment is primarily related to:",
        options: ["Municipalities","Panchayati Raj Institutions","Fundamental Duties","Emergency provisions"],
        answer: 1,
        explanation: "The 73rd Amendment gave constitutional status to Panchayati Raj Institutions."
    },

    {
        question: "Which institution issues most of India's currency notes?",
        options: ["SBI","RBI","Ministry of Finance","SEBI"],
        answer: 1,
        explanation: "The Reserve Bank of India issues currency notes except the ₹1 note, which is issued by the Government of India."
    },

    {
        question: "Who established the Ibadat Khana at Fatehpur Sikri?",
        options: ["Akbar","Shah Jahan","Aurangzeb","Humayun"],
        answer: 0,
        explanation: "Emperor Akbar established the Ibadat Khana for religious discussions."
    },

    {
        question: "Which of the following is NOT a Fundamental Duty under Article 51A?",
        options: ["To protect the environment","To develop scientific temper","To provide free and compulsory education to children aged 6–14","To respect the National Flag"],
        answer: 2,
        explanation: "The duty of parents/guardians to provide educational opportunities to children aged 6–14 is a Fundamental Duty, but the wording 'to provide free and compulsory education' is constitutionally associated with Article 21A as a right of children and the State's obligation."
    },

    {
        question: "The acceleration due to gravity at the centre of the Earth is:",
        options: ["Maximum","9.8 m/s²","Zero","Infinite"],
        answer: 2,
        explanation: "At the exact centre of a spherically symmetric Earth, gravitational acceleration is zero."
    },

    {
        question: "Which is the largest gland in the human body?",
        options: ["Pancreas","Thyroid","Liver","Pituitary"],
        answer: 2,
        explanation: "The liver is the largest gland in the human body."
    },

    {
        question: "The Permanent Settlement of Bengal was introduced by:",
        options: ["Lord Cornwallis","Lord Wellesley","Lord Curzon","Lord Dalhousie"],
        answer: 0,
        explanation: "Lord Cornwallis introduced the Permanent Settlement in 1793."
    },

    {
        question: "Which river is popularly known as the 'Sorrow of Bihar'?",
        options: ["Ganga","Kosi","Son","Gandak"],
        answer: 1,
        explanation: "The Kosi River is known as the Sorrow of Bihar because of its historical flooding and course changes."
    },

    {
        question: "The Finance Commission of India is constituted under which Article?",
        options: ["Article 280","Article 281","Article 275","Article 324"],
        answer: 0,
        explanation: "Article 280 provides for the constitution of the Finance Commission."
    },

    {
        question: "Which gas is a major greenhouse gas released during the complete combustion of fossil fuels?",
        options: ["Oxygen","Nitrogen","Carbon dioxide","Hydrogen"],
        answer: 2,
        explanation: "Complete combustion of fossil fuels produces carbon dioxide, a major greenhouse gas."
    },

    {
        question: "The Fourth Buddhist Council was held during the reign of:",
        options: ["Ashoka","Kanishka","Harsha","Chandragupta Maurya"],
        answer: 1,
        explanation: "The Fourth Buddhist Council is traditionally associated with Emperor Kanishka."
    },

    {
        question: "An increase in the Cash Reserve Ratio generally:",
        options: ["Increases banks' lending capacity","Decreases banks' lending capacity","Has no effect","Increases currency printing"],
        answer: 1,
        explanation: "A higher CRR requires banks to keep more funds with the RBI, reducing funds available for lending."
    },

    {
        question: "Sattriya is a classical dance form associated with:",
        options: ["Assam","Odisha","Kerala","Manipur"],
        answer: 0,
        explanation: "Sattriya originated in the Vaishnavite monasteries or Sattras of Assam."
    },

    {
        question: "The voting age in India was reduced from 21 to 18 years by the:",
        options: ["42nd Amendment","44th Amendment","61st Amendment","73rd Amendment"],
        answer: 2,
        explanation: "The 61st Constitutional Amendment Act, 1988 reduced the voting age from 21 to 18."
    },

    {
        question: "A person stands 5 m in front of a plane mirror and moves 2 m towards it. What is the distance between the person and the image?",
        options: ["3 m","4 m","6 m","10 m"],
        answer: 2,
        explanation: "After moving 2 m, the person is 3 m from the mirror. The image is also 3 m behind it. Distance = 6 m."
    },

    {
        question: "Which Harappan site is particularly famous for its ancient dockyard?",
        options: ["Kalibangan","Lothal","Rakhigarhi","Dholavira"],
        answer: 1,
        explanation: "Lothal in present-day Gujarat is famous for its ancient dockyard."
    },

    {
        question: "Which of the following is NOT a Fundamental Right under the present Constitution of India?",
        options: ["Right to Equality","Right to Freedom","Right to Property","Right against Exploitation"],
        answer: 2,
        explanation: "The Right to Property is now a constitutional/legal right under Article 300A, not a Fundamental Right."
    }
];


/* =========================================================
   COMPUTER — NEW 10 QUESTIONS
========================================================= */

const COMPUTER_QUESTIONS = [

    {
        question: "In the OSI model, which layer is primarily responsible for logical addressing and routing packets between different networks?",
        options: [
            "Data Link Layer",
            "Transport Layer",
            "Network Layer",
            "Session Layer"
        ],
        answer: 2,
        explanation: "The Network Layer (Layer 3) handles logical addressing such as IP addresses and routing packets between networks."
    },

    {
        question: "In a spreadsheet, the formula =IF(AND(A1>=40,B1>=40),\"Pass\",\"Fail\") will return 'Pass' when:",
        options: [
            "Either A1 or B1 is at least 40",
            "Both A1 and B1 are less than 40",
            "Both A1 and B1 are at least 40",
            "A1 is exactly 40 only"
        ],
        answer: 2,
        explanation: "The AND function returns TRUE only when both conditions are satisfied. Therefore both A1 and B1 must be at least 40."
    },

    {
        question: "Which SQL command removes all rows from a table while retaining the table structure?",
        options: [
            "DROP",
            "TRUNCATE",
            "DELETE DATABASE",
            "REMOVE"
        ],
        answer: 1,
        explanation: "TRUNCATE removes all rows while keeping the table structure. DROP removes the table itself."
    },

    {
        question: "An IPv4 address contains how many bits?",
        options: [
            "32 bits",
            "64 bits",
            "128 bits",
            "16 bits"
        ],
        answer: 0,
        explanation: "IPv4 addresses are 32 bits long, normally represented as four 8-bit decimal octets."
    },

    {
        question: "Which Windows keyboard shortcut directly opens Task Manager?",
        options: [
            "Ctrl + Shift + T",
            "Alt + F4",
            "Windows + R",
            "Ctrl + Shift + Esc"
        ],
        answer: 3,
        explanation: "Ctrl + Shift + Esc directly opens Windows Task Manager."
    },

    {
        question: "In a relational database, a foreign key is primarily used to:",
        options: [
            "Encrypt a database",
            "Establish a relationship between tables",
            "Sort records alphabetically",
            "Create a backup"
        ],
        answer: 1,
        explanation: "A foreign key references a key in another table and helps establish referential relationships between tables."
    },

    {
        question: "Which statement correctly distinguishes RAM from ROM?",
        options: [
            "RAM is generally volatile and allows read/write operations",
            "RAM is permanently stored even without power",
            "ROM loses all stored instructions when power is removed",
            "ROM is always faster than CPU cache"
        ],
        answer: 0,
        explanation: "RAM is volatile working memory used for temporary data and instructions. ROM is non-volatile."
    },

    {
        question: "Which statement best distinguishes a Trojan horse from a computer worm?",
        options: [
            "A Trojan is always harmless",
            "A worm cannot affect networks",
            "A Trojan typically disguises itself as legitimate software and does not inherently self-replicate like a worm",
            "A worm is a type of monitor"
        ],
        answer: 2,
        explanation: "A Trojan relies on deception and disguises itself as legitimate software. Worms are self-replicating malware."
    },

    {
        question: "What is the standard port number associated with HTTPS?",
        options: [
            "21",
            "25",
            "80",
            "443"
        ],
        answer: 3,
        explanation: "HTTPS normally uses TCP port 443, whereas ordinary HTTP commonly uses port 80."
    },

    {
        question: "What is the main security advantage of two-factor authentication (2FA)?",
        options: [
            "It removes the need for passwords completely",
            "It requires an additional verification factor beyond the password",
            "It makes internet speed faster",
            "It automatically encrypts every file on a computer"
        ],
        answer: 1,
        explanation: "2FA requires a second factor, such as a one-time code or security key, in addition to a password."
    }
];


/* =========================================================
   ENGLISH
========================================================= */

const ENGLISH_QUESTIONS = [

    {
        question: "What is the central idea of the passage?",
        options: [
            "The internet should replace traditional education.",
            "Students should avoid digital tools completely.",
            "Effective learning requires critical thinking beyond merely accessing information.",
            "Information is no longer useful in modern education."
        ],
        answer: 2,
        explanation: "The passage argues that access to information is insufficient; learners must critically analyse and understand it."
    },

    {
        question: "According to the passage, accessibility of information does not guarantee:",
        options: [
            "Understanding",
            "Availability",
            "Speed",
            "Technology"
        ],
        answer: 0,
        explanation: "The passage explicitly states that accessibility alone does not guarantee understanding."
    },

    {
        question: "The word 'superficial' in the passage most nearly means:",
        options: [
            "Extensive",
            "Accurate",
            "Permanent",
            "Shallow"
        ],
        answer: 3,
        explanation: "Superficial means lacking depth or thoroughness; hence 'shallow'."
    },

    {
        question: "Which of the following can be inferred from the passage?",
        options: [
            "Search engines always provide unreliable information.",
            "Digital tools are harmful to education.",
            "Critical evaluation of information is necessary for meaningful learning.",
            "Students should avoid reading online."
        ],
        answer: 2,
        explanation: "The author argues that learners must examine evidence and determine whether information is reliable and relevant."
    },

    {
        question: "According to the passage, digital tools are most effective when they are:",
        options: [
            "Used to replace teachers",
            "Used as instruments to support learning",
            "Used without questioning information",
            "Used only for entertainment"
        ],
        answer: 1,
        explanation: "The passage states that digital tools are most effective when used as instruments rather than substitutes for thought."
    },

    {
        question: "Neither the teacher nor the students ___ willing to accept the proposal.",
        options: [
            "was",
            "were",
            "has",
            "is"
        ],
        answer: 1,
        explanation: "With 'neither...nor', the verb agrees with the nearer subject. 'students' is plural, so 'were' is appropriate."
    },

    {
        question: "Choose the correct sentence: The chairman asked us to postpone the meeting ___ he returned.",
        options: [
            "until",
            "unless",
            "because",
            "although"
        ],
        answer: 0,
        explanation: "'Until' correctly indicates that the postponement continues up to the chairman's return."
    },

    {
        question: "Choose the word closest in meaning to 'meticulous'.",
        options: [
            "Careless",
            "Thorough",
            "Hasty",
            "Ordinary"
        ],
        answer: 1,
        explanation: "Meticulous means extremely careful and precise; 'thorough' is the closest option."
    },

    {
        question: "Choose the word opposite in meaning to 'obsolete'.",
        options: [
            "Ancient",
            "Outdated",
            "Modern",
            "Unused"
        ],
        answer: 2,
        explanation: "Obsolete means no longer useful or current. Its opposite is modern."
    },

    {
        question: "The idiom 'leave no stone unturned' means:",
        options: [
            "To create confusion",
            "To search thoroughly",
            "To avoid responsibility",
            "To make a quick decision"
        ],
        answer: 1,
        explanation: "The idiom means to make every possible effort or search everywhere."
    },

    {
        question: "A person who deliberately attempts to weaken or destroy an established system is described as:",
        options: [
            "Subversive",
            "Benevolent",
            "Optimistic",
            "Impartial"
        ],
        answer: 0,
        explanation: "Subversive refers to an attempt to undermine or overthrow an established system or authority."
    },

    {
        question: "Hardly had the train arrived ___ the passengers rushed towards the platform.",
        options: [
            "than",
            "when",
            "then",
            "as"
        ],
        answer: 1,
        explanation: "The standard correlative construction is 'Hardly...when'."
    },

    {
        question: "Choose the correct passive transformation: People believe that the scientist has discovered a new method.",
        options: [
            "It is believed that a new method has been discovered by the scientist.",
            "It was believed that the scientist discovers a new method.",
            "A new method believes that the scientist discovered it.",
            "The scientist is believed discovered a new method."
        ],
        answer: 0,
        explanation: "The impersonal passive construction 'It is believed that...' correctly transforms the sentence."
    },

    {
        question: "The teacher advised the students ___ waste their time.",
        options: [
            "to not",
            "not to",
            "not",
            "don't"
        ],
        answer: 1,
        explanation: "After 'advised', the correct infinitive construction is 'advised someone not to do something'."
    },

    {
        question: "Arrange the following sentences in the most logical order: P. Reading develops knowledge. Q. It also improves vocabulary. R. Regular reading therefore benefits communication. S. It exposes learners to different styles of expression.",
        options: [
            "PQRS",
            "QPRS",
            "PSQR",
            "PRQS"
        ],
        answer: 0,
        explanation: "P introduces reading's general benefit, Q adds vocabulary, R draws the consequence, and S gives another supporting point. The intended logical order is PQRS."
    },

    {
        question: "Choose the correct form: ___ working hard, she could not complete the assignment on time.",
        options: [
            "Despite",
            "Because",
            "Although of",
            "Since of"
        ],
        answer: 0,
        explanation: "'Despite' is followed by a noun or gerund phrase: 'Despite working hard...'."
    },

    {
        question: "Identify the error: Each of the students have submitted the assignment.",
        options: [
            "Each",
            "of the students",
            "have",
            "submitted"
        ],
        answer: 2,
        explanation: "'Each' is singular and requires 'has', not 'have'."
    },

    {
        question: "Choose the word closest in meaning to 'lucid'.",
        options: [
            "Confusing",
            "Clear",
            "Uncertain",
            "Lengthy"
        ],
        answer: 1,
        explanation: "Lucid means clear and easy to understand."
    },

    {
        question: "No sooner had he reached the station ___ the train left.",
        options: [
            "when",
            "then",
            "than",
            "as"
        ],
        answer: 2,
        explanation: "The standard construction is 'No sooner...than'."
    },

    {
        question: "A person who accepts something as true without sufficient evidence is called:",
        options: [
            "Sceptical",
            "Credulous",
            "Rational",
            "Critical"
        ],
        answer: 1,
        explanation: "Credulous describes a person who is too ready to believe something without sufficient evidence."
    }
];


/* =========================================================
   CURRENT AFFAIRS — JULY & AUGUST 2026
========================================================= */

const CURRENT_AFFAIRS_QUESTIONS = [

    {
        question: "In July 2026, the Union Government approved Semicon 2.0 with what total budget outlay?",
        options: [
            "₹50,000 crore",
            "₹76,000 crore",
            "₹1,00,000 crore",
            "₹1,27,500 crore"
        ],
        answer: 3,
        explanation: "Semicon 2.0 was approved in July 2026 with a total budget outlay of ₹1,27,500 crore."
    },

    {
        question: "The e-VSP Portal launched in July 2026 was associated with which organisation?",
        options: [
            "Vidhi Sahitya Prakashan",
            "National Archives of India",
            "Election Commission of India",
            "NITI Aayog"
        ],
        answer: 0,
        explanation: "The e-VSP Portal of Vidhi Sahitya Prakashan was launched on 15 July 2026 to expand digital access to legal literature."
    },

    {
        question: "Which Air Marshal assumed the appointment of Air Officer Commanding-in-Chief, South Western Air Command on 1 July 2026?",
        options: [
            "Air Marshal PV Shivanand",
            "Air Marshal Tejinder Singh",
            "Air Marshal Ashutosh Dixit",
            "Air Marshal Rajesh Anand"
        ],
        answer: 0,
        explanation: "Air Marshal PV Shivanand assumed the appointment of Air Officer Commanding-in-Chief, South Western Air Command on 1 July 2026."
    },

    {
        question: "In July 2026, the Index of Industrial Production (IIP) recorded year-on-year growth of:",
        options: [
            "4.7%",
            "5.4%",
            "6.7%",
            "7.8%"
        ],
        answer: 2,
        explanation: "The IIP recorded 6.7% year-on-year growth in July 2026."
    },

    {
        question: "India's combined merchandise and services exports in July 2026 were estimated at approximately:",
        options: [
            "US$60.14 billion",
            "US$70.14 billion",
            "US$75.14 billion",
            "US$80.14 billion"
        ],
        answer: 3,
        explanation: "India's combined merchandise and services exports were estimated at US$80.14 billion in July 2026."
    },

    {
        question: "India celebrated its 80th Independence Day on:",
        options: [
            "15 August 2026",
            "26 January 2026",
            "15 July 2026",
            "2 October 2026"
        ],
        answer: 0,
        explanation: "India's 80th Independence Day was celebrated on 15 August 2026."
    },

    {
        question: "The 2026 Independence Day celebrations at the Red Fort commemorated how many years of 'Vande Mataram'?",
        options: [
            "100 years",
            "125 years",
            "150 years",
            "175 years"
        ],
        answer: 2,
        explanation: "The 2026 celebrations marked 150 years of Vande Mataram."
    },

    {
        question: "As of 31 July 2026, approximately how many services were available on the UMANG platform?",
        options: [
            "1,575",
            "2,575",
            "3,575",
            "5,575"
        ],
        answer: 1,
        explanation: "The Government reported approximately 2,575 services on UMANG as of 31 July 2026."
    },

    {
        question: "The Har Ghar Tiranga campaign 2026 was observed nationwide from:",
        options: [
            "1–7 August",
            "5–12 August",
            "9–17 August",
            "15–25 August"
        ],
        answer: 2,
        explanation: "The 2026 Har Ghar Tiranga campaign was observed nationwide from 9 to 17 August 2026."
    },

    {
        question: "According to the Union Government's monthly accounts up to July 2026, total receipts of the Government of India were:",
        options: [
            "₹10,06,709 crore",
            "₹11,06,709 crore",
            "₹13,06,709 crore",
            "₹17,61,853 crore"
        ],
        answer: 2,
        explanation: "The Government of India received ₹13,06,709 crore up to July 2026. Total expenditure during the period was ₹17,61,853 crore."
    }
];


/* =========================================================
   COMBINE QUESTION BANK
========================================================= */

const QUESTION_BANK = {
    "Mathematics": MATHEMATICS_QUESTIONS,
    "Reasoning": REASONING_QUESTIONS,
    "GK": GK_QUESTIONS,
    "Computer": COMPUTER_QUESTIONS,
    "English": ENGLISH_QUESTIONS,
    "Current Affairs": CURRENT_AFFAIRS_QUESTIONS
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
   DOM HELPERS
========================================================= */

function get(id) {
    return document.getElementById(id);
}


/* =========================================================
   INITIALISE ANSWER OBJECT
========================================================= */

function initializeExamData() {

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
   PAGE CONTROL
========================================================= */

function showPage(pageId) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    const page = get(pageId);

    if (page) {
        page.classList.add("active");
    }
}


/* =========================================================
   CURRENT DATE AND TIME
========================================================= */

function updateDateTime() {

    const now = new Date();

    const dateText = now.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });

    const timeText = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    const element = get("currentDateTime");

    if (element) {
        element.textContent = `${dateText} | ${timeText}`;
    }
}


/* =========================================================
   DYNAMIC CURRENT AFFAIRS SUBJECT BUTTON
   Allows existing HTML to remain unchanged.
========================================================= */

function addCurrentAffairsButton() {

    const existingButtons = document.querySelectorAll(".subject-btn");

    if (!existingButtons.length) {
        return;
    }

    const alreadyExists = Array.from(existingButtons).some(btn => {
        return btn.textContent.trim() === "Current Affairs";
    });

    if (alreadyExists) {
        return;
    }

    const firstButton = existingButtons[0];
    const parent = firstButton.parentElement;

    if (!parent) {
        return;
    }

    const button = document.createElement("button");

    button.type = "button";
    button.className = "subject-btn";
    button.textContent = "Current Affairs";

    button.addEventListener("click", () => {

        saveCurrentSubjectPosition();

        currentSubject = "Current Affairs";
        currentQuestionIndex =
            subjectQuestionPositions[currentSubject] || 0;

        renderSubjectButtons();
        renderQuestion();
        renderQuestionPalette();
    });

    parent.appendChild(button);
}


/* =========================================================
   SUBJECT BUTTONS
========================================================= */

function renderSubjectButtons() {

    const buttons = document.querySelectorAll(".subject-btn");

    buttons.forEach(button => {

        const subject = button.textContent.trim();

        button.classList.toggle(
            "active",
            subject === currentSubject
        );

        if (SUBJECTS.includes(subject)) {

            button.onclick = () => {

                saveCurrentSubjectPosition();

                currentSubject = subject;

                currentQuestionIndex =
                    subjectQuestionPositions[currentSubject] || 0;

                renderSubjectButtons();
                renderQuestion();
                renderQuestionPalette();
            };
        }
    });
}


/* =========================================================
   SAVE CURRENT QUESTION POSITION
========================================================= */

function saveCurrentSubjectPosition() {

    if (!SUBJECTS.includes(currentSubject)) {
        return;
    }

    subjectQuestionPositions[currentSubject] =
        currentQuestionIndex;
}


/* =========================================================
   RENDER QUESTION
========================================================= */

function renderQuestion() {

    const questions = QUESTION_BANK[currentSubject];

    if (!questions || !questions.length) {
        return;
    }

    if (currentQuestionIndex < 0) {
        currentQuestionIndex = 0;
    }

    if (currentQuestionIndex >= questions.length) {
        currentQuestionIndex = questions.length - 1;
    }

    const currentQuestion =
        questions[currentQuestionIndex];

    const questionNumber = get("questionNumber");
    const questionText = get("questionText");
    const optionsContainer = get("optionsContainer");

    if (questionNumber) {

        let globalNumber = 0;

        SUBJECTS.forEach(subject => {

            if (subject === currentSubject) {
                return;
            }

            globalNumber +=
                QUESTION_BANK[subject].length;
        });

        globalNumber += currentQuestionIndex + 1;

        questionNumber.textContent =
            `Question ${globalNumber}`;
    }

    if (questionText) {

        if (
            currentSubject === "English" &&
            currentQuestionIndex < 5
        ) {

            questionText.innerHTML =
                ENGLISH_PASSAGE +
                `<div class="question-text-main">
                    ${currentQuestion.question}
                </div>`;

        } else {

            questionText.innerHTML =
                `<div class="question-text-main">
                    ${currentQuestion.question}
                </div>`;
        }
    }

    if (!optionsContainer) {
        return;
    }

    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {

        const optionDiv =
            document.createElement("div");

        optionDiv.className = "option";

        if (
            answers[currentSubject] &&
            answers[currentSubject][currentQuestionIndex] === index
        ) {
            optionDiv.classList.add("selected");
        }

        const letter =
            String.fromCharCode(65 + index);

        optionDiv.innerHTML = `
            <span class="option-letter">${letter}</span>
            <span class="option-text">${option}</span>
        `;

        optionDiv.addEventListener("click", () => {

            answers[currentSubject][currentQuestionIndex] =
                index;

            renderQuestion();
            renderQuestionPalette();
        });

        optionsContainer.appendChild(optionDiv);
    });

    updateNavigationButtons();
}


/* =========================================================
   NAVIGATION BUTTONS
========================================================= */

function updateNavigationButtons() {

    const questions =
        QUESTION_BANK[currentSubject];

    const previousBtn = get("previousBtn");
    const nextBtn = get("nextBtn");

    if (previousBtn) {
        previousBtn.disabled =
            currentQuestionIndex === 0;
    }

    if (nextBtn) {
        nextBtn.disabled =
            currentQuestionIndex === questions.length - 1;
    }
}


/* =========================================================
   NEXT QUESTION
========================================================= */

function goToNextQuestion() {

    const questions =
        QUESTION_BANK[currentSubject];

    if (currentQuestionIndex < questions.length - 1) {

        currentQuestionIndex++;

        saveCurrentSubjectPosition();

        renderQuestion();
        renderQuestionPalette();
    }
}


/* =========================================================
   PREVIOUS QUESTION
========================================================= */

function goToPreviousQuestion() {

    if (currentQuestionIndex > 0) {

        currentQuestionIndex--;

        saveCurrentSubjectPosition();

        renderQuestion();
        renderQuestionPalette();
    }
}


/* =========================================================
   CLEAR ANSWER
========================================================= */

function clearCurrentAnswer() {

    if (!answers[currentSubject]) {
        return;
    }

    answers[currentSubject][currentQuestionIndex] = null;

    renderQuestion();
    renderQuestionPalette();
}


/* =========================================================
   REVIEW QUESTION
========================================================= */

function toggleReview() {

    reviewStatus[currentSubject][currentQuestionIndex] =
        !reviewStatus[currentSubject][currentQuestionIndex];

    renderQuestionPalette();
}


/* =========================================================
   QUESTION PALETTE
========================================================= */

function renderQuestionPalette() {

    const container = get("questionNumbers");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    const questions =
        QUESTION_BANK[currentSubject];

    questions.forEach((question, index) => {

        const button =
            document.createElement("button");

        button.type = "button";
        button.className = "question-number-btn";

        button.textContent = index + 1;

        if (
            answers[currentSubject][index] !== null
        ) {
            button.classList.add("answered");
        }

        if (
            reviewStatus[currentSubject][index]
        ) {
            button.classList.add("review");
        }

        if (
            index === currentQuestionIndex
        ) {
            button.classList.add("current");
        }

        button.addEventListener("click", () => {

            currentQuestionIndex = index;

            saveCurrentSubjectPosition();

            renderQuestion();
            renderQuestionPalette();

            /* IMPORTANT:
               Palette remains OPEN after selecting question.
            */
        });

        container.appendChild(button);
    });

    const paletteSubject = get("paletteSubject");

    if (paletteSubject) {
        paletteSubject.textContent =
            currentSubject;
    }
}


/* =========================================================
   OPEN PALETTE
========================================================= */

function openPalette() {

    const palette = get("questionPalette");
    const overlay = get("paletteOverlay");

    if (palette) {
        palette.classList.add("open");
    }

    if (overlay) {
        overlay.classList.add("show");
    }
}


/* =========================================================
   CLOSE PALETTE
========================================================= */

function closePalette() {

    const palette = get("questionPalette");
    const overlay = get("paletteOverlay");

    if (palette) {
        palette.classList.remove("open");
    }

    if (overlay) {
        overlay.classList.remove("show");
    }
}


/* =========================================================
   TIMER
========================================================= */

function updateTimer() {

    const timer = get("timer");

    if (!timer) {
        return;
    }

    const minutes =
        Math.floor(timeLeft / 60);

    const seconds =
        timeLeft % 60;

    timer.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    if (timeLeft <= 300) {
        timer.classList.add("danger");
    } else {
        timer.classList.remove("danger");
    }
}


function startTimer() {

    clearInterval(timerInterval);

    updateTimer();

    timerInterval = setInterval(() => {

        if (examSubmitted) {
            clearInterval(timerInterval);
            return;
        }

        timeLeft--;

        updateTimer();

        if (timeLeft <= 0) {

            clearInterval(timerInterval);

            alert(
                "Time is over. Your examination will be submitted automatically."
            );

            submitExam();
        }

    }, 1000);
}


/* =========================================================
   FULLSCREEN
========================================================= */

function enterFullscreen() {

    const element =
        document.documentElement;

    if (
        document.fullscreenElement ||
        document.webkitFullscreenElement
    ) {
        return;
    }

    if (element.requestFullscreen) {

        element.requestFullscreen().catch(() => {});

    } else if (element.webkitRequestFullscreen) {

        element.webkitRequestFullscreen();
    }
}


/* =========================================================
   LOGIN
========================================================= */

function startExam() {

    const nameInput = get("studentName");
    const passwordInput = get("examPassword");
    const loginError = get("loginError");

    const name =
        nameInput ? nameInput.value.trim() : "";

    const password =
        passwordInput ? passwordInput.value.trim() : "";

    if (!name) {

        if (loginError) {
            loginError.textContent =
                "Please enter your name.";
        }

        return;
    }

    if (password !== EXAM_PASSWORD) {

        if (loginError) {
            loginError.textContent =
                "Incorrect examination password.";
        }

        return;
    }

    if (loginError) {
        loginError.textContent = "";
    }

    studentName = name;

    initializeExamData();

    currentSubject = "Mathematics";
    currentQuestionIndex = 0;

    timeLeft = EXAM_DURATION_SECONDS;
    examSubmitted = false;

    const displayedStudentName =
        get("displayedStudentName");

    if (displayedStudentName) {
        displayedStudentName.textContent =
            studentName;
    }

    showPage("examPage");

    renderSubjectButtons();
    renderQuestion();
    renderQuestionPalette();

    updateDateTime();

    startTimer();

    enterFullscreen();
}


/* =========================================================
   SUBMIT MODAL
========================================================= */

function openSubmitModal() {

    const modal = get("submitModal");

    if (modal) {
        modal.classList.add("show");
    }
}


function closeSubmitModal() {

    const modal = get("submitModal");

    if (modal) {
        modal.classList.remove("show");
    }
}


/* =========================================================
   CALCULATE RESULT
========================================================= */

function calculateResult() {

    let total = 0;
    let correct = 0;
    let wrong = 0;
    let notAttempted = 0;

    const sectionResults = [];

    SUBJECTS.forEach(subject => {

        const questions =
            QUESTION_BANK[subject];

        const subjectAnswers =
            answers[subject];

        let subjectCorrect = 0;
        let subjectWrong = 0;
        let subjectNotAttempted = 0;

        questions.forEach((question, index) => {

            total++;

            const selected =
                subjectAnswers[index];

            if (selected === null) {

                notAttempted++;
                subjectNotAttempted++;

            } else if (selected === question.answer) {

                correct++;
                subjectCorrect++;

            } else {

                wrong++;
                subjectWrong++;
            }
        });

        sectionResults.push({
            subject,
            total: questions.length,
            correct: subjectCorrect,
            wrong: subjectWrong,
            notAttempted: subjectNotAttempted,
            marks: subjectCorrect
        });
    });

    return {
        total,
        correct,
        wrong,
        notAttempted,
        marks: correct,
        percentage: (correct / total) * 100,
        sectionResults
    };
}


/* =========================================================
   RESULT PAGE
========================================================= */

function displayResult() {

    const result =
        calculateResult();

    const finalStudentName =
        get("finalStudentName");

    const totalMarks =
        get("totalMarks");

    const correctAnswers =
        get("correctAnswers");

    const wrongAnswers =
        get("wrongAnswers");

    const notAttempted =
        get("notAttempted");

    const percentage =
        get("percentage");

    if (finalStudentName) {
        finalStudentName.textContent =
            studentName;
    }

    if (totalMarks) {
        totalMarks.textContent =
            `${result.marks} / ${result.total}`;
    }

    if (correctAnswers) {
        correctAnswers.textContent =
            result.correct;
    }

    if (wrongAnswers) {
        wrongAnswers.textContent =
            result.wrong;
    }

    if (notAttempted) {
        notAttempted.textContent =
            result.notAttempted;
    }

    if (percentage) {
        percentage.textContent =
            `${result.percentage.toFixed(2)}%`;
    }

    renderSectionResults(
        result.sectionResults
    );

    renderReview();

    saveResultForRank(result);
    displayRank(result);
}


/* =========================================================
   SECTION RESULT
========================================================= */

function renderSectionResults(results) {

    const container =
        get("sectionResults");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    results.forEach(result => {

        const card =
            document.createElement("div");

        card.className =
            "section-result-card";

        card.innerHTML = `
            <h3>${result.subject}</h3>

            <div>
                <strong>${result.marks}/${result.total}</strong>
            </div>

            <p>
                Correct: ${result.correct}
                &nbsp; | &nbsp;
                Wrong: ${result.wrong}
                &nbsp; | &nbsp;
                Not Attempted: ${result.notAttempted}
            </p>
        `;

        container.appendChild(card);
    });
}


/* =========================================================
   REVIEW ANSWERS
========================================================= */

function renderReview() {

    const container =
        get("reviewAnswers");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    let globalNumber = 0;

    SUBJECTS.forEach(subject => {

        const questions =
            QUESTION_BANK[subject];

        questions.forEach((question, index) => {

            globalNumber++;

            const selected =
                answers[subject][index];

            const correctAnswer =
                question.answer;

            const review =
                document.createElement("div");

            review.className =
                "review-question";

            let statusClass = "";
            let statusText = "";

            if (selected === null) {

                statusClass = "";
                statusText = "Not Attempted";

            } else if (
                selected === correctAnswer
            ) {

                statusClass = "correct";
                statusText = "Correct";

            } else {

                statusClass = "wrong";
                statusText = "Wrong";
            }

            let selectedText =
                "Not Attempted";

            if (selected !== null) {
                selectedText =
                    `${String.fromCharCode(65 + selected)}. ${question.options[selected]}`;
            }

            const correctText =
                `${String.fromCharCode(65 + correctAnswer)}. ${question.options[correctAnswer]}`;

            review.innerHTML = `
                <h4>
                    Q${globalNumber}. ${question.question}
                </h4>

                <p>
                    <strong>Your Answer:</strong>
                    ${selectedText}
                </p>

                <p>
                    <strong>Correct Answer:</strong>
                    ${correctText}
                </p>

                <p class="${statusClass}">
                    <strong>${statusText}</strong>
                </p>

                <p>
                    <strong>Explanation:</strong>
                    ${question.explanation}
                </p>
            `;

            container.appendChild(review);
        });
    });
}


/* =========================================================
   SIMPLE LOCAL RANK SYSTEM
========================================================= */

function saveResultForRank(result) {

    try {

        const key =
            "lakshya_mock_test_results";

        const stored =
            JSON.parse(
                localStorage.getItem(key) || "[]"
            );

        stored.push({
            name: studentName,
            marks: result.marks,
            percentage: result.percentage,
            date: new Date().toISOString()
        });

        stored.sort((a, b) => {

            if (b.marks !== a.marks) {
                return b.marks - a.marks;
            }

            return new Date(a.date) -
                   new Date(b.date);
        });

        localStorage.setItem(
            key,
            JSON.stringify(stored)
        );

    } catch (error) {

        console.log(
            "Rank data could not be saved.",
            error
        );
    }
}


function displayRank(result) {

    try {

        const key =
            "lakshya_mock_test_results";

        const stored =
            JSON.parse(
                localStorage.getItem(key) || "[]"
            );

        const currentIndex =
            stored.findIndex(item =>
                item.name === studentName &&
                item.marks === result.marks
            );

        const rank =
            currentIndex >= 0
                ? currentIndex + 1
                : stored.length;

        const rankElements =
            document.querySelectorAll(
                ".rank, #rank, [data-rank]"
            );

        rankElements.forEach(element => {
            element.textContent =
                rank;
        });

    } catch (error) {

        console.log(
            "Rank could not be displayed.",
            error
        );
    }
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

    closeSubmitModal();

    displayResult();

    showPage("resultPage");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   CONFIRM SUBMISSION
========================================================= */

function confirmSubmission() {

    submitExam();
}


/* =========================================================
   KEYBOARD NAVIGATION
========================================================= */

document.addEventListener("keydown", event => {

    if (examSubmitted) {
        return;
    }

    const examPage =
        get("examPage");

    if (
        !examPage ||
        !examPage.classList.contains("active")
    ) {
        return;
    }

    if (
        event.key === "ArrowRight"
    ) {

        event.preventDefault();

        goToNextQuestion();
    }

    if (
        event.key === "ArrowLeft"
    ) {

        event.preventDefault();

        goToPreviousQuestion();
    }
});


/* =========================================================
   PREVENT ACCIDENTAL PAGE EXIT
========================================================= */

window.addEventListener(
    "beforeunload",
    event => {

        if (
            !examSubmitted &&
            get("examPage") &&
            get("examPage").classList.contains("active")
        ) {

            event.preventDefault();

            event.returnValue = "";
        }
    }
);


/* =========================================================
   DISABLE BACK BUTTON DURING EXAMINATION
========================================================= */

function protectExamHistory() {

    if (
        !get("examPage") ||
        !get("examPage").classList.contains("active")
    ) {
        return;
    }

    history.pushState(
        null,
        "",
        window.location.href
    );
}


window.addEventListener(
    "popstate",
    () => {

        if (
            !examSubmitted &&
            get("examPage") &&
            get("examPage").classList.contains("active")
        ) {

            history.pushState(
                null,
                "",
                window.location.href
            );

            alert(
                "Going back is disabled during the examination."
            );
        }
    }
);


/* =========================================================
   DISABLE RIGHT CLICK DURING EXAM
========================================================= */

document.addEventListener(
    "contextmenu",
    event => {

        if (
            get("examPage") &&
            get("examPage").classList.contains("active") &&
            !examSubmitted
        ) {
            event.preventDefault();
        }
    }
);


/* =========================================================
   EVENT LISTENERS
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        addCurrentAffairsButton();

        renderSubjectButtons();

        updateDateTime();

        setInterval(
            updateDateTime,
            1000
        );


        /* -----------------------------------------
           HOME → LOGIN
        ----------------------------------------- */

        const startHomeBtn =
            get("startHomeBtn");

        if (startHomeBtn) {

            startHomeBtn.addEventListener(
                "click",
                () => {

                    showPage("loginPage");

                    const studentInput =
                        get("studentName");

                    if (studentInput) {
                        studentInput.focus();
                    }
                }
            );
        }


        /* -----------------------------------------
           LOGIN → EXAM
        ----------------------------------------- */

        const startExamBtn =
            get("startExamBtn");

        if (startExamBtn) {

            startExamBtn.addEventListener(
                "click",
                startExam
            );
        }


        /* -----------------------------------------
           ENTER KEY LOGIN
        ----------------------------------------- */

        const examPassword =
            get("examPassword");

        if (examPassword) {

            examPassword.addEventListener(
                "keydown",
                event => {

                    if (event.key === "Enter") {
                        startExam();
                    }
                }
            );
        }


        const studentInput =
            get("studentName");

        if (studentInput) {

            studentInput.addEventListener(
                "keydown",
                event => {

                    if (event.key === "Enter") {

                        const password =
                            get("examPassword");

                        if (password) {
                            password.focus();
                        }
                    }
                }
            );
        }


        /* -----------------------------------------
           PREVIOUS
        ----------------------------------------- */

        const previousBtn =
            get("previousBtn");

        if (previousBtn) {

            previousBtn.addEventListener(
                "click",
                goToPreviousQuestion
            );
        }


        /* -----------------------------------------
           NEXT
        ----------------------------------------- */

        const nextBtn =
            get("nextBtn");

        if (nextBtn) {

            nextBtn.addEventListener(
                "click",
                goToNextQuestion
            );
        }


        /* -----------------------------------------
           REVIEW
        ----------------------------------------- */

        const reviewBtn =
            get("reviewBtn");

        if (reviewBtn) {

            reviewBtn.addEventListener(
                "click",
                toggleReview
            );
        }


        /* -----------------------------------------
           CLEAR
        ----------------------------------------- */

        const clearBtn =
            get("clearBtn");

        if (clearBtn) {

            clearBtn.addEventListener(
                "click",
                clearCurrentAnswer
            );
        }


        /* -----------------------------------------
           OPEN PALETTE
        ----------------------------------------- */

        const openPaletteBtn =
            get("openPaletteBtn");

        if (openPaletteBtn) {

            openPaletteBtn.addEventListener(
                "click",
                openPalette
            );
        }


        /* -----------------------------------------
           CLOSE PALETTE
        ----------------------------------------- */

        const closePaletteBtn =
            get("closePaletteBtn");

        if (closePaletteBtn) {

            closePaletteBtn.addEventListener(
                "click",
                closePalette
            );
        }


        /* -----------------------------------------
           PALETTE OVERLAY
        ----------------------------------------- */

        const paletteOverlay =
            get("paletteOverlay");

        if (paletteOverlay) {

            paletteOverlay.addEventListener(
                "click",
                closePalette
            );
        }


        /* -----------------------------------------
           SUBMIT BUTTON
        ----------------------------------------- */

        const submitBtn =
            get("submitBtn");

        if (submitBtn) {

            submitBtn.addEventListener(
                "click",
                openSubmitModal
            );
        }


        /* -----------------------------------------
           CONFIRM SUBMIT
        ----------------------------------------- */

        const confirmSubmitBtn =
            get("confirmSubmitBtn");

        if (confirmSubmitBtn) {

            confirmSubmitBtn.addEventListener(
                "click",
                confirmSubmission
            );
        }


        /* -----------------------------------------
           CANCEL SUBMIT
        ----------------------------------------- */

        const cancelSubmitBtn =
            get("cancelSubmitBtn");

        if (cancelSubmitBtn) {

            cancelSubmitBtn.addEventListener(
                "click",
                closeSubmitModal
            );
        }


        /* -----------------------------------------
           FULLSCREEN
        ----------------------------------------- */

        const fullscreenBtn =
            get("fullscreenBtn");

        if (fullscreenBtn) {

            fullscreenBtn.addEventListener(
                "click",
                enterFullscreen
            );
        }


        /* -----------------------------------------
           EXAM HISTORY PROTECTION
        ----------------------------------------- */

        window.addEventListener(
            "load",
            protectExamHistory
        );
    }
);


/* =========================================================
   INITIAL DATE/TIME
========================================================= */

updateDateTime();
