const discountBanner = document.getElementById("discount_banner");
const bannerClose = document.getElementById("banner-close");
const header = document.querySelector(".header");

if (bannerClose && discountBanner) {
  bannerClose.addEventListener("click", function () {
    discountBanner.classList.add("hidden");
    header.classList.add("banner-hidden");
  });
}

const burgerMenu = document.getElementById("burger-menu");
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuClose = document.getElementById("mobile-menu-close");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu__link");

if (burgerMenu && mobileMenu) {
  burgerMenu.addEventListener("click", function () {
    burgerMenu.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    document.body.classList.toggle("page__body--no-scroll");
  });
}

if (mobileMenuClose) {
  mobileMenuClose.addEventListener("click", function () {
    burgerMenu.classList.remove("active");
    mobileMenu.classList.remove("active");
    document.body.classList.remove("page__body--no-scroll");
  });
}

if (mobileMenuLinks.length > 0) {
  mobileMenuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      burgerMenu.classList.remove("active");
      mobileMenu.classList.remove("active");
      document.body.classList.remove("page__body--no-scroll");
    });
  });
}

document.addEventListener("keydown", function (e) {
  if (
    e.key === "Escape" &&
    mobileMenu &&
    mobileMenu.classList.contains("active")
  ) {
    burgerMenu.classList.remove("active");
    mobileMenu.classList.remove("active");
    document.body.classList.remove("page__body--no-scroll");
  }
});

const searchIcon = document.getElementById("search-icon");
const searchContainer = document.getElementById("search-container");

if (searchIcon && searchContainer) {
  searchIcon.addEventListener("click", function () {
    if (window.innerWidth > 768) {
      searchContainer.classList.toggle("active");
    }
  });

  document.addEventListener("click", function (e) {
    if (window.innerWidth > 768) {
      if (
        !searchContainer.contains(e.target) &&
        !searchIcon.contains(e.target)
      ) {
        searchContainer.classList.remove("active");
      }
    }
  });
}

window.addEventListener("resize", function () {
  if (
    window.innerWidth > 768 &&
    mobileMenu &&
    mobileMenu.classList.contains("active")
  ) {
    burgerMenu.classList.remove("active");
    mobileMenu.classList.remove("active");
    document.body.classList.remove("page__body--no-scroll");
  }

  if (searchContainer && searchContainer.classList.contains("active")) {
    searchContainer.classList.remove("active");
  }
});
