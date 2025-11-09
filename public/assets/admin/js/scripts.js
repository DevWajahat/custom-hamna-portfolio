
const gsap = window.gsap

document.addEventListener("DOMContentLoaded", () => {
  const tabPanes = document.querySelectorAll(".tab-pane")
  tabPanes.forEach((pane) => {
    if (pane.id === "tab-overview") {
      pane.classList.add("active")
    } else {
      pane.classList.remove("active")
    }
  })

  const tabBtns = document.querySelectorAll(".tab-btn")
  tabBtns.forEach((btn) => {
    btn.classList.remove("active")
  })
  if (tabBtns[0]) {
    tabBtns[0].classList.add("active")
  }
})

// Animate sidebar on load
gsap.from(".sidebar", {
  duration: 0.8,
  x: -100,
  opacity: 0,
  ease: "power3.out",
})

// Animate header on load
gsap.from(".header", {
  duration: 0.8,
  y: -50,
  opacity: 0,
  ease: "power3.out",
  delay: 0.2,
})

// Animate page header on load
gsap.from(".page-header", {
  duration: 0.8,
  y: 30,
  opacity: 0,
  ease: "power2.out",
  delay: 0.4,
})

// Animate stat cards on load
gsap.from(".stat-card", {
  duration: 0.5,
  y: 20,
  opacity: 0,
  ease: "power2.out",
  stagger: 0,
  delay: 0.2,
})

// Animate project cards on load
gsap.from(".project-card", {
  duration: 0.5,
  y: 20,
  opacity: 0,
  ease: "power2.out",
  stagger: 0,
  delay: 0.1,
})

document.querySelectorAll(".stat-card").forEach((card, index) => {
  card.addEventListener("mouseenter", function () {
    gsap.to(this, {
      duration: 0.3,
      y: -12,
      boxShadow: "0 20px 60px rgba(180, 0, 255, 0.4)",
      ease: "power2.out",
    })

    // Animate icon
    gsap.to(this.querySelector(".stat-icon"), {
      duration: 0.35,
      rotation: 360,
      scale: 1.15,
      ease: "back.out",
    })

    // Animate value
    gsap.to(this.querySelector(".stat-value"), {
      duration: 0.3,
      scale: 1.1,
      color: "#b400ff",
      ease: "power2.out",
    })
  })

  card.addEventListener("mouseleave", function () {
    gsap.to(this, {
      duration: 0.3,
      y: 0,
      ease: "power2.inOut",
    })

    gsap.to(this.querySelector(".stat-icon"), {
      duration: 0.35,
      rotation: 0,
      scale: 1,
      ease: "back.out",
    })

    gsap.to(this.querySelector(".stat-value"), {
      duration: 0.3,
      scale: 1,
      color: "#fff",
      ease: "power2.out",
    })
  })
})

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    gsap.to(this, {
      duration: 0.4,
      y: -16,
      boxShadow: "0 30px 80px rgba(180, 0, 255, 0.5)",
      ease: "power3.out",
    })

    gsap.to(this.querySelector(".project-image"), {
      duration: 0.4,
      scale: 1.08,
      ease: "power2.out",
    })

    gsap.to(this.querySelector(".project-info"), {
      duration: 0.3,
      opacity: 0.95,
      ease: "power1.out",
    })
  })

  card.addEventListener("mouseleave", function () {
    gsap.to(this, {
      duration: 0.4,
      y: 0,
      ease: "power2.inOut",
    })

    gsap.to(this.querySelector(".project-image"), {
      duration: 0.4,
      scale: 1,
      ease: "power2.out",
    })
  })
})

const tabBtns = document.querySelectorAll(".tab-btn")
const tabPanes = document.querySelectorAll(".tab-pane")

tabBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault()
    const tabName = this.dataset.tab

    // Remove active from all buttons and panes
    tabBtns.forEach((b) => b.classList.remove("active"))
    tabPanes.forEach((pane) => pane.classList.remove("active"))

    // Add active to current button and pane
    this.classList.add("active")
    const activePane = document.getElementById(`tab-${tabName}`)
    if (activePane) {
      activePane.classList.add("active")

      const items = activePane.querySelectorAll(".stat-card, .project-card, .metric-item, .quick-stat, .insight-item")
      gsap.set(items, { opacity: 1 })
      gsap.from(items, {
        duration: 0.4,
        y: 15,
        ease: "power2.out",
        stagger: 0,
      })
    }
  })
})

document.querySelectorAll(".header-btn").forEach((btn) => {
  btn.addEventListener("mouseenter", function () {
    gsap.to(this, {
      duration: 0.3,
      scale: 1.15,
      ease: "back.out(1.7)",
    })

    gsap.to(this.querySelector("i"), {
      duration: 0.3,
      rotation: 20,
      ease: "power2.out",
    })
  })

  btn.addEventListener("mouseleave", function () {
    gsap.to(this, {
      duration: 0.3,
      scale: 1,
      ease: "back.out",
    })

    gsap.to(this.querySelector("i"), {
      duration: 0.3,
      rotation: 0,
      ease: "power2.out",
    })
  })
})

const dropdownToggles = document.querySelectorAll(".dropdown-toggle")

