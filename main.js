// Password Protection
const correctPassword = "11012025"; // Password: 11 Januari 2025
const passwordInput = document.getElementById('password-input');
const passwordSubmit = document.getElementById('password-submit');
const passwordMessage = document.getElementById('password-message');
const passwordSection = document.getElementById('password-protection');
const mainContent = document.getElementById('main-content');

passwordSubmit.addEventListener('click', checkPassword);
passwordInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        checkPassword();
    }
});

function checkPassword() {
    const enteredPassword = passwordInput.value.trim();
    
    if (enteredPassword === correctPassword) {
        // Password correct
        passwordMessage.textContent = "Kode benar! Membuka album kenangan...";
        passwordMessage.style.color = "#27ae60";
        
        // Add some hearts animation
        for (let i = 0; i < 20; i++) {
            createHeartAnimation();
        }
        
        // Transition to main content
        setTimeout(() => {
            passwordSection.classList.add('hidden');
            mainContent.classList.remove('hidden');
            initializeWebsite();
        }, 1500);
    } else {
        // Password incorrect
        passwordMessage.textContent = "Kode salah, coba lagi. Ingat tanggal spesial kita!";
        passwordMessage.style.color = "#e74c3c";
        
        // Shake animation
        passwordInput.style.animation = 'shake 0.5s';
        setTimeout(() => {
            passwordInput.style.animation = '';
        }, 500);
        
        // Clear input
        passwordInput.value = '';
        passwordInput.focus();
    }
}

function createHeartAnimation() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤';
    heart.classList.add('particle-heart');
    
    // Random position
    const startX = Math.random() * window.innerWidth;
    heart.style.left = `${startX}px`;
    heart.style.top = `${window.innerHeight}px`;
    
    // Random size
    const size = Math.random() * 20 + 15;
    heart.style.fontSize = `${size}px`;
    
    // Random color
    const opacity = Math.random() * 0.4 + 0.1;
    heart.style.color = `rgba(255, 107, 139, ${opacity})`;
    
    // Random animation duration
    const duration = Math.random() * 10 + 10;
    heart.style.animationDuration = `${duration}s`;
    
    document.querySelector('.password-section').appendChild(heart);
    
    // Remove after animation completes
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Initialize all website features
function initializeWebsite() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Initialize scroll navbar effect
    initializeNavbarScroll();
    
    // Initialize particle hearts
    initializeParticleHearts();
    
    // Initialize countdown (11 Januari 2026)
    initializeCountdown();
    
    // Initialize gallery with actual image data
    initializeGallery();
    
    // Initialize flipbook sederhana
    initializeSimpleFlipbook();
    
    // Initialize guestbook
    initializeGuestbook();
    
    // Initialize quotes
    initializeQuotes();
    
    // Initialize music player
    initializeMusicPlayer();
    
    // Initialize navigation
    initializeNavigation();
    
    // Initialize scroll animations
    initializeScrollAnimations();
    
    // Initialize parallax effects
    initializeParallax();
    
    // Initialize secret message button
    initializeSecretMessage();
}

// Navbar Scroll Effect - Membuat navbar mengecil saat scroll
function initializeNavbarScroll() {
    const header = document.querySelector('.main-header');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add shrink class when scrolling down
        if (currentScroll > 50) {
            header.classList.add('shrink');
        } else {
            header.classList.remove('shrink');
        }
    });
}

