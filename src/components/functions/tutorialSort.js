const tutorialSort=(tutorialArray, levelArray, typeArray)=>{
    let returnArray = [];
    for (const level of levelArray){
        for (const type of typeArray){
            returnArray = returnArray.concat(
                tutorialArray.filter(tutorial=>tutorial.level===level && tutorial.type===type).sort((a, b) => a.title.localeCompare(b.title))
            )
        }
    }
    return returnArray;
}
export default tutorialSort;