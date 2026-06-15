import * as core from "@actions/core"
import * as github from "@actions/github"

try {
    
    // Get branch input
    const branch = core.getInput("branch");
    core.info(`Branch : ${branch}`)


    // Get current time and set it as output variable
    const time = new Date().toTimeString()
    core.setOutput("time", time)

    // Show JSON payload of webhook that triggered action
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    core.info(`Github Event: ${payload}`)
} catch (error) {
    core.setFailed(error.message)
}