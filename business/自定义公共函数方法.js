//  RGB转换为十六进制
function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}
rgbToHex(255, 255, 255)


// 将内容复制到剪贴板
const copyTextToClipboard = async (text) => {
    await navigator.clipboard.writeText(text)
}
