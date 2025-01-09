function books(title,Author,genre,description){
    return {
    title:title,
    Author:Author,
    genre:genre,
    description:description,
    favorite :false
    }
    }
var books = localStorage.getItem("Books") || [   
    {
 title:'Harry Potter and thePhilosophers Stone',
 author :'j.k.Rowling',
 genre:'fantasy literature',
 description:'The novels follow Harry Potter, an 11-year-old boy who discovers he is the son of famous wizards and will attend Hogwarts School of Witchcraft and Wizardry.',
image:"../images/download.jpg"
    },
    {
      title: "Romeo and Juliet",
      author: "William Shakespeare",
      genre:'Tragedy',

      description: 'It is a tragic love story where the two main characters Romeo and Julietare supposed to be sworn enemies but fall in love Due to their families ongoing conflict they cannot be together so they kill themselves because they cannot cope with being separated from one another',
      image:"../images/images.jpg"
    },
    {
      title: "Crime And Punishment",
      author: "Fyodor Dostoevsky",
      genre: 'novels',
      description: 'Crime and Punishment follows the mental anguish and moral dilemmas of Rodion Raskolnikov, an impoverished ex-student in Saint Petersburg who plans to kill an unscrupulous pawnbroker, an old woman who stores money and valuable objects in her flat',
image:"../images/Romeo_juliet_movieposter.jpg"
    }]
$(document).ready(function () {
        $("#div").empty()
    
        for (var i = 0; i < books.length; i++) {
            $("#div").append(`
                <div id="book-card">
                    <img src="${books[i].image}" alt="" class="" ><br>
         <h3 onclick$('')=href='./images/romeo-and-juliet_PDF_FolgerShakespeare.pdf'>Title:${books[i].title}</h3><br>
                    Created by :${books[i].author}'</strong><br>
                     And his genre is'${books[i].genre}'<br>
                     This book is about '${books[i].description}'<br>
                    </strong>
                </div>`)
                
            }
})





















]

// Fonction pour créer un nouveau livre
function createNewBook(title, author, gender, description, photo, pdfLink) {
    const newBook = {
        title,
        author,
        gender,
        description,
        photo,
        pdfLink,
        isFavorite: false
    };
    books.push(newBook);
    renderBooks(); // Rafraîchir l'affichage des livres
}

