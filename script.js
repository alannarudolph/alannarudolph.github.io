const projects = [
  {
    title: "Robotic Arm",
    meta: "Personal Project · Ongoing",
    categories: ["robotics", "mechanical"],
    description: "Custom 5DOF hardware platform for exploratory learning in robotic manipulation.",
    details: [
      "Simulation-to-real pick-and-place motion using Robotics Toolbox for MATLAB.",
      "Modelled in SolidWorks and 3D printed in PLA.",
      "Programmed in Arduino and powered by a 5V portable battery."
    ],
    images: 5
  },
  {
    title: "Automated Cable Verification PCB",
    meta: "Qidni Labs · Hardware Engineering Intern · Summer 2026",
    categories: ["electrical", "manufacturing"],
    description: "First stage of an electrical/firmware testing platform: automated continuity verification for 15 cable types.",
    details: [
      "Proposed and documented stages for a broader electrical/firmware testing platform.",
      "Designed the circuit and documented design decisions such as MCU selection.",
      "Independently completed schematic and PCB layout in Altium.",
      "Result: platform for continuity testing of 15 unique cable types."
    ],
    images: 3
  },
  {
    title: "IEEE EMC-SPI Student Hardware Competition",
    meta: "Student Team Competition · Winter 2026",
    categories: ["robotics", "electrical", "mechanical"],
    description: "Small instrumented car and robotic-arm interaction system for EMC emissions testing. 2nd place worldwide.",
    details: [
      "Designed a lightweight chassis with an onboard battery and locating features for robotic-arm interaction.",
      "Designed a robot end-effector gripper for interacting with the car during measurements.",
      "Designed the KiCad PCB schematic including power, Arduino integration, onboard sensors, and buttons."
    ],
    images: 3
  },
  {
    title: "Automated Agitation Jig",
    meta: "Kardium · Mechanical Engineering Co-op · Fall 2025",
    categories: ["mechanical", "manufacturing"],
    description: "Fully pneumatic jig replacing a manual agitation cleaning step involving isopropyl alcohol.",
    details: [
      "Used an air-powered motor and crank to create the agitation motion.",
      "Ball-bearing guiderails provided smooth back-and-forth bucket movement.",
      "Bucket material was selected from material already approved for IPA use.",
      "Magnetic hinged clasps secured the lid while maintaining easy access."
    ],
    images: 3
  },
  {
    title: "Catheter Vacuum Verification Jig",
    meta: "Kardium · Mechanical Engineering Co-op · Fall 2025",
    categories: ["mechanical", "manufacturing"],
    description: "Redesigned, built, and verified a pneumatic vacuum-testing jig for a medical device.",
    details: [
      "Required pressure range was ≤ -3 kPa and ≥ -5 kPa, with average ≤ -4 kPa.",
      "Achieved ±0.05 kPa accuracy.",
      "Acrylic chamber, pressure regulator, Venturi pump, vacuum reservoir, and valve produced the required pressure cycle.",
      "Completed Test Method Validation for use in design verification testing."
    ],
    images: 6
  },
  {
    title: "Liquid Management Jig",
    meta: "Kardium · Mechanical Engineering Co-op · Fall 2025",
    categories: ["mechanical", "manufacturing"],
    description: "Movable 20 L cart with a pneumatic bidirectional pumping system for filling and emptying test setups.",
    details: [
      "Designed around a gravity-draining tank so liquid could be fully removed.",
      "Diverting valve selected pump direction; regulator controlled pumping speed.",
      "Included a pneumatic emergency stop.",
      "Delrin mounts were manually machined, with a manually manufactured stainless baseplate and PLA printed parts.",
      "Widened the base instead of adding impractical ballast after stability calculations."
    ],
    images: 7
  },
  {
    title: "Electrical Catheter Test Jig",
    meta: "Kardium · Mechanical Engineering Co-op · Fall 2025",
    categories: ["electrical", "mechanical"],
    description: "Jig for electrically connecting individual catheter electrodes for the electrical testing team.",
    details: [
      "Created three variations for different electrode spacings.",
      "Custom PLA parts were 3D printed.",
      "Used an off-the-shelf clamp and rubber stopper to apply pressure.",
      "Wires were soldered by hand."
    ],
    images: 3
  },
  {
    title: "Automated Loom",
    meta: "MTE100 Mechatronics Engineering Project · Fall 2023",
    categories: ["robotics", "mechanical"],
    description: "Team-built weaving robot integrating three distinct motion mechanisms.",
    details: [
      "Group of four students; robot used at least two sensors and two motors.",
      "Designed custom 3D printed parts.",
      "Integrated the three motion mechanisms and troubleshot mechanical parts.",
      "Wrote code allowing the user to input the desired number of rows to weave.",
      "Video: https://youtu.be/RN2TIEhCwVE"
    ],
    images: 5
  },
  {
    title: "Machining",
    meta: "Kardium · Mechanical Engineering Co-op · Fall 2025",
    categories: ["manufacturing", "mechanical"],
    description: "Various aluminum and Delrin components manufactured on a manual mill.",
    details: [
      "Designed/manufactured small mechanical components using manual machining processes."
    ],
    images: 3
  }
];

