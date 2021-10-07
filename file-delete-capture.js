
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

    console.log(`${fileName} deleted from ${bucketName} cloud storage bucket!!!`)
};