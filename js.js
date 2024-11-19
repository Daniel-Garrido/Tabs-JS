
//variables generales
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

//codigo js para hacer las TABS  
document.addEventListener('DOMContentLoaded', () => {
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs and contents
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(content => content.classList.remove('active'));

      // Add active class to the clicked tab and corresponding content
      tab.classList.add('active');
      document.getElementById(tab.getAttribute('data-tab')).classList.add('active');
    });
  });
});
