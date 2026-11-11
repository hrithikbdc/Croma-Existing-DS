import {defineConfig} from '@playwright/test';
export default defineConfig({testDir:'./tests/figma-expanded',workers:1,use:{baseURL:process.env.FIGMA_STORYBOOK_URL??'http://127.0.0.1:6021',browserName:'chromium',viewport:{width:1280,height:1000}},reporter:[['list']]});
