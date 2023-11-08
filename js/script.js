// Ajoutez ceci à votre fichier JavaScript
document.getElementById('increment').addEventListener('click', function() {
    var counter = document.getElementById('counter');
    counter.value = parseInt(counter.value) + 1;
});

// ajoute une fonction qui permet de passer le teext en rouge quand il arrive a 10
document.getElementById('counter').addEventListener('change', function() {
    var counter = document.getElementById('counter');
    if (counter.value == 10) {
        counter.style.color = 'red';
    }
});