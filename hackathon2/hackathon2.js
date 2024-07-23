function getDataLocalstorage(nameData) {
  return JSON.parse(localStorage.getItem(nameData));
}

function updateDataLocalStorage(nameData, newData) {
  localStorage.setItem(nameData, JSON.stringify(newData));
}

// xử lý navbar
let navSkill = document.getElementById("navSkill");
let navProject = document.getElementById("navProject");
let currentNav = 1;
if (getDataLocalstorage("currentNav")) {
  currentNav = getDataLocalstorage("currentNav");
} else {
  updateDataLocalStorage("currentNav", currentNav);
}

let tagSkill = document.querySelector(".skill");
let tagProject = document.querySelector(".project");
if (currentNav == 1) {
  tagSkill.style.display = "block";
  tagProject.style.display = "none";
  navSkill.classList.add("styleNav");
  navProject.classList.remove("styleNav");
} else {
  tagSkill.style.display = "none";
  tagProject.style.display = "block";
  navSkill.classList.remove("styleNav");
  navProject.classList.add("styleNav");
}

// xử lý sự kiện bấm chọn navbar
navSkill.addEventListener("click", function () {
  currentNav = 1;
  updateDataLocalStorage("currentNav", currentNav);
  window.location.reload();
});

navProject.addEventListener("click", function () {
  currentNav = 2;
  updateDataLocalStorage("currentNav", currentNav);
  window.location.reload();
});

