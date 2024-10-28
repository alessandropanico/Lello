// Carica prodotti dal file JSON e li visualizza nella home
fetch('assets/json/prodotti.json')
    .then(response => response.json())
    .then(prodotti => {
        const container = document.getElementById('prodotti-container');
        prodotti.forEach(prodotto => {
            const prodottoHTML = `
                <div class="col-lg-12">
                    <div class="product-grid">
                        <div class="product-image">
                            <a href="${prodotto.link}" class="image">
                                <img src="${prodotto.immagine}" alt="${prodotto.nome}">
                            </a>
                            <span class="product-sale-label">sale!</span>
                            <ul class="product-links">
                                <li><a href="#"><i class="far fa-heart"></i></a></li>
                                <li><a href="#" onclick="aggiungiAlCarrello('${prodotto.nome}', ${prodotto.prezzo}, '${prodotto.link}')"><i class="fas fa-shopping-bag"></i></a></li>
                                <li><a href="#"><i class="fa fa-search"></i></a></li>
                            </ul>
                        </div>
                        <div class="product-content">
                            <h3 class="title"><a href="${prodotto.link}">${prodotto.nome}</a></h3>
                            <div class="price">€${prodotto.prezzo} <span>€${prodotto.sconto}</span></div>
                            <ul class="rating">
                                <li class="fas fa-star"></li>
                                <li class="fas fa-star"></li>
                                <li class="fas fa-star"></li>
                                <li class="fas fa-star"></li>
                                <li class="far fa-star"></li>
                            </ul>
                        </div>
                    </div>
                </div>
            `;
            container.innerHTML += prodottoHTML;
        });

        // Attiva lo slider dopo che i prodotti sono stati caricati
        $('#prodotti-container').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false,
            dots: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: { slidesToShow: 2 }
                },
                {
                    breakpoint: 768,
                    settings: { slidesToShow: 1 }
                }
            ]
        });
    })
    .catch(error => console.error('Errore nel caricamento dei prodotti:', error));
