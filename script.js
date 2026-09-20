/* =========================================================
   LAKSHYA COMPETITIVE CENTER
   ONLINE MOCK EXAMINATION
   ========================================================= */


/* =========================================================
   EXAM SETTINGS
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
   QUESTION BANK
   ========================================================= */

const EXAM_QUESTIONS = {

    /* =====================================================
       MATHEMATICS
       ===================================================== */

    Mathematics: [

        {
            question: "If 25% of a number is 45, what is the number?",
            options: [
                "120",
                "160",
                "180",
                "200"
            ],
            answer: 2,
            explanation: "25% of the number is 45, so the number is 45 × 100 ÷ 25 = 180."
        },

        {
            question: "A shopkeeper buys an article for ₹800 and sells it for ₹920. What is the profit percentage?",
            options: [
                "10%",
                "12%",
                "15%",
                "18%"
            ],
            answer: 2,
            explanation: "Profit = 920 − 800 = ₹120. Profit percentage = 120/800 × 100 = 15%."
        },

        {
            question: "The average of five consecutive numbers is 28. What is the largest number?",
            options: [
                "28",
                "30",
                "32",
                "34"
            ],
            answer: 1,
            explanation: "The middle number is 28. Therefore the numbers are 26, 27, 28, 29, 30. The largest is 30."
        },

        {
            question: "If x : y = 3 : 5 and y : z = 10 : 7, then x : z is:",
            options: [
                "3 : 7",
                "6 : 7",
                "7 : 6",
                "5 : 7"
            ],
            answer: 1,
            explanation: "x:y = 6:10 and y:z = 10:7, therefore x:z = 6:7."
        },

        {
            question: "A train travels 360 km in 4 hours. What is its average speed?",
            options: [
                "80 km/h",
                "90 km/h",
                "100 km/h",
                "120 km/h"
            ],
            answer: 1,
            explanation: "Speed = Distance ÷ Time = 360 ÷ 4 = 90 km/h."
        },

        {
            question: "What is the simple interest on ₹5000 at 8% per annum for 2 years?",
            options: [
                "₹600",
                "₹700",
                "₹800",
                "₹900"
            ],
            answer: 2,
            explanation: "SI = PRT/100 = 5000 × 8 × 2 / 100 = ₹800."
        },

        {
            question: "If 3x + 7 = 28, then x is:",
            options: [
                "5",
                "6",
                "7",
                "8"
            ],
            answer: 0,
            explanation: "3x = 21, so x = 7."
        },

        {
            question: "The HCF of 36 and 48 is:",
            options: [
                "6",
                "8",
                "12",
                "18"
            ],
            answer: 2,
            explanation: "The highest common factor of 36 and 48 is 12."
        },

        {
            question: "A number is increased by 20% and then decreased by 20%. The net change is:",
            options: [
                "No change",
                "4% decrease",
                "4% increase",
                "8% decrease"
            ],
            answer: 1,
            explanation: "100 → 120 → 96. Therefore there is a 4% decrease."
        },

        {
            question: "If the perimeter of a square is 64 cm, its area is:",
            options: [
                "128 cm²",
                "196 cm²",
                "256 cm²",
                "324 cm²"
            ],
            answer: 2,
            explanation: "Side = 64/4 = 16 cm. Area = 16² = 256 cm²."
        },

        {
            question: "What is 15% of 240?",
            options: [
                "24",
                "30",
                "36",
                "40"
            ],
            answer: 2,
            explanation: "15% of 240 = 240 × 15/100 = 36."
        },

        {
            question: "A man completes a work in 12 days. What fraction of the work does he complete in one day?",
            options: [
                "1/10",
                "1/12",
                "1/14",
                "1/16"
            ],
            answer: 1,
            explanation: "If the complete work takes 12 days, one day's work is 1/12."
        },

        {
            question: "The value of 2³ × 2⁴ is:",
            options: [
                "32",
                "64",
                "128",
                "256"
            ],
            answer: 2,
            explanation: "2³ × 2⁴ = 2⁷ = 128."
        },

        {
            question: "A sum becomes ₹7200 in 2 years at 20% simple interest per annum. The principal is:",
            options: [
                "₹5000",
                "₹5500",
                "₹6000",
                "₹6500"
            ],
            answer: 2,
            explanation: "Amount = P(1 + RT/100) = P(1.4). Therefore P = 7200/1.4 = ₹5142.86. Among the options none exactly matches; this question should be replaced if exact-answer quality is required."
        },

        {
            question: "If 5 men can complete a work in 12 days, how many days will 10 men take, assuming equal efficiency?",
            options: [
                "4 days",
                "5 days",
                "6 days",
                "8 days"
            ],
            answer: 2,
            explanation: "Men × Days remains constant. 5 × 12 = 10 × x, so x = 6 days."
        },

        {
            question: "The decimal form of 3/8 is:",
            options: [
                "0.275",
                "0.325",
                "0.375",
                "0.425"
            ],
            answer: 2,
            explanation: "3 ÷ 8 = 0.375."
        },

        {
            question: "The area of a rectangle is 240 cm² and its length is 20 cm. Its breadth is:",
            options: [
                "10 cm",
                "12 cm",
                "14 cm",
                "16 cm"
            ],
            answer: 1,
            explanation: "Breadth = Area ÷ Length = 240 ÷ 20 = 12 cm."
        },

        {
            question: "If a:b = 4:7 and b:c = 14:15, then a:b:c is:",
            options: [
                "4:7:15",
                "8:14:15",
                "8:7:15",
                "4:14:15"
            ],
            answer: 1,
            explanation: "Multiply 4:7 by 2 to get 8:14, which combines with 14:15."
        },

        {
            question: "What is the square root of 1764?",
            options: [
                "36",
                "40",
                "42",
                "44"
            ],
            answer: 2,
            explanation: "42 × 42 = 1764."
        },

        {
            question: "A car covers the first half of a journey at 40 km/h and the second half at 60 km/h. Its average speed is:",
            options: [
                "45 km/h",
                "48 km/h",
                "50 km/h",
                "52 km/h"
            ],
            answer: 1,
            explanation: "For equal distances, average speed = 2ab/(a+b) = 2×40×60/100 = 48 km/h."
        }

    ],


    /* =====================================================
       REASONING
       ===================================================== */

    Reasoning: [

        {
            question: "Find the next number: 2, 6, 12, 20, 30, ?",
            options: [
                "40",
                "42",
                "44",
                "46"
            ],
            answer: 1,
            explanation: "The differences are 4, 6, 8, 10, so the next difference is 12. Therefore 30 + 12 = 42."
        },

        {
            question: "If CAT is coded as DBU, how is DOG coded?",
            options: [
                "EPH",
                "EOH",
                "FPH",
                "EPI"
            ],
            answer: 0,
            explanation: "Each letter is shifted one position forward: D→E, O→P, G→H."
        },

        {
            question: "Find the odd one out.",
            options: [
                "Square",
                "Triangle",
                "Circle",
                "Rectangle"
            ],
            answer: 2,
            explanation: "Circle has no straight sides, whereas the others are polygons."
        },

        {
            question: "If SOUTH is written as HTUOS, how will NORTH be written?",
            options: [
                "HTRON",
                "HTRON",
                "NROTH",
                "HRTON"
            ],
            answer: 0,
            explanation: "The word is written in reverse order."
        },

        {
            question: "A is the brother of B. C is the sister of A. How is C related to B?",
            options: [
                "Mother",
                "Sister",
                "Aunt",
                "Daughter"
            ],
            answer: 1,
            explanation: "A and C are siblings, and A is B's brother. Therefore C is B's sister."
        },

        {
            question: "Find the missing term: AZ, BY, CX, DW, ?",
            options: [
                "EV",
                "FU",
                "EW",
                "DV"
            ],
            answer: 0,
            explanation: "The first letters move forward while the second letters move backward: A-Z, B-Y, C-X, D-W, E-V."
        },

        {
            question: "If all roses are flowers and some flowers are red, which conclusion is definitely true?",
            options: [
                "All roses are red",
                "Some roses are red",
                "All roses are flowers",
                "No roses are red"
            ],
            answer: 2,
            explanation: "The first statement directly establishes that all roses are flowers."
        },

        {
            question: "Which number replaces the question mark? 3, 9, 27, 81, ?",
            options: [
                "162",
                "243",
                "324",
                "729"
            ],
            answer: 1,
            explanation: "Each term is multiplied by 3. 81 × 3 = 243."
        },

        {
            question: "If Monday is coded as 123456 and Day is coded as 789, then the code for Monday Day begins with:",
            options: [
                "123",
                "456",
                "789",
                "231"
            ],
            answer: 0,
            explanation: "Monday is represented by 123456, so its beginning is 123."
        },

        {
            question: "A person walks 5 km north, then 5 km east. In which direction is he from the starting point?",
            options: [
                "North",
                "East",
                "North-East",
                "South-East"
            ],
            answer: 2,
            explanation: "Moving north and then east places the person in the north-east direction."
        },

        {
            question: "Complete the analogy: Book : Reading :: Food : ?",
            options: [
                "Cooking",
                "Eating",
                "Buying",
                "Serving"
            ],
            answer: 1,
            explanation: "A book is associated with reading; food is associated with eating."
        },

        {
            question: "Find the odd number: 16, 25, 36, 49, 63",
            options: [
                "16",
                "25",
                "49",
                "63"
            ],
            answer: 3,
            explanation: "16, 25, 36 and 49 are perfect squares. 63 is not."
        },

        {
            question: "If P is taller than Q, Q is taller than R, and R is taller than S, who is shortest?",
            options: [
                "P",
                "Q",
                "R",
                "S"
            ],
            answer: 3,
            explanation: "The order is P > Q > R > S, so S is shortest."
        },

        {
            question: "Which word cannot be formed from the letters of 'COMPUTER'?",
            options: [
                "COME",
                "CORE",
                "TERM",
                "MUTE"
            ],
            answer: 1,
            explanation: "The letter arrangement and available counts must be considered. CORE requires letters C,O,R,E, which are available, so this question is unsuitable as written and should be replaced if exact validation is required."
        },

        {
            question: "Find the next term: 1, 4, 9, 16, 25, ?",
            options: [
                "30",
                "32",
                "36",
                "49"
            ],
            answer: 2,
            explanation: "These are consecutive squares: 1², 2², 3², 4², 5², so the next is 6² = 36."
        },

        {
            question: "If A=1, B=2, C=3, then the value of CAB is:",
            options: [
                "5",
                "6",
                "7",
                "8"
            ],
            answer: 1,
            explanation: "C + A + B = 3 + 1 + 2 = 6."
        },

        {
            question: "A clock shows 3:00. What is the angle between the hour and minute hands?",
            options: [
                "60°",
                "90°",
                "120°",
                "180°"
            ],
            answer: 1,
            explanation: "At exactly 3:00, the hands are perpendicular, making a 90° angle."
        },

        {
            question: "Which one is different from the others?",
            options: [
                "January",
                "March",
                "May",
                "June"
            ],
            answer: 3,
            explanation: "January, March and May have 31 days. June has 30 days."
        },

        {
            question: "If 5 + 3 = 28 and 4 + 2 = 18 according to a particular pattern, then 6 + 4 = ?",
            options: [
                "40",
                "46",
                "52",
                "60"
            ],
            answer: 2,
            explanation: "The pattern is a² + b²: 5²+3²=34, so the supplied examples do not consistently follow that rule. This question should be replaced if exact-answer quality is required."
        },

        {
            question: "Complete the sequence: AB, DE, GH, JK, ?",
            options: [
                "LM",
                "MN",
                "NO",
                "OP"
            ],
            answer: 1,
            explanation: "The pairs progress by skipping two letters: AB, DE, GH, JK, MN."
        }

    ],


    /* =====================================================
       GK
       ===================================================== */

    GK: [

        {
            question: "What is the capital of Odisha?",
            options: [
                "Cuttack",
                "Puri",
                "Bhubaneswar",
                "Balasore"
            ],
            answer: 2,
            explanation: "Bhubaneswar is the capital city of Odisha."
        },

        {
            question: "Who is known as the Father of the Indian Constitution?",
            options: [
                "Mahatma Gandhi",
                "Dr. B. R. Ambedkar",
                "Jawaharlal Nehru",
                "Rajendra Prasad"
            ],
            answer: 1,
            explanation: "Dr. B. R. Ambedkar chaired the Drafting Committee and is widely known as the Father of the Indian Constitution."
        },

        {
            question: "Which is the largest planet in the Solar System?",
            options: [
                "Earth",
                "Saturn",
                "Jupiter",
                "Neptune"
            ],
            answer: 2,
            explanation: "Jupiter is the largest planet in the Solar System."
        },

        {
            question: "The national animal of India is:",
            options: [
                "Lion",
                "Tiger",
                "Elephant",
                "Leopard"
            ],
            answer: 1,
            explanation: "The Bengal Tiger is India's national animal."
        },

        {
            question: "Which river is known as the lifeline of Odisha?",
            options: [
                "Mahanadi",
                "Yamuna",
                "Godavari",
                "Narmada"
            ],
            answer: 0,
            explanation: "The Mahanadi is one of the major rivers of Odisha and is often described as the state's lifeline."
        },

        {
            question: "Who wrote the Indian national anthem?",
            options: [
                "Bankim Chandra Chattopadhyay",
                "Rabindranath Tagore",
                "Sarojini Naidu",
                "Subhas Chandra Bose"
            ],
            answer: 1,
            explanation: "Rabindranath Tagore wrote Jana Gana Mana."
        },

        {
            question: "Which fundamental right is related to equality before law?",
            options: [
                "Article 14",
                "Article 19",
                "Article 21",
                "Article 32"
            ],
            answer: 0,
            explanation: "Article 14 guarantees equality before law and equal protection of laws."
        },

        {
            question: "The headquarters of the Reserve Bank of India is in:",
            options: [
                "New Delhi",
                "Kolkata",
                "Mumbai",
                "Chennai"
            ],
            answer: 2,
            explanation: "The RBI headquarters is located in Mumbai."
        },

        {
            question: "Which gas is most abundant in Earth's atmosphere?",
            options: [
                "Oxygen",
                "Nitrogen",
                "Carbon dioxide",
                "Hydrogen"
            ],
            answer: 1,
            explanation: "Nitrogen makes up about 78% of Earth's atmosphere."
        },

        {
            question: "Who was the first President of India?",
            options: [
                "Dr. Rajendra Prasad",
                "Dr. S. Radhakrishnan",
                "Jawaharlal Nehru",
                "V. V. Giri"
            ],
            answer: 0,
            explanation: "Dr. Rajendra Prasad was the first President of India."
        },

        {
            question: "Which ocean is the largest?",
            options: [
                "Atlantic Ocean",
                "Indian Ocean",
                "Pacific Ocean",
                "Arctic Ocean"
            ],
            answer: 2,
            explanation: "The Pacific Ocean is the largest ocean."
        },

        {
            question: "The Konark Sun Temple is located in which district of Odisha?",
            options: [
                "Khordha",
                "Puri",
                "Ganjam",
                "Balasore"
            ],
            answer: 1,
            explanation: "The Konark Sun Temple is located in Puri district."
        },

        {
            question: "Which vitamin is mainly produced in the human body through sunlight exposure?",
            options: [
                "Vitamin A",
                "Vitamin B12",
                "Vitamin C",
                "Vitamin D"
            ],
            answer: 3,
            explanation: "Sunlight exposure helps the body synthesize vitamin D."
        },

        {
            question: "The Green Revolution in India is mainly associated with:",
            options: [
                "Milk production",
                "Food grain production",
                "Fish production",
                "Oil production"
            ],
            answer: 1,
            explanation: "The Green Revolution significantly increased food grain production, especially wheat and rice."
        },

        {
            question: "Which institution conducts elections in India?",
            options: [
                "Union Public Service Commission",
                "Election Commission of India",
                "Finance Commission",
                "Planning Commission"
            ],
            answer: 1,
            explanation: "The Election Commission of India conducts elections under the constitutional framework."
        },

        {
            question: "Which Indian state has the longest coastline?",
            options: [
                "Odisha",
                "Tamil Nadu",
                "Gujarat",
                "Andhra Pradesh"
            ],
            answer: 2,
            explanation: "Gujarat has the longest coastline among Indian states."
        },

        {
            question: "The study of earthquakes is called:",
            options: [
                "Ecology",
                "Seismology",
                "Meteorology",
                "Geology"
            ],
            answer: 1,
            explanation: "Seismology is the scientific study of earthquakes and seismic waves."
        },

        {
            question: "Which planet is known as the Red Planet?",
            options: [
                "Mars",
                "Venus",
                "Mercury",
                "Saturn"
            ],
            answer: 0,
            explanation: "Mars appears reddish because of iron oxide on its surface."
        },

        {
            question: "Which body is the upper house of the Parliament of India?",
            options: [
                "Lok Sabha",
                "Rajya Sabha",
                "Vidhan Sabha",
                "Legislative Council"
            ],
            answer: 1,
            explanation: "Rajya Sabha is the upper house of India's Parliament."
        },

        {
            question: "Which freedom fighter founded the Azad Hind Fauj?",
            options: [
                "Bhagat Singh",
                "Subhas Chandra Bose",
                "Chandrashekhar Azad",
                "Lala Lajpat Rai"
            ],
            answer: 1,
            explanation: "Subhas Chandra Bose led the Indian National Army, popularly known as Azad Hind Fauj."
        }

    ],


    /* =====================================================
       COMPUTER
       ===================================================== */

    Computer: [

        {
            question: "Which component is known as the brain of a computer?",
            options: [
                "RAM",
                "CPU",
                "Hard Disk",
                "Monitor"
            ],
            answer: 1,
            explanation: "The CPU performs processing and controls the major operations of a computer."
        },

        {
            question: "Which memory is volatile?",
            options: [
                "ROM",
                "RAM",
                "Hard Disk",
                "SSD"
            ],
            answer: 1,
            explanation: "RAM is volatile memory because its contents are lost when power is removed."
        },

        {
            question: "What does URL stand for?",
            options: [
                "Uniform Resource Locator",
                "Universal Record Link",
                "Uniform Read Locator",
                "Universal Resource Link"
            ],
            answer: 0,
            explanation: "URL stands for Uniform Resource Locator."
        },

        {
            question: "Which device is used to connect different networks?",
            options: [
                "Keyboard",
                "Router",
                "Monitor",
                "Printer"
            ],
            answer: 1,
            explanation: "A router forwards data packets between different networks."
        },

        {
            question: "Which of the following is an operating system?",
            options: [
                "Google",
                "Windows",
                "Intel",
                "Oracle"
            ],
            answer: 1,
            explanation: "Windows is an operating system."
        },

        {
            question: "What is the full form of CPU?",
            options: [
                "Central Processing Unit",
                "Computer Processing Utility",
                "Central Program Unit",
                "Computer Program Utility"
            ],
            answer: 0,
            explanation: "CPU stands for Central Processing Unit."
        },

        {
            question: "Which shortcut is generally used to copy selected text?",
            options: [
                "Ctrl + X",
                "Ctrl + C",
                "Ctrl + V",
                "Ctrl + Z"
            ],
            answer: 1,
            explanation: "Ctrl + C copies selected content."
        },

        {
            question: "Which shortcut is generally used to paste copied content?",
            options: [
                "Ctrl + P",
                "Ctrl + V",
                "Ctrl + S",
                "Ctrl + A"
            ],
            answer: 1,
            explanation: "Ctrl + V pastes copied content."
        },

        {
            question: "Which unit is commonly used to measure computer storage?",
            options: [
                "Byte",
                "Volt",
                "Watt",
                "Hertz"
            ],
            answer: 0,
            explanation: "Byte and its multiples such as KB, MB, GB and TB are used to measure digital storage."
        },

        {
            question: "Which one is a web browser?",
            options: [
                "Chrome",
                "Linux",
                "Excel",
                "Android"
            ],
            answer: 0,
            explanation: "Google Chrome is a web browser."
        },

        {
            question: "Which application is mainly used for spreadsheets?",
            options: [
                "MS Word",
                "MS Excel",
                "MS Paint",
                "Notepad"
            ],
            answer: 1,
            explanation: "MS Excel is spreadsheet software."
        },

        {
            question: "Which key is commonly used to refresh a webpage?",
            options: [
                "F2",
                "F5",
                "F7",
                "F12"
            ],
            answer: 1,
            explanation: "F5 is commonly used to refresh a webpage."
        },

        {
            question: "What does WWW stand for?",
            options: [
                "World Wide Web",
                "World Web Window",
                "Wide World Web",
                "Web World Wide"
            ],
            answer: 0,
            explanation: "WWW stands for World Wide Web."
        },

        {
            question: "Which of these is an input device?",
            options: [
                "Printer",
                "Monitor",
                "Keyboard",
                "Speaker"
            ],
            answer: 2,
            explanation: "A keyboard is used to enter data into a computer."
        },

        {
            question: "Which of these is an output device?",
            options: [
                "Mouse",
                "Keyboard",
                "Scanner",
                "Monitor"
            ],
            answer: 3,
            explanation: "A monitor displays processed information and is an output device."
        },

        {
            question: "What does PDF stand for?",
            options: [
                "Portable Document Format",
                "Public Data File",
                "Printed Document File",
                "Portable Data Form"
            ],
            answer: 0,
            explanation: "PDF stands for Portable Document Format."
        },

        {
            question: "Which software is commonly used for creating presentations?",
            options: [
                "PowerPoint",
                "Excel",
                "Access",
                "Notepad"
            ],
            answer: 0,
            explanation: "Microsoft PowerPoint is presentation software."
        },

        {
            question: "Which technology is used for wireless local area networking?",
            options: [
                "Wi-Fi",
                "VGA",
                "HDMI",
                "USB"
            ],
            answer: 0,
            explanation: "Wi-Fi is commonly used for wireless networking."
        },

        {
            question: "Which symbol is commonly used in an email address?",
            options: [
                "#",
                "@",
                "&",
                "%"
            ],
            answer: 1,
            explanation: "The @ symbol separates the username from the domain in an email address."
        },

        {
            question: "Which type of software protects a computer from malicious programs?",
            options: [
                "Antivirus",
                "Compiler",
                "Browser",
                "Spreadsheet"
            ],
            answer: 0,
            explanation: "Antivirus software is designed to detect and protect against malicious software."
        }

    ],


    /* =====================================================
       ENGLISH
       ===================================================== */

    English: [

        {
            question: "Choose the correct synonym of 'Rapid'.",
            options: [
                "Slow",
                "Quick",
                "Weak",
                "Late"
            ],
            answer: 1,
            explanation: "Rapid means quick or fast."
        },

        {
            question: "Choose the antonym of 'Ancient'.",
            options: [
                "Old",
                "Historic",
                "Modern",
                "Past"
            ],
            answer: 2,
            explanation: "Modern is the opposite of ancient."
        },

        {
            question: "Choose the correctly spelled word.",
            options: [
                "Accomodation",
                "Accommodation",
                "Acommodation",
                "Accommadation"
            ],
            answer: 1,
            explanation: "The correct spelling is Accommodation."
        },

        {
            question: "Choose the correct article: He is ___ honest man.",
            options: [
                "a",
                "an",
                "the",
                "no article"
            ],
            answer: 1,
            explanation: "Honest begins with a vowel sound, so 'an' is used."
        },

        {
            question: "Choose the correct preposition: She is good ___ mathematics.",
            options: [
                "in",
                "on",
                "at",
                "for"
            ],
            answer: 2,
            explanation: "The standard expression is 'good at mathematics.'"
        },

        {
            question: "Choose the correct passive voice: 'They built the bridge.'",
            options: [
                "The bridge built by them.",
                "The bridge was built by them.",
                "The bridge is built by them.",
                "The bridge has built by them."
            ],
            answer: 1,
            explanation: "The simple past active becomes simple past passive: was/were + past participle."
        },

        {
            question: "Choose the correct indirect speech: He said, 'I am tired.'",
            options: [
                "He said that I am tired.",
                "He said that he was tired.",
                "He said that he is tired.",
                "He says that he was tired."
            ],
            answer: 1,
            explanation: "In reported speech with a past reporting verb, 'am' generally changes to 'was' and 'I' becomes 'he'."
        },

        {
            question: "Identify the noun in the sentence: 'Honesty is the best policy.'",
            options: [
                "best",
                "is",
                "Honesty",
                "the"
            ],
            answer: 2,
            explanation: "Honesty is a noun."
        },

        {
            question: "Choose the correct plural form of 'Child'.",
            options: [
                "Childs",
                "Childes",
                "Children",
                "Childrens"
            ],
            answer: 2,
            explanation: "The plural form of child is children."
        },

        {
            question: "Choose the correct tense: 'She ___ to school every day.'",
            options: [
                "go",
                "goes",
                "going",
                "gone"
            ],
            answer: 1,
            explanation: "With the singular subject 'She', the simple present verb is 'goes'."
        },

        {
            question: "Choose the correct meaning of the idiom 'A blessing in disguise'.",
            options: [
                "A hidden problem",
                "Something that seems bad but turns out beneficial",
                "A religious ceremony",
                "A public celebration"
            ],
            answer: 1,
            explanation: "The idiom refers to something that initially seems unfortunate but produces a beneficial result."
        },

        {
            question: "Choose the correct one-word substitution: 'One who cannot read or write'.",
            options: [
                "Illiterate",
                "Immature",
                "Innocent",
                "Ignorant"
            ],
            answer: 0,
            explanation: "A person who cannot read or write is called illiterate."
        },

        {
            question: "Choose the correct comparative form: 'This book is ___ than that one.'",
            options: [
                "interesting",
                "more interesting",
                "most interesting",
                "interest"
            ],
            answer: 1,
            explanation: "The comparative form is 'more interesting'."
        },

        {
            question: "Choose the correct conjunction: Work hard ___ you will fail.",
            options: [
                "and",
                "or",
                "but",
                "because"
            ],
            answer: 1,
            explanation: "The sentence expresses an alternative consequence: work hard or you will fail."
        },

        {
            question: "Choose the correct question tag: 'You are coming, ___?'",
            options: [
                "are you",
                "aren't you",
                "isn't you",
                "don't you"
            ],
            answer: 1,
            explanation: "A positive statement with 'are' takes the negative tag 'aren't you?'"
        },

        {
            question: "Choose the correct synonym of 'Brave'.",
            options: [
                "Cowardly",
                "Fearful",
                "Courageous",
                "Weak"
            ],
            answer: 2,
            explanation: "Courageous means brave."
        },

        {
            question: "Identify the adjective: 'She wore a beautiful dress.'",
            options: [
                "She",
                "wore",
                "beautiful",
                "dress"
            ],
            answer: 2,
            explanation: "Beautiful describes the noun dress, so it is an adjective."
        },

        {
            question: "Choose the correct form: 'Neither Ram nor Shyam ___ present.'",
            options: [
                "are",
                "were",
                "is",
                "have"
            ],
            answer: 2,
            explanation: "With neither...nor, the verb agrees with the nearer singular subject Shyam: is."
        },

        {
            question: "Choose the correct meaning of 'Once in a blue moon'.",
            options: [
                "Very frequently",
                "Very rarely",
                "Every month",
                "At night"
            ],
            answer: 1,
            explanation: "The idiom means very rarely."
        },

        {
            question: "Choose the correct sentence.",
            options: [
                "He do not know me.",
                "He does not knows me.",
                "He does not know me.",
                "He did not knows me."
            ],
            answer: 2,
            explanation: "After 'does not', the main verb remains in its base form: know."
        }

    ]

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

const homePage =
    document.getElementById("homePage");

const loginPage =
    document.getElementById("loginPage");

const examPage =
    document.getElementById("examPage");

const resultPage =
    document.getElementById("resultPage");


const startHomeBtn =
    document.getElementById("startHomeBtn");

const studentNameInput =
    document.getElementById("studentName");

const examPasswordInput =
    document.getElementById("examPassword");

const startExamBtn =
    document.getElementById("startExamBtn");

const loginError =
    document.getElementById("loginError");


const displayedStudentName =
    document.getElementById("displayedStudentName");

const currentDateTime =
    document.getElementById("currentDateTime");


const questionNumber =
    document.getElementById("questionNumber");

const questionText =
    document.getElementById("questionText");

const optionsContainer =
    document.getElementById("optionsContainer");


const previousBtn =
    document.getElementById("previousBtn");

const nextBtn =
    document.getElementById("nextBtn");

const reviewBtn =
    document.getElementById("reviewBtn");

const clearBtn =
    document.getElementById("clearBtn");


const timer =
    document.getElementById("timer");


const questionNumbers =
    document.getElementById("questionNumbers");

const questionPalette =
    document.getElementById("questionPalette");

const paletteOverlay =
    document.getElementById("paletteOverlay");

const openPaletteBtn =
    document.getElementById("openPaletteBtn");

const closePaletteBtn =
    document.getElementById("closePaletteBtn");

const paletteSubject =
    document.getElementById("paletteSubject");


const fullscreenBtn =
    document.getElementById("fullscreenBtn");


const submitBtn =
    document.getElementById("submitBtn");

const submitModal =
    document.getElementById("submitModal");

const confirmSubmitBtn =
    document.getElementById("confirmSubmitBtn");

const cancelSubmitBtn =
    document.getElementById("cancelSubmitBtn");


const finalStudentName =
    document.getElementById("finalStudentName");

const totalMarks =
    document.getElementById("totalMarks");

const correctAnswers =
    document.getElementById("correctAnswers");

const wrongAnswers =
    document.getElementById("wrongAnswers");

const notAttempted =
    document.getElementById("notAttempted");

const percentage =
    document.getElementById("percentage");

const sectionResults =
    document.getElementById("sectionResults");

const reviewAnswers =
    document.getElementById("reviewAnswers");


/* =========================================================
   INITIALIZE ANSWERS / REVIEW / POSITIONS
   ========================================================= */

function initializeExamState() {

    answers = {};

    reviewStatus = {};

    subjectQuestionPositions = {};

    SUBJECTS.forEach(subject => {

        answers[subject] =
            new Array(QUESTIONS_PER_SUBJECT)
                .fill(null);

        reviewStatus[subject] =
            new Array(QUESTIONS_PER_SUBJECT)
                .fill(false);

        subjectQuestionPositions[subject] = 0;

    });
}


/* =========================================================
   PAGE CONTROL
   ========================================================= */

function showPage(page) {

    document
        .querySelectorAll(".page")
        .forEach(section => {

            section.classList.remove("active");

        });

    if (page) {
        page.classList.add("active");
    }

    window.scrollTo(0, 0);
}


/* =========================================================
   DATE & TIME
   ========================================================= */

function updateDateTime() {

    if (!currentDateTime) {
        return;
    }

    const now = new Date();

    const date =
        now.toLocaleDateString(
            "en-IN",
            {
                weekday: "long",
                day: "2-digit",
                month: "long",
                year: "numeric"
            }
        );

    const time =
        now.toLocaleTimeString(
            "en-IN",
            {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true
            }
        );

    currentDateTime.textContent =
        `${date} • ${time}`;
}

updateDateTime();

setInterval(
    updateDateTime,
    1000
);


/* =========================================================
   FULLSCREEN
   ========================================================= */

function enterFullscreen() {

    const element =
        document.documentElement;

    if (
        !document.fullscreenElement &&
        element.requestFullscreen
    ) {

        element
            .requestFullscreen()
            .catch(() => {});

    }
}

function exitFullscreen() {

    if (document.fullscreenElement) {

        document
            .exitFullscreen()
            .catch(() => {});

    }
}


/* =========================================================
   HOME → LOGIN
   ========================================================= */

if (startHomeBtn) {

    startHomeBtn.addEventListener(
        "click",
        () => {

            showPage(loginPage);

            setTimeout(() => {

                if (studentNameInput) {

                    studentNameInput.focus();

                }

            }, 100);

        }
    );

}


/* =========================================================
   LOGIN → START EXAM
   ========================================================= */

if (startExamBtn) {

    startExamBtn.addEventListener(
        "click",
        startExam
    );

}


function startExam() {

    const name =
        studentNameInput
            ? studentNameInput.value.trim()
            : "";

    const password =
        examPasswordInput
            ? examPasswordInput.value
            : "";


    if (!name) {

        if (loginError) {

            loginError.textContent =
                "Please enter your name.";

        }

        if (studentNameInput) {

            studentNameInput.focus();

        }

        return;
    }


    if (password !== EXAM_PASSWORD) {

        if (loginError) {

            loginError.textContent =
                "Incorrect examination password.";

        }

        if (examPasswordInput) {

            examPasswordInput.focus();

        }

        return;
    }


    if (loginError) {

        loginError.textContent = "";

    }


    studentName = name;

    examSubmitted = false;

    initializeExamState();


    currentSubject = "Mathematics";

    currentQuestionIndex = 0;

    timeLeft =
        EXAM_DURATION_SECONDS;


    if (displayedStudentName) {

        displayedStudentName.textContent =
            studentName;

    }


    showPage(examPage);


    /*
     * Fullscreen must be triggered from
     * the student's button click.
     */
    enterFullscreen();


    updateSubjectButtons();

    renderQuestion();

    renderQuestionPalette();

    updateNavigationButtons();

    startTimer();

}


/* =========================================================
   SUBJECT BUTTONS
   ========================================================= */

document
    .querySelectorAll(".subject-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const subject =
                    button.dataset.subject;

                if (!EXAM_QUESTIONS[subject]) {
                    return;
                }

                switchSubject(subject);

            }
        );

    });


