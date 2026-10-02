const HELPLINES = [
  {
    region: "United States & Canada",
    name: "988 Suicide & Crisis Lifeline",
    desc: "Free, confidential support for people in emotional distress or suicidal crisis, 24 hours a day, every day.",
    action: 'Call or text <a href="tel:988">988</a>',
  },
  {
    region: "United States",
    name: "Crisis Text Line",
    desc: "Text with a crisis counselor from anywhere in the U.S. Standard message rates apply.",
    action: 'Text <strong>HOME</strong> to <a href="sms:741741">741741</a>',
  },
  {
    region: "United States",
    name: "SAMHSA National Helpline",
    desc: "Free, confidential information and referral for mental health and substance use, 24/7.",
    action: 'Call <a href="tel:18002738255">1-800-273-8255</a>',
  },
  {
    region: "United States",
    name: "The Trevor Project",
    desc: "Crisis support for LGBTQ+ young people, through phone, text, and chat.",
    action: 'Call <a href="tel:18664887386">1-866-488-7386</a>',
  },
  {
    region: "United States",
    name: "Veterans Crisis Line",
    desc: "Confidential support for Veterans, service members, and their families, 24/7.",
    action: 'Call <a href="tel:18002727355">1-800-273-8255</a> press 1',
  },
  {
    region: "United Kingdom & Ireland",
    name: "Samaritans",
    desc: "A trained listener will answer any time, day or night. Call free from any phone.",
    action: 'Call <a href="tel:116123">116 123</a>',
  },
  {
    region: "Canada",
    name: "Kids and Youth Helpline",
    desc: "Free, confidential support for young people in Canada, 24 hours a day.",
    action: 'Call or text <a href="tel:18006686877">1-800-668-6877</a>',
  },
  {
    region: "Europe",
    name: "Befrienders Worldwide",
    desc: "A global directory of emotional support helplines in more than 30 countries.",
    action: 'Find your local line at <a href="https://www.befrienders.org" target="_blank" rel="noopener noreferrer">befrienders.org</a>',
  },
  {
    region: "Worldwide",
    name: "Find A Helpline",
    desc: "Verified crisis lines worldwide, in many languages, updated daily.",
    action: 'Find your local line at <a href="https://findahelpline.com" target="_blank" rel="noopener noreferrer">findahelpline.com</a>',
  },
];

const helplineList = document.getElementById("helplineList");

if (helplineList) {
  helplineList.innerHTML = HELPLINES.map(
    (h) => `
    <article class="card">
      <p class="helpline__region">${h.region}</p>
      <h3 class="helpline__name">${h.name}</h3>
      <p class="helpline__desc">${h.desc}</p>
      <p class="helpline__action">${h.action}</p>
    </article>`
  ).join("");
}

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

if (form && status) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const phone = form.elements.phone.value.trim();
    const digits = phone.replace(/\D/g, "");

    if (digits.length < 7) {
      status.textContent = "Please enter a phone number we can reach you on.";
      status.className = "form__status is-error";
      form.elements.phone.focus();
      return;
    }

    status.textContent =
      "Thank you. A crisis counselor will call you as soon as possible. " +
      "If you are in crisis right now, call or text 988.";
    status.className = "form__status is-ok";
    form.reset();
  });
}
