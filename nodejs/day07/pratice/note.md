# note

## 大事件后端项目记录🐛

1. `Cannot set headers after they are sent to the client`
原因:客户端发出一次请求,服务器给出两次及以上响应
解决方案:一次请求服务器只能给一次响应;清理多余次数响应;每次响应后立马return掉函数
2. abababababab
