'use strict';
// 获取数据库引用
const db = uniCloud.database();
// 新建文件默认框架
exports.main = async (event, context) => {
	let label = await db.collection('label').get()
	
	//返回数据给客户端
	return {
		code:200,
		msg:'获取成功',
		data:label.data
	}
};
