import express from 'express';
import { getAllUser } from '../controller/user_ctrl.js';

// 创建路由对象
const router = new express.Router();
// 挂载路由规则
router.get('/user', getAllUser);

// ES6 默认导出语法
export default router;
