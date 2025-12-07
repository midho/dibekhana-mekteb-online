document.addEventListener('DOMContentLoaded', function() {
    // Finds all containers with class 'pronunciation-player-container'
    // Expects an <audio> and a <button> inside
    const pronContainers = document.querySelectorAll('.pronunciation-player-container');
    
    pronContainers.forEach(container => {
        const audio = container.querySelector('audio');
        const btn = container.querySelector('button');
        
        if (audio && btn) {
            // Add class for identification
            audio.classList.add('pronunciation-audio');
            
            // Toggle play/pause on click
            btn.addEventListener('click', function() {
                if (audio.paused) {
                    audio.play();
                } else {
                    audio.pause();
                    audio.currentTime = 0; // Reset to start
                }
            });

            // Update UI on play
            audio.addEventListener('play', function() {
                btn.innerHTML = '<i class="fas fa-stop me-2"></i> Zaustavi';
                btn.classList.replace('btn-outline-success', 'btn-success');
                
                // Pause other audios
                document.querySelectorAll('audio').forEach(other => {
                    if (other !== audio) {
                        other.pause();
                        if (other.classList.contains('pronunciation-audio')) {
                            other.currentTime = 0;
                        }
                    }
                });
            });

            // Update UI on pause (covers manual pause, end, and programmatic pause)
            audio.addEventListener('pause', function() {
                btn.innerHTML = '<i class="fas fa-volume-up me-2"></i> Poslušaj izgovor';
                btn.classList.replace('btn-success', 'btn-outline-success');
            });
        }
    });
});
