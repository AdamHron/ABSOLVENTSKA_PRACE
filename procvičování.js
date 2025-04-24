function vyhledat() {
    const trida = document.getElementById("trida").value;
    const unit = document.getElementById("unit").value;
    const subunit = document.getElementById("subunit").value;

    const tabulky = document.querySelectorAll(".lekce");

    tabulky.forEach(table => {
        const t = table.getAttribute("data-trida");
        const u = table.getAttribute("data-unit");
        const s = table.getAttribute("data-subunit");

        // Zkontroluj, jestli odpovídá výběru (pokud je něco vyplněné)
        const matchTrida = trida === "" || t === trida;
        const matchUnit = unit === "" || u === unit;
        const matchSubunit = subunit === "" || s === subunit;

        if (matchTrida && matchUnit && matchSubunit) {
            table.style.display = "block";
        } else {
            table.style.display = "";
        }
    });
}