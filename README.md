# VS Code Inspired Portfolio

A responsive, interactive portfolio designed to mimic the Visual Studio Code interface. This project utilises React and the AWS serverless architecture to create a modern, scalable website.

## Tech Stack

### Frontend

- React.js
- HTML/CSS
- Google ReCAPTCHA V2

### Backend (AWS Serverless Architecture)

- **API Gateway**: RESTful endpoints that calls Lambda functions for handling project data retrieval and contact form submission.
- **AWS Lambda**: Microservices for background logic using Python.
- **Amazon SES**: SES is configured to handle contact form.
- **AWS DynamoDB**: NoSQL database for storing and retrieving project metadata dynamically.

## Architecture Overview
The project follows a modular architecture where:
1. **CI/CD**: The frontend is hosted via AWS Amplify instead of S3 Bucket and Cloudfront, providing a more streamlined workflow from GitHub repository to deployment.
    - Any changes pushed to the main branch on GitHub triggers an automatic build and deployment.
    - Replaced the manual S3 bucket and CloudFront distribution with Amplify's managed hosting, which utilises CloudFront as its CDN, but offers a fully managed CI/CD pipeline that allows rapid deployment, perfect for a quick, time-limited project such as this one.
    - Secrets and API endpoints are managed through the Amplify Console, ensuring the React build points to the correct production environment variables.

1. **Storage**: Project details are stored as JSON items in DynamoDB, allowing for portfolio updates without redeploying code.
    - DynamoDB provides consistent, single-digit millisecond latency, regardless of database size.
    - Portfolio project items often varies in structure, so a NoSQL database such as DynamoDB is perfect for the change in attributes within the same table .
    - Within the AWS free tier, DynamoDB is also the cheaper option compared to running an Relational Database Service instance, which typically induces costs even when idle.

1. **API Layer**: Frontend fetch requests hit AWS API Gateway, which triggers specialised Lambda functions that calls the other AWS services.
    - By using API Gateway, the frontend does not need to know the database's internal structure. It also separates backend to frontend, allowing for easier updates to the backend without breaking the UI.
    - API Gateway effectively prevents DDoS and brute-force by limiting request rates.

1. **Security**: The website adhears to the AWS Well-Architected Framework by implementing security at every layer.
    - Identity & Access Management (IAM) utilises the "Principle of Least Privilege" by assigning the least amount of IAM roles to each lambda function, ensuring they only have the specific permissions required to interact with SES and DynamoDB.
    - Infrastructure protection benefits from AWS Shield Standard, which is automatically enabled to provide basic protection against common network DDoS attacks.
    - I implemented Google reCAPTCHA v2 to validate human interaction on the frontend and verify tokens on the backend, preventing automated spam from reaching the SES pipeline.
    - Sensitive credentials, such as the reCAPTCHA secret key are all stored within the Lambda Environment Variables rather than being hardcoded.
    - API Gateway is configured with request throttling to prevent brute-force attempts and ensure high availability of the contact form service.
