// Aguarda o documento HTML ser totalmente carregado
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Scroll Suave para os links de navegação
    const links = document.querySelectorAll('nav ul li a');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 60, // -60 para compensar o header fixo
                behavior: 'smooth'
            });
        });
    });

    // 2. Lógica do botão "Gerar Dica Sustentável"
    const btnDica = document.getElementById('btn-dica');
    const dicaTexto = document.getElementById('dica-texto');

    const dicasSustentaveis = [
        "🌱 Pratique a compostagem: transforme restos de alimentos orgânicos em adubo rico para o solo.",
        "💧 Economize água: adote sistemas de captação da água da chuva para irrigar hortas e jardins.",
        "🐝 Proteja os polinizadores: evite o uso excessivo de defensivos químicos que afetam as abelhas.",
        "♻️ Reutilize e Recicle: implemente a coleta seletiva correta na sua casa ou propriedade rural.",
        "🌳 Plante árvores nativas: elas ajudam a proteger as nascentes de rios e recuperam o ecossistema local."
    ];

    btnDica.addEventListener('click', () => {
        // Gera um índice aleatório baseado no tamanho da lista de dicas
        const randomIndex = Math.floor(Math.random() * dicasSustentaveis.length);
        
        // Aplica o texto da dica na