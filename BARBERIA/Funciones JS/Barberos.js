// Datos de los barberos
const cards = [
    {
      imagen: "images/fotoBarber.jpg",
      titulo: "Barber 1",
      descripcion: "Especialista en cortes modernos y fades perfectos."
    },
    {
      imagen: "images/FondoBar.jpg",
      titulo: "Barber 2",
      descripcion: "Experto en barbería clásica y diseño de barba."
    },
    {
      imagen: "images/playera.jpg",
      titulo: "Barber 3",
      descripcion: "Cortes urbanos, estilos frescos y atención personalizada."
    }
  ];

  let currentCard = 0;

  function mostrarCard(index) {
    const card = cards[index];
    document.getElementById("imagen").src = card.imagen;
    document.getElementById("titulo").textContent = card.titulo;
    document.getElementById("descripcion").textContent = card.descripcion;
  }

  function siguienteCard() {
    currentCard = (currentCard + 1) % cards.length;
    mostrarCard(currentCard);
  }

  function anteriorCard() {
    currentCard = (currentCard - 1 + cards.length) % cards.length;
    mostrarCard(currentCard);
  }