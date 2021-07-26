const download = require('download-git-repo')
const path = require('path')
const ora = require('ora')
const fs = require('fs')

exports.cloneTemplate = (name, type) => {
    console.log('类型是：' + type);
    const lqProcess = ora('正在创建...')
    lqProcess.start()
    const projectPath = path.join(process.cwd(), name);
    download('direct:https://gitee.com/moonshinean/taro_book.git', projectPath, {clone: true},(err) => {
        if (err){
            lqProcess.color = 'red';
            lqProcess.fail()
            console.log('创建失败');
        }else {
            lqProcess.color = 'green';
            lqProcess.succeed()
            console.log('创建成功');
        }
    })
}


