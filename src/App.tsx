import { useEffect, useState, type FormEvent } from 'react'
import {
  ArrowDown,
  ArrowRight,
  Check,
  Clock3,
  ExternalLink,
  MapPin,
  Menu,
  Phone,
  Scissors,
  ShieldCheck,
  Sparkles,
  Star,
  UserCheck,
  UsersRound,
  X,
} from 'lucide-react'

const phoneNumber = 'tel:2039940108'
const address = '1 Executive Center Dr, Unit 108, New Milford, CT 06776'
const directionsUrl =
  'https://www.google.com/maps/dir/?api=1&destination=1+Executive+Center+Dr%2C+Unit+108%2C+New+Milford%2C+CT+06776'
const mapEmbedUrl =
  'https://maps.google.com/maps?q=1%20Executive%20Center%20Dr%2C%20Unit%20108%2C%20New%20Milford%2C%20CT%2006776&output=embed'

const services = [
  {
    number: '01',
    name: 'Classic Haircut',
    description: 'A precision scissor and clipper cut, finished with a clean neck shave and a style that feels like you.',
    detail: 'Scissor & clipper · Neck shave · Style',
    icon: Scissors,
  },
  {
    number: '02',
    name: 'Kids & Boys Cut',
    description: 'Patient, easygoing haircuts for the little guys—and a chair experience the whole family can enjoy.',
    detail: 'All ages · Family-friendly',
    icon: UsersRound,
  },
  {
    number: '03',
    name: 'Beard Trim & Edge-Up',
    description: 'Bring your shape back into focus with crisp lines, careful sculpting, and a refreshing oil finish.',
    detail: 'Shape · Line-up · Oil finish',
    icon: Sparkles,
  },
  {
    number: '04',
    name: 'Straight Razor Shave',
    description: 'An old-school, close shave with pre-shave oil, a relaxing hot towel, and a smooth finish.',
    detail: 'Pre-shave oil · Hot towel · Razor',
    icon: ShieldCheck,
  },
  {
    number: '05',
    name: 'The Royal Combo',
    description: 'The full treatment: a fresh haircut paired with a straight razor beard shave and hot towel.',
    detail: 'Haircut · Beard shave · Hot towel',
    icon: Star,
  },
]

