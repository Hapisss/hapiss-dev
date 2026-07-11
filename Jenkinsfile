pipeline {
    agent any
    triggers {
        githubPush()
    }

    environment {
        REPO = 'git@github.com:Hapisss/hapiss-dev.git'
        BRANCH = 'master'
    }

    stages {
        stage('Checkout') {
            steps {
                git(
                    branch: BRANCH,
                    credentialsId: 'github-ssh-key',
                    url: REPO
                )
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    docker compose down
                    docker compose up -d --build
                '''
            }
        }

    }
}