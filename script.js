// ==== INDEX PAGE: Display Blog Posts ====
const blogList = document.getElementById("blog-list");

if (blogList) {
  const posts = JSON.parse(localStorage.getItem("blogPosts")) || [];

  posts.forEach((post, index) => {
    const div = document.createElement("div");
    div.classList.add('post-container'); // Add a class for easy reference
    div.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.content}</p>
      <button class="delete-btn" data-index="${index}">Delete</button>
      <hr />
    `;
    blogList.appendChild(div);
  });

  // Attach event listeners to the delete buttons
  const deleteButtons = document.querySelectorAll('.delete-btn');
  deleteButtons.forEach(button => {
    button.addEventListener('click', deletePost);
  });
}

// Function to delete a post
function deletePost(event) {
  const index = event.target.getAttribute('data-index');
  let posts = JSON.parse(localStorage.getItem("blogPosts")) || [];
  
  // Remove the post from the array using splice
  posts.splice(index, 1);

  // Save the updated posts back to localStorage
  localStorage.setItem("blogPosts", JSON.stringify(posts));

  // Remove the post element from the DOM
  const postContainer = event.target.closest('.post-container');
  postContainer.remove();

  // Optional: Show a confirmation message or reload the page if needed
  alert("Post deleted successfully!");

  // You can reload the page to update the post list
  // window.location.reload(); 
}


// ==== LOGIN PAGE: Handle Login Form ====
const loginForm = document.getElementById("login-form");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("login-message");

    // Dummy credentials
    if (username === "thilak" && password === "thi") {
      message.style.color = "green";
      message.innerText = "Login successful!";
      setTimeout(() => {
        window.location.href = "post.html"; // Redirect after login
      }, 1000);
    } else {
      message.style.color = "red";
      message.innerText = "Invalid username or password.";
    }
  });
}

// ==== POST PAGE: Handle Blog Submission ====
const postForm = document.getElementById("post-form");

if (postForm) {
  postForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const message = document.getElementById("post-message");

    const newPost = { title, content };

    // Save to localStorage
    let posts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    posts.push(newPost);
    localStorage.setItem("blogPosts", JSON.stringify(posts));

    message.innerText = "✅ Blog post submitted successfully!";
    postForm.reset();
  });
}

// ==== CONTACT PAGE: Handle Contact Form ====
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const response = document.getElementById("contact-response");

    // For now we just simulate sending
    console.log("Contact Form Submitted:", { name, email, message });

    response.innerText = "✅ Thank you! Your message has been sent.";

    // Optionally clear the form
    contactForm.reset();
  });
}



  