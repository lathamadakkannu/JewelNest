// Weight and price for products that already have them on the home page.
// Keyed by product title so the same piece always shows the same details.
const productDetails = {
  "Temple gold earrings": { weight: "17.02 g", price: "₹125,785.00" },
  "Golden light rings": { weight: "6.96 g", price: "₹52,651.00" },
  "Classic gold chain": { weight: "72 g", price: "₹480,744.00" },
  "Heritage gold bangles": { weight: "17.02 g", price: "₹125,785.00" },
  "Lakshmi temple necklace": { weight: "46.89 g", price: "₹370,561.00" },
  "Emerald-bead necklace": { weight: "24.11 g", price: "₹225,042.00" },
  "Antique gold collar": { weight: "40.2 g", price: "₹296,288.00" },
  "Heritage pendant necklace": { weight: "36.5 g", price: "₹269,022.00" }
};

// Information pages: no Add to Cart / Wishlist buttons on these.
const infoPages = ["schemes", "digital-gold", "quick-pay", "auspicious-days", "journal", "silver"];

const collections = {
  featured: {
    eyebrow: "SELECTED FOR YOU",
    title: "The JewelNest edit",
    description: "A considered selection of signature pieces, chosen to be treasured every day.",
    subtitle: "A few of our favourites",
    note: "Explore handcrafted details, warm gold and colour made to last.",
    cards: [
      { image: "image/fea1.jpg", alt: "Traditional gold temple earrings", label: "TEMPLE COLLECTION", title: "Temple gold earrings", description: "Sculpted gold details with a colourful finishing touch.", category: "earrings", action: "Explore earrings" },
      { image: "image/fea2.jpg", alt: "Gold rings with delicate stone details", label: "EVERYDAY GOLD", title: "Golden light rings", description: "An easy-to-wear design with a hint of colour.", category: "rings", action: "Explore rings" },
      { image: "image/fea3.jpg", alt: "Classic gold chain", label: "TIMELESS DESIGN", title: "Classic gold chain", description: "A versatile gold essential for your own signature style.", category: "necklaces", action: "Explore necklaces" },
      { image: "image/browse4.jpg", alt: "Traditional gold bangles", label: "HERITAGE CRAFT", title: "Heritage gold bangles", description: "Traditional inspiration with a distinctive finish.", category: "bangles", action: "Explore bangles" }
    ]
  },
  gold: {
    eyebrow: "THE GOLD COLLECTION",
    title: "Gold with a story to tell.",
    description: "Discover expressive gold designs, from everyday favourites to heirloom-worthy statements.",
    subtitle: "The gold edit",
    note: "Explore a selection of traditional silhouettes and modern details.",
    cards: [
      { image: "image/arr1.jpg", alt: "Ornate gold temple necklace", label: "TEMPLE CRAFT", title: "Lakshmi temple necklace", description: "A detailed traditional necklace for memorable occasions." },
      { image: "image/arr2.jpg", alt: "Gold necklace with green bead strands", label: "COLOUR & CRAFT", title: "Emerald-bead necklace", description: "Green accents bring a fresh note to a classic design." },
      { image: "image/arr3.jpg", alt: "Antique-style gold necklace", label: "HEIRLOOM GOLD", title: "Antique gold collar", description: "An ornate collar inspired by treasured heirloom pieces." },
      { image: "image/arr4.jpg", alt: "Traditional gold necklace with pendant", label: "SIGNATURE DETAIL", title: "Heritage pendant necklace", description: "An intricate pendant makes this necklace a celebration piece." }
    ]
  },
  diamond: {
    eyebrow: "LIGHT, CUT & COLOUR",
    title: "A little brilliance, your way.",
    description: "Explore luminous designs and considered details for celebrations and everyday moments.",
    subtitle: "The brilliance edit",
    note: "Discover pieces selected for their delicate sparkle and expressive design.",
    cards: [
      { image: "image/design1.jpg", alt: "Colourful peacock pendant with bright stones", label: "COLOURFUL DETAIL", title: "Peacock pendant", description: "A sculpted motif with a vivid, joyful finish.", category: "necklaces", action: "Explore necklaces" },
      { image: "image/browse3.jpg", alt: "Pendant necklace with a central coloured stone", label: "OCCASION STYLE", title: "Ruby-inspired pendant", description: "A graceful silhouette made to catch the light.", category: "necklaces", action: "Explore necklaces" },
      { image: "image/fea2.jpg", alt: "Fine gold jewellery with stone accents", label: "EVERYDAY SPARKLE", title: "Golden light rings", description: "A delicate design with subtle stone accents.", category: "rings", action: "Explore rings" },
      { image: "image/fea1.jpg", alt: "Traditional gold earrings with colourful stones", label: "CELEBRATION EDIT", title: "Temple stone earrings", description: "Traditional craftsmanship with colourful detailing.", category: "earrings", action: "Explore earrings" }
    ]
  },
  coins: {
    eyebrow: "A GOLDEN KEEPSAKE",
    title: "Small in size. Rich in meaning.",
    description: "Explore gold coins made for milestones, thoughtful gifts and keepsakes.",
    subtitle: "Gold coins",
    note: "A timeless way to mark a moment or make a gift more personal.",
    cards: [
      { image: "image/gold1.jpg", alt: "Gold coin with a traditional motif", label: "GOLD COIN", title: "Auspicious motif coin", description: "A classic keepsake with a traditional design." },
      { image: "image/gold2.jpg", alt: "Gold coin from the JewelNest collection", label: "GOLD COIN", title: "Everyday gold keepsake", description: "A thoughtful choice for gifting and special occasions." },
      { image: "image/gold3.jpg", alt: "Gold coin from the JewelNest collection", label: "GOLD COIN", title: "A gift to remember", description: "Celebrate a milestone with a lasting golden token." }
    ]
  },
  silver: {
    eyebrow: "THE SILVER EDIT",
    title: "Everyday silver, thoughtfully chosen.",
    description: "Explore the enduring charm of silver for gifting, keepsakes and everyday rituals.",
    subtitle: "Silver, made personal",
    note: "JewelNest's silver edit celebrates meaningful details and timeless forms.",
    cards: [
      { icon: "fa-sun-o", label: "EVERYDAY", title: "A little silver ritual", description: "Find a simple piece to make an everyday moment feel special." },
      { icon: "fa-gift", label: "GIFTING", title: "A thoughtful keepsake", description: "Choose a meaningful silver gift for someone close to you." },
      { icon: "fa-heart-o", label: "MILESTONES", title: "Made to be remembered", description: "Mark a special day with a keepsake to hold on to." }
    ]
  },
  gifts: {
    eyebrow: "GIFTS WITH MEANING",
    title: "Give them a story to keep.",
    description: "Find thoughtful jewellery gifts for celebrations, milestones and just because.",
    subtitle: "A gift for every kind of moment",
    note: "Explore expressive pieces selected to make your gesture unforgettable.",
    cards: [
      { image: "image/browse1.jpg", alt: "Traditional gold earrings for gifting", label: "A LITTLE SOMETHING", title: "Earrings to treasure", description: "A timeless gift, made personal with intricate detail.", category: "earrings", action: "Explore earrings" },
      { image: "image/design1.jpg", alt: "Gold peacock pendant with colourful stones", label: "FULL OF MEANING", title: "A colourful pendant", description: "A bright, distinctive design for someone special.", category: "necklaces", action: "Explore necklaces" },
      { image: "image/browse4.jpg", alt: "Traditional gold bangles", label: "FOR A MILESTONE", title: "A golden keepsake", description: "Celebrate a meaningful occasion with traditional craft.", category: "bangles", action: "Explore bangles" }
    ]
  },
  "digital-gold": {
    eyebrow: "GOLD, MADE DIGITAL",
    title: "A modern way to explore gold.",
    description: "Learn the essentials of digital gold and decide whether it fits your plans.",
    subtitle: "Getting started",
    note: "Take time to understand the details before choosing a digital gold service.",
    cards: [
      { icon: "fa-mobile", label: "01 / LEARN", title: "Understand the service", description: "Review how the provider handles pricing, storage, fees and withdrawals." },
      { icon: "fa-search", label: "02 / COMPARE", title: "Check the details", description: "Read the provider's terms and verify its current policies before you proceed." },
      { icon: "fa-shield", label: "03 / DECIDE", title: "Choose with confidence", description: "Only continue when you understand the risks, costs and redemption process." }
    ]
  },
  schemes: {
    eyebrow: "PLAN YOUR PURCHASE",
    title: "Make room for something golden.",
    description: "Explore ways to plan a future jewellery purchase at a pace that feels right for you.",
    subtitle: "A little planning, a lot of possibility",
    note: "Ask a participating showroom for current plan terms and eligibility.",
    cards: [
      { icon: "fa-calendar", label: "GOLD SAVINGS", title: "Plan towards a piece", description: "Ask the showroom team about available gold purchase plans and their terms.", category: "gold", action: "Explore gold jewellery" },
      { icon: "fa-credit-card", label: "PAYMENTS", title: "Payment information", description: "Confirm accepted payment methods and any conditions with the store before purchase.", category: "quick-pay", action: "Payment information" }
    ]
  },
  "quick-pay": {
    eyebrow: "JEWELNEST CUSTOMER CARE",
    title: "Payment information, made simple.",
    description: "For payment options and purchase support, speak with the JewelNest showroom team.",
    subtitle: "Before you make a payment",
    note: "Always confirm the payment recipient and current terms directly with the showroom.",
    cards: [
      { icon: "fa-credit-card", label: "IN STORE", title: "Ask about payment options", description: "Our showroom team can confirm available payment methods for your purchase." },
      { icon: "fa-shield", label: "STAY SECURE", title: "Verify before paying", description: "Use only payment instructions shared through official JewelNest channels." },
      { icon: "fa-question-circle", label: "NEED A HAND?", title: "Get purchase support", description: "Visit a JewelNest showroom for help with a payment or purchase question." }
    ]
  },
  "auspicious-days": {
    eyebrow: "MOMENTS WORTH CELEBRATING",
    title: "Choose a day that means something.",
    description: "Find a piece to mark a wedding, festival, new beginning or personal milestone.",
    subtitle: "A meaningful moment, a lasting keepsake",
    note: "Auspicious dates vary by tradition and location. Check with your family or local calendar.",
    cards: [
      { image: "image/arr1.jpg", alt: "Traditional gold necklace for a celebration", label: "WEDDINGS", title: "For the beginning of forever", description: "Explore heirloom-inspired designs for a day to remember.", category: "gold", action: "Explore gold jewellery" },
      { image: "image/gold1.jpg", alt: "Gold coin as a celebratory keepsake", label: "FESTIVALS", title: "A golden festive gesture", description: "Mark the occasion with a meaningful gift or keepsake.", category: "coins", action: "Explore gold coins" },
      { image: "image/browse1.jpg", alt: "Gold earrings for a special occasion", label: "NEW BEGINNINGS", title: "A little something auspicious", description: "Celebrate a new chapter with a piece chosen with care.", category: "gifts", action: "Explore gifts" }
    ]
  },
  journal: {
    eyebrow: "THE JEWELNEST JOURNAL",
    title: "Stories, style and things to treasure.",
    description: "A little inspiration for choosing, wearing and caring for the pieces you love.",
    subtitle: "From the journal",
    note: "Explore our edit of jewellery inspiration and thoughtful gift ideas.",
    cards: [
      { image: "image/design1.jpg", alt: "Peacock pendant with colourful stones", label: "DESIGN NOTES", title: "The enduring charm of the peacock", description: "A closer look at a beloved motif and the colour that brings it to life.", category: "necklaces", action: "Explore necklaces" },
      { image: "image/browse4.jpg", alt: "Traditional gold bangles", label: "STYLE GUIDE", title: "Make a moment of every day", description: "Bring traditional gold into your everyday wardrobe, your own way.", category: "bangles", action: "Explore bangles" },
      { image: "image/browse1.jpg", alt: "Traditional gold earrings", label: "GIFTING", title: "A keepsake chosen with care", description: "Find a thoughtful piece for the people and moments that matter.", category: "gifts", action: "Explore gifts" }
    ]
  },
  earrings: {
    eyebrow: "THE EARRING EDIT",
    title: "A little detail. A lot of character.",
    description: "Explore earrings that bring colour, craft and a personal touch to every look.",
    subtitle: "Earrings to treasure",
    note: "From expressive traditional designs to colourful accents.",
    cards: [
      { image: "image/fea1.jpg", alt: "Traditional gold temple earrings with colourful stones", label: "TEMPLE COLLECTION", title: "Temple gold earrings", description: "Sculpted motifs and colourful stone details." },
      { image: "image/browse1.jpg", alt: "Gold earrings with traditional details", label: "CLASSIC GOLD", title: "JewelNest gold drops", description: "A graceful pair for celebrations and beyond." },
      // ✏️ Same photo as the first card - swap in your own earrings photo when you have one.
      { image: "image/fea1.jpg", alt: "Gold temple earrings with colourful stone accents", label: "CELEBRATION EDIT", title: "Temple stone earrings", description: "Traditional craftsmanship with colourful detailing." }
    ]
  },
  rings: {
    eyebrow: "THE RING EDIT",
    title: "A golden touch, all your own.",
    description: "Explore expressive rings and delicate designs for everyday and occasion wear.",
    subtitle: "Find your favourite",
    note: "Discover simple shapes and colourful details in the JewelNest ring edit.",
    cards: [
      { image: "image/browse2.jpg", alt: "Gold rings with diamond details", label: "STONE DETAILS", title: "Brilliant gold rings", description: "A polished design with delicate stone accents." },
      { image: "image/fea2.jpg", alt: "Delicate gold rings with green and white stones", label: "EVERYDAY GOLD", title: "Golden light rings", description: "An easy-to-style piece with a touch of colour." },
      // ✏️ Same photo as the second card - swap in your own ring photo when you have one.
      { image: "image/fea2.jpg", alt: "Gold ring with green and white stone accents", label: "A TOUCH OF COLOUR", title: "Green-stone gold ring", description: "Delicate gold with green and white stone accents." }
    ]
  },
  necklaces: {
    eyebrow: "THE NECKLACE EDIT",
    title: "Made to make a statement.",
    description: "Explore delicate chains, colourful pendants and traditional designs.",
    subtitle: "Necklaces for every occasion",
    note: "Choose a favourite to wear close, layer or pass down.",
    cards: [
      { image: "image/fea3.jpg", alt: "Classic gold chain necklace", label: "TIMELESS DESIGN", title: "Classic gold chain", description: "A versatile essential with enduring appeal." },
      { image: "image/arr1.jpg", alt: "Ornate gold temple necklace", label: "TEMPLE CRAFT", title: "Lakshmi temple necklace", description: "A detailed traditional necklace for memorable occasions." },
      { image: "image/arr2.jpg", alt: "Gold necklace with green bead strands", label: "COLOUR & CRAFT", title: "Emerald-bead necklace", description: "Green accents bring a fresh note to a classic design." },
      { image: "image/arr3.jpg", alt: "Ornate antique gold necklace", label: "HEIRLOOM GOLD", title: "Antique gold collar", description: "A richly detailed necklace for special occasions." },
      { image: "image/arr4.jpg", alt: "Traditional gold necklace with pendant", label: "SIGNATURE DETAIL", title: "Heritage pendant necklace", description: "An intricate pendant makes this necklace a celebration piece." },
      { image: "image/browse3.jpg", alt: "Gold necklace with a ruby pendant", label: "OCCASION STYLE", title: "Ruby-inspired pendant", description: "A graceful silhouette made to catch the light." },
      { image: "image/design1.jpg", alt: "Gold peacock pendant with colourful stones", label: "COLOURFUL DETAIL", title: "Peacock pendant", description: "A sculpted motif with a vivid, joyful finish." },
      { image: "image/design2.jpg", alt: "A colourful gold pendant", label: "COLOUR & CRAFT", title: "Colourful gold pendant", description: "A colourful design with a distinctive silhouette." }
    ]
  },
  bangles: {
    eyebrow: "THE BANGLE EDIT",
    title: "Tradition, beautifully worn.",
    description: "Explore gold bangle designs that make a lasting impression.",
    subtitle: "A golden finishing touch",
    note: "Find traditional craft and distinctive details in the JewelNest edit.",
    cards: [
      { image: "image/browse4.jpg", alt: "Traditional gold bangles with colourful stones", label: "HERITAGE CRAFT", title: "Heritage gold bangles", description: "Traditional inspiration with a colourful finish." },
      // ✏️ The next two use the same photo as the first card - swap in your own bangle photos when you have them.
      { image: "image/browse4.jpg", alt: "Traditional gold bangles with colourful stones", label: "FOR A MILESTONE", title: "A golden keepsake", description: "Celebrate a meaningful occasion with traditional craft." },
      { image: "image/browse4.jpg", alt: "Gold bangles with colourful stone detailing", label: "COLOUR & CRAFT", title: "Colourful stone bangles", description: "Traditional gold with a vivid, joyful finish." }
    ]
  }
};