// Particle Hearts
function initializeParticleHearts() {
    // Create floating hearts
    function createFloatingHeart() {
        if (document.querySelectorAll('.particle-heart').length > 30) return;
        
        const heart = document.createElement('div');
        heart.innerHTML = '❤';
        heart.classList.add('particle-heart');
        
        // Random position
        const startX = Math.random() * window.innerWidth;
        heart.style.left = `${startX}px`;
        heart.style.top = `${window.innerHeight + 50}px`;
        
        // Random size
        const size = Math.random() * 15 + 10;
        heart.style.fontSize = `${size}px`;
        
        // Random color
        const opacity = Math.random() * 0.3 + 0.1;
        heart.style.color = `rgba(255, 107, 139, ${opacity})`;
        
        // Random animation duration
        const duration = Math.random() * 15 + 15;
        heart.style.animationDuration = `${duration}s`;
        
        // Random animation delay
        const delay = Math.random() * 5;
        heart.style.animationDelay = `${delay}s`;
        
        document.body.appendChild(heart);
        
        // Remove after animation completes
        setTimeout(() => {
            if (heart.parentNode) {
                heart.remove();
            }
        }, (duration + delay) * 1000);
    }
    
    // Create initial hearts
    for (let i = 0; i < 15; i++) {
        setTimeout(() => createFloatingHeart(), i * 300);
    }
    
    // Continue creating hearts periodically
    setInterval(createFloatingHeart, 2000);
}

// Countdown Timer - Diperbaiki untuk 11 Januari 2026
function initializeCountdown() {
    console.log("Initializing countdown...");
    
    // Set target date: 11 Januari 2026 00:00:00 GMT+7
    const targetDate = new Date('January 11, 2026 00:00:00 GMT+0700').getTime();
    const targetDateElement = document.getElementById('target-date');
    
    console.log("Target date:", new Date(targetDate));
    
    // Format tanggal untuk ditampilkan
    targetDateElement.textContent = '11 Januari 2026';
    
    // Update countdown every second
    const countdownInterval = setInterval(updateCountdown, 1000);
    
    // Initial call
    updateCountdown();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        console.log("Now:", new Date(now));
        console.log("Distance:", distance);
        
        // If countdown is over
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            
            // Update text
            targetDateElement.textContent = 'Hari Spesial Kita Telah Tiba! ❤';
            targetDateElement.style.color = '#ff6b8b';
            return;
        }
        
        // Calculate days, hours, minutes, seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        console.log("Days:", days, "Hours:", hours, "Minutes:", minutes, "Seconds:", seconds);
        
        // Update display dengan animasi
        updateCountdownValue('days', days);
        updateCountdownValue('hours', hours);
        updateCountdownValue('minutes', minutes);
        updateCountdownValue('seconds', seconds);
    }
    
    function updateCountdownValue(id, value) {
        const element = document.getElementById(id);
        const formattedValue = value.toString().padStart(2, '0');
        
        if (element.textContent !== formattedValue) {
            // Animasi
            element.style.transform = 'scale(1.3)';
            element.style.color = '#ff6b8b';
            
            setTimeout(() => {
                element.textContent = formattedValue;
                element.style.transform = 'scale(1)';
                setTimeout(() => {
                    element.style.color = '';
                }, 300);
            }, 200);
        }
    }
}

