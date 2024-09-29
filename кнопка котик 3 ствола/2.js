function showImage() {
    const imageElement = document.getElementById('myImage');
    imageElement.src = '/images/kotik.jpg'; 
    imageElement.alt = 'Описание картинки'; 
    imageElement.style.display = 'block'; 

    
    const nextButton = document.querySelector('.pagna'); 
    nextButton.style.display = 'block'; 

    
}
