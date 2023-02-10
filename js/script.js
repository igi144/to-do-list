{
    const tasks = []

    const render = () => {

        let stringList = ""

        for (task of tasks) {

            stringList +=
                `
            <li class="js__listClass">

              <button class="js-toggleButton">
              ${task.done ? "✓" : ""}
              </button>
           
              <span class="${task.done ? " js__content--done " : ""}"> 
              
              ${task.content}
              </span>
           
              <button class="js-removeButton button">
              <img src="jpg/pngwing.com.png">
              </button>
             </li>
             `
        }

        document.querySelector(".js-tasks").innerHTML = stringList;

        bindEvents();
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
        const jsNewTaskWord = jsNewTask.value.trim();

        if (jsNewTaskWord !== "") {
            addNewTask(jsNewTaskWord);
            jsNewTask.value = "";
        }
        jsNewTask.focus();

    }

    const init = () => {
        render();

        const form = document.querySelector(".js-form")
        form.addEventListener("submit", onFormSubmit)
    }

    init();
}