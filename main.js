document.getElementById('fetchButton').addEventListener('click', function () {
    var url = document.getElementById('urlInput').value;
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById('responseDisplay').textContent = data;
        })
        .catch(error => {
            document.getElementById('responseDisplay').textContent = 'Error: ' + error;
        });
});