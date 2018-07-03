# TestCafe Example Project

This is a base project using the [`testcafe`](https://github.com/DevExpress/testcafe) framework for JavaScript to handle the automated functional tests and reporting.

## Run Locally

1. Install TestCafe globally

  ```
  $ npm install -g testcafe
  ```

  If you want to update the version just use:

  ```
  $ npm update -g testcafe
  ```

2. Run the following command to run the test:

  ```
  $ testcafe <browser> --disable-page-reloads
  ```

## Convert XPath to CSS via CMD

This project includes a small script to turn XPath to CSS, this doesn't support `-` or `_`. Use with the following command:

  ```
  $ node xpathToCSS.js --path <xpath>
  ```

  For example:

  ```
  $ node xpathToCSS.js --path /html/body/ui_view/div[2]/top-panel/div/student-top-panel/div/div/a[3]/span
  > html > body > ui > div:nth-of-type(2) > top > div > student > div > div > a:nth-of-type(3) > span
  ```

## TestCafe Options

We use several options to run and validate tests that come with TestCafe:

1. Screenshots on Failure (-S): takes screenshots when a test fails, *needs the screenshot folder to be specified*.
2. Screenshot Folder (-s \<path\>): this is used to specify wich folder the screenshot need to be saved.
3. Skip JS Errors (-e): this enables tests no to fail if there is a JS error on the console.
4. Reporter (-r \<reporter\>): used to specify wich type of reporter to use and the output.
5. Disable Page Reloads (--disable-page-reloads): this prevents testcafe from refreshing the whole app for every test and keep session alive. 

## Project commands

The project has many `npm` commands ready to be used, just put `npm run <command>`:

1. `test`: does a normal run of testcafe.
  - Flags:
    1. -e
    2. --disable-page-reloads

2. `test:screenshot`: runs the tests but generates screenshots when a test fails.
  - Flags:
    1. -e
    2. --disable-page-reloads
    3. -S
    4. -s screenshots

3. `test:bs`: runs the tests on browserstack, by default runs on an `Samsung Galaxy S8`.
  - Flags:
    1. -e
    2. --disable-page-reloads
    3. -S
    4. -s screenshots
    5. -r spec,xunit:report.xml

4. `test:ci`: runs tests in headless mode for chrome and firefox.
  - Flags:
    1. -e
    2. --disable-page-reloads
    3. -S
    4. -s screenshots
    5. -r spec,xunit:report.xml

5. `test:multiple`: runs tests on multiple browsers at the same time, by default on `chrome, ie, edge and firefox`.
  - Flags:
    1. -e
    2. --disable-page-reloads
    3. -S
    4. -s screenshots