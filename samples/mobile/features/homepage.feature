Feature: TMDB App
    TMDB App Home Screen

    @RegressionTest @Login
    Scenario: Home Screen
        Given User arrives in home screen
        Then Element "Popular" should be visible
        Then Element "Top Rated" should be visible

    @RegressionTest @Login
    Scenario: Click first movie name
        Given User arrives in home screen
        When User click list
        Then Element "Overview" should be visible
        Then Element "Cast" should be visible
