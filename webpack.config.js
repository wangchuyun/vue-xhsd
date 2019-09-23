var path=require('path')
var webpack=require('webpack');

var htmlWebpackPlugin = require('html-webpack-plugin')
var VueLoaderPlugin = require('vue-loader/lib/plugin.js')
module.exports={
    entry:path.join(__dirname,'./src/main.js'),
    output: {
        path:path.join(__dirname,'./dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname,'/src/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin(),
         new webpack.ProvidePlugin({ 
                             $:"jquery", 
                             jQuery:"jquery", 
                            "windows.jQuery":"jquery"
                    }) 
    ],
    module: {
        rules: [
            { test: /\.(jpg|png|gif|bmp|jpeg|)$/, use:'url-loader'},
            { test: /\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},//处理字体文件
              
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },//配置babel转换es高级语法
            { test: /.\.vue$/, use: 'vue-loader'},//处理.vue文件的loader
            { test:/.\.css$/,use:['style-loader','css-loader']},//处理css文件
            { test:/.\.scss$/,use:['style-loader','css-loader','sass-loader']},//处理sass文件
            { test:/.\.less$/,use:['style-loader','css-loader','less-loader']}//处理less文件

        ],    
    },

}