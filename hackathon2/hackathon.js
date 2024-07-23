function getDataLocalstorage(nameData) {
  return JSON.parse(localStorage.getItem(nameData));
}

function updateDataLocalStorage(nameData, newData) {
  localStorage.setItem(nameData, JSON.stringify(newData));
}

// xử lý render skills
let logoLanguage = document.querySelector(".logo-language");
logoLanguage.innerHTML = "";
let listSkills = getDataLocalstorage("listSkills") || [];
for (let skill of listSkills) {
  logoLanguage.innerHTML += ` <div class="logo">
          <img
            src="${skill.image}"
            alt="skill"
          />
          <div>
            <h4>${skill.nameSkill}</h4>
            <p>${skill.yearExp}</p>
          </div>
        </div>`;
}

// xử lý render projects
let row2 = document.querySelector(".row2");
row2.innerHTML = "";
let listProjects = getDataLocalstorage("listProjects") || [];
for (let project of listProjects) {
  let technology = project.technology.split(",");
  row2.innerHTML += `<div class="item">
              <div class="div1">
                <div class="div1-1 bg-pink">
                  <img
                    src="${project.image}"
                    alt="project"
                  />
                </div>
                <div class="div1-2">
                  <h3>${project.nameProject}</h3>
                  <p>
                    ${project.linkGit}
                    <i
                      class="fa-solid fa-up-right-from-square"
                      style="color: #74c0fc"
                    ></i>
                  </p>
                </div>
              </div>

              <div class="div2">
                ${technology.map((tech) => `<button>${tech}</button>`).join("")}
              
              </div>
            </div>`;
}
