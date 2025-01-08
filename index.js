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

    function displayBook(book){
        return 'my book is '+' '+book.title+' '+' creating by'+' '+book.Author+' '+book.genre+' '+'and it was'+' '+book.description
    }
    
    

    
    