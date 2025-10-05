// Dark mode toggle
const themeToggle = document.getElementById('themeToggle');

// Check for saved theme preference
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
    // Initialize Vanta with dark colors
    initVanta('dark');
} else if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    themeToggle.textContent = '🌙';
    // Initialize Vanta with light colors
    initVanta('light');
} else {
    // Default to dark mode
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
    themeToggle.textContent = '☀️';
    initVanta('dark');
}

themeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.replace('dark-mode', 'light-mode');
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
        initVanta('light');
    } else {
        document.body.classList.replace('light-mode', 'dark-mode');
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
        initVanta('dark');
    }
});

// Initialize Vanta.js with appropriate colors based on theme
function initVanta(theme) {
    // Remove existing Vanta instance if any
    if (window.vantaEffect) {
        window.vantaEffect.destroy();
    }
    
    const color1 = theme === 'dark' ? 0x3b82f6 : 0x2563eb;
    const color2 = theme === 'dark' ? 0x8b5cf6 : 0x4f46e5;
    const bgColor = theme === 'dark' ? 0x0f172a : 0xf8fafc;
    
    window.vantaEffect = VANTA.GLOBE({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: color1,
        color2: color2,
        backgroundColor: bgColor,
        size: 0.8
    });
}

// Video play functionality
document.querySelectorAll('.play-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const player = this.parentElement;
        const video = player.querySelector('video');
        const poster = player.querySelector('.video-poster');
        const icon = this.querySelector('i');
        
        if (video.paused) {
            video.play();
            poster.style.opacity = '0';
            icon.classList.remove('fa-play');
            icon.classList.add('fa-pause');
        } else {
            video.pause();
            poster.style.opacity = '1';
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
        }
    });
});

// Reset videos when another is played
document.querySelectorAll('video').forEach(video => {
    video.addEventListener('play', function() {
        document.querySelectorAll('video').forEach(otherVideo => {
            if (otherVideo !== video && !otherVideo.paused) {
                otherVideo.pause();
                const otherPlayer = otherVideo.parentElement;
                otherPlayer.querySelector('.video-poster').style.opacity = '1';
                otherPlayer.querySelector('.play-btn i').classList.remove('fa-pause');
                otherPlayer.querySelector('.play-btn i').classList.add('fa-play');
            }
        });
    });
    
    video.addEventListener('ended', function() {
        this.currentTime = 0;
        const player = this.parentElement;
        player.querySelector('.video-poster').style.opacity = '1';
        player.querySelector('.play-btn i').classList.remove('fa-pause');
        player.querySelector('.play-btn i').classList.add('fa-play');
    });
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        if (document.body.classList.contains('dark-mode')) {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        } else {
            navbar.style.background = 'rgba(248, 250, 252, 0.95)';
        }
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
    } else {
        if (document.body.classList.contains('dark-mode')) {
            navbar.style.background = 'rgba(15, 23, 42, 0.8)';
        } else {
            navbar.style.background = 'rgba(248, 250, 252, 0.8)';
        }
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.2)';
    }
});

// Auto-play videos when they come into view
const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const player = entry.target;
        const video = player.querySelector('video');
        const poster = player.querySelector('.video-poster');
        const playBtn = player.querySelector('.play-btn i');
        
        if (entry.isIntersecting) {
            // Play the video when it's in view
            video.play().then(() => {
                poster.style.opacity = '0';
                playBtn.classList.remove('fa-play');
                playBtn.classList.add('fa-pause');
            }).catch(error => {
                console.log('Auto-play was prevented:', error);
                // Handle cases where auto-play might be blocked by browser policies
            });
        } else {
            // Pause the video when it's out of view
            video.pause();
            poster.style.opacity = '1';
            playBtn.classList.remove('fa-pause');
            playBtn.classList.add('fa-play');
        }
    });
}, { threshold: 0.7 }); // Play when 70% of the video player is visible

// Observe all demo players for auto-play
document.querySelectorAll('.demo-player').forEach(player => {
    videoObserver.observe(player);
});

// Add loop attribute to all videos for continuous playback
document.querySelectorAll('video').forEach(video => {
    video.loop = true;
});