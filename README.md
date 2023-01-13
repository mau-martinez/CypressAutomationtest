

  <h3 align="center">README</h3>

  <p align="center">
    Here you can find all relevant information to be able to run, automatiuon test for EHS!
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#automation-solutiion-Built-With">Automation solutiion Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#run-test-with-visual-studio">Run test with Visual Studio Code</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![EHS-home](https://user-images.githubusercontent.com/2090486/212425215-7499e1a4-99f5-4fe5-addc-d668ce8b9f9e.png)

EHS app offers the user the posibility to review all listed products and search specific products by ID.
This readme will help you understand the automation solution that was implemented for EHS


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Automation solutiion Built With

* Built on Cypress 
* Javascript 
* NodeJS
* NPM

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

In oder to run the automated test we need to first mont the EHS app to an HTML server, 
Once that is done we can run a command line on terminal and with that you will be able to run the tests.

To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```
* NodeJS
  ```sh
  Version 8.0.0 and above, on terminal to find version run: node --version 
  ```
* Visual Studio Code 
  [Install Visual Studio Code](https://code.visualstudio.com/download) 



### Installation

_Once prerequisites are installed proceed with the list below_

## To Run Test on Cypress

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. On Terminal access Automationtest/TestAutomationTask/Application/ folder
   ```sh
   Run the command npm install http-server -g
   Navigate to the specific path of your file folder in CMD and run the command http-server
   Go to your browser and type http://localhost:8080/EHS.html  
   EHS Application should run there.

   ```
   http://localhost:8080/EHS.html 
   
_HTML SERVER needs to be running in order for Cypress to work with the app._

3. To run Cypress
   ```js
   Access EHS-test folder on terminal
   Run command: npx cypress open
   ```
   Once Cypress is up select the first option E2E testing.
   Select any browser you would like to run the tests.
   Click on Start E2E Testing in Chrome.
   Now select the test you would like to run, in this case click on productViewEHS.
   The test inside that suite will start running automatically, you can can review their status once they are done.

   
if you have any issue with cypress please check out [Cypress Installation](https://docs.cypress.io/guides/getting-started/installing-cypress)
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- RUN WITH VISUAL STUDIO -->
## Run test with Visual Studio Code 

1. Open Visual Studio Code and import the project,
2. Remember HTML Server needs to be running with the EHS app
3. Open Terminal access from Visual Studio Code
4. To run Cypress
   ```js
   Access EHS-test folder on terminal
   Run command: npx cypress open
   ```
 



<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

Discuss with team and define next OKRs and Roadmap for next quarters.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUITING -->
## Contributing 

If you have a suggestion that would make this better, please fork the repo and create a pull request. 

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Mauricio Martinez - mau.es.mm@gmail.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
