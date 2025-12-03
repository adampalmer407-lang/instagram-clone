function toggleLike(btn) {
  if (btn.innerHTML === "♡") {
    btn.innerHTML = "❤️";
  } else {
    btn.innerHTML = "♡";
  }
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function fakeUpload() {
  alert("This is a beginner demo — real upload coming soon!");
}
// LIKE BUTTON
function toggleLike(btn) {
  btn.innerHTML = (btn.innerHTML === "♡") ? "❤️" : "♡";
}

// DARK MODE
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// FAKE UPLOAD FROM BEFORE
function fakeUpload() {
  alert("Use the new Upload Page for real image preview!");
}

// --------------------------
// COMMENTS PAGE LOGIC
// --------------------------

function addComment() {
  let input = document.getElementById("newComment");
  let list = document.getElementById("commentList");

  if (input.value.trim() !== "") {
    let p = document.createElement("p");
    p.textContent = input.value;
    list.appendChild(p);
    input.value = "";
  }
}

// --------------------------
// SEARCH PAGE (FAKE SEARCH)
// --------------------------

let demoData = ["username", "friend", "coolguy", "catlover", "doglover"];

function searchPosts() {
  let text = document.getElementById("searchBox").value.toLowerCase();
  let resultArea = document.getElementById("results");

  resultArea.innerHTML = "";

  demoData.forEach(name => {
    if (name.includes(text)) {
      let p = document.createElement("p");
      p.textContent = name;
      resultArea.appendChild(p);
    }
  });
}

// --------------------------
// REAL IMAGE UPLOAD PREVIEW
// --------------------------

function previewImage() {
  let file = document.getElementById("fileInput").files[0];
  let preview = document.getElementById("previewArea");

  if (file) {
    let img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    img.style.width = "100%";
    img.style.borderRadius = "10px";

    preview.innerHTML = "";
    preview.appendChild(img);
  }
}

function saveImage() {
  alert("Image saved locally! (This is frontend-only. I can help you add a real backend later.)");
}