// Gallery dengan deskripsi per foto
function initializeGallery() {
    const slides = document.querySelectorAll('.slide');
    const indicatorsContainer = document.querySelector('.gallery-indicators');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.querySelector('.lightbox-image');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const lightboxClose = document.querySelector('.lightbox-close');
    
    let currentSlide = 0;
    
    // Create indicators
    slides.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (index === 0) indicator.classList.add('active');
        
        indicator.addEventListener('click', () => {
            goToSlide(index);
        });
        
        indicatorsContainer.appendChild(indicator);
    });
    
    const indicators = document.querySelectorAll('.indicator');
    
    // Slide functions
    function goToSlide(index) {
        currentSlide = index;
        
        // Update slider position
        document.querySelector('.gallery-slider').style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update active indicator
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === currentSlide);
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        goToSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        goToSlide(currentSlide);
    }
    
    // Event listeners
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    // Auto-advance slides every 5 seconds
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Pause auto-advance on hover
    const galleryContainer = document.querySelector('.gallery-container');
    galleryContainer.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    galleryContainer.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
    
    // Lightbox functionality
    slides.forEach((slide, index) => {
        const slideImage = slide.querySelector('.slide-image');
        
        slideImage.addEventListener('click', () => {
            // Get data from clicked slide
            const title = slideImage.dataset.title;
            const description = slideImage.dataset.description;
            const imgSrc = slideImage.querySelector('img').src;
            
            // Set lightbox content
            lightboxImage.src = imgSrc;
            lightboxImage.alt = title;
            lightboxCaption.textContent = `${title} - ${description}`;
            
            // Show lightbox
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close lightbox
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Close lightbox with ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
    
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Initial slide setup
    goToSlide(0);
}

// Simple Flipbook - Sederhana dengan 1 sisi
function initializeSimpleFlipbook() {
    const pages = document.querySelectorAll('.book-page');
    const prevPageBtn = document.querySelector('.prev-page-btn');
    const nextPageBtn = document.querySelector('.next-page-btn');
    const currentPageEl = document.getElementById('current-page');
    const totalPagesEl = document.getElementById('total-pages');
    
    let currentPageIndex = 0;
    const totalPages = pages.length;
    
    // Set total pages
    totalPagesEl.textContent = totalPages.toString();
    
    // Tampilkan halaman pertama
    pages[0].classList.add('active');
    
    // Update page display
    function updatePageDisplay() {
        // Update counter
        currentPageEl.textContent = (currentPageIndex + 1).toString();
        
        // Reset semua halaman
        pages.forEach((page, index) => {
            page.classList.remove('active', 'prev', 'next');
            
            if (index === currentPageIndex) {
                page.classList.add('active');
            } else if (index < currentPageIndex) {
                page.classList.add('prev');
            } else if (index > currentPageIndex) {
                page.classList.add('next');
            }
        });
    }
    
    // Next page
    function nextPage() {
        if (currentPageIndex < totalPages - 1) {
            currentPageIndex++;
            updatePageDisplay();
        }
    }
    
    // Previous page
    function prevPage() {
        if (currentPageIndex > 0) {
            currentPageIndex--;
            updatePageDisplay();
        }
    }
    
    // Event listeners
    prevPageBtn.addEventListener('click', prevPage);
    nextPageBtn.addEventListener('click', nextPage);
    
    // Swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    const flipbook = document.querySelector('.simple-flipbook');
    flipbook.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    flipbook.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        
        if (touchEndX < touchStartX - swipeThreshold) {
            // Swipe left = next page
            nextPage();
        }
        
        if (touchEndX > touchStartX + swipeThreshold) {
            // Swipe right = previous page
            prevPage();
        }
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            nextPage();
        } else if (e.key === 'ArrowLeft') {
            prevPage();
        }
    });
    
    // Initial display
    updatePageDisplay();
}

// Guestbook (tetap sama)
function initializeGuestbook() {
    const messageForm = document.getElementById('message-form');
    const guestName = document.getElementById('guest-name');
    const guestMessage = document.getElementById('guest-message');
    const messagesContainer = document.getElementById('messages-container');
    
    // Load existing messages from localStorage
    let messages = JSON.parse(localStorage.getItem('guestbookMessages')) || [];
    
    // Display existing messages
    function displayMessages() {
        // Clear container except for the first welcome message
        const welcomeMessage = messagesContainer.firstElementChild;
        messagesContainer.innerHTML = '';
        if (welcomeMessage) {
            messagesContainer.appendChild(welcomeMessage);
        }
        
        // Add messages from storage (newest first)
        messages.slice().reverse().forEach((msg, index) => {
            const messageCard = document.createElement('div');
            messageCard.classList.add('message-card');
            messageCard.style.animationDelay = `${index * 0.1}s`;
            
            const date = new Date(msg.date);
            const formattedDate = date.toLocaleDateString('id-ID', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            });
            
            messageCard.innerHTML = `
                <div class="message-header">
                    <h4>${msg.name}</h4>
                    <span class="message-date">${formattedDate}</span>
                </div>
                <p class="message-content">${msg.message}</p>
            `;
            
            messagesContainer.appendChild(messageCard);
        });
    }
    
    // Form submission
    messageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = guestName.value.trim();
        const message = guestMessage.value.trim();
        
        if (name && message) {
            // Create new message object
            const newMessage = {
                name: name,
                message: message,
                date: new Date().toISOString()
            };
            
            // Add to messages array
            messages.push(newMessage);
            
            // Save to localStorage
            localStorage.setItem('guestbookMessages', JSON.stringify(messages));
            
            // Display messages
            displayMessages();
            
            // Reset form
            guestName.value = '';
            guestMessage.value = '';
            
            // Show success message
            const successMsg = document.createElement('div');
            successMsg.textContent = 'Pesan berhasil dikirim! ❤';
            successMsg.style.color = '#27ae60';
            successMsg.style.marginTop = '10px';
            successMsg.style.fontWeight = '500';
            
            // Remove previous success message if exists
            const prevSuccess = messageForm.querySelector('.success-msg');
            if (prevSuccess) prevSuccess.remove();
            
            successMsg.classList.add('success-msg');
            messageForm.appendChild(successMsg);
            
            // Remove success message after 3 seconds
            setTimeout(() => {
                successMsg.remove();
            }, 3000);
        }
    });
    
    // Initial display
    displayMessages();
}

