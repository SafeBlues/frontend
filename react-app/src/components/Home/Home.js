import React from "react";
import "./Home.css";
import fig1a from "./img/fig1a.png";
import fig1b from "./img/fig1b.png";
class Home extends React.Component {
  render() {
    return (
      <div className="homeContainer">
        <div className="content">
          <h1 className="my-3">
            Safe Blues: A Method for Estimation and Control in the Fight Against
            COVID-19
          </h1>
          <h2 className="my-3">Overview</h2>
          <p>
            Viral spread is a complicated function of multiple elements
            including biological properties, preventative measures such as
            sanitation and masks, the environment, and the level of physical
            proximity. It is this last element that governments can control
            through social-distancing directives. However, with a pandemic such
            as COVID-19, the data is always lagging and biased since the time
            between a patient being infected with SARS-CoV-2 and being recorded
            as positive can be a week or more. Consequently there can be a time
            lag of the order of several weeks between the initiation of a
            regulatory measure and its observed effect. There is thus a pressing
            need for real time information on the level of physical proximity
            while respecting personal privacy.
            <br />
            <br />
            Safe Blues fills this need, providing real time population-level
            estimates of the level of physical proximity and near-future
            projections of the epidemic. Safe Blues strands are safe virtual
            `virus-like' tokens that are spread using cellular devices and
            Bluetooth. Real time counts of multiple forms of the tokens are
            combined with delayed measurements of the actual epidemic. Then
            using machine-learning techniques the Safe Blues system creates more
            accurate projections about the current and near-future state of the
            epidemic.
            <br />
            <br />
            The Safe Blues protocol and machine learning techniques have been
            developed together with an experimental minimal viable product,
            presented as an app on Android devices with a server back-end. We
            are now preparing for a university-wide experiment of Safe Blues.
          </p>
          <div className="row">
            <div className="column">
              <img
                className="graphImg"
                src={fig1a}
                alt="A diagram of the operation of Safe Blues."
              />
            </div>
            <div className="column">
              <img
                className="graphImg"
                src={fig1b}
                alt="A diagram of the operation of Safe Blues."
              />
            </div>
          </div>
          <center>
          <p className={"caption"}>
          Illustration of Safe Blues on a simulated epidemic. The blue lines
          represent Safe Blues strands, the red markers are the true numbers of
          infectives, and the blue line represent a Safe Blues prediction of the
          state of the epidemic. The simulation assumes that real case numbers
          are delayed by 15 days, which reflects the reality of COVID-19: a long
          incubation period and mild symptoms at the start of infection mean
          that diagnoses are significantly delayed, while Safe Blues data is
          received in real time. In this way, the Safe Blues framework may
          provide unique, invaluable visibility into the current state of the
          epidemic and a powerful tool for early detection of subsequent waves
          or outbreaks.
          </p>
          </center>
          <h2 className="my-3">Key Links</h2>
          <div className="text-center">
            <a
              className="btn btn-lg btn-primary"
              href="https://www.cell.com/patterns/fulltext/S2666-3899(21)00034-9"
              role="button"
            >
              Safe Blues: The case for virtual safe virus spread in the
              long-term fight against epidemics - March 12, 2021 Cell Press
              Patterns Paper
            </a>
            <br />
            <br />
            <a className="btn btn-lg btn-primary" href="/experiment" role="button">
              The 2021 Campus Experiment at The University of Auckland City
              Campus
            </a>
          </div>
          <br />
          <h2 className="my-3">Further Papers and Documents</h2>
          <ul>
            <li>
              April 21, 2020:{" "}
              <a href="https://www.medrxiv.org/content/10.1101/2020.05.04.20090258v1">
                {" "}
                medRxiv Paper (Appendix A specifies the Safe Blues Protocol)
              </a>
            </li>
            <li>
              April 13, 2020:{" "}
              <a href="./papers/SafeBlues_Overview_v0_1.pdf">
                Managerial overview for government
              </a>
            </li>
          </ul>
          <h2 className="my-3">Presentations and Podcasts</h2>
          <ul>
            <li>
              November 16, 2020:{" "}
              <a href="https://www.youtube.com/watch?v=PGvKyd1jAyc">
                Safe Blues - how does it work?
              </a>
            </li>
            <li>
              July 6, 2020:{" "}
              <a href="https://www.youtube.com/watch?v=aC7ChaCXFPQ">
                YouTube of BrisScience public lecture: Estimation and control of
                epidemics via Safe Blues
              </a>{" "}
              (<a href="presentations/July2020BrisScience.pdf">Slides</a>)
            </li>
            <li>
              July 2, 2020:{" "}
              <a href="https://www.stochasticlifestyle.com/cheap-but-effective-instituting-effective-pandemic-policies-without-knowing-whos-infected/">
                Cheap But Effective: Instituting Effective Pandemic Policies
                Without Knowing Who's Infected
              </a>
            </li>
            <li>
              June 17, 2020:{" "}
              <a href="https://www.youtube.com/watch?v=ZkcWWJ64oM4">
                YouTube of ACEMS Seminar Presentation
              </a>
            </li>
            <li>
              May 4, 2020:{" "}
              <a href="https://www.youtube.com/watch?v=zgDVv8x03U4">
                YouTube of Online Pandemic Seminar Presentation
              </a>{" "}
              (<a href="presentations/UQ_May_Pandemic.pdf">Slides</a>){" "}
            </li>
            <li>
              April 29, 2020:{" "}
              <a href="https://acems.org.au/podcast/episode-25-Safe-Blues">
                The Random Sample ACEMS podcast - Episode 25 - Safe Blues
              </a>
            </li>
            <li>
              June 5, 2020:{" "}
              <a href="https://www.youtube.com/watch?v=Yua5SHqBYtI">
                YouTube of UQ Facutly of Science Seminar Presentation
              </a>{" "}
              (<a href="presentations/UQ_June_Science_Seminar.pdf">Slides</a>)
            </li>
          </ul>
          <h2 className="my-3">Selected Media</h2>
          <ul>
            <li>
              March 12, 2021:{" "}
              <a href="https://theconversation.com/weve-designed-a-safe-virtual-epidemic-spreading-it-is-going-to-help-us-learn-about-covid-156853">
                The Conversation: We’ve designed a safe ‘virtual’ epidemic.
                Spreading it is going to help us learn about COVID
              </a>
            </li>
            <li>
              May 7, 2020:{" "}
              <a href="https://www.theage.com.au/national/queensland/covid-19-simulator-could-help-track-virus-spread-as-restrictions-eased-20200506-p54qfr.html">
                The Age: COVID-19 simulator could help track virus spread as
                restrictions eased
              </a>
            </li>
            <li>
              May 6, 2020:{" "}
              <a href="https://www.uq.edu.au/news/article/2020/05/mathematical-framework-could-help-safely-ease-social-distancing">
                UQ News: A mathematical framework could help safely ease social
                distancing
              </a>
            </li>
            <li>
              May 6, 2020:{" "}
              <a href="https://phys.org/news/2020-05-digital-virus-potential.html">
                Phys.org: Digital 'virus' helps researchers map potential spread
              </a>
            </li>
            <li>
              May 5, 2020:{" "}
              <a href="https://news.cornell.edu/stories/2020/05/digital-virus-helps-researchers-map-potential-spread">
                Cornell Chronicle: Digital ‘virus’ helps researchers map
                potential spread
              </a>
            </li>
            <li>
              April 26, 2020:{" "}
              <a href="https://medium.com/@yoni_26949/safe-blues-the-measurement-tool-for-responsible-undoing-of-social-distancing-34079464db43">
                Safe Blues — The Measurement Tool for Responsible Easing of
                Social Distancing
              </a>
            </li>
          </ul>
          <h2 className="my-3">Further Media</h2>
          <ul>
            <li>
              March 13, 2021:{" "}
              <a href="https://www.dailymail.co.uk/sciencetech/article-9355661/Virtual-Bluetooth-virus-spreads-SMARTPHONES-learn-disease-spread.html">
                Daily Mail: A virtual Bluetooth virus spread between SMARTPHONES
                'could help us track Covid-19 more accurately', study claims
              </a>
            </li>
            <li>
              March 12, 2021:{" "}
              <a href="https://www.repubblica.it/salute/2021/03/12/news/vi_presento_il_virus_virtuale_che_si_comporta_come_covid_-291970019/">
                La Republica (Italian): Il virus 'virtuale' mima Covid e sa dire
                come viaggia l'epidemia
              </a>
            </li>
            <li>
              March 12, 2021:{" "}
              <a href="https://www.lastampa.it/salute/2021/03/12/news/vi_presento_il_virus_virtuale_che_si_comporta_come_covid_-291970019/">
                La Stampa (Italian): Il virus 'virtuale' mima Covid e sa dire
                come viaggia l'epidemia
              </a>
            </li>
            <li>
              June 17, 2020:{" "}
              <a href="https://www.youtube.com/watch?v=ucaayXnuhKk">
                Radio coverage in 4BC Brisbane
              </a>
            </li>
            <li>
              May 20, 2020:{" "}
              <a href="https://www.createdigital.org.au/data-driven-responses-covid-19/">
                Create by Engineers Australia: Three data-driven responses to
                COVID-19
              </a>
            </li>
            <li>
              May 9, 2020:{" "}
              <a href="https://www.technology.org/2020/05/09/peoples-phones-could-help-make-better-decisions-about-easing-the-social-distancing/">
                Technology.org: People’s phones could help make better decisions
                about easing the social distancing
              </a>
            </li>
            <li>
              May 8, 2020:{" "}
              <a href="https://nandy0140.com/mobile-phones-real-testers-covid-19/">
                The White Post: A mathematical framework to map the potential
                spread of COVID-19 in real-time
              </a>
            </li>
            <li>
              May 8, 2020:{" "}
              <a href="https://www.iatronet.gr/eidiseis-nea/epistimi-zwi/news/55544/psifiakos-ios-voitha-erevnites-na-xartografisoyn-pithani-exaplwsi-covid-19.html">
                Iatronet.gr (Greek): COVID-19 Simulation via Mobile Phones
                (translated)
              </a>
            </li>
            <li>
              May 8, 2020:{" "}
              <a href="http://www.homelandsecuritynewswire.com/dr20200508-digital-virus-helps-researchers-map-potential-spread">
                HSNW: Digital “Virus” Helps Researchers Map Potential Spread
              </a>
            </li>
            <li>
              May 7, 2020:{" "}
              <a href="https://www.brisbanetimes.com.au/national/queensland/covid-19-simulator-could-help-track-virus-spread-as-restrictions-eased-20200506-p54qfr.html">
                Brisbane Times: COVID-19 simulator could help track virus spread
                as restrictions eased
              </a>
            </li>
            <li>
              May 7, 2020:{" "}
              <a href="https://somos21.org/news/279656">
                SOMOS 21: COVID-19 simulator could help track virus spread as
                restrictions eased
              </a>
            </li>
            <li>
              May 6, 2020:{" "}
              <a href="https://www.youtube.com/watch?v=aTtdfzWFns8">
                Radio coverage in Hit105 Brisbane and Triple M Brisbane Radio
              </a>
            </li>
            <li>
              May 6, 2020:{" "}
              <a href="https://www.wevolver.com/article/digital.virus.helps.researchers.map.potential.spread">
                Wevolver: Digital ‘virus’ helps researchers map potential spread
              </a>
            </li>
          </ul>
          <h2 className="my-3">Code and Data</h2>
          <p>
            {" "}
            See the{" "}
            <a href="https://github.com/SafeBlues/">
              Safe Blues GitHub organization
            </a>
          </p>
          <h2 className="my-3">Contributors</h2>
          <ul>
            <li>
              <a href="https://unidirectory.auckland.ac.nz/people/profile/azam-asanjarani">
                Dr Azam Asanjarani (The University of Auckland)
              </a>
            </li>
            <li>
              <a href="https://scmb.uq.edu.au/profile/5570/keng-chew">
                Dr Keng Chew (The University of Queensland)
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/raj-dandekar-67a33118a/">
                Raj Dandekar (Massachusetts Institute of Technology)
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/thomas-graham-666856209/">
                Thomas Graham, (The University of Queensland)
              </a>
            </li>
            <li>
              <a href="https://people.orie.cornell.edu/shane/">
                Prof Shane G. Henderson, (Cornell University)
              </a>
            </li>
            <li>
              <a href="https://smp.uq.edu.au/profile/5884/hermanus-jansen">
                Dr Marijn Jansen, (Delft University of Technology)
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/joshua-j-mcdonald/">
                Joshua McDonald, (The University of Queensland)
              </a>
            </li>
            <li>
              <a href="https://smp.uq.edu.au/profile/3595/sarat-moka">
                Dr Sarat Moka, (The University of Queensland)
              </a>
            </li>
            <li>
              <a href="https://yoninazarathy.com/">
                Associate Prof Yoni Nazarathy, (The University of Queensland)
              </a>
            </li>
            <li>
              <a href="https://chrisrackauckas.com/">
                Dr Christopher Rackauckas, (Massachusetts Institute of
                Technology)
              </a>
            </li>
            <li>
              <a href="https://scmb.uq.edu.au/profile/4618/kirsty-short">
                Dr Kirsty Short, (The University of Queensland)
              </a>
            </li>
            <li>
              <a href="https://acems.org.au/our-people/peter-taylor">
                Prof Peter G. Taylor, (The University of Melbourne)
              </a>
            </li>
            <li>
              <a href="https://www.aapelivuorinen.com/">
                Aapeli Vuorinen, (Columbia University)
              </a>
            </li>
            <li>
              <a href="https://www.stat.auckland.ac.nz/people/izie001">
                Associate Prof Ilze Ziedins (The University of Auckland)
              </a>
            </li>
          </ul>
          <h2 className="my-3">With thanks to</h2>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/tim-macuga-06024489/">
                Tim Macuga (Science Communicator - ACEMS)
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/yoavbanin/">
                Yoav Banin (Entrepreneur)
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/toshali-banerjee-ba7a6511a/">
                Toshali Banerjee (Tata Institute of Fundamental Research)
              </a>
            </li>
            <li>
              <a href="https://sites.google.com/site/jamesmccaw/">
                Prof James McCaw, (The University of Melbourne)
              </a>
            </li>
            <li>
              <a href="https://smp.uq.edu.au/profile/170/tom-stace">
                Prof Tom Stace, (The University of Queensland)
              </a>
            </li>
          </ul>
          <p>
            For inquiries, please{" "}
            <a href="mailto:contact@safeblues.org">contact via e-mail</a>.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