const imageFolders = {
  "Robotic Arm": "robotic-arm",
  "Automated Cable Verification PCB": "cable-pcb",
  "IEEE EMC-SPI Student Hardware Competition": "emc-spi",
  "Automated Agitation Jig": "agitation-jig",
  "Catheter Vacuum Verification Jig": "vacuum-jig",
  "Liquid Management Jig": "liquid-jig",
  "Electrical Catheter Test Jig": "electrical-catheter-jig",
  "Automated Loom": "automated-loom",
  "Machining": "machining"
};

const projectGrid = document.getElementById("project-grid");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");

function placeholder(project, index) {
  return `
    <div class="placeholder" data-image="images/${imageFolders[project.title]}/${String(index).padStart(2, "0")}.jpg">
      <span class="placeholder-label">
        IMAGE ${String(index).padStart(2, "0")} · Replace with portfolio photo
      </span>
    </div>
  `;
}

function projectCard(project, index) {
  return `
    <article class="project-card" data-categories="${project.categories.join(" ")}" data-index="${index}">
      <div class="project-cover">
        ${placeholder(project, 1)}
      </div>
      <div class="project-info">
        <div class="project-meta">${project.meta}</div>
        <h3>${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tags">
          ${project.categories.map(c => `<span class="tag">${c}</span>`).join("")}
          <span class="tag">${project.images} images</span>
        </div>
      </div>
    </article>
  `;
}

function renderProjects(filter = "all") {
  projectGrid.innerHTML = projects
    .map((p, i) => ({ p, i }))
    .filter(({ p }) => filter === "all" || p.categories.includes(filter))
    .map(({ p, i }) => projectCard(p, i))
    .join("");

  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => openProject(Number(card.dataset.index)));
  });
}

function openProject(index) {
  const p = projects[index];

  const gallery = Array.from({ length: p.images }, (_, i) => placeholder(p, i + 1)).join("");

  modalContent.innerHTML = `
    <p class="eyebrow">PROJECT</p>
    <h2 id="modal-title">${p.title}</h2>
    <div class="project-meta">${p.meta}</div>
    <p class="modal-project-description">${p.description}</p>
    <div class="gallery">${gallery}</div>
    <ul class="modal-details">
      ${p.details.map(d => `<li>${d}</li>`).join("")}
    </ul>
  `;

  // Automatically replace a placeholder with a real image if you add it later.
  modalContent.querySelectorAll(".placeholder").forEach(ph => {
    const src = ph.dataset.image;
    const img = new Image();
    img.onload = () => {
      img.alt = `${p.title} — portfolio image`;
      ph.replaceWith(img);
    };
    img.src = src;
  });

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector(".filter.active").classList.remove("active");
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

document.querySelectorAll("[data-close-modal]").forEach(el => {
  el.addEventListener("click", closeModal);
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

renderProjects();
