// login.js - FIXED VERSION
const gsap = window.gsap;

document.addEventListener("DOMContentLoaded", () => {
  // === 1. INITIAL PAGE ANIMATIONS (safe) ===
  const loginContainer = document.querySelector(".login-container");
  if (loginContainer) {
    gsap.from(loginContainer, {
      duration: 0.8,
      y: 50,
      opacity: 0,
      ease: "power3.out",
    });
  }

  // Animate form groups
  const formGroups = document.querySelectorAll(".form-group");
  if (formGroups.length) {
    gsap.from(formGroups, {
      duration: 0.6,
      y: 20,
      opacity: 0,
      ease: "power2.out",
      stagger: 0.1,
      delay: 0.3,
    });
  }

  // Animate footer, button, divider, social, signup
  ["form-footer", "login-btn", "divider", "social-btn", "signup-link"].forEach((selector, i) => {
    const els = document.querySelectorAll(`.${selector}`);
    if (els.length) {
      gsap.from(els, {
        duration: 0.6,
        y: 20,
        opacity: 0,
        ease: "power2.out",
        stagger: selector === "social-btn" ? 0.08 : 0,
        delay: 0.5 + i * 0.1,
      });
    }
  });

  // Floating shapes
  const shapes = document.querySelectorAll(".shape");
  if (shapes.length) {
    gsap.from(shapes, {
      duration: 1,
      opacity: 0,
      ease: "power2.out",
      stagger: 0.15,
    });
  }

  // === 2. INPUT FOCUS ANIMATIONS (safe) ===
  const inputs = document.querySelectorAll(".form-input");
  inputs.forEach((input) => {
    const wrapper = input.closest(".input-wrapper");
    if (!wrapper) return;

    const icon = wrapper.querySelector(".input-icon");
    if (!icon) return;

    input.addEventListener("focus", () => {
      gsap.to(icon, {
        duration: 0.3,
        color: "#b400ff",
        scale: 1.2,
        ease: "back.out",
      });
    });

    input.addEventListener("blur", () => {
      gsap.to(icon, {
        duration: 0.3,
        color: "rgba(180, 0, 255, 0.6)",
        scale: 1,
        ease: "back.out",
      });
    });
  });

  // === 3. LOGIN BUTTON HOVER (safe) ===
  const loginBtn = document.querySelector(".login-btn");
  if (loginBtn) {
    loginBtn.addEventListener("mouseenter", () => {
      gsap.to(loginBtn, {
        duration: 0.3,
        scale: 1.03,
        ease: "back.out",
      });
    });

    loginBtn.addEventListener("mouseleave", () => {
      gsap.to(loginBtn, {
        duration: 0.3,
        scale: 1,
        ease: "back.out",
      });
    });
  }

  // === 4. SOCIAL BUTTONS (safe) ===
  const socialBtns = document.querySelectorAll(".social-btn");
  socialBtns.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, {
        duration: 0.3,
        scale: 1.15,
        ease: "back.out(1.7)",
      });
      gsap.to(btn, {
        duration: 0.4,
        boxShadow: "0 10px 30px rgba(180, 0, 255, 0.35)",
        ease: "power2.out",
      });
    });

    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, { duration: 0.3, scale: 1, ease: "back.out" });
      gsap.to(btn, { duration: 0.3, boxShadow: "0 0 0px rgba(180, 0, 255, 0)", ease: "power2.out" });
    });
  });

  // === 5. PASSWORD TOGGLE (CRITICAL FIX) ===
  const passwordToggle = document.getElementById("passwordToggle");
  const passwordInput = document.getElementById("password");

  if (passwordToggle && passwordInput) {
    const toggleIcon = passwordToggle.querySelector("i");
    if (!toggleIcon) return;

    passwordToggle.addEventListener("click", (e) => {
      e.preventDefault();
      const isPassword = passwordInput.type === "password";
      passwordInput.type = isPassword ? "text" : "password";

      gsap.to(toggleIcon, {
        duration: 0.3,
        rotation: isPassword ? 360 : 0,
        ease: "power2.out",
      });
    });
  }

  // === 6. FORM SUBMISSION (safe) ===
//   const loginForm = document.getElementById("loginForm");
//   if (loginForm) {
//     loginForm.addEventListener("submit", (e) => {
//       e.preventDefault();

//       const email = document.getElementById("email");
//       const password = document.getElementById("password");
//       if (!email || !password) return;

//       let isValid = true;

//     //   // Email validation
//     //   if (!email.value.includes("@")) {
//     //     showError("emailError", "Please enter a valid email");
//     //     isValid = false;
//     //   } else {
//     //     clearError("emailError");
//     //   }

//     //   // Password validation
//     //   if (password.value.length < 6) {
//     //     showError("passwordError", "Password must be at least 6 characters");
//     //     isValid = false;
//     //   } else {
//     //     clearError("passwordError");
//     //   }

//       if (isValid) {
//         const btn = document.querySelector(".login-btn");
//         if (btn) {
//           gsap.to(btn, { duration: 0.3, scale: 0.95, ease: "power2.out" });
//           setTimeout(() => {
//             gsap.to(btn, { duration: 0.3, scale: 1, ease: "power2.out" });
//             alert("Login successful! Redirecting...");
//             window.location.href = "index.html";
//           }, 300);
//         }
//       }
//     });
//   }

  // === 7. ERROR HELPER FUNCTIONS (safe) ===
//   function showError(errorId, message) {
//     const errorEl = document.getElementById(errorId);
//     if (!errorEl) return;
//     errorEl.textContent = message;
//     errorEl.classList.add("show");
//     gsap.from(errorEl, { duration: 0.3, y: -10, opacity: 0, ease: "power2.out" });
//   }

  function clearError(errorId) {
    const errorEl = document.getElementById(errorId);
    if (!errorEl) return;
    errorEl.textContent = "";
    errorEl.classList.remove("show");
  }
});