const params = new URLSearchParams(window.location.search);
const searchQuery = (params.get("q") || "").trim().slice(0, 50);
const category = params.get("category") || "featured";
const emptyState = document.getElementById("collection-empty");
const emptyMessage = document.getElementById("collection-empty-message");
const sectionHeading = document.querySelector(".collection-section-heading");
const grid = document.getElementById("collection-grid");

// Keep the typed search in the box after the page loads
document.querySelectorAll("[data-search-input]").forEach((input) => {
  input.value = searchQuery;
});

function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Search every product page (not the information pages) and return unique matches.
function searchProducts(query) {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  const patterns = terms.map((term) => new RegExp("(^|[^a-z0-9])" + escapeRegExp(term), "i"));
  const seen = new Set();
  const results = [];

  Object.entries(collections).forEach(([key, section]) => {
    if (infoPages.includes(key)) return;
    section.cards.forEach((item) => {
      if (!item.image || seen.has(item.title)) return;
      const haystack = [item.title, item.label, item.description, item.alt, key].join(" ");
      if (patterns.every((pattern) => pattern.test(haystack))) {
        seen.add(item.title);
        results.push(item);
      }
    });
  });
  return results;
}

let collection = null;
let shopping = false; // true when cards are real products that can be added to cart / wishlist

