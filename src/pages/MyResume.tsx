import { FunctionComponent, useCallback } from "react";
import styles from "./MyResume.module.css";

const MyResume: FunctionComponent = () => {
  const onButtonContainerClick = useCallback(() => {
    window.open("https://www.behance.net/Omar-Bahaa");
  }, []);

  const onUnionClick = useCallback(() => {
    window.open("https://www.behance.net/Omar-Bahaa");
  }, []);

  return (
    <div className={styles.myResume}>
      <div className={styles.cover}>
        <div className={styles.frame}>
          <div className={styles.frame1}>
            <div className={styles.frame2}>
              <div className={styles.heading}>
                <div className={styles.helloMyNames}>Hello, My Name's</div>
                <div className={styles.omarBahaa}>
                  <b>OMAR </b>
                  <span>BAHAA</span>
                </div>
                <div className={styles.imGraphicDesigner}>
                  I'm Graphic Designer.
                </div>
              </div>
              <div className={styles.designSpecialistWith}>
                Design specialist with over 5 years of experience in corporate
                environments. Proven track record of delivering high-quality
                work that exceeds client expectations.
              </div>
            </div>
            <div className={styles.frame3}>
              <div className={styles.link}>
                <a
                  className={styles.workTogether}
                  href="https://contra.com/omarbahaeg"
                  target="_blank"
                >
                  Work Together
                </a>
              </div>
              <div className={styles.link1}>
                <a
                  className={styles.workTogether}
                  href="https://www.behance.net/Omar-Bahaa"
                  target="_blank"
                >
                  My Work
                </a>
              </div>
            </div>
          </div>
          <div className={styles.frame4}>
            <div className={styles.frame5}>
              <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
              <div className={styles.logo}>
                <div className={styles.frame6}>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                </div>
              </div>
            </div>
            <div className={styles.frame7}>
              <div className={styles.link2}>
                <img className={styles.vectorIcon1} alt="" src="/vector.svg" />
              </div>
              <div className={styles.link2}>
                <img className={styles.vectorIcon2} alt="" src="/vector.svg" />
              </div>
              <div className={styles.link2}>
                <img className={styles.vectorIcon3} alt="" src="/vector.svg" />
              </div>
              <div className={styles.link2}>
                <img className={styles.vectorIcon4} alt="" src="/vector.svg" />
              </div>
              <div className={styles.link2}>
                <img className={styles.vectorIcon5} alt="" src="/vector.svg" />
              </div>
              <div className={styles.link2}>
                <img className={styles.vectorIcon4} alt="" src="/vector.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.overview}>
        <div className={styles.frame8}>
          <div className={styles.frame9}>
            <div className={styles.frame10}>
              <img className={styles.vectorIcon7} alt="" src="/vector.svg" />
            </div>
            <b className={styles.yearsJob}>+5 Years Expertise</b>
          </div>
          <div className={styles.frame9}>
            <div className={styles.vectorWrapper}>
              <img className={styles.vectorIcon8} alt="" src="/vector.svg" />
            </div>
            <b className={styles.yearsJob}>Graphic Proficiency</b>
          </div>
          <div className={styles.frame9}>
            <div className={styles.vectorWrapper}>
              <img className={styles.vectorIcon9} alt="" src="/vector.svg" />
            </div>
            <b className={styles.yearsJob}>Innovative Design</b>
          </div>
        </div>
      </div>
      <div className={styles.workExperience}>
        <div className={styles.column}>
          <b className={styles.preTitle}>Career Journey.</b>
          <div className={styles.title}>
            <b>Work</b>
            <span>Experience</span>
          </div>
        </div>
        <div className={styles.frame13}>
          <div className={styles.experience}>
            <div className={styles.frame14}>
              <div className={styles.point} />
              <div className={styles.content}>
                <div className={styles.frame15}>
                  <div className={styles.freelance}>Freelance</div>
                  <b className={styles.seniorGraphicDesigner}>
                    Freelance Designer
                  </b>
                </div>
                <div className={styles.describtion}>
                  Freelance designer offering creative services to various
                  clients.
                </div>
              </div>
            </div>
            <div className={styles.date}>
              <div className={styles.today}>2021 - Present</div>
            </div>
          </div>
          <div className={styles.experience1}>
            <div className={styles.frame14}>
              <div className={styles.point} />
              <div className={styles.content}>
                <div className={styles.frame17}>
                  <div className={styles.freelance}>Art Brush</div>
                  <b className={styles.seniorGraphicDesigner}>
                    Graphic Designer
                  </b>
                </div>
                <div className={styles.describtion}>
                  Printing company: All printing forms, including packaging,
                  etc.
                </div>
              </div>
            </div>
            <div className={styles.date1}>
              <div className={styles.today}>2020 - 2021</div>
            </div>
          </div>
          <div className={styles.experience2}>
            <div className={styles.frame14}>
              <div className={styles.point} />
              <div className={styles.content}>
                <div className={styles.frame19}>
                  <div
                    className={styles.freelance}
                  >{`Queen & Prince | Offset Print`}</div>
                  <b className={styles.seniorGraphicDesigner}>
                    Graphic Designer
                  </b>
                </div>
                <div className={styles.describtion}>
                  Printing company: All printing forms for hotels, companies,
                  etc.
                </div>
              </div>
            </div>
            <div className={styles.date1}>
              <div className={styles.today}>2019 - 2020</div>
            </div>
          </div>
          <div className={styles.experience3}>
            <div className={styles.frame14}>
              <div className={styles.point} />
              <div className={styles.content}>
                <div className={styles.frame17}>
                  <div className={styles.freelance}>Watania Advertising</div>
                  <b className={styles.seniorGraphicDesigner}>
                    Graphic Designer
                  </b>
                </div>
                <div className={styles.describtion}>
                  Advertising company: All forms of adv for hotels, tourist
                  villages, etc.
                </div>
              </div>
            </div>
            <div className={styles.date1}>
              <div className={styles.today}>2018 - 2019</div>
            </div>
          </div>
          <div className={styles.experience4}>
            <div className={styles.frame14}>
              <div className={styles.point} />
              <div className={styles.content}>
                <div className={styles.frame17}>
                  <div className={styles.freelance}>Masria Print Adv.</div>
                  <b className={styles.seniorGraphicDesigner}>
                    Graphic Designer
                  </b>
                </div>
                <div className={styles.describtion}>
                  Advertising company: All forms of adv, including corporate
                  ads, etc.
                </div>
              </div>
            </div>
            <div className={styles.date1}>
              <div className={styles.today}>2016 - 2018</div>
            </div>
          </div>
          <img className={styles.lineIcon} alt="" src="/line.svg" />
        </div>
      </div>
      <div className={styles.operationalProficiency}>
        <div className={styles.column1}>
          <b className={styles.preTitle}>Professional Skills.</b>
          <div className={styles.title1}>
            <b>Operational</b>
            <span>Proficiency</span>
          </div>
        </div>
        <div className={styles.frame24}>
          <div className={styles.frame25}>
            <div className={styles.skill}>
              <div className={styles.frame26}>
                <div className={styles.preTitle}>
                  <b>{`Adobe `}</b>
                  <span>Photoshop</span>
                </div>
                <b className={styles.b}>85%</b>
              </div>
              <div className={styles.progressBar}>
                <div className={styles.body} />
                <div className={styles.fill} />
              </div>
            </div>
            <div className={styles.skill}>
              <div className={styles.frame26}>
                <div className={styles.preTitle}>
                  <b>{`Adobe `}</b>
                  <span>Illustrator</span>
                </div>
                <b className={styles.b}>80%</b>
              </div>
              <div className={styles.progressBar1}>
                <div className={styles.body} />
                <div className={styles.fill1} />
              </div>
            </div>
            <div className={styles.skill}>
              <div className={styles.frame26}>
                <div className={styles.preTitle}>
                  <b>{`Microsoft `}</b>
                  <span>PowerPoint</span>
                </div>
                <b className={styles.b}>60%</b>
              </div>
              <div className={styles.progressBar1}>
                <div className={styles.body} />
                <div className={styles.fill2} />
              </div>
            </div>
            <div className={styles.skill}>
              <div className={styles.frame26}>
                <div className={styles.preTitle}>
                  <b>{`Figma `}</b>
                  <span>UI</span>
                </div>
                <b className={styles.b}>85%</b>
              </div>
              <div className={styles.progressBar1}>
                <div className={styles.body} />
                <div className={styles.fill} />
              </div>
            </div>
          </div>
          <div className={styles.frame25}>
            <div className={styles.skill}>
              <div className={styles.frame26}>
                <div className={styles.preTitle}>
                  <b>{`Adobe `}</b>
                  <span>Lightroom</span>
                </div>
                <b className={styles.b}>90%</b>
              </div>
              <div className={styles.progressBar1}>
                <div className={styles.body} />
                <div className={styles.fill4} />
              </div>
            </div>
            <div className={styles.skill}>
              <div className={styles.frame26}>
                <div className={styles.preTitle}>
                  <b>{`Adobe `}</b>
                  <span>InDesign</span>
                </div>
                <b className={styles.b}>60%</b>
              </div>
              <div className={styles.progressBar1}>
                <div className={styles.body} />
                <div className={styles.fill2} />
              </div>
            </div>
            <div className={styles.skill}>
              <div className={styles.frame26}>
                <div className={styles.preTitle}>
                  <b>{`Adobe `}</b>
                  <span>XD</span>
                </div>
                <b className={styles.b}>85%</b>
              </div>
              <div className={styles.progressBar1}>
                <div className={styles.body} />
                <div className={styles.fill} />
              </div>
            </div>
            <div className={styles.skill}>
              <div className={styles.frame26}>
                <div className={styles.preTitle}>
                  <b>{`Adobe `}</b>
                  <span>Dimension</span>
                </div>
                <b className={styles.b}>90%</b>
              </div>
              <div className={styles.progressBar1}>
                <div className={styles.body} />
                <div className={styles.fill4} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.latestPortfolio}>
        <div className={styles.frame8}>
          <div className={styles.column2}>
            <b className={styles.preTitle2}>Recent Projects.</b>
            <div className={styles.title2}>
              <b>Latest</b>
              <span>Portfolio</span>
            </div>
          </div>
          <div className={styles.button} onClick={onButtonContainerClick}>
            <img
              className={styles.unionIcon}
              alt=""
              src="/union.svg"
              onClick={onUnionClick}
            />
          </div>
        </div>
      </div>
      <div className={styles.operationalProficiency}>
        <div className={styles.column1}>
          <b className={styles.preTitle}>Linguistic.</b>
          <div className={styles.title}>
            <b>Language</b>
            <span>Proficiency</span>
          </div>
        </div>
        <div className={styles.column4}>
          <div className={styles.column5}>
            <div className={styles.first}>
              <div className={styles.content5}>
                <b className={styles.english}>English</b>
                <div className={styles.motherLanguage}>First Language</div>
              </div>
              <div className={styles.level}>
                <div className={styles.ellipse} />
                <div className={styles.ellipse} />
                <div className={styles.ellipse} />
                <div className={styles.ellipse3} />
                <div className={styles.ellipse3} />
              </div>
            </div>
            <div className={styles.skills}>
              <div className={styles.writing}>
                <img className={styles.assestIcon} alt="" src="/assest.svg" />
                <div className={styles.writing1}>Writing</div>
              </div>
              <div className={styles.writing}>
                <img className={styles.assestIcon} alt="" src="/assest.svg" />
                <div className={styles.writing1}>Reading</div>
              </div>
              <div className={styles.speaking}>
                <img className={styles.assestIcon2} alt="" src="/assest.svg" />
                <div className={styles.writing1}>Speaking</div>
              </div>
            </div>
          </div>
          <div className={styles.column5}>
            <div className={styles.first1}>
              <div className={styles.content5}>
                <b className={styles.english}>German</b>
                <div className={styles.motherLanguage}>Second Language</div>
              </div>
              <div className={styles.level}>
                <div className={styles.ellipse} />
                <div className={styles.ellipse} />
                <div className={styles.ellipse3} />
                <div className={styles.ellipse3} />
                <div className={styles.ellipse3} />
              </div>
            </div>
            <div className={styles.skills1}>
              <div className={styles.writing}>
                <img className={styles.assestIcon} alt="" src="/assest.svg" />
                <div className={styles.writing1}>Writing</div>
              </div>
              <div className={styles.writing}>
                <img className={styles.assestIcon2} alt="" src="/assest.svg" />
                <div className={styles.writing1}>Reading</div>
              </div>
              <div className={styles.speaking}>
                <img className={styles.assestIcon2} alt="" src="/assest.svg" />
                <div className={styles.writing1}>Speaking</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.workExperience}>
        <div className={styles.column1}>
          <b className={styles.preTitle}>Hobbies.</b>
          <div className={styles.title}>
            <b>My</b>
            <span>Interests</span>
          </div>
        </div>
        <div className={styles.column8}>
          <div className={styles.frame36}>
            <div className={styles.draw}>
              <div className={styles.frame37}>
                <img className={styles.assestIcon6} alt="" src="/assest.svg" />
              </div>
              <b className={styles.preTitle}>Draw</b>
            </div>
            <div className={styles.draw}>
              <div className={styles.frame37}>
                <img className={styles.assestIcon7} alt="" src="/assest.svg" />
              </div>
              <b className={styles.preTitle}>Music</b>
            </div>
            <div className={styles.draw}>
              <div className={styles.frame37}>
                <img className={styles.vectorIcon10} alt="" src="/vector.svg" />
              </div>
              <b className={styles.preTitle}>Photography</b>
            </div>
          </div>
          <div className={styles.frame36}>
            <div className={styles.mma}>
              <div className={styles.frame41}>
                <img className={styles.vectorIcon11} alt="" src="/vector.svg" />
              </div>
              <b className={styles.preTitle}>MMA</b>
            </div>
            <div className={styles.draw}>
              <div className={styles.frame42}>
                <img className={styles.vectorIcon12} alt="" src="/vector.svg" />
              </div>
              <b className={styles.preTitle}>Swimming</b>
            </div>
            <div className={styles.draw}>
              <div className={styles.frame37}>
                <img className={styles.vectorIcon13} alt="" src="/vector.svg" />
              </div>
              <b className={styles.preTitle}>Gym</b>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.letsConnect}>
        <div className={styles.frame44}>
          <div className={styles.frame45}>
            <div className={styles.frame46}>
              <div className={styles.heading1}>
                <div className={styles.heading11}>Let's create</div>
                <div className={styles.strongWorkContainer}>
                  <b>Work</b>
                  <span>Together</span>
                </div>
              </div>
              <div className={styles.frame47}>
                <div className={styles.tellMeAbout}>
                  Tell me about your needs and let’s start working together on
                  the best solution for users and business.
                </div>
                <div className={styles.imNotA}>
                  I’m not a freelancer, I will be part of your team.
                </div>
              </div>
            </div>
            <div className={styles.heading}>
              <div className={styles.heading1}>
                <div className={styles.heading11}>My digital print</div>
                <div className={styles.strongWorkContainer}>
                  <b>Let's</b>
                  <span>Connect</span>
                </div>
              </div>
              <div className={styles.frame49}>
                <div className={styles.frame50}>
                  <div className={styles.frame51}>
                    <img
                      className={styles.vectorIcon14}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className={styles.frame52}>
                    <img
                      className={styles.assestIcon}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className={styles.frame52}>
                    <img
                      className={styles.assestIcon}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frame54}>
            <div className={styles.frame55}>
              <div className={styles.point} />
              <div className={styles.frame56}>
                <div className={styles.preTitle}>
                  <b>Personal</b>
                  <span>Info</span>
                </div>
                <div className={styles.frame57}>
                  <b className={styles.label}>
                    <p className={styles.name}>Name:</p>
                    <p className={styles.name}>Date of birth:</p>
                    <p className={styles.name}>Nationality:</p>
                  </b>
                  <div className={styles.label1}>
                    <p className={styles.name}>Omar Bahaa</p>
                    <p className={styles.name}>14 Aprl 1997</p>
                    <p className={styles.name}>Egypt</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.socialInfo}>
              <div className={styles.frame58}>
                <div className={styles.preTitle}>
                  <b>Contact</b>
                  <span>Me</span>
                </div>
                <div className={styles.frame57}>
                  <b className={styles.label}>
                    <p className={styles.name}>Phone:</p>
                    <p className={styles.name}>Email:</p>
                    <p className={styles.name}>Website:</p>
                    <p className={styles.name}>Location:</p>
                  </b>
                  <div className={styles.label3}>
                    <p className={styles.name}>+20 (10) 10 18 9839</p>
                    <p className={styles.name}>info@omarbahaeg.online</p>
                    <p className={styles.name}>www.omarbahaeg.online</p>
                    <p className={styles.name}>Egypt, Cairo</p>
                  </div>
                </div>
              </div>
              <div className={styles.assest1} />
            </div>
            <img className={styles.lineIcon1} alt="" src="/line.svg" />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.frame60}>
          <div className={styles.frame9}>
            <div className={styles.logo1}>
              <div className={styles.frame62}>
                <img className={styles.vectorIcon17} alt="" src="/vector.svg" />
              </div>
            </div>
            <div className={styles.frame63}>
              <div className={styles.heading}>
                <div className={styles.strongOmarContainer}>
                  <b>OMAR </b>
                  <span>BAHAA</span>
                </div>
                <div className={styles.seniorGraphicDesigner5}>
                  Senior Graphic Designer, Branding
                </div>
              </div>
              <div className={styles.omarBahaaAll}>
                © 2020. Omar Bahaa. All rights reserved.
              </div>
            </div>
          </div>
          <div className={styles.frame64}>
            <div className={styles.link2}>
              <img className={styles.vectorIcon1} alt="" src="/vector.svg" />
            </div>
            <div className={styles.link2}>
              <img className={styles.vectorIcon2} alt="" src="/vector.svg" />
            </div>
            <div className={styles.link2}>
              <img className={styles.vectorIcon3} alt="" src="/vector.svg" />
            </div>
            <div className={styles.link2}>
              <img className={styles.vectorIcon4} alt="" src="/vector.svg" />
            </div>
            <div className={styles.link2}>
              <img className={styles.vectorIcon5} alt="" src="/vector.svg" />
            </div>
            <div className={styles.link2}>
              <img className={styles.vectorIcon4} alt="" src="/vector.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyResume;
