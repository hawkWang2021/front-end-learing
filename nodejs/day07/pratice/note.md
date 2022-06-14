# note

## 大事件后端项目记录🐛

1. BUG:`Cannot set headers after they are sent to the client`
原因:客户端发出一次请求,服务器给出两次及以上响应
解决方案:一次请求服务器只能给一次响应;清理多余次数响应;每次响应后立马`return`掉函数

2. 导入`cors`中间件,用于解决跨域问题

    ```js
    const cors = require('cors');
    ```

3. 配置解析表单数据的中间件,注意：这个中间件,只能解析 `application/x-www-form-urlencoded` 格式的表单数据

    ```js
    app.use(express.urlencoded({ extended: false }));
    ```

4. 托管静态资源到`uploads`目录下

    ```js
    app.use('/uploads', express.static('./uploads'));
    ```

5. 挂载`expressJWT`中间件,使用`.unless()`方法，指定不需要验证`token`的路由，用于解析`Token`的中间件

    ```js
    app.use(
      expressJWT({ secret: config.jwtSecretKey }).unless({ path: [/^\/api\//] })
    );
    ```

6. `multer`是用来解析`formData`格式表单数据的包

    ```js
    // 导入解析 formData 格式表单数据的包
    const multer = require('multer');
    // 导入处理路径的核心模块
    const path = require('path');
    // 创建 multer 实例对象，通过 dest 属性指定文件的存放路径
    const upload = multer({
      dest: path.join(__dirname, '../uploads'),
    });
    // upload.single() 是一个局部生效的中间件，用来解析 FormData 格式的表单数据
    // 将文章类型的数据，解析并挂载在 res.file 属性中
    // 将文本类型的数据，解析并挂载在 res.body 属性中
    // 注意：在当前的路由中，先后使用了两个中间件：
    //       先使用 multer 解析表单数据
    //       再使用 expressJoi 对解析的表单数据进行验证
    router.post(
      '/add',
      upload.single('cover_img'),
      expressJoi(add_article_schema),
      articleHandler.addArticle
    );
    ```
