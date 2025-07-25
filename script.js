// Array of user objects
const users = [
  {
    name: "Ali Raza",
    email: "ali@example.com",
    city: "Lahore",
    img: "./images/AliRaza.jpg",
    cell: "0123456789"
  },
  {
    name: "Fatima Khan",
    email: "fatima@example.com",
    city: "Karachi",
    img: "./images/Fatima.jpg",
    cell: "0123456789"
  },
  {
    name: "Ahmed Bashir",
    email: "ahmed@example.com",
    city: "Islamabad",
    img: "./images/Ahmed.jpg",
    cell: "0123456789"
  },
  {
    name: "Zainab Ali",
    email: "zainab@example.com",
    city: "Multan",
    img: "./images/Zenab.jpg",
    cell: "0123456789"
  },
  {
    name: "Usman Qureshi",
    email: "usman@example.com",
    city: "Faisalabad",
    img: "./images/Usman.jpg",
    cell: "0123456789"
  }
];

// Target the container
const container = document.getElementById("cardContainer");

// Loop through array and create cards
users.forEach(user => {
  let card = document.createElement("div");
  card.style.border = "8px ridge #accc";
  card.style.padding = "10px";
  card.style.borderRadius = "10px";
  card.style.width = "250px";
    card.style.textAlign = "center";
    card.style.background = "#abbbcc"
    card.style.boxShadow ="2px 0px 8px 0.2px grey"

  card.innerHTML = `
    <img src="${user.img}" width="100" style="border-radius: 50%;" />
    <h3>${user.name}</h3>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>City:</strong> ${user.city}</p>
    <p>Cell: ${user.cell}</p>
    <h4>By M ILYAS: 343474</h4>
    
  `;

  container.appendChild(card);
});

