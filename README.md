# kirsten.pl

This is the source code for [kirsten.pl](https://kirsten.pl), which is my personal website written in React using Next.js and Tailwind CSS. GitHub Actions is used for CI/CD, deploying to the container to Docker Hub before using Digital Ocean App Platform to host the site.

## Running

The development server can be ran using `yarn dev`. Docker can be used to build the container and run it, and I use [act](https://github.com/nektos/act) to test the GitHub action locally.
