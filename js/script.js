{
    let tasks = []
    let hideDoneTasks = false

    const addNewTask = (newTask) => {
        tasks = [...tasks,
        { content: newTask }]
        render();
    }

    const removeTask = (index) => {
        tasks = [...tasks.slice(0, index),
        ...tasks.slice(index + 1)]
        render();
    }

    const scratchTask = (index) => {
        tasks = [...tasks.slice(0, index),
        { ...tasks[index], done: !tasks[index].done },
        ...tasks.slice(index + 1)]
        render();
    }

    const completeAllTasks = () => {
        tasks = tasks.map((task) => ({ ...task, done: true }));
        render();
    }

    const tasksButtonsEvents = () => {
        const buttonHideDone = document.querySelector(".js-button__hideDone")

        buttonHideDone.addEventListener("click", () => {
            hideDoneTasks = !hideDoneTasks
            render();
        })

        const completeButton = document.querySelector(".js-buttonComplete")

        completeButton.addEventListener("click", () => {
            completeAllTasks();
        })
    }

    const bindButtons = () => {

        let htmlButtons = ""
        const buttons = document.querySelector(".js-buttons")

        if (tasks.length === 0) {
            buttons.innerHTML = "";
        } else {
            htmlButtons += `
                    <button class="js-button__hideDone tasksButtons">
                    ${hideDoneTasks ? "Pokaż ukończone" : "Ukryj ukończone"}
                    </button>
                    <button class="${tasks.every(({ done }) => done) ? "disabled && tasksDoneButton" : ""} js-buttonComplete  tasksButtons button__completeAll"
                    >
                    Ukończ wszystkie    
                    </button>
                `;
            buttons.innerHTML = htmlButtons;

            tasksButtonsEvents();
        };
    }

    const bindTasks = () => {
        let stringList = ""

        for (task of tasks) {

            stringList +=
                `
             <li class="${task.done && hideDoneTasks ? "tasks__hide" : ""} js__listClass  tasks__item ">
              <button class="js-toggleButton toggleButton ">
                ${task.done ? "✓" : ""}
              </button>
                <span class="${task.done ? "tasks__contentDone " : ""}"> 
                 ${task.content}
                </span>
              <button class="js-removeButton removeButton">
               <img src="jpg/pngwing.com.png">
              </button>
             </li>
            `
        }
        document.querySelector(".js-tasks").innerHTML = stringList;
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

    const render = () => {
        bindTasks();
        bindEvents();
        bindButtons();
    }

    const init = () => {
        render();
        const form = document.querySelector(".js-form")
        form.addEventListener("submit", onFormSubmit)
    }
    init();
}


