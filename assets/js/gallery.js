document.addEventListener('DOMContentLoaded', function () {
    const imageModal = document.getElementById('imageModal');
    if (imageModal) {
        imageModal.addEventListener('show.bs.modal', function (event) {
            // Elemento que activó el modal (el div .gallery-item)
            const triggerElement = event.relatedTarget;

            // Extraer información de los atributos data-*
            const title = triggerElement.getAttribute('data-title');
            const artist = triggerElement.getAttribute('data-artist');
            const year = triggerElement.getAttribute('data-year');
            const imgSrc = triggerElement.getAttribute('data-img-src');
            const description = triggerElement.getAttribute('data-description');

            // Referencias a los elementos del modal
            const modalTitle = imageModal.querySelector('.modal-title');
            const modalImage = imageModal.querySelector('#modalImage');
            const modalArtist = imageModal.querySelector('#modalArtist');
            const modalYear = imageModal.querySelector('#modalYear');
            const modalText = imageModal.querySelector('#modalText');

            // Actualizar el contenido del modal con la información extraída
            modalTitle.textContent = title;
            modalImage.src = imgSrc;
            modalImage.alt = title; // Bueno para la accesibilidad
            modalArtist.textContent = artist;
            modalYear.textContent = year;
            modalText.textContent = description;
        });
    }
});

