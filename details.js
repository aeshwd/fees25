const players = [
  {
    name: "Bhavya",
    admissionNumber: "ADM101",
    phone: "9876543210",
    admissionDate: "2024-01-01",
    feesStatus: "pending",
    dueDate: "2025-01-01",
    image: "path-to-image/bhavya.jpg",
    feesHistory: [
      { month: "Aug", year: 2024, status: "paid" },
      { month: "Sep", year: 2024, status: "paid" },
      { month: "Oct", year: 2024, status: "paid" },
      { month: "Nov", year: 2024, status: "paid" },
      { month: "Dec", year: 2024, status: "paid" },
    ],
  },
  {
    name: "Gurman",
    admissionNumber: "ADM102",
    phone: "9876543211",
    admissionDate: "2024-08-03",
    feesStatus: "pending",
    dueDate: "2025-01-03",
    image: "path-to-image/gurman.jpg",
    feesHistory: [
      { month: "Aug", year: 2024, status: "paid" },
      { month: "Sep", year: 2024, status: "paid" },
      { month: "Oct", year: 2024, status: "paid" },
      { month: "Nov", year: 2024, status: "paid" },
      { month: "Dec", year: 2024, status: "paid" },
    ],
  },
  {
    name: "Vega",
    admissionNumber: "ADM104",
    phone: "9876543213",
    admissionDate: "2024-09-28",
    feesStatus: "pending",
    dueDate: "2025-01-28",
    image: "path-to-image/vega.jpg",
    feesHistory: [
      { month: "Sep", year: 2024, status: "paid" },
      { month: "Oct", year: 2024, status: "paid" },
      { month: "Nov", year: 2024, status: "paid" },
    ],
  },
  {
    name: "Vritika",
    admissionNumber: "ADM105",
    phone: "9876543214",
    admissionDate: "2024-11-29",
    feesStatus: "pending",
    dueDate: "2025-01-29",
    image: "path-to-image/vritika.jpg",
    feesHistory: [
      { month: "Nov", year: 2024, status: "paid" },
    ],
  },
  {
    name: "Mehransh",
    admissionNumber: "ADM106",
    phone: "9876543215",
    admissionDate: "2024-10-06",
    feesStatus: "pending",
    dueDate: "2025-01-06",
    image: "path-to-image/mehransh.jpg",
    feesHistory: [
      { month: "Oct", year: 2024, status: "paid" },
      { month: "Nov", year: 2024, status: "paid" },
      { month: "Dec", year: 2024, status: "paid" },
    ],
  },

  {
    name: "Devansh",
    admissionNumber: "ADM108",
    phone: "9876543217",
    admissionDate: "2024-10-18",
    feesStatus: "pending",
    dueDate: "2025-01-18",
    image: "path-to-image/devansh.jpg",
    feesHistory: [
      { month: "Oct", year: 2024, status: "paid" },
      { month: "Nov", year: 2024, status: "paid" },
    ],
  },
  {
    name: "Sukhmehar",
    admissionNumber: "ADM109",
    phone: "9876543218",
    admissionDate: "2024-10-19",
    feesStatus: "pending",
    dueDate: "2025-01-19",
    image: "path-to-image/sukhmehar.jpg",
    feesHistory: [
      { month: "Oct", year: 2024, status: "paid" },
      { month: "Nov", year: 2024, status: "paid" },
    ],
  },
  {
    name: "Kashika",
    admissionNumber: "ADM110",
    phone: "9876543219",
    admissionDate: "2023-08-07",
    feesStatus: "pending",
    dueDate: "2025-01-07",
    image: "path-to-image/kashika.jpg",
    feesHistory: [
      { month: "Aug", year: 2024, status: "paid" },
      { month: "Sep", year: 2024, status: "paid" },
      { month: "Oct", year: 2024, status: "paid" },
      { month: "Nov", year: 2024, status: "paid" },
    ],
  },
  {
    name: "Vihaan",
    admissionNumber: "ADM111",
    phone: "9876543220",
    admissionDate: "2024-01-01",
    feesStatus: "pending",
    dueDate: "2025-01-01",
    image: "path-to-image/vihaan.jpg",
    feesHistory: [
      { month: "Aug", year: 2024, status: "paid" },
      { month: "Sep", year: 2024, status: "paid" },
      { month: "Oct", year: 2024, status: "paid" },
      { month: "Nov", year: 2024, status: "paid" },
    ],
  },
  {
    name: "Aryan",
    admissionNumber: "ADM112",
    phone: "9876543221",
    admissionDate: "2024-01-01",
    feesStatus: "pending",
    dueDate: "2025-01-01",
    image: "path-to-image/aryan.jpg",
    feesHistory: [
      { month: "Aug", year: 2024, status: "paid" },
      { month: "Sep", year: 2024, status: "paid" },
      { month: "Oct", year: 2024, status: "paid" },
      { month: "Nov", year: 2024, status: "paid" },
    ],
  },
  {
    name: "Blessy",
    admissionNumber: "ADM113",
    phone: "9876543222",
    admissionDate: "2023-08-07",
    feesStatus: "pending",
    dueDate: "2025-01-07",
    image: "path-to-image/blessy.jpg",
    feesHistory: [
      { month: "Aug", year: 2024, status: "paid" },
      { month: "Sep", year: 2024, status: "paid" },
      { month: "Oct", year: 2024, status: "paid" },
      { month: "Nov", year: 2024, status: "paid" },
    ],
  },

  {
    name: "Chinmay",
    admissionNumber: "ADM114",
    phone: "9876543222",
    admissionDate: "2024-10-07",
    feesStatus: "pending",
    dueDate: "2025-01-07",
    image: "path-to-image/blessy.jpg",
    feesHistory: [
      { month: "Aug", year: 2024, status: "paid" },
      { month: "Sep", year: 2024, status: "paid" },
      { month: "Oct", year: 2024, status: "paid" },
      { month: "Nov", year: 2024, status: "paid" },
    ],
  },

  {
    name: "Gurshabad",
    admissionNumber: "ADM115",
    phone: "9876543222",
    admissionDate: "2024-07-21",
    feesStatus: "pending",
    dueDate: "2025-01-21",
    image: "path-to-image/blessy.jpg",
    feesHistory: [
      { month: "Aug", year: 2024, status: "paid" },
      { month: "Sep", year: 2024, status: "paid" },
      { month: "Oct", year: 2024, status: "paid" },
      { month: "Nov", year: 2024, status: "paid" },
    ],
  },
  {
    name: "Garvit",
    admissionNumber: "ADM116",
    phone: "9876543223",
    admissionDate: "2024-09-29",
    feesStatus: "pending",
    dueDate: "2025-01-29",
    image: "path-to-image/garvit.jpg",
    feesHistory: [
      { month: "Sep", year: 2024, status: "paid" },
      { month: "Oct", year: 2024, status: "paid" },
      { month: "Nov", year: 2024, status: "paid" },
    ],
  },
];




  // Function to calculate late fees
