export const get_label = (data) => {
	return new Promise((reslove, resject) => {
		uniCloud.callFunction({
			name: 'get_label',
		}).then((res) => {
			reslove(res)
			if (res.result.code == 200) {
				reslove(res.result)
			} else {
				resject(res.resject)
			}
		}).catch((err) => {
			resject(err.resject)
		})
	})
}

export const get_list = () => {
	return new Promise((reslove, resject) => {
		reslove({
			data: '请求成功'
		})
	})
}
