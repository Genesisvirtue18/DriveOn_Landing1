import type { Lang } from "./translations";

export const PHONE = "073-970 13 18";
export const PHONE_E164 = "46739701318";
export const EMAIL = "kontakt@driveontrafikskola.se";
export const ADDRESS = "Lergöksgatan 1F, 421 50 Västra Frölunda";
export const WHATSAPP = `https://wa.me/${PHONE_E164}`;
export const INSTAGRAM = "https://www.instagram.com/driveontrafikskola/";
export const GOOGLE_REVIEWS = "https://www.google.com/maps/search/?api=1&query=DriveOn+Trafikskola+Västra+Frölunda";

export const packages = [
  {
    id: "start",
    price: "7 500",
    save: "500",
    popular: false,
    lessons: 5,
    name: { sv: "Startpaketet", en: "Starter", ar: "باقة البداية" },
    items: {
      sv: ["5 × 40 min körlektioner", "Risk 1 & Risk 2", "Digitala teorifrågor", "Inskrivning & plan"],
      en: ["5 × 40 min driving lessons", "Risk 1 & Risk 2", "Digital theory questions", "Enrolment & plan"],
      ar: ["5 × 40 د دروس قيادة", "ريسك 1 وريسك 2", "أسئلة نظرية رقمية", "تسجيل وخطة"],
    },
  },
  {
    id: "smart",
    price: "9 700",
    save: "800",
    popular: true,
    lessons: 10,
    name: { sv: "Smartpaketet", en: "Smart", ar: "الباقة الذكية" },
    items: {
      sv: ["10 × 40 min körlektioner", "Risk 1 & Risk 2", "Digitala teorifrågor", "Provbokning & hämtning"],
      en: ["10 × 40 min driving lessons", "Risk 1 & Risk 2", "Digital theory questions", "Test booking & pickup"],
      ar: ["10 × 40 د دروس قيادة", "ريسك 1 وريسك 2", "أسئلة نظرية رقمية", "حجز الاختبار والاستقبال"],
    },
  },
  {
    id: "max",
    price: "12 300",
    save: "1 200",
    popular: false,
    lessons: 15,
    name: { sv: "Maxpaketet", en: "Max", ar: "الباقة القصوى" },
    items: {
      sv: ["15 × 40 min körlektioner", "Risk 1 & Risk 2", "Digitala teorifrågor", "Provbil & extra genomgång"],
      en: ["15 × 40 min driving lessons", "Risk 1 & Risk 2", "Digital theory questions", "Test car & extra briefing"],
      ar: ["15 × 40 د دروس قيادة", "ريسك 1 وريسك 2", "أسئلة نظرية رقمية", "سيارة الاختبار ومراجعة إضافية"],
    },
  },
];

export const addons = [
  {
    id: "lesson",
    price: "650",
    unit: { sv: "SEK / 40 min", en: "SEK / 40 min", ar: "كرونة / 40 د" },
    name: { sv: "Enkel lektion", en: "Single lesson", ar: "درس واحد" },
    d: {
      sv: "Prova bilen och läraren. Räknas av om du tar paket.",
      en: "Try the car and teacher. Credited if you take a package.",
      ar: "جرّب السيارة والمدرّب. يُخصم إذا اخترت باقة.",
    },
  },
  {
    id: "risk1",
    price: "600",
    unit: { sv: "SEK", en: "SEK", ar: "كرونة" },
    name: { sv: "Risk 1", en: "Risk 1", ar: "ريسك 1" },
    d: {
      sv: "Alkohol, droger, trötthet och attityd. Cirka 3–4 timmar.",
      en: "Alcohol, drugs, fatigue and attitude. About 3–4 hours.",
      ar: "الكحول والمخدرات والتعب والموقف. نحو 3–4 ساعات.",
    },
  },
  {
    id: "risk2",
    price: "2 200",
    unit: { sv: "SEK", en: "SEK", ar: "كرونة" },
    name: { sv: "Risk 2 · halkbana", en: "Risk 2 · skid track", ar: "ريسك 2 · مضمار الانزلاق" },
    d: {
      sv: "Halka på bana. Obligatoriskt före körprovet.",
      en: "Ice on a closed track. Required before the driving test.",
      ar: "جليد على مضمار مغلق. مطلوب قبل اختبار القيادة.",
    },
  },
  {
    id: "handledare",
    price: "400",
    unit: { sv: "SEK / pers", en: "SEK / person", ar: "كرونة / شخص" },
    name: { sv: "Handledarkurs", en: "Supervisor course", ar: "دورة المشرف" },
    d: {
      sv: "Introduktionsutbildning för privat övningskörning.",
      en: "Introduction course for private practice driving.",
      ar: "دورة تعريفية للتمرين الخاص.",
    },
  },
];

