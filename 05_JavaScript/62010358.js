onmessage = function (message) {
    let dateString = new Date()
    let colorBG = ['red','green', 'blue', 'pink', 'lime', 'aqua']
    let colorText = ['aqua','plum', 'yellow', 'darkcyan', 'hotpink', 'red']
    let i = message.data.index
    postMessage({
        colorBG: colorBG[i],
        colorText: colorText[i],
        dateString: dateString,
        index: i,
    })
    i = (i + 1) % colorBG.length
    function refreshTime() {
        let dateString = new Date()
        postMessage({
            colorBG: colorBG[i],
            colorText: colorText[i],
            dateString: dateString,
            index: i,
        })
        i = (i + 1) % colorBG.length
    }
    setInterval(refreshTime, 1000)
}

