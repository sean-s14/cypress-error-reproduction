pipeline {
    agent { label 'cypress-node' }

    stages {
        stage('Checkout') {
            steps {
                git(
                    url: "${env.GIT_URL}",
                    branch: 'feature'
                )
            }
        }

        stage('Build and Start Containers') {
            steps {
                script {
                    bat 'docker-compose --version'
                    bat 'docker-compose -f docker-compose.yaml -f docker-compose.dev.yaml up -d --build'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    bat 'docker exec my-client-container npm run cy:run'
                }
            }
        }
    }

    post {
        always {
            script {
                bat "docker-compose down -v"
            }
        }
    }
}
