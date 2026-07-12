## CI/CD Pipeline with GitOps Deployment


Overview

This project implements a CI/CD pipeline for deploying a containerized application to a Kubernetes cluster. The workflow starts with an initial deployment and continues with feature-based updates using a structured Git workflow and automated deployment process.


Workflow


Initial Setup

- Deployed the base version of the application to a Kubernetes (EKS) cluster  
- Established the production-ready environment  


Feature Development

- Created a separate branch to add product functionality  
- Implemented changes and pushed code to the repository  
- Opened a pull request for review  
- Merged the changes into the main branch after approval  


Continuous Integration

- Merge to main triggered the Jenkins pipeline  
- Jenkins pulled the latest code  
- Built the application  
- Created a Docker image  


Image Handling

- Tagged the Docker image  
- Pushed the image to Docker Hub  


Deployment (GitOps)

- Argo CD monitored the repository  
- Detected changes after the merge  
- Automatically synced and deployed the updated version to Kubernetes  


Flow Summary

- Initial deployment completed on Kubernetes  
- Further updates followed this flow:  

  Branch → Code Change → Pull Request → Merge  
  → Jenkins Build → Docker Image → Docker Hub  
  → Argo CD Sync → Kubernetes Deployment  


Tech Stack

- GitHub for version control  
- Jenkins for CI  
- Docker for containerization  
- Docker Hub for image storage  
- Argo CD for deployment automation  
- Kubernetes (EKS) for running the application  


What this project shows

- Real-world CI/CD flow after initial deployment  
- Use of feature branches for controlled updates  
- Automated build and deployment pipeline  
- GitOps-based continuous delivery using Argo CD  
