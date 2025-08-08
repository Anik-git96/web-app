pipeline {
    agent any

    environment {
        APP_PORT = '8081'
        APP_DIR = "${env.WORKSPACE}"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/Anik-git96/web-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo "Stopping existing app (if any)..."
                sh 'pkill -f "node index.js" || true'

                echo "Starting the app..."
                sh """
                    nohup npm start > app.log 2>&1 &
                """
            }
        }
    }

    post {
        success {
            echo '✅ Build and deploy successful!'
        }
        failure {
            echo '❌ Build or deploy failed.'
        }
    }
}
