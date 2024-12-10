document.addEventListener('DOMContentLoaded', () => {
    
    document.querySelectorAll('nav a').forEach((link) => {
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        
        link.addEventListener('click', function (e) {
          e.preventDefault();
  
          const targetSection = document.querySelector(href);
          if (targetSection) {
            
            targetSection.scrollIntoView({
              behavior: 'smooth',
            });
          }
  
          
          document.querySelectorAll('nav a').forEach((nav) => nav.classList.remove('active'));
          this.classList.add('active');
        });
      }
    });
  
    
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
  

    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const addBtn = document.getElementById('add-btn');
  
    if (addBtn) {
      
      addBtn.addEventListener('click', () => {
        const task = todoInput.value.trim(); 
        if (task === '') {
          alert('Please enter a task!');
          return; 
        }
  
      
        const li = document.createElement('li');
        li.textContent = task;
  
      
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '❌';
        deleteBtn.style.marginLeft = '10px';
        deleteBtn.addEventListener('click', () => {
          li.remove(); 
        });
  
      
        li.appendChild(deleteBtn);
  
      
        todoList.appendChild(li);
  
      
        todoInput.value = '';
      });
    }
  });
  