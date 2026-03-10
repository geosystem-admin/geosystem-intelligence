/**
 * GEOSYSTEM CORE // PROTOCOLO DE VALIDACIÓN GX
 * Emisario Inmortal - v6.1
 */

// 1. GESTIÓN DEL RELOJ (SIEMPRE ACTIVO)
function iniciarReloj() {
    const reloj = document.getElementById('reloj-principal');
    if (reloj) {
        setInterval(() => {
            reloj.innerText = new Date().toLocaleTimeString();
        }, 1000);
    }
}

// 2. ACTIVACIÓN DEL REPRODUCTOR (MANIFIESTO 7%)
function desplegarManifiesto() {
    const videoContainer = document.getElementById('youtube-core');
    const player = document.getElementById('video-frame');
    
    // ID real de tu video: ACTUALIZACIÓN DE SISTEMA.. 7%
    const videoID = "JGToOtVf0f8"; 

    if (player && videoContainer) {
        player.src = `https://www.youtube.com/embed/${videoID}?autoplay=1&rel=0&modestbranding=1`;
        videoContainer.style.display = 'block';
    }
}

// 3. CAPTURA DE DATOS PERSONALES (SINERGIA)
function iniciarCaptura(tipo) {
    // Estas URLs deben llevar a tus formularios de registro
    const formularios = {
        'donacion': 'https://tu-plataforma.com/captura-donantes',
        'suscripcion': 'https://tu-plataforma.com/captura-suscriptores',
        'colaboracion': 'https://tu-plataforma.com/captura-colaboradores'
    };

    const log = document.getElementById('agent-orders');
    if (log) {
        log.innerHTML += `<p class="agent-log text-cyan-400">> REQUIRIENDO DATOS PARA ${tipo.toUpperCase()}...</p>`;
    }

    // Redirección para registro de correo y datos
    window.open(formularios[tipo], '_blank');
}

// 4. VALIDACIÓN DE LA CLAVE MAESTRA
function triggerCore() {
    const input = document.getElementById('master-key');
    const claveIngresada = input.value.trim().toUpperCase();
    
    // VALIDACIÓN DE SEGURIDAD
    if (claveIngresada === "GX-8-7-IMMORTAL") {
        // Efecto visual de sincronía exitosa
        document.body.classList.add('sync-flash');
        setTimeout(() => document.body.classList.remove('sync-flash'), 500);

        // Desbloquear Manifiesto y Paneles
        desplegarManifiesto();
        
        const synergyPanel = document.getElementById('synergy-panel');
        if (synergyPanel) synergyPanel.style.display = 'grid';

        // Actualizar Terminal de Inteligencia
        const log = document.getElementById('agent-orders');
        if (log) {
            log.innerHTML = '<p class="agent-log text-cyan-400 font-bold">> ACCESO TOTAL: 7% UPDATE TRANSMITIENDO...</p>';
        }

        // Bloquear el formulario de acceso para evitar re-validación
        const actionBox = document.getElementById('action-box');
        if (actionBox) {
            actionBox.innerHTML = '<div class="text-cyan-400 text-center py-2 border border-cyan-900 font-bold animate-pulse">NÚCLEO SINCRONIZADO</div>';
        }
    } else {
        alert("ERROR: CREDENCIAL NO RECONOCIDA EN LA RED");
        input.value = ""; // Limpiar para nuevo intento
    }
}

// INICIALIZACIÓN AL CARGAR EL DOM
document.addEventListener('DOMContentLoaded', iniciarReloj);
