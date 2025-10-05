// Initialize Vanta.js birds effect
let vantaEffect;

function initVanta() {
  // Check if vanta effect already exists and destroy it
  if (vantaEffect) {
    vantaEffect.destroy();
  }
  
  // Initialize with appropriate colors based on theme
  const isDarkMode = document.body.classList.contains('dark-mode');
  
  vantaEffect = VANTA.BIRDS({
    el: "#vanta-birds",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    backgroundColor: isDarkMode ? 0x0f172a : 0xf8fafc,
    color1: isDarkMode ? 0x3b82f6 : 0x2563eb,
    color2: isDarkMode ? 0xa78bfa : 0x8b5cf6,
    birdSize: isDarkMode ? 1.00 : 0.80,
    wingSpan: isDarkMode ? 20.00 : 15.00,
    speedLimit: isDarkMode ? 5.00 : 3.00,
    separation: isDarkMode ? 50.00 : 30.00,
    alignment: isDarkMode ? 50.00 : 30.00,
    cohesion: isDarkMode ? 50.00 : 30.00
  });
}

// Toggle mobile menu
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// Dark mode toggle
const darkToggle = document.getElementById('darkToggle');

darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  if (document.body.classList.contains('dark-mode')) {
    darkToggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    darkToggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
  
  // Reinitialize Vanta with new colors
  initVanta();
});

// Check for saved theme preference
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  darkToggle.textContent = '☀️';
}

// Initialize Vanta effect on page load
window.addEventListener('load', () => {
  initVanta();
});

// Adjust Vanta effect on window resize
window.addEventListener('resize', () => {
  // Reinitialize Vanta to adjust to new window size
  initVanta();
});

// Scroll animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, observerOptions);

document.querySelectorAll('.section-animate').forEach(section => {
  observer.observe(section);
});

// Video functionality
const demoVideo = document.getElementById('demoVideo');
const playButton = document.getElementById('playButton');
const playPauseBtn = document.getElementById('playPauseBtn');
const playIcon = document.getElementById('playIcon');
const muteBtn = document.getElementById('muteBtn');
const volumeIcon = document.getElementById('volumeIcon');
const videoOverlay = document.querySelector('.video-overlay');
const videoSection = document.getElementById('video-demo');

// Preload video and show when ready
demoVideo.addEventListener('loadeddata', function() {
  demoVideo.classList.add('loaded');
});

// Play/Pause functionality
function togglePlayPause() {
  if (demoVideo.paused) {
    demoVideo.play();
    playIcon.classList.remove('fa-play');
    playIcon.classList.add('fa-pause');
    videoOverlay.style.opacity = '0';
    setTimeout(() => {
      videoOverlay.style.display = 'none';
    }, 300);
  } else {
    demoVideo.pause();
    playIcon.classList.remove('fa-pause');
    playIcon.classList.add('fa-play');
    videoOverlay.style.display = 'flex';
    setTimeout(() => {
      videoOverlay.style.opacity = '1';
    }, 10);
  }
}

// Mute/Unmute functionality
function toggleMute() {
  demoVideo.muted = !demoVideo.muted;
  if (demoVideo.muted) {
    volumeIcon.classList.remove('fa-volume-up');
    volumeIcon.classList.add('fa-volume-mute');
  } else {
    volumeIcon.classList.remove('fa-volume-mute');
    volumeIcon.classList.add('fa-volume-up');
  }
}

// Event listeners
playButton.addEventListener('click', () => {
  togglePlayPause();
});

playPauseBtn.addEventListener('click', togglePlayPause);
muteBtn.addEventListener('click', toggleMute);

// Hide overlay when video starts playing
demoVideo.addEventListener('play', () => {
  videoOverlay.style.opacity = '0';
  setTimeout(() => {
    videoOverlay.style.display = 'none';
  }, 300);
});

// Show overlay when video ends
demoVideo.addEventListener('ended', () => {
  videoOverlay.style.display = 'flex';
  setTimeout(() => {
    videoOverlay.style.opacity = '1';
  }, 10);
  playIcon.classList.remove('fa-pause');
  playIcon.classList.add('fa-play');
});

// Auto-play video when scrolled into view
const videoObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Auto-play when 50% of the video is in view
      demoVideo.play();
      videoOverlay.style.opacity = '0';
      setTimeout(() => {
        videoOverlay.style.display = 'none';
      }, 300);
      playIcon.classList.remove('fa-play');
      playIcon.classList.add('fa-pause');
    } else {
      // Pause when not in view
      demoVideo.pause();
      playIcon.classList.remove('fa-pause');
      playIcon.classList.add('fa-play');
    }
  });
}, { threshold: 0.5 });

videoObserver.observe(videoSection);