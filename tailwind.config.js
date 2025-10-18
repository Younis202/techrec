/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
        './app/**/*.{js,jsx}',
        './src/**/*.{js,jsx}',
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "var(--color-border)", /* white-10 */
                input: "var(--color-input)", /* elevated-dark-surface */
                ring: "var(--color-ring)", /* premium-gold */
                background: "var(--color-background)", /* rich-black */
                foreground: "var(--color-foreground)", /* white */
                primary: {
                    DEFAULT: "var(--color-primary)", /* premium-gold */
                    foreground: "var(--color-primary-foreground)", /* rich-black */
                },
                secondary: {
                    DEFAULT: "var(--color-secondary)", /* deep-emerald */
                    foreground: "var(--color-secondary-foreground)", /* white */
                },
                destructive: {
                    DEFAULT: "var(--color-destructive)", /* clear-red */
                    foreground: "var(--color-destructive-foreground)", /* white */
                },
                muted: {
                    DEFAULT: "var(--color-muted)", /* white-5 */
                    foreground: "var(--color-muted-foreground)", /* muted-gray */
                },
                accent: {
                    DEFAULT: "var(--color-accent)", /* soft-white */
                    foreground: "var(--color-accent-foreground)", /* rich-black */
                },
                popover: {
                    DEFAULT: "var(--color-popover)", /* elevated-dark-surface */
                    foreground: "var(--color-popover-foreground)", /* white */
                },
                card: {
                    DEFAULT: "var(--color-card)", /* elevated-dark-surface */
                    foreground: "var(--color-card-foreground)", /* white */
                },
                success: {
                    DEFAULT: "var(--color-success)", /* healthcare-green */
                    foreground: "var(--color-success-foreground)", /* white */
                },
                warning: {
                    DEFAULT: "var(--color-warning)", /* attention-amber */
                    foreground: "var(--color-warning-foreground)", /* rich-black */
                },
                error: {
                    DEFAULT: "var(--color-error)", /* clear-red */
                    foreground: "var(--color-error-foreground)", /* white */
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'Consolas', 'monospace'],
            },
            fontSize: {
                'xs': ['0.75rem', { lineHeight: '1rem' }],
                'sm': ['0.875rem', { lineHeight: '1.25rem' }],
                'base': ['1rem', { lineHeight: '1.5rem' }],
                'lg': ['1.125rem', { lineHeight: '1.75rem' }],
                'xl': ['1.25rem', { lineHeight: '1.75rem' }],
                '2xl': ['1.5rem', { lineHeight: '2rem' }],
                '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
                '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
                '5xl': ['3rem', { lineHeight: '1' }],
                '6xl': ['3.75rem', { lineHeight: '1' }],
            },
            fontWeight: {
                normal: '400',
                medium: '500',
                semibold: '600',
                bold: '700',
            },
            boxShadow: {
                'card': 'var(--shadow-card)',
                'modal': 'var(--shadow-modal)',
                'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            },
            backdropBlur: {
                'glass': 'var(--glass-backdrop-blur)',
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "fade-in": "fade-in 0.2s ease-out",
                "fade-out": "fade-out 0.2s ease-out",
                "slide-in": "slide-in 0.3s ease-out",
                "slide-out": "slide-out 0.3s ease-out",
                "shimmer": "shimmer 2s linear infinite",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                "fade-in": {
                    from: { opacity: "0" },
                    to: { opacity: "1" },
                },
                "fade-out": {
                    from: { opacity: "1" },
                    to: { opacity: "0" },
                },
                "slide-in": {
                    from: { transform: "translateX(100%)" },
                    to: { transform: "translateX(0)" },
                },
                "slide-out": {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(100%)" },
                },
                "shimmer": {
                    from: { transform: "translateX(-100%)" },
                    to: { transform: "translateX(100%)" },
                },
            },
            transitionTimingFunction: {
                'smooth': 'var(--ease-smooth)',
            },
            transitionDuration: {
                'fast': 'var(--animation-fast)',
                'medium': 'var(--animation-medium)',
                'slow': 'var(--animation-slow)',
                'page': 'var(--animation-page)',
            },
            zIndex: {
                'navigation': '50',
                'overlay': '100',
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
            },
        },
    },
    plugins: [
        require("tailwindcss-animate"),
    ],
}