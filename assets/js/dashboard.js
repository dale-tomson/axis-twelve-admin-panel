/**
 * Axis Twelve Admin Panel - Dashboard Charts
 * Chart.js initialization and data visualization
 */

(function () {
    'use strict';

    // ========================================
    // CHART CONFIGURATION
    // ========================================

    const getChartColors = () => {
        const style = getComputedStyle(document.documentElement);
        return {
            primary: style.getPropertyValue('--color-primary').trim() || '#081f37',
            secondary: style.getPropertyValue('--color-secondary').trim() || '#5fc9f3',
            accent: style.getPropertyValue('--color-accent').trim() || '#2e79ba',
            dark: style.getPropertyValue('--color-dark').trim() || '#1e549f',
            success: style.getPropertyValue('--color-success').trim() || '#28a745',
            warning: style.getPropertyValue('--color-warning').trim() || '#ffc107',
            danger: style.getPropertyValue('--color-danger').trim() || '#dc3545',
            info: style.getPropertyValue('--color-info').trim() || '#17a2b8',
            gray: style.getPropertyValue('--color-gray-600').trim() || '#6c757d'
        };
    };

    let chartColors = getChartColors();

    const chartDefaults = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    padding: 15,
                    font: {
                        family: "'Inter', sans-serif",
                        size: 12
                    }
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                padding: 12,
                cornerRadius: 8,
                titleFont: {
                    family: "'Inter', sans-serif",
                    size: 14,
                    weight: '600'
                },
                bodyFont: {
                    family: "'Inter', sans-serif",
                    size: 13
                }
            }
        }
    };

    // ========================================
    // REVENUE CHART (Line Chart)
    // ========================================

    function initRevenueChart() {
        const ctx = document.getElementById('revenueChart');
        if (!ctx) return;

        const data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Revenue 2024',
                    data: [12500, 19200, 15800, 22400, 28900, 32100, 29500, 35800, 41200, 38900, 45600, 48392],
                    borderColor: chartColors.secondary,
                    backgroundColor: 'rgba(95, 201, 243, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 4,
                    pointHoverRadius: 6,
                    pointBackgroundColor: chartColors.secondary,
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2
                },
                {
                    label: 'Revenue 2023',
                    data: [10200, 15800, 13200, 18900, 22100, 25800, 23400, 28900, 32500, 30100, 35200, 38100],
                    borderColor: chartColors.accent,
                    backgroundColor: 'rgba(46, 121, 186, 0.05)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 3,
                    pointHoverRadius: 5,
                    pointBackgroundColor: chartColors.accent,
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2
                }
            ]
        };

        const config = {
            type: 'line',
            data: data,
            options: {
                ...chartDefaults,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function (value) {
                                return '$' + value.toLocaleString();
                            },
                            font: {
                                family: "'Inter', sans-serif",
                                size: 11
                            }
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)',
                            drawBorder: false
                        }
                    },
                    x: {
                        grid: {
                            display: false,
                            drawBorder: false
                        },
                        ticks: {
                            font: {
                                family: "'Inter', sans-serif",
                                size: 11
                            }
                        }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                }
            }
        };

        new Chart(ctx, config);
    }

    // ========================================
    // TRAFFIC SOURCES CHART (Doughnut Chart)
    // ========================================

    function initTrafficChart() {
        const ctx = document.getElementById('trafficChart');
        if (!ctx) return;

        const data = {
            labels: ['Direct', 'Organic Search', 'Social Media', 'Referral', 'Email'],
            datasets: [{
                data: [35, 28, 18, 12, 7],
                backgroundColor: [
                    chartColors.primary,
                    chartColors.secondary,
                    chartColors.accent,
                    chartColors.success,
                    chartColors.warning
                ],
                borderWidth: 0,
                hoverOffset: 10
            }]
        };

        const config = {
            type: 'doughnut',
            data: data,
            options: {
                ...chartDefaults,
                cutout: '65%',
                plugins: {
                    ...chartDefaults.plugins,
                    legend: {
                        ...chartDefaults.plugins.legend,
                        position: 'right'
                    },
                    tooltip: {
                        ...chartDefaults.plugins.tooltip,
                        callbacks: {
                            label: function (context) {
                                const label = context.label || '';
                                const value = context.parsed || 0;
                                return label + ': ' + value + '%';
                            }
                        }
                    }
                }
            }
        };

        new Chart(ctx, config);
    }

    // ========================================
    // SALES CHART (Bar Chart) - For other pages
    // ========================================

    function initSalesChart() {
        const ctx = document.getElementById('salesChart');
        if (!ctx) return;

        const data = {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Sales',
                data: [65, 78, 90, 81, 95, 105, 88],
                backgroundColor: chartColors.secondary,
                borderColor: chartColors.secondary,
                borderWidth: 0,
                borderRadius: 6,
                barThickness: 30
            }]
        };

        const config = {
            type: 'bar',
            data: data,
            options: {
                ...chartDefaults,
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)',
                            drawBorder: false
                        },
                        ticks: {
                            font: {
                                family: "'Inter', sans-serif",
                                size: 11
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false,
                            drawBorder: false
                        },
                        ticks: {
                            font: {
                                family: "'Inter', sans-serif",
                                size: 11
                            }
                        }
                    }
                }
            }
        };

        new Chart(ctx, config);
    }

    // ========================================
    // INITIALIZE ALL CHARTS
    // ========================================

    function init() {
        // Wait for Chart.js to be loaded
        if (typeof Chart === 'undefined') {
            console.error('Chart.js not loaded');
            return;
        }

        // Set global Chart.js defaults
        Chart.defaults.font.family = "'Inter', sans-serif";
        Chart.defaults.color = '#6c757d';

        // Initialize charts
        initRevenueChart();
        initTrafficChart();
        initSalesChart();
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
    window.DashboardCharts = {
        initRevenueChart,
        initTrafficChart,
        initSalesChart
    };

})();
