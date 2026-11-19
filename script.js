/* =====================================================================
   SHOP CONTENT — edit ONLY this object to reuse the site for another shop.
   Everything visible on the page (both languages) comes from here.
   hours: index 0 = Sunday … 6 = Saturday, ["HH:MM", "HH:MM"] in Dubai time, or null if closed.
   hoursGroups: how days are grouped in the hours table. See README.md.
   ===================================================================== */
const SHOP = {
  "name": "Karama Optic",
  "siteUrl": "https://tanish0212.github.io/karama-optic-demo/",
  "schemaType": "Optician",
  "phoneDisplay": "+971 50 376 8603",
  "phoneHref": "tel:+971503768603",
  "phoneIntl": "+971503768603",
  "whatsappNumber": "971503768603",
  "directionsUrl": "https://www.google.com/maps/search/?api=1&query=Karama+Optic+Street+4C+Al+Karama+Dubai",
  "reviewsUrl": "https://www.google.com/maps/search/?api=1&query=Karama+Optic+Street+4C+Al+Karama+Dubai",
  "mapEmbedUrl": "https://maps.google.com/maps?q=Karama%20Optic%2C%20Street%204C%2C%20Al%20Karama%2C%20Dubai&output=embed",
  "address": {
    "street": "Street 4C, Al Karama",
    "city": "Dubai",
    "country": "AE"
  },
  "timeZone": "Asia/Dubai",
  "hours": [
    [
      "09:30",
      "22:30"
    ],
    [
      "09:30",
      "22:30"
    ],
    [
      "09:30",
      "22:30"
    ],
    [
      "09:30",
      "22:30"
    ],
    [
      "09:30",
      "22:30"
    ],
    [
      "09:30",
      "22:30"
    ],
    [
      "09:30",
      "22:30"
    ]
  ],
  "hoursGroups": [
    {
      "days": [
        0,
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "key": "daily"
    }
  ],
  "rating": {
    "value": "4.9",
    "count": 104
  },
  "showDemoBanner": true,
  "credit": "Tanish",
  "images": {
    "hero": {
      "src": "images/eye-chart.svg",
      "en": "Line illustration of an eye chart with a pair of glasses in front",
      "ar": "رسم خطي للوحة فحص النظر وأمامها نظارة"
    }
  },
  "stepIcons": [
    "i-wa",
    "i-store",
    "i-glasses"
  ],
  "services": [
    {
      "image": "images/eye-test.svg",
      "en": {
        "name": "Eye tests",
        "desc": "Have your eyes tested in the shop.",
        "alt": "Line illustration of an eye inside a measuring reticle",
        "ask": "an eye test"
      },
      "ar": {
        "name": "فحص النظر",
        "desc": "افحص نظرك في المحل.",
        "alt": "رسم خطي لعين داخل دائرة قياس",
        "ask": "فحص النظر"
      }
    },
    {
      "image": "images/frames.svg",
      "en": {
        "name": "Frames",
        "desc": "A wide selection of frames, including trendy styles.",
        "alt": "Line illustration of three pairs of glasses: round, rectangular and cat-eye",
        "ask": "frames"
      },
      "ar": {
        "name": "الإطارات",
        "desc": "تشكيلة واسعة من الإطارات، ومنها موديلات عصرية.",
        "alt": "رسم خطي لثلاث نظارات: دائرية ومستطيلة وعين القطة",
        "ask": "الإطارات"
      }
    },
    {
      "image": "images/lenses.svg",
      "en": {
        "name": "Lenses",
        "desc": "Lenses for your glasses. Message us to ask about the options.",
        "alt": "Line diagram of light passing through a lens",
        "ask": "lenses"
      },
      "ar": {
        "name": "العدسات",
        "desc": "عدسات لنظارتك. راسلنا لتسأل عن الخيارات المتاحة.",
        "alt": "رسم تخطيطي لضوء يمر عبر عدسة",
        "ask": "العدسات"
      }
    },
    {
      "image": "images/online.svg",
      "en": {
        "name": "Online orders",
        "desc": "Prefer to order online? Message us on WhatsApp to ask how.",
        "alt": "Line illustration of a phone showing glasses and a chat bubble",
        "ask": "ordering online"
      },
      "ar": {
        "name": "الطلب أونلاين",
        "desc": "تفضّل الطلب عبر الإنترنت؟ راسلنا عبر واتساب لتعرف الطريقة.",
        "alt": "رسم خطي لهاتف يعرض نظارة مع فقاعة محادثة",
        "ask": "الطلب أونلاين"
      }
    }
  ],
  "reviews": [
    "They have excellent customer service, good selection of frames and affordable.",
    "My favourite optics shop in Karama for more than 25 years.",
    "Very friendly customer service, reasonable prices, and a wide variety of trendy frames to choose from."
  ],
  "text": {
    "en": {
      "skip": "Skip to content",
      "navLabel": "Main",
      "navServices": "Services",
      "navHow": "How it works",
      "navReviews": "Reviews",
      "navVisit": "Visit",
      "langLabel": "Language",
      "waCta": "Message on WhatsApp",
      "waShort": "WhatsApp",
      "callCta": "Call the shop",
      "directions": "Get Directions",
      "newTab": "(opens in a new tab)",
      "ratingLine": "{rating} on Google · {count} reviews",
      "statusOpen": "Open now · until {time}",
      "statusOpensToday": "Closed now · opens today at {time}",
      "statusOpensTomorrow": "Closed now · opens tomorrow at {time}",
      "statusOpensLater": "Closed now · opens {day} at {time}",
      "am": "AM",
      "pm": "PM",
      "days": [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "today": "Today",
      "stripAria": "Quick facts",
      "stripServicesLabel": "Services",
      "stripHoursLabel": "Hours",
      "stripRatingLabel": "Google rating",
      "stripRating": "{rating} / 5 · {count} reviews",
      "servicesKicker": "Services",
      "quoteCta": "Ask on WhatsApp",
      "quoteNote": "Prices aren't listed online. Message us on WhatsApp for prices.",
      "howKicker": "How it works",
      "reviewsKicker": "Reviews",
      "basedOn": "{count} reviews on Google",
      "reviewLabel": "Google review",
      "readMore": "Read more on Google",
      "visitKicker": "Visit",
      "addressLabel": "Address",
      "hoursLabel": "Opening hours",
      "phoneLabel": "Phone & WhatsApp",
      "footerContact": "Contact",
      "credit": "Website by {credit}",
      "pageTitle": "Karama Optic · Eye tests, frames and lenses in Al Karama, Dubai",
      "metaDescription": "Optical shop on Street 4C, Al Karama, Dubai: eye tests, a wide selection of frames including trendy styles, lenses and online orders. Rated 4.9 on Google.",
      "demoBanner": "Demo preview – made for Karama Optic. Not the official website yet.",
      "brandName": "Karama Optic",
      "brandSub": "Optical shop · Al Karama",
      "waMessage": "Hello Karama Optic, I found you on your website and I'd like to ask about glasses.",
      "waMessageAbout": "Hello Karama Optic, I found you on your website and I'd like to ask about {service}.",
      "waAria": "Message Karama Optic on WhatsApp",
      "heroEyebrow": "Karama Optic · Optical shop",
      "heroTitle": [
        "See clearly.",
        "Look sharp."
      ],
      "heroSub": "Eye tests, a wide selection of frames (including trendy styles) and lenses on Street 4C, Al Karama. Ask us about ordering online.",
      "heroPlace": "Street 4C, Al Karama",
      "heroCaption": "Street 4C · Al Karama",
      "stripServices": "Eye tests · Frames · Lenses · Online orders",
      "groups": {
        "daily": "Every day"
      },
      "groupsShort": {
        "daily": "Daily"
      },
      "servicesTitle": "Everything for your eyes.",
      "servicesIntro": "Tap any service to ask us about it on WhatsApp.",
      "howTitle": "Your new glasses in three steps.",
      "steps": [
        {
          "title": "Message us on WhatsApp",
          "text": "Ask about frames, lenses, eye tests or ordering online."
        },
        {
          "title": "Visit the shop",
          "text": "Come to Street 4C, Al Karama, and try on frames."
        },
        {
          "title": "Choose your pair",
          "text": "Pick the frames that suit you from a wide selection."
        }
      ],
      "reviewsTitle": "What our customers say.",
      "visitTitle": "Visit the shop.",
      "addressLines": [
        "Street 4C",
        "Al Karama, Dubai"
      ],
      "mapTitle": "Map showing Karama Optic on Street 4C, Al Karama, Dubai",
      "ctaTitle": "Time for new glasses?",
      "ctaSub": "Send us a message on WhatsApp, or call the shop.",
      "footerName": "Karama Optic",
      "footerTag": "Optical shop on Street 4C, Al Karama, Dubai."
    },
    "ar": {
      "skip": "انتقل إلى المحتوى",
      "navLabel": "القائمة الرئيسية",
      "navServices": "الخدمات",
      "navHow": "كيف نعمل",
      "navReviews": "التقييمات",
      "navVisit": "الموقع",
      "langLabel": "اللغة",
      "waCta": "راسلنا عبر واتساب",
      "waShort": "واتساب",
      "callCta": "اتصل بالمحل",
      "directions": "احصل على الاتجاهات",
      "newTab": "(يفتح في نافذة جديدة)",
      "ratingLine": "{rating} على جوجل · {count} تقييمات",
      "statusOpen": "مفتوح الآن · حتى {time}",
      "statusOpensToday": "مغلق الآن · يفتح اليوم الساعة {time}",
      "statusOpensTomorrow": "مغلق الآن · يفتح غدًا الساعة {time}",
      "statusOpensLater": "مغلق الآن · يفتح يوم {day} الساعة {time}",
      "am": "صباحًا",
      "pm": "مساءً",
      "days": [
        "الأحد",
        "الاثنين",
        "الثلاثاء",
        "الأربعاء",
        "الخميس",
        "الجمعة",
        "السبت"
      ],
      "today": "اليوم",
      "stripAria": "معلومات سريعة",
      "stripServicesLabel": "الخدمات",
      "stripHoursLabel": "ساعات العمل",
      "stripRatingLabel": "التقييم على جوجل",
      "stripRating": "{rating} من 5 · {count} تقييمات",
      "servicesKicker": "الخدمات",
      "quoteCta": "اسأل عبر واتساب",
      "quoteNote": "الأسعار غير معروضة على الموقع. راسلونا عبر واتساب لمعرفة الأسعار.",
      "howKicker": "كيف نعمل",
      "reviewsKicker": "التقييمات",
      "basedOn": "{count} تقييمات على جوجل",
      "reviewLabel": "تقييم من جوجل",
      "readMore": "اقرأ المزيد على جوجل",
      "visitKicker": "زورونا",
      "addressLabel": "العنوان",
      "hoursLabel": "ساعات العمل",
      "phoneLabel": "الهاتف وواتساب",
      "footerContact": "تواصل معنا",
      "credit": "تصميم الموقع: {credit}",
      "pageTitle": "كرامة أوبتك · فحص النظر والإطارات والعدسات في الكرامة، دبي",
      "metaDescription": "محل نظارات في شارع 4C، الكرامة، دبي: فحص النظر، تشكيلة واسعة من الإطارات ومنها موديلات عصرية، العدسات والطلب أونلاين. تقييم 4.9 على جوجل.",
      "demoBanner": "نسخة تجريبية – صُممت خصيصًا لمحل كرامة أوبتك. ليست الموقع الرسمي بعد.",
      "brandName": "كرامة أوبتك",
      "brandSub": "محل نظارات · الكرامة",
      "waMessage": "مرحبًا كرامة أوبتك، وجدتكم عبر موقعكم الإلكتروني وأودّ الاستفسار عن النظارات.",
      "waMessageAbout": "مرحبًا كرامة أوبتك، وجدتكم عبر موقعكم الإلكتروني وأودّ الاستفسار عن {service}.",
      "waAria": "راسل كرامة أوبتك عبر واتساب",
      "heroEyebrow": "كرامة أوبتك · محل نظارات",
      "heroTitle": [
        "رؤية أوضح.",
        "وإطلالة أنيقة."
      ],
      "heroSub": "فحص النظر، وتشكيلة واسعة من الإطارات (منها موديلات عصرية)، والعدسات في شارع 4C بالكرامة. اسألنا عن الطلب أونلاين.",
      "heroPlace": "شارع 4C، الكرامة",
      "heroCaption": "شارع 4C · الكرامة",
      "stripServices": "فحص النظر · الإطارات · العدسات · الطلب أونلاين",
      "groups": {
        "daily": "كل يوم"
      },
      "groupsShort": {
        "daily": "يوميًا"
      },
      "servicesTitle": "كل ما تحتاجه عيناك.",
      "servicesIntro": "اضغط على أي خدمة لتسألنا عنها عبر واتساب.",
      "howTitle": "نظارتك الجديدة في ثلاث خطوات.",
      "steps": [
        {
          "title": "راسلنا عبر واتساب",
          "text": "اسأل عن الإطارات أو العدسات أو فحص النظر أو الطلب أونلاين."
        },
        {
          "title": "زُر المحل",
          "text": "تفضّل إلى شارع 4C في الكرامة وجرّب الإطارات."
        },
        {
          "title": "اختر نظارتك",
          "text": "اختر الإطار الذي يناسبك من تشكيلة واسعة."
        }
      ],
      "reviewsTitle": "ماذا يقول عملاؤنا.",
      "visitTitle": "زُر المحل.",
      "addressLines": [
        "شارع 4C",
        "الكرامة، دبي"
      ],
      "mapTitle": "خريطة توضح موقع كرامة أوبتك في شارع 4C، الكرامة، دبي",
      "ctaTitle": "حان وقت نظارة جديدة؟",
      "ctaSub": "أرسل لنا رسالة عبر واتساب، أو اتصل بالمحل.",
      "footerName": "كرامة أوبتك",
      "footerTag": "محل نظارات في شارع 4C، الكرامة، دبي."
    }
  }
};

/* =====================================================================
   SITE LOGIC — no need to edit below this line.
   ===================================================================== */
(function () {
  "use strict";

  const LANG_KEY = "site-lang";
  const root = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let lang = "en";

  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === "en" || saved === "ar") lang = saved;
  } catch (e) { /* storage unavailable — default to English */ }

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const t = () => SHOP.text[lang];

  function fmt(str, extra) {
    let out = String(str)
      .replace(/\{rating\}/g, SHOP.rating.value)
      .replace(/\{count\}/g, SHOP.rating.count)
      .replace(/\{credit\}/g, SHOP.credit)
      .replace(/\{name\}/g, SHOP.name);
    if (extra) for (const [k, v] of Object.entries(extra)) out = out.split("{" + k + "}").join(v);
    return out;
  }

  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    if (attrs) {
      for (const [k, v] of Object.entries(attrs)) {
        if (v === null || v === undefined || v === false) continue;
        if (k === "class") node.className = v;
        else if (k === "text") node.textContent = v;
        else node.setAttribute(k, v === true ? "" : v);
      }
    }
    (children || []).forEach((c) => node.append(c));
    return node;
  }

  function useIcon(id, size) {
    const s = size || 20;
    const span = el("span", { class: "icon", "aria-hidden": "true" });
    span.innerHTML = '<svg viewBox="0 0 24 24" width="' + s + '" height="' + s + '"><use href="#' + id + '"/></svg>';
    return span;
  }

  function stars(value) {
    const wrap = el("span", { class: "stars", "aria-hidden": "true" });
    const full = Math.round(parseFloat(value));
    for (let i = 0; i < 5; i++) {
      wrap.insertAdjacentHTML("beforeend",
        '<svg viewBox="0 0 20 20" width="16" height="16"><path d="M10 1.8l2.5 5.3 5.8.7-4.3 4 1.1 5.7L10 14.7l-5.1 2.8L6 11.8 1.7 7.8l5.8-.7Z" ' +
        (i < full ? 'fill="currentColor"' : 'fill="none" stroke="currentColor" stroke-width="1.3"') + "/></svg>");
    }
    return wrap;
  }

  const ltr = (text) => el("span", { dir: "ltr", class: "ltr num", text });

  /* ---------- WhatsApp links ---------- */
  function waUrl(service) {
    const tx = t();
    const msg = service ? fmt(tx.waMessageAbout, { service }) : tx.waMessage;
    return "https://wa.me/" + SHOP.whatsappNumber + "?text=" + encodeURIComponent(msg);
  }

  /* ---------- Hours + open / closed badge (shop time zone) ---------- */
  const toMin = (hhmm) => { const [h, m] = hhmm.split(":").map(Number); return h * 60 + m; };

  function timeLabel(hhmm) {
    const tx = t();
    const [h, m] = hhmm.split(":").map(Number);
    const h12 = h % 12 === 0 ? 12 : h % 12;
    return h12 + (m ? ":" + String(m).padStart(2, "0") : "") + " " + (h < 12 ? tx.am : tx.pm);
  }

  function nowInShopTZ() {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: SHOP.timeZone, weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23",
    }).formatToParts(new Date());
    const get = (type) => parts.find((p) => p.type === type).value;
    const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
    return { day, min: Number(get("hour")) * 60 + Number(get("minute")) };
  }

  function shopStatus() {
    const now = nowInShopTZ();
    const today = SHOP.hours[now.day];
    if (today && now.min >= toMin(today[0]) && now.min < toMin(today[1])) {
      return { open: true, key: "statusOpen", time: today[1], day: now.day };
    }
    if (today && now.min < toMin(today[0])) {
      return { open: false, key: "statusOpensToday", time: today[0], day: now.day };
    }
    for (let i = 1; i <= 7; i++) {
      const d = (now.day + i) % 7;
      if (SHOP.hours[d]) {
        return { open: false, key: i === 1 ? "statusOpensTomorrow" : "statusOpensLater", time: SHOP.hours[d][0], day: d };
      }
    }
    return { open: false, key: "statusOpensToday", time: "00:00", day: now.day };
  }

  function rangeLabel(day) {
    const h = SHOP.hours[day];
    return timeLabel(h[0]) + " – " + timeLabel(h[1]);
  }

  function renderStatus() {
    const tx = t();
    const s = shopStatus();
    const text = fmt(tx[s.key], { time: timeLabel(s.time), day: tx.days[s.day] });
    $$(".js-status").forEach((node) => {
      node.dataset.state = s.open ? "open" : "closed";
      $(".status-text", node).textContent = text;
    });
    const today = nowInShopTZ().day;
    $$(".js-hours tr").forEach((row) => {
      const isToday = row.dataset.days.split(",").map(Number).includes(today);
      row.classList.toggle("is-today", isToday);
      const flag = $(".today-flag", row);
      if (flag) flag.hidden = !isToday;
    });
  }

  const ltrIfEn = (text) => (lang === "ar" ? document.createTextNode(text) : ltr(text));

  function renderHours() {
    const tx = t();
    $(".js-hours").replaceChildren(el("tbody", null, SHOP.hoursGroups.map((g) => el("tr", { "data-days": g.days.join(",") }, [
      el("th", { scope: "row" }, [
        document.createTextNode(tx.groups[g.key] + " "),
        el("span", { class: "today-flag", text: tx.today, hidden: true }),
      ]),
      el("td", null, [ltrIfEn(rangeLabel(g.days[0]))]),
    ]))));
    $(".js-strip-hours").replaceChildren(...SHOP.hoursGroups.map((g) =>
      el("span", { class: "strip-line" }, [document.createTextNode(tx.groupsShort[g.key] + " "), ltrIfEn(rangeLabel(g.days[0]))])));
  }

  /* ---------- Render ---------- */
  function renderText() {
    const tx = t();
    $$("[data-t]").forEach((node) => { if (tx[node.dataset.t] !== undefined) node.textContent = fmt(tx[node.dataset.t]); });
    $$("[data-shop]").forEach((node) => { node.textContent = SHOP[node.dataset.shop]; });
    $$("[data-t-aria]").forEach((node) => { node.setAttribute("aria-label", fmt(tx[node.dataset.tAria])); });

    $$(".js-tel").forEach((a) => { a.href = SHOP.phoneHref; });
    $$(".js-wa").forEach((a) => { a.href = waUrl(); a.target = "_blank"; a.rel = "noopener"; });
    $$(".js-dir").forEach((a) => { a.href = SHOP.directionsUrl; a.target = "_blank"; a.rel = "noopener"; });
    $$(".js-reviews").forEach((a) => { a.href = SHOP.reviewsUrl; a.target = "_blank"; a.rel = "noopener"; });
    $$(".js-newtab").forEach((n) => { n.textContent = " " + tx.newTab; });
    $$(".js-phone").forEach((n) => { n.replaceChildren(ltr(SHOP.phoneDisplay)); });

    document.title = tx.pageTitle;
    const md = $('meta[name="description"]');
    if (md) md.setAttribute("content", tx.metaDescription);

    const banner = $(".demo-banner");
    if (banner) banner.hidden = !SHOP.showDemoBanner;

    // Hero headline: one line per entry, last line in the accent style.
    const h1 = $(".js-hero-title");
    h1.replaceChildren(...tx.heroTitle.map((line, i) =>
      el("span", { class: "line" + (i === tx.heroTitle.length - 1 ? " accent" : ""), style: "--i:" + i, text: line + " " })));

    // Rating
    $$(".js-rating").forEach((a) => {
      a.replaceChildren(stars(SHOP.rating.value), el("span", { text: fmt(tx.ratingLine) }), el("span", { class: "visually-hidden js-newtab", text: " " + tx.newTab }));
    });
    $$(".js-stars").forEach((n) => n.replaceChildren(stars(SHOP.rating.value)));
    $$(".js-score").forEach((n) => { n.textContent = SHOP.rating.value; });

    // Image slots
    $$(".js-img").forEach((img) => {
      const slot = SHOP.images[img.dataset.img];
      if (img.getAttribute("src") !== slot.src) img.src = slot.src;
      img.alt = slot[lang];
    });

    // Services
    const other = lang === "ar" ? "en" : "ar";
    $(".js-services").replaceChildren(...SHOP.services.map((s, i) => el("li", { class: "service reveal", style: "--d:" + (i % 3) * 80 + "ms" }, [
      el("div", { class: "service-media" }, [
        el("img", { src: s.image, alt: s[lang].alt, width: 480, height: 600, loading: "lazy", decoding: "async" }),
      ]),
      el("div", { class: "service-body" }, [
        el("span", { class: "service-num", "aria-hidden": "true", text: String(i + 1).padStart(2, "0") }),
        el("h3", { class: "service-name", text: s[lang].name }),
        el("p", { class: "service-alt", lang: other, dir: other === "ar" ? "rtl" : "ltr", text: s[other].name }),
        el("p", { class: "service-desc", text: s[lang].desc }),
        el("a", { class: "service-link", href: waUrl(s[lang].ask), target: "_blank", rel: "noopener" }, [
          el("span", { text: tx.quoteCta }),
          el("span", { class: "visually-hidden", text: " – " + s[lang].name + " " + tx.newTab }),
          useIcon("i-arrow", 18),
        ]),
      ]),
    ])));

    // Steps
    $(".js-steps").replaceChildren(...tx.steps.map((s, i) => el("li", { class: "step reveal", style: "--d:" + i * 90 + "ms" }, [
      el("div", { class: "step-mark" }, [el("span", { class: "step-num", text: String(i + 1) }), stepIcon(SHOP.stepIcons[i])]),
      el("h3", { text: s.title }),
      el("p", { text: s.text }),
    ])));

    // Reviews (kept in English — real quotes)
    $(".js-reviews-list").replaceChildren(...SHOP.reviews.map((r, i) => el("li", { class: "review reveal", style: "--d:" + i * 90 + "ms" }, [
      el("figure", null, [
        quoteMark(),
        el("blockquote", { lang: "en", dir: "ltr" }, [el("p", { text: r })]),
        el("figcaption", { text: tx.reviewLabel }),
      ]),
    ])));

    $$(".js-address").forEach((n) => n.replaceChildren(...tx.addressLines.map((l) => el("span", { text: l }))));
    renderHours();

    const map = $(".js-map");
    if (!map.getAttribute("src")) map.setAttribute("src", SHOP.mapEmbedUrl);
    map.title = tx.mapTitle;

    $(".js-year").textContent = new Date().getFullYear();
    $$("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));

    renderStatus();
    observeReveals();
  }

  function stepIcon(id) {
    const s = el("span", { class: "step-icon", "aria-hidden": "true" });
    s.innerHTML = '<svg viewBox="0 0 24 24" width="22" height="22"><use href="#' + id + '"/></svg>';
    return s;
  }

  function quoteMark() {
    const s = el("span", { class: "quote-mark", "aria-hidden": "true" });
    s.innerHTML = '<svg viewBox="0 0 48 36" width="36" height="27"><path fill="currentColor" d="M0 36V22.4C0 9.6 6.2 2.2 18.6 0l2 4.6C13.8 6.6 10.6 10.4 10.2 16H19v20Zm27 0V22.4C27 9.6 33.2 2.2 45.6 0l2 4.6C40.8 6.6 37.6 10.4 37.2 16H46v20Z"/></svg>';
    return s;
  }

  function applyLang(next, persist) {
    lang = next;
    root.lang = next;
    root.dir = next === "ar" ? "rtl" : "ltr";
    renderText();
    if (persist) { try { localStorage.setItem(LANG_KEY, next); } catch (e) { /* ignore */ } }
  }

  /* ---------- Structured data (built from SHOP) ---------- */
  function addJsonLd() {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const data = {
      "@context": "https://schema.org",
      "@type": SHOP.schemaType,
      name: SHOP.name,
      url: SHOP.siteUrl,
      image: SHOP.siteUrl + "images/og-image.jpg",
      logo: SHOP.siteUrl + "images/logo.svg",
      telephone: SHOP.phoneIntl,
      address: {
        "@type": "PostalAddress",
        streetAddress: SHOP.address.street,
        addressLocality: SHOP.address.city,
        addressCountry: SHOP.address.country,
      },
      hasMap: SHOP.directionsUrl,
      openingHoursSpecification: SHOP.hoursGroups.map((g) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: g.days.map((d) => dayNames[d]),
        opens: SHOP.hours[g.days[0]][0],
        closes: SHOP.hours[g.days[0]][1],
      })),
      aggregateRating: { "@type": "AggregateRating", ratingValue: SHOP.rating.value, bestRating: "5", reviewCount: String(SHOP.rating.count) },
      makesOffer: SHOP.services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.en.name } })),
    };
    document.head.append(el("script", { type: "application/ld+json", text: JSON.stringify(data) }));
  }

  /* ---------- Motion: reveal on scroll ---------- */
  let io = null;
  function observeReveals() {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      $$(".reveal").forEach((n) => n.classList.add("is-in"));
      return;
    }
    if (!io) {
      io = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    }
    $$(".reveal:not(.is-in)").forEach((n) => io.observe(n));
  }

  /* ---------- Sticky header compacts on scroll ---------- */
  const header = $(".site-header");
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { header.classList.toggle("is-compact", window.scrollY > 24); ticking = false; });
  }

  /* ---------- Init ---------- */
  if (!reduceMotion) root.classList.add("motion");
  applyLang(lang, false);
  addJsonLd();
  $$("[data-lang]").forEach((b) => b.addEventListener("click", () => { if (b.dataset.lang !== lang) applyLang(b.dataset.lang, true); }));
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  setInterval(renderStatus, 60 * 1000);
})();
