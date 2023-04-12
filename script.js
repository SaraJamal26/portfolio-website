function filterProjects() {
    // Get the input value and convert it to lowercase
    var filterValue = document.getElementById("filterInput").value.toLowerCase();
    
    // Get all the project items and loop through them
    var projectItems = document.getElementsByClassName("projectItem");
    for (var i = 0; i < projectItems.length; i++) {
      // Get the project item's tags and convert them to lowercase
      var tags = projectItems[i].getAttribute("data-tags").toLowerCase();
      
      // If the tags contain the filter value, show the project item; otherwise, hide it
      if (tags.indexOf(filterValue) > -1) {
        projectItems[i].style.display = "";
      } else {
        projectItems[i].style.display = "none";
      }
    }
  }

const filter = document.querySelector('#filter');
const courses = document.querySelectorAll('#courses li');

filter.addEventListener('input', () => {
  const text = filter.value.trim().toLowerCase();
  
  courses.forEach(course => {
    const courseName = course.textContent.trim().toLowerCase();
    
    if (courseName.includes(text)) {
      course.style.display = "block";
    } else {
      course.style.display = "none";
    }
  });
});

    