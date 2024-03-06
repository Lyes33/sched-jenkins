pipeline{
    agent any
    tools {
        nodejs '21.6.2'
    }
    
    parameters{
        string(name: "SPEC", defaultValue: "cypress/e2e/**/**", description:"Entrer le chemin des testsà éxecuter")
        choice(name: "BROWSER", choices: ['chrome', 'edge', 'firefox'], description: "Choisir le navigateur")  
    }

    options{
        ansiColor('xtrem')
    }
    
    stages{
        stage('Build'){
            steps{
                echo "Buildin application"
            }
        }
        stage('Testing'){
            steps{
                sh "npm i"
                sh "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        stage('Deploy'){
            steps{
                echo "Deploying the application "
            }
        }
    }

    post{
        always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
        }
    }
}