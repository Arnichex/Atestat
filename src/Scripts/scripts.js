// Sample motorbike data
const motorbikes = [
   ];
function displayMotorbikes() {
    const motorbikesContainer = document.getElementById('motorbikes');

    motorbikes.forEach(motorbike => {
        const motorbikeElement = document.createElement('div');
        motorbikeElement.classList.add('motorbike');
        motorbikeElement.innerHTML = `
            <a href="${motorbike.link}" target="_blank">
                <img src="${motorbike.image}" alt="${motorbike.brand} ${motorbike.model}" style="width: 100%; height: auto;">
                <h3>${motorbike.brand} ${motorbike.model}</h3>
                <p>Price: $${motorbike.price}</p>
            </a>
        `;
        motorbikesContainer.appendChild(motorbikeElement);
        
    });
    
        function showDetails(motorbikeId) {
            const isImageClick = event.target.tagName === 'IMG';

            if (isImageClick) {
                return;
            }

            const detailsPageUrl = `motorbike-details.html?motorbikeId=${motorbikeId}`;
            window.location.href = detailsPageUrl;
        }

        function getMotorbikeDetails(motorbikeId) {
            switch (motorbikeId) {
                case 'motorbike1':
                    return 'Details about Motorbike 1';
                case 'motorbike2':
                    return 'Details about Motorbike 2';
                case 'motorbike3':
                    return 'Details about Motorbike 3';
                // Add similar cases for other motorbikes
                default:
                    return 'Details not available';
            }
        }
    
}

document.addEventListener('DOMContentLoaded', displayMotorbikes);
