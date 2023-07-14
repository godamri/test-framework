Feature: Nusapay Merchant App login
    Merchant owner or staff login into Nusapay Merchant App

    @SmokeTest @RegressionTest @Login
    Scenario: Login with empty email and password
        Given User arrives in login page
        Then Login button should be disabled

    @SmokeTest @RegressionTest @Login
    Scenario: Login Empty email
        Given User arrives in login page
        When User input login with password "password"
        Then Login button should be disabled
        Then Alert "Email is required" should be visible
    
    @SmokeTest @RegressionTest @Login
    Scenario: Login Empty password
        Given User arrives in login page
        When User input login with email "email"
        Then Login button should be disabled
        Then Alert "Password is required" should be visible
    
    @SmokeTest @RegressionTest @Login
    Scenario: Login With incorrect password
        Given User arrives in login page
        When User input login with email "godamri@domain.com"
        When User input login with password "incorrect"
        Then Login button should be enabled
        Then User click login button
        Then Alert "Username or password invalid" should be visible
    
    @SmokeTest @RegressionTest @Login
    Scenario: Login With incorrect email format
        Given User arrives in login page
        When User input login with email "godamri-domain.com"
        When User input login with password "incorrect"
        Then Login button should be disabled
        Then Alert "Email invalid" should be visible

    @SmokeTest @RegressionTest @Login
    Scenario: Login With correct credential
        Given User arrives in login page
        When User input login with email "godamri@domain.com"
        When User input login with password "password"
        Then Login button should be enabled
        Then User click login button
        Then Element "Transaksi Hari Ini" should be visible
