{
    const tasks = [
        {
            content: "zjesc pierogi",
            done: true
        },
        {
            content: "odrobic lekcje z programowania",
            done: true
        },

    ];



    const render = () => {

        let htmlString = "";

        for (const task of tasks)
            htmlString += `
        <li>
      ${task.content}
        </li>
        `;


        document.querySelector(".js-tasks").innerHTML = htmlString;
    }

    const onFormSubmit = document.querySelector(".js-form")

    const init = () =>
        render();

    init();

}