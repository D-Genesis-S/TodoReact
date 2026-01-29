const useCombinedRefs = (...refs) => {
    return (node) => {
        refs.forEach((ref) => {
            if(!refs){
                return
            }

            if(typeof ref === 'function') {
                ref(node)
            } else {
                ref.current = node
            }
        })
    }
}

export default useCombinedRefs