const hours = [
  ['Monday', '9:00 AM – 6:00 PM'],
  ['Tuesday', 'Closed'],
  ['Wednesday', '9:00 AM – 6:00 PM'],
  ['Thursday', '9:00 AM – 6:00 PM'],
  ['Friday', '9:00 AM – 6:00 PM'],
  ['Saturday', '9:00 AM – 6:00 PM'],
  ['Sunday', 'Closed'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [requestSent, setRequestSent] = useState(false)

  useEffect(() => {
    document.title = 'Family Barber Shop | Haircut & Shave in New Milford, CT'
  }, [])

  function handleRequestSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setRequestSent(true)
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <>
      <style>{`
        :root {
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          color: #f8f7f4;
          background: #09090b;
          font-synthesis: none;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color-scheme: dark;
          scroll-behavior: smooth;
          scroll-padding-top: 100px;
        }

        * { box-sizing: border-box; }
        body { margin: 0; min-width: 0; background: #09090b; }
        #root {
          width: 100%;
          max-width: none;
          min-height: 100svh;
          margin: 0;
          display: block;
          border: 0;
          text-align: left;
        }
        button, input, select { font: inherit; }
        a { color: inherit; }
        .shop-site { --paper: #f4f1eb; --ink: #121214; --muted: #aaa8a5; --line: rgba(255,255,255,.12); --red: #a92735; --blue: #264f8c; overflow: hidden; background: #09090b; }
        .shop-site a { text-decoration: none; }
        .site-container { width: min(1160px, calc(100% - 48px)); margin-inline: auto; }
        .notice-strip { min-height: 38px; display: flex; align-items: center; justify-content: center; padding: 8px 20px; background: #a92735; color: #fff; text-align: center; font-size: 11px; font-weight: 750; letter-spacing: .055em; }
        .notice-strip a { text-decoration: underline; text-underline-offset: 3px; }
        .site-header { position: sticky; z-index: 20; top: 0; border-bottom: 1px solid rgba(255,255,255,.09); background: rgba(9,9,11,.92); backdrop-filter: blur(16px); }
        .header-inner { min-height: 80px; display: flex; align-items: center; justify-content: space-between; gap: 26px; }
        .brand { display: inline-flex; align-items: center; gap: 12px; flex: 0 0 auto; }
        .brand-mark { width: 42px; height: 42px; display: grid; place-items: center; border: 1px solid rgba(255,255,255,.25); border-radius: 50%; color: #fff; background: linear-gradient(140deg, rgba(169,39,53,.95) 0 48%, #202024 48% 54%, rgba(38,79,140,.95) 54%); }
        .brand-mark svg { width: 20px; height: 20px; }
        .brand-name { display: grid; gap: 2px; color: #fff; font-size: 11px; font-weight: 850; letter-spacing: .15em; line-height: 1.15; }
        .brand-name small { color: #a6a4a1; font-size: 9px; font-weight: 600; letter-spacing: .2em; }
        .desktop-nav { display: flex; align-items: center; justify-content: center; gap: clamp(14px, 2vw, 26px); }
        .desktop-nav a { color: #cccac7; font-size: 12px; font-weight: 650; transition: color .2s; }
        .desktop-nav a:hover, .footer-links a:hover { color: #fff; }
        .header-actions { display: flex; align-items: center; gap: 10px; }
        .button { min-height: 46px; display: inline-flex; align-items: center; justify-content: center; gap: 9px; padding: 0 18px; border: 1px solid transparent; border-radius: 3px; font-size: 12px; font-weight: 800; transition: transform .2s, background .2s, border-color .2s; cursor: pointer; }
        .button:hover { transform: translateY(-2px); }
        .button svg { width: 16px; height: 16px; }
        .button-light { color: #121214 !important; background: var(--paper); }
        .button-light:hover { background: #fff; }
        .button-outline { border-color: rgba(255,255,255,.3); color: #fff; background: transparent; }
        .button-outline:hover { border-color: #fff; background: rgba(255,255,255,.07); }
        .button-red { color: #fff; background: var(--red); }
        .button-red:hover { background: #bd3442; }
        .menu-toggle { display: none; width: 42px; height: 42px; place-items: center; color: #fff; border: 1px solid var(--line); border-radius: 3px; background: transparent; }
        .menu-toggle svg { width: 20px; height: 20px; }
        .hero { position: relative; padding: 76px 0 64px; }
        .hero::before { position: absolute; top: -90px; right: -100px; width: 520px; height: 520px; border-radius: 50%; background: radial-gradient(circle, rgba(169,39,53,.13), transparent 68%); content: ""; pointer-events: none; }
        .hero-grid { position: relative; display: grid; grid-template-columns: minmax(0, 1.04fr) minmax(360px, .96fr); align-items: center; gap: 60px; }
        .eyebrow { display: inline-flex; align-items: center; gap: 9px; color: #e1b5a7; font-size: 10px; font-weight: 850; letter-spacing: .19em; text-transform: uppercase; }
        .eyebrow::before { width: 24px; height: 1px; background: var(--red); content: ""; }
        .hero h1 { max-width: 660px; margin: 20px 0 18px; color: #f8f7f4; font-family: Georgia, "Times New Roman", serif; font-size: clamp(42px, 5.6vw, 70px); font-weight: 500; letter-spacing: -.055em; line-height: .99; }
        .hero h1 em { color: #c99682; font-weight: 500; }
        .hero-copy { max-width: 550px; color: #bcbab6; font-size: 15px; line-height: 1.8; }
        .hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 28px; }
        .hero-badges { display: flex; flex-wrap: wrap; gap: 10px 18px; margin-top: 28px; }
        .hero-badge { display: inline-flex; align-items: center; gap: 7px; color: #d0ceca; font-size: 10px; font-weight: 700; }
        .hero-badge svg { width: 14px; height: 14px; color: #d2ae6c; }
        .hero-visual { min-height: 485px; position: relative; }
        .hero-photo { position: absolute; inset: 0 24px 18px 30px; overflow: hidden; border-radius: 3px; background: #28231f; }
        .hero-photo::after { position: absolute; inset: 35% 0 0; background: linear-gradient(transparent, rgba(0,0,0,.55)); content: ""; }
        .hero-photo img { width: 100%; height: 100%; display: block; object-fit: cover; filter: saturate(.7) brightness(.78); }
        .pole-accent { position: absolute; top: 28px; right: 0; width: 12px; height: 104px; background: repeating-linear-gradient(135deg, #a92735 0 12px, #f5f3ef 12px 23px, #264f8c 23px 34px, #f5f3ef 34px 45px); box-shadow: 0 5px 24px rgba(0,0,0,.3); }
        .hero-photo-caption { position: absolute; z-index: 1; right: 24px; bottom: 28px; left: 25px; display: flex; align-items: end; justify-content: space-between; gap: 16px; }
        .hero-photo-caption strong { display: block; font-family: Georgia, "Times New Roman", serif; font-size: 23px; font-weight: 500; }
        .hero-photo-caption span { display: block; margin-top: 5px; color: rgba(255,255,255,.72); font-size: 10px; letter-spacing: .08em; text-transform: uppercase; }
        .rating-card { position: absolute; right: -8px; bottom: 0; display: flex; align-items: center; gap: 12px; padding: 15px 18px; border: 1px solid #dedbd4; color: #171719; background: var(--paper); box-shadow: 0 16px 45px rgba(0,0,0,.25); }
        .rating-card .rating-icon { width: 38px; height: 38px; display: grid; place-items: center; color: #a27a38; border: 1px solid rgba(162,122,56,.32); border-radius: 50%; }
        .rating-icon svg { width: 18px; height: 18px; }
        .rating-card strong { display: block; font-size: 13px; }
        .rating-card span { display: block; margin-top: 3px; color: #696763; font-size: 10px; }
        .scroll-cue { display: inline-flex; align-items: center; gap: 9px; margin-top: 42px; color: #888681; font-size: 9px; font-weight: 750; letter-spacing: .15em; text-transform: uppercase; }
        .scroll-cue svg { width: 14px; height: 14px; }
        .trust-band { border-block: 1px solid var(--line); background: #101012; }
        .trust-inner { min-height: 80px; display: grid; grid-template-columns: repeat(3, 1fr); align-items: center; }
        .trust-item { display: flex; align-items: center; justify-content: center; gap: 12px; min-height: 42px; padding: 0 16px; border-right: 1px solid var(--line); }
        .trust-item:first-child { justify-content: flex-start; padding-left: 0; }
        .trust-item:last-child { justify-content: flex-end; padding-right: 0; border: 0; }
        .trust-item svg { width: 19px; height: 19px; color: #cba368; }
        .trust-item span { color: #e2e0dc; font-size: 11px; font-weight: 700; }
        .section { padding: 100px 0; }
        .section-heading { max-width: 680px; margin-bottom: 42px; }
        .section-kicker { display: inline-flex; align-items: center; gap: 9px; color: #c99682; font-size: 10px; font-weight: 850; letter-spacing: .18em; text-transform: uppercase; }
        .section-kicker::before { width: 23px; height: 1px; background: var(--red); content: ""; }
        .section-heading h2, .experience-copy h2, .review-heading h2, .visit-copy h2 { margin: 14px 0 13px; color: #f8f7f4; font-family: Georgia, "Times New Roman", serif; font-size: clamp(35px, 4.2vw, 50px); font-weight: 500; letter-spacing: -.045em; line-height: 1.04; }
        .section-heading p, .experience-copy > p, .review-heading > p, .visit-copy > p { color: #a9a7a2; font-size: 14px; line-height: 1.8; }
        .services-section { position: relative; color: var(--ink); background: var(--paper); }
        .services-section .section-kicker { color: #8e3339; }
        .services-section .section-heading h2 { color: var(--ink); }
        .services-section .section-heading p { color: #696763; }
        .service-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 14px; }
        .service-card { min-height: 260px; position: relative; grid-column: span 2; display: flex; flex-direction: column; align-items: flex-start; padding: 24px; border: 1px solid #dfdcd5; background: #fff; transition: transform .22s, box-shadow .22s; }
        .service-card:nth-child(4), .service-card:nth-child(5) { grid-column: span 3; }
        .service-card:hover { transform: translateY(-4px); box-shadow: 0 14px 32px rgba(28,24,18,.09); }
        .service-card-top { width: 100%; display: flex; align-items: center; justify-content: space-between; }
        .service-icon { width: 40px; height: 40px; display: grid; place-items: center; color: #fff; background: #19191c; }
        .service-icon svg { width: 18px; height: 18px; }
        .service-number { color: #aaa69f; font-family: Georgia, "Times New Roman", serif; font-size: 13px; }
        .service-card h3 { margin: 20px 0 8px; color: #19191c; font-family: Georgia, "Times New Roman", serif; font-size: 21px; font-weight: 600; }
        .service-card p { margin: 0; color: #6d6a65; font-size: 12px; line-height: 1.65; }
        .service-detail { margin-top: auto; padding-top: 20px; color: #776e60; font-size: 9px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }
        .service-link { display: inline-flex; align-items: center; gap: 6px; margin-top: 10px; color: #8e3339; font-size: 11px; font-weight: 850; }
        .service-link svg { width: 13px; height: 13px; }
        .service-note { display: flex; align-items: center; gap: 8px; margin-top: 20px; color: #696763; font-size: 11px; }
        .service-note svg { width: 15px; height: 15px; color: #8e3339; }
        .experience-section { position: relative; padding: 100px 0; }
        .experience-grid { display: grid; grid-template-columns: minmax(280px, .9fr) minmax(0, 1.1fr); align-items: center; gap: 74px; }
        .experience-visual { min-height: 450px; position: relative; }
        .experience-photo { position: absolute; inset: 0 24px 20px 0; overflow: hidden; background: #1e1b18; }
        .experience-photo img { width: 100%; height: 100%; display: block; object-fit: cover; filter: saturate(.65) brightness(.75); }
        .experience-outline { position: absolute; inset: 18px 0 0 18px; border: 1px solid rgba(201,150,130,.48); pointer-events: none; }
        .experience-stamp { position: absolute; right: -8px; bottom: 0; width: 118px; height: 118px; display: grid; place-content: center; border-radius: 50%; color: #151517; background: #d7c5a6; text-align: center; transform: rotate(8deg); }
        .experience-stamp svg { width: 21px; height: 21px; margin: 0 auto 6px; }
        .experience-stamp strong { font-size: 9px; letter-spacing: .1em; text-transform: uppercase; }
        .experience-copy h2 { max-width: 510px; }
        .experience-copy > p { max-width: 510px; }
        .experience-points { display: grid; grid-template-columns: repeat(2, 1fr); gap: 17px 22px; margin: 25px 0 28px; }
        .experience-point { display: flex; align-items: flex-start; gap: 10px; color: #e1dfda; font-size: 11px; font-weight: 650; line-height: 1.55; }
        .experience-point svg { flex: 0 0 auto; width: 15px; height: 15px; margin-top: 1px; color: #cba368; }
        .experience-copy .button { margin-top: 3px; }
        .reviews-section { padding: 85px 0 100px; border-block: 1px solid var(--line); background: #101012; }
        .review-heading { display: flex; align-items: end; justify-content: space-between; gap: 32px; margin-bottom: 34px; }
        .review-heading h2 { margin-bottom: 8px; }
        .review-rating { flex: 0 0 auto; display: flex; align-items: center; gap: 9px; padding-bottom: 10px; color: #e1c28f; font-size: 12px; font-weight: 750; }
        .review-rating svg { width: 18px; height: 18px; fill: currentColor; }
        .review-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .review-card { min-height: 230px; display: flex; flex-direction: column; padding: 27px; border: 1px solid rgba(255,255,255,.12); background: #171719; }
        .review-stars { display: flex; gap: 3px; color: #d4ad70; }
        .review-stars svg { width: 14px; height: 14px; fill: currentColor; }
        .review-card blockquote { margin: 19px 0 24px; color: #eeece8; font-family: Georgia, "Times New Roman", serif; font-size: 19px; line-height: 1.5; }
        .review-author { display: flex; align-items: center; gap: 10px; margin-top: auto; color: #fff; font-size: 11px; font-weight: 800; }
        .review-author-icon { width: 30px; height: 30px; display: grid; place-items: center; border: 1px solid rgba(255,255,255,.19); border-radius: 50%; color: #d2ae6c; }
        .review-author-icon svg { width: 14px; height: 14px; }
        .review-author small { display: block; margin-top: 3px; color: #8d8b86; font-size: 9px; font-weight: 600; }
        .request-section { padding: 96px 0; }
        .request-wrap { display: grid; grid-template-columns: .78fr 1.22fr; border: 1px solid rgba(255,255,255,.14); background: #111113; }
        .request-intro { position: relative; overflow: hidden; padding: 40px; background: linear-gradient(145deg, #72252d, #31181c); }
        .request-intro::after { position: absolute; right: -48px; bottom: -62px; width: 210px; height: 210px; border: 1px solid rgba(255,255,255,.12); border-radius: 50%; box-shadow: 0 0 0 24px rgba(255,255,255,.035), 0 0 0 48px rgba(255,255,255,.025); content: ""; }
        .request-intro .section-kicker { color: #f1d5c7; }
        .request-intro h2 { position: relative; z-index: 1; margin: 18px 0 13px; color: #fff; font-family: Georgia, "Times New Roman", serif; font-size: 38px; font-weight: 500; letter-spacing: -.04em; line-height: 1.08; }
        .request-intro p { position: relative; z-index: 1; max-width: 280px; color: rgba(255,255,255,.76); font-size: 12px; line-height: 1.75; }
        .request-phone { position: relative; z-index: 1; display: inline-flex; align-items: center; gap: 9px; margin-top: 30px; color: #fff; font-size: 13px; font-weight: 800; }
        .request-phone svg { width: 16px; height: 16px; }
        .request-form-area { padding: 36px 40px; }
        .request-form-area h3 { margin: 0 0 7px; color: #f5f3ef; font-size: 16px; }
        .form-intro { margin-bottom: 23px; color: #9f9d98; font-size: 11px; line-height: 1.6; }
        .request-form { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 15px; }
        .form-field { display: grid; gap: 7px; }
        .form-field.full { grid-column: 1 / -1; }
        .form-field label { color: #d5d2cd; font-size: 10px; font-weight: 750; }
        .form-field input, .form-field select { width: 100%; min-height: 43px; padding: 10px 12px; border: 1px solid rgba(255,255,255,.15); border-radius: 2px; outline: 0; color: #f4f1eb; background: #19191c; font-size: 11px; }
        .form-field input:focus, .form-field select:focus { border-color: #c99682; box-shadow: 0 0 0 2px rgba(201,150,130,.13); }
        .form-field input::placeholder { color: #777570; }
        .form-field select:invalid { color: #777570; }
        .form-submit { grid-column: 1 / -1; margin-top: 3px; }
        .form-success { padding: 20px; border: 1px solid rgba(145,183,135,.35); color: #e7f3e2; background: rgba(65,111,61,.14); }
        .form-success-icon { width: 34px; height: 34px; display: grid; place-items: center; margin-bottom: 12px; border-radius: 50%; color: #101510; background: #9fc293; }
        .form-success-icon svg { width: 18px; height: 18px; }
        .form-success strong { display: block; margin-bottom: 7px; font-size: 14px; }
        .form-success p { color: #bfd0b9; font-size: 11px; line-height: 1.65; }
        .visit-section { padding: 80px 0 100px; border-top: 1px solid var(--line); background: #101012; }
        .visit-grid { display: grid; grid-template-columns: .82fr 1.18fr; gap: 46px; align-items: stretch; }
        .visit-copy h2 { font-size: clamp(34px, 4vw, 46px); }
        .address-block { display: flex; align-items: flex-start; gap: 12px; margin: 23px 0 21px; }
        .address-block > svg { flex: 0 0 auto; width: 18px; height: 18px; margin-top: 2px; color: #c99682; }
        .address-block address { color: #f2f0ec; font-size: 13px; font-style: normal; font-weight: 700; line-height: 1.65; }
        .address-block address span { display: block; color: #999792; font-size: 10px; font-weight: 500; }
        .hours-card { margin: 24px 0 22px; border-top: 1px solid var(--line); }
        .hours-row { display: flex; justify-content: space-between; gap: 14px; padding: 9px 0; border-bottom: 1px solid var(--line); color: #cbc9c4; font-size: 11px; }
        .hours-row span:last-child { color: #f0eeea; font-weight: 700; text-align: right; }
        .hours-row .closed { color: #d99191 !important; }
        .walk-in-note { display: inline-flex; align-items: center; gap: 8px; margin-bottom: 20px; color: #d7c29c; font-size: 11px; font-weight: 800; }
        .walk-in-note svg { width: 15px; height: 15px; }
        .map-card { min-height: 465px; position: relative; overflow: hidden; border: 1px solid rgba(255,255,255,.12); background: #1e1e20; }
        .map-card iframe { width: 100%; height: 100%; min-height: 465px; display: block; border: 0; filter: grayscale(.75) invert(.9) contrast(.82); }
        .map-caption { position: absolute; right: 16px; bottom: 16px; left: 16px; display: flex; align-items: center; justify-content: space-between; gap: 14px; padding: 14px 16px; color: #151517; background: var(--paper); }
        .map-caption strong { display: block; font-size: 11px; }
        .map-caption span { display: block; margin-top: 4px; color: #6d6a65; font-size: 9px; }
        .map-caption .button { flex: 0 0 auto; min-height: 39px; padding: 0 12px; font-size: 10px; }
        .map-caption .button svg { width: 14px; height: 14px; }
        .site-footer { padding: 24px 0; border-top: 1px solid var(--line); }
        .footer-inner { display: flex; align-items: center; justify-content: space-between; gap: 22px; }
        .footer-brand { color: #ddd9d3; font-size: 10px; font-weight: 800; letter-spacing: .12em; }
        .footer-tagline { display: block; margin-top: 5px; color: #83817c; font-size: 9px; font-weight: 500; letter-spacing: 0; }
        .footer-links { display: flex; flex-wrap: wrap; align-items: center; justify-content: flex-end; gap: 10px 21px; color: #b4b1ac; font-size: 10px; font-weight: 700; }
        .footer-links a { display: inline-flex; align-items: center; gap: 6px; transition: color .2s; }
        .footer-links svg { width: 13px; height: 13px; }
        :focus-visible { outline: 2px solid #d8b072; outline-offset: 3px; }

        @media (max-width: 980px) {
          .desktop-nav { gap: 13px; }
          .desktop-nav a { font-size: 10px; }
          .header-actions .button { padding-inline: 12px; font-size: 10px; }
          .hero-grid { gap: 32px; }
          .hero-visual { min-height: 430px; }
          .experience-grid { gap: 42px; }
          .request-intro { padding: 32px; }
          .request-form-area { padding: 32px; }
        }
        @media (max-width: 760px) {
          :root { scroll-padding-top: 76px; }
          .site-container { width: min(100% - 36px, 560px); }
          .notice-strip { min-height: 35px; padding-inline: 10px; font-size: 9px; letter-spacing: .01em; }
          .header-inner { min-height: 68px; gap: 10px; }
          .brand-mark { width: 38px; height: 38px; }
          .brand-name { font-size: 10px; }
          .brand-name small { font-size: 8px; }
          .desktop-nav { display: none; }
          .header-actions { gap: 7px; }
          .header-actions .button { min-height: 39px; padding-inline: 11px; font-size: 10px; }
          .header-actions .button svg { width: 14px; height: 14px; }
          .header-actions .button-outline { display: none; }
          .menu-toggle { display: grid; flex: 0 0 auto; }
          .mobile-nav { position: absolute; top: 100%; right: 0; left: 0; display: grid; gap: 0; padding: 8px 18px 14px; border-bottom: 1px solid var(--line); background: #0d0d0f; box-shadow: 0 15px 30px rgba(0,0,0,.35); }
          .mobile-nav[hidden] { display: none; }
          .mobile-nav a { padding: 13px 4px; border-bottom: 1px solid rgba(255,255,255,.08); color: #e1dfda; font-size: 12px; font-weight: 700; }
          .mobile-nav a:last-child { border: 0; }
          .hero { padding: 52px 0 46px; }
          .hero-grid { grid-template-columns: 1fr; gap: 36px; }
          .hero h1 { max-width: 580px; margin-top: 17px; font-size: clamp(43px, 11vw, 62px); }
          .hero-copy { font-size: 13px; }
          .hero-actions { margin-top: 23px; }
          .hero-actions .button { flex: 1 1 auto; }
          .hero-badges { gap: 10px 14px; margin-top: 22px; }
          .hero-badge { font-size: 9px; }
          .scroll-cue { display: none; }
          .hero-visual { min-height: 380px; }
          .hero-photo { inset: 0 17px 17px 0; }
          .rating-card { right: 0; }
          .trust-inner { min-height: 76px; grid-template-columns: repeat(3, 1fr); }
          .trust-item { gap: 7px; padding-inline: 8px; }
          .trust-item:first-child { padding-left: 0; }
          .trust-item:last-child { padding-right: 0; }
          .trust-item svg { width: 16px; height: 16px; }
          .trust-item span { font-size: 9px; line-height: 1.35; }
          .section { padding: 72px 0; }
          .section-heading { margin-bottom: 30px; }
          .section-heading p, .experience-copy > p, .review-heading > p, .visit-copy > p { font-size: 12px; }
          .service-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
          .service-card, .service-card:nth-child(4), .service-card:nth-child(5) { min-height: 265px; grid-column: span 1; padding: 17px; }
          .service-card:last-child { grid-column: 1 / -1; min-height: 225px; }
          .service-card h3 { font-size: 18px; }
          .service-card p { font-size: 11px; }
          .service-detail { font-size: 8px; letter-spacing: .04em; }
          .experience-section { padding: 72px 0; }
          .experience-grid { grid-template-columns: 1fr; gap: 36px; }
          .experience-visual { min-height: 390px; }
          .experience-copy h2 { font-size: 42px; }
          .reviews-section { padding: 70px 0; }
          .review-heading { align-items: flex-start; flex-direction: column; gap: 5px; margin-bottom: 25px; }
          .review-rating { padding: 0; }
          .review-grid { grid-template-columns: 1fr; gap: 11px; }
          .review-card { min-height: 0; padding: 22px; }
          .review-card blockquote { margin: 15px 0 20px; font-size: 17px; }
          .request-section { padding: 68px 0; }
          .request-wrap { grid-template-columns: 1fr; }
          .request-intro { padding: 29px 26px; }
          .request-intro h2 { max-width: 380px; font-size: 34px; }
          .request-intro p { max-width: 390px; }
          .request-phone { margin-top: 19px; }
          .request-form-area { padding: 27px 24px; }
          .visit-section { padding: 68px 0; }
          .visit-grid { grid-template-columns: 1fr; gap: 30px; }
          .map-card, .map-card iframe { min-height: 350px; }
          .footer-inner { align-items: flex-start; flex-direction: column; gap: 17px; }
          .footer-links { justify-content: flex-start; }
        }
        @media (max-width: 390px) {
          .site-container { width: calc(100% - 28px); }
          .brand { gap: 8px; }
          .brand-mark { width: 34px; height: 34px; }
          .brand-name { font-size: 8px; }
          .brand-name small { font-size: 7px; }
          .header-actions .button { min-height: 36px; padding-inline: 8px; font-size: 9px; }
          .menu-toggle { width: 36px; height: 36px; }
          .trust-item { flex-direction: column; text-align: center; }
          .trust-item span { font-size: 8px; }
          .service-card, .service-card:nth-child(4), .service-card:nth-child(5) { padding: 14px; }
          .service-card h3 { font-size: 16px; }
          .experience-stamp { right: -6px; }
          .request-form { grid-template-columns: 1fr; }
          .form-field.full, .form-submit { grid-column: auto; }
          .map-caption { right: 9px; bottom: 9px; left: 9px; padding: 11px; }
          .map-caption .button { gap: 5px; padding-inline: 8px; font-size: 9px; }
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { scroll-behavior: auto !important; transition-duration: .01ms !important; }
        }
      `}</style>

      <div className="shop-site">
        <div className="notice-strip">
          💈&nbsp; Walk-Ins Always Welcome &nbsp;•&nbsp; 1 Executive Center Dr, Unit 108, New Milford &nbsp;•&nbsp;{' '}
          <a href={phoneNumber}>(203) 994-0108</a>
        </div>

        <header className="site-header">
          <div className="site-container header-inner">
            <a className="brand" href="#home" aria-label="Family Barber Shop home" onClick={closeMenu}>
              <span className="brand-mark"><Scissors aria-hidden="true" /></span>
              <span className="brand-name">
                FAMILY BARBER SHOP
                <small>HAIRCUT &amp; SHAVE</small>
              </span>
            </a>
            <nav className="desktop-nav" aria-label="Main navigation">
              <a href="#services">Services &amp; Pricing</a>
              <a href="#alexandra">About Alexandra</a>
              <a href="#reviews">Reviews</a>
              <a href="#visit">Hours &amp; Location</a>
            </nav>
            <div className="header-actions">
              <a className="button button-outline" href="#request">Walk-In Info / Book Chair</a>
              <a className="button button-light" href={phoneNumber}><Phone aria-hidden="true" /> Call Now</a>
              <button
                className="menu-toggle"
                type="button"
                aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={menuOpen}
                aria-controls="mobile-navigation"
                onClick={() => setMenuOpen((open) => !open)}
              >
                {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
              </button>
            </div>
            <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation" hidden={!menuOpen}>
              <a href="#services" onClick={closeMenu}>Services &amp; Pricing</a>
              <a href="#alexandra" onClick={closeMenu}>About Alexandra</a>
              <a href="#reviews" onClick={closeMenu}>Reviews</a>
              <a href="#visit" onClick={closeMenu}>Hours &amp; Location</a>
              <a href="#request" onClick={closeMenu}>Walk-In Info / Book Chair</a>
            </nav>
          </div>
        </header>

        <main>
          <section className="hero" id="home">
            <div className="site-container hero-grid">
              <div className="hero-content">
                <span className="eyebrow">New Milford, Connecticut · Est. for the community</span>
                <h1>Classic Cuts.<br />Straight Razor Shaves.<br /><em>Authentic Hometown Hospitality.</em></h1>
                <p className="hero-copy">
                  New Milford&apos;s premier family-friendly barbershop. From first haircuts to precision fades and traditional hot-towel shaves by Alexandra.
                </p>
                <div className="hero-actions">
                  <a className="button button-light" href="#services">View Services &amp; Menu <ArrowRight aria-hidden="true" /></a>
                  <a className="button button-outline" href={phoneNumber}><Phone aria-hidden="true" /> Call (203) 994-0108</a>
                </div>
                <div className="hero-badges" aria-label="Shop highlights">
                  <span className="hero-badge"><Star aria-hidden="true" /> 100% 5-Star Facebook Rated</span>
                  <span className="hero-badge"><UserCheck aria-hidden="true" /> Walk-Ins Welcome Daily</span>
                  <span className="hero-badge"><UsersRound aria-hidden="true" /> Family &amp; Kid Friendly</span>
                </div>
                <a className="scroll-cue" href="#services"><ArrowDown aria-hidden="true" /> Find your next favorite cut</a>
              </div>
              <div className="hero-visual" aria-label="Inside a neighborhood barbershop">
                <div className="hero-photo">
                  <img
                    src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1100&q=85"
                    alt="A barber at work in a warmly lit neighborhood barbershop"
                    fetchPriority="high"
                  />
                  <div className="hero-photo-caption">
                    <div>
                      <strong>Your neighborhood chair.</strong>
                      <span>Good cuts. Good company.</span>
                    </div>
                  </div>
                </div>
                <span className="pole-accent" aria-hidden="true" />
                <div className="rating-card">
                  <span className="rating-icon"><Star aria-hidden="true" /></span>
                  <span><strong>Every cut, personal.</strong><span>Rated 5 stars by the community</span></span>
                </div>
              </div>
            </div>
          </section>

          <div className="trust-band">
            <div className="site-container trust-inner">
              <div className="trust-item"><Star aria-hidden="true" /><span>100% 5-Star Customer Reviews</span></div>
              <div className="trust-item"><UserCheck aria-hidden="true" /><span>Walk-Ins Always Welcome</span></div>
              <div className="trust-item"><ShieldCheck aria-hidden="true" /><span>Classic Craft, Every Generation</span></div>
            </div>
          </div>

          <section className="section services-section" id="services">
            <div className="site-container">
              <div className="section-heading">
                <span className="section-kicker">The grooming menu</span>
                <h2>Good grooming.<br />No fuss, just craft.</h2>
                <p>From a quick tidy-up to a proper hot-towel shave, every service gets the same care and attention. Ask us about pricing when you call or stop by.</p>
              </div>
              <div className="service-grid">
                {services.map(({ number, name, description, detail, icon: Icon }) => (
                  <article className="service-card" key={number}>
                    <div className="service-card-top">
                      <span className="service-icon"><Icon aria-hidden="true" /></span>
                      <span className="service-number">{number} / 05</span>
                    </div>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <span className="service-detail">{detail}</span>
                    <a className="service-link" href={phoneNumber}>Call for pricing <ArrowRight aria-hidden="true" /></a>
                  </article>
                ))}
              </div>
              <p className="service-note"><Sparkles aria-hidden="true" /> Senior cuts and custom styles are always welcome—just ask Alexandra.</p>
            </div>
          </section>

          <section className="experience-section" id="alexandra">
            <div className="site-container experience-grid">
              <div className="experience-visual">
                <div className="experience-photo">
                  <img
                    src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=950&q=85"
                    alt="A close-up of a barber carefully shaping a client's haircut"
                    loading="lazy"
                  />
                </div>
                <div className="experience-outline" aria-hidden="true" />
                <div className="experience-stamp"><Scissors aria-hidden="true" /><strong>Crafted<br />with care</strong></div>
              </div>
              <div className="experience-copy">
                <span className="section-kicker">Meet your barber</span>
                <h2>A great cut starts with feeling at home.</h2>
                <p>
                  Alexandra brings precision, patience, and a personal touch to every chair. Whether it&apos;s your first haircut, a clean fade, or a restorative hot-towel shave, she makes time for the details—and makes everyone feel welcome.
                </p>
                <div className="experience-points">
                  <div className="experience-point"><Check aria-hidden="true" /> Precision cuts &amp; clean fades</div>
                  <div className="experience-point"><Check aria-hidden="true" /> Classic straight-razor work</div>
                  <div className="experience-point"><Check aria-hidden="true" /> Relaxing hot-towel treatments</div>
                  <div className="experience-point"><Check aria-hidden="true" /> Warm hospitality, all generations</div>
                </div>
                <a className="button button-light" href="#request">Come take a seat <ArrowRight aria-hidden="true" /></a>
              </div>
            </div>
          </section>

          <section className="reviews-section" id="reviews">
            <div className="site-container">
              <div className="review-heading">
                <div>
                  <span className="section-kicker">Kind words from the chair</span>
                  <h2>Don&apos;t just take our word for it.</h2>
                  <p>Real feedback from customers who sat in Alexandra&apos;s chair.</p>
                </div>
                <div className="review-rating"><Star aria-hidden="true" /> 100% 5-star customer reviews</div>
              </div>
              <div className="review-grid">
                <article className="review-card">
                  <div className="review-stars" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }, (_, index) => <Star key={index} aria-hidden="true" />)}
                  </div>
                  <blockquote>“Fantastic haircut and beard trim today. Alexandra did a great job and could not have been more pleasant”</blockquote>
                  <div className="review-author">
                    <span className="review-author-icon"><UserCheck aria-hidden="true" /></span>
                    <span>Christopher Thompson<small>Facebook review</small></span>
                  </div>
                </article>
                <article className="review-card">
                  <div className="review-stars" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }, (_, index) => <Star key={index} aria-hidden="true" />)}
                  </div>
                  <blockquote>“Alexandra is a diamond. Late evening walk-in, haircut and straight razor shave. Gracious and skilled”</blockquote>
                  <div className="review-author">
                    <span className="review-author-icon"><UserCheck aria-hidden="true" /></span>
                    <span>Richard Allison<small>Facebook review</small></span>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section className="request-section" id="request">
            <div className="site-container">
              <div className="request-wrap">
                <div className="request-intro">
                  <span className="section-kicker">Your chair is waiting</span>
                  <h2>Let us know when you&apos;re stopping by.</h2>
                  <p>Walk-ins are always welcome. Prefer to plan ahead? Share a few details and Alexandra will confirm your slot by call or text.</p>
                  <a className="request-phone" href={phoneNumber}><Phone aria-hidden="true" /> (203) 994-0108</a>
                </div>
                <div className="request-form-area">
                  <h3>Quick chair request</h3>
                  <p className="form-intro">Tell us what you&apos;re looking for and when you&apos;d like to visit.</p>
                  {requestSent ? (
                    <div className="form-success" role="status" aria-live="polite">
                      <span className="form-success-icon"><Check aria-hidden="true" /></span>
                      <strong>Request noted!</strong>
                      <p>Walk-ins are always welcomed, or Alexandra will confirm your slot via call/text.</p>
                    </div>
                  ) : (
                    <form className="request-form" onSubmit={handleRequestSubmit}>
                      <div className="form-field">
                        <label htmlFor="request-name">Name</label>
                        <input id="request-name" name="name" type="text" placeholder="Your name" autoComplete="name" required />
                      </div>
                      <div className="form-field">
                        <label htmlFor="request-phone">Phone</label>
                        <input id="request-phone" name="phone" type="tel" placeholder="(203) 555-0123" autoComplete="tel" required />
                      </div>
                      <div className="form-field full">
                        <label htmlFor="request-service">Service requested</label>
                        <select id="request-service" name="service" defaultValue="" required>
                          <option value="" disabled>Select a service</option>
                          <option value="haircut">Haircut</option>
                          <option value="beard">Beard trim</option>
                          <option value="straight-razor">Straight razor shave</option>
                          <option value="kids-cut">Kids cut</option>
                        </select>
                      </div>
                      <div className="form-field">
                        <label htmlFor="request-day">Preferred day</label>
                        <input id="request-day" name="day" type="date" required />
                      </div>
                      <div className="form-field">
                        <label htmlFor="request-time">Approximate time</label>
                        <input id="request-time" name="time" type="time" required />
                      </div>
                      <button className="button button-red form-submit" type="submit">Send chair request <ArrowRight aria-hidden="true" /></button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </section>

          <section className="visit-section" id="visit">
            <div className="site-container visit-grid">
              <div className="visit-copy">
                <span className="section-kicker">Come on in</span>
                <h2>Right here in New Milford.</h2>
                <p>Easy to find, easy to visit. Stop in for a walk-in or give Alexandra a call before you head over.</p>
                <div className="address-block">
                  <MapPin aria-hidden="true" />
                  <address>{address}<span>Executive Center · Unit 108</span></address>
                </div>
                <div className="walk-in-note"><Clock3 aria-hidden="true" /> Walk-ins welcome during open hours</div>
                <div className="hours-card" aria-label="Shop hours">
                  {hours.map(([day, time]) => (
                    <div className="hours-row" key={day}>
                      <span>{day}</span>
                      <span className={time === 'Closed' ? 'closed' : undefined}>{time}</span>
                    </div>
                  ))}
                </div>
                <a className="button button-light" href={directionsUrl} target="_blank" rel="noreferrer">
                  <MapPin aria-hidden="true" /> Directions via Google Maps <ArrowRight aria-hidden="true" />
                </a>
              </div>
              <div className="map-card">
                <iframe
                  src={mapEmbedUrl}
                  title="Map showing Family Barber Shop at 1 Executive Center Drive in New Milford, Connecticut"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="map-caption">
                  <div><strong>Family Barber Shop</strong><span>1 Executive Center Dr, Unit 108 · New Milford, CT</span></div>
                  <a className="button button-red" href={directionsUrl} target="_blank" rel="noreferrer"><MapPin aria-hidden="true" /> Get directions</a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <div className="site-container footer-inner">
            <div className="footer-brand">
              FAMILY BARBER SHOP
              <span className="footer-tagline">© {new Date().getFullYear()} Family Barber Shop · Proudly serving New Milford &amp; Litchfield County</span>
            </div>
            <div className="footer-links">
              <a href="https://www.facebook.com/search/pages/?q=Family%20Barber%20Shop%20New%20Milford%20CT" target="_blank" rel="noreferrer"><ExternalLink aria-hidden="true" /> Facebook</a>
              <a href={phoneNumber}><Phone aria-hidden="true" /> (203) 994-0108</a>
              <a href={directionsUrl} target="_blank" rel="noreferrer"><MapPin aria-hidden="true" /> Get directions</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
