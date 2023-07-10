const { colors } = require(`tailwindcss/defaultTheme`);

module.exports = {
	content: ['./components/**/*.js', './pages/**/*.js'],
	theme: {
		extend: {
			colors: {
				primary: colors.indigo
			},
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					md: '2rem'
				}
			},
			backgroundImage: (theme) => ({
				'mmx-wood': "url('/images/site/wood.webp')",
				'mmx-panel': "url('/images/site/wood-pannel.webp')",
				'mmx-forest': "url('/images/site/forest.webp')"
			})
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px'
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
