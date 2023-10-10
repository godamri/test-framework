Feature: Google Ubuntu LTS
    Searching Ubuntu LTS in google search


    @RegressionTest @Login
    Scenario: Search ubuntu LTS
        Given User arrives in google search homepage
        When User search word Ubuntu LTS
        Then User click search button
