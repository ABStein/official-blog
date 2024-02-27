import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

const config = defineConfig({
    projectId: 'wlg1tuu8',
    dataset: 'production',
    title: 'My Blog',
    apiVersion: '2024-02-27',
    basePath: '/admin',
    plugins: [
        // '@sanity/base',
        // '@sanity/components',
        // '@sanity/default-layout',
        // '@sanity/default-login',
        deskTool(),
        // '@sanity/form-builder'
    ],
})


export default config;
