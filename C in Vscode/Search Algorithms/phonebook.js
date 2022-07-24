// Linear Search
//
const person = [
    {
        name: "Carter",
        number: "+8801999577330"
    },
    {
        name: "David",
        number: "+69"
    }
];

const findNumber = () => {
    for (let i = 0; i < 2; i++) {
        console.log("Attempt", i);

        if (person[i].name == "Carter") {
            console.log("Found",person[i].name, person[i].number);
            return;
        }

    };
    console.log("Not found");
};

findNumber();