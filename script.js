const posts = document.querySelectorAll('.post');
const heartButtons = document.querySelectorAll('.heart-btn');

heartButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const icon = btn.querySelector('.heart-icon');
        icon.classList.toggle('active'); // Se tiver a classe, remove. Se não tiver, adiciona.
    });
});

// 2. Sistema de Busca Simples
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase();

    posts.forEach(post => {
        const title = post.querySelector('h2').innerText.toLowerCase();
        if (title.includes(filter)) {
            post.style.display = "block";
        } else {
            post.style.display = "none";
        }
    });
});