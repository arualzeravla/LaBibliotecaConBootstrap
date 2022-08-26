fetch("../json/productos.json")
    .then(response => response.json())
    .then(productos => {

        let prodVisto = [];
        
        let linkDetalles = document.querySelectorAll("a.linkDetalles");
        linkDetalles.forEach((link) => {
            link.addEventListener('click', function (e) {
                let linkID = e.target.id;
                for (producto of productos) {
                    if (linkID === producto.idBoton) {
                        prodVisto = producto;
                        let prodVistoJ = JSON.stringify(prodVisto)
                        localStorage.setItem("prodVisto", prodVistoJ);
                    }
                };
            })
        })


        let categoriaSolicitada = [];
        
        let linkResultados = document.querySelectorAll("a.dropdown-item");
        linkResultados.forEach((link) => {
            link.addEventListener('click', function (e) {
                let linkID = e.target.id;
                for (producto of productos) {
                    if (linkID === producto.categoria) {
                        categoriaSolicitada.push(producto);
                        let categoriaSolicitadaJ = JSON.stringify(categoriaSolicitada)
                        localStorage.setItem("categoriaSolicitada", categoriaSolicitadaJ);
                    }
                };
            })
        })

    });