dropdownToggles.forEach((toggle) => {
  toggle.addEventListener("click", function (e) {
    e.preventDefault()

    const parentNav = this.closest(".nav-dropdown")
    if (parentNav) {
      const isOpen = parentNav.classList.contains("open")
      const menu = parentNav.querySelector(".dropdown-menu")

      // Close all other dropdowns
      document.querySelectorAll(".nav-dropdown.open").forEach((nav) => {
        if (nav !== parentNav) {
          const otherMenu = nav.querySelector(".dropdown-menu")
          gsap.to(otherMenu, {
            duration: 0.3,
            maxHeight: 0,
            ease: "power2.in",
          })
          nav.classList.remove("open")
        }
      })

      if (isOpen) {
        // Close dropdown
        gsap.to(menu, {
          duration: 0.3,
          maxHeight: 0,
          ease: "power2.in",
        })
        parentNav.classList.remove("open")

        gsap.to(this.querySelector(".dropdown-icon"), {
          duration: 0.4,
          rotation: 0,
          ease: "power2.out",
        })
      } else {
        gsap.set(menu, { maxHeight: "500px" })
        gsap.from(menu, {
          duration: 0.35,
          maxHeight: 0,
          ease: "power2.out",
        })
        parentNav.classList.add("open")

        const items = menu.querySelectorAll(".dropdown-item")
        gsap.set(items, { opacity: 1, x: 0 })
        gsap.from(items, {
          duration: 0.25,
          opacity: 0,
          x: -10,
          ease: "power2.out",
          stagger: 0.03,
        })

        gsap.to(this.querySelector(".dropdown-icon"), {
          duration: 0.4,
          rotation: 180,
          ease: "power2.out",
        })
      }
    }
  })
})

const submenuToggles = document.querySelectorAll(".dropdown-submenu > .dropdown-item")

submenuToggles.forEach((toggle) => {
  toggle.addEventListener("click", function (e) {
    e.preventDefault()

    const parentSubmenu = this.closest(".dropdown-submenu")
    if (parentSubmenu) {
      const isOpen = parentSubmenu.classList.contains("open")
      const submenu = parentSubmenu.querySelector(".submenu")

      if (isOpen) {
        gsap.to(submenu, {
          duration: 0.3,
          maxHeight: 0,
          ease: "power2.in",
        })
        parentSubmenu.classList.remove("open")

        gsap.to(this.querySelector(".submenu-icon"), {
          duration: 0.4,
          rotation: 0,
          ease: "power2.out",
        })
      } else {
        gsap.set(submenu, { maxHeight: "300px" })
        gsap.from(submenu, {
          duration: 0.35,
          maxHeight: 0,
          ease: "power2.out",
        })
        parentSubmenu.classList.add("open")

        const subItems = submenu.querySelectorAll(".dropdown-item")
        gsap.set(subItems, { opacity: 1, x: 0 })
        gsap.to(subItems, {
          duration: 0.25,
          opacity: 1,
          x: 0,
          ease: "power2.out",
          stagger: 0.03,
        })

        gsap.to(this.querySelector(".submenu-icon"), {
          duration: 0.4,
          rotation: 90,
          ease: "power2.out",
        })
      }
    }
  })
})

document.querySelectorAll(".metric-item").forEach((item) => {
  item.addEventListener("mouseenter", function () {
    gsap.to(this, {
      duration: 0.25,
      x: 10,
      ease: "power2.out",
    })

    const fill = this.querySelector(".metric-fill")
    gsap.to(fill, {
      duration: 0.4,
      boxShadow: "0 0 25px rgba(180, 0, 255, 0.6)",
      ease: "power1.out",
    })
  })

  item.addEventListener("mouseleave", function () {
    gsap.to(this, {
      duration: 0.25,
      x: 0,
      ease: "power2.out",
    })

    const fill = this.querySelector(".metric-fill")
    gsap.to(fill, {
      duration: 0.25,
      boxShadow: "0 0 15px rgba(180, 0, 255, 0.4)",
      ease: "power1.out",
    })
  })
})

const searchInput = document.querySelector(".search-box input")
if (searchInput) {
  searchInput.addEventListener("focus", function () {
    gsap.to(".search-box", {
      duration: 0.3,
      boxShadow: "0 0 30px rgba(180, 0, 255, 0.4)",
      ease: "power2.out",
    })

    gsap.to(this, {
      duration: 0.3,
      scale: 1.02,
      ease: "power2.out",
    })
  })

  searchInput.addEventListener("blur", function () {
    gsap.to(".search-box", {
      duration: 0.3,
      boxShadow: "0 0 0px rgba(180, 0, 255, 0)",
      ease: "power2.out",
    })

    gsap.to(this, {
      duration: 0.3,
      scale: 1,
      ease: "power2.out",
    })
  })
}

const sidebarToggle = document.getElementById("sidebarToggle")
const sidebar = document.getElementById("sidebar")

if (sidebarToggle) {
  sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("open")

    if (sidebar.classList.contains("open")) {
      gsap.to(".sidebar", {
        duration: 0.4,
        x: 0,
        ease: "power2.out",
      })
    } else {
      gsap.to(".sidebar", {
        duration: 0.4,
        x: -100,
        ease: "power2.in",
      })
    }
  })
}
