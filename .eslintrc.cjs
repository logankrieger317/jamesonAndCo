module.exports = {
  root: true,
  env: { 
    browser: true, 
    es2020: true,
    node: true 
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // Modern React doesn't require React import for JSX
    'react/react-in-jsx-scope': 'off',
    // Disable unused React import errors (handled by jsx-runtime)
    'no-unused-vars': ['error', { 
      'varsIgnorePattern': '^(React|_)',
      'argsIgnorePattern': '^_',
      'destructuredArrayIgnorePattern': '^_'
    }],
    // Allow unescaped entities in JSX (common in content)
    'react/no-unescaped-entities': 'off',
    // Disable prop-types requirement (using TypeScript)
    'react/prop-types': 'off',
    // Allow unknown properties (for modern HTML attributes)
    'react/no-unknown-property': 'off',
    // Allow irregular whitespace (can occur in copy-paste)
    'no-irregular-whitespace': 'warn'
  },
  overrides: [
    {
      // Server and config files
      files: ['server.js', 'vite.config.js', 'tailwind.config.js'],
      env: {
        node: true,
        browser: false
      },
      globals: {
        'process': 'readonly',
        'require': 'readonly',
        '__dirname': 'readonly',
        'module': 'readonly'
      }
    }
  ]
}
