# MGM's AWS Resume

This highlights my [Cloud Resume Challenge](https://cloudresumechallenge.dev/docs/the-challenge/aws/), built on AWS. The [website](https://miguel.nothingcreatessomething.com/) is hosted on AWS S3 Storage, incorporating a visitor counter and utilizing Amazon Simple Email Service through AWS Functions. The development encompasses HTML, CSS, and JavaScript, with the visitor counter driven by Terraform in collaboration with AWS Lambda Functions.

![architecture](/architecture.png)

1. **File Upload to Amazon S3:**
   Transfer your HTML, CSS, and JavaScript files to an Amazon S3 bucket, establishing a secure foundation for hosting your web content.

2. **Securing S3 Website with HTTPS:**
   Strengthen the security of your S3 website URL by implementing HTTPS. Utilize Amazon CloudFront to enhance support and establish a robust, encrypted communication channel.

3. **SSL/TLS Certificate Management with ACM:**
   Seamlessly provision, manage, and deploy SSL/TLS certificates with AWS Certificate Manager (ACM). Eliminate manual tasks like purchasing, uploading, and renewing certificates, ensuring secure connections with AWS services and internal resources.

4. **Custom DNS Configuration:**
   Tailor a custom DNS domain name to direct to the CloudFront distribution, allowing access to your resume at a personalized address like my-name-resume-website.com. Use Amazon Route 53 or your preferred DNS provider for this purpose.

5. **Lambda Function for Web App Integration:**
   Develop a Lambda function to efficiently handle requests from your web application, facilitating seamless communication with the DynamoDB database.

6. **DynamoDB Visitor Counter Optimization:**
   Ensure the visitor counter efficiently retrieves and updates its count in DynamoDB. Opt for on-demand pricing to minimize costs, especially for projects involving moderate data storage or retrieval.

7. **Configuring Amazon Simple Email Service (Amazon SES):**
   Receive emails confidently without relying on an on-premises SMTP server. Leverage the Amazon SES API or SMTP interface for seamless email configuration.

8. **AWS Lambda and Amazon SES Integration:**
   Develop a Python-based Lambda function with the logic for sending emails using Amazon SES. Specify recipient addresses to streamline the email sending process.

## Pre-requisites

I employ [Dev Containers](https://code.visualstudio.com/docs/remote/containers) as my development environment. To initiate the setup, you need to install [Docker](https://www.docker.com/products/docker-desktop) and the [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension for VS Code.
After installation:

1. Ensure Docker is running.
2. Launch the project in VS Code.
3. Open the command palette with Ctrl/Cmd + Shift + P
4. Enter "Reopen in Container" and choose:
    - Utilize the [`Python 3`](.devcontainer/api/devcontainer.json) container for AWS Functions backend development.
    - Choose the [`JS Frontend`](.devcontainer/frontend/devcontainer.json) container for frontend development.
5. VS Code will refresh, placing you within the selected container.

## Organization

- `frontend/`: This folder encompasses the website.
    - `main.js`: Contains the code for the visitor counter.
    - `email.js`: Contains the code for sending emails with Amazon SES.
- `api/`: Here resides the Terraform backend API.
- `.devcontainer`: This folder holds the container configuration for VS Code.
- `.github/workflows/`: This directory includes configurations for the CI/CD workflow. 

## Frontend resources

The front-end is a static site with HTML, CSS, and JavaScript, featuring a visitor counter. The counter retrieves data through an API call to an AWS Function.

- While I lack design skills, I employed this template [template](https://www.styleshout.com/free-templates/ceevee/) to build my site.
- Explore the [article](https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data) on utilizing the JavaScript Fetch API to retrieve data.

## Backend resources
- [AWS Lambda: Allows a Lambda function to access an Amazon DynamoDB table](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_lambda-access-dynamodb.html)
- [Terraform About the Docs](https://developer.hashicorp.com/terraform/docs)

## CI/CD Resources

- This is how you can deploy a blob storage static site with [GitHub actions.](https://docs.microsoft.com/azure/storage/blobs/storage-blobs-static-site-github-actions)
- [GitHub Actions documentation](https://docs.github.com/en/actions)

## TODO 
- Test code.
- Leverage Terraform to orchestrate frontend development tasks. 
- Improve doccumentation on github.
- Integrate Ansible into CI/CD pipeline to automate infrastructure provisioning and configuration as part of the deployment process.