//-------------------------------------------------------------------------------section Skill
function renderDataSkill() {
  // xử lý sự kiện nhấn vào nút thêm mới kỹ năng
  let addSkill = document.getElementById("addSkill");
  let formCreateSkill = document.querySelector(".formCreateSkill");
  addSkill.addEventListener("click", function () {
    formCreateSkill.style.display = "block";
  });

  // xử lý sự kiện ẩn form create skill

  let buttonClose = document.getElementById("buttonClose");
  buttonClose.addEventListener("click", function () {
    formCreateSkill.style.display = "none";
  });

  let buttonCancel = document.getElementById("buttonCancel");
  buttonCancel.addEventListener("click", function () {
    formCreateSkill.style.display = "none";
  });

  // xử lý sự kiện thêm skill
  class Skill {
    constructor(id, nameSkill, image, yearExp) {
      (this.id = id),
        (this.nameSkill = nameSkill),
        (this.image = image),
        (this.yearExp = yearExp),
        (this.createDate = `${new Date().getDate()}/${
          new Date().getMonth() + 1
        }/${new Date().getFullYear()}`);
    }
  }
  // tạo dữ liệu skill
  let android = new Skill(
    1,
    "Android",
    "https://th.bing.com/th/id/OIP.KLXidkj4Pn8MvfqmY_VqQwHaIs?w=157&h=184&c=7&r=0&o=5&pid=1.7",
    "2 Year Experlence"
  );
  let angular = new Skill(
    2,
    "Angular",
    "https://th.bing.com/th/id/OIP.PtkUJ4KMeyguSSbaJCO41gHaH0?w=135&h=180&c=7&r=0&o=5&pid=1.7",
    "1 Year Experlence"
  );
  let bootstrap = new Skill(
    3,
    "Bootstrap",
    "https://th.bing.com/th/id/OIP.oDkmpM5TPGWwG8e9O8G1sQHaF5?w=215&h=180&c=7&r=0&o=5&pid=1.7",
    "3 Year Experlence"
  );
  let vue = new Skill(
    4,
    "Vue",
    "https://th.bing.com/th/id/OIP.nNGCxcz7kwJehe-YvBjJzwHaGa?w=187&h=180&c=7&r=0&o=5&pid=1.7",
    "2 Year Experlence"
  );
  let react = new Skill(
    5,
    "React",
    "https://th.bing.com/th?id=OIP.-BpvNzwkSx9w9LdAK1qzcgHaGo&w=264&h=236&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    "8 Month Experlence"
  );
  let mongodb = new Skill(
    6,
    "Mongodb",
    "data:image/jpeg;base64,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",
    "3 Month Experlence"
  );
  let laravel = new Skill(
    7,
    "Laravel",
    "data:image/jpeg;base64,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",
    "10 Month Experlence"
  );
  let nodeJs = new Skill(
    8,
    "Node.js",
    "data:image/jpeg;base64,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",
    "2 Year Experlence"
  );
  let demoListSkills = [
    android,
    angular,
    bootstrap,
    vue,
    react,
    mongodb,
    laravel,
    nodeJs,
  ];

  let buttonAdd = document.getElementById("buttonAdd");
  let nameSkill = document.getElementById("nameSkill");
  let yearExp = document.getElementById("yearExp");
  let createImage = document.getElementById("createImage");
  let listSkills = [];
  if (!getDataLocalstorage("listSkills")) {
    updateDataLocalStorage("listSkills", demoListSkills);
  } else {
    listSkills = getDataLocalstorage("listSkills");
  }

  // render data
  let bodySkill = document.getElementById("bodySkill");
  let count = 1;
  bodySkill.innerHTML = "";
  for (let skill of listSkills) {
    bodySkill.innerHTML += `<tr>
                <td>${count}</td>
                <td>${skill.nameSkill}</td>
                <td><img src="${skill.image}" alt="image" /></td>
                <td>${skill.yearExp}</td>
                <td>${skill.createDate}</td>
                <td> <button class="deleteSkill" title=${skill.id}>Xóa</button></td>
              </tr>`;
    count++;
  }
  // xử lý button xóa skill
  let buttonDeletes = document.querySelectorAll(".deleteSkill");
  for (let del of buttonDeletes) {
    del.addEventListener("click", function () {
      let check = confirm("Bạn muốn xóa kỹ năng này chứ ?");
      if (check) {
        let id = del.getAttribute("title");
        let index = listSkills.findIndex((skill) => skill.id == id);
        listSkills.splice(index, 1);
        updateDataLocalStorage("listSkills", listSkills);
        renderDataSkill();
      } else {
        formCreateSkill.style.display = "none";
      }
    });
  }

  // xử lý add new skill
  buttonAdd.addEventListener("click", function () {
    if (!nameSkill.value || !yearExp.value || !createImage.value) {
      alert("Vui lòng không bỏ trống ô nào !");
    } else {
      let check = false;
      for (let skill of listSkills) {
        if (skill.nameSkill == nameSkill.value) {
          check = true;
          break;
        }
      }
      if (check) {
        alert("Skill đã tồn tại !");
      } else {
        let id = listSkills[listSkills.length - 1].id + 1 || 1;
        let newSkill = new Skill(
          id,
          nameSkill.value,
          createImage.value,
          yearExp.value
        );
        listSkills.push(newSkill);
        updateDataLocalStorage("listSkills", listSkills);
        formCreateSkill.style.display = "none";
        renderDataSkill();
      }
    }
  });
}
renderDataSkill();

//------------------------------------------------------------------------------------section Project----------------------------------------------------------------

