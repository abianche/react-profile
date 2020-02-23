import { Project } from "./project";
import headerImage from "../../images/projects/planning_poker/header.png";
import playstore from "../../images/playstore_badge.png";
import appstore from "../../images/appstore_badge.png";

import * as React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./ProjectPage.css";
import { IStandardPageProps } from "../StandardPage";

export const planning_poker = new Project({
  name: "Planning Poker Online",
  image: headerImage,
  datetime: new Date("2019.05.19"),
  tags: ["Flutter", "Android", "iOS", "Scrum"],
  url: "/projects/planning_poker"
});

export interface IPlanningPokerProps {}

export default class PlanningPoker extends React.Component<
  IPlanningPokerProps
> {
  public render() {
    return (
      <div className="ProjectPage">
        <Header />
        <h1 className="Title">{planning_poker.name}</h1>
        <p className="DateTime">
          {planning_poker.datetime.toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric"
          })}
        </p>
        <h4 className="Tags">{planning_poker.tags.join(" · ")}</h4>
        <div>
          <img
            className="Header"
            src={planning_poker.image}
            alt={planning_poker.name.concat(" image")}
          ></img>
        </div>
        <div className="Content">
          <p>
            Planning Poker (SCRUM) is an Android and iOS application developed
            with Flutter! This is my first released app, get it for FREE on
            Google Play and App Store!
          </p>
          <div className="Center">
            <a
              className="Badge"
              href="https://play.google.com/store/apps/details?id=com.abianche.planningpoker"
            >
              <img src={playstore} alt="PlayStore badge"></img>
            </a>
            <a
              className="Badge"
              href="https://apps.apple.com/us/app/planning-poker-scrum/id1466098334?mt=8"
            >
              <img src={appstore} alt="AppStore badge"></img>
            </a>
          </div>

          <h2>What is Planning Poker?</h2>
          <p>
            Planning poker, also called Scrum poker, is a consensus-based,
            gamified technique for estimating, mostly used to estimate effort or
            relative size of development goals in software development. In
            planning poker, members of the group make estimates by playing
            numbered cards face-down to the table, instead of speaking them
            aloud. The cards are revealed, and the estimates are then discussed.
            By hiding the figures in this way, the group can avoid the cognitive
            bias of anchoring, where the first number spoken aloud sets a
            precedent for subsequent estimates.
          </p>
          <p>
            Check out more at{" "}
            <a href="https://wikipedia.org/wiki/Planning_poker">
              https://wikipedia.org/wiki/Planning_poker
            </a>
            .
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export const planning_poker_privacy_policy: IStandardPageProps = {
  title: "Planning Poker Online: Privacy Policy",
  content: (
    <div>
      <p>
        Alessio Bianchetti built the Planning Poker (SCRUM) app as a Free app.
        This SERVICE is provided by Alessio Bianchetti at no cost and is
        intended for use as is. This page is used to inform visitors regarding
        my policies with the collection, use, and disclosure of Personal
        Information if anyone decided to use my Service. If you choose to use my
        Service, then you agree to the collection and use of information in
        relation to this policy. The Personal Information that I collect is used
        for providing and improving the Service. I will not use or share your
        information with anyone except as described in this Privacy Policy. The
        terms used in this Privacy Policy have the same meanings as in our Terms
        and Conditions, which is accessible at Planning Poker (SCRUM) unless
        otherwise defined in this Privacy Policy.
      </p>
      <h2>Information Collection and Use</h2>
      <p>
        For a better experience, while using our Service, I may require you to
        provide us with certain personally identifiable information. The
        information that I request will be retained on your device and is not
        collected by me in any way. The app does use third party services that
        may collect information used to identify you. Link to privacy policy of
        third party service providers used by the app.
      </p>
      <h2>Log Data</h2>
      <p>
        I want to inform you that whenever you use my Service, in a case of an
        error in the app I collect data and information (through third party
        products) on your phone called Log Data. This Log Data may include
        information such as your device Internet Protocol (“IP”) address, device
        name, operating system version, the configuration of the app when
        utilizing my Service, the time and date of your use of the Service, and
        other statistics.
      </p>
      <h2>Cookies</h2>
      <p>
        Cookies are files with a small amount of data that are commonly used as
        anonymous unique identifiers. These are sent to your browser from the
        websites that you visit and are stored on your device's internal memory.
        This Service does not use these “cookies” explicitly. However, the app
        may use third party code and libraries that use “cookies” to collect
        information and improve their services. You have the option to either
        accept or refuse these cookies and know when a cookie is being sent to
        your device. If you choose to refuse our cookies, you may not be able to
        use some portions of this Service.
      </p>
      <h2>Service Providers</h2>I may employ third-party companies and
      individuals due to the following reasons:
      <ul>
        <li>To facilitate our Service;</li>
        <li>To provide the Service on our behalf;</li>
        <li>To perform Service-related services; or</li>
        <li>To assist us in analyzing how our Service is used.</li>
      </ul>
      <p>
        I want to inform users of this Service that these third parties have
        access to your Personal Information. The reason is to perform the tasks
        assigned to them on our behalf. However, they are obligated not to
        disclose or use the information for any other purpose.
      </p>
      <h2>Security</h2>
      <p>
        I value your trust in providing us your Personal Information, thus we
        are striving to use commercially acceptable means of protecting it. But
        remember that no method of transmission over the internet, or method of
        electronic storage is 100% secure and reliable, and I cannot guarantee
        its absolute security.
      </p>
      <h2>Links to Other Sites</h2>
      <p>
        This Service may contain links to other sites. If you click on a
        third-party link, you will be directed to that site. Note that these
        external sites are not operated by me. Therefore, I strongly advise you
        to review the Privacy Policy of these websites. I have no control over
        and assume no responsibility for the content, privacy policies, or
        practices of any third-party sites or services.
      </p>
      <h2>Children’s Privacy</h2>
      <p>
        These Services do not address anyone under the age of 13. I do not
        knowingly collect personally identifiable information from children
        under 13\. In the case I discover that a child under 13 has provided me
        with personal information, I immediately delete this from our servers.
        If you are a parent or guardian and you are aware that your child has
        provided us with personal information, please contact me so that I will
        be able to do necessary actions.
      </p>
      <h2>Changes to This Privacy Policy</h2>
      <p>
        I may update our Privacy Policy from time to time. Thus, you are advised
        to review this page periodically for any changes. I will notify you of
        any changes by posting the new Privacy Policy on this page. These
        changes are effective immediately after they are posted on this page.
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions or suggestions about my Privacy Policy, do not
        hesitate to contact me at alessio.bianchetti@gmail.com.
      </p>
    </div>
  )
};
