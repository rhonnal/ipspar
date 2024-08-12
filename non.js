let config = {
    init: 0,
    max: 100,
    step: 10
};

// Use the config object in some logic
for (let i = config.init; i <= config.max; i += config.step) {
    console.log(i); // Prints 0, 10, 20, ..., 100
}
