function toggleList(buttonId) {
  const listItems = document.querySelector(".list-items");
  const pitems1 = document.querySelector(".p-item-1");
  const pitems2 = document.querySelector(".p-item-2");

  switch (buttonId) {
    case "Button-1":
      if (listItems.classList.contains("show")) {
        listItems.classList.remove("show");
      } else {
        listItems.classList.add("show");
      }
      break;

    case "Button-2":
      if (pitems1.classList.contains("show")) {
        pitems1.classList.remove("show");
      } else {
        pitems1.classList.add("show");
      }
      break;

    case "Button-3":
      if (pitems2.classList.contains("show")) {
        pitems2.classList.remove("show");
      } else {
        pitems2.classList.add("show");
      }
      break;

    default:
      console.log("No matching case found.");
  }
}
// Toggle List Functionality
function toggleList(buttonId) {
  const listItems = document.querySelector(".list-items");
  const pitems1 = document.querySelector(".p-item-1");
  const pitems2 = document.querySelector(".p-item-2");

  switch (buttonId) {
    case "Button-1":
      listItems.classList.toggle("show");
      break;
    case "Button-2":
      pitems1.classList.toggle("show");
      break;
    case "Button-3":
      pitems2.classList.toggle("show");
      break;
    default:
      console.log("No matching case found.");
  }
}

function placeOrder(button) {
  // Show the custom alert
  const alertBox = document.getElementById("custom-alert");
  alertBox.classList.remove("hidden");

  // Change the button to a tick
  button.innerHTML = "✔"; // Change the text to a tick
  button.classList.add("completed"); // Add a class for completed state
  button.disabled = true; // Disable the button to prevent re-ordering
}

// Function to close the custom alert
function closeAlert() {
  const alertBox = document.getElementById("custom-alert");
  alertBox.classList.add("hidden");
}
