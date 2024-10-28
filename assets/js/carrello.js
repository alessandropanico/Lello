let carrello = JSON.parse(localStorage.getItem('carrello')) || [];

function aggiungiAlCarrello(nome, prezzo, link) {
    carrello.push({ nome, prezzo, link });
    localStorage.setItem('carrello', JSON.stringify(carrello));
    alert(`Prodotto "${nome}" aggiunto al carrello!`);
}

function mostraCarrello() {
    const carrelloContainer = document.getElementById('carrello-container');
    carrelloContainer.innerHTML = '';
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

function rimuoviDalCarrello(index) {
    carrello.splice(index, 1);
    localStorage.setItem('carrello', JSON.stringify(carrello));
    mostraCarrello();
}