function renderDataProject() {
  // tạo dữ liệu project
  class Project {
    constructor(id, nameProject, image, technology, linkGit) {
      (this.id = id),
        (this.nameProject = nameProject),
        (this.image = image),
        (this.technology = technology),
        (this.linkGit = linkGit);
    }
  }

  let project1 = new Project(
    1,
    "Shoppee",
    "https://th.bing.com/th/id/OIP.NWY_ywjL5lqFqUN-J4p1ggHaHa?w=170&h=180&c=7&r=0&o=5&pid=1.7",
    "ReactJS , NodeJS , MySQL , Docker",
    "https://github.com/huongcaoha/"
  );

  let project2 = new Project(
    2,
    "Lazada",
    "https://th.bing.com/th/id/OIP.OJuyYgAg9UsgZYnH44D8dwAAAA?w=180&h=180&c=7&r=0&o=5&pid=1.7",
    "VueJS , Java , SQL Server , AWS",
    "https://github.com/huongcaoha/"
  );

  let project3 = new Project(
    3,
    "Tiktok",
    "https://th.bing.com/th/id/OIP.1I1gtkjFR_RgPq_tsnPi1gHaHa?w=172&h=180&c=7&r=0&o=5&pid=1.7",
    "NextJS , NodeJS , Oracle , AWS",
    "https://github.com/huongcaoha/"
  );

  let listProjects = [project1, project2, project3];
  if (getDataLocalstorage("listProjects")) {
    listProjects = getDataLocalstorage("listProjects");
  } else {
    updateDataLocalStorage("listProjects", listProjects);
  }

  // xử lý sự kiện nhấn vào nút thêm mới project
  let addSkill = document.getElementById("addProject");
  let formCreateProject = document.querySelector(".formCreateProject");
  addSkill.addEventListener("click", function () {
    formCreateProject.style.display = "block";
  });

  // xử lý sự kiện ẩn form create project

  let buttonClose = document.getElementById("buttonCloseProject");
  buttonClose.addEventListener("click", function () {
    formCreateProject.style.display = "none";
  });

  let buttonCancel = document.getElementById("buttonCancelProject");
  buttonCancel.addEventListener("click", function () {
    formCreateProject.style.display = "none";
  });

  // xử lý sự kiện nhấn vào nút add new project
  let nameProject = document.getElementById("nameProject");
  let imageProject = document.getElementById("imageProject");
  let technology = document.getElementById("technology");
  let linkGithub = document.getElementById("linkGithub");
  let buttonAddProject = document.getElementById("buttonAddProject");

  buttonAddProject.addEventListener("click", function () {
    if (
      !nameProject.value ||
      !imageProject.value ||
      !technology.value ||
      !linkGithub.value
    ) {
      alert("Vui lòng không bỏ trống ô dữ liệu nào !");
    } else {
      let index = listProjects.findIndex(
        (project) => project.nameProject == nameProject.value
      );
      if (index != -1) {
        console.log(index);
        alert("Project đã tồn tại !");
      } else {
        let idProject = 1;
        if (listProjects.length > 0) {
          idProject = listProjects[listProjects.length - 1].id + 1;
        }
        let newProject = new Project(
          idProject,
          nameProject.value,
          imageProject.value,
          technology.value,
          linkGithub.value
        );
        listProjects.push(newProject);
        updateDataLocalStorage("listProjects", listProjects);
        formCreateProject.style.display = "none";
        renderDataProject();
      }
    }
  });

  // render dữ liệu ra bảng
  let bodyProject = document.getElementById("bodyProject");
  bodyProject.innerHTML = "";
  for (let project of listProjects) {
    bodyProject.innerHTML += `<tr>
                <td>${project.id}</td>
                <td>${project.nameProject}</td>
                <td><img src="${project.image}" alt="project"></td>
                <td>${project.technology}</td>
                <td>
                  <button class="buttonUpdate" id="${project.id}">Sửa</button>
                  <button class="buttonDelete" id="${project.id}">Xóa</button>
                </td>
              </tr>`;
  }

  // xử lý button xóa project
  let buttonDeletes = document.querySelectorAll(".buttonDelete");
  for (let del of buttonDeletes) {
    del.addEventListener("click", function () {
      let rs = confirm("Bạn muốn xóa project này chứ ?");
      if (rs) {
        let id = del.getAttribute("id");
        let index = listProjects.findIndex((project) => project.id == id);
        listProjects.splice(index, 1);
        updateDataLocalStorage("listProjects", listProjects);
        window.location.reload();
      }
    });
  }
  // xử lý hiện form update project
  let formUpdateProject = document.querySelector(".formUpdateProject");
  let buttonUpdates = document.querySelectorAll(".buttonUpdate");

  for (let update of buttonUpdates) {
    update.addEventListener("click", function () {
      let idProject = update.getAttribute("id");
      let indexProject = listProjects.findIndex(
        (project) => project.id == idProject
      );
      let project = listProjects[indexProject];
      formUpdateProject.style.display = "block";
      formUpdateProject.innerHTML = ` <div class="tableUpdateProject">
              <div class="titleForm">
                <h2>Sửa dự án</h2>
                <p
                  style="cursor: pointer; font-size: 30px"
                  id="buttonCloseUpdate"
                >
                  x
                </p>
              </div>

              <label for="nameProjectUpdate">Tên dự án:</label><br />
              <input
                type="text"
                name="nameProjectUpdate"
                id="nameProjectUpdate"
                value="${project.nameProject}"
              />
              <br />

              <label for="imageProjectUpdate">Link hình ảnh:</label><br />
              <input
                type="text"
                name="imageProjectUpdate"
                id="imageProjectUpdate"
                value="${project.image}"
              />
              <br />

              <label for="technologyUpdate">Công nghệ sử dụng:</label><br />
              <input
                type="text"
                name="technologyUpdate"
                id="technologyUpdate"
                value="${project.technology}"
              />
              <br />

              <label for="linkGithubUpdate">Link github:</label><br />
              <input
                type="text"
                name="linkGithubUpdate"
                id="linkGithubUpdate"
                value="${project.linkGit}"
              />
              <br />

              <button id="buttonCancelProjectUpdate">Hủy</button>
              <button id="buttonUpdateProjectUpdate" title="${project.id}" projectName="${project.nameProject}">Sửa</button>
            </div>`;

      // xử lý ẩn form update project

      let buttonCancelProjectUpdate = document.getElementById(
        "buttonCancelProjectUpdate"
      );
      let buttonCloseUpdate = document.getElementById("buttonCloseUpdate");
      buttonCloseUpdate.addEventListener("click", function () {
        formUpdateProject.style.display = "none";
      });

      buttonCancelProjectUpdate.addEventListener("click", function () {
        formUpdateProject.style.display = "none";
      });

      // xử lý button cập nhật lại project
      let buttonUpdateProjectUpdate = document.getElementById(
        "buttonUpdateProjectUpdate"
      );
      buttonUpdateProjectUpdate.addEventListener("click", function () {
        let nameProjectUpdate = document.getElementById("nameProjectUpdate");
        let imageProjectUpdate = document.getElementById("imageProjectUpdate");
        let technologyUpdate = document.getElementById("technologyUpdate");
        let linkGithubUpdate = document.getElementById("linkGithubUpdate");
        let idProject = buttonUpdateProjectUpdate.getAttribute("title");
        let oddName = buttonUpdateProjectUpdate.getAttribute("projectName");
        let newArr = listProjects.filter(
          (project) => project.nameProject != oddName
        );

        let indexProject = newArr.findIndex(
          (project) => project.nameProject == nameProjectUpdate.value
        );
        let indexOdd = listProjects.findIndex(
          (project) => project.nameProject == oddName
        );
        if (
          !nameProjectUpdate.value ||
          !imageProjectUpdate.value ||
          !technologyUpdate.value ||
          !linkGithubUpdate.value
        ) {
          alert("Vui lòng không bỏ trống ô dữ liệu nào !");
        } else {
          if (indexProject != -1) {
            alert("Tên project đã tồn tại !");
          } else {
            let newProject = new Project(
              idProject,
              nameProjectUpdate.value,
              imageProjectUpdate.value,
              technologyUpdate.value,
              linkGithubUpdate.value
            );
            if (newProject.nameProject == oddName) {
              listProjects.splice(indexOdd, 1, newProject);
              updateDataLocalStorage("listProjects", listProjects);
              formUpdateProject.style.display = "none";
              renderDataProject();
            } else {
              listProjects.splice(indexProject, 1, newProject);
              updateDataLocalStorage("listProjects", listProjects);
              formUpdateProject.style.display = "none";
              renderDataProject();
            }
          }
        }
      });
    });
  }
}
renderDataProject();