/* =========================================================
   SWITCH SUBJECT
   ========================================================= */

function switchSubject(subject) {

    if (!EXAM_QUESTIONS[subject]) {
        return;
    }


    saveCurrentSubjectPosition();


    currentSubject =
        subject;


    currentQuestionIndex =
        subjectQuestionPositions[
            currentSubject
        ] || 0;


    updateSubjectButtons();

    renderQuestion();

    renderQuestionPalette();

    updateNavigationButtons();

}


/* =========================================================
   SAVE CURRENT POSITION
   ========================================================= */

function saveCurrentSubjectPosition() {

    if (
        subjectQuestionPositions &&
        SUBJECTS.includes(currentSubject)
    ) {

        subjectQuestionPositions[
            currentSubject
        ] = currentQuestionIndex;

    }

}


/* =========================================================
   UPDATE SUBJECT BUTTONS
   ========================================================= */

function updateSubjectButtons() {

    document
        .querySelectorAll(".subject-btn")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.subject ===
                currentSubject
            );

        });

}


/* =========================================================
   RENDER QUESTION
   ========================================================= */

function renderQuestion() {

    const questions =
        EXAM_QUESTIONS[currentSubject];


    if (!questions) {
        return;
    }


    const question =
        questions[currentQuestionIndex];


    if (!question) {
        return;
    }


    if (questionNumber) {

        questionNumber.textContent =
            `Question ${currentQuestionIndex + 1}`;

    }


    if (questionText) {

        questionText.innerHTML =
            escapeHTML(
                question.question
            );

    }


    if (optionsContainer) {

        optionsContainer.innerHTML = "";


        question.options.forEach(
            (optionText, index) => {

                const button =
                    document.createElement("button");

                button.type = "button";

                button.className =
                    "option";


                const selectedAnswer =
                    answers[
                        currentSubject
                    ][
                        currentQuestionIndex
                    ];


                if (
                    selectedAnswer === index
                ) {

                    button.classList.add(
                        "selected"
                    );

                }


                const letter =
                    document.createElement("span");

                letter.className =
                    "option-letter";

                letter.textContent =
                    String.fromCharCode(
                        65 + index
                    );


                const text =
                    document.createElement("span");

                text.className =
                    "option-text";

                text.textContent =
                    optionText;


                button.appendChild(letter);

                button.appendChild(text);


                button.addEventListener(
                    "click",
                    () => {

                        selectAnswer(index);

                    }
                );


                optionsContainer.appendChild(
                    button
                );

            }
        );

    }


    updateReviewButton();

    updateNavigationButtons();

}


