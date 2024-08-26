function isValidPath(currentPath, paths) {
    for (const key in paths) {
        if (typeof paths[key] === 'string') {
            if (paths[key] === currentPath) return true
        } else {
            if (isValidPath(currentPath, paths[key])) return true
        }
    }
    return false
}

export default isValidPath