export const bookServices = (lang: Lang) => [
  { id: "start", name: packages[0].name[lang], price: "7 500 SEK" },
  { id: "smart", name: packages[1].name[lang], price: "9 700 SEK" },
  { id: "max", name: packages[2].name[lang], price: "12 300 SEK" },
  { id: "lesson", name: addons[0].name[lang], price: "650 SEK" },
  { id: "risk1", name: addons[1].name[lang], price: "600 SEK" },
  { id: "risk2", name: addons[2].name[lang], price: "2 200 SEK" },
  { id: "handledare", name: addons[3].name[lang], price: "400 SEK" },
];

export const timeSlots = ["07:30", "09:00", "10:30", "12:00", "14:00", "15:30", "17:00", "18:30"];

export const instructors = [
  {
    name: "Abbe",
    role: { sv: "Trafiklärare B · grundare", en: "B instructor · founder", ar: "مدرب B · المؤسس" },
    years: "12",
    langs: "SV · EN · AR · KU",
    quote: {
      sv: "Om händerna skakar första lektionen är du precis den jag gillar att undervisa.",
      en: "If your hands shake on lesson one, you are exactly who I like to teach.",
      ar: "إذا ارتجفت يداك في الدرس الأول فأنت بالضبط من أحب تعليمه.",
    },
    image: "/images/instructor-omar.jpg",
  },
  {
    name: "Anna Lindberg",
    role: { sv: "Trafiklärare B · nerver", en: "B instructor · nerves", ar: "مدربة B · التوتر" },
    years: "9",
    langs: "SV · EN",
    quote: {
      sv: "Vi tar tom parkering så länge du behöver. Staden väntar.",
      en: "We stay in the empty lot as long as you need. The city can wait.",
      ar: "نبقى في الموقف الفارغ بقدر ما تحتاج. المدينة تنتظر.",
    },
    image: "/images/instructor-maya.jpg",
  },
  {
    name: "Johan Andersson",
    role: { sv: "Motorväg & mörker", en: "Motorway & night", ar: "الطريق السريع والليل" },
    years: "14",
    langs: "SV · EN",
    quote: {
      sv: "Infart är en rytm, inte ett språng. Vi övar tills det känns vanligt.",
      en: "Merging is a rhythm, not a lunge. We practise until it feels ordinary.",
      ar: "الدمج إيقاع لا قفزة. نتدرّب حتى يصبح عادياً.",
    },
    image: "/images/instructor-james.jpg",
  },
  {
    name: "Lisa Bergman",
    role: { sv: "Intensiv & prov", en: "Intensive & tests", ar: "مكثف والاختبارات" },
    years: "8",
    langs: "SV · EN · AR",
    quote: {
      sv: "Intensiv betyder inte stressad. Det betyder att vi slösar ingen minut.",
      en: "Intensive does not mean rushed. It means we waste none of the hour.",
      ar: "مكثف لا يعني متعجل. يعني أننا لا نضيّع دقيقة.",
    },
    image: "/images/instructor-sofia.jpg",
  },
];

