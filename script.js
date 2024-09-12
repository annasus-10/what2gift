document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("age-options")) {
    handleAgeSelection();
  } else if (document.getElementById("gender-options")) {
    handleGenderSelection();
  } else if (document.getElementById("relationship-options")) {
    handleRelationshipSelection();
  } else if (document.getElementById("occasion-options")) {
    handleOccasionSelection();
  } else if (document.getElementById("hobbies-options")) {
    handleHobbiesSelection();
  } else if (document.getElementById("review-age")) {
    displayReview();
  } else if (document.getElementById("gift-suggestion")) {
    fetchGiftSuggestion();
  }
});

// Function to display the user selections on the review page
function displayReview() {
  document.getElementById("review-age").textContent = localStorage.getItem("selectedAge") || "Not selected";
  document.getElementById("review-gender").textContent = localStorage.getItem("selectedGender") || "Not selected";
  document.getElementById("review-relationship").textContent = localStorage.getItem("selectedRelationship") || "Not selected";
  document.getElementById("review-occasion").textContent = localStorage.getItem("selectedOccasion") || "Not selected";
  document.getElementById("review-hobby").textContent = localStorage.getItem("selectedHobbies") || "Not selected";

  const confirmButton = document.getElementById("confirm-button");
  confirmButton.addEventListener("click", function () {
    if (validateReview()) {
      // After confirmation, navigate to the result page
      window.location.href = "result.html"; // Redirect to result page
    } else {
      alert("Please complete all selections before confirming.");
    }
  });
}

// Validate if all selections are made before confirming
function validateReview() {
  return localStorage.getItem("selectedAge") &&
         localStorage.getItem("selectedGender") &&
         localStorage.getItem("selectedRelationship") &&
         localStorage.getItem("selectedOccasion") &&
         localStorage.getItem("selectedHobbies");
}

