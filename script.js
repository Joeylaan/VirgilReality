/**
 * VirgilReality - Viewfinder Design
 * Interactive JavaScript Features
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initSmoothScroll();
    initTimecodeCounter();
    initScrollReveal();
    initMobileMenu();
});

/**
 * Smooth Scroll Navigation
 * Handles anchor link smooth scrolling with offset for sticky header
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    const headerHeight = 80;

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Skip if it's just "#"
            if (href === '#') return;

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();

                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = targetPosition - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                closeMobileMenu();
            }
        });
    });
}

/**
 * Timecode Counter Animation
 * Animates the hero and CTA timecode displays like a real camera
 */
function initTimecodeCounter() {
    const heroTimecode = document.getElementById('hero-timecode');
    const ctaTimecode = document.getElementById('cta-timecode');

    // Starting times (in frames, at 25fps)
    let heroFrames = 45 * 25; // 00:00:45:00 converted to frames
    let ctaFrames = 0;        // 00:00:00:00

    // Update timecodes every second (advances by 25 frames = 1 second)
    setInterval(function() {
        heroFrames += 25;
        ctaFrames += 25;

        if (heroTimecode) {
            heroTimecode.textContent = framesToTimecode(heroFrames);
        }
        if (ctaTimecode) {
            ctaTimecode.textContent = framesToTimecode(ctaFrames);
        }
    }, 1000);
}

/**
 * Convert frames to timecode format (HH:MM:SS:FF)
 * @param {number} totalFrames - Total frames at 25fps
 * @returns {string} Formatted timecode string
 */
function framesToTimecode(totalFrames) {
    const fps = 25;

    const frames = totalFrames % fps;
    const totalSeconds = Math.floor(totalFrames / fps);
    const seconds = totalSeconds % 60;
    const totalMinutes = Math.floor(totalSeconds / 60);
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);

    return [
        String(hours).padStart(2, '0'),
        String(minutes).padStart(2, '0'),
        String(seconds).padStart(2, '0'),
        String(frames).padStart(2, '0')
    ].join(':');
}

/**
 * Scroll Reveal Animation
 * Elements fade in and translate up as they enter the viewport
 */
function initScrollReveal() {
    // Elements to reveal on scroll
    const revealElements = [
        '.section-header',
        '.project-card',
        '.service-item',
        '.about-headline',
        '.about-description',
        '.stat',
        '.cta-content'
    ];

    // Add reveal class to all target elements
    revealElements.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            el.classList.add('reveal');
        });
    });

    // Create Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add delay based on index for staggered animation
                const delay = getStaggerDelay(entry.target);

                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);

                // Stop observing once revealed
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all reveal elements
    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Calculate stagger delay for reveal animations
 * @param {HTMLElement} element - The element to get delay for
 * @returns {number} Delay in milliseconds
 */
function getStaggerDelay(element) {
    // For project cards, stagger based on position in row
    if (element.classList.contains('project-card')) {
        const parent = element.parentElement;
        const siblings = Array.from(parent.children);
        const index = siblings.indexOf(element);
        return index * 100;
    }

    // For service items, stagger based on position
    if (element.classList.contains('service-item')) {
        const parent = element.parentElement;
        const siblings = Array.from(parent.children);
        const index = siblings.indexOf(element);
        return index * 80;
    }

    // For stats, stagger based on position
    if (element.classList.contains('stat')) {
        const parent = element.parentElement;
        const siblings = Array.from(parent.querySelectorAll('.stat'));
        const index = siblings.indexOf(element);
        return index * 150;
    }

    return 0;
}

/**
 * Mobile Menu Toggle
 * Handles hamburger menu for mobile navigation
 */
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    if (!hamburger || !mobileMenu) return;

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', function() {
        toggleMobileMenu();
    });

    // Close menu when clicking on a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeMobileMenu();
        });
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMobileMenu();
        }
    });

    // Close menu when clicking outside
    mobileMenu.addEventListener('click', function(e) {
        if (e.target === mobileMenu) {
            closeMobileMenu();
        }
    });
}

/**
 * Toggle mobile menu open/closed
 */
function toggleMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('open');

    // Prevent body scroll when menu is open
    if (mobileMenu.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

/**
 * Close mobile menu
 */
function closeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (hamburger && mobileMenu) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
    }
}

/**
 * Header scroll behavior (optional enhancement)
 * Adds/removes class based on scroll position
 */
function initHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        // Add scrolled class when not at top
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Hide/show header on scroll direction (optional)
        if (currentScroll > lastScroll && currentScroll > 100) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }

        lastScroll = currentScroll;
    });
}

/**
 * Video Playback Check
 * Ensures hero video plays correctly, provides fallback if needed
 */
function initVideoPlayback() {
    const heroVideo = document.querySelector('.hero-video');

    if (!heroVideo) return;

    // Try to play video (may be blocked by browser)
    const playPromise = heroVideo.play();

    if (playPromise !== undefined) {
        playPromise.catch(function(error) {
            // Auto-play was prevented
            console.log('Video autoplay was prevented:', error);

            // Could add a play button overlay here as fallback
            // For now, the video will just show the first frame
        });
    }

    // Handle video load errors
    heroVideo.addEventListener('error', function() {
        console.log('Video failed to load');
        // Could add a static image fallback here
    });
}

// Initialize video playback check
document.addEventListener('DOMContentLoaded', initVideoPlayback);

/**
 * Preloader Enhancement (optional)
 * Waits for critical resources before revealing content
 */
function initPreloader() {
    // Wait for all images and video to load
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
}

// Initialize preloader
initPreloader();

/**
 * Performance: Debounce function
 * Limits how often a function can fire
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Performance: Throttle function
 * Ensures function is called at most once in specified time period
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
