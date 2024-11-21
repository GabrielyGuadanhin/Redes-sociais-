const getCSS = (variante) => {
    const bodyStyles = getComputedStyle(document.body)
    return bodyStyles.getPropertyValue(variante)
}

const tickConfig = {
    family: getCSS('--font'), 
    size: 16,
    color: getCSS('--primary-color')

}

export {getCSS, tickConfig}
