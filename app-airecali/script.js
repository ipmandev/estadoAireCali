// script.js

// Función que simula la obtención de datos de calidad del aire en tiempo real
async function obtenerDatosCalidadAire() {
    try {
        // Aquí simulamos que recibimos los datos de una API externa
        const datos = {
            "ica": 135,  // Ejemplo de valor del ICA (puede ser obtenido de una API real)
            "proximidad": "Centro de Cali",  // Ejemplo de zona
        };
        actualizarInterfaz(datos);
    } catch (error) {
        console.error('Error al obtener los datos de calidad del aire:', error);
    }
}

// Función para actualizar la interfaz con los datos recibidos
function actualizarInterfaz(datos) {
    const icaValue = document.getElementById('ica-value');
    const alerta = document.getElementById('alerta');
    const sugerenciasLista = document.getElementById('sugerencias-lista');

    // Actualizamos el valor del ICA
    icaValue.textContent = `ICA: ${datos.ica}`;

    // Mostrar alerta según el valor del ICA
    if (datos.ica <= 50) {
        alerta.textContent = 'Calidad del aire buena';
        alerta.className = 'baja';
        mostrarSugerencias([]);
    } else if (datos.ica <= 100) {
        alerta.textContent = 'Calidad del aire moderada';
        alerta.className = 'moderada';
        mostrarSugerencias([
            'Evite hacer ejercicio en áreas abiertas',
            'Mantenga las ventanas cerradas en su hogar'
        ]);
    } else if (datos.ica <= 150) {
        alerta.textContent = 'Calidad del aire insalubre para grupos sensibles';
        alerta.className = 'alta';
        mostrarSugerencias([
            'Limite las actividades al aire libre',
            'Personas con afecciones respiratorias deben evitar salir',
            'Evite el uso de vehículos privados'
        ]);
    } else {
        alerta.textContent = 'Calidad del aire peligrosa';
        alerta.className = 'alta';
        mostrarSugerencias([
            'Evite salir al aire libre',
            'Personas con enfermedades respiratorias deben mantenerse dentro',
            'Usar mascarillas si es necesario'
        ]);
    }
}

// Función para mostrar sugerencias en la interfaz
function mostrarSugerencias(sugerencias) {
    const sugerenciasLista = document.getElementById('sugerencias-lista');
    sugerenciasLista.innerHTML = '';  // Limpiar sugerencias anteriores
    sugerencias.forEach(sugerencia => {
        const li = document.createElement('li');
        li.textContent = sugerencia;
        sugerenciasLista.appendChild(li);
    });
}

// Llamamos a la función al cargar la página para obtener los datos
document.addEventListener('DOMContentLoaded', obtenerDatosCalidadAire);
