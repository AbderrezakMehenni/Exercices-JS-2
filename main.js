// Exercice 1
    // function changerImage() {
    //     let image = document.getElementById("image1");
    //     image.src = "images/image1_2.jpg";
    // };

    // function restaurerImage() {
    //     let image = document.getElementById("image1");
    //     image.src = "images/image1.jpg";
    // };

// Exercice 2
    // function afficherMessage() {
    //     alert("Merci de votre participation");
    // }

    // let inputElement = document.getElementById("lastname");

    // inputElement.addEventListener("blur", afficherMessage);

// Exercice 3
    // function afficherValeur(event) {
    //     let inputValue = event.target.value;
    //     alert("La valeur du champ est : " + inputValue);
    // }

    // let inputElement = document.getElementById("lastname");

    // inputElement.addEventListener("keyup", afficherValeur);

// Exercice 4
    // function resetForm() {
    //     document.querySelector("#nom").reset();
    // }

// Exercice 5
    // function changerImage() {
    //     let i1 = document.getElementById("image1");
    //     let i2 = document.getElementById("image2");
    //     let i3 = document.getElementById("image3");
    //     let i4 = document.getElementById("image4");
    //     let i5 = document.getElementById("image5");
        
    //     i1.src = "images/image1_2.jpg";
    //     i2.src = "images/image2_2.jpg";
    //     i3.src = "images/image3_2.jpg";
    //     i4.src = "images/image4_2.jpg";
    //     i5.src = "images/image5_2.jpg";
    // };

// Exercice 6
    function changerImage() {
        let i1 = document.getElementById("image1");
        let i2 = document.getElementById("image2");
        let i3 = document.getElementById("image3");
        let i4 = document.getElementById("image4");
        let i5 = document.getElementById("image5");
        
        i1.src = "images/image1_2.jpg";
        i2.src = "images/image2_2.jpg";
        i3.src = "images/image3_2.jpg";
        i4.src = "images/image4_2.jpg";
        i5.src = "images/image5_2.jpg";
    };
    function restaurerImage() {
        let i1 = document.getElementById("image1");
        let i2 = document.getElementById("image2");
        let i3 = document.getElementById("image3");
        let i4 = document.getElementById("image4");
        let i5 = document.getElementById("image5");

        i1.src = "images/image1.jpg";
        i2.src = "images/image2.jpg";
        i3.src = "images/image3.jpg";
        i4.src = "images/image4.jpg";
        i5.src = "images/image5.jpg";
    };