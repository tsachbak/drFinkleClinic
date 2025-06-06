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

const slides = document.querySelectorAll(".about_slide");
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

// Function to show an image in full screen
function showImageModal(imageSrc) {
  // Create a modal container
  const modal = document.createElement("div");
  modal.id = "imageModal";
  modal.className =
    "fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50";

  // Create the image element
  const img = document.createElement("img");
  img.src = imageSrc;
  img.alt = "Full-screen image";
  img.className = "max-w-full max-h-full rounded-md shadow-lg";

  // Create a close button
  const closeButton = document.createElement("button");
  closeButton.innerHTML = "&times;";
  closeButton.className =
    "absolute top-4 right-4 text-white text-4xl font-bold focus:outline-none";
  closeButton.addEventListener("click", () => {
    modal.remove(); // Remove the modal when the close button is clicked
  });

  // Add the image and close button to the modal
  modal.appendChild(img);
  modal.appendChild(closeButton);

  // Add a click event to close the modal when clicking outside the image
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });

  // Append the modal to the body
  document.body.appendChild(modal);
}

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
    description: `
    <h3 class="text-xl font-semibold mb-4">מהו סקין בוסטר?</h3>
    <p class="mb-4">
      סקין בוסטר הוא טיפול אסתטי חדשני המיועד לשיפור מרקם העור, להענקת לחות עמוקה ולחידוש מראהו. הטיפול מתבצע באמצעות הזרקת חומצה היאלורונית מיוחדת, בעלת מרקם דליל, לשכבות העור העליונות.
    </p>
    <h3 class="text-xl font-semibold mb-4">איך זה עובד?</h3>
    <ul class="list-disc list-inside mb-4">
      <li>לחות אינטנסיבית: החומצה ההיאלורונית סופחת מים ומעניקה לעור לחות עמוקה, המפחיתה יובש וקמטוטים.</li>
      <li>שיפור מרקם העור: הטיפול מעודד ייצור קולגן ואלסטין, חלבונים האחראים על גמישות וחוזק העור, ובכך משפר את מרקם העור ומעניק לו מראה חלק ואחיד יותר.</li>
      <li>מראה רענן וזוהר: סקין בוסטר מחזיר לעור את החיוניות והברק הטבעיים, ומעניק לו מראה צעיר ורענן יותר.</li>
    </ul>
    <h3 class="text-xl font-semibold mb-4">למי מתאים הטיפול?</h3>
    <p class="mb-4">
      הטיפול מתאים לכל מי שמעוניין לשפר את מרקם העור, להעניק לו לחות ולחדש את מראהו. הוא מומלץ במיוחד לאנשים הסובלים מעור יבש, עייף או בעל קמטוטים.
    </p>
    <h3 class="text-xl font-semibold mb-4">תוצאות</h3>
    <p class="mb-4">
      תוצאות הטיפול נראות לעין תוך מספר ימים, והן כוללות עור חלק, רך, זוהר ובעל מרקם אחיד יותר.
    </p>
  `,
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
    title: "PRP",
    description: `
    <h3 class="text-xl font-semibold mb-4">מהו טיפול PRP?</h3>
    <p class="mb-4">
      טיפול PRP (Platelet-Rich Plasma) לשיער הוא הליך רפואי חדשני ומתקדם, המבוסס על שימוש בפלזמה עשירה בטסיות דם המופקת מדמו של המטופל עצמו. טסיות הדם מכילות גורמי גדילה וחלבונים חיוניים, המעודדים צמיחת שיער, מחזקים את זקיקי השיער ומאטים את תהליך נשירת השיער.
    </p>
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
    <div class="w-full">
      <div class="max-w-7xl mx-auto bg-[#fef8f3] my-10 px-4 md:px-10 py-6 rounded-md shadow">
        <h2 class="text-3xl font-bold mb-6 text-center text-black">${selectedService.title}</h2>
        <div class="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6 rtl:space-x-reverse">
          <div class="text-black text-base leading-relaxed md:w-2/3">
            ${selectedService.description}
          </div>
          <img
            src="${selectedService.image}"
            alt="${selectedService.title}"
            class="w-full md:w-1/3 h-[500px] object-cover rounded-md shadow-md"
          />
        </div>
      </div>
      </div>
  `;

  // Show the section
  serviceSection.classList.remove("hidden");

  // Scroll to the service section
  serviceSection.scrollIntoView({ behavior: "smooth" });

  // Show the Before-After section
  showBeforeAfterSection(serviceKey);
}

