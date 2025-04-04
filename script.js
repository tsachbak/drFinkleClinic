console.log("JS is working");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileLinks = document.querySelectorAll(".mobile-link");

//Toggle the menu when burger is clicked
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

//Close the menu when clicking a link
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// Show the current slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.opacity = i === index ? "1" : "0";
  });
}

// Show the next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Show the previous slide
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Event listeners for navigation buttons
document.getElementById("nextBtn").addEventListener("click", nextSlide);
document.getElementById("prevBtn").addEventListener("click", prevSlide);

// Auto-play the slideshow every 5 seconds
setInterval(nextSlide, 5000);

/*
// Select the "About" text container
const aboutText = document.querySelector(".about-text");

// Create an Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add the "visible" class when the element is in the viewport
        aboutText.classList.add("visible");
      } else {
        // Remove the "visible" class when the element is out of the viewport
        aboutText.classList.remove("visible");
      }
    });
  },
  {
    threshold: 0.5, // Trigger when 50% of the element is visible
  }
);

// Observe the "About" text
observer.observe(aboutText);
*/

// Add event listeners to service buttons
function handleServiceClick(serviceName) {
  alert(`You clicked on the ${serviceName} service!`);
}

// Service descriptions
const serviceDescriptions = {
  botox: {
    title: "בוטוקס",
    description: `
    <h3 class="text-xl font-semibold mb-4">מהו בוטוקס?</h3>
    <p class="mb-4">
      בוטוקס הוא שם מסחרי מוכר לחומר פעיל בשם בוטולינום טוקסין. זהו חלבון טבעי ומטוהר המופק מחיידק הקלוסטרידיום בוטולינום. בשימוש רפואי ואסתטי מבוקר ובמינונים קטנים מאוד, בוטוקס הוא טיפול בטוח ויעיל להפחתת קמטי הבעה ולמטרות רפואיות נוספות.
    </p>
    <h3 class="text-xl font-semibold mb-4">כיצד בוטוקס פועל?</h3>
    <p class="mb-4">
      בוטוקס פועל על ידי חסימה זמנית של העברת אותות עצביים לשרירים שאליהם הוא מוזרק. כתוצאה מכך, השרירים מתרפים באופן זמני ואינם מתכווצים בעוצמה. כאשר השרירים שאחראים ליצירת קמטי הבעה בפנים רפויים, הקמטים הקיימים מטשטשים והיווצרות קמטים חדשים מופחתת.
    </p>
    <h3 class="text-xl font-semibold mb-4">לאילו אזורים בפנים מתאים טיפול בבוטוקס?</h3>
    <p class="mb-4">
      בוטוקס יעיל במיוחד לטיפול בקמטי הבעה דינמיים, שהם קמטים הנוצרים כתוצאה מתנועות שרירים חוזרות, כגון:
    </p>
    <ul class="list-disc list-inside mb-4">
      <li>קמטי מצח אופקיים: הקמטים המופיעים לרוחב המצח בעת הרמת גבות.</li>
      <li>קמטי "זעף" בין הגבות (קמטי 11): הקמטים האנכיים המופיעים בין הגבות בעת כיווץ המצח.</li>
      <li>קמטי "רגלי עורב" סביב העיניים: הקמטים המופיעים בזוויות החיצוניות של העיניים בעת חיוך או מצמוץ.</li>
    </ul>
    <p class="mb-4">
      בנוסף, ניתן להשתמש בבוטוקס גם לטיפול באזורים נוספים, כגון:
    </p>
    <ul class="list-disc list-inside">
      <li>הרמת קצה הגבות: על ידי הרפיית שרירים מסוימים סביב העיניים.</li>
      <li>החלקת קמטוטים קלים באף ("באני ליינס").</li>
      <li>הפחתת חשיפת חניכיים מוגזמת בחיוך ("גאמי סמייל").</li>
      <li>עיצוב קו הלסת והפחתת מראה של שרירי לעיסה מוגדלים (טיפול "מאסאטר").</li>
      <li>הפחתת קמטים קלים בסנטר ("סנטר מקומט").</li>
      <li>הרפיית שרירי הצוואר ("פלטיזמה בנדס").</li>
    </ul>
  `,
    image: "pictures/servicies/botox.jpeg",
  },
  skinBooster: {
    title: "סקין בוסטר ומרקם עור",
    description:
      "עיצוב שפתיים מעניק מראה טבעי ומלא יותר, תוך התאמה אישית לצרכי המטופל.",
    image: "pictures/servicies/skinBooster.jpeg",
  },
  hyaluronicAcid: {
    title: "חומצה היאלורונית",
    description: `
    <h3 class="text-xl font-semibold mb-4">מהי חומצה היאלורונית?</h3>
    <p class="mb-4">
      חומצה היאלורונית היא חומר טבעי המצוי בגוף שלנו, היא בעלת תפקיד חשוב בשמירה על לחות העור, נפחו וגמישותו. למעשה, היא כמו "ספוג מים" קטן – היא מסוגלת לספוח כמות גדולה מאוד של מים, מה שמעניק לעור מראה מלא, חלק וצעיר.
    </p>
    <p class="mb-4">
      ככל שאנו מתבגרים, כמות החומצה ההיאלורונית בעור שלנו פוחתת באופן טבעי. זה מוביל לאובדן נפח, הופעת קמטים וקמטוטים, וירידה בגמישות העור.
    </p>
    <h3 class="text-xl font-semibold mb-4">כיצד משתמשים בחומצה היאלורונית בפיסול פנים?</h3>
    <p class="mb-4">מספר יתרונות:</p>
    <ul class="list-disc list-inside mb-4">
      <li>הוספת נפח: החומצה ההיאלורונית ממלאת אזורים שאיבדו נפח עקב גיל או מבנה טבעי, כמו הלחיים, קו הלסת, הרקות והשפתיים.</li>
      <li>עיצוב ופיסול: ניתן להשתמש בה כדי לעצב מחדש קווי מתאר של הפנים, להדגיש עצמות לחיים, ליצור קו לסת מוגדר יותר, או לשפר את סימטריית הפנים.</li>
      <li>מילוי קמטים וקמטוטים: החומצה ההיאלורונית ממלאת קמטים עמוקים כמו קמטי הבעה בין האף לפה (נזולביאל פולדס), קמטים סביב הפה (מריונט ליין) וקמטוטים עדינים יותר.</li>
      <li>שיפור מראה השפתיים: ניתן להשתמש כדי להוסיף נפח לשפתיים דקות, לעצב את קווי המתאר שלהן, להדגיש את קשת קופידון ולשפר את הלחות שלהן.</li>
      <li>שיפור מרקם העור: החומצה ההיאלורונית סופחת מים ומעניקה לעור מראה יותר לח, רענן וזוהר.</li>
    </ul>
  `,
    image: "pictures/servicies/hyaluronicAcid.jpeg",
  },
  prp: {
    title: "Prp",
    description: `
    <h3 class="text-xl font-semibold mb-4">מהו טיפול PRP?</h3>
    <p class="mb-4">
      טיפול PRP (Platelet-Rich Plasma) לשיער הוא הליך רפואי חדשני ומתקדם, המבוסס על שימוש בפלזמה עשירה בטסיות דם המופקת מדמו של המטופל עצמו. טסיות הדם מכילות גורמי גדילה וחלבונים חיוניים, המעודדים צמיחת שיער, מחזקים את זקיקי השיער ומאטים את תהליך נשירת השיער.
    </p>
    <h3 class="text-xl font-semibold mb-4">כיצד מתבצע הטיפול?</h3>
    <ul class="list-disc list-inside mb-4">
      <li>לקיחת דם: נלקחת כמות קטנה של דם מהמטופל, בדומה לבדיקת דם רגילה.</li>
      <li>הפרדת הפלזמה: הדם עובר תהליך צנטריפוגה, המפריד את הפלזמה העשירה בטסיות דם משאר מרכיבי הדם.</li>
      <li>הזרקה לקרקפת: הפלזמה העשירה בטסיות דם מוזרקת באמצעות מחטים עדינות לאזורי הקרקפת הדלילים בשיער.</li>
    </ul>
    <h3 class="text-xl font-semibold mb-4">יתרונות הטיפול:</h3>
    <ul class="list-disc list-inside mb-4">
      <li>טבעי ובטוח: השימוש בפלזמה עצמית מפחית את הסיכון לתגובות אלרגיות או תופעות לוואי.</li>
      <li>מעודד צמיחת שיער: גורמי הגדילה בפלזמה ממריצים את זקיקי השיער ומעודדים צמיחת שיער חדש.</li>
      <li>מחזק את השיער הקיים: הטיפול מחזק את שורשי השיער הקיים, מפחית נשירה ומעניק לשיער מראה בריא ומלא יותר.</li>
      <li>תוצאות ארוכות טווח: תוצאות הטיפול נשמרות לאורך זמן, עם טיפולי תחזוקה תקופתיים.</li>
      <li>מתאים לגברים ולנשים: הטיפול יעיל עבור גברים ונשים הסובלים מנשירת שיער או התקרחות.</li>
    </ul>
    <h3 class="text-xl font-semibold mb-4">למי מתאים הטיפול?</h3>
    <ul class="list-disc list-inside mb-4">
      <li>אנשים הסובלים מנשירת שיער או התקרחות.</li>
      <li>אנשים המעוניינים לשפר את צפיפות השיער ואיכותו.</li>
      <li>אנשים המחפשים טיפול טבעי ובטוח לשיער.</li>
    </ul>
    <h3 class="text-xl font-semibold mb-4">תוצאות הטיפול:</h3>
    <p class="mb-4">
      ניתן לראות שיפור במצב השיער כבר לאחר מספר שבועות מהטיפול הראשון. לתוצאות מיטביות, מומלץ לעבור סדרת טיפולים בהתאם להמלצת הרופא.
    </p>
  `,
    image: "pictures/servicies/prp.jpeg",
  },
};

// Handle service click
function handleServiceClick(serviceKey) {
  const selectedService = serviceDescriptions[serviceKey];
  const serviceSection = document.getElementById("selected-service");

  // Update the content of the selected service section
  serviceSection.innerHTML = `
    <div class="p-6 max-w-7xl mx-auto bg-gradient-to-r from-pink-500 via-pink-400 to-pink-300 rounded-md shadow my-10">
      <h2 class="text-3xl font-bold mb-6 text-center text-white">${selectedService.title}</h2>
      <div class="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6 rtl:space-x-reverse">
        <div class="text-white text-lg leading-relaxed md:w-2/3">
          ${selectedService.description}
        </div>
        <img
          src="${selectedService.image}"
          alt="${selectedService.title}"
          class="w-full md:w-1/3 h-[500px] object-cover rounded-md shadow-md"
        />
      </div>
    </div>
  `;

  // Show the section
  serviceSection.classList.remove("hidden");

  // Scroll to the service section
  serviceSection.scrollIntoView({ behavior: "smooth" });
}
