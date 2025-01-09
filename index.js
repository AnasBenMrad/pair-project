function books(title,Author,genre,description){
    return {
    title:title,
    Author:Author,
    genre:genre,
    description:description,
    favorite :false
    }
    
    }
    var book1=books('Harry Potter and thePhilosophers Stone','j.k.Rowling',' fantasy literature','The novels follow Harry Potter, an 11-year-old boy who discovers he is the son of famous wizards and will attend Hogwarts School of Witchcraft and Wizardry.')
    var book2 = books("Romeo and Juliet", "William Shakespeare","Tragedy","It is a tragic love story where the two main characters, Romeo and Juliet, are supposed to be sworn enemies but fall in love. Due to their families' ongoing conflict, they cannot be together, so they kill themselves because they cannot cope with being separated from one another.")
    var book3 = books( "crime and punishment","Fyodor Dostoevsky","novels",'Crime and Punishment follows the mental anguish and moral dilemmas of Rodion Raskolnikov, an impoverished ex-student in Saint Petersburg who plans to kill an unscrupulous pawnbroker, an old woman who stores money and valuable objects in her flat.')
    
    var array=[book1,book2,book3] 

    
    
    
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
      title: "crime and punishment",
      author: "Fyodor Dostoevsky",
      genre: "novels",
      description: "Crime and Punishment follows the mental anguish and moral dilemmas of Rodion Raskolnikov, an impoverished ex-student in Saint Petersburg who plans to kill an unscrupulous pawnbroker, an old woman who stores money and valuable objects in her flat",
      image:"../images/Romeo_juliet_movieposter.jpg"
    },
    {
        title: "Anatomicum",
        author: "Katy Wiedemann",
        genre: "Science",
        description: "A heart beating, skin cells growing, a thought appearing... Nothing could be more natural, yet what incredible everyday phenomena! What does the human body look like from the inside? How do the thousands of elements that make it up work together? How does the body change as it grows? How is life born? This beautiful book introduces us to this fascinating adventure, in which we participate at every moment without realizing it. Organs, tissues, muscles, bones, cells... Welcome to the Anatomicum",
        image: "../"

    }




















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