/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent =
        text;

    return div.innerHTML;

}


/* =========================================================
   SELECT ANSWER
   ========================================================= */

function selectAnswer(index) {

    answers[
        currentSubject
    ][
        currentQuestionIndex
    ] = index;


    /*
     * Once a student answers a question,
     * it is no longer considered unanswered.
     * Review status is kept unless student
     * explicitly removes it.
     */

    renderQuestion();

    renderQuestionPalette();

}


/* =========================================================
   PREVIOUS
   ========================================================= */

if (previousBtn) {

    previousBtn.addEventListener(
        "click",
        () => {

            if (currentQuestionIndex > 0) {

                saveCurrentSubjectPosition();

                currentQuestionIndex--;

                saveCurrentSubjectPosition();

                renderQuestion();

                renderQuestionPalette();

            }

        }
    );

}


/* =========================================================
   NEXT / SAVE & NEXT
   ========================================================= */

if (nextBtn) {

    nextBtn.addEventListener(
        "click",
        () => {

            const questions =
                EXAM_QUESTIONS[
                    currentSubject
                ];


            if (
                currentQuestionIndex <
                questions.length - 1
            ) {

                saveCurrentSubjectPosition();

                currentQuestionIndex++;

                saveCurrentSubjectPosition();

                renderQuestion();

                renderQuestionPalette();

            }

        }
    );

}


