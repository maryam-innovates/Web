document.addEventListener("DOMContentLoaded", function() {
  const joinButtons = document.querySelectorAll(".project button");

  joinButtons.forEach(button => {
    button.addEventListener("click", function() {
      alert("You have joined this project!");
    });
  });
});
