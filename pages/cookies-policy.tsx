import styled from 'styled-components';
import Page from 'components/Page';
import RichText from 'components/RichText';

export default function ContactPage() {
  return (
    <Page title="Cookies policy">
      <CookiesPolicyContainer>
      <RichText>
      <h1>Cookie Policy</h1>
      <p>
        This Cookie Policy explains how we use cookies and similar tracking technologies on our website. By using our website, you consent to the use of cookies as described in this policy.
      </p>
      <h2>What are Cookies?</h2>
      <p>
        Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the website owners.
      </p>
      <h2>How We Use Cookies</h2>
      <p>
        We use cookies for the following purposes:
      </p>
      <ul>
        <li>
          <strong>Essential Cookies:</strong> These cookies are necessary for the proper functioning of our website. They enable you to navigate our site and use its features, such as accessing secure areas of the site.
        </li>
        <li>
          <strong>Performance and Analytics Cookies:</strong> These cookies allow us to analyze how visitors use our website and monitor its performance. We use this information to improve our website and enhance the user experience.
        </li>
        <li>
          <strong>Functionality Cookies:</strong> These cookies remember choices you make on our website and provide enhanced, more personalized features. For example, they may remember your login details or language preferences.
        </li>
        <li>
          <strong>Targeting and Advertising Cookies:</strong> We may use these cookies to deliver targeted advertisements relevant to your interests. They also help us measure the effectiveness of our advertising campaigns.
        </li>
      </ul>
      <h2>Third-Party Cookies</h2>
      <p>
        We may also allow third-party service providers to place cookies on your device. These providers may use cookies to collect information about your online activities across different websites, including ours. They may use this information to provide you with targeted advertising based on your interests.
      </p>
      <h2>Managing Cookies</h2>
      <p>
        You can manage and control cookies through your browser settings. You can choose to accept or reject cookies and delete them at any time. However, please note that disabling certain cookies may affect the functionality of our website.
      </p>
      <h2>Cookie Consent</h2>
      <p>
        By continuing to use our website, you consent to the use of cookies as described in this policy. If you do not agree to the use of cookies, you should stop using our website or adjust your browser settings accordingly.
      </p>
      <h2>Changes to this Policy</h2>
      <p>
        We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically for any updates.
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions or concerns about our use of cookies or this Cookie Policy, please contact us at <a href="mailto:contact@example.com">contact@example.com</a>.
      </p>
      <p>Last updated: [Date]</p>
    </RichText>
      </CookiesPolicyContainer>
    </Page>
  );
}

const CookiesPolicyContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;