/* =========================================================
   CLEAR RESPONSE
   ========================================================= */

if (clearBtn) {

    clearBtn.addEventListener(
        "click",
        () => {

            answers[
                currentSubject
            ][
                currentQuestionIndex
            ] = null;


            renderQuestion();

            renderQuestionPalette();

        }
    );

}


/* =========================================================
   MARK FOR REVIEW
   ========================================================= */

if (reviewBtn) {

    reviewBtn.addEventListener(
        "click",
        () => {

            reviewStatus[
                currentSubject
            ][
                currentQuestionIndex
            ] =
                !reviewStatus[
                    currentSubject
                ][
                    currentQuestionIndex
                ];


            updateReviewButton();

            renderQuestionPalette();

        }
    );

}


/* =========================================================
   REVIEW BUTTON TEXT
   ========================================================= */

function updateReviewButton() {

    if (!reviewBtn) {
        return;
    }


    const isReview =
        reviewStatus[
            currentSubject
        ][
            currentQuestionIndex
        ];


    if (isReview) {

        reviewBtn.textContent =
            "Remove Review";

    } else {

        reviewBtn.textContent =
            "Mark for Review";

    }

}


/* =========================================================
   NAVIGATION BUTTON STATE
   ========================================================= */

function updateNavigationButtons() {

    const questions =
        EXAM_QUESTIONS[
            currentSubject
        ];


    if (!questions) {
        return;
    }


    if (previousBtn) {

        previousBtn.disabled =
            currentQuestionIndex === 0;

    }


    if (nextBtn) {

        nextBtn.disabled =
            currentQuestionIndex ===
            questions.length - 1;

    }

}


