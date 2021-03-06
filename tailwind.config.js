const colors = [
  'bg',
  'bg-alt',
  'text',
  'text-alt',
  'border',
]

const var_colors = {}
colors.forEach(c => var_colors['-'+c] = `var(--${c})`)

// tailwind.config.js
module.exports = {
  purge: false,
  theme: {
    extend: {
      colors: var_colors,
    }
  },
  variants: {},
  plugins: [],
}