function fetchGiftSuggestion() {
  const age = localStorage.getItem("selectedAge");
  const gender = localStorage.getItem("selectedGender");
  const relationship = localStorage.getItem("selectedRelationship");
  const occasion = localStorage.getItem("selectedOccasion");
  const hobbies = localStorage.getItem("selectedHobbies");

  console.log("Sending data to PHP:", { age, gender, relationship, occasion, hobbies }); // Debugging: log sent data

  fetch('fetch_results.php', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
          age: age,
          gender: gender,
          relationship: relationship,
          occasion: occasion,
          hobbies: hobbies,
      }),
  })
  .then(response => {
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`); // If there is a non-200 HTTP status
      }
      return response.json(); // Convert to JSON
  })
  .then(data => {
      console.log("Received data from PHP:", data); // Debugging: log received data
      document.getElementById("gift-suggestion").textContent = data;
  })
  .catch(error => {
      console.error("Error fetching the gift suggestion:", error);
      document.getElementById("gift-suggestion").textContent = "Error fetching gift suggestion.";
  });
}



// Handle Age Selection
function handleAgeSelection() {
  const ageOptions = document.querySelectorAll("#age-options .ans-option");
  const nextButton = document.getElementById("next-button");
  const doneButton = document.getElementById("done-button");
  const backButton = document.getElementById("back-button");

  ageOptions.forEach((option) => {
    option.addEventListener("click", function () {
      ageOptions.forEach((opt) => opt.classList.remove("selected"));
      this.classList.add("selected");
      localStorage.setItem("selectedAge", this.getAttribute("data-value"));
    });
  });

  checkForReviewPage(doneButton, nextButton, backButton);

  nextButton.addEventListener("click", function (event) {
    if (!localStorage.getItem("selectedAge")) {
      event.preventDefault();
      alert("Please select an age range.");
    }
  });
}

// Handle Gender Selection
function handleGenderSelection() {
  const genderOptions = document.querySelectorAll("#gender-options .ans-option");
  const nextButton = document.getElementById("next-button");
  const doneButton = document.getElementById("done-button");
  const backButton = document.getElementById("back-button");

  genderOptions.forEach((option) => {
    option.addEventListener("click", function () {
      genderOptions.forEach((opt) => opt.classList.remove("selected"));
      this.classList.add("selected");
      localStorage.setItem("selectedGender", this.getAttribute("data-value"));
    });
  });

  checkForReviewPage(doneButton, nextButton, backButton);

  nextButton.addEventListener("click", function (event) {
    if (!localStorage.getItem("selectedGender")) {
      event.preventDefault();
      alert("Please select a gender.");
    }
  });
}

// Handle Relationship Selection
function handleRelationshipSelection() {
  const selectedAge = localStorage.getItem("selectedAge");
  const partnerOption = document.getElementById("partner-option");

  if (selectedAge === "10 - 15" || selectedAge === "15 - 20") {
    if (partnerOption) {
      partnerOption.style.display = "none";
    }
  }

  const relationshipOptions = document.querySelectorAll("#relationship-options .ans-option");
  const nextButton = document.getElementById("next-button");
  const doneButton = document.getElementById("done-button");
  const backButton = document.getElementById("back-button");

  relationshipOptions.forEach((option) => {
    option.addEventListener("click", function () {
      relationshipOptions.forEach((opt) => opt.classList.remove("selected"));
      this.classList.add("selected");
      localStorage.setItem("selectedRelationship", this.getAttribute("data-value"));
    });
  });

  checkForReviewPage(doneButton, nextButton, backButton);

  nextButton.addEventListener("click", function (event) {
    if (!localStorage.getItem("selectedRelationship")) {
      event.preventDefault();
      alert("Please select a relationship.");
    }
  });
}

// Handle Occasion Selection
function handleOccasionSelection() {
  const selectedAge = localStorage.getItem("selectedAge");
  const selectedRelationship = localStorage.getItem("selectedRelationship");
  const anniversaryOption = document.getElementById("anniversary-option");

  if (selectedAge === "10 - 15" || selectedAge === "15 - 20" || selectedRelationship === "Family") {
    if (anniversaryOption) {
      anniversaryOption.style.display = "none";
    }
  }

  const occasionOptions = document.querySelectorAll("#occasion-options .ans-option");
  const nextButton = document.getElementById("next-button");
  const doneButton = document.getElementById("done-button");
  const backButton = document.getElementById("back-button");

  occasionOptions.forEach((option) => {
    option.addEventListener("click", function () {
      occasionOptions.forEach((opt) => opt.classList.remove("selected"));
      this.classList.add("selected");
      localStorage.setItem("selectedOccasion", this.getAttribute("data-value"));
    });
  });

  checkForReviewPage(doneButton, nextButton, backButton);

  nextButton.addEventListener("click", function (event) {
    if (!localStorage.getItem("selectedOccasion")) {
      event.preventDefault();
      alert("Please select an occasion.");
    }
  });
}

// Handle Hobbies Selection in hobbies.html
function handleHobbiesSelection() {
  const hobbiesOptions = document.querySelectorAll("#hobbies-options .ans-option");
  const submitButton = document.getElementById("submit-button");
  const doneButton = document.getElementById("done-button");
  const backButton = document.getElementById("back-button");

  hobbiesOptions.forEach((option) => {
    option.addEventListener("click", function () {
      hobbiesOptions.forEach((opt) => opt.classList.remove("selected"));
      this.classList.add("selected");
      localStorage.setItem("selectedHobbies", this.getAttribute("data-value"));
    });
  });

  checkForReviewPage(doneButton, submitButton, backButton);

  submitButton.addEventListener("click", function (event) {
    if (!localStorage.getItem("selectedHobbies")) {
      event.preventDefault();
      alert("Please select a hobby.");
    }
  });
}

// Function to show "Done" button and hide "Next"/"Submit" and "Back" buttons if coming from the review page
function checkForReviewPage(doneButton, nextOrSubmitButton, backButton) {
  const previousPage = document.referrer;

  if (previousPage.includes("review.html")) {
    doneButton.style.display = "block"; 
    nextOrSubmitButton.style.display = "none"; 
    backButton.style.display = "none"; 
  }
}
