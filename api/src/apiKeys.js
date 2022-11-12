const arrayKeys = [
                "2c2125c283a74ed2b0ec86b87d912dc1",
                "668a6ac2427f43d79ff05805b5526af8",
                "b93b6c7e79364820bdc896312919eec2",
                "237182fee3534b17a9dbd50658ef9825",
                "06e20bb92e9f4fc7b6c9bda78f3cb9f2",
                "6e27dd8cfb8f46e2acc067ada8887d66"
            ]

const ApiKeys = ()=>arrayKeys[Math.floor(Math.random() * 8)];

module.exports = { ApiKeys };