if (searchQuery) {
  const matches = searchProducts(searchQuery);
  shopping = true;
  collection = {
    eyebrow: "SEARCH RESULTS",
    title: matches.length ? `Results for “${searchQuery}”` : `No results for “${searchQuery}”`,
    description: matches.length
      ? `${matches.length} ${matches.length === 1 ? "piece" : "pieces"} found across the JewelNest collections.`
      : "Try a different word, such as earrings, necklace, bangles or gold.",
    subtitle: "Search results",
    note: "Add a piece to your wishlist or cart after you log in.",
    cards: matches
  };
} else if (Object.prototype.hasOwnProperty.call(collections, category)) {
  collection = collections[category];
  shopping = !infoPages.includes(category);
}

function showEmpty(message) {
  emptyMessage.textContent = message;
  sectionHeading.hidden = true;
  grid.hidden = true;
  emptyState.hidden = false;
}

if (collection) {
  document.title = `JewelNest | ${collection.title}`;
  document.getElementById("collection-eyebrow").textContent = collection.eyebrow;
  document.getElementById("collection-title").textContent = collection.title;
  document.getElementById("collection-description").textContent = collection.description;
  document.getElementById("collection-subtitle").textContent = collection.subtitle;
  document.getElementById("collection-note").textContent = collection.note;

  if (!collection.cards.length) {
    showEmpty(`We couldn’t find any pieces matching “${searchQuery}”.`);
  }

  if (collection.cards.length < 3) {
    grid.classList.add("collection-grid--few");
  }

  collection.cards.forEach((item) => {
    const card = document.createElement("article");
    card.className = item.image ? "collection-card" : "collection-card collection-card--text";
    // Only real products (with a photo) on product pages get cart / wishlist buttons
    if (shopping && item.image) card.dataset.shoppable = "true";

    if (item.image) {
      const image = document.createElement("img");
      image.src = item.image;
      image.alt = item.alt;
      image.loading = "lazy";
      card.append(image);
    } else {
      const icon = document.createElement("i");
      icon.className = `collection-card-icon fa ${item.icon}`;
      icon.setAttribute("aria-hidden", "true");
      card.append(icon);
    }

    const body = document.createElement("div");
    body.className = "collection-card-body";
    const label = document.createElement("p");
    label.className = "collection-card-label";
    label.textContent = item.label;
    const title = document.createElement("h3");
    title.textContent = item.title;
    const description = document.createElement("p");
    description.className = "collection-card-description";
    description.textContent = item.description;
    body.append(label, title, description);

    // Product details (weight + price) for shoppable pieces
    if (shopping && item.image) {
      const details = productDetails[item.title];
      const meta = document.createElement("div");
      meta.className = "collection-card-meta";
      if (details) {
        const weight = document.createElement("span");
        weight.textContent = details.weight;
        const price = document.createElement("strong");
        price.className = "collection-card-price";
        price.textContent = details.price;
        meta.append(weight, price);
      } else {
        const onRequest = document.createElement("span");
        onRequest.textContent = "Price on request";
        meta.append(onRequest);
      }
      body.append(meta);
    }

    if (item.category && item.action) {
      const action = document.createElement("a");
      action.className = "collection-card-link";
      action.href = `collections.html?category=${encodeURIComponent(item.category)}`;
      action.textContent = item.action;
      const arrow = document.createElement("i");
      arrow.className = "fa fa-arrow-right";
      arrow.setAttribute("aria-hidden", "true");
      action.append(" ", arrow);
      body.append(action);
    }

    card.append(body);
    grid.append(card);
  });
} else {
  document.title = "JewelNest | Collection not found";
  document.getElementById("collection-title").textContent = "This collection is not available.";
  document.getElementById("collection-description").textContent = "Choose a collection from the navigation or return to JewelNest.";
  showEmpty("We couldn’t find that collection.");
}