export const faqs = [
  {
    q: {
      sv: "Hur ansöker jag om körkortstillstånd?",
      en: "How do I apply for a learner’s permit?",
      ar: "كيف أتقدم بطلب تصريح التعلّم؟",
    },
    a: {
      sv: "Ansök online hos Transportstyrelsen eller med pappersblankett. Syntest görs hos optiker. Tillståndet måste vara klart innan du övningskör.",
      en: "Apply online at Transportstyrelsen or with a paper form. The eye test is done at an optician. The permit must be ready before you practise.",
      ar: "قدّم عبر الإنترنت لدى ترانسبورتستايرلسن أو بورقة. فحص النظر عند البصري. يجب أن يكون التصريح جاهزاً قبل التمرين.",
    },
  },
  {
    q: {
      sv: "Hur skriver jag in mig på trafikskolan?",
      en: "How do I enrol at the school?",
      ar: "كيف أسجّل في المدرسة؟",
    },
    a: {
      sv: "Boka via formuläret, WhatsApp eller kom förbi. Du fyller i inskrivningen digitalt och skriver under skolans policy.",
      en: "Book via the form, WhatsApp or drop in. You complete enrolment digitally and sign the school policy.",
      ar: "احجز عبر النموذج أو واتساب أو زرنا. تُكمل التسجيل رقمياً وتوقّع سياسة المدرسة.",
    },
  },
  {
    q: {
      sv: "Hur anmäler jag mig till handledarkursen?",
      en: "How do I join the supervisor course?",
      ar: "كيف أسجّل في دورة المشرف؟",
    },
    a: {
      sv: "Boka introduktionsutbildningen här på sidan. Både handledare och elev ska gå kursen.",
      en: "Book the introduction course on this site. Both supervisor and student must attend.",
      ar: "احجز الدورة التعريفية من هذا الموقع. يجب أن يحضر المشرف والطالب معاً.",
    },
  },
  {
    q: {
      sv: "Var gör jag syntestet?",
      en: "Where do I do the vision test?",
      ar: "أين أجري فحص النظر؟",
    },
    a: {
      sv: "Hos valfri optiker. Ta med legitimation. Resultatet skickas ofta digitalt till Transportstyrelsen.",
      en: "At any optician. Bring ID. Results are often sent digitally to Transportstyrelsen.",
      ar: "عند أي بصري. أحضر هوية. غالباً يُرسل النتيجة رقمياً إلى ترانسبورتستايرلسن.",
    },
  },
  {
    q: {
      sv: "Vilka språk undervisar ni på?",
      en: "Which languages do you teach in?",
      ar: "بأي لغات تدرّسون؟",
    },
    a: {
      sv: "Svenska, engelska och arabiska. Abbe undervisar även på kurdiska (kurmanji).",
      en: "Swedish, English and Arabic. Abbe also teaches in Kurdish (Kurmanji).",
      ar: "السويدية والإنجليزية والعربية. عبّي يدرّس أيضاً بالكردية (كرمانجي).",
    },
  },
  {
    q: {
      sv: "Vad händer om jag inte klarar körprovet?",
      en: "What if I do not pass the driving test?",
      ar: "ماذا لو لم أنجح في اختبار القيادة؟",
    },
    a: {
      sv: "Vi går igenom protokollet, bokar en riktad lektion och nästa tid. En extra lektion ingår i Smart och Max.",
      en: "We review the protocol, book a targeted lesson and the next slot. An extra lesson is included in Smart and Max.",
      ar: "نراجع المحضر ونحجز درساً موجّهاً والموعد التالي. درس إضافي مشمول في الذكية والقصوى.",
    },
  },
];

export const googleReviews = [
  {
    name: "Engla",
    initial: "E",
    agoKey: "ago1" as const,
    text: {
      sv: "DriveOn överträffade allt jag väntat mig. Professionella, vänliga och jag klarade både teori och uppkörning första gången.",
      en: "DriveOn exceeded everything I expected. Professional, kind, and I passed both theory and the driving test first time.",
      ar: "تجاوزت درايف أون كل ما توقعت. محترفون ولطيفون ونجحت في النظرية والقيادة من أول مرة.",
    },
  },
  {
    name: "Sandra",
    initial: "S",
    agoKey: "ago2" as const,
    text: {
      sv: "Moderna bilar och engagerade lärare. Jag kände mig trygg och väl förberedd inför både kunskapsprov och körprov.",
      en: "Modern cars and committed teachers. I felt safe and well prepared for both the theory and driving tests.",
      ar: "سيارات حديثة ومدرّبون ملتزمون. شعرت بالأمان والاستعداد جيداً لاختباري النظرية والقيادة.",
    },
  },
  {
    name: "Shamshudeen",
    initial: "S",
    agoKey: "ago3" as const,
    text: {
      sv: "Tålmodiga lärare som hjälpte mig övervinna rädslan. Undervisning på arabiska när jag behövde det. Rekommenderas.",
      en: "Patient teachers who helped me get past the fear. Teaching in Arabic when I needed it. Recommended.",
      ar: "مدرّبون صبورون ساعدوني على تجاوز الخوف. التدريس بالعربية عندما احتجت. أنصح بهم.",
    },
  },
  {
    name: "Albin",
    initial: "A",
    agoKey: "ago4" as const,
    text: {
      sv: "Helt underbar tid. Tydlig feedback efter varje lektion och flexibla tider som gick ihop med jobbet.",
      en: "A wonderful stretch. Clear feedback after every lesson and hours that actually fitted around work.",
      ar: "فترة رائعة. ملاحظات واضحة بعد كل درس ومواعيد تناسب العمل فعلاً.",
    },
  },
];

