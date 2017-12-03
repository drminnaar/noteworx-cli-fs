# JS Note README

A basic note application that uses a CLI (Command Line Interface) frontend to capture and manage notes, and a file system to store notes.

* **Features:**

  * Add a note
  * Remove a note
  * Find a note
  * List all notes
  * Tag a note

* **High Level Design**

![noteworx-cli-fs](https://user-images.githubusercontent.com/33935506/33468207-2ee2e46e-d663-11e7-8dc3-eaca08d5bf86.PNG)

---

## Developed With

* [Node.js](https://nodejs.org/en/) - Javascript runtime
* [yargs](https://www.npmjs.com/package/yargs) - Helps build CLI tools

---

## Related Projects

* [noteworx-cli-mongodb]

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

The following software is required to be installed on your system:

* Node 8.x
* Npm 3.x

Type the following commands in the terminal to verify your node and npm versions

```bash
node -v
npm -v
```

### Install

Follow the following steps to get development environment running.

1. Clone 'noteworx-cli-fs' repository from GitHub

   ```bash
   git clone https://github.com/drminnaar/noteworx-cli-fs.git
   ```

   _or using ssh_

   ```bash
   git clone git@github.com:drminnaar/noteworx-cli-fs.git
   ```

1. Install node modules

   ```bash
   cd noteworx-cli-fs
   npm install
   ```

### Run ESlint

* Lint project using ESLint

  ```bash
  npm run lint
  ```

* Lint project using ESLint, and autofix

  ```bash
  npm run lint:fix
  ```

### Run

* Run start

  This will run `node app --help` and show a list of CLI commands that can be used to manage notes

  ```javascript
  npm start
  ```

* Get help

  ```javascript
  node app --help
  node app add --help
  node app remove --help
  node app find --help
  node app list --help
  node app tag --help
  ```

* Add a note

  ```javascript
  node app add -t "Programming homework for weekend" -c "Read 'The Art of Computer Programming, Volume 1"
  node app add -t "Programming homework for today" -c "Read 'Computer Science Illuminated"
  ```

* Remove a note

  ```javascript
  node app remove -t "Programming homework for weekend"
  ```

* Find a note

  ```javascript
  node app find -t "Programming homework for weekend"
  ```

* List all notes

  ```javascript
  node app list
  ```

* Tag a note

  ```javascript
  node app tag -t "Programming homework for weekend" --tag "programming, computer science, homework"
  ```

---

## Versioning

I use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/drminnaar/noteworx-cli-fs/tags).

## Authors

* **Douglas Minnaar** - *Initial work* - [drminnaar](https://github.com/drminnaar)

[noteworx-cli-mongodb]: https://github.com/drminnaar/noteworx-cli-mongodb