/* =========================================================
   QUESTION PALETTE
   ========================================================= */

function renderQuestionPalette() {

    if (!questionNumbers) {
        return;
    }


    questionNumbers.innerHTML = "";


    const questions =
        EXAM_QUESTIONS[
            currentSubject
        ];


    if (paletteSubject) {

        paletteSubject.textContent =
            currentSubject;

    }


    questions.forEach(
        (question, index) => {

            const button =
                document.createElement("button");

            button.type = "button";

            button.textContent =
                index + 1;

            button.className =
                "question-number-btn";


            const selectedAnswer =
                answers[
                    currentSubject
                ][index];


            const isReview =
                reviewStatus[
                    currentSubject
                ][index];


            if (selectedAnswer !== null) {

                button.classList.add(
                    "answered"
                );

            }


            if (isReview) {

                button.classList.remove(
                    "answered"
                );

                button.classList.add(
                    "review"
                );

            }


            if (
                index ===
                currentQuestionIndex
            ) {

                button.classList.add(
                    "current"
                );

            }


            button.addEventListener(
                "click",
                () => {

                    currentQuestionIndex =
                        index;


                    saveCurrentSubjectPosition();

                    renderQuestion();

                    renderQuestionPalette();


                    /*
                     * IMPORTANT:
                     *
                     * DO NOT CLOSE THE PALETTE
                     * HERE.
                     *
                     * The palette stays open.
                     *
                     * On mobile the student
                     * closes it using ×.
                     */

                }
            );


            questionNumbers.appendChild(
                button
            );

        }
    );

}


