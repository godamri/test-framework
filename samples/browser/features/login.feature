Feature: Nusapay Merchant App login
    Merchant owner or staff login into Nusapay Merchant App

    @SmokeTest @RegressionTest @Login
    Scenario: Login with empty email and password
        Given User arrives in login page
        Then Login button should be disabled

    @SmokeTest @RegressionTest @Login
    Scenario: Login With correct credential
        Given User arrives in login page
        When User input login with email "godamri@domain.com"
        When User input login with password "password"
        Then User click login button
        Then Element "Transaksi Hari Ini" should be visible
