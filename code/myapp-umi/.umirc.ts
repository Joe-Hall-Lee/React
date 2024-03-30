import { defineConfig } from 'umi';

export default defineConfig({
    nodeModulesTransform: {
        type: 'none',
    },
    // routes: [{ path: '/', component: '@/pages/index' }],
    fastRefresh: {},

    history: {
        type: 'hash',
    },
    proxy: {
        '/rest': {
            target: 'https://portal.huaweicloud.com',
            changeOrigin: true,
        },
    },

    antd: {
        mobile: false,
    },
});
