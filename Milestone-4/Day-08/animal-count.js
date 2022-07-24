function animalCout(miles){
    const animalDensityFirst10Miles = 10;
    const animalDensitySecond10Miles = 10;
    const animalThirdDensityRestMiles =50;
    if(miles<= 10){
        const count = miles * 10;
        return count;
    }
    else if(miles <=20){
        const firstDenseAnimals = 10 * animalDensityFirst10Miles;
        const restMiles = miles - 10;
        const secondDenseAnimals = restMiles * animalDensitySecond10Miles;
        const totalAnimals = firstDenseAnimals + secondDenseAnimals;
        return totalAnimals;
    }
    else{
        const firstDenseAnimals = 10 * animalDensityFirst10Miles;
        const secondDenseAnimals =10 * animalDensitySecond10Miles;
        const restMiles = miles-20;
        const restDenseAnimals = restMiles*animalThirdDensityRestMiles;
        const totalAnimals = firstDenseAnimals + secondDenseAnimals + restDenseAnimals;
        return totalAnimals;
    }
}