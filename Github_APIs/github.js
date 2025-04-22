// document.writeln("connectd")

const img = document.getElementById("img");
const Name = document.getElementById("user-name");
const alldata = document.getElementById("user-names");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const bio = document.getElementById("bio");
const reposotries = document.getElementById("reposotries");
const spiner = document.getElementById("spiner");

const Github_Api = () => {
  fetch("https://api.github.com/users/Sibtain-Iqbal")
    .then((data) => {
      spiner.style.display = "block";

      return data.json();
    })
    .then((jsonDATA) => {
      // console.log(jsonDATA);
      img.src = jsonDATA.avatar_url;
      Name.textContent = jsonDATA.login;
      followers.textContent = `Followers : ${jsonDATA.followers}`;
      bio.textContent = jsonDATA.bio;
      following.textContent = `Following : ${jsonDATA.following}`;
      // reposotries.textContent = `reposotries : ${jsonDATA.public_repos}

      spiner.style.display = "none";
    })

    .catch((error) => {
      console.log("Failed to load", error);
      spiner.style.display = "block";
    });

  const github_repos = () => {
    const repoList = document.createElement("ul");
    repoList.classList.add("repo-list");
    alldata.appendChild(repoList);

    fetch("https://api.github.com/users/Sibtain-Iqbal/repos")
      .then((data) => data.json())

      .then((user) => {
        user.forEach((userdata) => {
          const lis = document.createElement("li");
          lis.classList.add("repo-item");
          lis.innerHTML = `<a href="${userdata.html_url}" target="_blank">${userdata.name}</a>`;
          repoList.appendChild(lis);
        });
      });
  };
  github_repos();
};

Github_Api();
