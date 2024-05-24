function menu_function() {
    const menu = document.getElementById("menu_list");
    menu.classList.toggle("hidden");
    const body = document.body;
    body.classList.toggle("overflow-hidden");
  }
  function light_toggle() {
    const remove_list = ["bg-stone-900", "text-slate-50"];
    const add_list = ["bg-stone-100", "text-black"];
    const body_trigger = document.getElementById("body_toggle");
    remove_list.forEach((cls) => body_trigger.classList.remove(cls));
    add_list.forEach((cls) => body_trigger.classList.add(cls));
    const ligth = document.getElementById("light");
    ligth.classList.add("hidden");
    const dark = document.getElementById("dark");
    dark.classList.remove("hidden");
    const aside_list = document.getElementById("menu_list");
    aside_list.classList.remove("bg-stone-800");
    aside_list.classList.add("bg-stone-200");
    const header = document.getElementById("header");
    header.classList.remove("bg-stone-900");
    header.classList.add("bg-stone-50");
    const section = document.querySelectorAll("section");
    section.forEach((section) => section.classList.remove("bg-stone-800"));
    section.forEach((section) => section.classList.add("bg-stone-100"));
  }
  function dark_toggle() {
    const remove_list = ["bg-stone-100", "text-black"];
    const add_list = ["bg-stone-900", "text-slate-50"];
    const body_trigger = document.getElementById("body_toggle");
    remove_list.forEach((cls) => body_trigger.classList.remove(cls));
    add_list.forEach((cls) => body_trigger.classList.add(cls));
    const ligth = document.getElementById("light");
    ligth.classList.remove("hidden");
    const dark = document.getElementById("dark");
    dark.classList.add("hidden");
    const aside_list = document.getElementById("menu_list");
    aside_list.classList.remove("bg-stone-200");
    aside_list.classList.add("bg-stone-800");
    const header = document.getElementById("header");
    header.classList.remove("bg-stone-50");
    header.classList.add("bg-stone-900");
    const section = document.querySelectorAll("section");
    section.forEach((section) => section.classList.remove("bg-stone-100"));
    section.forEach((section) => section.classList.add("bg-stone-800"));
  }
  function hide_aside() {
    const menu = document.getElementById("menu_list");
    menu.classList.add("hidden");
  }
  // Close the menu when clicking outside of it
  document.addEventListener("click", function (event) {
    const menu = document.getElementById("menu");
    const button = document.querySelector("button");
    const body = document.body;
    if (!menu.contains(event.target) && event.target !== button) {
      hide_aside();
      body.classList.remove("overflow-hidden");
    }
  });
// Get the elements
const thumbnail = document.querySelector('.thumbnail');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-content');
const closeModal = document.querySelector('.close');
const summary = document.getElementById('summary');

// When the thumbnail is clicked, show the modal with the fullsize image
thumbnail.addEventListener('click', function(event) {
    // Prevent the default behavior of the event
    event.preventDefault();
    // Show the modal
    modal.style.display = 'flex';
    // Set the modal content to the clicked thumbnail's image
    modalImg.src = this.src;
});

// When the close button is clicked, close the modal
closeModal.addEventListener('click', function(event) {
    // Prevent the default behavior of the event
    event.preventDefault();
    // Close the modal
    modal.style.display = 'none';
});

// When clicking outside the modal, close it
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

