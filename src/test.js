/**
  extensions is an Array and each item has such format:
  {firstName: 'xxx', lastName: 'xxx', ext: 'xxx', extType: 'xxx'}
  lastName, ext can be empty, extType can only has "DigitalUser", "VirtualUser","FaxUser","Dept","AO".
**/

/**
  Question 1: sort extensions by "firstName" + "lastName" + "ext" ASC
**/

const arr = [
  {firstName: 'xxx', lastName: '12dd', ext: 'DigitalUser', extType: 'DigitalUser'},
  {firstName: 'eda', lastName: 'saw', ext: '', extType: 'VirtualUser'},
  {firstName: 'vsa', lastName: '332s', ext: 'FaxUser', extType: 'FaxUser'},
  {firstName: 'aaw', lastName: '', ext: '', extType: 'Dept'},
  {firstName: 'aaw', lastName: 'csd3', ext: 'AO', extType: 'AO'},
  {firstName: 'aaw', lastName: 'qcsd3', ext: 'AO', extType: 'AO'},
  {firstName: 'aaw', lastName: 'qcs', ext: 'AO', extType: 'AO'},
  {firstName: 'waaw', lastName: 'qcs', ext: 'AO', extType: 'AO'},
]

function sortByAsciiAsc(strA, strB) {
  if (strA < strB) {
    return -1
  } else if (strA > strB) {
    return 1
  } else {
    return 0
  }
}

function sortByNumAsc(numA, numB) {
  return numA - numB
}

function sortExtensionsByName(extensions) {
  if (Array.isArray(extensions)) {
    return extensions.sort(sortByOne)
  } else {
    console.error('Please Pass in a variable of type array')
  }
}

function sortByOne(extensionsItemA, extensionsItemB) {
  // console.log('extensionsItemA', extensionsItemA)
  // console.log('extensionsItemB', extensionsItemB)
  const mixPropA = extensionsItemA?.firstName + extensionsItemA?.lastName + extensionsItemA?.ext
  const mixPropB = extensionsItemB?.firstName + extensionsItemB?.lastName + extensionsItemB?.ext
  return sortByAsciiAsc(mixPropA, mixPropB)
}

console.log('arr', sortExtensionsByName(arr))
/**
  Question 2: sort extensions by extType follow these orders ASC
  DigitalUser < VirtualUser < FaxUser < AO < Dept.
**/
function sortExtensionsByExtType(extensions) {
  if (Array.isArray(extensions)) {
    return extensions.sort(sortByTwo)
  } else {
    console.error('Please Pass in a variable of type array')
  }
}

function sortByTwo(extensionsItemA, extensionsItemB) {
  if (extensionsItemA.extType && extensionsItemB.extType) {
    const extTypeMap = new Map([
      ['DigitalUser', 0], ['VirtualUser', 1], ['FaxUser', 2], ['AO', 3], ['Dept', 4]
    ])
    const extTypeARank = extTypeMap.get(extensionsItemA.extType)
    const extTypeBRank = extTypeMap.get(extensionsItemB.extType)
    return sortByNumAsc(extTypeARank, extTypeBRank)
  } else {
    return 0
  }
}

console.log('arr2', sortExtensionsByExtType(arr))


/**
  saleItems is an Array has each item has such format:
  {
	month: n, //[1-12],
	date: n, //[1-31],
	transationId: "xxx",
	salePrice: number
  }
**/

/**
  Question 3: write a function to calculate and return a list of total sales (sum) for each quarter, expected result like:
  [
  	{quarter: 1, totalPrices: xxx, transactionNums: n},
  	{....}
  ]
**/
const saleItems = [
  { month: 1, date: 2, transationId: "221", salePrice: 10 },
  { month: 2, date: 2, transationId: "221", salePrice: 10 },
  { month: 3, date: 2, transationId: "221", salePrice: 10 },
  { month: 4, date: 2, transationId: "221", salePrice: 10 },
  { month: 5, date: 2, transationId: "221", salePrice: 10 },
  { month: 6, date: 2, transationId: "221", salePrice: 10 },
  { month: 7, date: 2, transationId: "221", salePrice: 10 },
  { month: 8, date: 2, transationId: "221", salePrice: 10 },
  { month: 9, date: 2, transationId: "221", salePrice: 10 },
  { month: 10, date: 2, transationId: "221", salePrice: 10 },
  { month: 11, date: 2, transationId: "221", salePrice: 10 },
  { month: 12, date: 2, transationId: "221", salePrice: 10 },
  { month: 12, date: 1, transationId: "221", salePrice: 60 },
]

function sumByQuarter(saleItems) {
  if (Array.isArray(saleItems)) {
    const quarterDataArr = [
      { quarter: 1, totalPrices: 0, transactionNums: 0 },
      { quarter: 2, totalPrices: 0, transactionNums: 0 },
      { quarter: 3, totalPrices: 0, transactionNums: 0 },
      { quarter: 4, totalPrices: 0, transactionNums: 0 },
    ]
    saleItems.forEach(item => {
      const quarter = parseInt((item.month - 1) / 3) + 1
      for (let quarterData of quarterDataArr) {
        if (quarter === quarterData.quarter) {
          quarterData.totalPrices += item.salePrice
          quarterData.transactionNums++
          break
        }
      }
    })
    return quarterDataArr
  } else {
    console.error('Please Pass in a variable of type array')
  }
}

console.log('saleItems', sumByQuarter(saleItems))

/**
  Question 4: write a function to calculate and return a list of average sales for each quarter, expected result like:
  [
    {quarter: 1, averagePrices: xxx, transactionNums: n},
    {....}
  ]
**/

function averageByQuarter(saleItems) {
  return sumByQuarter(saleItems).map(item => {
    const tempItem = { quarter: 0, averagePrices: 0, transactionNums: 0 }
    tempItem.quarter = item.quarter
    tempItem.transactionNums = item.transactionNums
    tempItem.averagePrices = item.totalPrices / item.transactionNums
    return tempItem
  })
}

console.log('saleItems2', averageByQuarter(saleItems))


/**
  Question 5: please create a tool to generate Sequence
  Expected to be used like:
  var sequence1 = new Sequence();
  sequence1.next() --> return 1;
  sequence1.next() --> return 2;
  
  in another module:
  var sequence2 = new Sequence();
  sequence2.next() --> 3;
  sequence2.next() --> 4;
**/
class Sequence {
  static index = 1

  next() {
    return Sequence.index++
  }
}

var sequence1 = new Sequence()
sequence1.next()





/**
    Question 6:
    AllKeys: 0-9;
    usedKeys: an array to store all used keys like [2,3,4];
    We want to get an array which contains all the unused keys,in this example it would be: [0,1,5,6,7,8,9]
**/

function getUnUsedKeys(allKeys, usedKeys) {
  return allKeys.filter(item => usedKeys.indexOf(item) === -1)
}

console.log(getUnUsedKeys([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [2, 3, 4]))





