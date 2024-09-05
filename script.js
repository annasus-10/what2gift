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
  }
});

// Handle Age Selection
function handleAgeSelection() {
  const ageOptions = document.querySelectorAll("#age-options .ans-option");
  const nextButton = document.getElementById("next-button");

  ageOptions.forEach((option) => {
    option.addEventListener("click", function () {
      ageOptions.forEach((opt) => opt.classList.remove("selected"));
      this.classList.add("selected");
      localStorage.setItem("selectedAge", this.getAttribute("data-value"));
    });
  });

  nextButton.addEventListener("click", function (event) {
    const selectedAge = localStorage.getItem("selectedAge");
    if (!selectedAge) {
      event.preventDefault();
      alert("Please select an age range.");
    }
  });
}

// Handle Gender Selection
function handleGenderSelection() {
  const genderOptions = document.querySelectorAll(
    "#gender-options .ans-option"
  );
  const nextButton = document.getElementById("next-button");

  genderOptions.forEach((option) => {
    option.addEventListener("click", function () {
      genderOptions.forEach((opt) => opt.classList.remove("selected"));
      this.classList.add("selected");
      localStorage.setItem("selectedGender", this.getAttribute("data-value"));
    });
  });

  nextButton.addEventListener("click", function (event) {
    const selectedGender = localStorage.getItem("selectedGender");
    if (!selectedGender) {
      event.preventDefault();
      alert("Please select a gender.");
    }
  });
}

// Handle Relationship Selection with Partner Option Check
function handleRelationshipSelection() {
  const selectedAge = localStorage.getItem("selectedAge");
  const partnerOption = document.getElementById("partner-option");

  // Hide the "Partner" option if the selected age is less than 20
  if (selectedAge === "10 - 15" || selectedAge === "15 - 20") {
    if (partnerOption) {
      partnerOption.style.display = "none";
    }
  }

  const relationshipOptions = document.querySelectorAll(
    "#relationship-options .ans-option"
  );
  const nextButton = document.getElementById("next-button");

  relationshipOptions.forEach((option) => {
    option.addEventListener("click", function () {
      relationshipOptions.forEach((opt) => opt.classList.remove("selected"));
      this.classList.add("selected");
      localStorage.setItem(
        "selectedRelationship",
        this.getAttribute("data-value")
      );
    });
  });

  nextButton.addEventListener("click", function (event) {
    const selectedRelationship = localStorage.getItem("selectedRelationship");
    if (!selectedRelationship) {
      event.preventDefault();
      alert("Please select a relationship.");
    }
  });
}

// Handle Relationship Selection with Anniversary Option Check
function handleOccasionSelection() {
  const selectedAge = localStorage.getItem("selectedAge");
  const anniversaryOption = document.getElementById("anniversary-option");

  // Hide the "Anniversary" option if the selected age is less than 20
  if (selectedAge === "10 - 15" || selectedAge === "15 - 20") {
    if (anniversaryOption) {
      anniversaryOption.style.display = "none";
    }
  }

  const occasionOptions = document.querySelectorAll(
    "#occasion-options .ans-option"
  );
  const nextButton = document.getElementById("next-button");

  occasionOptions.forEach((option) => {
    option.addEventListener("click", function () {
      occasionOptions.forEach((opt) => opt.classList.remove("selected"));
      this.classList.add("selected");
      localStorage.setItem("selectedOccasion", this.getAttribute("data-value"));
    });
  });

  nextButton.addEventListener("click", function (event) {
    const selectedOccasion = localStorage.getItem("selectedOccasion");
    if (!selectedOccasion) {
      event.preventDefault();
      alert("Please select an occasion.");
    }
  });
}

// Handle Hobbies Selection
function handleHobbiesSelection() {
  const hobbiesOptions = document.querySelectorAll(
    "#hobbies-options .ans-option"
  );
  const nextButton = document.getElementById("next-button");

  hobbiesOptions.forEach((option) => {
    option.addEventListener("click", function () {
      hobbiesOptions.forEach((opt) => opt.classList.remove("selected"));
      this.classList.add("selected");
      localStorage.setItem("selectedHobbies", this.getAttribute("data-value"));
    });
  });

  nextButton.addEventListener("click", function (event) {
    const selectedHobbies = localStorage.getItem("selectedHobbies");
    if (!selectedHobbies) {
      event.preventDefault();
      alert("Please select a hobby.");
    }
  });
}
