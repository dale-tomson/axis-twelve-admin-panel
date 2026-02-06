/**
 * Axis Twelve Admin Panel - Main JavaScript
 * Core functionality for sidebar toggle, navigation, and interactions
 */

(function () {
    'use strict';

    // ========================================
    // STATE MANAGEMENT
    // ========================================

    const state = {
        sidebarCollapsed: false,
        mobileSidebarOpen: false,
        isMobile: window.innerWidth < 768
    };

    // ========================================
    // DOM ELEMENTS
    // ========================================

    const elements = {
        sidebar: null,
        mainContent: null,
        toggleBtn: null,
        mobileOverlay: null
    };

    // ========================================
    // INITIALIZATION
    // ========================================

    function init() {
        // Cache DOM elements
        elements.sidebar = document.querySelector('.admin-sidebar');
        elements.mainContent = document.querySelector('.admin-main');
        elements.toggleBtn = document.querySelector('.admin-header__toggle');

        if (!elements.sidebar || !elements.mainContent || !elements.toggleBtn) {
            console.warn('Admin panel elements not found');
            return;
        }

        // Create mobile overlay
        createMobileOverlay();

        // Set up event listeners
        setupEventListeners();

        // Set active page in navigation
        setActivePage();

        // Check for saved sidebar state
        loadSidebarState();

        // Handle resize
        handleResize();
    }

    // ========================================
    // SIDEBAR TOGGLE
    // ========================================

    function toggleSidebar() {
        if (state.isMobile) {
            toggleMobileSidebar();
        } else {
            toggleDesktopSidebar();
        }
    }

    function toggleDesktopSidebar() {
        state.sidebarCollapsed = !state.sidebarCollapsed;

        if (state.sidebarCollapsed) {
            elements.sidebar.classList.add('collapsed');
            elements.mainContent.classList.add('sidebar-collapsed');
        } else {
            elements.sidebar.classList.remove('collapsed');
            elements.mainContent.classList.remove('sidebar-collapsed');
        }

        // Save state to localStorage
        saveSidebarState();
    }

    function toggleMobileSidebar() {
        state.mobileSidebarOpen = !state.mobileSidebarOpen;

        if (state.mobileSidebarOpen) {
            elements.sidebar.classList.add('mobile-open');
            elements.mobileOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else {
            elements.sidebar.classList.remove('mobile-open');
            elements.mobileOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    function closeMobileSidebar() {
        if (state.mobileSidebarOpen) {
            toggleMobileSidebar();
        }
    }

    // ========================================
    // MOBILE OVERLAY
    // ========================================

    function createMobileOverlay() {
        elements.mobileOverlay = document.createElement('div');
        elements.mobileOverlay.className = 'mobile-overlay';
        elements.mobileOverlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 999;
      display: none;
      opacity: 0;
      transition: opacity 0.3s ease;
    `;
        document.body.appendChild(elements.mobileOverlay);

        // Add active class styles
        const style = document.createElement('style');
        style.textContent = `
      .mobile-overlay.active {
        display: block;
        opacity: 1;
      }
    `;
        document.head.appendChild(style);
    }

    // ========================================
    // EVENT LISTENERS
    // ========================================

    function setupEventListeners() {
        // Sidebar toggle button
        elements.toggleBtn.addEventListener('click', toggleSidebar);

        // Mobile overlay click
        elements.mobileOverlay.addEventListener('click', closeMobileSidebar);

        // Close mobile sidebar when clicking nav links
        const navLinks = elements.sidebar.querySelectorAll('.admin-sidebar__link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (state.isMobile) {
                    closeMobileSidebar();
                }
            });
        });

        // Window resize
        window.addEventListener('resize', debounce(handleResize, 250));

        // Escape key to close mobile sidebar
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && state.mobileSidebarOpen) {
                closeMobileSidebar();
            }
        });
    }

    // ========================================
    // ACTIVE PAGE HIGHLIGHTING
    // ========================================

    function setActivePage() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = elements.sidebar.querySelectorAll('.admin-sidebar__link');

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                link.classList.add('admin-sidebar__link--active');
            } else {
                link.classList.remove('admin-sidebar__link--active');
            }
        });
    }

    // ========================================
    // STATE PERSISTENCE
    // ========================================

    function saveSidebarState() {
        try {
            localStorage.setItem('sidebarCollapsed', state.sidebarCollapsed);
        } catch (e) {
            console.warn('Could not save sidebar state:', e);
        }
    }

    function loadSidebarState() {
        try {
            const saved = localStorage.getItem('sidebarCollapsed');
            if (saved !== null && !state.isMobile) {
                state.sidebarCollapsed = saved === 'true';
                if (state.sidebarCollapsed) {
                    elements.sidebar.classList.add('collapsed');
                    elements.mainContent.classList.add('sidebar-collapsed');
                }
            }
        } catch (e) {
            console.warn('Could not load sidebar state:', e);
        }
    }

    // ========================================
    // RESPONSIVE HANDLING
    // ========================================

    function handleResize() {
        const wasMobile = state.isMobile;
        state.isMobile = window.innerWidth < 768;

        // If switching from mobile to desktop
        if (wasMobile && !state.isMobile) {
            closeMobileSidebar();
            elements.sidebar.classList.remove('mobile-open');
            loadSidebarState();
        }

        // If switching from desktop to mobile
        if (!wasMobile && state.isMobile) {
            elements.sidebar.classList.remove('collapsed');
            elements.mainContent.classList.remove('sidebar-collapsed');
        }
    }

    // ========================================
    // UTILITY FUNCTIONS
    // ========================================

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

    // ========================================
    // DROPDOWN MENUS (if needed)
    // ========================================

    function initDropdowns() {
        const dropdownToggles = document.querySelectorAll('[data-dropdown-toggle]');

        dropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                e.stopPropagation();
                const targetId = toggle.getAttribute('data-dropdown-toggle');
                const dropdown = document.getElementById(targetId);

                if (dropdown) {
                    dropdown.classList.toggle('show');
                }
            });
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', () => {
            const dropdowns = document.querySelectorAll('.dropdown-menu.show');
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('show');
            });
        });
    }

    // ========================================
    // SMOOTH SCROLLING
    // ========================================

    function initSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');

        links.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href === '#') return;

                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // ========================================
    // INITIALIZE ON DOM READY
    // ========================================

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose public API
    window.AdminPanel = {
        toggleSidebar,
        closeMobileSidebar,
        setActivePage
    };

})();
