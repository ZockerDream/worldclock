/**
 * Initializes the world clocks on the main page.
 */
function startWorldClock() {
  const clockCards = document.querySelectorAll(".clock-card");

  function update() {
    clockCards.forEach((card) => {
      updateSingleClock(card);
    });

    // Efficient updates via requestAnimationFrame
    requestAnimationFrame(update);
  }

  update();
}

/**
 * Updates a single clock card based on its timezone.
 * @param {HTMLElement} card - The clock card DOM element.
 */
function updateSingleClock(card) {
  const timezone = card.dataset.timezone;
  if (!timezone) return;

  const now = new Date();

  // Time formatting for the selected timezone (24-hour format)
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const timeString = formatter.format(now);

  // Date formatting for the selected timezone
  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  // Update digital time and date display
  card.querySelector(".clock-card__time").textContent = timeString;
  card.querySelector(".clock-card__date").textContent =
    dateFormatter.format(now);

  // Update analog hands
  updateHands(card, now, timezone);
}

/**
 * Calculates rotation for the analog hands.
 * @param {HTMLElement} card - The clock card.
 * @param {Date} date - The current date object.
 * @param {string} timezone - The clock timezone.
 */
function updateHands(card, date, timezone) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  });

  const parts = formatter.formatToParts(date);
  let h, m, s;

  // Extract time parts
  parts.forEach((part) => {
    if (part.type === "hour") h = parseInt(part.value);
    if (part.type === "minute") m = parseInt(part.value);
    if (part.type === "second") s = parseInt(part.value);
  });

  // Calculate rotation degrees
  const sDeg = (s / 60) * 360;
  const mDeg = (m / 60) * 360 + (s / 60) * 6;
  const hDeg = (h / 12) * 360 + (m / 60) * 30;

  // Apply hand transforms
  card.querySelector(".clock-face__hand--second").style.transform =
    `translateX(-50%) rotate(${sDeg}deg)`;
  card.querySelector(".clock-face__hand--minute").style.transform =
    `translateX(-50%) rotate(${mDeg}deg)`;
  card.querySelector(".clock-face__hand--hour").style.transform =
    `translateX(-50%) rotate(${hDeg}deg)`;
}

/**
 * Initializes the binary clock.
 */
function startBinaryClock() {
  const container = document.querySelector(".binary-clock__container");
  if (!container) return;

  function update() {
    const now = new Date();
    const timezone = container.dataset.timezone || "UTC";

    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    const timeString = formatter.format(now);
    const parts = timeString.split(":");

    // Split time strings (hh, mm, ss) into individual digits
    const hStr = parts[0]; 
    const mStr = parts[1]; 
    const sStr = parts[2]; 

    // Update all 6 binary clock columns
    updateColumn(container, "h1", hStr[0]);
    updateColumn(container, "h2", hStr[1]);
    updateColumn(container, "m1", mStr[0]);
    updateColumn(container, "m2", mStr[1]);
    updateColumn(container, "s1", sStr[0]);
    updateColumn(container, "s2", sStr[1]);

    // Update digital time below the binary clock
    document.getElementById("digital-time").textContent = timeString;

    requestAnimationFrame(update);
  }

  update();
}

/**
 * Updates a single column of the binary clock.
 * @param {HTMLElement} container - The main binary clock container.
 * @param {string} colName - Column name (e.g. "h1").
 * @param {string} value - The digit value (0-9).
 */
function updateColumn(container, colName, value) {
  const col = container.querySelector(`.binary-column[data-col="${colName}"]`);
  const val = parseInt(value);

  // Set numeric label at the bottom
  col.querySelector(".binary-column__label").textContent = val;

  // Check bits (8, 4, 2, 1) and toggle the "active" class (binary logic)
  const bits = [8, 4, 2, 1];
  bits.forEach((bit) => {
    const dot = col.querySelector(`.binary-bit[data-bit="${bit}"]`);
    if ((val & bit) === bit) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

// Start when the document is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".worldclock__grid")) {
    startWorldClock();
  }

  if (document.querySelector(".binary-clock__container")) {
    startBinaryClock();
  }
});
