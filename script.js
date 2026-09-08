/* =========================================
   PROJECT DATA
========================================= */

const projects = {

    "robotic-arm": {
        title: "Robotic Arm",
        subtitle: "Personal Project · Ongoing",

        description:
            "Developing a custom 5DOF hardware platform for exploratory learning in robotic manipulation.",

        details: [
            "Simulation-to-real pick and place motion using Robotics Toolbox for MATLAB.",
            "Mechanical model developed in SolidWorks.",
            "Parts 3D printed in PLA.",
            "Programmed using Arduino.",
            "Powered by a 5V portable battery."
        ],

        technologies:
            "SolidWorks · Arduino · MATLAB · 3D Printing"
    },


    "cable-pcb": {
        title: "Automated Cable Verification PCB",
        subtitle: "Qidni Labs · Hardware Engineering Intern · Summer 2026",

        description:
            "Proposed and documented stages for a full electrical and firmware testing platform after observing manual testing add several days to debugging processes.",

        details: [
            "Implemented the first stage of the proposed testing platform.",
            "Designed a custom PCB for cable verification.",
            "Documented circuit design choices for design review.",
            "Independently completed schematic and layout in Altium.",
            "Resulted in a platform capable of continuity testing 15 unique cable types."
        ],

        technologies:
            "Altium · PCB Design · Circuit Design · MCU Selection · Testing"
    },


    "emc": {
        title: "IEEE EMC-SPI Student Hardware Competition",
        subtitle: "Student Team Competition · Winter 2026",

        description:
            "Developed a small car using a provided motor kit to create tests for EMC emissions using a robotic arm.",

        details: [
            "Team placed 2nd in the world.",
            "Designed a lightweight chassis.",
            "Integrated constraints including an onboard battery and robotic-arm interaction features.",
            "Designed a robot end-effector gripper.",
            "Created PCB schematic in KiCad.",
            "Integrated power, Arduino, onboard sensors, and user buttons."
        ],

        technologies:
            "KiCad · Arduino · PCB Design · Mechanical Design · Sensors"
    },


    "agitation": {
        title: "Automated Agitation Jig",
        subtitle: "Kardium · Mechanical Engineering Co-op · Fall 2025",

        description:
            "Designed and built a jig to replace a manual agitation cleaning step in a manufacturing process.",

        details: [
            "System was fully pneumatic due to safety hazards associated with electronics near isopropyl alcohol.",
            "Prototype operated using an air-powered motor and crank.",
            "Ball-bearing guiderails provided smooth back-and-forth motion.",
            "Designed magnetic hinged clasps for easy lid access.",
            "Bucket used a material already approved for IPA."
        ],

        technologies:
            "Pneumatics · Mechanisms · CAD · Prototyping"
    },


    "vacuum": {
        title: "Catheter Vacuum Verification Jig",
        subtitle: "Kardium · Mechanical Engineering Co-op · Fall 2025",

        description:
            "Redesigned, built, and verified a jig for testing a medical device under vacuum.",

        details: [
            "Required pressure range of -3 to -5 kPa.",
            "Achieved pressure accuracy of ±0.05 kPa.",
            "Consulted test operators throughout design and assembly.",
            "Constructed acrylic test chamber using solvent welding.",
            "Implemented a pneumatic pressure regulator and Venturi pump.",
            "Completed test method validation for design verification testing."
        ],

        technologies:
            "Pneumatics · Testing · Validation · CAD · Prototyping"
    },


    "liquid": {
        title: "Liquid Management Jig",
        subtitle: "Kardium · Mechanical Engineering Co-op · Fall 2025",

        description:
            "Designed and built a movable cart capable of holding up to 20L of water with bidirectional pneumatic pumping.",

        details: [
            "Designed to assist with filling and emptying test setups.",
            "Gravity-draining tank prevented liquid from remaining stagnant.",
            "Fully pneumatic system using compressed laboratory air.",
            "Diverting valve selected pumping direction.",
            "Pressure regulator controlled pump speed.",
            "Included pneumatic emergency stop.",
            "Machined Delrin mounts and stainless steel baseplate.",
            "3D printed additional components in PLA.",
            "Widened base after stability calculations showed that adding ballast would be impractical."
        ],

        technologies:
            "Pneumatics · CAD · Manufacturing · Safety · 3D Printing"
    },


    "catheter": {
        title: "Electrical Catheter Test Jig",
        subtitle: "Kardium · Mechanical Engineering Co-op · Fall 2025",

        description:
            "Designed and built a fixture to electrically connect to individual electrodes on a catheter.",

        details: [
            "Created three fixture variations for different electrode spacing.",
            "Custom components were 3D printed in PLA.",
            "Used an off-the-shelf clamp and rubber stopper to apply pressure.",
            "Wires were soldered by hand."
        ],

        technologies:
            "3D Printing · Fixtures · Soldering · CAD"
    },

    "loom": {
        title: "Automated Loom",
        subtitle: "MTE100 Mechatronics Project",
        description: "Built a robotic weaving system integrating three distinct motion mechanisms.",
        details: [
            "Designed and built a working automated weaving system.",
            "Integrated mechanical mechanisms, electronics, and programming."
        ],
        technologies: "Arduino | 3D Printing | Mechanisms | Programming"
    },

    "machining": {
        title: "Machining",
        subtitle: "Kardium Manufacturing",
        description: "Manufactured aluminum and Delrin components using a manual mill and workshop equipment.",
        details: [
            "Produced components for engineering prototypes.",
            "Used manual milling and workshop equipment."
        ],
        technologies: "Manual Milling | Aluminum | Delrin | Manufacturing"
    }

};

