# Project 2: Testing Plan Execution - TODO List

### General Preparations

- [ ] **Review Test Plan from Part 1**
  - [ ] Review the original test plan to ensure alignment with the second part of the assignment.
  - [ ] Document any required changes for the new assignment, including removing the `.internal` directory from coverage.

### Setting Up the Testing Environment

- [x] **Set Up Local Testing Environment**

  - [x] Ensure Node.js 14 (or compatible version) is installed.
  - [x] Set up Git and npm locally.
  - [x] Install all necessary packages (Mocha, Chai, c8, etc.).

- [x] **Create GitHub Repository**

  - [x] Set up a public repository on GitHub for this project.
  - [x] Grant team members access.
  - [x] Add `.internal` to `.gitignore` to exclude it from Git and test reports.

- [x] **Link GitHub to Coveralls**
  - [x] Create a Coveralls account (if not already done).
  - [x] Link the GitHub repository to Coveralls.
  - [x] Ensure the repository is accessible from Coveralls for test coverage reports.

### Implementing Unit Tests

- [x] **Implement Unit Tests**

  - [x] Review and implement tests for the initial 10 utility functions identified in part 1:
    - [x] `add.js`
    - [x] `filter.js`
    - [x] `words.js`
    - [x] `isEmpty.js`
    - [x] `toString.js`
    - [x] `eq.js`
    - [x] `clamp.js`
    - [x] `map.js`
    - [x] `get.js`
    - [x] `every.js`
  - [x] Write each test to ensure high-quality coverage of each function’s behavior.

- [x] **Local Test Execution**
  - [x] Run the tests locally to ensure they pass.
  - [x] Use c8 to measure code coverage and generate reports.
  - [x] Ensure `.internal` files are excluded from tests and coverage reports.

### Setting Up CI/CD Pipeline

- [x] **Create GitHub Actions Workflow**

  - [x] Configure a workflow file (`.github/workflows/ci.yml`) to:
    - [x] Install necessary Node.js dependencies.
    - [x] Run unit tests with Mocha.
    - [x] Generate coverage reports using c8.
    - [x] Push results to Coveralls.
  - [x] Verify that the pipeline runs on every push and pull request targeting the main branch.

### Testing, Verification, and Integration

- [x] **Verify CI Integration**

  - [x] Push the initial changes to GitHub.
  - [x] Ensure that:
    - [x] GitHub Actions workflow triggers successfully.
    - [x] Tests pass in the GitHub Actions pipeline.
    - [x] Coverage reports are sent to Coveralls and appear correctly.

- [x] **Document Testing Modifications**
  - [x] If any changes were made to the original test plan during implementation, document these changes in the report.

TODO: What is a coverage badge?

- [ ] **Add Coverage Badge**
  - [ ] Add a Coveralls badge to the GitHub repository’s README to display test coverage statistics.

### Reporting and Documentation

- [ ] **Create Test Report**
  - [ ] **Cover Page**:
    - [ ] Include document title, course ID and name, student names and numbers, URLs for GitHub repository and Coveralls.
  - [ ] **Definitions, Acronyms, and Abbreviations**:
    - [ ] Add any definitions or acronyms used in the document.
  - [ ] **Introduction**:
    - [ ] Provide a short introduction covering the document contents and its purpose.
  - [ ] **Tests & CI Pipeline**:
    - [ ] Describe the implemented tests and the GitHub Actions workflow.
    - [ ] Provide instructions for running unit tests and generating coverage reports locally.
    - [ ] Document any alterations made to the testing plan.
  - [ ] **Findings and Conclusions**:
    - [ ] Report any issues found during testing, with appropriate bug reports for significant issues.
    - [ ] Evaluate the overall quality of the tested library and its readiness for the E-commerce application.
    - [ ] Assess test coverage and determine whether further tests are needed.
  - [ ] **AI and Testing**:
    - [ ] Discuss whether AI was used as initially planned, or if other uses were considered.
    - [ ] Provide a brief description of any AI tools used and the pros and cons of using AI for testing.
  - [ ] **Course Feedback**:
    - [ ] Reflect on the assignment and the overall course experience. Mention learning outcomes or suggestions for improvement.
  - [ ] **References**:
    - [ ] List all references used for the report (URLs as separate reference entries).
  - [ ] **Appendix**:
    - [ ] Include:
      - [ ] Test plan from Part 1.
      - [ ] Screenshots of GitHub Actions workflow and test results.
      - [ ] Coverage reports from Coveralls.
      - [ ] Bug reports for any issues discovered during testing.

### Final Submission

- [ ] **Prepare Zip File for Submission**

  - [ ] Save the test report as `test_report.pdf`.
  - [ ] Create a zip file named `studentnumber1_studentnumber2_2024_part2.zip` containing the PDF.
  - [ ] Double-check that no source code files (e.g., test scripts) are included in the zip file.

- [ ] **Upload to Moodle**
  - [ ] Upload the final zip file to Moodle by the specified deadline.

### Additional Considerations

- [ ] **Ensure Tokens are Secure**

  - [ ] Remove any visible tokens from the repository.
  - [ ] Use the `GITHUB_TOKEN` variable for any authentication requirements.

- [ ] **Prepare for Unforeseen Issues**
  - [ ] If the integration with GitHub Actions or Coveralls fails, document the attempts, challenges, and what was learned during troubleshooting.

### Review & Final Check

- [ ] **Review Report**
  - [ ] Ensure all parts of the report are present and well-written.
  - [ ] Validate that all links to GitHub and Coveralls are functional.
  - [ ] Proofread the document for clarity and correctness.