function calculateLateFees(player) {
    const today = new Date();
    const dueDate = new Date(player.dueDate);
    if (player.feesStatus === "pending" && today > dueDate) {
      const lateDays = Math.floor((today - dueDate) / (1000 * 60 * 60 * 24));
      return lateDays * 100;
    }
    return 0;
  }
  
  // Extract admission number from URL
  const urlParams = new URLSearchParams(window.location.search);
  const admissionNumber = urlParams.get("admissionNumber");
  
  // Find the player details
  const player = players.find((p) => p.admissionNumber === admissionNumber);
  
  // Populate player details dynamically
  if (player) {
    const playerDetails = document.getElementById("player-details");
    playerDetails.innerHTML = `
      <img src="${player.image}" alt="${player.name}" class="player-image">
      <p><strong>Name:</strong> ${player.name}</p>
      <p><strong>Admission Number:</strong> ${player.admissionNumber}</p>
      <p><strong>Phone:</strong> ${player.phone}</p>
      <p><strong>Admission Date:</strong> ${player.admissionDate}</p>
      <p><strong>Fees Status:</strong> ${player.feesStatus}</p>
      <p><strong>Due Date:</strong> ${player.dueDate}</p>
      <p><strong>Late Fees:</strong> ₹${calculateLateFees(player)}</p>
    `;
  } else {
    alert("Player not found!");
  }
  
  // Handle payment actions
  const makePayment = document.getElementById("make-payment");
  const paymentSection = document.getElementById("payment-section");
  const paymentDone = document.getElementById("payment-done");
  const feesSummary = document.getElementById("fees-summary");
  const getSummary = document.getElementById("get-summary");
  
  makePayment.addEventListener("click", () => {
    const lateFees = calculateLateFees(player);
    alert(
      `Your late fees is ₹${lateFees}. Please pay your monthly fees along with the late fees to mark your fees status as "Paid".`
    );
    paymentSection.classList.remove("hidden");
  });
  
  paymentDone.addEventListener("click", () => {
    alert(
      "Please send the screenshot of the payment to +91 9149429397 or +91 6006015291. Admin will approve your payment and update the fees status within 2-3 days."
    );
    window.location.href = "index.html"; // Navigate back to the main page
  });
  
  getSummary.addEventListener("click", () => {
    feesSummary.innerHTML = `
      <h3 class="summary-title">Full Fees Summary</h3>
      <div class="summary-grid">
        ${player.feesHistory
          .map(
            (entry) => `
          <div class="summary-item ${entry.status}">
            <p><strong>${entry.month} ${entry.year}</strong></p>
            <p>Status: ${entry.status.toUpperCase()}</p>
          </div>`
          )
          .join("")}
      </div>
    `;
    feesSummary.classList.remove("hidden");
  });
  