	// Functie om de gebruiker uit te loggen
    function logout() {
        fetch('https://backend-portfolio-coin.lloyd-aipassa.deno.net/users/logout', {
            method: 'POST',           // Stuur een POST request
            credentials: 'include'    // Cookies worden meegestuurd
        })
        .then((response) => {
            if (response.ok) {
                // Redirect naar de loginpagina na succesvol uitloggen
                window.location.href = '/login';
            } else {
                console.error('Logout mislukt');
            }
        })
        .catch((error) => {
            console.error('Error tijdens uitloggen:', error);
        });
    }

    // Eventlistener toevoegen aan de logout-knop
    document.getElementById('logoutButton').addEventListener('click', logout);