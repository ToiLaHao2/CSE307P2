function showServiceList(list) {
    for (let item of list) {
        let str = `Name: ${item.serviceName}; Content: ${item.serviceContent}`
        console.log(str);
    }
}
