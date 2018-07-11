# 教程说明

## package命令说明  

### dev
> 组件开发  
> *可以添加--env.include参数指定只运行相应组件*  
> `yarn dev --env.include k12-flow,k12-upload`

### build
> 构建组件 完整构建手机端页面示例，demos下的示例组件更新也使用此命令

### doc:build
> 生成文档，生成以下文件：
- ./src/components/map.json
- ./src/locales/all.yml
- ./src/locales/en.yml
- ./src/locales/zh-CN.yml
- ./src/tools/changes.json
- ./src/plugins/changes.json
- ./src/directives/changes.json
- ./src/datas/vux_component_list.json
- ./docs/**

### doc:dev
> 文档开发

### build-main
> 根据 *./src/components/map.json* 构建 *./index.js* 导出文件

### build-components
> 根据 *./src/components/map.json* 构建 *./src/components/index.js* 导出文件

### build-styles
> 根据 *./src/styles/* 下的less样式文件编译css文件到 *./dist/styles/* 路径下

### xbuild
> 执行 *build-styles* 和 *build-components* 两个命令

---

## 定制K12组件示例
1. 在./src/components文件夹下创建Test.vue组件源码
2. 在./src/demos下创建Test.vue示例代码
3. 在./src/demo_list.json里添加Test组件名（如果不添加，则显示 *~~貌似示例不存在~~* ）
4. 在./src/datas/vux_component_list.json里添加Test组件数据（如果不添加，则在Demo List页面就不会显示，但是仍然可以手动输入地址查看）
5. 在./src/components/map.json中添加Test.vue组件源码信息
6. 运行 ```yarn build-components``` 构建组件，使之能在demos下的Test.vue中使用组件
7. 运行 ```yarn dev``` 开始查看

> 其中第4、5、6可以通过```yarn doc:build```命令实现

### 更新文档 ( **`重要`** )
```bash
$ cd docs
$ yarn build
```