//Seleção dos elementos
const buttons = document.querySelectorAll("#image-picker li"); // todos os botões
const image = document.querySelector("#product-image");

// evntos paracada um dos botões
buttons.forEach( (btn) => {
    btn.addEventListener("click", (e) => {   /* (1) indentificando o botão clicado pelo elemnto de evento.*/
        console.log(e);
    
        /* (2) removendo a classe ".color" dos botões que forem selecionados ao click . */
        buttons.forEach((btn) => {
            btn.querySelector(".color").classList.remove("selected");
        });

        /*Adicionar a classe no botão correto.*/
        const button = e.target; // botão correto
        
        const id = button.getAttribute("id");
          
        button.querySelector(".color").classList.add("selected"); //adicionando a calsse ".color" removida no botão correto.
       
        image.classList.add("changing");
        image.setAttribute("src", `img/iphone_${id}.jpg`);

        setTimeout(() => {
            image.classList.toggle("changing"); //pesquisar o método toggle
        }, 200);
    });
});

