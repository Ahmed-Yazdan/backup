const draw = n => {
    if (n <= 0)
        return;

    draw(n - 1);

    for (let i = 0; i < n; i++)
    {
        console.log("#");
    }
    // console.log("\n");
}

function main(){
    const height = 5;
    draw(height);
}

main();