const IG = "https://driveontrafikskola.com";

export const gallery = [
  { src: `${IG}/img/instagram/1.jpg`, alt: "Elev med körkort — @driveontrafikskola", caption: { sv: "Stort grattis till körkortet!", en: "Huge congratulations on the licence!", ar: "ألف مبروك على الرخصة!" } },
  { src: `${IG}/img/instagram/2.jpg`, alt: "Nybliven förare vid utbildningsbilen", caption: { sv: "Friheten väntar på vägen.", en: "Freedom is waiting on the road.", ar: "الحرية بانتظارك على الطريق." } },
  { src: `${IG}/img/instagram/3.jpg`, alt: "Grattis efter godkänt körprov", caption: { sv: "Så stolt och glad — nu börjar äventyret.", en: "So proud — now the adventure starts.", ar: "فخورون جداً — الآن يبدأ المغامرة." } },
  { src: `${IG}/img/instagram/4.jpg`, alt: "Elev firar körkortet", caption: { sv: "Körkort ✓ Frihet ✓ Lycka ✓", en: "Licence ✓ Freedom ✓ Joy ✓", ar: "رخصة ✓ حرية ✓ سعادة ✓" } },
  { src: `${IG}/img/instagram/5.jpg`, alt: "Efter uppkörningen i Frölunda", caption: { sv: "Varje resa trygg, varje väg en möjlighet.", en: "Every trip safe, every road a chance.", ar: "كل رحلة آمنة وكل طريق فرصة." } },
  { src: `${IG}/img/instagram/6.jpg`, alt: "DriveOn-elev med nycklar", caption: { sv: "Stolt över dig — grattis till körkortet!", en: "Proud of you — congratulations!", ar: "فخورون بك — مبروك الرخصة!" } },
  { src: `${IG}/img/instagram/7.jpg`, alt: "Leende elev efter godkänt prov", caption: { sv: "Du har kämpat hårt och nått målet.", en: "You worked hard and reached the goal.", ar: "كافحت ووصلت إلى هدفك." } },
  { src: `${IG}/img/instagram/8.jpg`, alt: "Utbildningsbil och elev", caption: { sv: "Ta första steget mot friheten idag.", en: "Take the first step toward freedom today.", ar: "اتخذ الخطوة الأولى نحو الحرية اليوم." } },
  { src: `${IG}/img/instagram/9.jpg`, alt: "DriveOn Instagram", caption: { sv: "Många trygga mil på vägarna.", en: "Many safe miles ahead.", ar: "أميال كثيرة وآمنة أمامك." } },
  { src: `${IG}/images/test1.jpg`, alt: "Elev efter godkänt körprov", caption: { sv: "Hjärtligt grattis till ditt körkort!", en: "Warm congratulations on your licence!", ar: "تهانينا القلبية على رخصتك!" } },
  { src: `${IG}/images/test2.jpg`, alt: "Nöjd elev vid DriveOn-bilen", caption: { sv: "Professionella och tålmodiga lärare.", en: "Professional and patient teachers.", ar: "مدرّبون محترفون وصبورون." } },
  { src: `${IG}/images/test3.jpg`, alt: "Körkortsglädje", caption: { sv: "Från första lektionen till sista körprovet.", en: "From the first lesson to the last test.", ar: "من الدرس الأول إلى آخر اختبار." } },
  { src: `${IG}/images/test4.jpg`, alt: "Nybliven förare", caption: { sv: "Vi firar varje framsteg tillsammans.", en: "We celebrate every step together.", ar: "نحتفل بكل خطوة معاً." } },
  { src: `${IG}/images/test5.jpg`, alt: "Elev med körkort i handen", caption: { sv: "Tydlig pedagogik, flexibla tider.", en: "Clear teaching, flexible hours.", ar: "تعليم واضح ومواعيد مرنة." } },
  { src: `${IG}/images/test6.jpg`, alt: "DriveOn-elev", caption: { sv: "Trygg miljö i din egen takt.", en: "A safe space at your own pace.", ar: "بيئة آمنة بوتيرتك." } },
  { src: `${IG}/images/student11.jpeg`, alt: "Elev 11 efter körkortet", caption: { sv: "Engagerade lärare hela vägen.", en: "Committed teachers all the way.", ar: "مدرّبون ملتزمون على طول الطريق." } },
  { src: `${IG}/images/student12.jpeg`, alt: "Elev 12 med utbildningsbil", caption: { sv: "Moderna bilar, lugna lektioner.", en: "Modern cars, calm lessons.", ar: "سيارات حديثة ودروس هادئة." } },
  { src: `${IG}/images/student13.jpeg`, alt: "Elev 13 firar", caption: { sv: "Klara både teori och uppkörning.", en: "Pass both theory and the driving test.", ar: "نجاح النظرية واختبار القيادة." } },
  { src: `${IG}/images/student14.jpeg`, alt: "Elev 14", caption: { sv: "Vi släpper dig inte förrän du är redo.", en: "We do not send you until you are ready.", ar: "لن نرسلك قبل أن تكون جاهزاً." } },
  { src: `${IG}/images/student15.jpeg`, alt: "Elev 15", caption: { sv: "Körkortet är närmare än du tror.", en: "The licence is closer than you think.", ar: "الرخصة أقرب مما تظن." } },
  { src: `${IG}/images/With%20Student.jpg`, alt: "Körlektion med handledare", caption: { sv: "Handledarkurs — övningskör tryggt privat.", en: "Supervisor course — practise safely at home.", ar: "دورة المشرف — تدرّب بأمان في الخاص." } },
  { src: `${IG}/images/With%20Student%202.jpg`, alt: "Körprov med DriveOn", caption: { sv: "Körprov med stöd hela vägen.", en: "The driving test with support all the way.", ar: "اختبار القيادة مع دعم كامل." } },
  { src: `${IG}/images/Student%202.jpg`, alt: "Utbildningsbilar", caption: { sv: "Våra utbildningsbilar.", en: "Our training cars.", ar: "سيارات التدريب لدينا." } },
  { src: `${IG}/images/Student%203.jpg`, alt: "Teorilektion", caption: { sv: "Teori som sitter — inte bara läses.", en: "Theory that sticks — not just read.", ar: "نظرية تثبت — لا تُقرأ فقط." } },
  { src: `${IG}/images/Risk1.jpeg`, alt: "Risk 1", caption: { sv: "Risk 1 — alkohol, trötthet, attityd.", en: "Risk 1 — alcohol, fatigue, attitude.", ar: "ريسك 1 — كحول وتعب وموقف." } },
  { src: `${IG}/images/risk2.jpeg`, alt: "Risk 2 halkbana", caption: { sv: "Risk 2 — halka på riktigt.", en: "Risk 2 — ice for real.", ar: "ريسك 2 — جليد حقيقي." } },
  { src: `${IG}/img/gallery/2.jpg`, alt: "Praktisk utbildning", caption: { sv: "Praktisk utbildning i stan.", en: "Practical training in the city.", ar: "تدريب عملي في المدينة." } },
  { src: `${IG}/img/gallery/3.jpg`, alt: "Teoriprov", caption: { sv: "Inför kunskapsprovet.", en: "Ahead of the theory test.", ar: "قبل اختبار النظرية." } },
  { src: `${IG}/img/gallery/5.jpg`, alt: "Lektion bakom ratten", caption: { sv: "Bakom ratten, med någon lugn bredvid.", en: "Behind the wheel, someone calm beside you.", ar: "خلف المقود وشخص هادئ بجانبك." } },
  { src: `${IG}/img/gallery/6.jpg`, alt: "DriveOn-lektion", caption: { sv: "En lektion i taget.", en: "One lesson at a time.", ar: "درساً تلو الآخر." } },
  { src: `${IG}/images/drive1.jpg`, alt: "Körning i Göteborg", caption: { sv: "Göteborgstrafik — vi tar den tillsammans.", en: "Gothenburg traffic — we take it together.", ar: "مرور غوتنبرغ — نواجهه معاً." } },
  { src: `${IG}/images/drive3.jpg`, alt: "Övningskörning", caption: { sv: "Övningskörning som känns äkta.", en: "Practice that feels like the real road.", ar: "تمرين يشبه الطريق الحقيقي." } },
];

