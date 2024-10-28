// Inizializza il carrello
let carrello = JSON.parse(localStorage.getItem('carrello')) || [];

// Funzione per mostrare il carrello
function mostraCarrello() {
    const carrelloContainer = document.getElementById('carrello-container');
    const messaggioVuoto = document.getElementById('messaggio-carrello-vuoto');
    const svuotaCarrelloButton = document.getElementById('svuota-carrello');

    carrelloContainer.innerHTML = '';

    // Se il carrello è vuoto, mostra il messaggio e disabilita il pulsante
    if (carrello.length === 0) {
        messaggioVuoto.style.display = 'block';
        svuotaCarrelloButton.disabled = true; // Rende il pulsante non cliccabile
        svuotaCarrelloButton.classList.add('disabilitato'); // Applica lo stile disabilitato
    } else {
        messaggioVuoto.style.display = 'none';
        svuotaCarrelloButton.disabled = false; // Rende il pulsante cliccabile
        svuotaCarrelloButton.classList.remove('disabilitato'); // Rimuove lo stile disabilitato

        // Mostra i prodotti nel carrello
        carrello.forEach((prodotto, index) => {
            carrelloContainer.innerHTML += `
                <div class="prodotto">
                    <h3>${prodotto.nome}</h3>
                    <p>Prezzo: €${prodotto.prezzo.toFixed(2)}</p>
                    <a href="${prodotto.link}" target="_blank">Completa l'acquisto su Tostadora</a>
                    <button onclick="rimuoviDalCarrello(${index})">Rimuovi</button>
                </div>
            `;
        });
    }
}

// Funzione per svuotare tutto il carrello
function svuotaCarrello() {
    carrello = [];
    localStorage.setItem('carrello', JSON.stringify(carrello));
    mostraCarrello();
    alert('Carrello svuotato!');
}

// Funzione per aggiungere un prodotto al carrello
function aggiungiAlCarrello(nome, prezzo, link) {
    carrello.push({ nome, prezzo, link });
    localStorage.setItem('carrello', JSON.stringify(carrello));
    mostraCarrello(); // Aggiorna il carrello nella pagina
    alert(`Prodotto "${nome}" aggiunto al carrello!`);
}

// Funzione per rimuovere un singolo elemento dal carrello
function rimuoviDalCarrello(index) {
    carrello.splice(index, 1);
    localStorage.setItem('carrello', JSON.stringify(carrello));
    mostraCarrello(); // Aggiorna la vista del carrello
}

// Visualizza il carrello al caricamento della pagina
mostraCarrello();
