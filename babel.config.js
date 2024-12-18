module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset'
    ],
    // plugins: [
    //     [
    //         'import',
    //         {
    //             libraryName: 'element-plus',
    //             libraryDirectory: 'es', // 指定Element Plus的组件库目录
    //         }
    //     ],
    // ]

    "plugins": [
        ["import", { "libraryName": "vant", "libraryDirectory": "es", "style": true }, "vant"]
    ]

}