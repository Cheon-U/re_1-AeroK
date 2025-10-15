fetch('header-footer.html')
    .then(res => res.text())
    .then(data => {
        const hf = document.createElement("div")
        hf.innerHTML = data;

        document.querySelector("#header").innerHTML = hf.querySelector("header").outerHTML;
        document.querySelector("#footer").innerHTML = hf.querySelector("footer").outerHTML;
    })