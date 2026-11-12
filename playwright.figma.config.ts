import { defineConfig } from '@playwright/test';
export default defineConfig({outputDir:'test-results/consumer',
 testDir:'./tests/figma', workers:1,
 use:{baseURL:'http://127.0.0.1:5183',browserName:'chromium',launchOptions:process.env.CROMA_TEST_BROWSER?{executablePath:process.env.CROMA_TEST_BROWSER}:undefined,viewport:{width:1440,height:1000}},
 reporter:[['list']],
 webServer:{command:'npm run preview -w @croma/figma-prototype',url:'http://127.0.0.1:5183',reuseExistingServer:!process.env.CI,timeout:30000}
});
