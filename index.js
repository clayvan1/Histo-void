document.addEventListener("DOMContentLoaded", function () {
  const dropdownButtons = document.querySelectorAll(".dropdown-btn");

  dropdownButtons.forEach(button => {
      button.addEventListener("click", function () {
          // Close all other dropdowns before opening the selected one
          document.querySelectorAll(".sub-menu").forEach(menu => {
              if (menu !== this.nextElementSibling) {
                  menu.classList.remove("show");
              }
          });

        
          this.nextElementSibling.classList.toggle("show");
      });
  });

  
  document.addEventListener("click", function (event) {
      if (!event.target.closest(".dropdown-btn")) {
          document.querySelectorAll(".sub-menu").forEach(menu => {
              menu.classList.remove("show");
          });
      }
  });
});
const toggleBtn = document.getElementById("toggle-btn");
const sidebar = document.getElementById("sidebar");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("side",);
  body.classList.toggle("sidebar-hidden","opacity"); 
});
        const subMenuButtons = document.querySelectorAll('.sub-menu li a'); // Select all submenu links
        const homeSection = document.querySelector('.Home'); // Select the Home section

        subMenuButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent link navigation
                homeSection.classList.add('go');
            });
        });

        function addClassToSection(submenuId, sectionClass, popClassName) {
            const submenu = document.getElementById(submenuId);
            const section = document.querySelector(sectionClass);

            submenu.addEventListener('click', (event) => {
                if (event.target.tagName === 'A') {
                    event.preventDefault();
                    section.classList.add(popClassName);
                }
            });
        }

        // Call the function for each section
        addClassToSection('1', '.epithelium', 'pop1');
        addClassToSection('2', '.connective', 'pop2');
        addClassToSection('3', '.cartilage', 'pop3');
        addClassToSection('4', '.bone', 'pop4');
        addClassToSection('5', '.nervous-tissue', 'pop5');
        addClassToSection('6', '.propulsion', 'pop6');
        addClassToSection('7', '.skin', 'pop7');
        addClassToSection('8', '.nervous-system', 'pop8');
        addClassToSection('9', '.receptor', 'pop9');
        addClassToSection('10', '.ear', 'pop10');
        addClassToSection('11', '.eye', 'pop11');
        addClassToSection('12', '.endocrine', 'pop12');
        addClassToSection('13', '.git', 'pop13');
        addClassToSection('14', '.git-glands', 'pop14');
        addClassToSection('15', '.respiratory', 'pop15');
        addClassToSection('16', '.circulatory', 'pop16'); 
        addClassToSection('17', '.immune', 'pop17');
        addClassToSection('18', '.urinary', 'pop18');
        addClassToSection('19', '.reproductive', 'pop19');

        function addClassToSection(submenuId, sectionClass, popClassName) {
            const submenu = document.getElementById(submenuId);
            const section = document.querySelector(sectionClass);
        
            submenu.addEventListener('click', (event) => {
                if (event.target.tagName === 'A') {
                    event.preventDefault();
        
                    // 1. Remove ALL pop classes from ALL sections
                    const allSections = document.querySelectorAll('main > section'); // Select all sections within <main>
                    allSections.forEach(otherSection => {
                        otherSection.classList.remove(...Array.from(otherSection.classList).filter(cls => cls.startsWith('pop'))); //Remove any pop class
                    });
        
                    // 2. Add the specific pop class to the clicked section
                    section.classList.add(popClassName);
                }
            });
        }
        
        document.addEventListener('DOMContentLoaded', function() {
            const mainBtn = document.querySelector('.main-btn'); // Select the button
          
            if (mainBtn) { // Check if the button exists
              mainBtn.addEventListener('click', function() {
                const homeSection = document.querySelector('.Home');
                const allSections = document.querySelectorAll('section:not(.Home)'); // Select all sections except Home
          
                if (homeSection) {
                  homeSection.classList.remove('go');
                }
          
                allSections.forEach(section => {
                  section.classList.remove('pop1', 'active'); // Remove 'pop1' and 'active' from all other sections
                });
              });
            }
          });
          document.addEventListener('DOMContentLoaded', function() {
            const mainBtn = document.querySelector('.main-btn'); // Select the button
          
            if (mainBtn) { // Check if the button exists
              mainBtn.addEventListener('click', function() {
                const homeSection = document.querySelector('.Home');
                const allSections = document.querySelectorAll('section:not(.Home)'); // Select all sections except Home
          
                if (homeSection) {
                  homeSection.classList.remove('go');
                }
          
                allSections.forEach(section => {
                  section.classList.remove('pop1', "pop2",'pop3','pop4','pop5','pop6','pop7','pop8','pop9','pop10','pop11','pop12','pop13','pop14','pop15','pop17','pop18','pop19',); // Remove 'pop1' and 'active' from all other sections
                });
              });
            }
          });
          document.addEventListener('DOMContentLoaded', function() {
            const images = document.querySelectorAll('img');
        
            images.forEach(img => {
                img.addEventListener('click', function() {
                    if (this.classList.contains('enlarge')) {
                        this.classList.remove('enlarge');
                    } else {
                        // Remove 'enlarge' from all other images
                        images.forEach(otherImg => {
                            if (otherImg !== this) {
                                otherImg.classList.remove('enlarge');
                            }
                        });
                        this.classList.add('enlarge');
                    }
                });
            });
        });