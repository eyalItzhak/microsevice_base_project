
# The vision of the project

A brief description of what this project does and who it's for
The purpose of the project is to create an initial infrastructure for future projects.
The future will include a server side with microservices and a client side.

This is a preliminary document, and this document will change.

## Main technologies
nest - for service implementation

mongodb - Database for service

Kafka - event bus (broker) 

docker and kubernetes - For building a flexible infrastructure deployment in systems

## stage 1 - The infrastructure construction phase

#### implemented 
1. Setting up the first nest server.
2. Adding to the host file refers to an unreal domain (add baseproject.dev to file at C:\Windows\System32\drivers\etc\host)
3. Setting up an environment that supports docker and Kubernetes.
4. basic nginx config.
5. skaffold installation + basic config.
6. service basic config



#### should be implemented 

1. Creating dynamic yaml files - research on Helm and Python Scripts with Jinja2 to implement.

2. Setting up a Kafka server and integrating it into the system.

3. Setting up a Mongo server for service and communication with it.

4. Make sure that all the variables that are relevant to all the projects sit in one dedicated folder and from there they are called anywhere relevant.
## Stage 2 - The phase of setting up the services
 
 **Will be filled after the implementation of step 1.
