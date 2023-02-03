{
    const tasks = [

        {
            content: "Zjeść buritto",
            done: true,
        },
        {
            content: "Pouczyć się programowania",
            done: false,
        },
        {
            content: "Pograć w battlefielda",
            done: false,
        },

    ];


    const removeTask = (index) => {

        tasks.splice(index, 1);

        render();
    }

    const toggleTask = (taskIndex) => {

        tasks[taskIndex].done = !tasks[taskIndex].done;

        render();
    }

    bindEvents = () => {

        const removeButtons = document.querySelectorAll(".js-remove")
        removeButtons.forEach((removeButtons, index) => {
            removeButtons.addEventListener("click", () => {
                removeTask(index);
            })

        })

        const toggleButtons = document.querySelectorAll(".js-taskDone")
        toggleButtons.forEach((toggleButton, taskIndex) => {
            toggleButton.addEventListener("click", () => {
                toggleTask(taskIndex);
            })

        })
    }

    const addNewTask = (newTask) => {

        tasks.push({
            content: newTask,

        });

        render();

    }

    const render = () => {

        let stringList = ""

        for (task of tasks) {

            stringList += `
        
            <li
        ${task.done ? " style= \"text-decoration: line-through\"" : ""}
        >
        <button class="js-taskDone">Zrobione?</button><button class="js-remove">Usuń</button>
        ${task.content}
     </li>
        
        `
            document.querySelector(".js-tasks").innerHTML = stringList;

            bindEvents();



        }
    }

    const onFormSubmit = (event) => {

        event.preventDefault();

        const newTask = document.querySelector(".js-newTask").value.trim();

        if (newTask === "") {
            return
        }

        addNewTask(newTask);

    }

    const init = () => {

        const form = document.querySelector(".js-form")

        form.addEventListener("submit", onFormSubmit,)

        render();
    }

    init();


}