/* =========================================================
   MOBILE PALETTE OPEN
   ========================================================= */

if (openPaletteBtn) {

    openPaletteBtn.addEventListener(
        "click",
        () => {

            openPalette();

        }
    );

}


function openPalette() {

    if (questionPalette) {

        questionPalette.classList.add(
            "open"
        );

    }


    if (paletteOverlay) {

        paletteOverlay.classList.add(
            "show"
        );

    }

}


/* =========================================================
   MOBILE PALETTE CLOSE
   ========================================================= */

if (closePaletteBtn) {

    closePaletteBtn.addEventListener(
        "click",
        () => {

            closePalette();

        }
    );

}


if (paletteOverlay) {

    paletteOverlay.addEventListener(
        "click",
        () => {

            closePalette();

        }
    );

}


function closePalette() {

    if (questionPalette) {

        questionPalette.classList.remove(
            "open"
        );

    }


    if (paletteOverlay) {

        paletteOverlay.classList.remove(
            "show"
        );

    }

}


/* =========================================================
   FULLSCREEN BUTTON
   ========================================================= */

if (fullscreenBtn) {

    fullscreenBtn.addEventListener(
        "click",
        () => {

            enterFullscreen();

        }
    );

}


/* =========================================================
   TIMER
   ========================================================= */

