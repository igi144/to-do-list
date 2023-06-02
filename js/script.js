{
    let tasks = []
    let hideDoneTasks = false

    const bindButtons = () => {

        let htmlButtons = ""
        const buttons = document.querySelector(".js-buttons")

        if (tasks.length === 0) {
            buttons.innerHTML = "";
        } else {

            htmlButtons += `
                    <button class="button__hideDone buttons__button">
                       <span class="buttonName">Ukryj ukończone </span>
                    </button>
                    <button class="js-buttonComplete button__completeAll buttons__button">
                    Ukończ wszystkie    
                    </button>
            `;
        };
        buttons.innerHTML = htmlButtons;

        const buttonName = document.querySelector(".buttonName")

        hideTasks(buttonName);
        allDone();

    }

    const allDone = () => {
        if (tasks.length === 0) {
            return
        }
        else {
            const completeButton = document.querySelector(".js-buttonComplete")
            completeButton.addEventListener("click", () => {
                const task = document.querySelector(".js-tasks")
                task.classList.add("tasks__contentDone")
            })
        }
    }

    const hideTasks = (buttonName) => {
        if (tasks.length === 0) {
            return
        }
        else {
            if (task.done) {
                const hide = document.querySelector(".button__hideDone")
                hide.addEventListener("click", () => {
                    const task = document.querySelector(".js-tasks")
                    task.classList.toggle("tasks__hide")

                    if (task.classList.contains("tasks__hide")) {
                        buttonName.innerHTML = "Pokaż ukończone"
                    }
                    else {
                        buttonName.innerHTML = "Ukryj ukończone"
                    }
                })
            }
        }
    }

    const bindTasks = () => {
        let stringList = ""

        for (task of tasks) {

            stringList +=
                `
                <li class="js__listClass  tasks__item hideDoneTasks ">
                <button class="js-toggleButton toggleButton">
                ${task.done ? "✓" : ""}
                </button>
                <span class="${task.done ? " js__content--done tasks__contentDone " : ""}"> 
                ${task.content}
                </span>
                <button class="js-removeButton removeButton button">
                  <img src="jpg/pngwing.com.png">
                  </button>
                 </li>
                 `
        }
        document.querySelector(".js-tasks").innerHTML = stringList;
    }

    const render = () => {
        bindTasks();
        bindEvents();
        bindButtons();
    }

    const bindEvents = () => {

        const removeButton = document.querySelectorAll(".js-removeButton")

        removeButton.forEach((remove, index) => {
            remove.addEventListener("click", () => {
                removeTask(index);
            })
        })

        const toggleTask = document.querySelectorAll(".js-toggleButton")

        toggleTask.forEach((toggle, indexTask) => {
            toggle.addEventListener("click", () => {
                scratchTask(indexTask);
            })
        })
    }

    const scratchTask = (indexTask) => {
        tasks[indexTask].done = !tasks[indexTask].done;
        render();
    }

    const removeTask = (index) => {
        tasks.splice(index, 1);
        render(index);
    }

    const addNewTask = (newTask) => {
        tasks.push({
            content: newTask
        })

        render();
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const jsNewTask = document.querySelector(".js-newTask");
        const newTaskContent = jsNewTask.value.trim();

        if (newTaskContent !== "") {
            addNewTask(newTaskContent);
            jsNewTask.value = "";
            jsNewTask.focus();
        }
    }

    const init = () => {
        render();

        const form = document.querySelector(".js-form")
        form.addEventListener("submit", onFormSubmit)
    }

    init();
}