export type BlogPost = {
  slug: string;
  mins: number;
  image: string;
  title: Record<Lang, string>;
  excerpt: Record<Lang, string>;
  body: Record<Lang, string[]>;
};

export const posts: BlogPost[] = [
  {
    slug: "korkortstillstand",
    mins: 5,
    image: "/images/theory.jpg",
    title: {
      sv: "Körkortstillstånd: så gör du — utan att fastna i blanketten",
      en: "Learner’s permit: how to apply without getting stuck",
      ar: "تصريح التعلّم: كيف تتقدم دون أن تعلق في الاستمارة",
    },
    excerpt: {
      sv: "Syntest, hälsodeklaration och vanliga avslag. En rak guide till Transportstyrelsen.",
      en: "Eye test, health declaration and common refusals. A straight guide to Transportstyrelsen.",
      ar: "فحص النظر والإقرار الصحي والرفض الشائع. دليل مباشر لترانسبورتستايرلسن.",
    },
    body: {
      sv: [
        "Du får inte övningsköra en meter utan giltigt körkortstillstånd. Det söks hos Transportstyrelsen, kostar en administrativ avgift och kräver syntest hos optiker plus en hälsodeklaration.",
        "Vanliga stopp: du har glömt att kryssa en sjukdomsruta, optikerns intyg är äldre än det som krävs, eller du har ett villkor från tidigare som inte är utrett. Vi går igenom ansökan på inskrivningen.",
        "När tillståndet är klart kan du övningsköra med oss eller med en godkänd handledare. Ha alltid tillståndet och legitimation med i bilen.",
      ],
      en: [
        "You may not practise a single metre without a valid learner’s permit. Apply at Transportstyrelsen, pay the admin fee, do an eye test at an optician and complete a health declaration.",
        "Common stalls: a missed medical checkbox, an optician’s certificate that is too old, or an unresolved condition from earlier. We walk the application at enrolment.",
        "Once the permit is live you can practise with us or with an approved supervisor. Always keep the permit and ID in the car.",
      ],
      ar: [
        "لا يجوز التمرين متراً واحداً دون تصريح تعلّم ساري. قدّم لدى ترانسبورتستايرلسن وادفع الرسوم وأجرِ فحص نظر عند البصري وأكمل الإقرار الصحي.",
        "أسباب التوقف الشائعة: خانة طبية منسية، شهادة نظر قديمة، أو حالة سابقة غير محسومة. نراجع الطلب عند التسجيل.",
        "عندما يصبح التصريح سارياً يمكنك التمرين معنا أو مع مشرف معتمد. احتفظ دائماً بالتصريح والهوية في السيارة.",
      ],
    },
  },
  {
    slug: "kunskapsprovet",
    mins: 7,
    image: "/images/lesson.jpg",
    title: {
      sv: "Kunskapsprovet: 70 frågor, 52 rätt, 50 minuter",
      en: "The theory test: 70 questions, 52 correct, 50 minutes",
      ar: "اختبار النظرية: 70 سؤالاً، 52 صحيحة، 50 دقيقة",
    },
    excerpt: {
      sv: "Så ser Trafikverkets prov ut — och hur du pluggar så att det sitter.",
      en: "What Trafikverket’s exam actually looks like — and how to study so it sticks.",
      ar: "كيف يبدو اختبار ترافيكفركت فعلاً — وكيف تدرس حتى يثبت.",
    },
    body: {
      sv: [
        "Provet har 70 frågor. Fem är testfrågor som inte räknas. Av de 65 som räknas behöver du 52 rätt. Kategorierna är fordonskännedom, miljö, trafiksäkerhet, trafikregler och personliga förutsättningar.",
        "Plugga inte bara märken. Räkna stoppsträckor, förstå högerregeln mot huvudled, och varför kaffe inte nyktrar dig. Våra 100 övningsfrågor täcker samma yta.",
        "Boka inte provet för att kalendern skriker. Boka när du ligger stadigt över 85 procent på övningsprov. Teorin måste vara godkänd innan körprovet, och körprovet ska ske inom fyra månader.",
      ],
      en: [
        "The exam has 70 questions. Five are unscored trials. Of the 65 that count you need 52 correct. Categories: vehicle knowledge, environment, road safety, traffic rules and personal conditions.",
        "Do not only drill signs. Calculate stopping distances, understand the right-hand rule versus a priority road, and why coffee does not sober you. Our 100 practice questions cover the same ground.",
        "Do not book because the calendar is loud. Book when you sit steadily above 85 percent on mocks. Theory must be passed before the driving test, which must follow within four months.",
      ],
      ar: [
        "الاختبار 70 سؤالاً. خمسة تجريبية لا تُحتسب. من الـ 65 المحتسبة تحتاج 52 صحيحة. الفئات: معرفة المركبة، البيئة، السلامة، قواعد المرور والظروف الشخصية.",
        "لا تحفظ اللافتات فقط. احسب مسافات التوقف وافهم قاعدة اليمين مقابل الطريق الرئيسي ولماذا لا يصحيك القهوة. أسئلتنا المئة تغطي المساحة نفسها.",
        "لا تحجز لأن التقويم يصرخ. احجز عندما تثبت فوق 85 بالمئة في التجارب. يجب نجاح النظرية قبل اختبار القيادة الذي يجب أن يتم خلال أربعة أشهر.",
      ],
    },
  },
  {
    slug: "risk-ett-tva",
    mins: 6,
    image: "https://images.pexels.com/photos/10994097/pexels-photo-10994097.jpeg?auto=compress&cs=tinysrgb&w=1400",
    title: {
      sv: "Risk 1 och Risk 2 — det som faktiskt räddar liv",
      en: "Risk 1 and Risk 2 — the parts that actually save lives",
      ar: "ريسك 1 وريسك 2 — ما ينقذ الحياة فعلاً",
    },
    excerpt: {
      sv: "Alkohol, trötthet och halka. Därför är kurserna obligatoriska — och hur du får ut mer än en stämpel.",
      en: "Alcohol, fatigue and ice. Why the courses are mandatory — and how to get more than a stamp.",
      ar: "الكحول والتعب والجليد. لماذا الدورات إلزامية — وكيف تحصل على أكثر من ختم.",
    },
    body: {
      sv: [
        "Risk 1 är klassrum: alkohol, droger, trötthet, mobil och attityd. Gränsen är 0,2 promille. Narkotika har nolltolerans. Trötthet sänker dig som alkohol — utan att du känner doften.",
        "Risk 2 är halkbanan. Du ska känna när däcken släpper, hur ABS jobbar och varför du inte pumpas bromsarna. Det är inte show. Det är muskelminne inför november.",
        "Båda måste vara gjorda innan körprovet. Vi bokar in dem i din plan så att de inte blir en flaskhals sista veckan.",
      ],
      en: [
        "Risk 1 is classroom: alcohol, drugs, fatigue, phones and attitude. The limit is 0.2 per mille. Drugs have zero tolerance. Fatigue drops you like alcohol — without the smell.",
        "Risk 2 is the skid track. You should feel when the tyres let go, how ABS works and why you do not pump the brakes. It is not a show. It is muscle memory for November.",
        "Both must be done before the driving test. We put them in your plan so they are not a last-week bottleneck.",
      ],
      ar: [
        "ريسك 1 في الصف: الكحول والمخدرات والتعب والجوال والموقف. الحد 0.2 في الألف. المخدرات بلا تسامح. التعب يخفّضك كالكحول — دون الرائحة.",
        "ريسك 2 مضمار الانزلاق. يجب أن تشعر متى تفلت الإطارات وكيف يعمل ABS ولماذا لا تضخ المكابح. ليست عرضاً. إنها ذاكرة عضلية لنوفمبر.",
        "يجب إنجاز الاثنين قبل اختبار القيادة. نضعهما في خطتك حتى لا يصبحا عنق زجاجة في الأسبوع الأخير.",
      ],
    },
  },
  {
    slug: "vinterkorning",
    mins: 6,
    image: "https://images.pexels.com/photos/7507949/pexels-photo-7507949.jpeg?auto=compress&cs=tinysrgb&w=1400",
    title: {
      sv: "Vinterkörning i Sverige: däck, avstånd och älgen",
      en: "Winter driving in Sweden: tyres, gaps and the moose",
      ar: "القيادة الشتوية في السويد: الإطارات والمسافة والموظ",
    },
    excerpt: {
      sv: "Vinterdäck, mönsterdjup och varför två sekunder inte räcker i snö.",
      en: "Winter tyres, tread depth and why two seconds is not enough in snow.",
      ar: "إطارات شتوية وعمق نقش ولماذا ثانيتان لا تكفيان في الثلج.",
    },
    body: {
      sv: [
        "Vinterdäck krävs 1 december–31 mars vid vinterväglag. Mönsterdjup minst 3 mm. Dubbdäck är tillåtna 1 oktober–15 april.",
        "Bromssträckan kan bli flera gånger längre. Öka avståndet, sänk farten innan kurvan — inte i den — och rensa alla rutor. En tittglugg är inte ett synfält.",
        "Älg rör sig i skymning längs skogsbryn. Ser du en, räkna med fler. Helljus när du kan, men blända inte mötande. På is: mjuka rörelser, ingen panik i ratten.",
      ],
      en: [
        "Winter tyres are required 1 December–31 March in winter conditions. Tread depth at least 3 mm. Studs are allowed 1 October–15 April.",
        "Braking distance can become several times longer. Increase the gap, slow before the bend — not in it — and clear every window. A peephole is not a field of view.",
        "Moose move at dusk along forest edges. If you see one, expect more. Main beam when you can, but do not dazzle oncoming traffic. On ice: soft inputs, no panic at the wheel.",
      ],
      ar: [
        "الإطارات الشتوية مطلوبة من 1 ديسمبر إلى 31 مارس في ظروف الشتاء. عمق النقش 3 ملم على الأقل. المسامير مسموحة من 1 أكتوبر إلى 15 أبريل.",
        "قد تصبح مسافة الكبح أطول بعدة أضعاف. زِد المسافة وخفّف قبل المنعطف لا فيه ونظّف كل النوافذ. فتحة صغيرة ليست مجال رؤية.",
        "الموظ يتحرك عند الغسق على أطراف الغابة. إن رأيت واحداً فتوقع المزيد. الضوء العالي عندما تستطيع دون أن تبهر القادم. على الجليد: حركات ناعمة بلا هلع على المقود.",
      ],
    },
  },
];

export const theoryCats: Record<string, Record<Lang, string>> = {
  rules: { sv: "Trafikregler", en: "Traffic rules", ar: "قواعد المرور" },
  signs: { sv: "Vägmärken", en: "Road signs", ar: "لافتات الطريق" },
  speed: { sv: "Hastighet", en: "Speed", ar: "السرعة" },
  alcohol: { sv: "Alkohol & droger", en: "Alcohol & drugs", ar: "الكحول والمخدرات" },
  distance: { sv: "Avstånd & stopp", en: "Distance & stopping", ar: "المسافة والتوقف" },
  winter: { sv: "Vinter & väder", en: "Winter & weather", ar: "الشتاء والطقس" },
  parking: { sv: "Parkering", en: "Parking", ar: "الوقوف" },
  vehicle: { sv: "Fordonet", en: "The vehicle", ar: "المركبة" },
  environment: { sv: "Miljö", en: "Environment", ar: "البيئة" },
  safety: { sv: "Säkerhet", en: "Safety", ar: "السلامة" },
};