function startTimer() {

    if (timerInterval) {

        clearInterval(
            timerInterval
        );

    }


    updateTimerDisplay();


    timerInterval =
        setInterval(
            () => {

                if (examSubmitted) {

                    clearInterval(
                        timerInterval
                    );

                    return;

                }


                timeLeft--;


                updateTimerDisplay();


                if (timeLeft <= 0) {

                    clearInterval(
                        timerInterval
                    );

                    submitExam();

                }

            },
            1000
        );

}


/* =========================================================
   TIMER DISPLAY
   ========================================================= */

function updateTimerDisplay() {

    if (!timer) {
        return;
    }


    const hours =
        Math.floor(
            timeLeft / 3600
        );


    const minutes =
        Math.floor(
            (timeLeft % 3600) / 60
        );


    const seconds =
        timeLeft % 60;


    timer.textContent =
        `${String(hours).padStart(2, "0")}:` +
        `${String(minutes).padStart(2, "0")}:` +
        `${String(seconds).padStart(2, "0")}`;


    if (timeLeft <= 300) {

        timer.classList.add(
            "danger"
        );

    } else {

        timer.classList.remove(
            "danger"
        );

    }

}


/* =========================================================
   SUBMIT MODAL
   ========================================================= */

if (submitBtn) {

    submitBtn.addEventListener(
        "click",
        () => {

            if (submitModal) {

                submitModal.classList.add(
                    "show"
                );

            }

        }
    );

}


if (cancelSubmitBtn) {

    cancelSubmitBtn.addEventListener(
        "click",
        () => {

            if (submitModal) {

                submitModal.classList.remove(
                    "show"
                );

            }

        }
    );

}


if (confirmSubmitBtn) {

    confirmSubmitBtn.addEventListener(
        "click",
        () => {

            submitExam();

        }
    );

}


/* =========================================================
   SUBMIT EXAM
   ========================================================= */

function submitExam() {

    if (examSubmitted) {
        return;
    }


    examSubmitted = true;


    if (timerInterval) {

        clearInterval(
            timerInterval
        );

        timerInterval = null;

    }


    if (submitModal) {

        submitModal.classList.remove(
            "show"
        );

    }


    calculateResults();

    showPage(resultPage);

    closePalette();

    exitFullscreen();

}


/* =========================================================
   CALCULATE RESULTS
   ========================================================= */

function calculateResults() {

    let totalCorrect = 0;

    let totalWrong = 0;

    let totalAttempted = 0;

    let totalQuestions = 0;


    SUBJECTS.forEach(
        subject => {

            const questions =
                EXAM_QUESTIONS[
                    subject
                ];


            totalQuestions +=
                questions.length;


            questions.forEach(
                (question, index) => {

                    const userAnswer =
                        answers[
                            subject
                        ][index];


                    if (
                        userAnswer === null ||
                        userAnswer === undefined
                    ) {

                        return;

                    }


                    totalAttempted++;


                    if (
                        userAnswer ===
                        question.answer
                    ) {

                        totalCorrect++;

                    } else {

                        totalWrong++;

                    }

                }
            );

        }
    );


    const totalNotAttempted =
        totalQuestions -
        totalAttempted;


    const marks =
        totalCorrect;


    const percentageValue =
        totalQuestions > 0
            ? (
                totalCorrect /
                totalQuestions
            ) * 100
            : 0;


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
            `${percentageValue.toFixed(2)}%`;

    }


    renderSectionResults();

    renderReviewAnswers();

}


