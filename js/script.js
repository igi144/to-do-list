{
    let tasks = []
    let hideDoneTasks = false

    const addNewTask = (newTask) => {
        tasks = [
            ...tasks,
            { content: newTask }
        ];
        render();
    }

    const removeTask = (index) => {
        tasks = [
            ...tasks.slice(0, index),
            ...tasks.slice(index + 1)
        ]
        render();
    }

    const toggleTaskDone = (index) => {
        tasks = [...tasks.slice(0, index),
        {
            ...tasks[index],
            done: !tasks[index].done
        },
        ...tasks.slice(index + 1)]
        render();
    }

    const completeAllTasks = () => {
        tasks = tasks.map((task) => ({ ...task, done: true }));
        render();
    }

    const bindButtonsEvents = () => {
        const buttonHideDone = document.querySelector(".js-buttonHideDone")

        buttonHideDone.addEventListener("click", () => {
            hideDoneTasks = !hideDoneTasks
            render();
        })

        const completeButton = document.querySelector(".js-buttonComplete")

        completeButton.addEventListener("click", () => {
            completeAllTasks();
        })
    }

    const renderTasks = () => {
        let stringList = ""

        for (task of tasks) {

            stringList +=
                `
             <li class="${task.done && hideDoneTasks ? "tasksHide" : ""} tasks__item ">
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

    const renderButtons = () => {

        let htmlButtons = ""
        const buttons = document.querySelector(".js-buttons")

        if (tasks.length === 0) {
            buttons.innerHTML = "";
        } else {
            htmlButtons += `
                    <button class="js-buttonHideDone tasksButtons">
                    ${hideDoneTasks ? "Pokaż ukończone" : "Ukryj ukończone"}
                    </button>
                    <button class="${tasks.every(({ done }) => done) ? "disabled && tasksDoneButton" : ""} js-buttonComplete  tasksButtons button__completeAll"
                    >
                    Ukończ wszystkie    
                    </button>
                `;
            buttons.innerHTML = htmlButtons;

            bindButtonsEvents();
        };
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
                toggleTaskDone(indexTask);
            })
        })
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTask = document.querySelector(".js-newTask");
        const newTaskContent = newTask.value.trim();

        if (newTaskContent !== "") {
            addNewTask(newTaskContent);
            newTask.value = "";
            newTask.focus();
        }
    }

    const render = () => {
        renderTasks();
        renderButtons();
        bindEvents();
    }

    const init = () => {
        render();
        const form = document.querySelector(".js-form")
        form.addEventListener("submit", onFormSubmit)
    }
    init();
}
