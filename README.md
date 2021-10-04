# Company logo identifier 🕵️

Google Cloud Function that can identify a given company image logo.
![](./images/Design_Overview.png "Design_Overview")
This function can be ⚡ by a Google Cloud Storage trigger event.

Result will be visible in the GCP Platform ➙ Cloud Functions ➙ logs.

### How to configure

⌦ Create a Google Cloud Storage bucket that you intend to upload the files.

⌦ Create a new Google Cloud Function. (Configure the trigger to be fired from your new Cloud Storage Bucket)

⌦ Enable the Vision API in your Google Cloud Project if it has not enabled.

⌦ Copy and Paste both package.json + index.js into the Cloud Function.

⌦ Wait 3 minutes if you just enabled the Vision API, and then upload an image to the 
configured cloud storage bucket and observe the cloud function logs to see the magic!
