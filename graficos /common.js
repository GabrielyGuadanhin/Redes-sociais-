const getCSS = (var) => {
    const bodyStyles = getComputedStyle(document.body)
    return bodyStyles.getPropertyValue(var)
}

const tickConfig = {
    family: getCSS('--font'), 
    size: 16,
    color: getCSS('--primary-color')

}

export {getCSS, tickConfig}
