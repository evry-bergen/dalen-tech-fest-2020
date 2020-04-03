#!groovy
@Library("ace") _

properties([
  [$class: 'BuildDiscarderProperty', strategy: [$class: 'LogRotator', artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '', numToKeepStr: '5']],
])

Boolean isMaster = "${env.BRANCH_NAME}" == 'master'

opts = [
  buildAgent: 'jenkins-docker-3',
]

// Hack to prevent ace function from being overloaded during test-deploy
def ace = ace

ace(opts) {

  def nodeImage = 'node:carbon'

  def args = [
    "-v ${pwd()}:/src",
    "-w /src",
    "-e npm_config_cache=.npm"
  ].join(" ")


  stage('Install libraries') {
    docker.image(nodeImage).inside(args) {
      sh 'npm ci'
    }
  }

  stage('Lint') {
    milestone()
    docker.image(nodeImage).inside(args) {
      sh 'npm run lint'
    }
  }
}
