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

    for(task of tasks){

        stringList += `<li>${task.content}</li>`


    };

    document.querySelector(".js-tasks").innerHTML = stringList;



   }







    const onFormSubmit = (event) => {

        event.preventDefault();

    }




    const init = () => {

        const form = document.querySelector(".js-form")

        form.addEventListener("submit", onFormSubmit)

        render();

    }

    init();


}
