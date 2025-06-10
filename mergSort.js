#!/usr/bin/env node

const merge = (leftArr, rightArr) => {
    const outPut = []
    let leftIndex = 0
    let rightIndex = 0


    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        const leftEl = leftArr[leftIndex]
        const rightEl = rightArr[rightIndex]

        if (leftEl < rightEl) {
            outPut.push(leftEl)
            leftIndex++
        } else {
            outPut.push(rightEl)
            rightIndex++
        }
    }

    return [...outPut, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]

}

const mergeSort = array => {
    if (array.length <= 1) return array

    const middleIndex = Math.floor(array.length / 2)
    const leftArr = array.slice(0, middleIndex)
    const rightArr = array.slice(middleIndex)

    return merge(mergeSort(leftArr), mergeSort(rightArr))
}


console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))
console.log(mergeSort([105, 79, 100, 110]))
console.log('mergesortworking')