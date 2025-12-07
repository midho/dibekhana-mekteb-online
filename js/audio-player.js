document.addEventListener('DOMContentLoaded', function() {
    const playerContainer = document.querySelector('.lesson-audio-player');
    if (!playerContainer) return;

    const audioSrc = playerContainer.getAttribute('data-src');
    if (!audioSrc) return;

    // Generate HTML
    const playerHTML = `
        <button id="audioToggleBtn" class="btn btn-outline-success btn-sm w-100 mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#audioPlayerCollapse" aria-expanded="false">
            <i class="fas fa-headphones-alt me-2"></i> Poslušaj lekciju
        </button>
        <div class="collapse" id="audioPlayerCollapse">
            <div class="card border-success shadow-sm" style="width: 100%; min-width: 300px;">
                <div class="card-body p-2 bg-light">
                    <audio id="lessonAudio" preload="metadata" src="${audioSrc}"></audio>
                    
                    <div class="d-flex align-items-center">
                        <button id="playPauseBtn" class="btn btn-success rounded-circle p-0 d-flex align-items-center justify-content-center me-2" style="width: 35px; height: 35px;">
                            <i class="fas fa-play fa-sm"></i>
                        </button>
                        
                        <div class="flex-grow-1 mx-2">
                            <input type="range" class="form-range" id="audioProgress" value="0" min="0" step="0.1" style="accent-color: #2E7D32;">
                        </div>
                        
                        <span class="small text-success fw-bold" id="timeDisplay" style="min-width: 75px; text-align: center; white-space: nowrap;">0:00/0:00</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    playerContainer.innerHTML = playerHTML;

    // Audio Player Logic
    const audio = document.getElementById('lessonAudio');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const progress = document.getElementById('audioProgress');
    const timeDisplay = document.getElementById('timeDisplay');
    const audioCollapse = document.getElementById('audioPlayerCollapse');
    const toggleBtn = document.getElementById('audioToggleBtn');

    // Auto-play when expanded
    audioCollapse.addEventListener('show.bs.collapse', function () {
        toggleBtn.classList.remove('btn-outline-success');
        toggleBtn.classList.add('btn-success');
        toggleBtn.innerHTML = '<i class="fas fa-headphones-alt me-2"></i> Zatvori player';
        audio.play().catch(e => console.log("Audio play failed:", e));
        toggleBtn.blur();
    });

    // Pause when collapsed
    audioCollapse.addEventListener('hide.bs.collapse', function () {
        toggleBtn.classList.remove('btn-success');
        toggleBtn.classList.add('btn-outline-success');
        toggleBtn.innerHTML = '<i class="fas fa-headphones-alt me-2"></i> Poslušaj lekciju';
        audio.pause();
        toggleBtn.blur();
    });

    // Play/Pause toggle
    playPauseBtn.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });

    // Update button icon on play/pause
    audio.addEventListener('play', function() {
        playPauseBtn.innerHTML = '<i class="fas fa-pause fa-sm"></i>';
    });

    audio.addEventListener('pause', function() {
        playPauseBtn.innerHTML = '<i class="fas fa-play fa-sm"></i>';
    });

    // Update progress bar and time
    audio.addEventListener('timeupdate', function() {
        const current = audio.currentTime;
        const duration = audio.duration || 0;
        
        progress.value = (current / duration) * 100 || 0;
        
        timeDisplay.textContent = formatTime(current) + '/' + formatTime(duration);
    });

    // Seek functionality
    progress.addEventListener('input', function() {
        const duration = audio.duration || 0;
        audio.currentTime = (this.value / 100) * duration;
    });

    // Reset on end
    audio.addEventListener('ended', function() {
        playPauseBtn.innerHTML = '<i class="fas fa-play fa-sm"></i>';
        progress.value = 0;
        audio.currentTime = 0;
    });

    // Format time helper
    function formatTime(seconds) {
        const m = Math.floor(seconds / 60);
        const s = Math.floor(seconds % 60);
        return m + ':' + (s < 10 ? '0' : '') + s;
    }
    
    // Initialize duration display
    audio.addEventListener('loadedmetadata', function() {
        timeDisplay.textContent = "0:00/" + formatTime(audio.duration);
    });
});