// Quotes (tetap sama)
function initializeQuotes() {
    const quoteText = document.getElementById('quote-text');
    const nextQuoteBtn = document.getElementById('next-quote');
    
    const quotes = [
        "Cinta sejati tidak buta - itu melihat lebih banyak, bukan kurang. Tetapi karena melihat lebih banyak, itu bersedia melihat lebih sedikit.",
        "Cinta adalah ketika kebahagiaan orang lain adalah kebahagiaan Anda sendiri.",
        "Cinta adalah persahabatan yang diatur pada api.",
        "Cinta terbaik dan paling indah di dunia ini tidak dapat dilihat atau bahkan disentuh - mereka harus dirasakan dengan hati.",
        "Cinta adalah ruang dan waktu yang diukur oleh hati.",
        "Cinta tidak terdiri dari saling menatap, tetapi melihat ke arah yang sama bersama-sama.",
        "Cinta adalah ketika kamu bertemu seseorang yang memberi kamu perasaan yang tidak pernah kamu miliki sebelumnya.",
        "Cinta adalah tanaman yang paling keras kepala; pertumbuhannya tidak pernah berhenti, bahkan di bawah bebatuan terberat sekalipun.",
        "Cinta sejati adalah ketika kamu menemukan seseorang yang membuat setiap hari terasa seperti hari Valentine.",
        "Cinta adalah satu-satunya kekuatan yang mampu mengubah musuh menjadi teman."
    ];
    
    let currentQuoteIndex = 0;
    
    // Display a random quote
    function displayRandomQuote() {
        // Get a random quote that's not the current one
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * quotes.length);
        } while (newIndex === currentQuoteIndex && quotes.length > 1);
        
        currentQuoteIndex = newIndex;
        
        // Fade out current quote
        quoteText.style.opacity = '0';
        quoteText.style.transform = 'translateY(20px)';
        
        // Update and fade in new quote
        setTimeout(() => {
            quoteText.textContent = quotes[currentQuoteIndex];
            quoteText.style.opacity = '1';
            quoteText.style.transform = 'translateY(0)';
        }, 300);
    }
    
    // Event listener
    nextQuoteBtn.addEventListener('click', displayRandomQuote);
    
    // Auto-change quote every 10 seconds
    setInterval(displayRandomQuote, 10000);
    
    // Initial quote
    displayRandomQuote();
}

