const videos = [
    { title: 'Vídeo 1', description: 'Descrição do Vídeo 1', url: 'video1.mp4' },
    { title: 'Vídeo 2', description: 'Descrição do Vídeo 2', url: 'video2.mp4' },
    // Adicione mais vídeos conforme necessário
];

function searchVideos() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const videoResultsElement = document.getElementById('video-results');

    // Limpe os resultados anteriores
    videoResultsElement.innerHTML = '';

    // Filtrar vídeos com base no termo de pesquisa
    const filteredVideos = videos.filter(video => video.title.toLowerCase().includes(searchTerm) || video.description.toLowerCase().includes(searchTerm));

    if (filteredVideos.length === 0) {
        videoResultsElement.innerHTML = '<p>Nenhum vídeo encontrado.</p>';
    } else {
        filteredVideos.forEach(video => {
            const videoElement = document.createElement('div');
            videoElement.innerHTML = `
                <h2>${video.title}</h2>
                <p>${video.description}</p>
                <video controls>
                    <source src="${video.url}" type="video/mp4">
                    Seu navegador não suporta vídeo HTML5.
                </video>
            `;
            videoResultsElement.appendChild(videoElement);
        });
    }
}
