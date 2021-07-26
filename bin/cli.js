#!/usr/bin/env node
const program = require('commander')
const download = require('./download.js')
const inquirer = require('inquirer')
// 配置交互命令
const List = [
    {
        type: 'list',
        name: 'type',                  // 第一个answer的key
        message: 'What kind of project do you want to create?',
        choices: [
            'admin',
            'H5',
        ]
    },
    {
        type: 'confirm',
        name: 'isNeedUI',
        message: 'Do you need to download ln_ui?',
        default: true
    },
]
// 获取版本信息
program.version(require('../package.json').version)
program
    // .option('-a, --age <age>', 'you age', '33')
    .command('init <name> [branch]') // 初始化命令
    .description('初始化乐牛项目')
    .action((name, branch) => {  // 获取到name
        // 拉取项目
        inquirer.prompt(List).then((answer) =>{
            console.log(answer);
            download.cloneTemplate(program.args[1], answer);
        })
    });
//最后调用，用于解析process.argv
program.parse(process.argv);



