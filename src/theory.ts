import type { Lang } from "./translations";

export type TheoryQ = {
  id: number;
  cat: string;
  answer: number;
  q: Record<Lang, string>;
  options: Record<Lang, string[]>;
  why: Record<Lang, string>;
};

const Q = (
  id: number,
  cat: string,
  answer: number,
  q: [string, string, string],
  options: [string[], string[], string[]],
  why: [string, string, string]
): TheoryQ => ({
  id,
  cat,
  answer,
  q: { sv: q[0], en: q[1], ar: q[2] },
  options: { sv: options[0], en: options[1], ar: options[2] },
  why: { sv: why[0], en: why[1], ar: why[2] },
});

export const theoryQuestions: TheoryQ[] = [
  Q(1, "rules", 1,
    ["Vad innebär högerregeln?", "What does the right-hand rule mean?", "ماذا تعني قاعدة اليمين؟"],
    [
      ["Du har alltid företräde från höger", "Mötande från höger har företräde om inget annat gäller", "Du stannar alltid för rött från höger"],
      ["You always have priority from the right", "Traffic from the right has priority unless another rule applies", "You always stop for red from the right"],
      ["لك دائماً الأولوية من اليمين", "القادم من اليمين له الأولوية ما لم تنطبق قاعدة أخرى", "تتوقف دائماً عند الأحمر من اليمين"],
    ],
    ["Högerregeln gäller i korsningar utan väjningsplikt, stopplikt eller trafikljus.", "It applies at junctions with no yield, stop or lights.", "تنطبق في التقاطعات بلا لافتة تراجع أو قف أو إشارات."]
  ),
  Q(2, "rules", 2,
    ["I en cirkulationsplats ska du i regel…", "In a roundabout you should as a rule…", "في الدوار يجب عليك عادةً…"],
    [
      ["Köra rakt in — du har företräde", "Stanna helt före linjen alltid", "Lämna företräde åt dem som redan är i cirkulationen"],
      ["Drive straight in — you have priority", "Always come to a full stop", "Give way to traffic already in the roundabout"],
      ["الدخول مباشرة فلك الأولوية", "التوقف التام دائماً", "إفساح المجال لمن داخل الدوار"],
    ],
    ["Trafik i cirkulationen har företräde. Anpassa farten och välj rätt körfält.", "Traffic in the circle has priority. Adjust speed and choose the correct lane.", "لمن داخل الدوار الأولوية. اضبط السرعة واختر المسار الصحيح."]
  ),
  Q(3, "rules", 0,
    ["När du kör ut från en parkeringsplats gäller…", "When leaving a parking area…", "عند الخروج من موقف…"],
    [
      ["Utfartsregeln — du har väjningsplikt mot alla", "Högerregeln mot gående bara", "Du har företräde mot cyklar"],
      ["The exit rule — you yield to everyone", "The right-hand rule toward pedestrians only", "You have priority over cyclists"],
      ["قاعدة الخروج — تتراجع للجميع", "قاعدة اليمين تجاه المشاة فقط", "لك الأولوية على الدراجات"],
    ],
    ["Från parkering, fastighet eller bensinstation har du väjningsplikt mot alla, även gående och cyklister.", "From a car park, property or petrol station you yield to everyone, including pedestrians and cyclists.", "من الموقف أو العقار أو المحطة تتراجع للجميع بما فيهم المشاة والدراجات."]
  ),
  Q(4, "rules", 1,
    ["Ett fordon kommer bakifrån med blåljus. Du ska…", "A vehicle approaches from behind with blue lights. You should…", "مركبة تقترب من الخلف بأضواء زرقاء. يجب أن…"],
    [
      ["Gasar för att skapa lucka", "Köra åt höger och stanna om det behövs", "Stanna mitt i körfältet"],
      ["Speed up to open a gap", "Move right and stop if needed", "Stop in the middle of the lane"],
      ["تسرع لفتح فراغ", "تميل يميناً وتتوقف إن لزم", "تتوقف في وسط المسار"],
    ],
    ["Utryckningsfordon ska ges fri väg. Dra åt sidan, ofta höger, och stanna tills de passerat.", "Emergency vehicles must be given a clear path. Move aside, usually right, and stop until they pass.", "يجب إفساح الطريق لمركبات الطوارئ. مِل جانباً غالباً يميناً وتوقف حتى تمر."]
  ),
  Q(5, "rules", 2,
    ["I tättbebyggt område, högst 50 km/h, ska du släppa ut en buss som…", "In a built-up area at max 50 km/h you must let out a bus that…", "في منطقة مبنية بحد 50 كم/س يجب أن تدع حافلة…"],
    [
      ["Står på hållplatsen med blinkers av", "Kommer bakifrån i vänsterfil", "Visar att den ska lämna hållplatsen"],
      ["Sits at the stop with indicators off", "Comes from behind in the left lane", "Signals that it is leaving the stop"],
      ["تقف دون إشارات", "تأتي من الخلف في المسار الأيسر", "تشير أنها تغادر المحطة"],
    ],
    ["Om bussen blinkar för att lämna hållplatsen i tätort ≤50 km/h har den företräde.", "If the bus signals to leave a stop in a ≤50 km/h built-up area, it has priority.", "إذا أشارت الحافلة لمغادرة المحطة في منطقة ≤50 كم/س فلها الأولوية."]
  ),
  Q(6, "rules", 0,
    ["Gäller högerregeln mot spårvagn?", "Does the right-hand rule apply toward a tram?", "هل تنطبق قاعدة اليمين تجاه الترام؟"],
    [
      ["Nej, du har i regel väjningsplikt mot spårvagn", "Ja, alltid", "Bara på huvudled"],
      ["No — as a rule you yield to the tram", "Yes, always", "Only on a priority road"],
      ["لا — عادة تتراجع للترام", "نعم دائماً", "فقط على طريق رئيسي"],
    ],
    ["Spårvagn har ofta särskild rätt. Räkna med att släppa fram den.", "Trams often have special priority. Expect to let them through.", "للترام غالباً أولوية خاصة. توقع أن تفسح له."]
  ),
  Q(7, "rules", 1,
    ["Du och en mötande svänger båda vänster i en korsning. Bästa sättet är oftast att…", "You and an oncoming car both turn left. The best method is usually to…", "أنت والقادم تنعطفان يساراً. الأفضل عادة…"],
    [
      ["Svänga framför varandra", "Svänga innanför varandra (höger mot höger)", "Stanna mitt i korsningen och vänta"],
      ["Turn in front of each other", "Turn inside each other (right-to-right)", "Stop in the middle and wait"],
      ["الانعطاف أمام بعضكما", "الانعطاف من الداخل (يمين إلى يمين)", "التوقف في الوسط والانتظار"],
    ],
    ["I Sverige svänger man vanligen innanför varandra så att vänstersvängarna möts höger mot höger.", "In Sweden you usually pass inside each other so the left turns meet right-to-right.", "في السويد تمرّان عادة من الداخل فيلتقي الانعطاف الأيسر يميناً بيمين."]
  ),
  Q(8, "rules", 2,
    ["Får du svänga höger mot rött i Sverige?", "May you turn right on red in Sweden?", "هل يجوز الانعطاف يميناً عند الأحمر في السويد؟"],
    [
      ["Ja, efter stopp", "Ja, om ingen kommer", "Nej, rött betyder stopp"],
      ["Yes, after a stop", "Yes if nobody is coming", "No — red means stop"],
      ["نعم بعد التوقف", "نعم إن لم يأت أحد", "لا — الأحمر يعني توقف"],
    ],
    ["Högersväng mot rött är inte tillåten. Vänta på grönt eller pil.", "Right on red is not allowed. Wait for green or an arrow.", "الانعطاف يميناً عند الأحمر ممنوع. انتظر الأخضر أو السهم."]
  ),
  Q(9, "rules", 0,
    ["På en huvudled…", "On a priority road…", "على طريق رئيسي…"],
    [
      ["Har du företräde mot anslutande vägar", "Gäller alltid högerregeln", "Måste du stanna i varje korsning"],
      ["You have priority over joining roads", "The right-hand rule always applies", "You must stop at every junction"],
      ["لك الأولوية على الطرق المنضمة", "تنطبق قاعدة اليمين دائماً", "يجب التوقف عند كل تقاطع"],
    ],
    ["Huvudled markeras med skylt. Trafik från anslutande vägar har väjningsplikt.", "A priority road is signed. Traffic from joining roads must yield.", "الطريق الرئيسي معلّم بلافتة. القادم من الطرق المنضمة يتراجع."]
  ),
  Q(10, "rules", 1,
    ["Gående är på väg ut på ett obevakat övergångsställe. Du ska…", "A pedestrian is about to enter an unmarked crossing. You should…", "مشاة على وشك دخول معبر غير منظم. يجب أن…"],
    [
      ["Hålla farten — de har inte klivit ut än", "Sänka farten och stanna om de går eller visar att de ska gå", "Tutas för att varna"],
      ["Keep speed — they have not stepped out yet", "Slow and stop if they walk or show they will", "Honk to warn them"],
      ["تحافظ على السرعة — لم يخطوا بعد", "تخفف وتتوقف إن مشوا أو أظهروا النية", "تزمر لتحذيرهم"],
    ],
    ["Du ska lämna företräde åt gående som är på eller just ska gå ut på övergångsstället.", "Give way to pedestrians who are on or about to enter the crossing.", "أفسح للمشاة الموجودين على المعبر أو على وشك دخوله."]
  ),
  Q(11, "rules", 2,
    ["En heldragen linje i din riktning betyder att du…", "A solid line on your side means you…", "الخط المتصل في جهتك يعني أنك…"],
    [
      ["Får köra om om sikten är fri", "Får byta fil fritt", "Inte får köra över linjen för att köra om"],
      ["May overtake if the view is clear", "May change lanes freely", "Must not cross the line to overtake"],
      ["يجوز التجاوز إن كان النظر واضحاً", "يجوز تغيير المسار بحرية", "لا يجوز عبور الخط للتجاوز"],
    ],
    ["Heldragen linje får inte korsas för omkörning. Vänta på streckad linje.", "A solid line must not be crossed to overtake. Wait for a dashed line.", "لا يُعبر الخط المتصل للتجاوز. انتظر الخط المتقطع."]
  ),
  Q(12, "rules", 0,
    ["I ett gångfartsområde ska du…", "In a walking-speed zone you should…", "في منطقة سرعة المشي يجب أن…"],
    [
      ["Köra i gångfart och ge gående företräde överallt", "Hålla 30 km/h", "Bara släppa gående på övergångsställen"],
      ["Drive at walking pace and give pedestrians priority everywhere", "Hold 30 km/h", "Only yield at crossings"],
      ["تقود بسرعة المشي وتعطي المشاة الأولوية في كل مكان", "تلتزم 30 كم/س", "تتراجع عند المعابر فقط"],
    ],
    ["Gångfart, parkering bara på markerade platser, gående får använda hela ytan.", "Walking pace, park only in marked bays, pedestrians may use the whole area.", "سرعة المشي، الوقوف في الأماكن المحددة فقط، والمشاة يستخدمون كامل المساحة."]
  ),
  Q(13, "rules", 1,
    ["Du närmar dig en järnvägsövergång. Bommarna är uppe men sikten är skymd. Du ska…", "You approach a railway crossing. Barriers are up but the view is blocked. You should…", "تقترب من معبر سكة. الحواجز مرفوعة لكن الرؤية محجوبة. يجب أن…"],
    [
      ["Köra fort över för att inte bli stående", "Sänka farten, vara beredd att stanna och aldrig stanna på spåren", "Stanna på spåren och titta"],
      ["Speed across so you are not left standing", "Slow, be ready to stop, never stop on the tracks", "Stop on the tracks and look"],
      ["تسرع حتى لا تبقى واقفاً", "تخفف وتكون جاهزاً للتوقف ولا تتوقف على القضبان", "تتوقف على القضبان وتنظر"],
    ],
    ["Korsa bara om du får plats på andra sidan. Stanna aldrig på spåren.", "Cross only if there is space on the other side. Never stop on the tracks.", "اعبر فقط إن وُجد مكان في الجهة الأخرى. لا تتوقف على القضبان أبداً."]
  ),
  Q(14, "rules", 2,
    ["När är det tillåtet att använda mobilen i handen under körning?", "When may you hold a phone while driving?", "متى يجوز إمساك الجوال أثناء القيادة؟"],
    [
      ["Vid rödljus", "Under 30 km/h", "I princip aldrig — handsfree krävs"],
      ["At a red light", "Under 30 km/h", "Basically never — hands-free is required"],
      ["عند الإشارة الحمراء", "تحت 30 كم/س", "تقريباً أبداً — يلزم النظام الحر"],
    ],
    ["Det är förbjudet att hålla mobil under färd. Använd handsfree.", "Holding a phone while driving is banned. Use hands-free.", "إمساك الجوال أثناء السير ممنوع. استخدم نظاماً حراً."]
  ),
  Q(15, "rules", 0,
    ["Du kör på motorväg. Får du stanna för att titta på kartan?", "On a motorway, may you stop to look at a map?", "على الطريق السريع، هل يجوز التوقف لرؤية الخريطة؟"],
    [
      ["Nej, stannande och backning är förbjudet", "Ja, på vägrenen", "Ja, om du sätter på varningsblinkers"],
      ["No — stopping and reversing are forbidden", "Yes, on the hard shoulder", "Yes if you use hazard lights"],
      ["لا — التوقف والرجوع ممنوعان", "نعم على الكتف", "نعم مع أضواء التحذير"],
    ],
    ["På motorväg är det förbjudet att stanna, vända och backa. Vägrenen är bara för nöd.", "On a motorway you must not stop, turn or reverse. The shoulder is for emergencies only.", "على الطريق السريع يُمنع التوقف والالتفاف والرجوع. الكتف للطوارئ فقط."]
  ),
  Q(16, "rules", 1,
    ["En cyklist är i din döda vinkel när du ska svänga höger. Du ska…", "A cyclist is in your blind spot as you turn right. You should…", "دراجة في زاويتك العمياء وأنت تنعطف يميناً. يجب أن…"],
    [
      ["Svänga snabbt före cyklisten", "Titta extra, släppa cyklisten och svänga efter", "Tutas så hen stannar"],
      ["Turn quickly ahead of the cyclist", "Look extra, let the cyclist through, then turn", "Honk so they stop"],
      ["تنعطف بسرعة قبل الدراج", "تنظر أكثر وتدع الدراج يمر ثم تنعطف", "تزمر ليتوقف"],
    ],
    ["Högersväng och cyklister är en klassisk konflikt. Spegel, axelblick, släpp fram.", "Right turns and cyclists are a classic conflict. Mirror, shoulder, let them through.", "الانعطاف يميناً والدراجات تعارض كلاسيكي. مرآة، كتف، أفسح."]
  ),
  Q(17, "rules", 2,
    ["Vem har väjningsplikt när en väg tar slut i en T-korsning utan skyltar?", "Who yields at an unsigned T-junction where a road ends?", "من يتراجع في تقاطع T بلا لافتات حيث ينتهي طريق؟"],
    [
      ["Trafiken på den genomgående vägen", "Den som kommer från höger på stammen", "Den som kommer från den anslutande vägen (stammen)"],
      ["Traffic on the through road", "Whoever comes from the right on the stem", "Whoever comes from the joining road (the stem)"],
      ["السير على الطريق العابر", "القادم من يمين الساق", "القادم من الطريق المنضم (الساق)"],
    ],
    ["Utfart/T-korsning: den som kommer från den avslutade vägen har väjningsplikt.", "At a T, traffic from the ending road yields.", "في T يتراجع القادم من الطريق المنتهي."]
  ),
  Q(18, "rules", 0,
    ["Gult fast sken i trafikljus betyder…", "A steady amber light means…", "الضوء البرتقالي الثابت يعني…"],
    [
      ["Stanna om du kan göra det på ett säkert sätt", "Gasar för att hinna", "Samma som grönt med försiktighet"],
      ["Stop if you can do so safely", "Accelerate to make it", "Same as green with caution"],
      ["توقف إن أمكن بأمان", "أسرع لتلحق", "كالأخضر مع الحذر"],
    ],
    ["Gult = stopp om det är säkert. Kör bara vidare om du redan är så nära att ett stopp blir farligt.", "Amber = stop if safe. Continue only if you are already so close that stopping would be dangerous.", "البرتقالي = توقف إن كان آمناً. تابع فقط إن كنت قريباً بحيث يصبح التوقف خطراً."]
  ),
  Q(19, "rules", 1,
    ["Blinkande gult ljus betyder…", "A flashing amber light means…", "الضوء البرتقالي الوميض يعني…"],
    [
      ["Samma som rött", "Kör, men med stor försiktighet", "Vägen är avstängd"],
      ["The same as red", "Proceed, but with great caution", "The road is closed"],
      ["مثل الأحمر", "تابع بحذر شديد", "الطريق مغلق"],
    ],
    ["Blinkande gult: signalen är ur funktion eller varnar. Tillämpa väjningsregler.", "Flashing amber: the signal is out or warning. Apply the normal yield rules.", "وميض برتقالي: الإشارة معطلة أو تحذّر. طبّق قواعد التراجع."]
  ),
  Q(20, "rules", 2,
    ["På motortrafikled får du…", "On a motortrafikled (expressway) you may…", "على طريق السيارات السريع يجوز أن…"],
    [
      ["Köra moped klass I", "Stanna på vägrenen för rast", "Inte vända eller köra för långsamtgående fordon som inte är tillåtna"],
      ["Ride a class I moped", "Stop on the shoulder for a break", "Not turn or use it with slow vehicles that are not allowed"],
      ["تقود دراجة ممطوّرة فئة I", "تتوقف على الكتف للاستراحة", "لا تلتف ولا تدخل بمركبات بطيئة غير مسموحة"],
    ],
    ["Motortrafikled liknar motorväg: inga oskyddade, ingen vändning, minsta hastighet gäller i praktiken.", "An expressway is like a motorway: no vulnerable road users, no turning, a practical minimum speed.", "يشبه الطريق السريع: بلا مستخدمين مكشوفين ولا التفاف، وسرعة دنيا عملية."]
  ),
  Q(21, "signs", 1,
    ["Ett rött oktagonmärke betyder…", "A red octagon means…", "المثمّن الأحمر يعني…"],
    [
      ["Väjningsplikt", "Stopplikt — du måste stanna helt", "Förbud mot infart"],
      ["Yield", "Stop — you must come to a full halt", "No entry"],
      ["تراجع", "قف — يجب التوقف التام", "منع الدخول"],
    ],
    ["Stoppskylten är unik i formen. Stanna vid linjen, släpp fram, kör när det är fritt.", "The stop sign is unique in shape. Stop at the line, give way, go when clear.", "لافتة قف فريدة الشكل. توقف عند الخط وأفسح ثم سر عندما يخلو."]
  ),
  Q(22, "signs", 0,
    ["En nedåtvänd triangel med röd ram betyder…", "A downward triangle with a red border means…", "مثلث مقلوب بإطار أحمر يعني…"],
    [
      ["Väjningsplikt", "Stopplikt", "Varning för farlig kurva"],
      ["Yield", "Stop", "Warning for a sharp bend"],
      ["تراجع", "قف", "تحذير منعطف خطر"],
    ],
    ["Väjningsplikt: sänk farten, släpp fram, stanna om det behövs. Inte samma krav på helt stillastående som stopp.", "Yield: slow, give way, stop if needed. Not the same full-stop demand as a stop sign.", "تراجع: خفف وأفسح وتوقف إن لزم. ليس نفس شرط التوقف التام."]
  ),
  Q(23, "signs", 2,
    ["Ett runt märke med röd ram och svart fordon betyder oftast…", "A round sign with a red rim and a black vehicle usually means…", "لافتة دائرية بإطار أحمر ومركبة سوداء تعني غالباً…"],
    [
      ["Påbjuden körriktning", "Huvudled", "Förbud mot det fordonet"],
      ["Mandatory direction", "Priority road", "That vehicle is prohibited"],
      ["اتجاه إلزامي", "طريق رئيسي", "تلك المركبة ممنوعة"],
    ],
    ["Runda märken med röd ram är förbud. Symbolen visar vad som är förbjudet.", "Round signs with a red rim are prohibitions. The symbol shows what is banned.", "الدائرية ذات الإطار الأحمر ممنوعات. الرمز يبيّن الممنوع."]
  ),
  Q(24, "signs", 0,
    ["Ett blått runt märke med vit pil betyder…", "A blue round sign with a white arrow means…", "لافتة زرقاء دائرية بسهم أبيض تعني…"],
    [
      ["Påbjuden körriktning", "Vägledning", "Motorväg börjar"],
      ["Mandatory direction", "A direction sign", "Motorway starts"],
      ["اتجاه إلزامي", "لافتة إرشاد", "بداية الطريق السريع"],
    ],
    ["Blå runda märken är påbud. Du måste följa pilens riktning.", "Blue round signs are mandatory. You must follow the arrow.", "الزرقاء الدائرية إلزامية. يجب اتباع اتجاه السهم."]
  ),
  Q(25, "signs", 1,
    ["Gult ruter-märke betyder…", "A yellow diamond means…", "المعين الأصفر يعني…"],
    [
      ["Varning för älg", "Huvudled", "Slut på motorväg"],
      ["Moose warning", "Priority road", "End of motorway"],
      ["تحذير موظ", "طريق رئيسي", "نهاية الطريق السريع"],
    ],
    ["Gult ruter = huvudled. Slutet markeras med samma märke och ett streck.", "Yellow diamond = priority road. The end is the same sign with a bar.", "المعين الأصفر = طريق رئيسي. النهاية نفس اللافتة مع شطب."]
  ),
  Q(26, "signs", 2,
    ["Ett triangulärt märke med röd ram är…", "A triangular sign with a red rim is…", "المثلث بإطار أحمر هو…"],
    [
      ["Förbud", "Påbud", "Varning"],
      ["A prohibition", "A mandatory order", "A warning"],
      ["منع", "إلزام", "تحذير"],
    ],
    ["Uppåtpekande triangel med röd ram varnar för fara. Anpassa farten.", "An upward triangle with a red rim warns of danger. Adjust your speed.", "مثلث للأعلى بإطار أحمر يحذّر من خطر. اضبط سرعتك."]
  ),
  Q(27, "signs", 0,
    ["Märke med barn som springer varnar för…", "A sign with running children warns of…", "لافتة أطفال يجرون تحذّر من…"],
    [
      ["Barn, ofta skola eller lek — sänk farten extra", "Lekplats där du får parkera fritt", "Gågata"],
      ["Children, often a school or play — slow extra", "A playground where you may park freely", "A pedestrian street"],
      ["أطفال، غالباً مدرسة أو لعب — خفف أكثر", "ملعب يُسمح فيه الوقوف بحرية", "شارع مشاة"],
    ],
    ["Barn agerar oförutsägbart. 30-skylt är vanlig, men även utan den ska du sänka.", "Children act unpredictably. A 30 sign is common, but slow even without one.", "الأطفال يتصرفون بلا توقع. لافتة 30 شائعة لكن خفف حتى بدونها."]
  ),
  Q(28, "signs", 1,
    ["En älgskylt betyder att du ska…", "A moose sign means you should…", "لافتة الموظ تعني أنك يجب أن…"],
    [
      ["Hålla motorvägsfart", "Räkna med djur, särskilt i skymning, och kunna stanna inom synfältet", "Tutats för att skrämma djuren"],
      ["Hold motorway speed", "Expect animals, especially at dusk, and be able to stop within your view", "Honk to scare the animals"],
      ["تحافظ على سرعة الطريق السريع", "تتوقع حيوانات خصوصاً عند الغسق وتستطيع التوقف ضمن رؤيتك", "تزمر لإخافة الحيوانات"],
    ],
    ["Älgolyckor är vanliga i gryning och skymning. Sänk farten, sök med blicken längs kanten.", "Moose crashes are common at dawn and dusk. Slow down and scan the edges.", "حوادث الموظ شائعة عند الفجر والغسق. خفف وامسح الحواف بنظرك."]
  ),
  Q(29, "signs", 2,
    ["C-märke (blå skiva med rött streck) betyder…", "A C-sign (blue disc with a red slash) means…", "لافتة C (قرص أزرق بخط أحمر) تعني…"],
    [
      ["Parkering tillåten", "Stoppförbud", "Parkeringsförbud"],
      ["Parking allowed", "No stopping", "No parking"],
      ["الوقوف مسموح", "منع التوقف", "منع الوقوف"],
    ],
    ["Parkeringsförbud: du får stanna för av- och påstigning men inte parkera.", "No parking: you may stop to pick up or drop off, but not park.", "منع الوقوف: يجوز التوقف للصعود والنزول لا للركن."]
  ),
  Q(30, "signs", 0,
    ["Kryssmärke med rött kryss på blått betyder…", "A red cross on blue means…", "صليب أحمر على أزرق يعني…"],
    [
      ["Stoppförbud — du får inte ens stanna", "Bara lastning tillåten", "Handikapparkering"],
      ["No stopping — you may not even halt", "Loading only", "Disabled parking"],
      ["منع التوقف — لا يجوز حتى التمهل", "التحميل فقط", "وقوف ذوي الإعاقة"],
    ],
    ["Stoppförbud är strängare än parkeringsförbud. Ingen stannar annat än om trafiken tvingar dig.", "No stopping is stricter than no parking. Halt only if traffic forces you.", "منع التوقف أشد من منع الوقوف. لا تتوقف إلا إن أجبرك السير."]
  ),
  Q(31, "signs", 1,
    ["En grön skylt med motorvägssymbol betyder…", "A green sign with a motorway symbol means…", "لافتة خضراء برمز الطريق السريع تعني…"],
    [
      ["Landsväg börjar", "Motorväg börjar", "Tättbebyggt område"],
      ["A rural road starts", "A motorway starts", "A built-up area"],
      ["بداية طريق ريفي", "بداية طريق سريع", "منطقة مبنية"],
    ],
    ["Grönt = motorväg. Andra regler: ingen vändning, inga oskyddade trafikanter.", "Green = motorway. Different rules: no turning, no vulnerable road users.", "الأخضر = طريق سريع. قواعد مختلفة: بلا التفاف وبلا مستخدمين مكشوفين."]
  ),
  Q(32, "signs", 2,
    ["Ett märke med ett kryss över en hastighetssiffra betyder…", "A sign with a speed figure crossed out means…", "لافتة برقم سرعة مشطوب تعني…"],
    [
      ["Rekommenderad fart tar slut", "Du måste stanna", "Hastighetsbegränsningen tar slut — generell gräns gäller"],
      ["The advised speed ends", "You must stop", "That speed limit ends — the general limit applies"],
      ["نهاية السرعة الموصى بها", "يجب التوقف", "نهاية ذلك الحد — ينطبق الحد العام"],
    ],
    ["När en tillfällig eller lokal gräns slutar återgår du till den generella gränsen för miljön.", "When a local limit ends you return to the general limit for that environment.", "عندما ينتهي حد محلي تعود للحد العام لتلك البيئة."]
  ),
  Q(33, "signs", 0,
    ["Blått fyrkantigt P-märke betyder…", "A blue square P sign means…", "مربع أزرق بحرف P يعني…"],
    [
      ["Parkering tillåten enligt tilläggstavla", "Stoppförbud", "Bara taxi"],
      ["Parking allowed according to any plaque", "No stopping", "Taxis only"],
      ["الوقوف مسموح وفق اللوحة الإضافية", "منع التوقف", "سيارات الأجرة فقط"],
    ],
    ["P-skylt tillåter parkering. Läs alltid tilläggstavlan: tid, avgift, datumparkering.", "A P sign allows parking. Always read the plaque: hours, fee, date parking.", "لافتة P تسمح بالوقوف. اقرأ دائماً اللوحة: الوقت والرسم وتاريخ الوقوف."]
  ),
  Q(34, "signs", 1,
    ["En tilläggstavla med en pil under ett förbud visar…", "A plaque with an arrow under a ban shows…", "لوحة إضافية بسهم تحت منع تبيّن…"],
    [
      ["Att märket gäller i hela kommunen", "Sträckan eller riktningen som förbudet gäller", "Att du får ignorera märket bakom dig"],
      ["That the sign applies in the whole municipality", "The stretch or direction the ban covers", "That you may ignore the sign behind you"],
      ["أن اللافتة تسري في كل البلدية", "المدى أو الاتجاه الذي يشمله المنع", "أنه يجوز تجاهل اللافتة خلفك"],
    ],
    ["Tilläggstavlor preciserar tid, riktning, fordonsslag eller avstånd.", "Plaques specify time, direction, vehicle type or distance.", "اللوحات الإضافية تحدّد الوقت أو الاتجاه أو نوع المركبة أو المسافة."]
  ),
  Q(35, "signs", 2,
    ["Väjningsplikt mot mötande trafik (rött/vitt smalt märke) betyder…", "Give way to oncoming traffic (red/white narrow sign) means…", "تراجع للقادم (لافتة حمراء/بيضاء ضيقة) تعني…"],
    [
      ["Du har företräde i trångt parti", "Bara lastbilar släpper fram", "Du måste släppa mötande i det smala avsnittet"],
      ["You have priority in the narrow section", "Only lorries give way", "You must let oncoming traffic through the narrow section"],
      ["لك الأولوية في المقطع الضيق", "الشاحنات فقط تتراجع", "يجب أن تدع القادم يعبر المقطع الضيق"],
    ],
    ["Det röda fältet mot dig = du väjer. Det vita mot dig = du har företräde.", "The red field toward you = you yield. White toward you = you have priority.", "الحقل الأحمر نحوك = تتراجع. الأبيض نحوك = لك الأولوية."]
  ),
  Q(36, "speed", 0,
    ["Generell bashastighet i tättbebyggt område är…", "The default speed in a built-up area is…", "السرعة الافتراضية في المنطقة المبنية هي…"],
    [
      ["50 km/h om inget annat anges", "30 km/h alltid", "70 km/h"],
      ["50 km/h unless otherwise posted", "Always 30 km/h", "70 km/h"],
      ["50 كم/س ما لم يُذكر غير ذلك", "30 كم/س دائماً", "70 كم/س"],
    ],
    ["Skylten för tättbebyggt sätter 50 km/h. Kommuner sätter ofta 30 eller 40 lokalt.", "The built-up-area sign sets 50 km/h. Municipalities often post 30 or 40 locally.", "لافتة المنطقة المبنية تضع 50 كم/س. غالباً تضع البلديات 30 أو 40 محلياً."]
  ),
  Q(37, "speed", 1,
    ["Utanför tättbebyggt område, på vanlig landsväg utan skylt, är gränsen oftast…", "Outside a built-up area on an ordinary unsigned rural road the limit is usually…", "خارج المنطقة المبنية على طريق ريفي عادي بلا لافتة الحد عادة…"],
    [
      ["50 km/h", "70 km/h", "110 km/h"],
      ["50 km/h", "70 km/h", "110 km/h"],
      ["50 كم/س", "70 كم/س", "110 كم/س"],
    ],
    ["Generell gräns utanför tätort är 70 km/h om ingen annan skylt finns.", "The general limit outside towns is 70 km/h if nothing else is posted.", "الحد العام خارج البلدات 70 كم/س إن لم تُنشر لافتة أخرى."]
  ),
  Q(38, "speed", 2,
    ["Högsta tillåtna hastighet på svensk motorväg är i regel…", "The highest speed on a Swedish motorway is as a rule…", "أعلى سرعة على طريق سويدي سريع هي عادة…"],
    [
      ["90 km/h", "100 km/h alltid", "110 eller 120 km/h där det är skyltat så"],
      ["90 km/h", "Always 100 km/h", "110 or 120 km/h where posted"],
      ["90 كم/س", "100 كم/س دائماً", "110 أو 120 كم/س حيث يُعلن ذلك"],
    ],
    ["Motorväg har ofta 110, ibland 120. Skylten gäller — inte vanan.", "Motorways are often 110, sometimes 120. The sign rules — not habit.", "الطرق السريعة غالباً 110 وأحياناً 120. اللافتة تحكم لا العادة."]
  ),
  Q(39, "speed", 0,
    ["I en 30-zon ska du…", "In a 30 zone you should…", "في منطقة 30 يجب أن…"],
    [
      ["Hålla högst 30 och räkna med oskyddade trafikanter", "Köra 40 om vägen är tom", "Använda 30 bara vid skola"],
      ["Hold 30 max and expect vulnerable road users", "Drive 40 if the road is empty", "Use 30 only near a school"],
      ["تلتزم 30 كحد وتتوقع مستخدمين مكشوفين", "تقود 40 إن كان الطريق فارغاً", "تستخدم 30 قرب المدرسة فقط"],
    ],
    ["30 är ett tak, inte ett golv. Anpassa ytterligare vid lek, nederbörd eller mörker.", "30 is a ceiling, not a floor. Adapt further for play, rain or darkness.", "30 سقف لا أرضية. تكيّف أكثر مع اللعب أو المطر أو الظلام."]
  ),
  Q(40, "speed", 1,
    ["Hastigheten ska anpassas efter…", "Speed should be adapted to…", "يجب تكييف السرعة حسب…"],
    [
      ["Bara skylten", "Skylt, sikt, väglag, trafik och din förmåga", "Bara vad andra kör"],
      ["The sign only", "The sign, visibility, road, traffic and your ability", "Only what others drive"],
      ["اللافتة فقط", "اللافتة والرؤية والطريق والسير وقدرتك", "ما يقوده الآخرون فقط"],
    ],
    ["Skylten är max. Lagen kräver dessutom en hastighet som är betryggande i situationen.", "The sign is a maximum. The law also requires a speed that is safe in the situation.", "اللافتة حد أقصى. القانون يطلب أيضاً سرعة مطمئنة في الموقف."]
  ),
  Q(41, "speed", 2,
    ["Om du dubblar farten blir bromssträckan ungefär…", "If you double your speed, braking distance becomes about…", "إذا ضاعفت السرعة تصبح مسافة الكبح تقريباً…"],
    [
      ["Dubbelt så lång", "Tre gånger så lång", "Fyra gånger så lång"],
      ["Twice as long", "Three times as long", "Four times as long"],
      ["أطول بمرتين", "أطول بثلاث مرات", "أطول بأربع مرات"],
    ],
    ["Bromssträckan växer med kvadraten på farten. 2× fart ≈ 4× bromssträcka.", "Braking distance grows with the square of speed. 2× speed ≈ 4× braking distance.", "مسافة الكبح تنمو مع مربع السرعة. ضعف السرعة ≈ أربعة أضعاف الكبح."]
  ),
  Q(42, "speed", 0,
    ["Vid 90 km/h rör du dig ungefär…", "At 90 km/h you travel about…", "عند 90 كم/س تقطع تقريباً…"],
    [
      ["25 meter per sekund", "9 meter per sekund", "90 meter per sekund"],
      ["25 metres per second", "9 metres per second", "90 metres per second"],
      ["25 متراً في الثانية", "9 أمتار في الثانية", "90 متراً في الثانية"],
    ],
    ["Tumregel: dela km/h med 3,6. 90 / 3,6 = 25 m/s.", "Rule of thumb: divide km/h by 3.6. 90 / 3.6 = 25 m/s.", "قاعدة: اقسم كم/س على 3.6. 90 / 3.6 = 25 م/ث."]
  ),
  Q(43, "speed", 1,
    ["Från 50 till 70 km/h ökar bromssträckan ungefär…", "From 50 to 70 km/h braking distance increases by about…", "من 50 إلى 70 كم/س تزيد مسافة الكبح بنحو…"],
    [
      ["10 procent", "Nästan det dubbla", "Fem gånger"],
      ["10 percent", "Almost double", "Five times"],
      ["10 بالمئة", "تقريباً الضعف", "خمس مرات"],
    ],
    ["70/50 = 1,4 och 1,4² ≈ 2. Nästan dubbel bromssträcka.", "70/50 = 1.4 and 1.4² ≈ 2. Almost double the braking distance.", "70/50 = 1.4 و 1.4² ≈ 2. تقريباً ضعف مسافة الكبح."]
  ),
  Q(44, "speed", 2,
    ["I en tunnel ska du…", "In a tunnel you should…", "في النفق يجب أن…"],
    [
      ["Släcka lyktorna för att spara", "Köra om ofta", "Ha belysning tänd, hålla avstånd och inte stanna i onödan"],
      ["Switch lights off to save energy", "Overtake often", "Keep lights on, hold a gap and not stop needlessly"],
      ["تطفئ الأنوار للتوفير", "تتجاوز كثيراً", "تبقي الأنوار وتشغل مسافة ولا تتوقف بلا داع"],
    ],
    ["Ljus på, solglasögon av, avstånd, följ anvisningar vid kö. Stanna inte mitt i tunneln.", "Lights on, sunglasses off, keep a gap, follow queue instructions. Do not stop mid-tunnel.", "الأنوار مضاءة، انزع النظارة، اترك مسافة واتبع تعليمات الصف. لا تتوقف وسط النفق."]
  ),
  Q(45, "speed", 0,
    ["Rekommenderad hastighet (blå fyrkant med siffra) är…", "An advised speed (blue square with a number) is…", "السرعة الموصى بها (مربع أزرق برقم) هي…"],
    [
      ["Ett råd vid till exempel kurva — inte samma som förbud", "Samma som högsta tillåtna", "Lägsta tillåtna fart"],
      ["Advice at e.g. a bend — not the same as a ban", "The same as the legal maximum", "The minimum legal speed"],
      ["نصيحة عند منعطف مثلاً — ليست منعاً", "نفس الحد القانوني", "أدنى سرعة قانونية"],
    ],
    ["Blå rekommendation är vägledning. Den lagliga maxgränsen kan vara högre, men kurvan kräver lägre.", "A blue advisory is guidance. The legal max may be higher, but the bend needs less.", "التوصية الزرقاء إرشاد. الحد القانوني قد يكون أعلى لكن المنعطف يحتاج أقل."]
  ),
  Q(46, "alcohol", 1,
    ["Promillegränsen för rattfylleri i Sverige är…", "The drink-drive limit in Sweden is…", "حد الكحول للقيادة في السويد هو…"],
    [
      ["0,5 promille", "0,2 promille", "0,0 promille i lagtexten för alkohol"],
      ["0.5 per mille", "0.2 per mille", "0.0 per mille in the statute for alcohol"],
      ["0.5 في الألف", "0.2 في الألف", "0.0 في الألف في النص للكحول"],
    ],
    ["Gränsen är 0,2 promille. Grovt rattfylleri från 1,0. Narkotika: nolltolerans.", "The limit is 0.2 per mille. Aggravated from 1.0. Drugs: zero tolerance.", "الحد 0.2 في الألف. الجسيم من 1.0. المخدرات: بلا تسامح."]
  ),
  Q(47, "alcohol", 0,
    ["Kan kaffe, mat eller en kall dusch snabba på nykterheten?", "Can coffee, food or a cold shower speed up sobering?", "هل يسرّع القهوة أو الطعام أو الدش البارد الإفاقة؟"],
    [
      ["Nej. Bara tiden sänker promillehalten", "Ja, kaffe halverar tiden", "Ja, träning bränner alkohol snabbt"],
      ["No. Only time lowers blood alcohol", "Yes, coffee halves the time", "Yes, exercise burns alcohol quickly"],
      ["لا. الوقت وحده يخفض النسبة", "نعم القهوة تنصف الوقت", "نعم الرياضة تحرق الكحول بسرعة"],
    ],
    ["Levern bryter ner ungefär 0,15 promille per timme. Inget trick ändrar det.", "The liver clears about 0.15 per mille per hour. No trick changes that.", "الكبد يفكك نحو 0.15 في الألف في الساعة. لا حيلة تغيّر ذلك."]
  ),
  Q(48, "alcohol", 2,
    ["Narkotika i trafiken…", "Drugs in traffic…", "المخدرات في المرور…"],
    [
      ["Är tillåtet i små doser", "Bedöms som alkohol, 0,2", "Har nolltolerans — spår i blodet räcker"],
      ["Are allowed in small doses", "Are treated like alcohol, 0.2", "Have zero tolerance — traces in blood are enough"],
      ["مسموحة بجرعات صغيرة", "تُعامل كالكحول 0.2", "بلا تسامح — أثر في الدم يكفي"],
    ],
    ["I princip nolltolerans mot narkotika bakom ratten, även dagen efter om det finns kvar.", "In principle zero tolerance for drugs behind the wheel, even the next day if traces remain.", "من حيث المبدأ بلا تسامح مع المخدرات خلف المقود حتى في اليوم التالي إن بقي أثر."]
  ),
  Q(49, "alcohol", 1,
    ["Trötthet påverkar dig ungefär som…", "Fatigue affects you roughly like…", "التعب يؤثّر فيك تقريباً مثل…"],
    [
      ["En kopp te", "Alkohol — reaktion och omdöme försämras", "Ingen märkbar effekt under 2 timmar"],
      ["A cup of tea", "Alcohol — reaction and judgement drop", "No noticeable effect under 2 hours"],
      ["كوب شاي", "الكحول — يتراجع رد الفعل والحكم", "لا أثر ملحوظ تحت ساعتين"],
    ],
    ["Trötthet sänker prestationen i klass med alkohol. Ta rast. Byt förare. Sov.", "Fatigue drops performance in the same class as alcohol. Rest. Swap driver. Sleep.", "التعب يخفّض الأداء في مستوى الكحول. استرح. بدّل السائق. نم."]
  ),
  Q(50, "alcohol", 0,
    ["Ett glas vin till lunchen. När är det säkert att köra?", "A glass of wine at lunch. When is it safe to drive?", "كأس نبيذ على الغداء. متى يكون القيادة آمناً؟"],
    [
      ["Du kan inte veta exakt — vänta länge eller avstå", "Efter 20 minuter", "Direkt om du äter mat"],
      ["You cannot know exactly — wait a long time or skip driving", "After 20 minutes", "Immediately if you eat"],
      ["لا يمكنك معرفة ذلك بدقة — انتظر طويلاً أو لا تقد", "بعد 20 دقيقة", "فوراً إن أكلت"],
    ],
    ["Kroppsvikt, kön, mat och tid påverkar. Tumregel: kör inte samma dag om du druckit mer än minimalt.", "Weight, sex, food and time matter. Rule of thumb: do not drive the same day if you drank more than a trace.", "الوزن والجنس والطعام والوقت تؤثّر. قاعدة: لا تقد في اليوم نفسه إن شربت أكثر من الحد الأدنى."]
  ),
  Q(51, "alcohol", 2,
    ["Läkemedel som varnar för trafik…", "Medicine labelled as affecting driving…", "دواء يحمل تحذير قيادة…"],
    [
      ["Är alltid ofarligt i halv dos", "Gäller bara lastbil", "Kan ge rattfylleri om det påverkar körförmågan"],
      ["Is always safe at half dose", "Applies only to lorries", "Can count as impaired driving if it affects you"],
      ["آمن دائماً بنصف جرعة", "يسري على الشاحنات فقط", "قد يُعد قيادة تحت تأثير إن أثّر فيك"],
    ],
    ["Vissa mediciner är trafikfarliga. Läs FASS-symbolen och fråga läkare.", "Some medicines impair driving. Read the warning symbol and ask a doctor.", "بعض الأدوية خطرة مرورياً. اقرأ رمز التحذير واسأل الطبيب."]
  ),
  Q(52, "alcohol", 1,
    ["Efter en natt med alkohol är du nykter klockan 07 om du slutade midnatt. Sant?", "After a night of drinking you are sober at 07 if you stopped at midnight. True?", "بعد ليلة شرب تكون صاحياً الساعة 7 إن توقفت منتصف الليل. صحيح؟"],
    [
      ["Ja, alltid", "Nej, det beror på hur mycket du drack", "Ja om du sover"],
      ["Yes, always", "No — it depends how much you drank", "Yes if you sleep"],
      ["نعم دائماً", "لا — يعتمد على كمية الشرب", "نعم إن نمت"],
    ],
    ["En hög promille vid midnatt kan fortfarande ligga över 0,2 klockan sju. Gissa inte.", "A high level at midnight can still sit above 0.2 at seven. Do not guess.", "نسبة عالية عند منتصف الليل قد تبقى فوق 0.2 عند السابعة. لا تخمّن."]
  ),
  Q(53, "alcohol", 0,
    ["Grovt rattfylleri börjar vid ungefär…", "Aggravated drink-driving starts at about…", "القيادة الثملة الجسيمة تبدأ عند نحو…"],
    [
      ["1,0 promille", "0,2 promille", "2,0 promille"],
      ["1.0 per mille", "0.2 per mille", "2.0 per mille"],
      ["1.0 في الألف", "0.2 في الألف", "2.0 في الألف"],
    ],
    ["Grovt rattfylleri från 1,0 promille eller om körningen varit särskilt farlig.", "Aggravated drink-driving from 1.0 per mille, or if the driving was especially dangerous.", "الجسيم من 1.0 في الألف أو إن كانت القيادة خطرة بشكل خاص."]
  ),
  Q(54, "distance", 1,
    ["Stoppsträcka är…", "Stopping distance is…", "مسافة التوقف هي…"],
    [
      ["Bara bromssträckan", "Reaktionssträcka + bromssträcka", "Bara reaktionssträckan"],
      ["Braking distance only", "Reaction distance + braking distance", "Reaction distance only"],
      ["مسافة الكبح فقط", "مسافة رد الفعل + مسافة الكبح", "مسافة رد الفعل فقط"],
    ],
    ["Stoppsträcka = tid att reagera plus tid att bromsa till stillastående.", "Stopping distance = time to react plus time to brake to a halt.", "مسافة التوقف = وقت رد الفعل زائد وقت الكبح حتى التوقف."]
  ),
  Q(55, "distance", 0,
    ["En normal reaktionstid är ungefär…", "A normal reaction time is about…", "زمن رد الفعل الطبيعي تقريباً…"],
    [
      ["1 sekund", "0,1 sekund", "4 sekunder"],
      ["1 second", "0.1 seconds", "4 seconds"],
      ["ثانية واحدة", "0.1 ثانية", "4 ثوان"],
    ],
    ["Räkna med cirka 1 sekund. Trött, alkohol eller mobil gör den längre.", "Count on about 1 second. Fatigue, alcohol or a phone makes it longer.", "احسب نحو ثانية. التعب أو الكحول أو الجوال يطيلها."]
  ),
  Q(56, "distance", 2,
    ["Vid 90 km/h och 1 sekunds reaktionstid blir reaktionssträckan…", "At 90 km/h and 1 second reaction time, reaction distance is…", "عند 90 كم/س وثانية رد فعل تكون مسافة رد الفعل…"],
    [
      ["9 meter", "50 meter", "25 meter"],
      ["9 metres", "50 metres", "25 metres"],
      ["9 أمتار", "50 متراً", "25 متراً"],
    ],
    ["90 km/h ≈ 25 m/s. På en sekund rullar du 25 meter innan bromsen tar.", "90 km/h ≈ 25 m/s. In one second you roll 25 metres before the brakes bite.", "90 كم/س ≈ 25 م/ث. في ثانية تقطع 25 متراً قبل أن تعض المكابح."]
  ),
  Q(57, "distance", 0,
    ["Tvåsekundersregeln betyder att du…", "The two-second rule means you…", "قاعدة الثانيتين تعني أنك…"],
    [
      ["Håller minst två sekunder till fordonet framför i torrt väglag", "Alltid ligger 2 meter bakom", "Kör om på två sekunder"],
      ["Keep at least two seconds to the vehicle ahead in the dry", "Always sit 2 metres behind", "Overtake in two seconds"],
      ["تبقي ثانيتين على الأقل خلف من أمامك في الجاف", "تبقى دائماً على بعد مترين", "تتجاوز في ثانيتين"],
    ],
    ["Välj en punkt. När bilen framför passerar den, räkna två sekunder. I väta och mörker mer.", "Pick a point. When the car ahead passes it, count two seconds. In rain and dark, more.", "اختر نقطة. عندما تمرها السيارة أمامك عُدّ ثانيتين. في المطر والظلام أكثر."]
  ),
  Q(58, "distance", 1,
    ["På halt väglag bör avståndet…", "On a slippery road the gap should…", "على طريق زلق يجب أن تكون المسافة…"],
    [
      ["Vara detsamma som i torrt", "Ökas rejält, ofta tredubblas eller mer", "Minskas så du ser bättre"],
      ["Stay the same as in the dry", "Increase a lot, often triple or more", "Shrink so you see better"],
      ["تبقى كما في الجاف", "تزيد كثيراً وغالباً تُضاعف ثلاث مرات أو أكثر", "تقل لترى أفضل"],
    ],
    ["Greppet kan vara en bråkdel. Avstånd är den billigaste försäkringen.", "Grip can be a fraction. Distance is the cheapest insurance.", "التماسك قد يكون كسراً. المسافة أرخص تأمين."]
  ),
  Q(59, "distance", 2,
    ["Om någon ligger för nära bakom dig bör du…", "If someone is tailgating you should…", "إذا اقترب أحد كثيراً من خلفك يجب أن…"],
    [
      ["Bromsa hårt för att straffa", "Gasar för att visa", "Öka ditt eget avstånd framåt och släppa förbi när det är säkert"],
      ["Brake hard to punish them", "Speed up to show them", "Increase your own gap ahead and let them pass when safe"],
      ["تكبح بقوة لمعاقبتهم", "تسرع لتريهم", "تزيد مسافتك أمامك وتدعهم يتجاوزون عندما يأمن الأمر"],
    ],
    ["Du styr bara din lucka framåt. Släpp omkörande. Bråka inte med avståndet bakåt.", "You only control the gap ahead. Let them pass. Do not fight the gap behind.", "تتحكم فقط في الفراغ أمامك. دعهم يتجاوزون. لا تتشاجر مع المسافة خلفك."]
  ),
  Q(60, "distance", 0,
    ["Bromssträckan påverkas mest av…", "Braking distance is affected most by…", "مسافة الكبح تتأثر أكثر بـ…"],
    [
      ["Fart, väglag, däck och backe", "Bilens färg", "Reglaget för radion"],
      ["Speed, surface, tyres and slope", "The car’s colour", "The radio knob"],
      ["السرعة والسطح والإطارات والمنحدر", "لون السيارة", "زر المذياع"],
    ],
    ["Farten slår hårdast (v²). Sedan däck, vatten, is, last och lutning.", "Speed hits hardest (v²). Then tyres, water, ice, load and gradient.", "السرعة الأقوى (v²). ثم الإطارات والماء والجليد والحمل والميل."]
  ),
  Q(61, "distance", 1,
    ["Vid 50 km/h är reaktionssträckan på 1 sekund ungefär…", "At 50 km/h, 1-second reaction distance is about…", "عند 50 كم/س مسافة رد الفعل لثانية تقريباً…"],
    [
      ["5 meter", "14 meter", "50 meter"],
      ["5 metres", "14 metres", "50 metres"],
      ["5 أمتار", "14 متراً", "50 متراً"],
    ],
    ["50 / 3,6 ≈ 14 m/s. En sekund = cirka 14 meter.", "50 / 3.6 ≈ 14 m/s. One second ≈ 14 metres.", "50 / 3.6 ≈ 14 م/ث. ثانية ≈ 14 متراً."]
  ),
  Q(62, "winter", 0,
    ["När krävs vinterdäck i Sverige?", "When are winter tyres required in Sweden?", "متى تُفرض الإطارات الشتوية في السويد؟"],
    [
      ["1 december–31 mars vid vinterväglag", "Hela året norr om Dalälven", "Bara i januari"],
      ["1 December–31 March in winter conditions", "All year north of the Dalälven", "Only in January"],
      ["1 ديسمبر–31 مارس في ظروف الشتاء", "طوال العام شمال نهر دال", "في يناير فقط"],
    ],
    ["Vinterdäck är obligatoriska 1/12–31/3 om det är vinterväglag. Mönsterdjup minst 3 mm.", "Winter tyres are mandatory 1/12–31/3 if conditions are wintry. Tread at least 3 mm.", "الإطارات الشتوية إلزامية 1/12–31/3 إن كانت الظروف شتوية. النقش 3 ملم على الأقل."]
  ),
  Q(63, "winter", 2,
    ["Dubbdäck är tillåtna ungefär…", "Studded tyres are allowed roughly…", "الإطارات المرصعة مسموحة تقريباً…"],
    [
      ["Bara i januari–februari", "Året om", "1 oktober–15 april"],
      ["Only January–February", "All year", "1 October–15 April"],
      ["يناير–فبراير فقط", "طوال العام", "1 أكتوبر–15 أبريل"],
    ],
    ["Dubbdäck får användas 1 oktober–15 april, och även annan tid om det är eller befaras vinterväglag.", "Studs may be used 1 October–15 April, and outside that if winter conditions exist or are expected.", "يجوز الرصع 1 أكتوبر–15 أبريل وخارج ذلك إن وُجدت أو تُوقعت ظروف شتوية."]
  ),
  Q(64, "winter", 1,
    ["Minsta mönsterdjup på vinterdäck är…", "Minimum tread depth on winter tyres is…", "أدنى عمق نقش لإطارات الشتاء هو…"],
    [
      ["1,6 mm", "3 mm", "8 mm"],
      ["1.6 mm", "3 mm", "8 mm"],
      ["1.6 ملم", "3 ملم", "8 ملم"],
    ],
    ["Sommar 1,6 mm. Vinter 3 mm. Många byter tidigare för greppets skull.", "Summer 1.6 mm. Winter 3 mm. Many change earlier for grip.", "الصيف 1.6 ملم. الشتاء 3 ملم. كثيرون يغيّرون أبكر للتماسك."]
  ),
  Q(65, "winter", 0,
    ["Vid vattenplaning ska du…", "In aquaplaning you should…", "عند الانزلاق المائي يجب أن…"],
    [
      ["Lätta på gasen, inte vrida ratten häftigt, inte bromsa hårt", "Bromsa maximalt och styra hårt", "Gasar ur vattnet"],
      ["Ease off the gas, not jerk the wheel, not brake hard", "Brake fully and steer hard", "Accelerate out of the water"],
      ["تخفف الوقود ولا تلف المقود بعنف ولا تكبح بقوة", "تكبح بالكامل وتوجه بقوة", "تسرع للخروج من الماء"],
    ],
    ["Däcken har tappat greppet. Lätta gasen, håll ratten stilla tills greppet återkommer.", "The tyres have lost grip. Ease off, hold the wheel still until grip returns.", "الإطارات فقدت التماسك. خفف الوقود وثبّت المقود حتى يعود التماسك."]
  ),
  Q(66, "winter", 2,
    ["I dimma ska du…", "In fog you should…", "في الضباب يجب أن…"],
    [
      ["Köra med helljus", "Hålla samma fart som i klarväder", "Sänka farten, använda dimljus när sikten är kraftigt nedsatt"],
      ["Drive on main beam", "Hold the same speed as in clear weather", "Slow down and use fog lights when visibility is badly reduced"],
      ["تقود بالضوء العالي", "تحافظ على نفس سرعة الصحو", "تخفف وتستخدم ضباب عند تدني الرؤية بشدة"],
    ],
    ["Helljus reflekteras i dimman. Halvljus/dimljus, stor lucka, sänk farten så du kan stanna inom sikten.", "Main beam reflects in fog. Dipped/fog lights, a big gap, slow so you can stop within view.", "العالي ينعكس في الضباب. منخفض/ضباب ومسافة كبيرة وخفف لتوقف ضمن الرؤية."]
  ),
  Q(67, "winter", 1,
    ["På is ska styr- och bromsrörelser vara…", "On ice, steering and braking should be…", "على الجليد يجب أن تكون حركة التوجيه والكبح…"],
    [
      ["Snabba och hårda", "Mjuka och tidiga", "Samma som på torr asfalt"],
      ["Fast and hard", "Soft and early", "The same as on dry asphalt"],
      ["سريعة وقوية", "ناعمة ومبكّرة", "كما على الإسفلت الجاف"],
    ],
    ["Is hatar ryck. Bromsa innan kurvan. Räta upp innan du gasar.", "Ice hates jerks. Brake before the bend. Straighten before you add gas.", "الجليد يكره النفض. اكبح قبل المنعطف. استقم قبل أن تزيد الوقود."]
  ),
  Q(68, "winter", 0,
    ["Du ser en älg vid vägkanten. Du bör…", "You see a moose at the roadside. You should…", "ترى موظاً على جانب الطريق. يجب أن…"],
    [
      ["Räkna med fler, sänka farten och vara beredd att stanna", "Tutats och gasar förbi", "Slå på varningsblinkers och stanna på körbanan"],
      ["Expect more, slow down and be ready to stop", "Honk and accelerate past", "Put on hazards and stop in the lane"],
      ["تتوقع المزيد وتخفف وتكون جاهزاً للتوقف", "تزمر وتسرع للتجاوز", "تشغّل التحذير وتتوقف في المسار"],
    ],
    ["Älgar går i grupp. Den du ser är sällan ensam. Sikta inte undan in i mötande.", "Moose travel in groups. The one you see is rarely alone. Do not swerve into oncoming traffic.", "الموظ يسير في جماعات. من تراه نادراً ما يكون وحده. لا تنحرف نحو القادم."]
  ),
  Q(69, "winter", 2,
    ["Vid halka med ABS ska du…", "On ice with ABS you should…", "على الجليد مع ABS يجب أن…"],
    [
      ["Pumpa bromsen", "Koppla ur och rulla", "Trampa hårt och styra — ABS pulserar åt dig"],
      ["Pump the brake", "Declutch and roll", "Press hard and steer — ABS pulses for you"],
      ["تضخ المكابح", "تفصل القابض وتتدحرج", "تضغط بقوة وتوجه — ABS ينبض عنك"],
    ],
    ["ABS ska du inte pumpa. Hårt tryck, styr undan faran, släpp inte pedalen.", "Do not pump ABS. Firm pressure, steer around the danger, do not lift off the pedal.", "لا تضخ ABS. ضغط ثابت، وجّه حول الخطر، لا ترفع القدم."]
  ),
  Q(70, "parking", 0,
    ["Hur nära ett övergångsställe får du parkera?", "How close to a crossing may you park?", "كم تقترب من معبر مشاة عند الوقوف؟"],
    [
      ["Minst 10 meter före", "Precis vid kanten", "2 meter"],
      ["At least 10 metres before", "Right at the edge", "2 metres"],
      ["10 أمتار على الأقل قبله", "عند الحافة تماماً", "متران"],
    ],
    ["Parkering förbjuden inom 10 m före övergångsställe eller korsning, så sikten hålls fri.", "No parking within 10 m before a crossing or junction, so the view stays clear.", "يُمنع الوقوف ضمن 10 م قبل معبر أو تقاطع حتى تبقى الرؤية حرة."]
  ),
  Q(71, "parking", 1,
    ["Skillnaden mellan parkeringsförbud och stoppförbud är att vid parkeringsförbud…", "The difference between no parking and no stopping is that with no parking…", "الفرق بين منع الوقوف ومنع التوقف أنه مع منع الوقوف…"],
    [
      ["Får du inte ens sakta in", "Får du stanna för av- och påstigning", "Får du stå i 24 timmar"],
      ["You may not even slow down", "You may stop to pick up or drop off", "You may stay 24 hours"],
      ["لا يجوز حتى التخفيف", "يجوز التوقف للصعود والنزول", "يجوز البقاء 24 ساعة"],
    ],
    ["Parkera = lämna bilen. Stanna = kort uppehåll med förare. Stoppförbud förbjuder även det.", "Park = leave the car. Stop = a short halt with a driver. No stopping bans even that.", "الركن = ترك السيارة. التوقف = تمهل قصير مع سائق. منع التوقف يحظر حتى ذلك."]
  ),
  Q(72, "parking", 2,
    ["På en huvudled utanför tättbebyggt område…", "On a priority road outside a built-up area…", "على طريق رئيسي خارج المنطقة المبنية…"],
    [
      ["Får du parkera fritt på vägrenen", "Gäller samma regler som i stan", "Är det i regel förbjudet att stanna eller parkera"],
      ["You may park freely on the shoulder", "The same rules as in town apply", "It is as a rule forbidden to stop or park"],
      ["يجوز الركن بحرية على الكتف", "تسري قواعد المدينة نفسها", "يُمنع عادة التوقف أو الركن"],
    ],
    ["På huvudled utanför tätort är stannande/parkering i princip förbjudet.", "On a priority road outside town, stopping/parking is essentially banned.", "على طريق رئيسي خارج البلدة يُمنع التوقف/الركن أساساً."]
  ),
  Q(73, "parking", 0,
    ["Datumparkering innebär oftast att…", "Date parking usually means…", "وقوف التاريخ يعني غالباً أن…"],
    [
      ["Du inte får stå på den sida vars datum det är (udda/jämnt)", "Du får stå max ett dygn var som helst", "Bara boende får stå"],
      ["You may not stand on the side whose date it is (odd/even)", "You may stay 24 hours anywhere", "Only residents may park"],
      ["لا تقف في الجهة ذات تاريخ اليوم (فردي/زوجي)", "يجوز البقاء 24 ساعة في أي مكان", "السكان فقط يركنون"],
    ],
    ["Udda datum: lämna udda husnummer-sidan. Kolla alltid tilläggstavlan — tider varierar.", "Odd date: leave the odd-number side. Always check the plaque — hours vary.", "تاريخ فردي: اترك جهة الأرقام الفردية. راجع اللوحة دائماً — الأوقات تختلف."]
  ),
  Q(74, "parking", 1,
    ["På en gångbana får du parkera…", "On a pavement you may park…", "على رصيف المشاة يجوز الركن…"],
    [
      ["Om två hjul är kvar i körbanan", "Bara om det är särskilt tillåtet", "Alltid utanför rusning"],
      ["If two wheels stay in the carriageway", "Only if it is specifically allowed", "Always outside rush hour"],
      ["إن بقي عجلان في الطريق", "فقط إن سُمح بذلك خصيصاً", "دائماً خارج الذروة"],
    ],
    ["Gående har gångbanan. Parkera där bara om märken eller markering tillåter det.", "Pedestrians own the pavement. Park there only if signs or markings allow it.", "الرصيف للمشاة. اركن هناك فقط إن سمحت اللافتات أو التخطيط."]
  ),
  Q(75, "parking", 2,
    ["En blå skylt med rullstol betyder…", "A blue sign with a wheelchair means…", "لافتة زرقاء بكرسي متحرك تعني…"],
    [
      ["Laddplats för elbil", "Lastzon", "Parkering för rörelsehindrade med tillstånd"],
      ["An EV charging bay", "A loading zone", "Parking for disabled people with a permit"],
      ["موقف شحن كهربائي", "منطقة تحميل", "وقوف لذوي الإعاقة بتصريح"],
    ],
    ["Utan särskilt tillstånd får du inte stå där, ens en kort stund.", "Without a permit you may not stand there, even briefly.", "بدون تصريح لا تقف هناك ولو لوقت قصير."]
  ),
  Q(76, "parking", 0,
    ["Hur nära en busshållplats får du parkera om inget annat anges?", "How close to a bus stop may you park if nothing else is posted?", "كم تقترب من موقف حافلات إن لم يُذكر غير ذلك؟"],
    [
      ["Minst 20 meter från hållplatsskylten om det finns en sådan regel / håll avstånd så bussen kommer åt", "Precis bakom skylten", "5 meter"],
      ["At least a clear gap so the bus can reach the kerb — often 20 m from the sign where that rule applies", "Right behind the sign", "5 metres"],
      ["فراغ كافٍ لتصل الحافلة إلى الرصيف — غالباً 20 م من اللافتة حيث تسري القاعدة", "خلف اللافتة مباشرة", "5 أمتار"],
    ],
    ["Hållplats behöver svängrum. Parkera inte så att bussen inte kommer intill kanten.", "A stop needs swing room. Do not park so the bus cannot reach the kerb.", "المحطة تحتاج مجال دوران. لا تركن بحيث لا تصل الحافلة للرصيف."]
  ),
  Q(77, "parking", 1,
    ["I ett vänstersvängfält får du…", "In a left-turn lane you may…", "في مسار الانعطاف يساراً يجوز أن…"],
    [
      ["Parkera kort om du sitter i bilen", "Inte stanna annat än för att svänga när kön tillåter", "Lasta möbler"],
      ["Park briefly if you stay in the car", "Not stop except to turn when the queue allows", "Unload furniture"],
      ["تركن قليلاً إن بقيت في السيارة", "لا تتوقف إلا للانعطف عندما يسمح الصف", "تفرّغ أثاثاً"],
    ],
    ["Svängfält är till för att svänga, inte för att vänta på någon eller lasta.", "Turn lanes are for turning, not for waiting on someone or loading.", "مسارات الانعطاف للانعطف لا لانتظار أحد أو التحميل."]
  ),
  Q(78, "vehicle", 0,
    ["Halvljus ska i Sverige användas…", "In Sweden dipped beam must be used…", "في السويد يجب استخدام الضوء المنخفض…"],
    [
      ["När du kör, även dagtid", "Bara i mörker", "Bara i tunnel"],
      ["Whenever you drive, even in daytime", "Only in darkness", "Only in tunnels"],
      ["كلما قدت حتى نهاراً", "في الظلام فقط", "في الأنفاق فقط"],
    ],
    ["Sverige kräver varselljus eller halvljus dagtid. Halvljus i mörker och nedsatt sikt.", "Sweden requires DRLs or dipped beam by day. Dipped beam in darkness and poor visibility.", "السويد تفرض أضواء نهار أو منخفضاً نهاراً. المنخفض في الظلام وتدني الرؤية."]
  ),
  Q(79, "vehicle", 2,
    ["Oljelampan tänds under färd. Du ska…", "The oil lamp comes on while driving. You should…", "يضيء مصباح الزيت أثناء السير. يجب أن…"],
    [
      ["Köra till nästa verkstad i 90", "Ignorera den en kvart", "Stanna så snart det är säkert och stänga av motorn"],
      ["Drive to the next workshop at 90", "Ignore it for fifteen minutes", "Stop as soon as it is safe and switch the engine off"],
      ["تقود للورشة التالية بسرعة 90", "تتجاهله ربع ساعة", "تتوقف فور الأمان وتطفئ المحرك"],
    ],
    ["Oljetrycksvikt kan rasera motorn på sekunder. Stanna. Kontrollera oljan. Ring hjälp.", "Oil pressure loss can destroy an engine in seconds. Stop. Check oil. Call for help.", "فقدان ضغط الزيت يدمّر المحرك في ثوان. توقف. افحص الزيت. اطلب مساعدة."]
  ),
  Q(80, "vehicle", 1,
    ["Minsta mönsterdjup på sommardäck är…", "Minimum tread on summer tyres is…", "أدنى نقش لإطارات الصيف هو…"],
    [
      ["3 mm", "1,6 mm", "0,5 mm"],
      ["3 mm", "1.6 mm", "0.5 mm"],
      ["3 ملم", "1.6 ملم", "0.5 ملم"],
    ],
    ["Lagen säger 1,6 mm på sommaren. Greppet i vatten blir sämre långt tidigare.", "The law says 1.6 mm in summer. Wet grip fades long before that.", "القانون يقول 1.6 ملم صيفاً. التماسك في الماء يضعف قبل ذلك بكثير."]
  ),
  Q(81, "vehicle", 0,
    ["Laddningslampan (batteri) tänds. Det betyder oftast…", "The battery/charge lamp comes on. It usually means…", "يضيء مصباح البطارية/الشحن. يعني غالباً…"],
    [
      ["Generatorn laddar inte — elsystemet går på batteri", "Du har för mycket bensin", "Däcktrycket är högt"],
      ["The alternator is not charging — the system is running on the battery", "You have too much fuel", "Tyre pressure is high"],
      ["الدينامو لا يشحن — النظام يعمل على البطارية", "لديك وقود أكثر من اللازم", "ضغط الإطارات مرتفع"],
    ],
    ["Du kan snabbt bli utan el: ljus, servo, ABS. Kör till säker plats och sök fel.", "You can quickly lose electrics: lights, steering assist, ABS. Get somewhere safe and investigate.", "قد تفقد الكهرباء سريعاً: الأنوار والمقود المساعد وABS. اذهب لمكان آمن وافحص."]
  ),
  Q(82, "vehicle", 2,
    ["Innan körprovet görs en säkerhetskontroll. Ett exempel är att…", "Before the driving test there is a safety check. An example is…", "قبل اختبار القيادة هناك فحص سلامة. مثال…"],
    [
      ["Byta motorolja", "Polera lacken", "Visa att belysning, viskers och däck fungerar / kan kontrolleras"],
      ["Changing the engine oil", "Polishing the paint", "Showing that lights, wipers and tyres work / can be checked"],
      ["تغيير زيت المحرك", "تلميع الطلاء", "إظهار أن الأنوار والمساحات والإطارات تعمل / يمكن فحصها"],
    ],
    ["Du ska kunna kontrollera ljus, visker, spolare, däck, varningslampor och last.", "You should be able to check lights, wipers, washers, tyres, warning lamps and load.", "يجب أن تستطيع فحص الأنوار والمساحات والغاسلات والإطارات وأضواء التحذير والحمل."]
  ),
  Q(83, "vehicle", 1,
    ["Last ska…", "A load must…", "الحمولة يجب أن…"],
    [
      ["Ligga löst så den inte skaver", "Säkras så den inte kan förskjutas, falla av eller skymma sikt", "Alltid sitta på taket"],
      ["Sit loose so it does not chafe", "Be secured so it cannot shift, fall or block the view", "Always sit on the roof"],
      ["تبقى سائبة حتى لا تحتك", "تُثبّت حتى لا تنزاح أو تسقط أو تحجب الرؤية", "تكون دائماً على السقف"],
    ],
    ["Osäkrad last är farlig vid broms. Använd spännband. Märk utskjutande last.", "An unsecured load is dangerous under braking. Use straps. Mark overhanging loads.", "الحمولة غير المثبتة خطرة عند الكبح. استخدم أشرطة. علّم الحمل البارز."]
  ),
  Q(84, "vehicle", 0,
    ["Döda vinkeln täcks bäst genom att…", "The blind spot is best covered by…", "الزاوية العمياء تُغطى بأفضل شكل عبر…"],
    [
      ["Kombinera speglar med en axelblick", "Bara lita på backspegeln", "Titta i telefonen"],
      ["Combining mirrors with a shoulder check", "Trusting the rear-view mirror only", "Looking at your phone"],
      ["الجمع بين المرايا ونظرة الكتف", "الثقة بمرآة الوسط فقط", "النظر في الهاتف"],
    ],
    ["Speglar räcker inte. En kort axelblick före filbyte.", "Mirrors are not enough. A short shoulder check before a lane change.", "المرايا لا تكفي. نظرة كتف قصيرة قبل تغيير المسار."]
  ),
  Q(85, "vehicle", 2,
    ["Om motorn kokar ska du…", "If the engine overheats you should…", "إذا سخنت المحرك أكثر من اللازم يجب أن…"],
    [
      ["Öppna locket direkt mitt i ångan", "Gasar för att kyla med fartvind", "Stanna, låta svalna, inte öppna locket rykande hett"],
      ["Open the cap immediately in the steam", "Accelerate to cool with airflow", "Stop, let it cool, do not open a scalding cap"],
      ["تفتح الغطاء فوراً وسط البخار", "تسرع للتبريد بالهواء", "تتوقف وتدعه يبرد ولا تفتح غطاءً حارقاً"],
    ],
    ["Hett kylsystem står under tryck. Öppnar du locket kan du brännskadas.", "A hot cooling system is under pressure. Opening the cap can scald you.", "نظام التبريد الحار تحت ضغط. فتح الغطاء قد يحرقك."]
  ),
  Q(86, "environment", 1,
    ["Sparsam körning (eko) handlar främst om att…", "Eco-driving is mainly about…", "القيادة الاقتصادية تتعلق أساساً بـ…"],
    [
      ["Köra så långsamt att kön byggs bakom", "Planera, motorbromsa och undvika onödiga stopp", "Varva motorn hårt i ettan"],
      ["Driving so slowly that a queue builds behind", "Planning, engine-braking and avoiding needless stops", "Revving hard in first gear"],
      ["القيادة ببطء يبني صفاً خلفك", "التخطيط والكبح بالمحرك وتجنب التوقف بلا داع", "رفع الدوران بقوة في الأولى"],
    ],
    ["Titta långt fram, släpp gasen tidigt, håll jämn fart, rätt växel. Det sänker både bränsle och risk.", "Look far ahead, lift early, hold a steady speed, the right gear. That cuts fuel and risk.", "انظر بعيداً، ارفع مبكراً، حافظ على سرعة ثابتة والتروس الصحيحة. ذلك يخفض الوقود والخطر."]
  ),
  Q(87, "environment", 0,
    ["Onödig tomgång…", "Needless idling…", "التشغيل في المكان بلا داع…"],
    [
      ["Ska undvikas — slå av motorn vid längre stopp", "Är bäst för katalysatorn i timmar", "Krävs på vintern alltid"],
      ["Should be avoided — switch off at longer stops", "Is best for the catalyst for hours", "Is always required in winter"],
      ["يجب تجنبه — أطفئ المحرك عند التوقف الطويل", "أفضل للمحوّل لساعات", "مطلوب دائماً شتاءً"],
    ],
    ["Många kommuner förbjuder tomgång mer än en minut. Det slösar bränsle och ger avgaser.", "Many municipalities ban idling beyond a minute. It wastes fuel and makes exhaust.", "كثير من البلديات تمنع تشغيل المحرك في المكان أكثر من دقيقة. يضيع وقوداً وينتج عوادم."]
  ),
  Q(88, "environment", 2,
    ["Hög fart påverkar bränslet ungefär så att…", "High speed affects fuel roughly so that…", "السرعة العالية تؤثّر في الوقود تقريباً بحيث…"],
    [
      ["110 och 90 drar lika", "Det spelar ingen roll över 70", "Luftmotståndet ökar kraftigt — 110 drar mer än 90"],
      ["110 and 90 use the same", "It does not matter above 70", "Air drag rises sharply — 110 uses more than 90"],
      ["110 و90 يستهلكان سواء", "لا يهم فوق 70", "مقاومة الهواء ترتفع بحدة — 110 تستهلك أكثر من 90"],
    ],
    ["Luftmotståndet växer ungefär med kvadraten. Högre fart = mer bränsle per mil.", "Air drag grows roughly with the square. Higher speed = more fuel per 10 km.", "مقاومة الهواء تنمو تقريباً مع المربع. سرعة أعلى = وقود أكثر لكل 10 كم."]
  ),
  Q(89, "environment", 1,
    ["Rätt däcktryck…", "Correct tyre pressure…", "ضغط الإطارات الصحيح…"],
    [
      ["Spelar bara roll för komfort", "Minskar rullmotstånd, slitage och bränsle", "Ska vara så lågt som möjligt"],
      ["Only matters for comfort", "Cuts rolling resistance, wear and fuel", "Should be as low as possible"],
      ["يهم للراحة فقط", "يخفض مقاومة التدحرج والتآكل والوقود", "يجب أن يكون أقل ما يمكن"],
    ],
    ["Kolla trycket kalla däck. För lågt sliter, drar mer och kan spricka.", "Check pressure cold. Too low wears, uses more fuel and can fail.", "افحص الضغط بارداً. المنخفض يتآكل ويستهلك أكثر وقد ينفجر."]
  ),
  Q(90, "environment", 0,
    ["Kortare körningar på kall motor…", "Short trips on a cold engine…", "الرحلات القصيرة بمحرك بارد…"],
    [
      ["Ger hög förbrukning och mer slitage per mil", "Är bäst för motorn", "Kräver alltid full gas"],
      ["Cause high consumption and more wear per 10 km", "Are best for the engine", "Always need full throttle"],
      ["تسبب استهلاكاً عالياً وتآكلاً أكثر لكل 10 كم", "أفضل للمحرك", "تحتاج دائماً دواسة كاملة"],
    ],
    ["En kall motor blandar rikt och smörjer sämre. Samla ärenden. Motorvärmare vintertid.", "A cold engine runs rich and lubricates worse. Bundle errands. Use an engine heater in winter.", "المحرك البارد يعمل خليطاً غنياً ويُزيّت بأسوأ. اجمع المشاوير. استخدم سخان المحرك شتاءً."]
  ),
  Q(91, "environment", 2,
    ["Katalysatorn fungerar bäst när…", "The catalytic converter works best when…", "المحوّل الحفاز يعمل بأفضل شكل عندما…"],
    [
      ["Motorn är iskall", "Du kör på tomgång en timme", "Motorn är varm och blandningen är rätt"],
      ["The engine is ice cold", "You idle for an hour", "The engine is warm and the mixture is correct"],
      ["المحرك بارد جداً", "تعمل بالمحرك دائراً ساعة", "المحرك دافئ والخليط صحيح"],
    ],
    ["En kall katalysator renar dåligt. Undvik korta starter och onödig tomgång.", "A cold catalyst cleans poorly. Avoid short starts and needless idling.", "المحوّل البارد ينظّف بشكل سيئ. تجنب التشغيل القصير والانتظار والمحرك دائر بلا داع."]
  ),
  Q(92, "safety", 0,
    ["Barn som är kortare än 135 cm ska…", "Children shorter than 135 cm must…", "الأطفال الأقصر من 135 سم يجب أن…"],
    [
      ["Använda en godkänd bilbarnstol / bälteskudde anpassad efter längd", "Bara sitta i framsätet", "Slippa bälte under 10 år"],
      ["Use an approved child seat / booster suited to their height", "Only sit in the front", "Skip the belt under age 10"],
      ["يستخدموا مقعد طفل / وسادة حزام معتمدة تناسب طولهم", "يجلسوا في الأمام فقط", "يستغنوا عن الحزام تحت سن 10"],
    ],
    ["Under 135 cm krävs skyddsanordning. Airbag fram ska av och stolen rättvänd enligt ålder.", "Under 135 cm a restraint is required. Front airbag off and the seat oriented as required for age.", "تحت 135 سم يلزم مقيد. أوقف وسادة الهواء الأمامية ووجّه المقعد حسب العمر."]
  ),
  Q(93, "safety", 1,
    ["Bälte är obligatoriskt…", "A seatbelt is mandatory…", "الحزام إلزامي…"],
    [
      ["Bara i framsätet", "För alla i bilen där det finns bälte", "Bara utanför tätort"],
      ["Only in the front seats", "For everyone in the car where a belt exists", "Only outside town"],
      ["في المقاعد الأمامية فقط", "لكل من في السيارة حيث يوجد حزام", "خارج البلدة فقط"],
    ],
    ["Föraren ansvarar för att passagerare under 15 använder skydd. Alla andra ansvarar för sig.", "The driver is responsible for passengers under 15 using protection. Everyone else is responsible for themselves.", "السائق مسؤول عن من هم دون 15. البقية مسؤولون عن أنفسهم."]
  ),
  Q(94, "safety", 2,
    ["En 4-åring, 110 cm, utan bilbarnstol. Får du köra?", "A 4-year-old, 110 cm, no child seat. May you drive?", "طفل 4 سنوات، 110 سم، بلا مقعد. هل يجوز أن تقود؟"],
    [
      ["Ja, i baksätet med bälte", "Ja, kortare än 5 minuter", "Nej, barnet är under 135 cm"],
      ["Yes, in the back with a belt", "Yes, for less than 5 minutes", "No — the child is under 135 cm"],
      ["نعم في الخلف مع حزام", "نعم لأقل من 5 دقائق", "لا — الطفل تحت 135 سم"],
    ],
    ["Undantag finns i taxi i vissa fall, inte i din vanliga bil. Använd rätt stol.", "Taxi has limited exceptions, not your ordinary car. Use the right seat.", "للتاكسي استثناءات محدودة لا لسيارتك العادية. استخدم المقعد الصحيح."]
  ),
  Q(95, "safety", 0,
    ["Du måste ha körkortstillstånd innan du…", "You must have a learner’s permit before you…", "يجب أن تملك تصريح التعلّم قبل أن…"],
    [
      ["Övningskör överhuvudtaget", "Går Risk 1", "Köper teoriboken"],
      ["Practise driving at all", "Attend Risk 1", "Buy the theory book"],
      ["تتدرّب على القيادة أصلاً", "تحضر ريسك 1", "تشتري كتاب النظرية"],
    ],
    ["Inget övningskörning utan giltigt tillstånd. Ha det med i bilen tillsammans med ID.", "No practice without a valid permit. Keep it in the car together with ID.", "لا تمرين دون تصريح ساري. احتفظ به في السيارة مع الهوية."]
  ),
  Q(96, "safety", 1,
    ["För att handleda privat måste handledaren bland annat…", "To supervise privately the supervisor must among other things…", "للإشراف الخاص يجب على المشرف من بين أمور…"],
    [
      ["Vara 18 år", "Vara minst 24, ha haft B i 5 år och gått introduktionsutbildning", "Bara ha giltigt körkort"],
      ["Be 18", "Be at least 24, have held B for 5 years and taken the intro course", "Only hold a valid licence"],
      ["يكون 18 سنة", "يكون 24 على الأقل وحمل B لـ 5 سنوات وحضر الدورة التعريفية", "يحمل رخصة سارية فقط"],
    ],
    ["Handledartillstånd krävs. Eleven måste också ha gått introduktionen.", "A supervisor permit is required. The student must also have taken the introduction.", "يلزم تصريح مشرف. يجب أن يكون الطالب قد حضر التعريف أيضاً."]
  ),
  Q(97, "safety", 2,
    ["Kunskapsprovet måste vara godkänt…", "The theory test must be passed…", "يجب نجاح اختبار النظرية…"],
    [
      ["Efter körprovet", "Inom ett år efter körprovet", "Innan körprovet, och körprovet ska ske inom fyra månader"],
      ["After the driving test", "Within a year after the driving test", "Before the driving test, which must follow within four months"],
      ["بعد اختبار القيادة", "خلال سنة بعد اختبار القيادة", "قبل اختبار القيادة الذي يجب أن يتم خلال أربعة أشهر"],
    ],
    ["Ordningen är fast: teori först, körprov inom fyra månader, annars ny teori.", "The order is fixed: theory first, driving test within four months, otherwise retake theory.", "الترتيب ثابت: النظرية أولاً ثم القيادة خلال أربعة أشهر وإلا أعد النظرية."]
  ),
  Q(98, "safety", 0,
    ["Hur många rätt krävs på kunskapsprovet B?", "How many correct answers are required on the B theory test?", "كم إجابة صحيحة مطلوبة في اختبار نظرية B؟"],
    [
      ["52 av 65 räknade frågor (70 totalt varav 5 test)", "50 av 70", "40 av 50"],
      ["52 of 65 scored questions (70 total, 5 of them trials)", "50 of 70", "40 of 50"],
      ["52 من 65 محتسبة (70 ككل منها 5 تجريبية)", "50 من 70", "40 من 50"],
    ],
    ["70 frågor, 50 minuter, fem testfrågor. Godkänt = 52/65.", "70 questions, 50 minutes, five trial items. Pass = 52/65.", "70 سؤالاً، 50 دقيقة، خمسة تجريبية. النجاح = 52/65."]
  ),
  Q(99, "safety", 1,
    ["Risk 1 och Risk 2 är…", "Risk 1 and Risk 2 are…", "ريسك 1 وريسك 2 هما…"],
    [
      ["Frivilliga tillägg", "Obligatoriska innan körprovet", "Bara för yrkesförare"],
      ["Optional extras", "Mandatory before the driving test", "Only for professional drivers"],
      ["إضافات اختيارية", "إلزاميان قبل اختبار القيادة", "للسائقين المهنيين فقط"],
    ],
    ["Risk 1 (alkohol, trötthet, attityd) och Risk 2 (halka) måste vara gjorda före uppkörningen.", "Risk 1 (alcohol, fatigue, attitude) and Risk 2 (ice) must be done before the driving test.", "ريسك 1 (كحول وتعب وموقف) وريسك 2 (جليد) يجب إنجازهما قبل اختبار القيادة."]
  ),
  Q(100, "safety", 2,
    ["Du närmar dig en olycka. Det viktigaste först är att…", "You approach a crash. The first priority is to…", "تقترب من حادث. الأولوية الأولى هي…"],
    [
      ["Filma för försäkringen", "Flytta skadade direkt oavsett nacke", "Varna, säkra platsen, larma 112, sedan hjälpa"],
      ["Film it for insurance", "Move the injured immediately regardless of the neck", "Warn, secure the scene, call 112, then help"],
      ["تصوّره للتأمين", "تحرّك المصابين فوراً بغض النظر عن الرقبة", "تحذّر وتؤمّن المكان وتتصل بـ 112 ثم تساعد"],
    ],
    ["Varningstriangel, varningsljus, väst. Ring 112. Flytta bara om det brinner eller exploderar.", "Warning triangle, hazards, vest. Call 112. Move people only if there is fire or explosion risk.", "مثلث تحذير وأضواء وسترة. اتصل بـ 112. حرّك الناس فقط إن وُجد حريق أو خطر انفجار."]
  ),
];