// Project IDs do not always match their image-folder names.
const projectGalleryFolders = {
    "robotic-arm": "robotic-arm",
    "cable-pcb": "cable-pcb",
    emc: "emc-spi",
    agitation: "agitation-jig",
    vacuum: "vacuum-jig",
    liquid: "liquid-jig",
    catheter: "electrical-catheter-jig",
    loom: "automated-loom",
    machining: "machining"
};


/* =========================================
   FILTER PROJECTS
========================================= */

const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".project-card");

filters.forEach(filter => {

    filter.addEventListener("click", () => {

        filters.forEach(f => f.classList.remove("active"));

        filter.classList.add("active");

        const selected = filter.dataset.filter;

        cards.forEach(card => {

            if (selected === "all") {
                card.style.display = "";
                return;
            }

            const categories =
                card.dataset.category.split(" ");

            if (categories.includes(selected)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });

});


/* =========================================
   PROJECT MODAL
========================================= */

let lastFocusedElement;

function openProject(id, trigger) {

    const project = projects[id];

    if (!project) return;

    const modal = document.getElementById("project-modal");
    const body = document.getElementById("modal-body");

    const galleryImages = window.projectGalleries?.[projectGalleryFolders[id]] || [];

    const gallery = galleryImages.length
        ? `<section class="project-gallery" aria-label="${project.title} image gallery">
                <h3>Project gallery</h3>
                <div class="gallery-grid">
                    ${galleryImages.map((image, index) => `
                        <a href="${image}" target="_blank" rel="noopener" class="gallery-image">
                            <img src="${image}" alt="${project.title} — image ${index + 1}" loading="lazy">
                        </a>`).join("")}
                </div>
            </section>`
        : "";

    body.innerHTML = `

        <p class="eyebrow">
            PROJECT
        </p>

        <h2 id="modal-title">
            ${project.title}
        </h2>

        <h4>
            ${project.subtitle}
        </h4>

        <p>
            ${project.description}
        </p>

        <ul>
            ${project.details
                .map(detail => `<li>${detail}</li>`)
                .join("")}
        </ul>

        <div class="tags">
            ${project.technologies
                .split(" · ")
                .map(tag => `<span>${tag}</span>`)
                .join("")}
        </div>

        ${gallery}
    `;

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
    lastFocusedElement = trigger || document.activeElement;
    modal.querySelector(".modal-close").focus();
}


function closeProject() {

    const modal = document.getElementById("project-modal");
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

    lastFocusedElement?.focus();

}


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeProject();
    }

});

document.querySelectorAll("[data-project]").forEach(button => {
    button.addEventListener("click", () => openProject(button.dataset.project, button));
});

document.querySelector(".modal-close").addEventListener("click", closeProject);
document.querySelector(".modal-overlay").addEventListener("click", closeProject);
