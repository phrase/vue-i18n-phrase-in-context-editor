module.exports = {
    "plugins": [
        ["@semantic-release/commit-analyzer", {
            "releaseRules": [
                {"type": "chore", "scope": "deps", "release": "patch"}
            ]
        }],
        "@semantic-release/release-notes-generator",
        "@semantic-release/changelog",
        ["@semantic-release/npm", {
            "tarballDir": "release"
        }],
        "@semantic-release/git"
    ],
    "preset": "angular"
};
