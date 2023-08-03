'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");
const modalDate = document.querySelector("[data-modal-date]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    // Get the date value from the data-testimonials-date attribute and display it in the modal
    const testimonialDate = this.dataset.testimonialsDate;
    modalDate.textContent = new Date(testimonialDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });


    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}




// Function to open the PDF modal for Project 1
function openPdfModal1() {
  const modal = document.getElementById('pdfModal1');
  modal.style.display = 'block';
}

// Function to close the PDF modal for Project 1
function closePdfModal1() {
  const modal = document.getElementById('pdfModal1');
  modal.style.display = 'none';
}

// Function to open the PDF modal for Project 2
function openPdfModal2() {
  const modal = document.getElementById('pdfModal2');
  modal.style.display = 'block';
}

// Function to close the PDF modal for Project 2
function closePdfModal2() {
  const modal = document.getElementById('pdfModal2');
  modal.style.display = 'none';
}

// Function to open the PDF modal for Project 3
function openPdfModal3() {
  const modal = document.getElementById('pdfModal3');
  modal.style.display = 'block';
}

// Function to close the PDF modal for Project 3
function closePdfModal3() {
  const modal = document.getElementById('pdfModal3');
  modal.style.display = 'none';
}

// Function to open the PDF modal for Project 4
function openPdfModal4() {
  const modal = document.getElementById('pdfModal4');
  modal.style.display = 'block';
}

// Function to close the PDF modal for Project 4
function closePdfModal4() {
  const modal = document.getElementById('pdfModal4');
  modal.style.display = 'none';
}

// Function to open the PDF modal for Project 5
function openPdfModal5() {
  const modal = document.getElementById('pdfModal5');
  modal.style.display = 'block';
}

// Function to close the PDF modal for Project 5
function closePdfModal5() {
  const modal = document.getElementById('pdfModal5');
  modal.style.display = 'none';
}

// Function to open the PDF modal for Project 6
function openPdfModal6() {
  const modal = document.getElementById('pdfModal6');
  modal.style.display = 'block';
}

// Function to close the PDF modal for Project 6
function closePdfModal6() {
  const modal = document.getElementById('pdfModal6');
  modal.style.display = 'none';
}

// Add event listener to open the PDF modal for Project 1 when the corresponding card is clicked
const projectCard1 = document.querySelectorAll('.project-item a')[0];
projectCard1.addEventListener('click', function(event) {
  event.preventDefault();
  openPdfModal1();
});

// Add event listener to close the PDF modal for Project 1 when the close button is clicked
const closeBtn1 = document.getElementById('closePdfModal1');
closeBtn1.addEventListener('click', closePdfModal1);

// Add event listener to open the PDF modal for Project 2 when the corresponding card is clicked
const projectCard2 = document.querySelectorAll('.project-item a')[1];
projectCard2.addEventListener('click', function(event) {
  event.preventDefault();
  openPdfModal2();
});

// Add event listener to close the PDF modal for Project 2 when the close button is clicked
const closeBtn2 = document.getElementById('closePdfModal2');
closeBtn2.addEventListener('click', closePdfModal2);

// Add event listener to open the PDF modal for Project 3 when the corresponding card is clicked
const projectCard3 = document.querySelectorAll('.project-item a')[2];
projectCard3.addEventListener('click', function(event) {
  event.preventDefault();
  openPdfModal3();
});

// Add event listener to close the PDF modal for Project 3 when the close button is clicked
const closeBtn3 = document.getElementById('closePdfModal3');
closeBtn3.addEventListener('click', closePdfModal3);

// Add event listener to open the PDF modal for Project 4 when the corresponding card is clicked
const projectCard4 = document.querySelectorAll('.project-item a')[3];
projectCard4.addEventListener('click', function(event) {
  event.preventDefault();
  openPdfModal4();
});

// Add event listener to close the PDF modal for Project 4 when the close button is clicked
const closeBtn4 = document.getElementById('closePdfModal4');
closeBtn4.addEventListener('click', closePdfModal4);

// Add event listener to open the PDF modal for Project 5 when the corresponding card is clicked
const projectCard5 = document.querySelectorAll('.project-item a')[4];
projectCard5.addEventListener('click', function(event) {
  event.preventDefault();
  openPdfModal5();
});

// Add event listener to close the PDF modal for Project 5 when the close button is clicked
const closeBtn5 = document.getElementById('closePdfModal5');
closeBtn5.addEventListener('click', closePdfModal5);

// Add event listener to open the PDF modal for Project 6 when the corresponding card is clicked
const projectCard6 = document.querySelectorAll('.project-item a')[5];
projectCard6.addEventListener('click', function(event) {
  event.preventDefault();
  openPdfModal6();
});

// Add event listener to close the PDF modal for Project 6 when the close button is clicked
const closeBtn6 = document.getElementById('closePdfModal6');
closeBtn6.addEventListener('click', closePdfModal6);