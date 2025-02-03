# Style Dictionary Extended Design Tokens

The script `build.ts` generates design tokens (JSON files) based on your reference and the object to be extended.  
It uses the Lodash library to merge data and JSON5 to read and write JSON5 files.  
By leveraging extensions, the light theme serves as the base, with variations like "dark" only modifying specific properties.

## 💡 Prerequisites

- Node.js 22
- Git

## 🚀 Setup

1. Select the compatible Node version:
   ```sh
   nvm use
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Build the project:
   ```sh
   npm run build
   ```
4. Build the project with Watch:
   ```sh
   npm start
   ```
