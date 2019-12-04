//导入http内置模块
const http = require('http')
//这个模块可以帮我们解析url地址，从而拿到pathname query
const urlModule = require('url')

//创建一个http服务器
const server = http.createServer()

//监听http服务器的request请求
server.on('request',function(req,res){
    //write your code here ...
    //const url = req.url
    const {pathname : url ,query} = urlModule.parse(req.url,true)
    if(url === '/getscript'){
        
        var data = {
            name : 'xjj',
            age: '18',
            gender: '女孩子'
        }
        //拼接一个合法的js脚本
        // var scriptStr = res.url
        var scriptStr = `${query.callback}(${JSON.stringify(data)})`
        res.end(scriptStr)
    }else{
        res.end('404')
    }
})

//指定端口号并启动监听服务
server.listen(3000,function(){
    console.log('server listen at http://127.0.0.1:3000')
})