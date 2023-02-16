import linkedin from "../Brands/headerBrands/LinkedIn.png";
import github from "../Brands/headerBrands/github.png";
import image from "../Brands/headerBrands/foto (1).svg";
import js from "../Brands/Body/Skills/js-logo 1 (2).png";
import react from "../Brands/Body/Skills/react.png";
import reduxlogo from "../Brands/Body/Skills/reduxlogo.png";
import node from "../Brands/Body/Skills/node-logo 1 (1).png";
import vscode from "../Brands/Body/Skills/vscode.png";
import figma from "../Brands/Body/Skills/figma-logo 1 (1).png";
import img1 from "..//Brands/Body/Projects/img1.png";
import img2 from "..//Brands/Body/Projects/img2.png";

export function Email(params) {
  return (
    <>
      Currently <span style={{ color: "#AF0C48" }}>Freelancing </span> for
      <span style={{ color: "#AF0C48" }}> UX, UI, & Web Design</span> Project .
      Invite me to join your team ->
      <span style={{ color: "#AF0C48" }}> pratamaiosi@gmail.com</span>
    </>
  );
}
export const HeaderData = [
  {
    hi: "Hi! 👋",

    content:
      "I’m Barış. I’m a full-stack developer. I can craft solid and scalable frontend products. Let’s meet!",
    headerBrands: { linkedin: linkedin, github: github, image: image },
    mailData:
      "Currently Freelancing for UX, UI, & Web Design Project  . Invite me to join your team -> pratamaiosi@gmail.com",
  },
];
export const Skills = [
  {
    software: "JAVASCRIPT",
    url: js,
  },
  { software: "REACT", url: react },
  { software: "REDUX", url: reduxlogo, stil: { backgroundColor: "#764ABC" } },
  { software: "NODE", url: node },
  {
    software: "VS CODE",
    url: vscode,
    stil: { backgroundColor: "#038FD6" },
  },
  { software: "FIGMA", url: figma },
];
export const profileSearch = {
  date: "Doğum Tarihi",
  place: "İkamet Şehri",
  educationStatus: "Eğitim Durumu",
  choseRol: "Tercih Ettiği Rol",
};

export const profileInformation = {
  date: "28.09.1999",
  adress: "İstanbul",
  education: " ELEKTRİK ELEKTRONİK MÜHENDİSLİĞİ ",
  chose: "Full-stack",
};

export const profileAboutMe = [
  {
    about:
      " tempoributione soluta aperiam sit voluptate? Dicta quod deserunt quam",
    includes:
      "Lorem ipsum, dolor sit amet consectetuptate? Dicta quod deserunt quam",
  },
];

export const projects = [
  {
    title: "Order you want",
    about:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
    software: ["react", "vercel", "axios", "router", "redux"],
    github: "View on Github",
    app: "Go to APP",
    url: img1,
    stil: { backgroundColor: " #DDEEFE" },
  },
  {
    title: "Are you Bored",
    about:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
    software: ["react", "redux", "axios", "router", "vercel"],
    github: "View on Github",
    app: "Go to APP",
    url: img2,
    stil: { backgroundColor: "#D9F6F1" },
  },
];
export const footer = [
  {
    slogan: "Let’s work together on your next product.",
    github: { title: "Github", stil: { color: "#1769FF" } },
    personalBlog: "Personal Blog",
    linkedin: { title: "LinkedIn", stil: { color: "#0077B5" } },
    Email: { title: "Email", stil: { color: "#AF0C48" } },
  },
];
