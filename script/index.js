const loadLessions = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all") //promise
    .then((res) => res.json())
    .then((data) => displayLesson(data.data));
};

const displayLesson = (lessons) => {
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML = "";

  lessons.forEach((element) => {
    const levelDiv = document.createElement("div");
    levelDiv.innerHTML = `<button class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>
                         Lesson - ${element.level_no}</button>`;

    levelContainer.appendChild(levelDiv);
  });
};

loadLessions();
