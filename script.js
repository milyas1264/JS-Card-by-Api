// Array of user objects
const users = [
  {
    name: "Ali Raza",
    email: "ali@example.com",
    city: "Lahore",
    img: "./images/AliRaza.jpg"
  },
  {
    name: "Fatima Khan",
    email: "fatima@example.com",
    city: "Karachi",
    img: "./images/Fatima"
  },
  {
    name: "Ahmed Bashir",
    email: "ahmed@example.com",
    city: "Islamabad",
    img: "./images/Ahmed"
  },
  {
    name: "Zainab Ali",
    email: "zainab@example.com",
    city: "Multan",
    img: "./images/Zenab"
  },
  {
    name: "Usman Qureshi",
    email: "usman@example.com",
    city: "Faisalabad",
    img: "./images/Usman"
  }
];

// Target the container
const container = document.getElementById("cardContainer");

// Loop through array and create cards
users.forEach(user => {
  let card = document.createElement("div");
  card.style.border = "8px groove #cccc";
  card.style.padding = "10px";
  card.style.borderRadius = "10px";
  card.style.width = "250px";
    card.style.textAlign = "center";
    card.style.background = "pink"
    card.style.boxShadow ="5px 5px 8px 0.5px grey"

  card.innerHTML = `
    <img src="${user.img}" width="100" style="border-radius: 50%;" />
    <h3>${user.name}</h3>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>City:</strong> ${user.city}</p>
  `;

  container.appendChild(card);
});
