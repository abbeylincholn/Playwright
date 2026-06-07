# Page snapshot

```yaml
- dialog "Before you continue to Google Search":
  - img "Google"
  - 'button "Language: ‪English‬"': en
  - link "Sign in"
  - heading "Before you continue to Google" [level=1]
  - text: We use
  - link "cookies":
    - /url: https://policies.google.com/technologies/cookies?utm_source=ucbs&hl=en-GB
  - text: and data to
  - list:
    - listitem: Deliver and maintain Google services
    - listitem: Track outages and protect against spam, fraud and abuse
    - listitem: Measure audience engagement and site statistics to understand how our services are used and enhance the quality of those services
  - text: If you choose to 'Accept all', we will also use cookies and data to
  - list:
    - listitem: Develop and improve new services
    - listitem: Deliver and measure the effectiveness of ads
    - listitem: Show personalised content, depending on your settings
    - listitem: Show personalised ads, depending on your settings
  - text: If you choose to 'Reject all', we will not use cookies for these additional purposes. Non-personalised content is influenced by things like the content that you’re currently viewing, activity in your active Search session, and your location. Non-personalised ads are influenced by the content that you’re currently viewing and your general location. Personalised content and ads can also include more relevant results, recommendations and tailored ads based on past activity from this browser, like previous Google searches. We also use cookies and data to tailor the experience to be age-appropriate, if relevant. Select 'More options' to see additional information, including details about managing your privacy settings. You can also visit g.co/privacytools at any time.
  - button "Reject all"
  - button "Accept all"
  - link "More options for personalisation settings and cookies": More options
  - link "Privacy":
    - /url: https://policies.google.com/privacy?hl=en-GB&fg=1&utm_source=ucbs
  - link "Terms":
    - /url: https://policies.google.com/terms?hl=en-GB&fg=1&utm_source=ucbs
```