// Carousel functionality for recommendations
const recommendationsList = document.getElementById("recommendationsList");
const prevArrow = document.getElementById("prevArrow");
const nextArrow = document.getElementById("nextArrow");

let currentIndex = 0; // Track the current index
let itemsToShow = 3; // Default number of items visible at a time
let totalItems = recommendationsList.children.length;

// Function to dynamically set itemsToShow based on screen size
function updateItemsToShow() {
  if (window.innerWidth <= 768) {
    itemsToShow = 1; // Show 1 item in mobile view
  } else {
    itemsToShow = 3; // Show 3 items in desktop view
  }
}

// Function to update the carousel position
function updateCarousel() {
  const recommendationsList = document.getElementById("recommendationsList");
  const children = recommendationsList?.children;

  // 💥 Fix: Skip if nothing loaded yet
  if (!children || children.length === 0) return;

  const itemWidth = children[0].offsetWidth;
  recommendationsList.style.transform = `translateX(-${
    currentIndex * itemWidth
  }px)`;
}

// Event listener for the next arrow
nextArrow.addEventListener("click", () => {
  if (currentIndex < totalItems - itemsToShow) {
    currentIndex++;
    updateCarousel();
  }
});

// Event listener for the previous arrow
prevArrow.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

// Initialize the carousel
window.addEventListener("load", () => {
  updateItemsToShow(); // Set the correct number of items to show
  updateCarousel(); // Ensure the carousel starts at the correct position
});

// Recalculate itemsToShow and update the carousel on window resize
window.addEventListener("resize", () => {
  updateItemsToShow();
  updateCarousel();
});

const beforeAfterData = {
  botox: [],
  skinBooster: [],
  hyaluronicAcid: [],
  prp: [],
};

async function loadBeforeAfterImages() {
  try {
    //const response = await fetch("https://localhost:7171/BeforeAfter");
    const response = await fetch(
      "https://drfikiserver.onrender.com/BeforeAfter"
    );
    const data = await response.json();

    const groupData = {
      botox: [],
      skinBooster: [],
      hyaluronicAcid: [],
      prp: [],
    };

    data.forEach((item) => {
      const treatment = item.treatment?.toLowerCase();
      if (treatment == "botox") {
        groupData.botox.push(`data:image/jpeg;base64,${item.base64Image}`);
      }
      if (treatment == "skin booster") {
        groupData.skinBooster.push(
          `data:image/jpeg;base64,${item.base64Image}`
        );
      }
      if (treatment == "hyaluronic acid") {
        groupData.hyaluronicAcid.push(
          `data:image/jpeg;base64,${item.base64Image}`
        );
      }
      if (treatment == "prp") {
        groupData.prp.push(`data:image/jpeg;base64,${item.base64Image}`);
      }
    });

    Object.assign(beforeAfterData, groupData);
  } catch (error) {
    console.error("Error loading before-after images:", error);
  }
}

let currentBeforeAfterIndex = 0;

// Function to show the Before-After section
function showBeforeAfterSection(serviceKey) {
  const beforeAfterSection = document.getElementById("before-after");
  const slideshowContainer = document.getElementById("beforeAfterSlideshow");

  // Clear existing images
  slideshowContainer.innerHTML = "";

  // Get the before-after images for the selected service
  const images = beforeAfterData[serviceKey];
  if (!images) return;

  // Add images to the slideshow
  images.forEach((imageSrc, index) => {
    const img = document.createElement("img");
    img.src = imageSrc;
    img.alt = `Before-After ${index + 1}`;
    img.className = `pl-5 pr-5 pb-5 pt-5 bg-[#fef8f3] slide ${
      index === 0 ? "active" : ""
    }`;

    img.addEventListener("click", function () {
      showImageModal(this.src);
    });
    slideshowContainer.appendChild(img);
  });

  // Show the section
  beforeAfterSection.classList.remove("hidden");

  // Reset the slideshow index
  currentBeforeAfterIndex = 0;
  updateBeforeAfterSlideshow();
}

// Function to update the Before-After slideshow
function updateBeforeAfterSlideshow() {
  const slides = document.querySelectorAll("#beforeAfterSlideshow .slide");
  slides.forEach((slide, index) => {
    // Toggle the active class for the current slide
    slide.classList.toggle("active", index === currentBeforeAfterIndex);
  });
}

// Event listeners for Before-After navigation buttons
document.getElementById("beforeAfterNextBtn").addEventListener("click", () => {
  const slides = document.querySelectorAll("#beforeAfterSlideshow .slide");
  currentBeforeAfterIndex = (currentBeforeAfterIndex + 1) % slides.length;
  updateBeforeAfterSlideshow();
});

