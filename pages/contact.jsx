/* eslint-disable react/jsx-no-comment-textnodes */
// import style from "../styles/Contact.module.css";
// import { motion } from "framer-motion";
// import {
//   ApolloClient,
//   InMemoryCache,
//   gql,
//   createHttpLink,
// } from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";
// const Project = ({ pinnedItems }) => {
//   return (
//     <div className={style.project}>
//       <div className={style.project_container}>
//         <p>//Top project</p>
//         <div className={style.project_card_container}>
//           {pinnedItems.map((item) => {
//             return (
//               <motion.div
//                 initial="hidden"
//                 animate="visible"
//                 variants={{
//                   hidden: {
//                     scale: 0.8,
//                     opacity: 0,
//                   },
//                   visible: {
//                     scale: 1,
//                     opacity: 1,
//                     transition: {
//                       delay: 0.2,
//                     },
//                   },
//                 }}
//                 className={style.project_card}
//                 whileHover={{
//                   transition: {
//                     duration: 0.2,
//                   },
//                   filter: [
//                     "hue-rotate(0)",
//                     "hue-rotate(360deg)",
//                     "hue-rotate(45deg)",
//                     "hue-rotate(0)",
//                   ],
//                 }}
//                 key={item.id}
//               >
//                 <div className={style.project_card_top}>
//                   <div className={style.project_card_head}>
//                     <div>
//                       <p>{item.name}</p>
//                     </div>
//                     <div>
//                       <span>⭐{item.stargazerCount}</span>
//                     </div>
//                   </div>
//                   <div className={style.project_card_body}>
//                     <p>{item.description}</p>
//                   </div>
//                 </div>
//                 <div className={style.project_card_bottom}>
//                   <div>
//                     <a href={item.url} rel="noreferrer" target="_blank">
//                       Check in Github
//                     </a>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export async function getStaticProps() {
//   const httpLink = createHttpLink({
//     uri: "https://api.github.com/graphql",
//   });

//   const authLink = setContext((_, { headers }) => {
//     return {
//       headers: {
//         ...headers,
//         authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
//       },
//     };
//   });

//   const client = new ApolloClient({
//     link: authLink.concat(httpLink),
//     cache: new InMemoryCache(),
//   });

//   const { data } = await client.query({
//     query: gql`
//       {
//         user(login: "kasim393") {
//           pinnedItems(first: 6) {
//             totalCount
//             edges {
//               node {
//                 ... on Repository {
//                   id
//                   name
//                   url
//                   stargazerCount
//                   description
//                   forkCount
//                 }
//               }
//             }
//           }
//         }
//       }
//     `,
//   });

//   const { user } = data;
//   const pinnedItems = user.pinnedItems.edges.map((edge) => edge.node);

//   return {
//     props: { pinnedItems },
//   };
// }

// export default Project;
import Head from "next/head";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import style from "../styles/Contact.module.css";
import { AnimatePresence, motion } from "framer-motion";

const ContactUs = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0461a87', 'portfolio_contact', form.current, {
        publicKey: 'H63Fv2lwj_2aCHEQt',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Thank you. I will get back to you as soon as possible!");
          setName('');
          setEmail('');
          setMessage(' ');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Something went wrong. Please try again.");
        },
      );
  };

  return (
    
    <div className={style.left}>
      <Head>
        <title>Contact | Jiawei Sun</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              y: "100px",
              opacity: 0,
            },
            visible: {
              y: "-70px",
              opacity: 1,
              transition: {
                type: "spring",
                delay: 0.2,
                duration: 2,
              },
            },
          }}
        >
    <form ref={form} onSubmit={sendEmail}>
    <div className={style.contact}>
    <div className={style.background}>
  <div className={style.container}>
    <div className={style.screen}>
      <div className={style.screen_header}>
        <div className={style.screen_header_left}>
          <div className={style.screen_header_button} id={style.close}></div>
          <div className={style.screen_header_button} id={style.maximize}></div>
          <div className={style.screen_header_button} id={style.minimize}></div>
        </div>
        <div className={style.screen_header_right}>
          <div className={style.screen_header_ellipsis}></div>
          <div className={style.screen_header_ellipsis}></div>
          <div className={style.screen_header_ellipsis}></div>
        </div>
      </div>
      <div className={style.screen_body}>
        <div className={style.screen_body_item} id={style.left}>
          <div className={style.app_title}>
            <span>CONTACT</span>
            <span>Me</span>
          </div>
        </div>
        <div className={style.screen_body_item}>
          <div className={style.app_form}>
            <div className={style.app_form_group}>
              <input className={style.app_form_control} placeholder="NAME" 
              name = "user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required/>
            </div>
            <div className={style.app_form_group}>
              <input className={style.app_form_control} placeholder="EMAIL" 
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required/>
            </div>
            {/* <div className={style.app_form_group}>
              <input className={style.app_form_control} placeholder="CONTACT NO"/>
            </div> */}
            <div className={style.app_form_group}>
              <input className={style.app_form_control} id={style.message} placeholder="MESSAGE" 
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className={style.app_form_group} id={style.buttons}>
              {/* <button className={style.app_form_button}>CANCEL</button> */}
              <button className={style.app_form_button}>SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <div className={style.credits">
      inspired by
      <a className={style.credits-link" href="https://dribbble.com/shots/2666271-Contact" target="_blank">
        <svg className={style.dribbble" viewBox="0 0 200 200">
          <g stroke="#ffffff" fill="none">
            <circle cx="100" cy="100" r="90" stroke-width="20"></circle>
            <path d="M62.737004,13.7923523 C105.08055,51.0454853 135.018754,126.906957 141.768278,182.963345" stroke-width="20"></path>
            <path d="M10.3787186,87.7261455 C41.7092324,90.9577894 125.850356,86.5317271 163.474536,38.7920951" stroke-width="20"></path>
            <path d="M41.3611549,163.928627 C62.9207607,117.659048 137.020642,86.7137169 189.041451,107.858103" stroke-width="20"></path>
          </g>
        </svg>
        Gururaj
      </a>
    </div> */}
  </div>
</div>
</div>
</form>
</motion.div>
</div>
  );
};

export default ContactUs;