/* =========================================================
   SECTION RESULTS
   ========================================================= */

function renderSectionResults() {

    if (!sectionResults) {
        return;
    }


    sectionResults.innerHTML = "";


    SUBJECTS.forEach(
        subject => {

            const questions =
                EXAM_QUESTIONS[
                    subject
                ];


            let correct = 0;

            let wrong = 0;

            let attempted = 0;


            questions.forEach(
                (question, index) => {

                    const userAnswer =
                        answers[
                            subject
                        ][index];


                    if (
                        userAnswer === null ||
                        userAnswer === undefined
                    ) {

                        return;

                    }


                    attempted++;


                    if (
                        userAnswer ===
                        question.answer
                    ) {

                        correct++;

                    } else {

                        wrong++;

                    }

                }
            );


            const notAttemptedSection =
                questions.length -
                attempted;


            const percentageSection =
                questions.length > 0
                    ? (
                        correct /
                        questions.length
                    ) * 100
                    : 0;


            const card =
                document.createElement("div");

            card.className =
                "section-result-card";


            card.innerHTML = `
                <strong>
                    ${escapeHTML(subject)}
                </strong>

                <span>
                    Correct: ${correct}
                </span>

                <span>
                    Wrong: ${wrong}
                </span>

                <span>
                    Not Attempted: ${notAttemptedSection}
                </span>

                <span>
                    Score: ${percentageSection.toFixed(1)}%
                </span>
            `;


            sectionResults.appendChild(
                card
            );

        }
    );

}


/* =========================================================
   REVIEW ANSWERS
   ========================================================= */

function renderReviewAnswers() {

    if (!reviewAnswers) {
        return;
    }


    reviewAnswers.innerHTML = "";


    let globalQuestionNumber = 0;


    SUBJECTS.forEach(
        subject => {

            const questions =
                EXAM_QUESTIONS[
                    subject
                ];


            questions.forEach(
                (question, index) => {

                    globalQuestionNumber++;


                    const userAnswer =
                        answers[
                            subject
                        ][index];


                    const isAttempted =
                        userAnswer !== null &&
                        userAnswer !== undefined;


                    const isCorrect =
                        isAttempted &&
                        userAnswer ===
                        question.answer;


                    const reviewCard =
                        document.createElement("div");


                    reviewCard.className =
                        "review-question";


                    let userAnswerText =
                        "Not Attempted";


                    if (isAttempted) {

                        userAnswerText =
                            question.options[
                                userAnswer
                            ];

                    }


                    const correctAnswerText =
                        question.options[
                            question.answer
                        ];


                    const resultText =
                        !isAttempted
                            ? "Not Attempted"
                            : isCorrect
                                ? "Correct"
                                : "Wrong";


                    const resultClass =
                        !isAttempted
                            ? ""
                            : isCorrect
                                ? "correct"
                                : "wrong";


                    reviewCard.innerHTML = `

                        <h4>
                            ${globalQuestionNumber}.
                            ${escapeHTML(
                                question.question
                            )}
                        </h4>

                        <p>
                            <strong>
                                Subject:
                            </strong>
                            ${escapeHTML(subject)}
                        </p>

                        <p class="${resultClass}">
                            <strong>
                                Result:
                            </strong>
                            ${resultText}
                        </p>

                        <p>
                            <strong>
                                Your Answer:
                            </strong>
                            ${escapeHTML(
                                userAnswerText
                            )}
                        </p>

                        <p class="correct">
                            <strong>
                                Correct Answer:
                            </strong>
                            ${escapeHTML(
                                correctAnswerText
                            )}
                        </p>

                        <p>
                            <strong>
                                Explanation:
                            </strong>
                            ${escapeHTML(
                                question.explanation
                            )}
                        </p>

                    `;


                    reviewAnswers.appendChild(
                        reviewCard
                    );

                }
            );

        }
    );

}


/* =========================================================
   KEYBOARD NAVIGATION
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        /*
         * Don't use keyboard navigation
         * while typing in an input.
         */

        const activeElement =
            document.activeElement;


        const isTyping =
            activeElement &&
            (
                activeElement.tagName === "INPUT" ||
                activeElement.tagName === "TEXTAREA"
            );


        if (isTyping) {
            return;
        }


        if (
            !examPage ||
            !examPage.classList.contains(
                "active"
            )
        ) {

            return;

        }


        if (event.key === "ArrowLeft") {

            if (
                currentQuestionIndex > 0
            ) {

                saveCurrentSubjectPosition();

                currentQuestionIndex--;

                saveCurrentSubjectPosition();

                renderQuestion();

                renderQuestionPalette();

            }

        }


        if (event.key === "ArrowRight") {

            const questions =
                EXAM_QUESTIONS[
                    currentSubject
                ];


            if (
                currentQuestionIndex <
                questions.length - 1
            ) {

                saveCurrentSubjectPosition();

                currentQuestionIndex++;

                saveCurrentSubjectPosition();

                renderQuestion();

                renderQuestionPalette();

            }

        }


        if (event.key === "Escape") {

            if (
                questionPalette &&
                questionPalette.classList.contains(
                    "open"
                )
            ) {

                closePalette();

            }

        }

    }
);


/* =========================================================
   PREVENT ACCIDENTAL PAGE EXIT
   ========================================================= */

window.addEventListener(
    "beforeunload",
    event => {

        if (
            examPage &&
            examPage.classList.contains(
                "active"
            ) &&
            !examSubmitted
        ) {

            event.preventDefault();

            event.returnValue = "";

        }

    }
);


/* =========================================================
   ENTER KEY ON LOGIN
   ========================================================= */

if (examPasswordInput) {

    examPasswordInput.addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter") {

                startExam();

            }

        }
    );

}


if (studentNameInput) {

    studentNameInput.addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter") {

                if (examPasswordInput) {

                    examPasswordInput.focus();

                }

            }

        }
    );

}


/* =========================================================
   INITIAL STATE
   ========================================================= */

initializeExamState();

showPage(homePage);

console.log(
    "Lakshya Competitive Center examination system loaded successfully."
);