// Common JavaScript for all pages - Navigation and shared functionality

// Mobile menu toggle
function initMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
}

// Active nav link highlighting
function highlightActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'HCM.html';
    const navLinks = document.querySelectorAll('header nav a, #mobile-menu a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'HCM.html')) {
            link.classList.add('active-nav');
            // Add border for desktop nav
            if (link.closest('nav.hidden')) {
                link.classList.add('border-b-2', 'border-yellow-300');
            }
        } else {
            link.classList.remove('active-nav', 'border-b-2', 'border-yellow-300');
        }
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    highlightActiveNav();
});

// Fix navigation - Đảm bảo navigation hoạt động đúng
function fixNavigation() {
    // Desktop nav
    const desktopNav = document.getElementById('desktop-nav');
    if (desktopNav) {
        if (window.innerWidth >= 768) {
            desktopNav.style.display = 'flex';
        } else {
            desktopNav.style.display = 'none';
        }
    }
    
    // Mobile menu
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        if (window.innerWidth < 768) {
            if (mobileMenu.classList.contains('hidden')) {
                mobileMenu.style.display = 'none';
            } else {
                mobileMenu.style.display = 'block';
            }
        } else {
            mobileMenu.style.display = 'none';
        }
    }
    
    // Mobile button
    const mobileButton = document.getElementById('mobile-menu-button');
    if (mobileButton) {
        if (window.innerWidth >= 768) {
            mobileButton.style.display = 'none';
        } else {
            mobileButton.style.display = 'block';
        }
    }
}

// Apply on load and resize
window.addEventListener('resize', fixNavigation);
fixNavigation();

