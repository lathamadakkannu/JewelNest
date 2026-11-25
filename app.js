document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".header-col").forEach((navigation) => {
    navigation.scrollLeft = 0;
  });

  const storage = {
    get(key, fallback) {
      try {
        return JSON.parse(localStorage.getItem(key)) ?? fallback;
      } catch {
        return fallback;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch {}
    }
  };

  let wishlist = storage.get("jewelnest-wishlist", []);
  let cart = storage.get("jewelnest-cart", []);
  let user = storage.get("jewelnest-user", null);

  document.body.insertAdjacentHTML("beforeend", `
    <div class="modal-backdrop" id="login-backdrop" hidden>
      <div class="login-modal" role="dialog" aria-modal="true" aria-labelledby="login-title">
        <button class="modal-close" type="button" data-close-modal aria-label="Close login">&times;</button>
        <p class="eyebrow">WELCOME TO JEWELNEST</p>
        <h2 id="login-title">Sign in to your account</h2>
        <p class="login-subtitle">Enter your details to continue.</p>
        <form id="login-form" novalidate>
          <div class="form-field">
            <label for="login-name">Name</label>
            <input id="login-name" name="name" type="text" autocomplete="name" maxlength="50" placeholder="Enter your name">
            <small class="field-error" data-error-for="name"></small>
          </div>
          <div class="form-field">
            <label for="login-email">Email</label>
            <input id="login-email" name="email" type="email" autocomplete="email" maxlength="100" placeholder="you@example.com">
            <small class="field-error" data-error-for="email"></small>
          </div>
          <div class="form-field">
            <label for="login-password">Password</label>
            <div class="password-field">
              <input id="login-password" name="password" type="password" autocomplete="current-password" maxlength="20" placeholder="Minimum 6 characters">
              <button class="password-toggle" type="button" aria-label="Show password" aria-pressed="false">
                <i class="fa fa-eye" aria-hidden="true"></i>
              </button>
            </div>
            <small class="field-error" data-error-for="password"></small>
          </div>
          <button class="login-submit" type="submit">Login</button>
        </form>
        <div class="account-view" id="account-view" hidden>
          <p>Signed in as</p>
          <strong id="account-name"></strong>
          <small id="account-email"></small>
          <button class="logout-button" type="button" id="logout-button">Logout</button>
        </div>
      </div>
    </div>
    <div class="shop-drawer-backdrop" data-drawer-backdrop hidden></div>
    <aside class="shop-drawer" id="shop-drawer" aria-hidden="true" aria-label="Shopping panel">
      <div class="shop-drawer-header">
        <h2 id="drawer-title">My Cart</h2>
        <button type="button" class="drawer-close" data-close-drawer aria-label="Close">&times;</button>
      </div>
      <div class="shop-drawer-body" id="drawer-content"></div>
    </aside>
    <div class="toast" id="toast" role="status" aria-live="polite"></div>
  `);

  const loginBackdrop = document.getElementById("login-backdrop");
  const loginForm = document.getElementById("login-form");
  const drawer = document.getElementById("shop-drawer");
  const drawerBackdrop = document.querySelector("[data-drawer-backdrop]");
  const drawerTitle = document.getElementById("drawer-title");
  const drawerContent = document.getElementById("drawer-content");
  let toastTimer;

  function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 3000);
  }

  function openLogin() {
    if (user) {
      loginForm.hidden = true;
      document.querySelector(".login-subtitle").hidden = true;
      document.getElementById("account-view").hidden = false;
      document.getElementById("account-name").textContent = user.name;
      document.getElementById("account-email").textContent = user.email;
      document.getElementById("login-title").textContent = "Your account";
      loginBackdrop.hidden = false;
      requestAnimationFrame(() => loginBackdrop.classList.add("show"));
      return;
    }
    loginForm.hidden = false;
    document.querySelector(".login-subtitle").hidden = false;
    document.getElementById("account-view").hidden = true;
    document.getElementById("login-title").textContent = "Sign in to your account";
    loginBackdrop.hidden = false;
    requestAnimationFrame(() => loginBackdrop.classList.add("show"));
    document.getElementById("login-name").focus();
  }

  function closeLogin() {
    loginBackdrop.classList.remove("show");
    setTimeout(() => { loginBackdrop.hidden = true; }, 180);
  }

  function setFieldError(field, message) {
    field.classList.toggle("invalid", Boolean(message));
    field.closest(".form-field").querySelector(".field-error").textContent = message;
  }

  function validateLoginField(field) {
    const value = field.value.trim();
    if (!value) {
      setFieldError(field, field.name === "name" ? "Please enter your name." : field.name === "email" ? "Please enter your email." : "Please enter your password.");
      return false;
    }
    if (field.name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setFieldError(field, "Please enter a valid email address.");
      return false;
    }
    if (field.name === "password" && value.length < 6) {
      setFieldError(field, "Password must be at least 6 characters.");
      return false;
    }
    setFieldError(field, "");
    return true;
  }

  loginForm.querySelectorAll("input").forEach((field) => {
    field.addEventListener("input", () => {
      if (field.classList.contains("invalid")) validateLoginField(field);
    });
  });

  const passwordField = document.getElementById("login-password");
  const passwordToggle = loginForm.querySelector(".password-toggle");
  passwordToggle.addEventListener("click", () => {
    const showPassword = passwordField.type === "password";
    passwordField.type = showPassword ? "text" : "password";
    passwordToggle.setAttribute("aria-label", showPassword ? "Hide password" : "Show password");
    passwordToggle.setAttribute("aria-pressed", String(showPassword));
    passwordToggle.innerHTML = `<i class="fa ${showPassword ? "fa-eye-slash" : "fa-eye"}" aria-hidden="true"></i>`;
  });

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const fields = [...loginForm.querySelectorAll("input")];
    const valid = fields.map(validateLoginField).every(Boolean);
    if (!valid) {
      fields.find((field) => field.classList.contains("invalid"))?.focus();
      showToast("Please correct the highlighted fields.");
      return;
    }
    user = { name: document.getElementById("login-name").value.trim(), email: document.getElementById("login-email").value.trim() };
    storage.set("jewelnest-user", user);
    updateUserName();
    loginForm.reset();
    fields.forEach((field) => setFieldError(field, ""));
    closeLogin();
    showToast(`Login successful. Welcome, ${user.name}!`);
  });

  document.querySelectorAll("[data-close-modal]").forEach((button) => button.addEventListener("click", closeLogin));
  document.getElementById("logout-button").addEventListener("click", () => {
    user = null;
    storage.set("jewelnest-user", null);
    updateUserName();
    loginForm.hidden = false;
    document.querySelector(".login-subtitle").hidden = false;
    document.getElementById("account-view").hidden = true;
    document.getElementById("login-title").textContent = "Sign in to your account";
    closeLogin();
    showToast("You have been logged out.");
  });
  loginBackdrop.addEventListener("click", (event) => {
    if (event.target === loginBackdrop) closeLogin();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeLogin();
      closeDrawer();
    }
  });

  function updateUserName() {
    document.querySelectorAll("#nav-login-label").forEach((label) => {
      label.textContent = user ? user.name : "Login";
    });
  }

  function getProductId(title) {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  }

  function toggleList(list, product) {
    const id = product.id;
    const index = list.findIndex((item) => item.id === id);
    if (index >= 0) list.splice(index, 1);
    else list.push(product);
  }

  function updateCounts() {
    document.querySelectorAll("[data-wishlist-count]").forEach((node) => {
      node.textContent = wishlist.length;
      node.hidden = wishlist.length === 0;
    });
    document.querySelectorAll("[data-cart-count]").forEach((node) => {
      node.textContent = cart.length;
      node.hidden = cart.length === 0;
    });
  }

  function openDrawer(type) {
    drawerTitle.textContent = type === "wishlist" ? "My Wishlist" : "My Cart";
    renderDrawer(type);
    drawerBackdrop.hidden = false;
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
  }

  function closeDrawer() {
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
    setTimeout(() => { drawerBackdrop.hidden = true; }, 180);
  }

  function renderDrawer(type) {
    const items = type === "wishlist" ? wishlist : cart;
    if (!items.length) {
      drawerContent.innerHTML = `<div class="drawer-empty"><i class="fa ${type === "wishlist" ? "fa-heart-o" : "fa-shopping-bag"}"></i><h3>${type === "wishlist" ? "Your wishlist is empty" : "Your cart is empty"}</h3><p>Add a piece you love and find it here.</p></div>`;
      return;
    }
    drawerContent.innerHTML = items.map((item) => `
      <div class="drawer-item">
        ${item.image ? `<img src="${item.image}" alt="${item.title}">` : `<span class="drawer-item-icon"><i class="fa fa-diamond"></i></span>`}
        <div class="drawer-item-info">
          <h3>${item.title}</h3>
          ${item.price ? `<strong>${item.price}</strong>` : ""}
        </div>
        <button type="button" class="drawer-remove" data-remove-item="${item.id}" data-remove-type="${type}" aria-label="Remove ${item.title}">&times;</button>
      </div>
    `).join("");
  }

  drawerBackdrop.addEventListener("click", closeDrawer);
  document.querySelectorAll("[data-close-drawer]").forEach((button) => button.addEventListener("click", closeDrawer));
  document.querySelectorAll("[data-open-login]").forEach((button) => button.addEventListener("click", openLogin));
  document.querySelectorAll("[data-open-wishlist]").forEach((button) => button.addEventListener("click", () => openDrawer("wishlist")));
  document.querySelectorAll("[data-open-cart]").forEach((button) => button.addEventListener("click", () => openDrawer("cart")));

  drawerContent.addEventListener("click", (event) => {
    const button = event.target.closest("[data-remove-item]");
    if (!button) return;
    const type = button.dataset.removeType;
    if (type === "wishlist") wishlist = wishlist.filter((item) => item.id !== button.dataset.removeItem);
    else cart = cart.filter((item) => item.id !== button.dataset.removeItem);
    storage.set("jewelnest-wishlist", wishlist);
    storage.set("jewelnest-cart", cart);
    updateCounts();
    renderDrawer(type);
  });

  function addCardActions(card, titleElement, imageElement, priceElement) {
    if (!card || !titleElement) return;
    const title = titleElement.textContent.trim();
    const image = imageElement?.getAttribute("src") || "";
    const price = priceElement?.textContent.trim().replace(/\s+/g, " ") || "";
    const product = { id: getProductId(title), title, image, price };
    const actions = document.createElement("div");
    actions.className = "card-actions";
    actions.innerHTML = `
      <button type="button" class="card-action wishlist-action" aria-label="Add ${title} to wishlist"><i class="fa fa-heart-o"></i><span>Wishlist</span></button>
      <button type="button" class="card-action cart-action" aria-label="Add ${title} to cart"><i class="fa fa-shopping-bag"></i><span>Add to Cart</span></button>
    `;
    card.append(actions);

    const wishlistButton = actions.querySelector(".wishlist-action");
    const cartButton = actions.querySelector(".cart-action");

    function refreshButtons() {
      const wished = wishlist.some((item) => item.id === product.id);
      wishlistButton.classList.toggle("active", wished);
      wishlistButton.querySelector("i").className = wished ? "fa fa-heart" : "fa fa-heart-o";
    }

    wishlistButton.addEventListener("click", () => {
      toggleList(wishlist, product);
      storage.set("jewelnest-wishlist", wishlist);
      updateCounts();
      refreshButtons();
      showToast(wishlist.some((item) => item.id === product.id) ? "Added to wishlist." : "Removed from wishlist.");
    });
    cartButton.addEventListener("click", () => {
      if (!cart.some((item) => item.id === product.id)) {
        cart.push(product);
        storage.set("jewelnest-cart", cart);
        updateCounts();
        showToast("Added to cart.");
      } else {
        showToast("This item is already in your cart.");
      }
    });
    refreshButtons();
  }

  document.querySelectorAll(".feature-col").forEach((card) => {
    addCardActions(card, card.querySelector("h3"), card.querySelector("img"), card.querySelector(".feature-price strong"));
  });
  document.querySelectorAll(".arrival-card").forEach((card) => {
    addCardActions(card, card.querySelector("h3"), card.querySelector("img"), card.querySelector(".arrival-price strong"));
  });
  document.querySelectorAll(".collection-card").forEach((card) => {
    addCardActions(card.querySelector(".collection-card-body"), card.querySelector("h3"), card.querySelector("img"), null);
  });

  updateUserName();
  updateCounts();
});
