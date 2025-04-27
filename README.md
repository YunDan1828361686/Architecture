<h5>
项目用了Vue全家桶（2.0+）+vuex数据持久化+Iview4.5+Echarts+高德地图，主要内容为数据可视化类型，例如表格或Echarts或信息流展示。
</h5>
<h1>
启动步骤为：
</h1>
<h5>
找到本人另一个作品为Node.js，下载它，然后下载模块包。node serve.js启动它，然后挂着它不用管它了，这个Node.js项目是实现Architecture的后台服务所做的。
</h5>
<h5>
然后拉取本项目。并且下载模块包。
</h5>
<h5>
把两个项目都拉到编译器里（Node.js项目和Architecture项目）
</h5>
<h5>
回到桌面，按win+r，输入cdm，输入ipconfig查看本机ip（ipv4地址）。复制本机ip，再打开编译器找到Architecture项目的vue.config.js，修改第41行的ip地址。
</h5>
<h5>
npm run dev启动项目。此时node.js和本项目都已经启动，node.js的地址为本机ip:3000，本项目为本机ip:8080，然后本项目访问node.js项目里的写死的接口来启动项目。
</h5>
<h5>
测试上线版本，npm run build打包Architecture项目，得出一个dist文件，把dist文件里的东西粘贴到Node.js项目里的www文件里面，然后重启Node.js项目，打开浏览器输入http://localhost:3000即可。
</h5>
<h5>
如果项目有些许地方报错，就复制报错信息在Architecture项目里检索一下，部分有解决方法
</h5>
