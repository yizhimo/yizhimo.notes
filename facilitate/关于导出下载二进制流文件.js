// 触发
handleExport()

function handleExport() {
  exportFile('参数').then(res => {
    // 设置下载格式 比如:excel
    const blob = new Blob([res], { type: 'application/vnd.ms-excel' })

    // 创建a标签用于下载 记得用完移除
    const link = document.createElement('a')
    const body = document.querySelector('body')
    link.href = window.URL.createObjectURL(blob)
    link.style.display = 'none'
    link.download = handleExportName()
    body.appendChild(link)
    link.click()
    body.removeChild(link)
    window.URL.revokeObjectURL(link.href)
  })
}

function handleExportName() {
  return '下载文件名字'
}

// ----------------------------------------------------------------------------

// 封装的网络请求js文件里
export function exportFile(data) {
  console.log(data)
  return request({
    url: '',
    method: 'get',
    // 设置响应格式为blob流格式
    responseType: 'blob'
  })
}