document.getElementById("beforeAfterPrevBtn").addEventListener("click", () => {
  const slides = document.querySelectorAll("#beforeAfterSlideshow .slide");
  currentBeforeAfterIndex =
    (currentBeforeAfterIndex - 1 + slides.length) % slides.length;
  updateBeforeAfterSlideshow();
});

const spinnerModal = document.getElementById("spinnerModal");

document.getElementById("submitBtn").addEventListener("click", function () {
  // Get form values
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const treatment = document.getElementById("treatment").value;
  const email = document.getElementById("email").value;

  // Validate form fields
  if (!firstName || !lastName || !phoneNumber || !treatment || !email) {
    alert("אנא מלאו את כל השדות.");
    return;
  }

  if (!email.includes("@")) {
    alert("כתובת אימייל אינה תקינה");
    return;
  }

  if (!isValidIsraeliPhoneNumber(phoneNumber)) {
    alert("מספר טלפון אינו תקין. אנא הקלידו מספר טלפון ישראלי תקין.");
    return;
  }

  // Show spinner modal
  spinnerModal.classList.remove("hidden");

  // Prepare data to send
  const formData = {
    firstName,
    lastName,
    phoneNumber,
    treatment,
    email,
  };

  // Send data to the server
  //const url = "https://localhost:7171/Users/submit";
  const url = "https://drfikiserver.onrender.com/Users/submit";
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      spinnerModal.classList.add("hidden");
      if (response.ok) {
        alert("הפרטים נשלחו בהצלחה! נחזור אליכם בהקדם.");
        document.getElementById("contactForm").reset(); // Clear the form
      } else {
        alert("אירעה שגיאה. נסו שוב מאוחר יותר.");
      }
    })
    .catch((error) => {
      spinnerModal.classList.add("hidden");
      console.error("Error:", error);
      alert("אירעה שגיאה. נסו שוב מאוחר יותר.");
    });
});

function isValidIsraeliPhoneNumber(phoneNumber) {
  const regex = /^(?:\+972|0)([23489]|5[0-9]|7[0-9]|6[0-9])\d{7}$/;
  return regex.test(phoneNumber);
}

async function loadRecommendations() {
  const recommendationsList = document.getElementById("recommendationsList");

  const staticImages = [
    "pictures/recommendations/reco_1.jpeg",
    "pictures/recommendations/reco_2.jpeg",
    "pictures/recommendations/reco_3.jpeg",
  ];

  recommendationsList.innerHTML = ""; // Clear existing images

  staticImages.forEach((imageSrc, index) => {
    const li = document.createElement("li");
    li.className = "flex-shrink-0 w-1/3 px-2";

    const img = document.createElement("img");
    img.src = imageSrc;
    img.alt = `Recommendation ${index + 1}`;
    img.className =
      "w-full h-[300px] object-contain rounded-md shadow-md cursor-pointer";
    img.onclick = () => showImageModal(img.src);

    li.appendChild(img);
    recommendationsList.appendChild(li);
  });

  currentIndex = 0; // Reset the index
  totalItems = recommendationsList.children.length; // Update the total items count
  updateCarousel(); // Update the carousel position

  try {
    //const response = await fetch("https://localhost:7171/recommendations");
    const response = await fetch(
      "https://drfikiserver.onrender.com/recommendations"
    );

    const data = await response.json();
    recommendationsList.innerHTML = "";

    // Populate dynamically
    data.forEach((reco, index) => {
      const li = document.createElement("li");
      li.className = "flex-shrink-0 w-1/3 px-2";

      const img = document.createElement("img");
      img.src = `data:image/jpeg;base64, ${reco.base64Image}`;
      img.alt = `Recommendation ${index + 1}`;
      img.className =
        "w-full h-[300px] object-contain rounded-md shadow-md cursor-pointer";
      img.onclick = () => showImageModal(img.src);

      li.appendChild(img);
      recommendationsList.appendChild(li);
    });

    currentIndex = 0; // Reset the index
    totalItems = recommendationsList.children.length; // Update the total items count
    updateCarousel(); // Update the carousel position
  } catch (error) {
    console.error("Error loading recommendations:", error);
  }
}

window.addEventListener("load", () => {
  updateItemsToShow();
  updateCarousel();
  loadBeforeAfterImages(); // Load before-after images on page load
  loadRecommendations(); // Load recommendations on page load
});
