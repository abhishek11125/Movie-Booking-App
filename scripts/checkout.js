// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let selected = JSON.parse(localStorage.getItem("movie"));

let money = JSON.parse(localStorage.getItem("amount"));

let amount = document.getElementById("wallet");
amount.innerText = +money;

let container = document.getElementById("movie");

let ticket = (data) => {
  let title = document.createElement("h2");
  title.innerText = data.Title;

  let poster = document.createElement("img");
  poster.src = data.Poster;

  container.append(title, poster);
};

ticket(selected);

let check = () => {
  let persons = document.getElementById("number_of_seats").value;
  let x = +persons;
  
  let ticket_value = x*100;
  if(ticket_value>amount.innerText){
    alert('Insufficient Balance!');
  }else{
    z = amount.innerText -= ticket_value;
    console.log(z)
    localStorage.setItem('amount',JSON.stringify(z));
    alert('Booking successful!');
  }
};


