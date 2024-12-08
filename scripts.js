document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scroll for Internal Links Only
    document.querySelectorAll('nav a').forEach((link) => {
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        // Internal links (e.g., #tips)
        link.addEventListener('click', function (e) {
          e.preventDefault(); // Prevent default navigation
  
          const targetSection = document.querySelector(href);
          if (targetSection) {
            // Smooth scroll to the section
            targetSection.scrollIntoView({
              behavior: 'smooth',
            });
          }
  
          // Update active navigation link styling
          document.querySelectorAll('nav a').forEach((nav) => nav.classList.remove('active'));
          this.classList.add('active');
        });
      }
    });
  
    // Scroll-based Animations for Tips Section
    const fadeElements = document.querySelectorAll('.fade-in-on-scroll');
  
    window.addEventListener('scroll', () => {
      fadeElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          element.style.opacity = 1;
          element.style.transform = 'translateY(0)';
        }
      });
    });
  
    // To-Do List Functionality
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const addBtn = document.getElementById('add-btn');
  
    if (addBtn) {
      // Add Task Event
      addBtn.addEventListener('click', () => {
        const task = todoInput.value.trim(); // Trim whitespace
        if (task === '') {
          alert('Please enter a task!');
          return; // Exit if input is empty
        }
  
        // Create list item
        const li = document.createElement('li');
        li.textContent = task;
  
        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '❌';
        deleteBtn.style.marginLeft = '10px';
        deleteBtn.addEventListener('click', () => {
          li.remove(); // Remove the task on delete
        });
  
        // Append delete button to the list item
        li.appendChild(deleteBtn);
  
        // Append the list item to the list
        todoList.appendChild(li);
  
        // Clear the input field
        todoInput.value = '';
      });
    }
  });
  