// Music Player (tetap sama)
function initializeMusicPlayer() {
    const backgroundMusic = document.getElementById('background-music');
    const musicToggle = document.getElementById('music-toggle');
    const musicIcon = document.getElementById('music-icon');
    const musicText = document.getElementById('music-text');
    
    let isPlaying = false;
    
    // Try to play music automatically (with user interaction)
    function tryPlayMusic() {
        if (!isPlaying) {
            const playPromise = backgroundMusic.play();
            
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    isPlaying = true;
                    updateMusicButton();
                }).catch(() => {
                    // Autoplay was prevented, wait for user interaction
                    isPlaying = false;
                    updateMusicButton();
                });
            }
        }
    }
    
    // Update button appearance
    function updateMusicButton() {
        if (isPlaying) {
            musicIcon.classList.remove('fa-play');
            musicIcon.classList.add('fa-pause');
            musicText.textContent = 'Jeda Musik';
        } else {
            musicIcon.classList.remove('fa-pause');
            musicIcon.classList.add('fa-play');
            musicText.textContent = 'Putar Musik';
        }
    }
    
    // Toggle play/pause
    function toggleMusic() {
        if (isPlaying) {
            backgroundMusic.pause();
            isPlaying = false;
        } else {
            backgroundMusic.play().then(() => {
                isPlaying = true;
            }).catch(() => {
                // Play was prevented
                isPlaying = false;
            });
        }
        updateMusicButton();
    }
    
    // Event listeners
    musicToggle.addEventListener('click', toggleMusic);
    
    // Try to play music after user interacts with the page
    document.addEventListener('click', tryPlayMusic, { once: true });
    
    // Initialize button
    updateMusicButton();
    
    // Set volume
    backgroundMusic.volume = 0.5;
}

// Navigation (dengan perbaikan untuk navbar kecil)
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    // Smooth scroll to section
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Update active link
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                // Close mobile menu if open
                navMenu.classList.remove('active');
                
                // Scroll to section (dengan offset untuk navbar kecil)
                const navbarHeight = document.querySelector('.main-header').offsetHeight;
                window.scrollTo({
                    top: targetSection.offsetTop - navbarHeight - 10,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-container') && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
    
    // Update active link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const navbarHeight = document.querySelector('.main-header').offsetHeight + 20;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Scroll Animations
function initializeScrollAnimations() {
    const animatedElements = document.querySelectorAll('.section, .parallax-element');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Parallax Effects
function initializeParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax-element');
        
        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-speed') || 0.5;
            element.style.transform = `translateY(${scrolled * speed * 0.1}px)`;
        });
    });
}

// Secret Message Button
function initializeSecretMessage() {
    const secretBtn = document.getElementById('secret-btn');
    const secretMessage = document.getElementById('secret-message');
    const secretClose = document.querySelector('.secret-close');
    
    // Tampilkan tombol setelah website dimuat
    setTimeout(() => {
        secretBtn.style.display = 'flex';
    }, 2000);
    
    // Buka pesan rahasia
    secretBtn.addEventListener('click', () => {
        secretMessage.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        
        // Animasi hati tambahan
        for (let i = 0; i < 10; i++) {
            createSecretHeart();
        }
    });
    
    // Tutup pesan rahasia
    secretClose.addEventListener('click', () => {
        secretMessage.classList.add('hidden');
        document.body.style.overflow = '';
    });
    
    // Tutup pesan rahasia dengan klik di luar
    secretMessage.addEventListener('click', (e) => {
        if (e.target === secretMessage) {
            secretMessage.classList.add('hidden');
            document.body.style.overflow = '';
        }
    });
    
    // Animasi hati untuk pesan rahasia
    function createSecretHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '❤';
        heart.style.position = 'fixed';
        heart.style.fontSize = `${Math.random() * 20 + 15}px`;
        heart.style.color = `rgba(255, 107, 139, ${Math.random() * 0.5 + 0.3})`;
        heart.style.zIndex = '1001';
        heart.style.pointerEvents = 'none';
        heart.style.left = `${Math.random() * 80 + 10}%`;
        heart.style.top = '100%';
        
        secretMessage.appendChild(heart);
        
        // Animasi
        const animation = heart.animate([
            { top: '100%', opacity: 1, transform: 'rotate(0deg)' },
            { top: `${Math.random() * 70 + 10}%`, opacity: 0.7, transform: 'rotate(180deg)' },
            { top: '-10%', opacity: 0, transform: 'rotate(360deg)' }
        ], {
            duration: Math.random() * 3000 + 2000,
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
        });
        
        animation.onfinish = () => heart.remove();
    }
}

// CSS untuk shake animation
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% {transform: translateX(0);}
        10%, 30%, 50%, 70%, 90% {transform: translateX(-5px);}
        20%, 40%, 60%, 80% {transform: translateX(5px);}
    }
`;
document.head.appendChild(style);