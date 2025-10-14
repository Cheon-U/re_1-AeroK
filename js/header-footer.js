        // header.html 불러오기
        fetch('header.html')
            .then(res => res.text())
            .then(data => {
                document.querySelector('#header').innerHTML = data;
            });

        // footer.html 불러오기
        fetch('footer.html')
            .then(res => res.text())
            .then(data => {
                document.querySelector('#footer').innerHTML = data;
            });
