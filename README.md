# UOLI

Quickly switch between projects, changing the HOSTS file and the Templatecache templates

Just run `uoli project-a` or `uoli project-b` to change you TCL templates and HOSTS file for the given projects

## Pre requisites

* You will need to have Node.js installed on your machine
* Define the environment variable `TCLPATH` heading to the templatecache-local root dir, e.g. `/Users/{username}/templatecache-local` or `C:\templatecache-local`
* Create a directory to store your HOSTS files, e.g. `/Users/{username}/hosts` or `c:\hosts`
* Define the environment variable `HOSTSPATH` heading to the HOSTS directory you have created
* Make sure you have administration permissions in the following files and directories:
  * Templatecache-local directory
  * Your HOSTS directory
  * the HOSTS file

## Instalation

* Run `$ npm install uoli -g`
* Mac users may need to run it with sudo

## Usage

### Create a project:

To create a new project, set your `HOSTS` file and `templates` directory the way you want your project to be and run:

* `$ uoli create foo`
  * This will:
    + Copy your current `HOSTS` file content into a `foo.hosts` file created on your HOSTS directory
    + Copy your current `templates` directory content into a `templates-foo` directory created on your TCL

* `$ uoli create foo tc` or `$ uoli create foo host`
  * Will do only the `tc` or the `hosts` parts, respectively


### Switch projects

After creating your projects, you can switch between them, running:

* `$ uoli foo`
  * This will:
    + Copy the `foo.hosts` content into your `HOSTS file`
    + Create a symbolic link from the `templates-foo` directory to the `templates` directory

* `$ uoli foo tc` or `$ uoli foo host`
  * Will do only the `tc` or the `hosts` parts, respectively
