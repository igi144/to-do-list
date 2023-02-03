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

    const render = () => {

        let stringList = ""

        for (task of tasks) {

            stringList += `
        
            <li
        ${task.done ? " style= \"text-decoration: line-through\"" : ""}
        >
        ${task.content}
        </li>
        
        `

            document.querySelector(".js-tasks").innerHTML = stringList;
        }
    }

    const addNewTask = (newTask) => {

        tasks.push({
            content: newTask,

        });

        render();

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
