const paragraph = document.getElementById("text");
const words = paragraph.textContent.split(" ");
paragraph.innerHTML = words
  .map((word) =>
    word.length > 8 ? `<span class="highlight">${word}</span>` : word
  )
  .join(" ");
