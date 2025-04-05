const { exec } = require("child_process");

// Your GitHub repository (Update this!)
const REPO_URL = "https://github.com/Sibtain-Iqbal/passwordgenrator";

// Function to execute shell commands
const runCommand = (command) => {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`❌ Error: ${stderr}`);
                reject(error);
            } else {
                console.log(`✅ ${stdout}`);
                resolve(stdout);
            }
        });
    });
};

// Function to create and push commits for past dates
const commitForPastDays = async (days) => {
    try {
        console.log(`🚀 Adding contributions for the last ${days} days...`);

        for (let i = days; i > 0; i--) {
            let pastDate = new Date();
            pastDate.setDate(pastDate.getDate() - i);
            let formattedDate = pastDate.toISOString().split("T")[0];

            console.log(`📅 Creating commit for: ${formattedDate}`);

           
            await runCommand(`echo "Commit on ${formattedDate}" >> commit_log.txt`);

            // Add changes to Git
            await runCommand("git add .");

            // Create commit with backdated timestamp
            await runCommand(`git commit --date="${formattedDate} 12:00:00" -m "Commit on ${formattedDate}"`);

            console.log(`✅ Commit added for ${formattedDate}`);
        }

        // Push all commits
        await runCommand("git push origin main");

        console.log("🎉 All commits successfully pushed!");
    } catch (error) {
        console.error("❌ Process failed!", error);
    }
};


commitForPastDays(30);
