## Playwright Sign-In/Sign-Up E2E Tests
# Requirements:
Node.js 18+ n/
npm 8+

# Quick start:
clone project
npm install
npx playwright install --with-deps
create an .env file in root with:
LOGIN_EMAIL=email@che.che
LOGIN_PASSWORD=12345pChe

# Run commands:
'npm run tests' - to run tests
'npm run tests --grep "@sign-in"' to run tests with teg
'npm run report' - to generate and open allure report
