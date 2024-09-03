/* eslint-disable react/jsx-no-comment-textnodes */
import style from "../styles/About.module.css";
import { BsFolderFill, BsMarkdownFill } from "react-icons/bs";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";

const About = () => {
  const [showEdu, setShowEdu] = useState(true);
  const [showIntern, setShowIntern] = useState(false);
  const [showAca, setShowAca] = useState(false);
  const [showLeader, setShowLeader] = useState(false);
  const [showFree, setShowFree] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  function OnEdu() {
    setShowEdu(true);
    setShowIntern(false);
    setShowAca(false);
    setShowLeader(false);
  }

  function OnIntern() {
    setShowEdu(false);
    setShowIntern(true);
    setShowAca(false);
    setShowLeader(false);
  }

  function OnAca() {
    setShowEdu(false);
    setShowIntern(false);
    setShowAca(true);
    setShowLeader(false);
  }

  function OnLeader() {
    setShowEdu(false);
    setShowIntern(false);
    setShowAca(false);
    setShowLeader(true);
  }

  const [activeSection, setActiveSection] = useState('edu_div');
  function handleFolderClick(section) {
    setActiveSection(section);
    // If you have an element with an ID corresponding to the section
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className={style.about}>
      <Head>
        <title>About Me | Jiawei Sun</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <div className={style.skill_menu} onClick={(e) => setShowMenu(!showMenu)}>
        {" "}
        {showMenu ? <AiOutlineClose /> : <HiOutlineMenu />}
      </div>

      <div className={style.left}>
        <motion.div
          className={style.left_number}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              y: "100px",
              opacity: 0,
            },
            visible: {
              y: "-370px",
              opacity: 1,
              transition: {
                type: "spring",
                delay: 0.2,
                duration: 2,
              },
            },
          }}
        >
          <span className={style.text_fade_01}>20</span>
          <span className={style.text_fade_01}>21</span>
          <span className={style.text_fade_01}>22</span>
          <span className={style.text_fade_01}>23</span>
          <span className={style.text_fade_01}>24</span>
          <span className={style.text_fade_01}>25</span>
          <span className={style.text_fade_01}>26</span>
          <span className={style.text_fade_01}>27</span>
          <span className={style.text_fade_01}>28</span>
          <span className={style.text_fade_01}>29</span>
          <span className={style.text_fade_01}>30</span>
          <span className={style.text_fade_01}>31</span>
          <span className={style.text_fade_01}>32</span>
          <span className={style.text_fade_01}>33</span>
          <span className={style.text_fade_01}>34</span>
          <span className={style.text_fade_01}>35</span>
          <span className={style.text_fade_02}>36</span>
          <span className={style.text_fade_03}>37</span>
          <span>38</span>
          <span>39</span>
          <span>40</span>
          <span>41</span>
          <span>42</span>
          <span>43</span>
          <span>44</span>
          <span>45</span>
          <span>46</span>
          <span>47</span>
          <span>48</span>
          <span>49</span>
          <span>50</span>
          <span>51</span>
          <span>52</span>
          <span className={style.text_fade_03}>53</span>
          <span className={style.text_fade_02}>54</span>
          <span className={style.text_fade_01}>55</span>
        </motion.div>
        <div className={style.left_line}></div>
        <div className={style.left_line2}></div>
        <motion.div
          className={style.left_about}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              y: "300px",
              opacity: 0,
            },
            visible: {
              y: "0px",
              opacity: 1,
              transition: {
                type: "spring",
                delay: 0.2,
                duration: 3,
              },
            },
          }}
        >
          <span className={style.ml_2}> /**</span>
          {/* Education content */}
          <div id="edu_div" style={{ display: activeSection === 'edu_div' ? 'block' : 'none' }}>
            <span id={style.edu}>Education Background</span>

            {/* University */}
            <p><span id={style.university}>University</span></p>
            <ul className={style.about_list}>
              <li><b>Boston University:</b> Bachelor of Arts</li>
              <li><b>Major:</b> Mathematics and Computer Science</li>
              <li><b>Minor:</b> Computer Engineering</li>
              <li><b>Cumulative GPA:</b> 3.93</li>
              <li><b>Honors:</b> Dean&apos;s Honors Lists for 2021 Spring - 2023 Fall</li>
            </ul>

            {/* Skills */}
            <p><span id={style.skills}>Skills</span></p>
            <ul className={style.about_list}>
              <li><b>Relevant Coursework:</b> Probability, Algorithms, Software Engineering, Turing Machine, Linear Algebra, Calculus, Discrete &#38; Abstract Math, Machine Leaning, Artificial Intelligence</li>
              <li><b>CS Skills:</b> Python, Java, HTML, JavaScript, C++, C, Assembly, SQL, JupyterNotebooks, Latex</li>
              <li><b>Languages:</b> Mandarin (Native Proficiency), English (Bilingual Proficiency), French (Elementary Proficiency), Japanese (Elementary Proficiency)</li>
            </ul>
          </div>
          
          {/* Internship content */}
          <div id="intern_div" style={{ display: activeSection === 'intern_div' ? 'block' : 'none' }}>
            <span id={style.intern} >Internship Experience</span>

            {/* Technology Developer */}
            <p><span id={style.int_1}>Technology Developer (Summer 2023)</span></p>
            <p className={style.intern_loc}>Beijing 7Runto Technology Co. ltd. -- Chengdu, China</p>
            <ul className={style.about_list}>
              <li>Familiarized and utilized basic SQL for updating access control function by synchronizing card swiping records before and after card replacement.</li>
              <li>Attained basic knowledge for Java Spring framework and developed feedback section for system-error-report.</li>
            </ul>

            {/* Teaching Assistance (Fall 2023 - Current) */}
            <p><span id={style.int_2}>Teaching Assistance (Fall 2023 - Current)</span></p>
            <p className={style.intern_loc}>Boston University -- Boston, MA</p>
            <ul className={style.about_list}>
              <li>Assist students in the Probability in Computing course and Web Programming course with additional course guidance by providing one-on-one assistance to students during office hours.</li>
              <li>Lead two discussion sections by instructing students with relevant course materials.</li>
            </ul>

            {/* Course Assistance (Fall 2022 - Spring 2023) */}
            <p><span id={style.int_3}>Course Assistance (Fall 2022 - Spring 2023)</span></p>
            <p className={style.intern_loc}>Boston University -- Boston, MA</p>
            <ul className={style.about_list}>
              <li>Provide students in the Combinatoric Structures courses with additional course guidance.</li>
              <li>Assist with the weekly meetings of one lab or discussion section by providing one-on-one assistance to students as they complete the section exercises.</li>
            </ul>
         

          {/* Customer Service Associate (Fall 2020) */}
          <p><span id={style.int_3}>Customer Service Associate (Fall 2020)</span></p>
          <p className={style.intern_loc}>Chengdu Topvoice -- Chengdu, China</p>
            <ul className={style.about_list}>
              <li>Provided assistance to more than 110 customers each day to solve their respective problems, elevate customer issues to relevant departments, and maintain brand-customer relationship.</li>
              <li>Proposed improvement plans and initiated executions to enhance front-line employees&apos; learning opportunities and scheduling efficiency, resulting in reduced losses from employee turnover.</li>
              <li>Awarded as an outstanding employee for 3 consecutive months.</li>
            </ul>
          </div>

          {/* Academic Experience & Projects */}
          <div id="acad_div" style={{ display: activeSection === 'acad_div' ? 'block' : 'none' }}>
            <span id={style.academic} >Academic Experience & Projects</span>

            {/* Biopsy Adequacy Assessment Tool (Spring 2023 - Current) */}
            <p><span id={style.aca_1}>Biopsy Adequacy Assessment Tool (Spring 2023 - Current)</span></p>
            <p className={style.aca_loc}>Boston University -- Boston, MA</p>
            <ul className={style.about_list}>
              <li>Co-author paper &quot;<a className={style.aca_a_tag} href="https://www.kireports.org/article/S2468-0249(24)01795-9/fulltext" target="_blank" rel="noreferrer">Pilot Study of a Web-Based Tool for Real-Time Adequacy Assessment of Kidney Biopsies</a>&quot;, published on KIREPORTS.</li>
              <li>Developed front-end website for Biopsy adequacy assessment with Authentication, evaluation, and cropping function using React.</li>
              <li>Trained MedSAM model with real data to increase accuracy of evaluating kidney segmentations.</li>
              <li>Visit Website: <a className={style.aca_a_tag} href="http://biopsyadequacy.org/" target="_blank" rel="noreferrer">Biopsy Adequacy Accessment</a>.</li>
            </ul>

            {/* Evidence Analysis Tool for Human Trafficking Investigators */}
            <p><span id={style.aca_2}>Evidence Analysis Tool for Human Trafficking Investigators (Spring 2024)</span></p>
            <p className={style.aca_loc}>Boston University -- Boston, MA</p>
            <ul className={style.about_list}>
              <li>Lead a team of 3 to collaborate with MIT Lincoln Laboratory Humanitarian Assistance and Disaster Relief Systems to detect human trafficking warning signs from input images.</li>
              <li>Develop analytic software aiming at automatic processing of images to extract risk signs of human trafficking, using ML image classification model (Pytorch and Tensorflow) and SAM model.</li>
              <li><a className={style.aca_a_tag} href="https://github.com/BU-Spark/ml-mit-evidence-analysis/tree/dev" target="_blank" rel="noreferrer">Github repository.</a></li>
            </ul>

            {/* Autonomous Vehicle Directed Study */}
            <p><span id={style.aca_3}>Autonomous Vehicle Directed Study (Spring 2024 - Current)</span></p>
            <p className={style.aca_loc}>Boston University -- Boston, MA</p>
            <ul className={style.about_list}>
              <li>Develop an automatic race car for participation in F1Tenth competition in a team of 8.</li>
              <li>Specialize high-level vision functions by applying COLMAP model to arrange image collection and construct 3D truck environment—through Gaussian Splatting and NN training for estimation of race car position.</li>
              <li>Reform noise reduction and enhance cloud map accuracy by refining loss function.</li>
              <li>Co-found the BU F1Tenth Autonomous Racing Organization.</li>
              <li><a className={style.aca_a_tag} href="" target="_blank" rel="noreferrer">F1Tenth Directed Study Report</a></li>
              <li><a className={style.aca_a_tag} href="https://github.com/F1TenthBU/gaussian-splatting/blob/main/INSTRUCTIONS.md" target="_blank" rel="noreferrer">Github repository.</a></li>
              </ul>

            
            {/* Website Development (Spring 2023 - Current) */}
            <p><span id={style.aca_4}>Website Development (Spring 2023)</span></p>
            <p className={style.aca_loc}>Boston University -- Boston, MA</p>
            <p className={style.aca_detail}>Developed a website for a private medical clinic in a team of 3.</p>
            <ul className={style.about_list}>
              <li>Utilized HTML, CSS.</li>
              <li>Demonstration: <a className={style.aca_a_tag} href="https://cs-people.bu.edu/alinajw/index.html" target="_blank" rel="noreferrer">Aamir A Faruqui MD Inc.</a></li>
              <li><a className={style.aca_a_tag} href="https://github.com/rivajw/CS-103-final-project" target="_blank" rel="noreferrer">Github repository.</a></li>
            </ul>
            
            {/* BPD Budget Expenditure Analysis (Fall 2023) */}
            <p><span id={style.aca_5}>BPD Budget Expenditure Analysis (Fall 2023)</span></p>
            <p className={style.aca_loc}>Boston University -- Boston, MA</p>
            <ul className={style.about_list}>
              <li>Delved into the financial intricacies of the Boston Police Department (BPD), spans year-over-year budget changes, the utilization of injury pay, identification of wasteful overtime practices in a team of 5.</li>
              <li>Analyzed provided data with EDA approach and designed a prediction model for project extension.</li>
              <li><a className={style.aca_a_tag} href="https://github.com/BU-Spark/ds-police-overtime/tree/main/fa23-team-e" target="_blank" rel="noreferrer">Github repository.</a></li>
            </ul>

            {/* Software Development (Spring 2023 - Current) */}
            <p><span id={style.aca_6}>Software Development (Summer 2022)</span></p>
            <p className={style.aca_loc}>Boston University -- Boston, MA</p>
            <p className={style.aca_detail}>Developed a puzzle application for Tic-Tac-Toe using C++in Linux system in a team of 4.</p>
            <ul className={style.about_list}>
              <li>Coded an AI function to detect user behavior, perform scenario analysis, calculate optimal next steps in order to maximize probability of winning.</li>
              <li>Built a judging program to detect and validate game results by accessing an all-possible-outcome database as reference.</li>
              <li>Enabled users to bounce between several windows without terminating the program.</li>
              <li>Incorporated an user-facing SFML for background music.</li>
              <li><a className={style.aca_a_tag} href="https://github.com/rivajw/EC327-Project-Tic-Tac-Toe" target="_blank" rel="noreferrer">Github repository.</a></li>
            </ul>

            {/* Subdomain Takeover Detection and Prevention Tool (Spring 2024) */}
            <p><span id={style.aca_7}>Subdomain Takeover Detection and Prevention Tool (Spring 2024)</span></p>
            <p className={style.aca_loc}>Boston University -- Boston, MA</p>
            <ul className={style.about_list}>
              <li>Develop “SubGaurdian”, a subdomain takeover vulnerability detection and prevention tool in tram of 4 utilizing Subllist3r and Cloudflare.</li>
              <li>Specialized in Mail Exchange Record (MX) and Name Server Record (NS) check and finalized output log.</li>
              <li><a className={style.aca_a_tag} href="https://github.com/nmedeu/SubDomainTakeover" target="_blank" rel="noreferrer">Github repository.</a></li>
            </ul>
          </div>

          {/* Leadership */}
          <div id="leader_div" style={{ display: activeSection === 'leader_div' ? 'block' : 'none' }} className={style.leader_div}>
            <span id={style.leader} >Leadership</span>

            {/* Aglow Theatre */}
            <p><span id={style.lead_1}>Aglow Theatre</span></p>
            <p className={style.lead_loc}>Boston University -- Boston, MA</p>
            <ul className={style.about_list}>
              <li>Leading as director of the Acting Department in recruiting and training new club members (with proprietary training materials) as well as directing annual stage play in a team of 3.</li>
            </ul>
          </div>

          <span className={style.ml_2}>*/</span>
        </motion.div>
      </div>
      {showMenu && (
        <motion.div
          className={style.right}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              x: "100px",
              opacity: 0,
            },
            visible: {
              x: "0",
              opacity: 1,
              transition: {
                type: "spring",
                delay: 2,
              },
            },
          }}
        >
          <div className={style.right_container}>
            <h3>Explorer</h3>
            <div className={style.right_interest}>
              {/* <span>
                <FiChevronDown />
              </span> */}
              {/* <span style={{ marginLeft: "5px" }}>MY INTERESTS</span> */}
              <div className={style.skill}>
                <div
                  // onClick={(e) => setShowReact(!showReact)}
                  onClick={(e) => OnEdu()}
                  className={style.dropdownSkill}
                >
                  <span>
                    {showEdu ? <FiChevronDown /> : <FiChevronRight />}
                  </span>
                  <span style={{ color: "rgb(235,203,139)" }}>
                    <BsFolderFill />
                  </span>
                  <span onClick={() => handleFolderClick('edu_div')}>Education Background</span>
                </div>
                <AnimatePresence>
                  {showEdu && (
                    <motion.div
                      className={style.showEdu}
                      initial="hidden"
                      animate="visible"
                      exit="go"
                      variants={{
                        hidden: {
                          y: "-20px",
                          opacity: 0,
                        },
                        visible: {
                          y: "0",
                          opacity: 1,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.5,
                          },
                        },
                        go: {
                          y: "-20px",
                          opacity: 0,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.3,
                          },
                        },
                      }}
                    >
                      <p>
                        <BsMarkdownFill /> <span className={style.dropdownText}><a href="#university">University.md</a></span>
                      </p>
                      <p>
                        <BsMarkdownFill /> <span className={style.dropdownText}><a href="#skills">Skills.md</a></span>
                      </p>
                      {/* <p>
                        <BsMarkdownFill /> fetching api.md
                      </p>
                      <p>
                        <BsMarkdownFill /> context api.md
                      </p>
                      <p>
                        <BsMarkdownFill /> redux.md
                      </p> */}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className={style.skill}>
                <div
                  // onClick={(e) => setShowNext(!showNext)}
                  onClick={(e) => OnIntern()}
                  className={style.dropdownSkill}
                >
                  <span>
                    {showIntern ? <FiChevronDown /> : <FiChevronRight />}
                  </span>
                  <span style={{ color: "rgb(136,192,208)" }}>
                    <BsFolderFill />
                  </span>
                  <span onClick={() => handleFolderClick('intern_div')}>Internship Experience</span>
                </div>
                <AnimatePresence>
                  {showIntern && (
                    <motion.div
                      className={style.showIntern}
                      initial="hidden"
                      animate="visible"
                      exit="go"
                      variants={{
                        hidden: {
                          y: "-20px",
                          opacity: 0,
                        },
                        visible: {
                          y: "0",
                          opacity: 1,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.5,
                          },
                        },
                        go: {
                          y: "-20px",
                          opacity: 0,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.3,
                          },
                        },
                      }}
                    >
                      <p>
                        <BsMarkdownFill /> <span className={style.dropdownText}>Developer.md</span>
                      </p>
                      <p>
                        <BsMarkdownFill /> <span className={style.dropdownText}>TA.md</span>
                      </p>
                      <p>
                        <BsMarkdownFill /> <span className={style.dropdownText}>CA.md</span>
                      </p>
                      <p>
                        <BsMarkdownFill /> <span className={style.dropdownText}>Customer Service Associate.md</span>
                      </p>
                      {/* <p>
                        <BsMarkdownFill /> SSR.md
                      </p> */}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className={style.skill}>
                <div
                  onClick={(e) => OnAca()}
                  className={style.dropdownSkill}
                >
                  <span>
                    {showAca ? <FiChevronDown /> : <FiChevronRight />}
                  </span>
                  <span style={{ color: "rgb(191,97,106)" }}>
                    <BsFolderFill />
                  </span>
                  <span onClick={() => handleFolderClick('acad_div')}>Academic Projects</span>
                </div>
                <AnimatePresence>
                  {showAca && (
                    <motion.div
                      className={style.showAca}
                      initial="hidden"
                      animate="visible"
                      exit="go"
                      variants={{
                        hidden: {
                          y: "-20px",
                          opacity: 0,
                        },
                        visible: {
                          y: "0",
                          opacity: 1,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.5,
                          },
                        },
                        go: {
                          y: "-20px",
                          opacity: 0,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.3,
                          },
                        },
                      }}
                    >
                      <p>
                        <BsMarkdownFill /> <span className={style.dropdownText}>Biopsy Adequacy Assessment Tool.md</span>
                      </p>
                      <p>
                        <BsMarkdownFill /> <span className={style.dropdownText}>Evidence Analysis Tool for Human Trafficking Investigators.md</span>
                      </p>
                      <p>
                        <BsMarkdownFill /> <span className={style.dropdownText}>Autonomous Vehicle Directed Study.md</span>
                      </p>
                      <p>
                        <BsMarkdownFill /> <span className={style.dropdownText}>Website Development.md</span>
                      </p>
                      <p>
                        <BsMarkdownFill /> <span className={style.dropdownText}>BPD Budget Expenditure Analysis.md</span>
                      </p>
                      <p>
                        <BsMarkdownFill /> <span className={style.dropdownText}>Software Development.md</span>
                      </p>
                      <p>
                        <BsMarkdownFill /> <span className={style.dropdownText}>Subdomain Takeover Detection and Prevention Tool.md</span>
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className={style.skill}>
                <div
                  // onClick={(e) => setShowHtml(!showHtml)}
                  onClick={(e) => OnLeader()}
                  className={style.dropdownSkill}
                >
                  <span>
                    {showLeader ? <FiChevronDown /> : <FiChevronRight />}
                  </span>
                  <span style={{ color: "rgb(163,190,140)" }}>
                    <BsFolderFill />
                  </span>
                  <span onClick={() => handleFolderClick('leader_div')}>Leadership</span>
                </div>
                <AnimatePresence>
                  {showLeader && (
                    <motion.div
                      className={style.showLead}
                      initial="hidden"
                      animate="visible"
                      exit="go"
                      variants={{
                        hidden: {
                          y: "-20px",
                          opacity: 0,
                        },
                        visible: {
                          y: "0",
                          opacity: 1,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.5,
                          },
                        },
                        go: {
                          y: "-20px",
                          opacity: 0,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.3,
                          },
                        },
                      }}
                    >
                      <p>
                        <BsMarkdownFill /> <span className={style.dropdownText}>Aglow Theatre.md</span>
                      </p>
                      {/* <p>
                        <BsMarkdownFill /> grid flexbox.md
                      </p> */}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {/*  */}
              </div>
              {/* <div className={style.skill}> */}
                {/* <div
                  onClick={(e) => setShowFree(!showFree)}
                  className={style.dropdownSkill}
                >
                  <span>
                    {showFree ? <FiChevronDown /> : <FiChevronRight />}
                  </span>
                  <span style={{ color: "whitesmoke" }}>
                    <BsFolderFill />
                  </span>
                  <span> Free Time</span>
                </div> */}
                {/* <AnimatePresence>
                  {showFree && (
                    <motion.div
                      className={style.showSkill}
                      initial="hidden"
                      animate="visible"
                      exit="go"
                      variants={{
                        hidden: {
                          y: "-20px",
                          opacity: 0,
                        },
                        visible: {
                          y: "0",
                          opacity: 1,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.5,
                          },
                        },
                        go: {
                          y: "-20px",
                          opacity: 0,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.3,
                          },
                        },
                      }}
                    >
                      <p>
                        <BsMarkdownFill /> read quran.md
                      </p>
                      <p>
                        <BsMarkdownFill /> play video games.md
                      </p>
                      <p>
                        <BsMarkdownFill /> hang out with friends.md
                      </p>
                      <p>
                        <BsMarkdownFill /> learn new things.md
                      </p>
                      <p>
                        <BsMarkdownFill /> building side project.md
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence> */}
            {/* </div> */}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default About;
