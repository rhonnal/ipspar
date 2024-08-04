const specWithSeconds = { SECONDS: ':%S' };
const specWithoutSeconds = {};

// Function to demonstrate the behavior with and without the SECONDS property
function demo(spec) {
    const SECONDS = spec.SECONDS || ':%S';
    const formattedSeconds = format(SECONDS);
    console.log('Formatted seconds:', formattedSeconds);
}

console.log('With SECONDS property:');
demo(specWithSeconds);

console.log('Without SECONDS property:');
demo(specWithoutSeconds);
