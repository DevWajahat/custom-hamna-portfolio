/* ──────────────────────────────────────────────────────────────
   main.js – Universal script (Login + Dashboard) – Livewire‑ready + Bug Fixes
   ────────────────────────────────────────────────────────────── */
(() => {
    // --------------------------------------------------------------
    // 1. Helper: is GSAP loaded?
    // --------------------------------------------------------------
    const gsapReady = () => typeof gsap !== "undefined";

    // --------------------------------------------------------------
    // 2. Run the correct block (login / dashboard)
    // --------------------------------------------------------------
    const initPage = () => {
        if (!gsapReady()) {
            console.warn("GSAP not loaded yet – retrying in 100 ms");
            setTimeout(initPage, 100);
            return;
        }

        const isLogin =
            document.body.classList.contains("login-page") ||
            !!document.querySelector(".login-container");

        const isDashboard =
            document.body.classList.contains("dashboard-page") ||
            !!document.querySelector(".sidebar");

        if (isLogin) runLoginAnimations();
        if (isDashboard) runDashboardAnimations();
    };

    // --------------------------------------------------------------
    // 3. LOGIN PAGE (with password toggle listener – Livewire-ready)
    // --------------------------------------------------------------
    const runLoginAnimations = () => {
        // === INITIAL PAGE ANIMATIONS ===
        const loginContainer = document.querySelector(".login-container");
        if (loginContainer) {
            gsap.fromTo(
                loginContainer,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
            );
        }

        const formGroups = document.querySelectorAll(".form-group");
        if (formGroups.length) {
            gsap.fromTo(
                formGroups,
                { y: 20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: "power2.out",
                    stagger: 0.1,
                    delay: 0.3,
                }
            );
        }

        [
            "form-footer",
            "login-btn",
            "divider",
            "social-btn",
            "signup-link",
        ].forEach((selector, i) => {
            const els = document.querySelectorAll(`.${selector}`);
            if (els.length) {
                gsap.fromTo(
                    els,
                    { y: 20, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        ease: "power2.out",
                        stagger: selector === "social-btn" ? 0.08 : 0,
                        delay: 0.5 + i * 0.1,
                    }
                );
            }
        });

        const shapes = document.querySelectorAll(".shape");
        if (shapes.length) {
            gsap.fromTo(
                shapes,
                { opacity: 0 },
                { opacity: 1, duration: 1, ease: "power2.out", stagger: 0.15 }
            );
        }

        // === INPUT FOCUS ANIMATIONS ===
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

        // === LOGIN BUTTON HOVER ===
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

        // === SOCIAL BUTTONS ===
        document.querySelectorAll(".social-btn").forEach((btn) => {
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
                gsap.to(btn, {
                    duration: 0.3,
                    boxShadow: "0 0 0px rgba(180, 0, 255, 0)",
                    ease: "power2.out",
                });
            });
        });

        // === PASSWORD TOGGLE – RE-ATTACH EVERY TIME ===
        const passwordToggle = document.getElementById("passwordToggle");
        const passwordInput = document.getElementById("password");

        if (passwordToggle && passwordInput) {
            // Remove old listeners to prevent duplicates
            passwordToggle.replaceWith(passwordToggle.cloneNode(true));
            const newToggle = document.getElementById("passwordToggle");
            const toggleIcon = newToggle.querySelector("i");

            newToggle.addEventListener("click", (e) => {
                e.preventDefault();
                const isPassword = passwordInput.type === "password";
                passwordInput.type = isPassword ? "text" : "password";

                // Update icon
                toggleIcon.className = isPassword
                    ? "fas fa-eye-slash"
                    : "fas fa-eye";

                // Animate icon
                gsap.fromTo(
                    toggleIcon,
                    { rotation: isPassword ? 0 : 360 },
                    {
                        rotation: isPassword ? 360 : 0,
                        duration: 0.4,
                        ease: "power2.out",
                    }
                );
            });
        }
    };

    // --------------------------------------------------------------
    // 4. DASHBOARD PAGE – **Livewire‑compatible** with fixes for stuck animations and dropdown closing
    // --------------------------------------------------------------
    const runDashboardAnimations = () => {
        // Kill any existing tweens to prevent conflicts
        gsap.killTweensOf(
            ".sidebar, .header, .page-header, .stat-card, .project-card"
        );

        // ---- 4.1 Tab init -------------------------------------------------
        const tabPanes = document.querySelectorAll(".tab-pane");
        const tabBtns = document.querySelectorAll(".tab-btn");

        tabPanes.forEach((p) =>
            p.classList.toggle("active", p.id === "tab-overview")
        );
        tabBtns.forEach((b) => b.classList.remove("active"));
        if (tabBtns[0]) tabBtns[0].classList.add("active");

        // ---- 4.2 Load animations (using fromTo to force initial state and prevent trimming/stuck) ----
        gsap.fromTo(
            ".sidebar",
            { x: -100, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
                clearProps: "all",
            }
        );
        gsap.fromTo(
            ".header",
            { y: -50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
                delay: 0.2,
                clearProps: "all",
            }
        );
        gsap.fromTo(
            ".page-header",
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
                delay: 0.4,
                clearProps: "all",
            }
        );
        gsap.fromTo(
            ".stat-card",
            { y: 20, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.1,
                ease: "power2.out",
                delay: 0.6,
                clearProps: "all",
            }
        );
        gsap.fromTo(
            ".project-card",
            { y: 20, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.08,
                ease: "power2.out",
                delay: 0.7,
                clearProps: "all",
            }
        );

        // ---- 4.3 Hover helpers (stat cards) -------------------------------
        const addHover = (el, enter, leave) => {
            el.addEventListener("mouseenter", enter);
            el.addEventListener("mouseleave", leave);
        };

        document.querySelectorAll(".stat-card").forEach((card) => {
            addHover(
                card,
                () => {
                    gsap.to(card, {
                        y: -12,
                        boxShadow: "0 20px 60px rgba(180, 0, 255, 0.4)",
                        duration: 0.3,
                        ease: "power2.out",
                    });
                    gsap.to(card.querySelector(".stat-icon"), {
                        rotation: 360,
                        scale: 1.15,
                        duration: 0.35,
                        ease: "back.out",
                    });
                    gsap.to(card.querySelector(".stat-value"), {
                        scale: 1.1,
                        color: "#b400ff",
                        duration: 0.3,
                    });
                },
                () => {
                    gsap.to(card, {
                        y: 0,
                        boxShadow: "",
                        duration: 0.3,
                        clearProps: "boxShadow",
                    });
                    gsap.to(card.querySelector(".stat-icon"), {
                        rotation: 0,
                        scale: 1,
                        duration: 0.35,
                    });
                    gsap.to(card.querySelector(".stat-value"), {
                        scale: 1,
                        color: "#fff",
                        duration: 0.3,
                    });
                }
            );
        });

        // ---- 4.4 Project cards --------------------------------------------
        document.querySelectorAll(".project-card").forEach((card) => {
            addHover(
                card,
                () => {
                    gsap.to(card, {
                        y: -16,
                        boxShadow: "0 30px 80px rgba(180, 0, 255, 0.5)",
                        duration: 0.4,
                        ease: "power3.out",
                    });
                    gsap.to(card.querySelector(".project-image"), {
                        scale: 1.08,
                        duration: 0.4,
                    });
                    gsap.to(card.querySelector(".project-info"), {
                        opacity: 0.95,
                        duration: 0.3,
                    });
                },
                () => {
                    gsap.to(card, {
                        y: 0,
                        boxShadow: "",
                        duration: 0.4,
                        clearProps: "boxShadow",
                    });
                    gsap.to(card.querySelector(".project-image"), {
                        scale: 1,
                        duration: 0.4,
                    });
                    gsap.to(card.querySelector(".project-info"), {
                        opacity: 1,
                        duration: 0.3,
                    }); // Assume default opacity 1
                }
            );
        });

        // ---- 4.5 Tab switching --------------------------------------------
        tabBtns.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                const tab = btn.dataset.tab;
                tabBtns.forEach((b) => b.classList.remove("active"));
                tabPanes.forEach((p) => p.classList.remove("active"));
                btn.classList.add("active");
                const pane = document.getElementById(`tab-${tab}`);
                if (pane) {
                    pane.classList.add("active");
                    const items = pane.querySelectorAll(
                        ".stat-card,.project-card,.metric-item,.quick-stat,.insight-item"
                    );
                    gsap.fromTo(
                        items,
                        { y: 15, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.4,
                            stagger: 0.05,
                            ease: "power2.out",
                        }
                    );
                }
            });
        });

        // ---- 4.6 Header buttons (notifications, profile…) -----------------
        document.querySelectorAll(".header-btn").forEach((btn) => {
            addHover(
                btn,
                () => {
                    gsap.to(btn, {
                        scale: 1.15,
                        duration: 0.3,
                        ease: "back.out(1.7)",
                    });
                    const i = btn.querySelector("i");
                    if (i) gsap.to(i, { rotation: 20, duration: 0.3 });
                },
                () => {
                    gsap.to(btn, { scale: 1, duration: 0.3 });
                    const i = btn.querySelector("i");
                    if (i) gsap.to(i, { rotation: 0, duration: 0.3 });
                }
            );
        });

        // ---- 4.7 DROPDOWN (main level) ------------------------------------
        // === 7. ADMINLTE-STYLE DROPDOWNS (Click + Hover) ===
        // === 7. ULTRA-SMOOTH COLLAPSIBLE DROPDOWNS (Click Only) ===
        document.querySelectorAll(".dropdown-toggle").forEach((toggle) => {
            toggle.addEventListener("click", function (e) {
                e.preventDefault();
                e.stopPropagation();

                const parent = this.closest(".nav-dropdown, .dropdown-submenu");
                const menu = parent.querySelector(".dropdown-menu, .submenu");
                const icon = this.querySelector(
                    ".dropdown-icon, .submenu-icon"
                );
                const isOpen = parent.classList.contains("open");

                // Close others
                document
                    .querySelectorAll(
                        ".nav-dropdown.open, .dropdown-submenu.open"
                    )
                    .forEach((open) => {
                        if (open !== parent) {
                            const openMenu = open.querySelector(
                                ".dropdown-menu, .submenu"
                            );
                            const openIcon = open.querySelector(
                                ".dropdown-icon, .submenu-icon"
                            );
                            gsap.to(openMenu, {
                                maxHeight: 0,
                                duration: 0.28,
                                ease: "power2.in",
                            });
                            open.classList.remove("open");
                            if (openIcon)
                                gsap.to(openIcon, {
                                    rotation: 0,
                                    duration: 0.28,
                                });
                        }
                    });

                if (isOpen) {
                    // Close
                    gsap.to(menu, {
                        maxHeight: 0,
                        duration: 0.28,
                        ease: "power2.in",
                        onComplete: () => parent.classList.remove("open"),
                    });
                    if (icon) gsap.to(icon, { rotation: 0, duration: 0.28 });
                } else {
                    // Open – Measure height AFTER reflow
                    menu.style.maxHeight = "none"; // Temporarily unlock
                    const targetHeight = menu.scrollHeight + 20;
                    menu.style.maxHeight = "0px"; // Reset

                    parent.classList.add("open");

                    gsap.fromTo(
                        menu,
                        { maxHeight: 0 },
                        {
                            maxHeight: targetHeight,
                            duration: 0.35,
                            ease: "power3.out",
                            onComplete: () => {
                                // Optional: Lock to content height
                                // menu.style.maxHeight = 'none';
                            },
                        }
                    );

                    if (icon) {
                        const rotation = icon.classList.contains("submenu-icon")
                            ? 90
                            : 180;
                        gsap.to(icon, {
                            rotation,
                            duration: 0.35,
                            ease: "power3.out",
                        });
                    }

                    // Animate items
                    const items = menu.querySelectorAll(".dropdown-item");
                    gsap.fromTo(
                        items,
                        { x: -12, opacity: 0 },
                        {
                            x: 0,
                            opacity: 1,
                            duration: 0.3,
                            stagger: 0.03,
                            ease: "power2.out",
                        }
                    );
                }

                this.setAttribute("aria-expanded", !isOpen);
            });
        });

        // Close on outside click
        document.addEventListener("click", () => {
            document
                .querySelectorAll(".nav-dropdown.open, .dropdown-submenu.open")
                .forEach((open) => {
                    const menu = open.querySelector(".dropdown-menu, .submenu");
                    const icon = open.querySelector(
                        ".dropdown-icon, .submenu-icon"
                    );
                    gsap.to(menu, {
                        maxHeight: 0,
                        duration: 0.28,
                        ease: "power2.in",
                    });
                    open.classList.remove("open");
                    if (icon) gsap.to(icon, { rotation: 0, duration: 0.28 });
                });
        });

        // Optional: Hover open (AdminLTE style)
        // document.querySelectorAll(".nav-dropdown").forEach((dropdown) => {
        //     dropdown.addEventListener("mouseenter", () => {
        //         const menu = dropdown.querySelector(".dropdown-menu");
        //         if (menu && window.innerWidth > 768) {
        //             menu.classList.add("show");
        //             dropdown
        //                 .querySelector(".dropdown-toggle")
        //                 ?.setAttribute("aria-expanded", "true");
        //         }
        //     });
        //     dropdown.addEventListener("mouseleave", () => {
        //         const menu = dropdown.querySelector(".dropdown-menu");
        //         if (menu && window.innerWidth > 768) {
        //             menu.classList.remove("show");
        //             dropdown
        //                 .querySelector(".dropdown-toggle")
        //                 ?.setAttribute("aria-expanded", "false");
        //         }
        //     });
        // });
        // ---- 4.8 SUB‑MENU --------------------------------------------------
        document
            .querySelectorAll(".dropdown-submenu > .dropdown-item")
            .forEach((toggle) => {
                toggle.addEventListener("click", (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const sub = toggle.closest(".dropdown-submenu");
                    const menu = sub.querySelector(".submenu");
                    const icon = toggle.querySelector(".submenu-icon");
                    const open = sub.classList.contains("open");

                    if (open) {
                        gsap.to(menu, {
                            maxHeight: 0,
                            duration: 0.3,
                            ease: "power2.in",
                        });
                        sub.classList.remove("open");
                        if (icon) gsap.to(icon, { rotation: 0, duration: 0.4 });
                    } else {
                        const h = menu.scrollHeight + 20;
                        gsap.fromTo(
                            menu,
                            { maxHeight: 0 },
                            { maxHeight: h, duration: 0.35, ease: "power2.out" }
                        );
                        sub.classList.add("open");
                        if (icon)
                            gsap.to(icon, { rotation: 90, duration: 0.4 });
                        const items = menu.querySelectorAll(".dropdown-item");
                        gsap.fromTo(
                            items,
                            { x: -10, opacity: 0 },
                            { x: 0, opacity: 1, duration: 0.25, stagger: 0.03 }
                        );
                    }
                });
            });

        // ---- 4.9 Metric bars -----------------------------------------------
        document.querySelectorAll(".metric-item").forEach((item) => {
            addHover(
                item,
                () => {
                    gsap.to(item, { x: 10, duration: 0.25 });
                    const f = item.querySelector(".metric-fill");
                    if (f)
                        gsap.to(f, {
                            boxShadow: "0 0 25px rgba(180, 0, 255, 0.6)",
                            duration: 0.4,
                        });
                },
                () => {
                    gsap.to(item, { x: 0, duration: 0.25 });
                    const f = item.querySelector(".metric-fill");
                    if (f)
                        gsap.to(f, {
                            boxShadow: "0 0 15px rgba(180, 0, 255, 0.4)",
                            duration: 0.25,
                        });
                }
            );
        });

        // ---- 4.10 Search box focus ----------------------------------------
        const search = document.querySelector(".search-box input");
        if (search) {
            search.addEventListener("focus", () => {
                gsap.to(".search-box", {
                    boxShadow: "0 0 30px rgba(180, 0, 255, 0.4)",
                    duration: 0.3,
                });
                gsap.to(search, { scale: 1.02, duration: 0.3 });
            });
            search.addEventListener("blur", () => {
                gsap.to(".search-box", {
                    boxShadow: "0 0 0px rgba(180, 0, 255, 0)",
                    duration: 0.3,
                });
                gsap.to(search, { scale: 1, duration: 0.3 });
            });
        }

        // ---- 4.11 Sidebar toggle -------------------------------------------
        const sidebarToggle = document.getElementById("sidebarToggle");
        const sidebar = document.getElementById("sidebar");
        if (sidebarToggle && sidebar) {
            sidebarToggle.addEventListener("click", () => {
                const open = sidebar.classList.toggle("open");
                gsap.to(sidebar, {
                    x: open ? 0 : -sidebar.offsetWidth,
                    duration: 0.4,
                    ease: open ? "power2.out" : "power2.in",
                    clearProps: "x",
                });
            });
        }
    };

    // --------------------------------------------------------------
    // 5. Global close dropdown on outside click (added once, prevents piling)
    // --------------------------------------------------------------
    document.addEventListener(
        "click",
        () => {
            document.querySelectorAll(".nav-dropdown.open").forEach((d) => {
                const menu = d.querySelector(".dropdown-menu");
                gsap.to(menu, {
                    maxHeight: 0,
                    duration: 0.3,
                    ease: "power2.in",
                });
                d.classList.remove("open");
                const icon = d.querySelector(".dropdown-icon");
                if (icon) gsap.to(icon, { rotation: 0, duration: 0.4 });
            });
            document.querySelectorAll(".dropdown-submenu.open").forEach((s) => {
                const menu = s.querySelector(".submenu");
                gsap.to(menu, {
                    maxHeight: 0,
                    duration: 0.3,
                    ease: "power2.in",
                });
                s.classList.remove("open");
                const icon = s.querySelector(".submenu-icon");
                if (icon) gsap.to(icon, { rotation: 0, duration: 0.4 });
            });
        },
        { once: false }
    );

    // --------------------------------------------------------------
    // 6. Run on first load
    // --------------------------------------------------------------
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initPage);
    } else {
        initPage();
    }

    // --------------------------------------------------------------
    // 7. **Livewire navigation** – re‑run with increased delay for DOM settle
    // --------------------------------------------------------------
    document.addEventListener("livewire:navigated", () => {
        // Increased timeout for Livewire DOM updates
        requestAnimationFrame(() => setTimeout(initPage, 200));
    });

    // Livewire < 3 uses `livewire:load` – keep it for older versions
    document.addEventListener("livewire:load", initPage);
})();
