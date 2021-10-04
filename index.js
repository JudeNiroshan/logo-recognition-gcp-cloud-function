// Imports the Google Cloud client libraries
const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();


/**
 * Generic background Cloud Function to be triggered by Cloud Storage.
 *
 * @param {object} file The Cloud Storage file metadata.
 * @param {object} context The event metadata.
 */
exports.helloGCS = async (file, context) => {

    const bucketName = file.bucket;
    const fileName = file.name;

    // Performs logo detection on the gcs file
    const [result] = await client.logoDetection(`gs://${bucketName}/${fileName}`);
    const logos = result.logoAnnotations;
    logos.forEach(logo => {
        console.log(`Logo has score of ${logo.score} to be likely to ${logo.description}`)
    });

};