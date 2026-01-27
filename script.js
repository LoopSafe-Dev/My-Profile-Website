// ====== Mobile nav toggle ======
const toggleBtn = document.querySelector(".nav-toggle");
const navMenu = document.getElementById("navMenu");

if (toggleBtn && navMenu) {
  toggleBtn.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
    toggleBtn.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  // Close menu when a link is clicked (mobile)
  navMenu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      navMenu.classList.remove("open");
      toggleBtn.setAttribute("aria-expanded", "false");
      toggleBtn.setAttribute("aria-label", "Open menu");
    });
  });
}

// ====== Footer year ======
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// ====== Share + Copy utilities ======
function getSharePayload(key) {
  const base = window.location.origin && window.location.origin !== "null" ? window.location.origin : "";
  const url = base ? `${base}/${window.location.pathname.split("/").pop()}` : window.location.href;

  const map = {
    profile: {
      title: "Jackson Hanks | DevOps Engineer",
      text: "Check out Jackson Hanks (LoopSafe-Dev) — DevOps Engineer profile and projects. X/Twitter: @LoopsafeDev",
      url
    },
    project1: {
      title: "Project 1: CI/CD Pipeline Modernization",
      text: "CI/CD pipeline modernization — standardizing build/test/release workflows.",
      url: (base ? `${base}/project1.html` : "project1.html")
    },
    project2: {
      title: "Project 2: Infrastructure as Code Rollout",
      text: "Infrastructure as Code rollout — repeatable environments and reviewable changes.",
      url: (base ? `${base}/project2.html` : "project2.html")
    },
    project3: {
      title: "Project 3: Observability & Reliability Upgrade",
      text: "Observability upgrade — better alerts, dashboards, and incident response.",
      url: (base ? `${base}/project3.html` : "project3.html")
    }
  };

  return map[key] || map.profile;
}

async function share(key) {
  const payload = getSharePayload(key);

  // If Web Share API is available (mobile especially)
  if (navigator.share) {
    try {
      await navigator.share(payload);
      return;
    } catch {
      // fall through to copy
    }
  }

  // Fallback: copy link
  try {
    await navigator.clipboard.writeText(payload.url);
    alert("Link copied to clipboard!");
  } catch {
    alert("Could not share automatically. Copy this link:\n" + payload.url);
  }
}

document.querySelectorAll("[data-share]").forEach((btn) => {
  btn.addEventListener("click", () => share(btn.getAttribute("data-share")));
});

const copyBtn = document.querySelector("[data-copylink]");
const copyStatus = document.getElementById("copyStatus");

if (copyBtn) {
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      if (copyStatus) copyStatus.textContent = "Copied link to clipboard.";
    } catch {
      if (copyStatus) copyStatus.textContent = "Copy failed — your browser blocked clipboard access.";
    }
    setTimeout(() => {
      if (copyStatus) copyStatus.textContent = "";
    }, 2500);
  });
}

// ====== Contact form (mailto) ======
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(contactForm);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(`Website Contact: ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`
    );

    window.location.href = `mailto:jhanks87@icloud.com?subject=${subject}&body=${body}`;
  });
}
